#include "BaichuanStream.h"

#include <QElapsedTimer>
#include <QTcpServer>
#include <QTcpSocket>

#include "Baichuan.h"
#include "Log.h"
#include "TsMuxer.h"

namespace leolink {

namespace {
/// How long to wait for the player to open the loopback port before giving up.
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
        emit failed(tr("Cannot open a local port: %1").arg(server.errorString()));
        return;
    }
    m_url = QStringLiteral("tcp://127.0.0.1:%1").arg(server.serverPort());
    LEO_DEBUG(Baichuan, m_camera.label(),
              QStringLiteral("Listening on %1, not yet offered to the player")
                  .arg(m_url));

    BaichuanClient client(m_camera.host, m_camera.user, m_secret);
    if (!client.login()) {
        LEO_WARN(Baichuan, m_camera.label(),
                 QStringLiteral("Login failed: %1").arg(client.lastError()));
        emit failed(tr("Baichuan login failed: %1").arg(client.lastError()));
        return;
    }
    LEO_INFO(Baichuan, m_camera.label(), QStringLiteral("Logged in"));

    if (!client.requestVideo(m_camera.channel,
                             m_camera.stream == QLatin1String("main"))) {
        LEO_WARN(Baichuan, m_camera.label(),
                 QStringLiteral("Video request refused: %1").arg(client.lastError()));
        emit failed(tr("The camera refused to send video: %1")
                        .arg(client.lastError()));
        return;
    }

    BcMediaParser parser;
    // Wrapped rather than handed over bare, so every picture carries the time
    // the camera took it. Without that a player has to be told a frame rate and
    // believe it, and a rate that is wrong by two frames a second is a delay
    // that grows for as long as the window is open.
    TsMuxer muxer;
    QTcpSocket *player = nullptr;
    bool started = false;      ///< has this player been given a key frame yet
    bool announced = false;    ///< has the player been told where to connect
    bool dropping = false;     ///< shedding frames until the player catches up
    QByteArray primer;         ///< the last key frame, to open a new connection with
    qint64 primerPts = 0;
    QString codec;             ///< as the camera named it: H264 or H265
    qint64 sent = 0;
    int frames = 0;
    int dropped = 0;
    int droppedThisTime = 0;   ///< ... and of those, in the episode under way
    int announcedFps = 0;

    // ── the timeline handed to the player ───────────────────────────────────
    qint64 skewUs = 0;              ///< time taken out of it, in total
    qint64 lastCameraPts = -1;      ///< camera clock of the last picture sent
    qint64 intervalUs = kAssumedIntervalUs;
    bool closeSeam = false;         ///< the next picture follows on from the last

    // ── what the player has not taken yet ───────────────────────────────────
    /// A write, and when it was made: how much had been handed to the socket by
    /// then. Comparing that with what the socket still holds says which write
    /// the player has got to, and therefore how long it has been waiting.
    struct Handover {
        qint64 upTo;
        qint64 at;
    };
    QList<Handover> handovers;
    qint64 handedOver = 0;

    int unknownBlocks = 0;
    int unknownLogged = 0;
    QElapsedTimer unknownWindow;
    unknownWindow.start();
    QElapsedTimer since;
    since.start();
    /// Never restarted, unlike `since`: everything above is timed against it.
    QElapsedTimer clock;
    clock.start();

    // Every write goes through here, so that what the player has taken can be
    // told from what it has not.
    auto hand = [&](const QByteArray &data) {
        player->write(data);
        handedOver += data.size();
        handovers.append({handedOver, clock.elapsed()});
    };

    /// How long the oldest thing the player has not taken has been waiting —
    /// which is how far behind it is. The socket's own buffer cannot be seen
    /// from here and counts as taken, which is why it is kept small.
    auto behindMs = [&]() -> qint64 {
        const qint64 taken = handedOver - player->bytesToWrite();
        while (!handovers.isEmpty() && handovers.constFirst().upTo <= taken)
            handovers.removeFirst();
        return handovers.isEmpty() ? 0 : clock.elapsed() - handovers.constFirst().at;
    };

    parser.onFormat = [&](int width, int height, int fps) {
        announcedFps = fps;
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

    parser.onVideo = [&](const QByteArray &frame, bool keyFrame, qint64 ptsUs) {
        // Kept whether or not anyone is listening: a player that connects, or
        // reconnects, can then be handed a picture straight away instead of
        // waiting out the rest of the group of pictures.
        if (keyFrame) {
            primer = frame;
            primerPts = ptsUs;
        }

        if (!player || player->state() != QAbstractSocket::ConnectedState)
            return;

        // Start on a key frame. Handing a decoder a run of predicted frames
        // with no reference produces exactly the field of green blocks this
        // project spent a long time chasing for other reasons.
        if (!started) {
            if (!keyFrame)
                return;
            started = true;
        }

        // How far behind the player is. The camera sends at its own rate
        // regardless of what the player does with it, so without a bound the
        // difference is stored rather than resolved — a delay that grows for as
        // long as the window is open and never comes back.
        const qint64 behind = behindMs();
        if (dropping) {
            // Only a key frame can start a picture again, and only once the
            // backlog has actually drained.
            if (!keyFrame || behind > kBacklogClearedMs) {
                ++dropped;
                ++droppedThisTime;
                return;
            }
            dropping = false;
            closeSeam = true;
        } else if (behind > kBacklogBudgetMs ||
                   player->bytesToWrite() > kMaxQueuedBytes) {
            dropping = true;
            ++dropped;
            droppedThisTime = 1;
            LEO_WARN(Baichuan, m_camera.label(),
                     QStringLiteral("The player is %1 s behind — giving up "
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
        if (lastCameraPts >= 0) {
            const qint64 step = ptsUs - lastCameraPts;
            if (closeSeam || step <= 0 || step > kTimelineBreakUs) {
                skewUs += step - intervalUs;
                if (closeSeam)
                    LEO_INFO(Baichuan, m_camera.label(),
                             QStringLiteral("Player caught up — %1 picture(s) "
                                            "given up, %2 s of delay recovered")
                                 .arg(droppedThisTime)
                                 .arg((step - intervalUs) / 1000000.0, 0, 'f', 1));
            } else {
                // What this stream calls a frame interval, smoothed: cameras
                // deliver a little unevenly, and this decides what "one picture
                // later" means above.
                intervalUs = (intervalUs * 3 + step) / 4;
            }
        }
        lastCameraPts = ptsUs;
        closeSeam = false;

        // The camera names its codec in the first frame it sends, which is
        // before the first key frame and therefore before any tables go out.
        if (!parser.videoCodec().isEmpty() && parser.videoCodec() != codec) {
            codec = parser.videoCodec();
            muxer.setCodec(codec);
        }

        const QByteArray wrapped = muxer.frame(frame, keyFrame, ptsUs - skewUs);
        hand(wrapped);
        sent += wrapped.size();
        ++frames;
    };

    QByteArray chunk;
    while (!m_stop) {
        // A player that has gone — mpv reloads on any hiccup — is replaced by
        // whoever connects next, on the same port. Ending the thread instead
        // meant a new port every time, a fresh login on a camera that was
        // still holding the last one, and a retry loop that never converged.
        if (!player || player->state() != QAbstractSocket::ConnectedState) {
            // waitForNewConnection() rather than hasPendingConnections(): this
            // thread runs no event loop, so nothing delivers the connection to
            // the server by itself. A zero timeout makes it a poll of the
            // listening socket, which is exactly what is wanted here.
            if (server.waitForNewConnection(0)) {
                if (player) {
                    player->abort();
                    delete player;
                }
                player = server.nextPendingConnection();
                // Latency matters more than packing here: a camera frame is
                // worth sending the moment it is complete.
                player->setSocketOption(QAbstractSocket::LowDelayOption, 1);
                player->setSocketOption(QAbstractSocket::SendBufferSizeSocketOption,
                                        kSendBufferBytes);
                started = false;
                dropping = false;
                // A new socket holds nothing, and what the last one was owed
                // went with it.
                handedOver = 0;
                handovers.clear();
                // Whoever has just connected needs the tables before anything
                // else means anything, and then a picture to start from.
                hand(muxer.tables());
                if (!primer.isEmpty()) {
                    hand(muxer.frame(primer, true, primerPts - skewUs));
                    started = true;
                }
                LEO_DEBUG(Baichuan, m_camera.label(),
                          QStringLiteral("Player connected%1")
                              .arg(primer.isEmpty()
                                       ? QString()
                                       : QStringLiteral(", opened on a stored "
                                                        "key frame")));
            } else if (announced && since.elapsed() > kAcceptTimeoutMs) {
                LEO_WARN(Baichuan, m_camera.label(),
                         QStringLiteral("The player never opened %1").arg(m_url));
                emit failed(tr("The player did not connect."));
                break;
            }
        }

        chunk.clear();
        if (!client.readMediaChunk(chunk, kReadTimeoutMs)) {
            LEO_WARN(Baichuan, m_camera.label(),
                     QStringLiteral("Stream ended after %1 frames (%2 KiB): %3")
                         .arg(frames).arg(sent / 1024).arg(client.lastError()));
            emit failed(tr("The camera stopped sending."));
            break;
        }
        if (!chunk.isEmpty())
            parser.feed(chunk);

        if (player && player->state() == QAbstractSocket::ConnectedState) {
            // Push it out rather than letting it pool in the socket buffer.
            player->flush();
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
            since.restart();   // the accept timeout runs from the offer
            LEO_INFO(Baichuan, m_camera.label(),
                     QStringLiteral("Serving the stream on %1").arg(m_url));
            emit ready(m_url);
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

    LEO_INFO(Baichuan, m_camera.label(),
             QStringLiteral("Finished: %1 frames, %2 KiB, %3 dropped, %4 "
                            "unrecognised block(s), %5 bytes of padding "
                            "skipped, header found %6 / assumed %7, %8 s of "
                            "delay recovered")
                 .arg(frames).arg(sent / 1024).arg(dropped)
                 .arg(unknownBlocks).arg(parser.skippedBytes())
                 .arg(parser.measuredHeaders()).arg(parser.assumedHeaders())
                 .arg(skewUs / 1000000.0, 0, 'f', 1));

    // Not deleted here: the socket belongs to the server on this stack and goes
    // with it. Only a socket that has been replaced by a reconnecting player is
    // deleted, above, where it has already been closed.
    if (player)
        player->disconnectFromHost();
}

} // namespace leolink
