// Main window: camera grid, chrome toggles, tray, event handling.
#pragma once

#include <QHash>
#include <QMainWindow>

#include "Config.h"

class QAction;
class QGridLayout;
class QLabel;
class QMenu;
class QSystemTrayIcon;
class QTimer;

namespace leolink {

class AudioDetector;
class DiagnosticsDialog;
class EventDispatcher;
class MotionDetector;
class Recorder;
class ReolinkClient;
class EventLog;
class MotionWatcher;
class SoundPlayer;
class VideoTile;

class MainWindow : public QMainWindow {
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = nullptr);
    ~MainWindow() override;

protected:
    void closeEvent(QCloseEvent *event) override;
    /// Catches the minimise so the window can go to the tray instead.
    void changeEvent(QEvent *event) override;

private slots:
    void openSettings();
    void snapshotAll();
    void toggleFullscreenTile(const QString &cameraId);
    void onVolumeChanged(const QString &cameraId, int volume, bool muted);
    void onMotionChanged(const QString &cameraId, bool active);
    /// Sound is reported as its own event type but takes the same path as
    /// motion — recording, actions and the log all treat it alike.
    void onSoundChanged(const QString &cameraId, bool active);
    /// Really stops the application, from wherever Quit was chosen.
    void quitApplication();
    void onRecordToggled(const QString &cameraId, bool recording);
    void toggleRecordAll();

private:
    void buildMenus();
    void buildTray();
    void rebuildGrid();
    /// Places every tile per Config::layout(). Separate from rebuildGrid() so
    /// leaving full screen does not restart the streams.
    void applyLayout();
    void teardownGrid();
    void startWatchers();
    /// Asks every camera how strong its Wi-Fi is. Cheap, and the only way to
    /// notice a camera slowly dropping off before it disappears.
    void pollCameraStatus();
    /// Logs every status client out. Called when the window goes away, not on
    /// every grid rebuild — a camera's session pool is small enough that
    /// churning it costs real availability.
    void releaseStatusClients();
    /// LEOLINK_SELFTEST=<dir> writes what each tile actually rendered, plus a
    /// frame count, and exits. There is no other way to check from outside
    /// whether the picture is live and clean — a decoder log says nothing
    /// about what reached the screen.
    void runSelfTest(const QString &directory);
    /// Raises an event of `type`, whatever noticed it.
    void raiseEvent(const CameraConfig &camera, const QString &type,
                    const QString &message, bool active);
    void applyChrome();
    void showFirstRunHint();
    /// The log window. A frozen picture leaves nothing behind by itself; this
    /// is what makes a bug report from a stranger's machine possible.
    void openDiagnostics();
    /// Right-click menu on the camera area. This is the escape hatch: with the
    /// menu bar, toolbar and window decoration all hidden there would otherwise
    /// be no way back except editing the configuration file by hand.
    void buildContextMenu();
    void startWindowDrag();

    /// Fires the camera's event actions — command, webhook, MQTT.
    void dispatchActions(const CameraConfig &camera, bool active,
                         const QString &recording, const QString &still);
    void beginMotionRecording(const CameraConfig &camera);
    /// Returns the recorder for a camera, creating it on first use.
    Recorder *recorderFor(const CameraConfig &camera);
    bool isRecording(const QString &cameraId) const;
    QString activeRecording(const QString &cameraId) const;
    void scheduleRecordingStop(const CameraConfig &camera);
    /// Restores the window per Config::raiseMode.
    void raiseForEvent();
    /// Builds a recording path for a camera: <recordDir>/<name>-<stamp>.mkv
    QString recordingPathFor(const CameraConfig &camera) const;
    /// Saves a still for the event log; returns the path, or empty on failure.
    QString captureEventStill(const CameraConfig &camera);

    const CameraConfig *cameraById(const QString &id) const;

    Config m_config;
    QWidget *m_central{nullptr};
    QGridLayout *m_grid{nullptr};
    QLabel *m_placeholder{nullptr};

    QHash<QString, VideoTile *> m_tiles;
    QHash<QString, MotionWatcher *> m_watchers;      ///< ONVIF, camera-side
    QHash<QString, MotionDetector *> m_detectors;    ///< picture analysed here
    QHash<QString, AudioDetector *> m_listeners;
    /// Per camera: stops the recording once motion has stayed clear long enough.
    QHash<QString, QTimer *> m_stopTimers;
    /// One ffmpeg process per camera being recorded, keyed by camera id.
    QHash<QString, Recorder *> m_recorders;
    /// One client per camera, kept alive to poll the Wi-Fi strength.
    QHash<QString, ReolinkClient *> m_statusClients;
    QTimer *m_statusTimer{nullptr};

    EventLog *m_eventLog{nullptr};
    /// Kept alive between openings so the filter survives; deleted on close.
    DiagnosticsDialog *m_diagnostics{nullptr};
    EventDispatcher *m_dispatcher{nullptr};
    SoundPlayer *m_sound{nullptr};
    QSystemTrayIcon *m_tray{nullptr};
    QAction *m_menuBarAction{nullptr};
    QAction *m_toolBarAction{nullptr};
    QAction *m_statusBarAction{nullptr};
    QAction *m_framelessAction{nullptr};
    QAction *m_recordAllAction{nullptr};
    QMenu *m_contextMenu{nullptr};

    /// Camera blown up to fill the window; empty while showing the grid.
    QString m_fullscreenId;
    /// Set while quitting so closeEvent does not hide to tray instead.
    bool m_reallyQuit{false};
};

} // namespace leolink
