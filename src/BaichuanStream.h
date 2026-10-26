// Video over Reolink's own protocol, handed to the player as a local stream.
#pragma once

#include <atomic>

#include <QMutex>
#include <QSemaphore>
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
/// The player cannot speak it, so this sits in between: the pictures are taken
/// out of the camera's container, wrapped in MPEG-TS so that each one keeps the
/// time the camera took it, and offered on a loopback port that mpv opens like
/// any other stream. The alternative — teaching the player a proprietary
/// protocol — would mean a custom demuxer for no gain.
///
/// The timeline it serves is the camera's, with one deliberate exception: where
/// pictures have been given up because the player fell behind, the gap they
/// would have left is taken out of it as well. See kBacklogBudgetMs.
///
/// Several readers can have the stream at once, each on a connection of its
/// own with its own pacing: the tile's player, and ffmpeg recording it,
/// buffering it or looking for motion in it. One camera connection serves them
/// all, which matters on a camera with a handful of sessions to give — and it
/// is what lets a camera that offers nothing but Baichuan be recorded at all,
/// since ffmpeg opens the loopback port like any other address.
///
/// Shared, through shared(): one per camera and stream, made on first use and
/// ending by itself once nobody has read it for a while.
///
/// Runs on its own thread. The protocol client is written synchronously, and
/// blocking the interface for the length of a network read is not acceptable
/// on a window showing several cameras.
class BaichuanStream : public QThread {
    Q_OBJECT

public:
    explicit BaichuanStream(QObject *parent = nullptr);
    ~BaichuanStream() override;

    /// The stream for this camera and stream type, started if there is none
    /// yet or the last one is ending. Owned by the application; the pointer
    /// is good until finished() is emitted. Interface thread only.
    static BaichuanStream *shared(const CameraConfig &camera);
    /// What ffmpeg or a player should open for this camera: its own address,
    /// or for Baichuan the loopback port of the shared stream. Interface
    /// thread only. Empty if the camera has no stream at all.
    static QString openUrl(const CameraConfig &camera);
    /// Ends every shared stream. On the way out.
    static void shutdownAll();

    /// Starts the connection. The loopback port is open when this returns, so
    /// url() is good at once — a reader that connects before the camera has
    /// answered waits in the queue, and is served when the pictures start.
    void start(const CameraConfig &camera);
    /// Asks the thread to finish and waits briefly for it.
    void shutdown();

    /// tcp://127.0.0.1:<port> — what to hand the player.
    QString url() const;
    /// Whether ready() has been emitted, for a reader arriving after it.
    bool isReady() const { return m_ready; }
    /// The frame rate the camera announced, 0 until it has.
    int announcedFps() const { return m_fps; }
    /// Set once the stream has stopped serving, before finished().
    bool isEnding() const { return m_ending; }

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
    /// Resolved before the thread starts. A password may come from a keyring,
    /// which is a D-Bus conversation, and that belongs on the thread the rest
    /// of the interface runs on rather than in here.
    QString m_secret;
    /// Written by the thread before start() returns, read anywhere after.
    mutable QMutex m_urlLock;
    QString m_url;
    /// Released by the thread once the port is open, or it has failed to.
    QSemaphore m_listening;
    std::atomic_bool m_stop{false};
    std::atomic_bool m_ready{false};
    std::atomic_bool m_ending{false};
    std::atomic_int m_fps{0};
};

} // namespace leolink
