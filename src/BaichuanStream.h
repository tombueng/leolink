// Video over Reolink's own protocol, handed to the player as a local stream.
#pragma once

#include <atomic>

#include <QString>
#include <QThread>

#include "Config.h"

namespace leolink {

/// Pulls video over Baichuan and re-serves it on the loopback interface.
///
/// Baichuan is what the vendor's own app speaks, and some cameras offer nothing
/// else: battery models keep RTSP switched off to save power, and a camera
/// reached by P2P has no RTSP port to connect to at all. It is also the only
/// transport that works without opening the camera's HTTP interface, which
/// matters on a device whose session pool is small.
///
/// The player cannot speak it, so this sits in between: the container is
/// unpacked into a plain H.264 elementary stream and offered on a loopback
/// port, which mpv opens like any other stream. The alternative — teaching the
/// player a proprietary protocol — would mean a custom demuxer for no gain.
///
/// Runs on its own thread. The protocol client is written synchronously, and
/// blocking the interface for the length of a network read is not acceptable
/// on a window showing several cameras.
class BaichuanStream : public QThread {
    Q_OBJECT

public:
    explicit BaichuanStream(QObject *parent = nullptr);
    ~BaichuanStream() override;

    /// Starts the connection. `url()` becomes valid once ready() is emitted.
    void start(const CameraConfig &camera);
    /// Asks the thread to finish and waits briefly for it.
    void shutdown();

    /// tcp://127.0.0.1:<port> — what to hand the player.
    QString url() const { return m_url; }

signals:
    /// The loopback port is listening; the player may connect.
    void ready(const QString &url);
    /// Picture size and frame rate as the camera announced them.
    void formatKnown(int width, int height, int fps);
    /// Connection lost or refused. The tile decides whether to retry.
    void failed(const QString &reason);

protected:
    void run() override;

private:
    CameraConfig m_camera;
    QString m_url;
    std::atomic_bool m_stop{false};
};

} // namespace leolink
