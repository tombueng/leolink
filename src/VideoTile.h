// One camera in the grid: video surface, title bar, volume, motion indicator.
#pragma once

#include <QWidget>

#include "Config.h"

class QLabel;
class QSlider;
class QTimer;
class QToolButton;
struct mpv_handle;

namespace leolink {

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

    const CameraConfig &config() const { return m_config; }
    void applyConfig(const CameraConfig &config);

    int volume() const { return m_config.volume; }
    bool muted() const { return m_config.muted; }

    /// Paints the motion badge. Driven by MotionWatcher.
    void setMotionActive(bool active);
    /// Tints the picture red briefly so an event is visible at a glance.
    void flashAlert(int milliseconds);
    void setStatusText(const QString &text);

    /// Grabs the current frame via mpv rather than re-requesting a snapshot
    /// over HTTP, so what you save is what you see.
    bool saveScreenshot(const QString &path);

    /// Reflects whether this camera is being recorded. The recording itself
    /// is done by Recorder in a separate process — a tile only draws.
    void setRecording(bool recording);
    bool isRecording() const { return m_recording; }

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

protected:
    void mouseDoubleClickEvent(QMouseEvent *event) override;
    /// Keeps the connecting overlay on top of the video surface.
    void resizeEvent(QResizeEvent *event) override;
    void mousePressEvent(QMouseEvent *event) override;
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
    void setMpvOption(const char *name, const QString &value);

    void beginPlayback();

    CameraConfig m_config;
    mpv_handle *m_mpv{nullptr};
    bool m_wantPlayback{false};
    QString m_hwdec;
    bool m_lowLatency{true};
    bool m_recording{false};

    QWidget *m_surface{nullptr};   ///< the window libmpv draws into
    Spinner *m_spinner{nullptr};   ///< covers the surface until the first frame
    QTimer *m_firstFrameTimer{nullptr};
    QWidget *m_flash{nullptr};     ///< red alert overlay, created on first use
    QTimer *m_flashTimer{nullptr};
    QLabel *m_title{nullptr};
    QLabel *m_status{nullptr};
    QLabel *m_motion{nullptr};
    QSlider *m_volumeSlider{nullptr};
    QToolButton *m_muteButton{nullptr};
    QToolButton *m_recordButton{nullptr};
};

} // namespace leolink
