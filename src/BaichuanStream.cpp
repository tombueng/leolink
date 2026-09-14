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
/// is watched later as a delay. What the kernel will not take is what tells us
/// the player has fallen behind, so the smaller it is, the sooner that shows.
constexpr int kSendBufferBytes = 256 * 1024;
/// Queued beyond that, the player is behind and frames are dropped until it
/// has caught up. Without this the backlog is unbounded: the camera sends at
/// its rate whatever the player does with it.
constexpr int kMaxQueuedBytes = 256 * 1024;
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
    int announcedFps = 0;

    int unknownBlocks = 0;
    int unknownLogged = 0;
    QElapsedTimer unknownWindow;
    unknownWindow.start();
    QElapsedTimer since;
    since.start();

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

        // What the player has not taken yet. The camera sends at its own rate
        // regardless of what the player does with it, so without this the
        // difference is stored rather than resolved — which is a delay that
        // grows for as long as the window is open and never comes back.
        const qint64 queued = player->bytesToWrite();
        if (dropping) {
            // Only a key frame can start a picture again, and only once the
            // backlog has actually drained.
            if (!keyFrame || queued > 0) {
                ++dropped;
                return;
            }
            dropping = false;
            LEO_INFO(Baichuan, m_camera.label(),
                     QStringLiteral("Player caught up — %1 frame(s) dropped")
                         .arg(dropped));
        } else if (queued > kMaxQueuedBytes) {
            dropping = true;
            ++dropped;
            LEO_WARN(Baichuan, m_camera.label(),
                     QStringLiteral("The player is %1 KiB behind — dropping "
                                    "frames until it catches up")
                         .arg(queued / 1024));
            return;
        }

        // The camera names its codec in the first frame it sends, which is
        // before the first key frame and therefore before any tables go out.
        if (!parser.videoCodec().isEmpty() && parser.videoCodec() != codec) {
            codec = parser.videoCodec();
            muxer.setCodec(codec);
        }

        const QByteArray wrapped = muxer.frame(frame, keyFrame, ptsUs);
        player->write(wrapped);
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
                // Whoever has just connected needs the tables before anything
                // else means anything, and then a picture to start from.
                player->write(muxer.tables());
                if (!primer.isEmpty()) {
                    player->write(muxer.frame(primer, true, primerPts));
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
                            "skipped, header found %6 / assumed %7")
                 .arg(frames).arg(sent / 1024).arg(dropped)
                 .arg(unknownBlocks).arg(parser.skippedBytes())
                 .arg(parser.measuredHeaders()).arg(parser.assumedHeaders()));

    // Not deleted here: the socket belongs to the server on this stack and goes
    // with it. Only a socket that has been replaced by a reconnecting player is
    // deleted, above, where it has already been closed.
    if (player)
        player->disconnectFromHost();
}

} // namespace leolink
