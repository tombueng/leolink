#include "BaichuanStream.h"

#include <QTcpServer>
#include <QTcpSocket>

#include "Baichuan.h"
#include "Log.h"

namespace leolink {

namespace {
/// How long to wait for the player to open the loopback port before giving up.
constexpr int kAcceptTimeoutMs = 20000;
/// One read from the camera. Short enough that a stopped stream is noticed
/// quickly, long enough not to spin.
constexpr int kReadTimeoutMs = 5000;
} // namespace

BaichuanStream::BaichuanStream(QObject *parent) : QThread(parent) {}

BaichuanStream::~BaichuanStream()
{
    shutdown();
}

void BaichuanStream::start(const CameraConfig &camera)
{
    m_camera = camera;
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
    LEO_INFO(Baichuan, m_camera.label(),
             QStringLiteral("Serving the stream on %1").arg(m_url));
    emit ready(m_url);

    BaichuanClient client(m_camera.host, m_camera.user, m_camera.secret());
    if (!client.login()) {
        LEO_WARN(Baichuan, m_camera.label(),
                 QStringLiteral("Login failed: %1").arg(client.lastError()));
        emit failed(tr("Baichuan login failed: %1").arg(client.lastError()));
        return;
    }
    LEO_INFO(Baichuan, m_camera.label(), QStringLiteral("Logged in"));

    if (!client.requestVideo(0, m_camera.stream == QLatin1String("main"))) {
        LEO_WARN(Baichuan, m_camera.label(),
                 QStringLiteral("Video request refused: %1").arg(client.lastError()));
        emit failed(tr("The camera refused to send video: %1")
                        .arg(client.lastError()));
        return;
    }

    if (!server.waitForNewConnection(kAcceptTimeoutMs)) {
        LEO_WARN(Baichuan, m_camera.label(),
                 QStringLiteral("The player never opened %1").arg(m_url));
        emit failed(tr("The player did not connect."));
        return;
    }
    QTcpSocket *player = server.nextPendingConnection();
    // Latency matters more than packing here: a camera frame is worth sending
    // the moment it is complete.
    player->setSocketOption(QAbstractSocket::LowDelayOption, 1);

    BcMediaParser parser;
    bool started = false;   ///< have we passed a key frame yet
    qint64 sent = 0;
    int frames = 0;

    parser.onFormat = [this](int width, int height, int fps) {
        LEO_INFO(Baichuan, m_camera.label(),
                 QStringLiteral("Camera announces %1x%2 @ %3 fps")
                     .arg(width).arg(height).arg(fps));
        emit formatKnown(width, height, fps);
    };
    parser.onUnknown = [this](const QString &magic) {
        // Not fatal — the parser resynchronises — but worth recording: an
        // unfamiliar block type is the first sign of a firmware this was not
        // written against.
        LEO_WARN(Baichuan, m_camera.label(),
                 QStringLiteral("Unrecognised block '%1' in the stream").arg(magic));
    };
    parser.onVideo = [&](const QByteArray &frame, bool keyFrame) {
        // Start on a key frame. Handing a decoder a run of predicted frames
        // with no reference produces exactly the field of green blocks this
        // project spent a long time chasing for other reasons.
        if (!started) {
            if (!keyFrame)
                return;
            started = true;
            LEO_DEBUG(Baichuan, m_camera.label(),
                      QStringLiteral("First key frame, %1 bytes — starting")
                          .arg(frame.size()));
        }
        if (player->state() != QAbstractSocket::ConnectedState)
            return;
        player->write(frame);
        sent += frame.size();
        ++frames;
    };

    QByteArray chunk;
    while (!m_stop && player->state() == QAbstractSocket::ConnectedState) {
        chunk.clear();
        if (!client.readMediaChunk(chunk, kReadTimeoutMs)) {
            LEO_WARN(Baichuan, m_camera.label(),
                     QStringLiteral("Stream ended after %1 frames (%2 KiB): %3")
                         .arg(frames).arg(sent / 1024).arg(client.lastError()));
            emit failed(tr("The camera stopped sending."));
            break;
        }
        if (chunk.isEmpty())
            continue;
        parser.feed(chunk);
        // Push it out rather than letting it pool in the socket buffer.
        player->flush();
    }

    LEO_INFO(Baichuan, m_camera.label(),
             QStringLiteral("Finished: %1 frames, %2 KiB, %3 bytes of padding "
                            "skipped")
                 .arg(frames).arg(sent / 1024).arg(parser.skippedBytes()));

    // Not deleted here: the socket belongs to the server on this stack and
    // goes with it. deleteLater() would need an event loop this thread does
    // not have once run() returns.
    player->disconnectFromHost();
}

} // namespace leolink
