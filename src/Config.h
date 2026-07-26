// Camera list and application settings, persisted as JSON.
#pragma once

#include <QList>
#include <QString>

#include "EventActions.h"

namespace leolink {

/// One configured camera.
struct CameraConfig {
    QString id;                  ///< stable key, generated once
    QString name;
    QString host;
    QString user{QStringLiteral("admin")};
    QString password;
    /// Instead of a stored password, run this and read the secret from stdout
    /// (`pass show reolink/hall`, `secret-tool lookup …`). Empty = use password.
    QString passwordCommand;
    QString uid;                 ///< Baichuan P2P id; empty = LAN only
    QString stream{QStringLiteral("sub")};      ///< "main" or "sub"
    QString transport{QStringLiteral("rtsp")};  ///< "rtsp", "flv" or "custom"
    /// Used when transport is "custom": any URL libmpv can open. Lets leolink
    /// show cameras from other makers, an NVR sub-stream, or a local file.
    QString customUrl;
    bool enabled{true};
    bool https{false};
    /// Muted by default — opening a wall of cameras should not fill the room
    /// with audio from every one of them at once.
    bool muted{true};
    int volume{50};

    /// Placement in the grid. row/col of -1 means "place me automatically";
    /// the spans let one camera cover several cells (2x1, 1x2, 2x2 …).
    int row{-1};
    int col{-1};
    int rowSpan{1};
    int colSpan{1};

    /// Follow the global event actions, or use this camera's own set.
    /// All or nothing on purpose: partly inherited settings are hard to reason
    /// about when something does not fire.
    bool useGlobalActions{true};
    ActionConfig actions;

    /// Legacy single-command field, kept so older configurations still work.
    /// Migrated into `actions` on load.
    QString motionCommand;
    // ── how motion is noticed ───────────────────────────────────────────────
    /// "camera" trusts the camera's own ONVIF events, "local" analyses the
    /// picture here, "both" accepts either, "off" ignores motion entirely.
    ///
    /// Local analysis exists for cameras that report nothing — older firmware,
    /// other makers, or a model with detection switched off — and costs one
    /// extra sub-stream connection per camera.
    QString motionSource{QStringLiteral("camera")};
    /// 144 characters of '1'/'0' over a 16x9 grid. Empty means watch it all.
    QString motionZones;
    int motionSensitivity{5};    ///< 1 (blunt) … 10 (twitchy)
    int motionMinArea{20};       ///< per mille of the watched area, 20 = 2%

    /// Raise events on sound as well. Needs a camera with a microphone.
    bool audioDetection{false};
    double audioThresholdDb{-35.0};
    int audioHoldSeconds{3};

    /// Record to disk while motion lasts. This is done on the PC from the live
    /// stream, so it works on cameras with no SD card fitted.
    bool recordOnMotion{false};
    /// Keep recording this many seconds after motion stops, so the tail of an
    /// event is not cut off mid-scene.
    int recordTrailingSeconds{15};

    QString label() const;
    /// Resolves passwordCommand if set, otherwise returns password.
    QString secret() const;
    /// rtsp://…  or  http://…/flv?…  depending on `transport`.
    QString streamUrl() const;
};

/// Whole configuration. Load/save are total: a broken file yields defaults
/// rather than an exception, because losing the camera list to a stray byte
/// is worse than starting empty.
/// A camera together with the cell it occupies.
struct Placement {
    QString cameraId;
    int row{0};
    int col{0};
    int rowSpan{1};
    int colSpan{1};
};

class Config {
public:
    QList<CameraConfig> cameras;
    /// Explicit grid size. 0 means "derive from the number of cameras", which
    /// gives the familiar 1x1, 2x1, 2x2, 3x3 progression.
    int gridColumns{0};
    int gridRows{0};
    bool showMotion{true};   ///< ONVIF motion indicator on each tile

    /// Default reactions to an event. A camera either follows these or
    /// replaces them entirely (CameraConfig::useGlobalActions).
    ActionConfig actions;

    /// Where motion recordings go. Empty means ~/Videos/leolink.
    QString recordDir;
    QString effectiveRecordDir() const;

    // ── window chrome ───────────────────────────────────────────────────────
    bool showMenuBar{true};
    bool showToolBar{true};
    bool showStatusBar{true};
    /// Drop the window decoration entirely — useful on a wall display.
    bool frameless{false};
    /// Keep running in the notification area instead of quitting on close.
    bool trayEnabled{true};
    bool closeToTray{true};
    bool minimizeToTray{false};

    // ── behaviour on motion ─────────────────────────────────────────────────
    /// Bring the window back when a camera reports motion.
    bool raiseOnMotion{false};
    /// "restore" puts the window back the size it had; "fullscreen" takes over
    /// the screen.
    QString raiseMode{QStringLiteral("restore")};

    /// UI language: "system", "en" or "de".
    QString language{QStringLiteral("system")};

    // ── decoding ────────────────────────────────────────────────────────────
    /// "auto"  let the driver pick (fastest, but VAAPI surfaces in an embedded
    ///         window can tear or show green blocks on some drivers)
    /// "copy"  hardware decode, then copy frames to system memory — still far
    ///         cheaper than software, and immune to that class of bug
    /// "off"   software only
    QString hwdec{QStringLiteral("auto")};
    /// Trade a little latency for a buffer. Off is fine for sub streams; a
    /// high-bitrate main stream needs somewhere to absorb network jitter.
    bool lowLatency{true};
    QString mpvHwdecValue() const;

    // ── alerting ────────────────────────────────────────────────────────────
    /// Tint the tile red briefly so a glance at the wall is enough.
    bool flashOnMotion{true};
    int flashMilliseconds{1500};
    bool soundOnMotion{false};
    /// Sound file to play. Empty falls back to a freedesktop theme sound.
    QString soundFile;
    QString effectiveSoundFile() const;

    static QString path();
    static Config load();
    bool save() const;

    QList<CameraConfig> active() const;

    /// Grid size actually used: the configured one, widened if a camera's
    /// placement would otherwise fall outside it.
    QPair<int, int> gridShape() const;

    /// Resolves every active camera to a concrete cell. Cameras with an
    /// explicit row/col keep it; the rest fill the first free cells in reading
    /// order. Overlaps are avoided, so a stale placement cannot hide a camera.
    QList<Placement> layout() const;

    static QString newId();
};

} // namespace leolink
