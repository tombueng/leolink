#include "Config.h"

#include <cmath>

#include <QCoreApplication>
#include <QDir>
#include <QFile>
#include <QJsonArray>
#include <QJsonDocument>
#include <QJsonObject>
#include <QProcess>
#include <QSaveFile>
#include <QStandardPaths>
#include <QUrl>
#include <QUrlQuery>
#include <QUuid>

namespace leolink {

namespace {

/// ActionConfig is stored the same way whether it belongs to a camera or to
/// the global defaults, so one pair of helpers covers both.
QJsonObject actionsToJson(const ActionConfig &a)
{
    QJsonObject o;
    o[QStringLiteral("runCommand")] = a.runCommand;
    o[QStringLiteral("command")] = a.command;
    o[QStringLiteral("callWebhook")] = a.callWebhook;
    o[QStringLiteral("webhookUrl")] = a.webhookUrl;
    o[QStringLiteral("webhookMethod")] = a.webhookMethod;
    o[QStringLiteral("webhookBody")] = a.webhookBody;
    o[QStringLiteral("publishMqtt")] = a.publishMqtt;
    o[QStringLiteral("mqttHost")] = a.mqttHost;
    o[QStringLiteral("mqttPort")] = a.mqttPort;
    o[QStringLiteral("mqttTopic")] = a.mqttTopic;
    o[QStringLiteral("mqttUser")] = a.mqttUser;
    o[QStringLiteral("mqttPassword")] = a.mqttPassword;
    o[QStringLiteral("mqttPayload")] = a.mqttPayload;
    o[QStringLiteral("mqttRetain")] = a.mqttRetain;
    return o;
}

ActionConfig actionsFromJson(const QJsonObject &o)
{
    ActionConfig a;
    a.runCommand = o.value(QStringLiteral("runCommand")).toBool(false);
    a.command = o.value(QStringLiteral("command")).toString();
    a.callWebhook = o.value(QStringLiteral("callWebhook")).toBool(false);
    a.webhookUrl = o.value(QStringLiteral("webhookUrl")).toString();
    a.webhookMethod =
        o.value(QStringLiteral("webhookMethod")).toString(QStringLiteral("POST"));
    a.webhookBody = o.value(QStringLiteral("webhookBody")).toString();
    a.publishMqtt = o.value(QStringLiteral("publishMqtt")).toBool(false);
    a.mqttHost = o.value(QStringLiteral("mqttHost")).toString();
    a.mqttPort = o.value(QStringLiteral("mqttPort")).toInt(1883);
    a.mqttTopic = o.value(QStringLiteral("mqttTopic"))
                      .toString(QStringLiteral("leolink/%n/motion"));
    a.mqttUser = o.value(QStringLiteral("mqttUser")).toString();
    a.mqttPassword = o.value(QStringLiteral("mqttPassword")).toString();
    a.mqttPayload = o.value(QStringLiteral("mqttPayload")).toString();
    a.mqttRetain = o.value(QStringLiteral("mqttRetain")).toBool(false);
    return a;
}

} // namespace

QString CameraConfig::label() const
{
    if (!name.isEmpty())
        return name;
    if (!host.isEmpty())
        return host;
    // Neither named nor addressed yet — a row in the settings list that has
    // only just been added. QCoreApplication::translate rather than tr(),
    // because this is a plain struct with no Q_OBJECT of its own.
    return QCoreApplication::translate("leolink::CameraConfig", "Camera");
}

QString CameraConfig::secret() const
{
    if (passwordCommand.isEmpty())
        return password;

    // Deliberately synchronous and short-lived: this runs once per stream
    // start, and a hanging helper should fail fast rather than wedge the UI.
    QProcess proc;
    proc.start(QStringLiteral("/bin/sh"), {QStringLiteral("-c"), passwordCommand});
    if (!proc.waitForFinished(15000) || proc.exitCode() != 0)
        return {};
    return QString::fromUtf8(proc.readAllStandardOutput()).trimmed();
}

QString CameraConfig::streamUrl() const
{
    const QString pass = secret();

    // Anything libmpv understands: another maker's RTSP path, an NVR stream,
    // an HTTP source, or a local file.
    if (transport == QLatin1String("custom"))
        return customUrl;

    // Baichuan has no URL of its own: the protocol is spoken by leolink and
    // re-served on a loopback port whose number is only known once the
    // connection is up. VideoTile asks BaichuanStream for the address instead.
    if (transport == QLatin1String("baichuan"))
        return {};

    if (transport == QLatin1String("flv")) {
        // What the camera's own web UI uses. Lower latency than RTSP and it
        // only needs port 80, which helps when RTSP is filtered.
        QUrl url;
        url.setScheme(https ? QStringLiteral("https") : QStringLiteral("http"));
        url.setHost(host);
        url.setPath(QStringLiteral("/flv"));
        QUrlQuery q;
        q.addQueryItem(QStringLiteral("port"), QStringLiteral("1935"));
        q.addQueryItem(QStringLiteral("app"), QStringLiteral("bcs"));
        q.addQueryItem(QStringLiteral("stream"),
                       QStringLiteral("channel0_%1.bcs").arg(stream));
        q.addQueryItem(QStringLiteral("user"), user);
        q.addQueryItem(QStringLiteral("password"), pass);
        url.setQuery(q);
        return url.toString();
    }

    // RTSP path names the channel 1-based, unlike the FLV one.
    QUrl url;
    url.setScheme(QStringLiteral("rtsp"));
    url.setHost(host);
    url.setPort(554);
    url.setUserName(user);
    url.setPassword(pass);
    url.setPath(QStringLiteral("/h264Preview_01_%1").arg(stream));
    return url.toString(QUrl::FullyEncoded);
}

// ── Config ──────────────────────────────────────────────────────────────────

QString Config::path()
{
    // LEOLINK_CONFIG points somewhere else entirely. Useful for a second set of
    // cameras, for a kiosk profile kept apart from a personal one, and for
    // trying a setting without touching a configuration that works.
    const QString override = qEnvironmentVariable("LEOLINK_CONFIG");
    if (!override.isEmpty())
        return override;

    const QString dir =
        QStandardPaths::writableLocation(QStandardPaths::AppConfigLocation);
    return dir + QStringLiteral("/config.json");
}

QString Config::newId()
{
    return QUuid::createUuid().toString(QUuid::WithoutBraces).left(8);
}

Config Config::load()
{
    Config cfg;

    QFile file(path());
    if (!file.open(QIODevice::ReadOnly))
        return cfg;

    QJsonParseError err{};
    const QJsonDocument doc = QJsonDocument::fromJson(file.readAll(), &err);
    if (err.error != QJsonParseError::NoError || !doc.isObject())
        return cfg;

    const QJsonObject root = doc.object();
    // "columns" is the older key; keep reading it so existing setups survive.
    cfg.gridColumns = root.value(QStringLiteral("gridColumns"))
                          .toInt(root.value(QStringLiteral("columns")).toInt(0));
    cfg.gridRows = root.value(QStringLiteral("gridRows")).toInt(0);
    cfg.showMotion = root.value(QStringLiteral("showMotion")).toBool(true);
    cfg.recordDir = root.value(QStringLiteral("recordDir")).toString();
    cfg.actions = actionsFromJson(root.value(QStringLiteral("actions")).toObject());
    cfg.showMenuBar = root.value(QStringLiteral("showMenuBar")).toBool(true);
    cfg.showToolBar = root.value(QStringLiteral("showToolBar")).toBool(true);
    cfg.showStatusBar = root.value(QStringLiteral("showStatusBar")).toBool(true);
    cfg.frameless = root.value(QStringLiteral("frameless")).toBool(false);
    cfg.trayEnabled = root.value(QStringLiteral("trayEnabled")).toBool(true);
    cfg.closeToTray = root.value(QStringLiteral("closeToTray")).toBool(true);
    cfg.minimizeToTray = root.value(QStringLiteral("minimizeToTray")).toBool(false);
    cfg.raiseOnMotion = root.value(QStringLiteral("raiseOnMotion")).toBool(false);
    cfg.raiseMode = root.value(QStringLiteral("raiseMode"))
                        .toString(QStringLiteral("restore"));
    cfg.language = root.value(QStringLiteral("language"))
                       .toString(QStringLiteral("system"));
    cfg.flashOnMotion = root.value(QStringLiteral("flashOnMotion")).toBool(true);
    cfg.flashMilliseconds =
        root.value(QStringLiteral("flashMilliseconds")).toInt(1500);
    cfg.soundOnMotion = root.value(QStringLiteral("soundOnMotion")).toBool(false);
    cfg.soundFile = root.value(QStringLiteral("soundFile")).toString();
    cfg.hwdec = root.value(QStringLiteral("hwdec")).toString(QStringLiteral("hw"));
    cfg.lowLatency = root.value(QStringLiteral("lowLatency")).toBool(true);
    cfg.debugLogging = root.value(QStringLiteral("debugLogging")).toBool(false);

    const QJsonArray arr = root.value(QStringLiteral("cameras")).toArray();
    for (const QJsonValue &v : arr) {
        const QJsonObject o = v.toObject();
        CameraConfig c;
        c.id = o.value(QStringLiteral("id")).toString(newId());
        c.name = o.value(QStringLiteral("name")).toString();
        c.host = o.value(QStringLiteral("host")).toString();
        c.user = o.value(QStringLiteral("user")).toString(QStringLiteral("admin"));
        c.password = o.value(QStringLiteral("password")).toString();
        c.passwordCommand = o.value(QStringLiteral("passwordCommand")).toString();
        c.uid = o.value(QStringLiteral("uid")).toString();
        c.stream = o.value(QStringLiteral("stream")).toString(QStringLiteral("sub"));
        c.transport = o.value(QStringLiteral("transport")).toString(QStringLiteral("rtsp"));
        c.customUrl = o.value(QStringLiteral("customUrl")).toString();
        c.enabled = o.value(QStringLiteral("enabled")).toBool(true);
        c.https = o.value(QStringLiteral("https")).toBool(false);
        c.muted = o.value(QStringLiteral("muted")).toBool(true);
        c.volume = o.value(QStringLiteral("volume")).toInt(50);
        c.row = o.value(QStringLiteral("row")).toInt(-1);
        c.col = o.value(QStringLiteral("col")).toInt(-1);
        c.rowSpan = qMax(1, o.value(QStringLiteral("rowSpan")).toInt(1));
        c.colSpan = qMax(1, o.value(QStringLiteral("colSpan")).toInt(1));
        c.useGlobalActions =
            o.value(QStringLiteral("useGlobalActions")).toBool(true);
        c.actions =
            actionsFromJson(o.value(QStringLiteral("actions")).toObject());
        c.motionCommand = o.value(QStringLiteral("motionCommand")).toString();
        // Older configurations only had a single command. Carry it over so an
        // upgrade does not silently stop running someone's hook.
        if (!c.motionCommand.isEmpty() && c.actions.command.isEmpty()) {
            c.actions.command = c.motionCommand;
            c.actions.runCommand = true;
            c.useGlobalActions = false;
        }
        c.motionSource = o.value(QStringLiteral("motionSource"))
                             .toString(QStringLiteral("camera"));
        c.motionZones = o.value(QStringLiteral("motionZones")).toString();
        c.motionSensitivity = o.value(QStringLiteral("motionSensitivity")).toInt(5);
        c.motionMinArea = o.value(QStringLiteral("motionMinArea")).toInt(20);
        c.audioDetection = o.value(QStringLiteral("audioDetection")).toBool(false);
        c.audioThresholdDb =
            o.value(QStringLiteral("audioThresholdDb")).toDouble(-35.0);
        c.audioHoldSeconds = o.value(QStringLiteral("audioHoldSeconds")).toInt(3);
        c.recordOnMotion = o.value(QStringLiteral("recordOnMotion")).toBool(false);
        c.recordTrailingSeconds =
            o.value(QStringLiteral("recordTrailingSeconds")).toInt(15);
        if (!c.host.isEmpty())
            cfg.cameras.append(c);
    }
    return cfg;
}

bool Config::save() const
{
    const QString file = path();
    QDir().mkpath(QFileInfo(file).absolutePath());

    QJsonArray arr;
    for (const CameraConfig &c : cameras) {
        QJsonObject o;
        o[QStringLiteral("id")] = c.id.isEmpty() ? newId() : c.id;
        o[QStringLiteral("name")] = c.name;
        o[QStringLiteral("host")] = c.host;
        o[QStringLiteral("user")] = c.user;
        o[QStringLiteral("password")] = c.password;
        o[QStringLiteral("passwordCommand")] = c.passwordCommand;
        o[QStringLiteral("uid")] = c.uid;
        o[QStringLiteral("stream")] = c.stream;
        o[QStringLiteral("transport")] = c.transport;
        o[QStringLiteral("customUrl")] = c.customUrl;
        o[QStringLiteral("enabled")] = c.enabled;
        o[QStringLiteral("https")] = c.https;
        o[QStringLiteral("muted")] = c.muted;
        o[QStringLiteral("volume")] = c.volume;
        o[QStringLiteral("row")] = c.row;
        o[QStringLiteral("col")] = c.col;
        o[QStringLiteral("rowSpan")] = c.rowSpan;
        o[QStringLiteral("colSpan")] = c.colSpan;
        o[QStringLiteral("useGlobalActions")] = c.useGlobalActions;
        o[QStringLiteral("actions")] = actionsToJson(c.actions);
        o[QStringLiteral("motionCommand")] = c.motionCommand;
        o[QStringLiteral("motionSource")] = c.motionSource;
        o[QStringLiteral("motionZones")] = c.motionZones;
        o[QStringLiteral("motionSensitivity")] = c.motionSensitivity;
        o[QStringLiteral("motionMinArea")] = c.motionMinArea;
        o[QStringLiteral("audioDetection")] = c.audioDetection;
        o[QStringLiteral("audioThresholdDb")] = c.audioThresholdDb;
        o[QStringLiteral("audioHoldSeconds")] = c.audioHoldSeconds;
        o[QStringLiteral("recordOnMotion")] = c.recordOnMotion;
        o[QStringLiteral("recordTrailingSeconds")] = c.recordTrailingSeconds;
        arr.append(o);
    }

    QJsonObject root;
    root[QStringLiteral("cameras")] = arr;
    root[QStringLiteral("gridColumns")] = gridColumns;
    root[QStringLiteral("gridRows")] = gridRows;
    root[QStringLiteral("showMotion")] = showMotion;
    root[QStringLiteral("recordDir")] = recordDir;
    root[QStringLiteral("actions")] = actionsToJson(actions);
    root[QStringLiteral("showMenuBar")] = showMenuBar;
    root[QStringLiteral("showToolBar")] = showToolBar;
    root[QStringLiteral("showStatusBar")] = showStatusBar;
    root[QStringLiteral("frameless")] = frameless;
    root[QStringLiteral("trayEnabled")] = trayEnabled;
    root[QStringLiteral("closeToTray")] = closeToTray;
    root[QStringLiteral("minimizeToTray")] = minimizeToTray;
    root[QStringLiteral("raiseOnMotion")] = raiseOnMotion;
    root[QStringLiteral("raiseMode")] = raiseMode;
    root[QStringLiteral("language")] = language;
    root[QStringLiteral("flashOnMotion")] = flashOnMotion;
    root[QStringLiteral("flashMilliseconds")] = flashMilliseconds;
    root[QStringLiteral("soundOnMotion")] = soundOnMotion;
    root[QStringLiteral("soundFile")] = soundFile;
    root[QStringLiteral("hwdec")] = hwdec;
    root[QStringLiteral("lowLatency")] = lowLatency;
    root[QStringLiteral("debugLogging")] = debugLogging;

    // QSaveFile writes to a temporary and renames on commit, so an interrupted
    // write cannot leave a half-written camera list behind.
    QSaveFile out(file);
    if (!out.open(QIODevice::WriteOnly))
        return false;
    out.write(QJsonDocument(root).toJson(QJsonDocument::Indented));
    if (!out.commit())
        return false;

    // The file holds camera passwords in clear text; keep it to the owner.
    QFile::setPermissions(file, QFileDevice::ReadOwner | QFileDevice::WriteOwner);
    return true;
}

QString Config::effectiveRecordDir() const
{
    if (!recordDir.isEmpty())
        return recordDir;
    return QStandardPaths::writableLocation(QStandardPaths::MoviesLocation)
           + QStringLiteral("/leolink");
}

QString Config::mpvHwdecValue() const
{
    if (hwdec == QLatin1String("off"))
        return QStringLiteral("no");
    if (hwdec == QLatin1String("copy"))
        return QStringLiteral("auto-copy");
    if (hwdec == QLatin1String("auto"))
        return QStringLiteral("auto-safe");

    // Named in order rather than left to mpv. mpv picks the first backend it
    // can load, which on an AMD card meant decoding through Vulkan while
    // rendering through OpenGL — a handover that produced a solid green
    // picture. Listing vaapi first keeps both on the same API, and the list
    // still falls back on hardware that has no VA-API at all.
    return QStringLiteral("vaapi,nvdec,no");
}

QString Config::effectiveSoundFile() const
{
    if (!soundFile.isEmpty())
        return soundFile;

    // Fall back to the freedesktop sound theme, which is present on most
    // desktops. Returning empty is fine — the caller then plays nothing.
    static const QStringList candidates{
        QStringLiteral("/usr/share/sounds/freedesktop/stereo/message.oga"),
        QStringLiteral("/usr/share/sounds/freedesktop/stereo/bell.oga"),
        QStringLiteral("/usr/share/sounds/freedesktop/stereo/complete.oga"),
    };
    for (const QString &candidate : candidates)
        if (QFileInfo::exists(candidate))
            return candidate;
    return {};
}

QList<CameraConfig> Config::active() const
{
    QList<CameraConfig> out;
    for (const CameraConfig &c : cameras)
        if (c.enabled && !c.host.isEmpty())
            out.append(c);
    return out;
}

QPair<int, int> Config::gridShape() const
{
    const QList<CameraConfig> cams = active();
    const int n = cams.size();
    if (n == 0)
        return {1, 1};

    // Automatic size: 1 camera → 1x1, 2 → 2x1, 3-4 → 2x2, 5-9 → 3x3 …
    int cols = gridColumns > 0
                   ? gridColumns
                   : qMax(1, static_cast<int>(std::ceil(std::sqrt(double(n)))));
    int rows = gridRows > 0 ? gridRows : (n + cols - 1) / cols;

    // A placement must never end up outside the grid, otherwise the camera
    // would silently vanish from the window.
    for (const CameraConfig &c : cams) {
        if (c.col >= 0)
            cols = qMax(cols, c.col + c.colSpan);
        if (c.row >= 0)
            rows = qMax(rows, c.row + c.rowSpan);
    }
    return {qMax(1, cols), qMax(1, rows)};
}

QList<Placement> Config::layout() const
{
    const QList<CameraConfig> cams = active();
    const auto [cols, rows] = gridShape();

    // Occupancy map; grown lazily so an auto-placed camera can push the grid
    // one row further rather than being dropped.
    QList<QList<bool>> taken;
    auto ensureRows = [&taken, cols](int wanted) {
        while (taken.size() < wanted)
            taken.append(QList<bool>(cols, false));
    };
    ensureRows(rows);

    auto fits = [&](int r, int c, int rs, int cs) {
        if (c < 0 || c + cs > cols || r < 0)
            return false;
        ensureRows(r + rs);
        for (int i = r; i < r + rs; ++i)
            for (int j = c; j < c + cs; ++j)
                if (taken[i][j])
                    return false;
        return true;
    };
    auto occupy = [&](int r, int c, int rs, int cs) {
        ensureRows(r + rs);
        for (int i = r; i < r + rs; ++i)
            for (int j = c; j < c + cs; ++j)
                taken[i][j] = true;
    };

    QList<Placement> result;
    QList<const CameraConfig *> deferred;

    // Explicit placements win, and are claimed first.
    for (const CameraConfig &c : cams) {
        const int cs = qBound(1, c.colSpan, cols);
        const int rs = qMax(1, c.rowSpan);
        if (c.row >= 0 && c.col >= 0 && fits(c.row, c.col, rs, cs)) {
            occupy(c.row, c.col, rs, cs);
            result.append({c.id, c.row, c.col, rs, cs});
        } else {
            deferred.append(&c);
        }
    }

    // Everything else fills the first free cell in reading order.
    for (const CameraConfig *c : deferred) {
        const int cs = qBound(1, c->colSpan, cols);
        const int rs = qMax(1, c->rowSpan);
        bool placed = false;
        for (int r = 0; !placed && r < taken.size() + rs; ++r) {
            ensureRows(r + rs);
            for (int col = 0; col + cs <= cols; ++col) {
                if (fits(r, col, rs, cs)) {
                    occupy(r, col, rs, cs);
                    result.append({c->id, r, col, rs, cs});
                    placed = true;
                    break;
                }
            }
        }
    }
    return result;
}

} // namespace leolink
