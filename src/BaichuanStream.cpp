#include "BaichuanStream.h"

#include <list>

#include <QCoreApplication>
#include <QElapsedTimer>
#include <QHash>
#include <QTcpServer>
#include <QTcpSocket>

#include "Baichuan.h"
#include "Log.h"
#include "TsMuxer.h"

namespace leolink {

namespace {
/// How long to wait for a reader to open the loopback port before giving up,
/// and how long the stream goes on with nobody reading it before it closes.
constexpr int kAcceptTimeoutMs = 20000;
/// One read from the camera. Short enough that a stopped stream is noticed
/// quickly, long enough not to spin.
constexpr int kReadTimeoutMs = 5000;
/// How long to wait for the camera to say what it is sending before the player
/// is pointed at the port anyway. The rate it announces decides how fast the
/// player will play, and a player started before the camera has said is a
/// player playing at a guess.
constexpr int kAnnounceGraceMs = 2000;
/// The loopback socket is kept deliberately small. It is a live stream: a
/// large send buffer does not smooth anything, it only stores a backlog that
/// is watched later as a delay — and it hides that backlog from the only place
/// that can measure it. What the kernel has not taken is what tells us how far
/// behind the player is, so the less it holds, the truer that reading: 64 KiB
/// is about a tenth of a second on a main stream, which is the error in it.
constexpr int kSendBufferBytes = 64 * 1024;
/// How far behind the player may fall before pictures are given up.
///
/// In time rather than in bytes, which is what this used to be: 256 KiB is a
/// fifth of a second on a 2560x1440 main stream and four seconds on a sub
/// stream, so one number meant two entirely different things depending on which
/// camera it was applied to. What a viewer minds is the delay, and that is now
/// what is bounded.
///
/// A second, and the delay a viewer sees is a little more than that: what the
/// two kernels and the player's own buffer hold cannot be seen from here, and
/// adds itself to this. Generous on purpose all the same — a player only ever
/// reads a little ahead of what it is showing, so every hiccup on the way here,
/// and a camera on Wi-Fi delivers in bursts, leaves surplus standing that
/// nothing but this bound will take out again. Set tight it fires constantly;
/// set here it fires when the delay has actually become worth the pictures it
/// costs to remove.
constexpr qint64 kBacklogBudgetMs = 1000;
/// ... and how little it must be behind to count as caught up again. Not zero:
/// the socket is never quite empty on a stream that never stops.
constexpr qint64 kBacklogClearedMs = 250;
/// A ceiling on what may be held for a player whatever the clock says, because
/// the timings cannot be trusted before the first few pictures have arrived.
constexpr int kMaxQueuedBytes = 4 * 1024 * 1024;
/// How often a picture is expected before the stream has said otherwise. The
/// real spacing is measured as it goes; this is only somewhere to start.
constexpr qint64 kAssumedIntervalUs = 40000;
/// A step larger than this in the camera's clock is not a slow frame rate but a
/// break in it: a camera that stalled, restarted, or wrapped its counter. Five
/// seconds is far slower than the slowest rate any of these cameras offers, so
/// nothing legitimate is caught by it.
constexpr qint64 kTimelineBreakUs = 5000000;
/// The first few unrecognised blocks are worth a line each. After that they
/// are counted and reported once a minute — a firmware that has one such block
/// per frame produced nineteen warnings a second and a log that was 99 per
/// cent this one message.
constexpr int kUnknownBlocksLogged = 5;
constexpr qint64 kUnknownSummaryMs = 60000;
} // namespace

namespace {

/// The shared streams, by camera and stream type. Touched on the interface
/// thread only.
QHash<QString, BaichuanStream *> &registry()
{
    static QHash<QString, BaichuanStream *> streams;
    return streams;
}

QString registryKey(const CameraConfig &camera)
{
    return QStringLiteral("%1|%2|%3|%4|%5")
        .arg(camera.host).arg(camera.baichuanPort).arg(camera.user)
        .arg(camera.channel).arg(camera.stream);
}

} // namespace

BaichuanStream *BaichuanStream::shared(const CameraConfig &camera)
{
    const QString key = registryKey(camera);
    BaichuanStream *stream = registry().value(key);
    if (stream && !stream->isEnding())
        return stream;

    // One that is ending stays where it is until its thread has finished, but
    // is no longer what this camera is reached through.
    stream = new BaichuanStream(QCoreApplication::instance());
    registry().insert(key, stream);
    connect(stream, &QThread::finished, stream, [stream, key] {
        if (registry().value(key) == stream)
            registry().remove(key);
        stream->deleteLater();
    });
    stream->start(camera);
    return stream;
}

QString BaichuanStream::openUrl(const CameraConfig &camera)
{
    if (camera.effectiveTransport() == QLatin1String("baichuan"))
        return shared(camera)->url();
    return camera.streamUrl();
}

void BaichuanStream::shutdownAll()
{
    const auto streams = registry().values();
    registry().clear();
    for (BaichuanStream *stream : streams)
        stream->shutdown();
}

BaichuanStream::BaichuanStream(QObject *parent) : QThread(parent) {}

BaichuanStream::~BaichuanStream()
{
    shutdown();
}

void BaichuanStream::start(const CameraConfig &camera)
{
    m_camera = camera;
    // Asked for here, on the caller's thread, and carried in.
    m_secret = camera.secret();
    m_stop = false;
    QThread::start();
    // Opening a loopback port takes no time at all; this only waits for the
    // thread to get that far.
    m_listening.tryAcquire(1, 5000);
}

QString BaichuanStream::url() const
{
    QMutexLocker lock(&m_urlLock);
    return m_url;
}

void BaichuanStream::shutdown()
{
    m_stop = true;
    if (isRunning() && !wait(3000)) {
        // The protocol client blocks in a socket read with a five second
        // timeout, so it may still be in one. Ending the thread outright is
        // acceptable here: everything it owns lives on its own stack and the
        // camera drops the connection by itself.
        terminate();
        wait(1000);
    }
}

void BaichuanStream::run()
{
    // Everything below lives on this thread's stack, which is what keeps the
    // ownership rules simple: nothing here is touched from the interface.
    QTcpServer server;
    if (!server.listen(QHostAddress::LocalHost, 0)) {
        m_ending = true;
        m_listening.release();
        emit failed(tr("Cannot open a local port: %1").arg(server.errorString()));
        return;
    }
    {
        QMutexLocker lock(&m_urlLock);
        m_url = QStringLiteral("tcp://127.0.0.1:%1").arg(server.serverPort());
    }
    m_listening.release();
    LEO_DEBUG(Baichuan, m_camera.label(),
              QStringLiteral("Listening on %1, not yet offered to the player")
                  .arg(url()));

    BaichuanClient client(m_camera.host, m_camera.user, m_secret,
                          m_camera.baichuanPort);
    if (!client.login()) {
        LEO_WARN(Baichuan, m_camera.label(),
                 QStringLiteral("Login failed: %1").arg(client.lastError()));
        m_ending = true;
        emit failed(tr("Baichuan login failed: %1").arg(client.lastError()));
        return;
    }
    LEO_INFO(Baichuan, m_camera.label(), QStringLiteral("Logged in"));

    if (!client.requestVideo(m_camera.channel,
                             m_camera.stream == QLatin1String("main"))) {
        LEO_WARN(Baichuan, m_camera.label(),
                 QStringLiteral("Video request refused: %1").arg(client.lastError()));
        m_ending = true;
        emit failed(tr("The camera refused to send video: %1")
                        .arg(client.lastError()));
        return;
    }

    BcMediaParser parser;
    bool announced = false;    ///< has the player been told where to connect
    QByteArray primer;         ///< the last key frame, to open a new connection with
    qint64 primerPts = 0;
    qint64 sent = 0;
    int frames = 0;
    int dropped = 0;
    qint64 recovered = 0;      ///< time taken out of the timelines, in all
    int announcedFps = 0;
    int readers = 0;           ///< connections served, in all

    /// A write, and when it was made: how much had been handed to the socket by
    /// then. Comparing that with what the socket still holds says which write
    /// the reader has got to, and therefore how long it has been waiting.
    struct Handover {
        qint64 upTo;
        qint64 at;
    };

    /// One connection reading the stream. Each has its own pacing, so one
    /// that falls behind — a player on a busy machine — gives up pictures of
    /// its own without taking them from a recording beside it. Each is
    /// wrapped by a muxer of its own, since the timeline it is handed is its
    /// own too.
    struct Reader {
        QTcpSocket *socket{nullptr};
        TsMuxer muxer;
        QString codec;             ///< what the muxer has been told
        bool started{false};       ///< has it been given a key frame yet
        bool dropping{false};      ///< shedding frames until it catches up
        int droppedThisTime{0};    ///< ... and of those, in the episode under way

        // ── the timeline handed to it ───────────────────────────────────────
        qint64 skewUs{0};              ///< time taken out of it, in total
        qint64 lastCameraPts{-1};      ///< camera clock of the last picture sent
        qint64 intervalUs{kAssumedIntervalUs};
        bool closeSeam{false};         ///< the next picture follows on from the last

        // ── what it has not taken yet ───────────────────────────────────────
        QList<Handover> handovers;
        qint64 handedOver{0};
    };
    std::list<Reader> active;

    int unknownBlocks = 0;
    int unknownLogged = 0;
    QElapsedTimer unknownWindow;
    unknownWindow.start();
    QElapsedTimer since;
    since.start();
    /// Never restarted, unlike `since`: everything above is timed against it.
    QElapsedTimer clock;
    clock.start();
    /// Since the last reader went. Nobody reading for long enough ends the
    /// stream: it is shared, and no one person stops it.
    QElapsedTimer unread;
    unread.start();

    // Every write goes through here, so that what a reader has taken can be
    // told from what it has not.
    auto hand = [&](Reader &r, const QByteArray &data) {
        r.socket->write(data);
        r.handedOver += data.size();
        r.handovers.append({r.handedOver, clock.elapsed()});
    };

    /// How long the oldest thing a reader has not taken has been waiting —
    /// which is how far behind it is. The socket's own buffer cannot be seen
    /// from here and counts as taken, which is why it is kept small.
    auto behindMs = [&](Reader &r) -> qint64 {
        const qint64 taken = r.handedOver - r.socket->bytesToWrite();
        while (!r.handovers.isEmpty() && r.handovers.constFirst().upTo <= taken)
            r.handovers.removeFirst();
        return r.handovers.isEmpty() ? 0 : clock.elapsed() - r.handovers.constFirst().at;
    };

    parser.onFormat = [&](int width, int height, int fps) {
        announcedFps = fps;
        m_fps = fps;
        LEO_INFO(Baichuan, m_camera.label(),
                 QStringLiteral("Camera announces %1x%2 @ %3 fps")
                     .arg(width).arg(height).arg(fps));
        emit formatKnown(width, height, fps);
    };

    parser.onUnknown = [&](const QString &magic) {
        // Not fatal — the parser resynchronises — but worth recording: an
        // unfamiliar block type is the first sign of a firmware this was not
        // written against. Said in full a few times, then counted: on a camera
        // that has one per frame, a line each buries everything else in the
        // log and tells you nothing the first five did not.
        ++unknownBlocks;
        if (unknownLogged < kUnknownBlocksLogged) {
            ++unknownLogged;
            LEO_WARN(Baichuan, m_camera.label(),
                     QStringLiteral("Unrecognised block '%1' in the stream")
                         .arg(magic));
            if (unknownLogged == kUnknownBlocksLogged) {
                LEO_WARN(Baichuan, m_camera.label(),
                         QStringLiteral("Further unrecognised blocks will be "
                                        "counted rather than listed"));
            }
        }
    };

    /// One picture to one reader.
    auto deliver = [&](Reader &r, const QByteArray &frame, bool keyFrame,
                       qint64 ptsUs) {
        // Start on a key frame. Handing a decoder a run of predicted frames
        // with no reference produces exactly the field of green blocks this
        // project spent a long time chasing for other reasons.
        if (!r.started) {
            if (!keyFrame)
                return;
            r.started = true;
        }

        // How far behind the reader is. The camera sends at its own rate
        // regardless of what the reader does with it, so without a bound the
        // difference is stored rather than resolved — a delay that grows for as
        // long as the window is open and never comes back.
        const qint64 behind = behindMs(r);
        if (r.dropping) {
            // Only a key frame can start a picture again, and only once the
            // backlog has actually drained.
            if (!keyFrame || behind > kBacklogClearedMs) {
                ++dropped;
                ++r.droppedThisTime;
                return;
            }
            r.dropping = false;
            r.closeSeam = true;
        } else if (behind > kBacklogBudgetMs ||
                   r.socket->bytesToWrite() > kMaxQueuedBytes) {
            r.dropping = true;
            ++dropped;
            r.droppedThisTime = 1;
            LEO_WARN(Baichuan, m_camera.label(),
                     QStringLiteral("A reader is %1 s behind — giving up "
                                    "pictures until it catches up")
                         .arg(behind / 1000.0, 0, 'f', 1));
            return;
        }

        // The camera's clock is passed on untouched, except across a place where
        // pictures are missing. A gap left in the timeline is a gap the player
        // sits out: it holds the last picture for exactly as long as the ones
        // given up would have taken, and the delay that giving them up was meant
        // to remove survives it completely. Closing the seam — declaring the
        // next picture due one interval after the last one sent — is what turns
        // shedding back into something that recovers delay rather than merely
        // freeing memory. The same arithmetic covers a camera whose clock jumps
        // or starts again, which would otherwise be handed to the player as time
        // running backwards.
        if (r.lastCameraPts >= 0) {
            const qint64 step = ptsUs - r.lastCameraPts;
            if (r.closeSeam || step <= 0 || step > kTimelineBreakUs) {
                r.skewUs += step - r.intervalUs;
                recovered += step - r.intervalUs;
                if (r.closeSeam)
                    LEO_INFO(Baichuan, m_camera.label(),
                             QStringLiteral("Reader caught up — %1 picture(s) "
                                            "given up, %2 s of delay recovered")
                                 .arg(r.droppedThisTime)
                                 .arg((step - r.intervalUs) / 1000000.0, 0, 'f', 1));
            } else {
                // What this stream calls a frame interval, smoothed: cameras
                // deliver a little unevenly, and this decides what "one picture
                // later" means above.
                r.intervalUs = (r.intervalUs * 3 + step) / 4;
            }
        }
        r.lastCameraPts = ptsUs;
        r.closeSeam = false;

        // The camera names its codec in the first frame it sends, which is
        // before the first key frame and therefore before any tables go out.
        if (!parser.videoCodec().isEmpty() && parser.videoCodec() != r.codec) {
            r.codec = parser.videoCodec();
            r.muxer.setCodec(r.codec);
        }

        const QByteArray wrapped = r.muxer.frame(frame, keyFrame, ptsUs - r.skewUs);
        hand(r, wrapped);
        sent += wrapped.size();
    };

    parser.onVideo = [&](const QByteArray &frame, bool keyFrame, qint64 ptsUs) {
        // Kept whether or not anyone is listening: a reader that connects, or
        // reconnects, can then be handed a picture straight away instead of
        // waiting out the rest of the group of pictures.
        if (keyFrame) {
            primer = frame;
            primerPts = ptsUs;
        }
        ++frames;
        for (Reader &r : active) {
            if (r.socket->state() == QAbstractSocket::ConnectedState)
                deliver(r, frame, keyFrame, ptsUs);
        }
    };

    QByteArray chunk;
    while (!m_stop) {
        // Readers come and go — mpv reloads on any hiccup, a recording ends —
        // and each new one is served on the same port. Ending the thread
        // instead meant a new port every time, a fresh login on a camera that
        // was still holding the last one, and a retry loop that never
        // converged.
        //
        // waitForNewConnection() as well as hasPendingConnections(): this
        // thread runs no event loop, so nothing delivers a connection to the
        // server by itself, and a zero timeout makes it a poll of the
        // listening socket. It takes every connection waiting there but says
        // so only once — two readers that arrived together, as a recording and
        // motion detection started at once do, left the second one in the
        // server's queue, never served.
        while (server.hasPendingConnections() || server.waitForNewConnection(0)) {
            QTcpSocket *socket = server.nextPendingConnection();
            if (!socket)
                break;
            // Latency matters more than packing here: a camera frame is worth
            // sending the moment it is complete.
            socket->setSocketOption(QAbstractSocket::LowDelayOption, 1);
            socket->setSocketOption(QAbstractSocket::SendBufferSizeSocketOption,
                                    kSendBufferBytes);
            Reader &r = active.emplace_back();
            r.socket = socket;
            ++readers;
            // Whoever has just connected needs the tables before anything else
            // means anything, and then a picture to start from. Not before the
            // camera has named its codec, though: the tables would say H.264
            // for an H.265 camera, and a recording copying the stream keeps the
            // first codec it is told. Every key frame carries the tables, so a
            // reader that came early gets the right ones with its first picture.
            if (!parser.videoCodec().isEmpty()) {
                r.codec = parser.videoCodec();
                r.muxer.setCodec(r.codec);
                hand(r, r.muxer.tables());
            }
            if (!primer.isEmpty()) {
                hand(r, r.muxer.frame(primer, true, primerPts));
                r.lastCameraPts = primerPts;
                r.started = true;
            }
            LEO_DEBUG(Baichuan, m_camera.label(),
                      QStringLiteral("Reader connected (%1 now)%2")
                          .arg(active.size())
                          .arg(primer.isEmpty()
                                   ? QString()
                                   : QStringLiteral(", opened on a stored "
                                                    "key frame")));
        }

        // Readers that have gone.
        for (auto it = active.begin(); it != active.end();) {
            if (it->socket->state() != QAbstractSocket::ConnectedState) {
                it->socket->abort();
                delete it->socket;
                it = active.erase(it);
                LEO_DEBUG(Baichuan, m_camera.label(),
                          QStringLiteral("Reader gone (%1 left)").arg(active.size()));
            } else {
                ++it;
            }
        }
        if (!active.empty())
            unread.restart();

        if (announced && active.empty() && unread.elapsed() > kAcceptTimeoutMs) {
            if (readers == 0) {
                LEO_WARN(Baichuan, m_camera.label(),
                         QStringLiteral("The player never opened %1").arg(url()));
                m_ending = true;
                emit failed(tr("The player did not connect."));
            } else {
                LEO_DEBUG(Baichuan, m_camera.label(),
                          QStringLiteral("Nobody reading for %1 s — closing")
                              .arg(kAcceptTimeoutMs / 1000));
            }
            break;
        }

        chunk.clear();
        if (!client.readMediaChunk(chunk, kReadTimeoutMs)) {
            LEO_WARN(Baichuan, m_camera.label(),
                     QStringLiteral("Stream ended after %1 frames (%2 KiB): %3")
                         .arg(frames).arg(sent / 1024).arg(client.lastError()));
            m_ending = true;
            emit failed(tr("The camera stopped sending."));
            break;
        }
        if (!chunk.isEmpty())
            parser.feed(chunk);

        // Push it out rather than letting it pool in the socket buffers.
        for (Reader &r : active) {
            if (r.socket->state() == QAbstractSocket::ConnectedState)
                r.socket->flush();
        }

        // Only now is the port worth offering: the camera is logged in, has
        // agreed to send, and has usually said at what rate. The player reads
        // that rate once, when it opens the stream — told earlier, it opens on
        // a guess of fifteen and plays everything at that speed for as long as
        // the stream lasts.
        if (!announced &&
            (announcedFps > 0 || !primer.isEmpty() ||
             since.elapsed() > kAnnounceGraceMs)) {
            announced = true;
            unread.restart();   // the accept timeout runs from the offer
            LEO_INFO(Baichuan, m_camera.label(),
                     QStringLiteral("Serving the stream on %1").arg(url()));
            m_ready = true;
            emit ready(url());
        }

        if (unknownBlocks > unknownLogged &&
            unknownWindow.elapsed() > kUnknownSummaryMs) {
            LEO_WARN(Baichuan, m_camera.label(),
                     QStringLiteral("%1 unrecognised block(s) in the last "
                                    "minute, %2 bytes skipped in all")
                         .arg(unknownBlocks - unknownLogged)
                         .arg(parser.skippedBytes()));
            unknownLogged = unknownBlocks;
            unknownWindow.restart();
        }
    }
    m_ending = true;

    LEO_INFO(Baichuan, m_camera.label(),
             QStringLiteral("Finished: %1 frames, %2 KiB to %3 reader(s), %4 "
                            "dropped, %5 unrecognised block(s), %6 bytes of "
                            "padding skipped, header found %7 / assumed %8, "
                            "%9 s of delay recovered")
                 .arg(frames).arg(sent / 1024).arg(readers).arg(dropped)
                 .arg(unknownBlocks).arg(parser.skippedBytes())
                 .arg(parser.measuredHeaders()).arg(parser.assumedHeaders())
                 .arg(recovered / 1000000.0, 0, 'f', 1));

    for (Reader &r : active)
        r.socket->disconnectFromHost();
}

} // namespace leolink
