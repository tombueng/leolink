// One camera in the grid: video surface, title bar, volume, motion indicator.
#pragma once

#include <QImage>
#include <QWidget>

#include "Config.h"

class QLabel;
class QSlider;
class QTimer;
class QToolButton;

namespace leolink {

class BaichuanStream;
class MpvWidget;
class SignalIndicator;
class Spinner;

/// A single video pane backed by libmpv.
///
/// libmpv renders straight into this widget's native window handle. That is
/// why the application forces a platform where `winId()` is a real window —
/// see main.cpp. Each tile owns exactly one mpv instance; mpv itself handles
/// RTSP, hardware decoding and audio, including per-stream volume.
class VideoTile : public QWidget {
    Q_OBJECT

public:
    /// `hwdec` is an mpv value ("auto-safe", "auto-copy", "no");
    /// `lowLatency` trades buffering for immediacy.
    VideoTile(const CameraConfig &config, QString hwdec, bool lowLatency,
              QWidget *parent = nullptr);
    ~VideoTile() override;

    void start();
    void stop();
    void restart();
    /// Tells the tile the camera is restarting its encoder, so the next few
    /// seconds of broken stream are expected rather than a fault.
    void expectDisruption(int seconds = 20);

    const CameraConfig &config() const { return m_config; }
    void applyConfig(const CameraConfig &config);

    int volume() const { return m_config.volume; }
    bool muted() const { return m_config.muted; }

    /// Paints the motion badge. Driven by MotionWatcher.
    void setMotionActive(bool active);
    /// Tints the picture red briefly so an event is visible at a glance.
    void flashAlert(int milliseconds);
    void setStatusText(const QString &text);
    /// -1 means "not known". A wired camera hides the indicator entirely.
    void setWifiSignal(int strength);
    /// Decides whether arcs or bars are drawn, and whether anything is.
    void setLinkType(const QString &activeLink);

    /// Grabs the current frame via mpv rather than re-requesting a snapshot
    /// over HTTP, so what you save is what you see.
    bool saveScreenshot(const QString &path);
    /// What the tile actually drew, for the self-test.
    QImage grabRendered();
    quint64 renderedFrames() const;

    /// Reflects whether this camera is being recorded. The recording itself
    /// is done by Recorder in a separate process — a tile only draws.
    void setRecording(bool recording);
    bool isRecording() const { return m_recording; }

    /// Shows or hides the talk button. Only cameras that offer a speaker get
    /// one, which is decided by asking rather than by model name.
    void setTalkAvailable(bool available);
    void setTalking(bool talking);

    /// Full-screen presentation: the control strip leaves the layout and
    /// floats over the foot of the picture instead of sitting under it.
    ///
    /// It has to leave the layout, because in full screen the strip comes and
    /// goes with the pointer. Were it still laid out, every appearance would
    /// resize mpv's surface and the picture would jump by the height of the
    /// strip — the same reason the alert frame is a permanent inset rather
    /// than something added when an alert arrives.
    void setImmersive(bool on);
    /// Shows or hides the floating strip. Does nothing outside full screen,
    /// where the strip belongs to the layout and is always there.
    void setControlsVisible(bool visible);
    bool isImmersive() const { return m_immersive; }

signals:
    void settingsRequested(const QString &cameraId);
    void volumeChanged(const QString &cameraId, int volume, bool muted);
    void fullscreenRequested(const QString &cameraId);
    /// Emitted when the user drags the tile's control strip. With the window
    /// decoration hidden there is nothing else left to grab, so the strip
    /// doubles as a title bar.
    void moveWindowRequested();
    /// The user pressed record on this tile.
    void recordToggled(const QString &cameraId, bool recording);
    /// The user pressed the talk button.
    void talkToggled(const QString &cameraId, bool talking);

protected:
    /// What to hand the player: the camera's own address, or the loopback port
    /// Baichuan video is re-served on.
    QString playbackUrl() const;
    void startBaichuan();
    void stopBaichuan();

    void mouseDoubleClickEvent(QMouseEvent *event) override;
    /// Keeps the connecting overlay on top of the video surface.
    void resizeEvent(QResizeEvent *event) override;
    void mousePressEvent(QMouseEvent *event) override;
    void paintEvent(QPaintEvent *event) override;
    /// libmpv is handed this widget's native window id. That id is only usable
    /// once the widget has actually been realised, so playback starts here
    /// rather than in the constructor.
    void showEvent(QShowEvent *event) override;

private slots:
    void onVolumeSlider(int value);
    void onMuteToggled();

private:
    void buildUi();
    void createPlayer();
    void destroyPlayer();
    void pushVolume();
    /// Swaps the speaker icon and its tooltip to match the mute state.
    void updateMuteButton();


    void beginPlayback();
    /// Puts the floating strip across the foot of the picture. Only used while
    /// immersive; in the grid the layout does this.
    void layoutStrip();
    void refreshStreamInfo();
    /// Re-elides the status line to the room the layout has left it.
    void updateStatusLabel();
    void checkAlive();

    CameraConfig m_config;

    bool m_wantPlayback{false};
    QString m_hwdec;
    bool m_lowLatency{true};
    bool m_recording{false};

    MpvWidget *m_surface{nullptr};   ///< libmpv renders into Qt's GL context
    Spinner *m_spinner{nullptr};   ///< covers the surface until the first frame
    QTimer *m_firstFrameTimer{nullptr};
    /// Refreshes the line under the picture: resolution, rate, bitrate, codec.
    QTimer *m_infoTimer{nullptr};
    /// Notices a stream that has stopped arriving and fetches it again.
    QTimer *m_watchdog{nullptr};
    quint64 m_lastFrameCount{0};
    int m_stalledChecks{0};
    int m_reconnectAttempts{0};
    /// While set, the stream is expected to be broken and the watchdog holds
    /// off: the camera has just been reconfigured and is rebuilding it.
    QTimer *m_settleTimer{nullptr};
    bool m_settling{false};
    int m_settleSecondsLeft{0};
    quint64 m_settleBaseline{0};
    /// While true the inset around the picture is painted in the alert colour.
    bool m_alerting{false};
    QTimer *m_flashTimer{nullptr};
    QLabel *m_title{nullptr};
    /// The row of controls under the picture. Held on to because full screen
    /// takes it out of the layout and floats it over the video.
    QWidget *m_strip{nullptr};
    bool m_immersive{false};
    QLabel *m_status{nullptr};
    /// The full text, before eliding — kept so a resize can redo it.
    QString m_statusText;
    QLabel *m_motion{nullptr};
    /// Shown when the stream is arriving damaged, so a poor link is visible
    /// rather than being mistaken for a broken application.
    QLabel *m_health{nullptr};
    QTimer *m_healthTimer{nullptr};
    int m_errorsThisWindow{0};
    /// Said once per tile, not once per frame.
    bool m_warnedAboutProfile{false};
    SignalIndicator *m_signal{nullptr};
    QSlider *m_volumeSlider{nullptr};
    QToolButton *m_muteButton{nullptr};
    QToolButton *m_recordButton{nullptr};
    QToolButton *m_talkButton{nullptr};

    /// Only used when the transport is Baichuan: the protocol is spoken here
    /// and re-served to the player on a loopback port.
    BaichuanStream *m_baichuan{nullptr};
    QString m_baichuanUrl;
    /// Frame rate the camera announced, needed because the elementary stream
    /// carries no timestamps of its own.
    int m_baichuanFps{0};
};

} // namespace leolink
