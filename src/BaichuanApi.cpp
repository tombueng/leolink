#include "BaichuanApi.h"

#include <cstdio>

#include <QDomDocument>
#include <QFile>
#include <QFileInfo>
#include <QHash>
#include <QJsonArray>
#include <QJsonDocument>
#include <QMutex>
#include <QTextStream>
#include <QThread>

#include "Baichuan.h"
#include "Firmware.h"
#include "Log.h"

namespace leolink {

namespace {

// ── message numbers ─────────────────────────────────────────────────────────
// Get and set are separate messages, usually neighbours. Taken from
// reolink_aio's Baichuan client and confirmed on an E1, an E1 Pro and an
// E1 Zoom; what each one carries is in docs/protocol.md.
//
// reolink_aio is MIT, Copyright (c) 2023 starkillerOG. Its message numbers and
// XML element names are what this file follows; its notice is in LICENSE.
constexpr quint32 kReboot = 23;
constexpr quint32 kSetImage = 25;
constexpr quint32 kGetImage = 26;
constexpr quint32 kSetPorts = 36;
constexpr quint32 kGetPorts = 37;
constexpr quint32 kGetOsd = 44;
constexpr quint32 kSetOsd = 45;
constexpr quint32 kGetMotion = 46;
constexpr quint32 kSetMotion = 47;
constexpr quint32 kGetMask = 52;
constexpr quint32 kSetMask = 53;
constexpr quint32 kGetRecordCfg = 54;
constexpr quint32 kSetRecordCfg = 55;
constexpr quint32 kGetEncoder = 56;
constexpr quint32 kSetEncoder = 57;
constexpr quint32 kGetFtp = 70;
constexpr quint32 kSetFtp = 71;
constexpr quint32 kGetNetwork = 76;
constexpr quint32 kVersion = 80;
constexpr quint32 kGetRecordPlan = 81;
constexpr quint32 kSetRecordPlan = 82;
constexpr quint32 kHdd = 102;
constexpr quint32 kGetTime = 104;
constexpr quint32 kSetTime = 105;
constexpr quint32 kUid = 114;
constexpr quint32 kWifiSignal = 115;
constexpr quint32 kWifi = 116;
constexpr quint32 kStreamInfo = 146;
constexpr quint32 kPtzPresets = 190;
constexpr quint32 kGetLed = 208;
constexpr quint32 kSetLed = 209;
constexpr quint32 kSetEmail = 216;
constexpr quint32 kGetEmail = 217;
constexpr quint32 kSetPush = 218;
constexpr quint32 kGetPush = 219;
constexpr quint32 kSetAudioAlarm = 231;
constexpr quint32 kGetAudioAlarm = 232;
constexpr quint32 kGetDayNight = 296;
constexpr quint32 kSetDayNight = 297;
constexpr quint32 kGetAi = 299;
constexpr quint32 kSetAi = 300;

/// The HTTP API's code for "this firmware does not know that command".
constexpr int kUnsupported = -9;
/// Not one of the camera's codes: the connection went, and asking again on a
/// fresh one is worth a try.
constexpr int kConnectionLost = -1001;
/// Nor this: the camera answered a write with something other than 200.
constexpr int kRefused = -1002;

// ── XML ─────────────────────────────────────────────────────────────────────

/// "A/B/C" below `from`, or a null element.
QDomElement at(const QDomElement &from, const QString &path)
{
    QDomElement e = from;
    for (const QString &step : path.split(QLatin1Char('/'), Qt::SkipEmptyParts)) {
        if (e.isNull())
            break;
        e = e.firstChildElement(step);
    }
    return e;
}

bool has(const QDomElement &from, const QString &path)
{
    return !at(from, path).isNull();
}

QString text(const QDomElement &from, const QString &path)
{
    return at(from, path).text().trimmed();
}

int number(const QDomElement &from, const QString &path, int fallback = 0)
{
    bool ok = false;
    const int value = text(from, path).toInt(&ok);
    return ok ? value : fallback;
}

/// Replaces the text of an element that is already there. Never creates one:
/// an element the camera did not send is one it does not expect back.
void put(const QDomElement &from, const QString &path, const QString &value)
{
    QDomElement e = at(from, path);
    if (e.isNull())
        return;
    while (e.hasChildNodes())
        e.removeChild(e.firstChild());
    e.appendChild(e.ownerDocument().createTextNode(value));
}

void put(const QDomElement &from, const QString &path, int value)
{
    put(from, path, QString::number(value));
}

/// The document as the camera writes its own: declaration, then elements one
/// to a line.
QString serialise(const QDomDocument &doc)
{
    QString out;
    QTextStream stream(&out);
    doc.documentElement().save(stream, 0);
    return QStringLiteral("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n") + out;
}

QJsonObject span(int min, int max)
{
    return {{QStringLiteral("min"), min}, {QStringLiteral("max"), max}};
}

QJsonObject span(const QDomElement &e)
{
    return span(number(e, QStringLiteral("min")), number(e, QStringLiteral("max")));
}

QJsonArray strings(std::initializer_list<const char *> list)
{
    QJsonArray out;
    for (const char *s : list)
        out.append(QLatin1String(s));
    return out;
}

const QString kBoolean = QStringLiteral("boolean");

/// "high" → "High". The HTTP API capitalises every keyword the XML does not.
QString capitalised(const QString &s)
{
    return s.isEmpty() ? s : s.left(1).toUpper() + s.mid(1);
}

/// Compares two keywords the way the two protocols spell them differently:
/// "Anti-Smearing" and "antiSmearing", "Black&White" and "blackAndWhite".
QString folded(QString s)
{
    s.replace(QLatin1String("&"), QLatin1String("and"));
    s.remove(QLatin1Char('-'));
    s.remove(QLatin1Char(' '));
    return s.toLower();
}

QJsonObject errorEntry(const QString &command, int code, const QString &detail)
{
    return {{QStringLiteral("cmd"), command},
            {QStringLiteral("code"), 1},
            {QStringLiteral("error"),
             QJsonObject{{QStringLiteral("rspCode"), code},
                         {QStringLiteral("detail"), detail}}}};
}

// ── one exchange with the camera ────────────────────────────────────────────

struct Doc {
    int status{-1};
    QDomDocument dom;
    bool ok() const { return status == 200; }
    /// `<body>`.
    QDomElement body() const { return dom.documentElement(); }
};

/// One command's worth of talking to the camera.
struct Exchange {
    BaichuanClient &client;
    int channel;
    QString command;
    QJsonObject param;
    int action;
    bool lost{false};

    QString extension() const
    {
        return QStringLiteral("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n"
                              "<Extension version=\"1.1\">\n"
                              "<channelId>%1</channelId>\n"
                              "</Extension>\n").arg(channel);
    }

    Doc get(quint32 msg)
    {
        Doc doc;
        const QString xml = client.request(msg, QString(), extension(), &doc.status);
        if (doc.status < 0)
            lost = true;
        if (doc.ok() && !doc.dom.setContent(xml))
            doc.status = 0;   // answered, but with nothing anyone can read
        return doc;
    }

    /// Sends a document back. True when the camera took it.
    bool set(quint32 msg, const QDomDocument &doc)
    {
        int status = -1;
        client.request(msg, serialise(doc), extension(), &status);
        if (status < 0)
            lost = true;
        return status == 200;
    }

    /// The section this command was given, under its wrapper — `{"Osd": {…}}`
    /// gives the inner object.
    QJsonObject section(const QString &wrapper) const
    {
        return param.value(wrapper).toObject();
    }

    // ── what goes back ──────────────────────────────────────────────────────

    QJsonObject ok(const QJsonObject &value, const QJsonObject &range = {}) const
    {
        QJsonObject entry{{QStringLiteral("cmd"), command},
                          {QStringLiteral("code"), 0},
                          {QStringLiteral("value"), value}};
        if (!range.isEmpty())
            entry[QStringLiteral("range")] = range;
        return entry;
    }

    QJsonObject done() const
    {
        return ok({{QStringLiteral("rspCode"), 200}});
    }

    QJsonObject error(int code, const QString &detail) const
    {
        return errorEntry(command, code, detail);
    }

    QJsonObject unsupported() const
    {
        return error(kUnsupported, QStringLiteral("not available over Baichuan"));
    }

    /// For a read the camera turned down, which is how it says it has no such
    /// thing: status 400 or 405, never anything more specific.
    QJsonObject missing(const Doc &doc) const
    {
        return doc.status < 0 ? error(kConnectionLost, client.lastError())
                              : unsupported();
    }

    QJsonObject refused(quint32 msg) const
    {
        return lost ? error(kConnectionLost, client.lastError())
                    : error(kRefused, QStringLiteral("The camera refused the change "
                                                     "(message %1).").arg(msg));
    }
};

// ── shared shapes ───────────────────────────────────────────────────────────

/// The week of hours, one character per hour, under a name per kind of event.
/// Baichuan lists them as typed items; HTTP keys them by an upper-case name.
/// "cry" and the "none" fillers have no HTTP name and are left as they are.
QString scheduleKey(const QString &type)
{
    static const QHash<QString, QString> names{
        {QStringLiteral("MD"), QStringLiteral("MD")},
        {QStringLiteral("Normal"), QStringLiteral("TIMING")},
        {QStringLiteral("people"), QStringLiteral("AI_PEOPLE")},
        {QStringLiteral("vehicle"), QStringLiteral("AI_VEHICLE")},
        {QStringLiteral("dog_cat"), QStringLiteral("AI_DOG_CAT")},
        {QStringLiteral("face"), QStringLiteral("AI_FACE")},
    };
    return names.value(type);
}

QJsonObject readSchedule(const QDomElement &task, int channel, QJsonObject *range,
                         bool plainRange = false)
{
    QJsonObject table;
    QJsonObject tableRange;
    for (QDomElement item = at(task, QStringLiteral("typeScheduleList/item"));
         !item.isNull(); item = item.nextSiblingElement(QStringLiteral("item"))) {
        const QString key = scheduleKey(text(item, QStringLiteral("type")));
        if (key.isEmpty())
            continue;
        table[key] = text(item, QStringLiteral("valueTable"));
        // The HTTP API describes the same thing two ways: "boolean" for
        // recording, a length for everything else.
        tableRange[key] = plainRange
                              ? QJsonValue(kBoolean)
                              : QJsonValue(QJsonObject{
                                    {QStringLiteral("table"),
                                     QJsonObject{{QStringLiteral("maxLen"), 168},
                                                 {QStringLiteral("minLen"), 168}}}});
    }
    if (range)
        *range = QJsonObject{{QStringLiteral("channel"), channel},
                             {QStringLiteral("table"), tableRange}};
    return {{QStringLiteral("channel"), channel}, {QStringLiteral("table"), table}};
}

void writeSchedule(const QDomElement &task, const QJsonObject &schedule)
{
    const QJsonObject table = schedule.value(QStringLiteral("table")).toObject();
    for (QDomElement item = at(task, QStringLiteral("typeScheduleList/item"));
         !item.isNull(); item = item.nextSiblingElement(QStringLiteral("item"))) {
        const QString hours =
            table.value(scheduleKey(text(item, QStringLiteral("type")))).toString();
        if (hours.size() == 168)
            put(item, QStringLiteral("valueTable"), hours);
    }
}

/// What a value was before, so a write only touches what was changed. The
/// dialog sends a whole section back whether one field was edited or none,
/// and a mapping that is exact only one way round is then harmless for every
/// field nobody touched.
bool changed(const QJsonObject &now, const QJsonObject &before, const QString &key)
{
    return now.contains(key) && now.value(key) != before.value(key);
}

// ── device ──────────────────────────────────────────────────────────────────

QJsonObject getDevInfo(Exchange &x)
{
    const Doc doc = x.get(kVersion);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement v = at(doc.body(), QStringLiteral("VersionInfo"));
    QJsonObject info{
        {QStringLiteral("name"), text(v, QStringLiteral("name"))},
        {QStringLiteral("model"), text(v, QStringLiteral("type"))},
        {QStringLiteral("serial"), text(v, QStringLiteral("serialNumber"))},
        {QStringLiteral("buildDay"), text(v, QStringLiteral("buildDay"))},
        {QStringLiteral("hardVer"), text(v, QStringLiteral("hardwareVersion"))},
        {QStringLiteral("cfgVer"), text(v, QStringLiteral("cfgVersion"))},
        {QStringLiteral("firmVer"), text(v, QStringLiteral("firmwareVersion"))},
        {QStringLiteral("detail"), text(v, QStringLiteral("detail"))},
        {QStringLiteral("pakSuffix"), text(v, QStringLiteral("pakSuffix"))},
        // Not in the XML as such, but the hardware's name starts with it:
        // "DB_566128M5MP_W" is what the HTTP API calls a BELL.
        {QStringLiteral("type"), text(v, QStringLiteral("hardwareVersion")).startsWith(QLatin1String("DB_"))
                                     ? QStringLiteral("BELL")
                                     : QStringLiteral("IPC")},
        {QStringLiteral("channelNum"), 1},
    };
    if (has(v, QStringLiteral("itemNo")))
        info[QStringLiteral("itemNo")] = text(v, QStringLiteral("itemNo"));
    const Doc wifi = x.get(kWifi);
    info[QStringLiteral("wifi")] = wifi.ok() ? 1 : 0;
    const Doc hdd = x.get(kHdd);
    if (hdd.ok())
        info[QStringLiteral("diskNum")] =
            hdd.body().elementsByTagName(QStringLiteral("HddInfo")).size();
    return x.ok({{QStringLiteral("DevInfo"), info}});
}

QJsonObject reboot(Exchange &x)
{
    int status = -1;
    x.client.request(kReboot, QString(), x.extension(), &status);
    // The camera may well go before it answers; a dropped connection here is
    // the command working.
    if (status == 200 || status < 0)
        return x.done();
    return x.refused(kReboot);
}

// ── encoder ─────────────────────────────────────────────────────────────────

QJsonObject streamValue(const QDomElement &s)
{
    const int width = number(s, QStringLiteral("width"));
    const int height = number(s, QStringLiteral("height"));
    QJsonObject out{
        {QStringLiteral("width"), width},
        {QStringLiteral("height"), height},
        {QStringLiteral("size"), QStringLiteral("%1*%2").arg(width).arg(height)},
        {QStringLiteral("bitRate"), number(s, QStringLiteral("bitRate"))},
        {QStringLiteral("frameRate"), number(s, QStringLiteral("frame"))},
        {QStringLiteral("profile"), capitalised(text(s, QStringLiteral("encoderProfile")))},
    };
    if (has(s, QStringLiteral("gop/cur")))
        out[QStringLiteral("gop")] = number(s, QStringLiteral("gop/cur"));
    return out;
}

QJsonObject getEnc(Exchange &x)
{
    const Doc enc = x.get(kGetEncoder);
    if (!enc.ok())
        return x.missing(enc);
    const QDomElement c = at(enc.body(), QStringLiteral("Compression"));
    const QDomElement main = at(c, QStringLiteral("mainStream"));
    const QDomElement sub = at(c, QStringLiteral("subStream"));

    QJsonObject value{
        {QStringLiteral("channel"), x.channel},
        {QStringLiteral("audio"), number(main, QStringLiteral("audio"))},
        {QStringLiteral("mainStream"), streamValue(main)},
        {QStringLiteral("subStream"), streamValue(sub)},
    };

    // The choices: one entry per main-stream resolution, each with the rates
    // valid at it, which is the shape the HTTP API's range has as well.
    QJsonArray entries;
    const Doc info = x.get(kStreamInfo);
    for (QDomElement si = at(info.body(), QStringLiteral("StreamInfoList/StreamInfo"));
         info.ok() && !si.isNull(); si = si.nextSiblingElement(QStringLiteral("StreamInfo"))) {
        QJsonObject entry{{QStringLiteral("audio"), kBoolean},
                          {QStringLiteral("chnBit"), number(si, QStringLiteral("channelBits"))}};
        for (QDomElement t = si.firstChildElement(QStringLiteral("encodeTable")); !t.isNull();
             t = t.nextSiblingElement(QStringLiteral("encodeTable"))) {
            const QString type = text(t, QStringLiteral("type"));
            const QDomElement current = at(c, type);
            if (current.isNull())
                continue;   // a third stream leolink does not offer
            const int width = number(t, QStringLiteral("resolution/width"));
            const int height = number(t, QStringLiteral("resolution/height"));
            QJsonArray frameRates;
            for (const QString &f : text(t, QStringLiteral("framerateTable")).split(QLatin1Char(',')))
                frameRates.append(f.trimmed().toInt());
            QJsonArray bitRates;
            for (const QString &b : text(t, QStringLiteral("bitrateTable")).split(QLatin1Char(',')))
                bitRates.append(b.trimmed().toInt());
            QJsonObject stream{
                {QStringLiteral("width"), width},
                {QStringLiteral("height"), height},
                {QStringLiteral("size"), QStringLiteral("%1*%2").arg(width).arg(height)},
                {QStringLiteral("frameRate"), frameRates},
                {QStringLiteral("bitRate"), bitRates},
                {QStringLiteral("profile"), strings({"Base", "Main", "High"})},
                {QStringLiteral("default"),
                 QJsonObject{{QStringLiteral("bitRate"), number(t, QStringLiteral("defaultBitrate"))},
                             {QStringLiteral("frameRate"), number(t, QStringLiteral("defaultFramerate"))},
                             {QStringLiteral("gop"), number(t, QStringLiteral("defaultGop"))}}},
            };
            if (has(current, QStringLiteral("gop")))
                stream[QStringLiteral("gop")] = span(at(current, QStringLiteral("gop")));
            if (type == QLatin1String("mainStream"))
                stream[QStringLiteral("vType")] =
                    number(current, QStringLiteral("videoEncType")) == 1 ? QStringLiteral("h265")
                                                                         : QStringLiteral("h264");
            entry[type] = stream;
        }
        entries.append(entry);
    }
    return x.ok({{QStringLiteral("Enc"), value}}, {{QStringLiteral("Enc"), entries}});
}

QJsonObject setEnc(Exchange &x)
{
    Doc doc = x.get(kGetEncoder);
    if (!doc.ok())
        return x.missing(doc);
    const QJsonObject want = x.section(QStringLiteral("Enc"));
    const QDomElement c = at(doc.body(), QStringLiteral("Compression"));

    for (const QString &name : {QStringLiteral("mainStream"), QStringLiteral("subStream")}) {
        const QDomElement s = at(c, name);
        if (s.isNull() || !want.contains(name))
            continue;
        const QJsonObject now = want.value(name).toObject();
        const QJsonObject before = streamValue(s);
        if (changed(now, before, QStringLiteral("size"))) {
            const QStringList wh = now.value(QStringLiteral("size")).toString().split(QLatin1Char('*'));
            if (wh.size() == 2) {
                put(s, QStringLiteral("width"), wh.at(0));
                put(s, QStringLiteral("height"), wh.at(1));
                // Named "2560*1920" on some firmware and "D1" on others; only
                // the first kind can be rewritten without a table of names.
                if (text(s, QStringLiteral("resolutionName")).contains(QLatin1Char('*')))
                    put(s, QStringLiteral("resolutionName"), now.value(QStringLiteral("size")).toString());
            }
        }
        if (changed(now, before, QStringLiteral("frameRate")))
            put(s, QStringLiteral("frame"), now.value(QStringLiteral("frameRate")).toInt());
        if (changed(now, before, QStringLiteral("bitRate")))
            put(s, QStringLiteral("bitRate"), now.value(QStringLiteral("bitRate")).toInt());
        if (changed(now, before, QStringLiteral("profile")))
            put(s, QStringLiteral("encoderProfile"),
                now.value(QStringLiteral("profile")).toString().toLower());
        if (changed(now, before, QStringLiteral("gop")))
            put(s, QStringLiteral("gop/cur"), now.value(QStringLiteral("gop")).toInt());
    }
    // One switch in the HTTP API, one per stream here, and the HTTP API's is
    // the main stream's. Only a change is copied to every stream: a doorbell
    // keeps its third stream silent while the others have sound, and writing
    // the switch back unchanged turned that one on.
    const int audio = want.value(QStringLiteral("audio")).toInt();
    if (want.contains(QStringLiteral("audio")) &&
        audio != number(at(c, QStringLiteral("mainStream")), QStringLiteral("audio"))) {
        for (QDomElement s = c.firstChildElement(); !s.isNull(); s = s.nextSiblingElement())
            put(s, QStringLiteral("audio"), audio);
    }
    return x.set(kSetEncoder, doc.dom) ? x.done() : x.refused(kSetEncoder);
}

// ── picture ─────────────────────────────────────────────────────────────────

const QStringList kImageKeys{QStringLiteral("bright"), QStringLiteral("contrast"),
                             QStringLiteral("saturation"), QStringLiteral("hue"),
                             QStringLiteral("sharpen")};

QJsonObject getImage(Exchange &x)
{
    const Doc doc = x.get(kGetImage);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement v = at(doc.body(), QStringLiteral("VideoInput"));
    QJsonObject value{{QStringLiteral("channel"), x.channel}};
    QJsonObject range{{QStringLiteral("channel"), x.channel}};
    for (const QString &key : kImageKeys) {
        if (!has(v, key))
            continue;
        value[key] = number(v, key);
        range[key] = span(0, 255);
    }
    return x.ok({{QStringLiteral("Image"), value}}, {{QStringLiteral("Image"), range}});
}

QJsonObject setImage(Exchange &x)
{
    Doc doc = x.get(kGetImage);
    if (!doc.ok())
        return x.missing(doc);
    const QJsonObject want = x.section(QStringLiteral("Image"));
    const QDomElement v = at(doc.body(), QStringLiteral("VideoInput"));
    for (const QString &key : kImageKeys) {
        if (want.contains(key))
            put(v, key, want.value(key).toInt());
    }
    return x.set(kSetImage, doc.dom) ? x.done() : x.refused(kSetImage);
}

/// One keyword in the XML's spelling, translated to the HTTP API's from a list
/// of what the HTTP API accepts. Unknown words pass through capitalised.
QString keyword(const QString &xml, const QStringList &http)
{
    for (const QString &h : http)
        if (folded(h) == folded(xml))
            return h;
    return capitalised(xml);
}

const QStringList kDayNight{QStringLiteral("Auto"), QStringLiteral("Color"),
                            QStringLiteral("Black&White")};
const QStringList kExposure{QStringLiteral("Auto"), QStringLiteral("LowNoise"),
                            QStringLiteral("Anti-Smearing"), QStringLiteral("Manual")};
const QStringList kAntiFlicker{QStringLiteral("Other"), QStringLiteral("50HZ"),
                               QStringLiteral("60HZ"), QStringLiteral("Off")};
const QStringList kBackLight{QStringLiteral("Off"), QStringLiteral("BackLightControl"),
                             QStringLiteral("DynamicRangeControl")};
const QStringList kAutoManual{QStringLiteral("Auto"), QStringLiteral("Manual")};

QJsonArray toArray(const QStringList &list)
{
    return QJsonArray::fromStringList(list);
}

/// The image-processing settings, which in XML share a document with the
/// sliders above and lean on a second message for the day/night threshold.
QJsonObject ispValue(const QDomElement &a, const Doc &threshold, int channel,
                     QJsonObject *range)
{
    QJsonObject v{{QStringLiteral("channel"), channel}};
    QJsonObject r{{QStringLiteral("channel"), channel}};

    if (has(a, QStringLiteral("PowerLineFrequency"))) {
        v[QStringLiteral("antiFlicker")] =
            number(a, QStringLiteral("PowerLineFrequency/enable")) == 0
                ? QStringLiteral("Off")
                : keyword(text(a, QStringLiteral("PowerLineFrequency/mode")), kAntiFlicker);
        r[QStringLiteral("antiFlicker")] = toArray(kAntiFlicker);
    }
    if (has(a, QStringLiteral("BLC"))) {
        const QString mode = text(a, QStringLiteral("BLC/mode"));
        v[QStringLiteral("backLight")] =
            number(a, QStringLiteral("BLC/enable")) == 0 ? QStringLiteral("Off")
            : mode.contains(QLatin1String("dynamic"), Qt::CaseInsensitive)
                ? QStringLiteral("DynamicRangeControl")
                : QStringLiteral("BackLightControl");
        r[QStringLiteral("backLight")] = toArray(kBackLight);
        v[QStringLiteral("blc")] = number(a, QStringLiteral("BLC/backlight/cur"));
        r[QStringLiteral("blc")] = span(at(a, QStringLiteral("BLC/backlight")));
        v[QStringLiteral("drc")] = number(a, QStringLiteral("BLC/dynamicrange/cur"));
        r[QStringLiteral("drc")] = span(at(a, QStringLiteral("BLC/dynamicrange")));
    }
    for (const auto &[http, xml] : {std::pair{QStringLiteral("bd_day"), QStringLiteral("bdDayColor")},
                                    std::pair{QStringLiteral("bd_night"), QStringLiteral("bdNight")}}) {
        const QDomElement b = at(a, xml);
        if (b.isNull())
            continue;
        v[http] = QJsonObject{{QStringLiteral("mode"), keyword(text(b, QStringLiteral("mode")), kAutoManual)},
                              {QStringLiteral("bright"), number(b, QStringLiteral("bright/cur"))},
                              {QStringLiteral("dark"), number(b, QStringLiteral("dark/cur"))}};
        r[http] = QJsonObject{{QStringLiteral("mode"), toArray(kAutoManual)},
                              {QStringLiteral("bright"), span(at(b, QStringLiteral("bright")))},
                              {QStringLiteral("dark"), span(at(b, QStringLiteral("dark")))}};
    }
    if (has(a, QStringLiteral("Scene"))) {
        v[QStringLiteral("whiteBalance")] = keyword(text(a, QStringLiteral("Scene/mode")), kAutoManual);
        r[QStringLiteral("whiteBalance")] = toArray(kAutoManual);
        v[QStringLiteral("redGain")] = number(a, QStringLiteral("Scene/Redgain/cur"));
        r[QStringLiteral("redGain")] = span(at(a, QStringLiteral("Scene/Redgain")));
        v[QStringLiteral("blueGain")] = number(a, QStringLiteral("Scene/Bluegain/cur"));
        r[QStringLiteral("blueGain")] = span(at(a, QStringLiteral("Scene/Bluegain")));
    }
    if (has(a, QStringLiteral("DayNight/mode"))) {
        v[QStringLiteral("dayNight")] = keyword(text(a, QStringLiteral("DayNight/mode")), kDayNight);
        r[QStringLiteral("dayNight")] = toArray(kDayNight);
    }
    if (threshold.ok()) {
        const QDomElement t = at(threshold.body(), QStringLiteral("DayNightThreshold/thresholdval"));
        if (!t.isNull()) {
            v[QStringLiteral("dayNightThreshold")] = number(t, QStringLiteral("cur"));
            r[QStringLiteral("dayNightThreshold")] = span(t);
        }
    }
    if (has(a, QStringLiteral("Exposure"))) {
        v[QStringLiteral("exposure")] = keyword(text(a, QStringLiteral("Exposure/mode")), kExposure);
        r[QStringLiteral("exposure")] = toArray(kExposure);
        for (const auto &[http, xml] : {std::pair{QStringLiteral("gain"), QStringLiteral("Exposure/Gainctl")},
                                        std::pair{QStringLiteral("shutter"), QStringLiteral("Exposure/Shutterctl")}}) {
            const QDomElement e = at(a, xml);
            if (e.isNull())
                continue;
            v[http] = span(number(e, QStringLiteral("curMin")), number(e, QStringLiteral("curMax")));
            r[http] = span(number(e, QStringLiteral("defMin")), number(e, QStringLiteral("defMax")));
        }
    }
    if (has(a, QStringLiteral("mirror"))) {
        v[QStringLiteral("mirroring")] = number(a, QStringLiteral("mirror"));
        r[QStringLiteral("mirroring")] = kBoolean;
    }
    if (has(a, QStringLiteral("flip"))) {
        v[QStringLiteral("rotation")] = number(a, QStringLiteral("flip"));
        r[QStringLiteral("rotation")] = kBoolean;
    }
    if (has(a, QStringLiteral("nr3d/enable"))) {
        v[QStringLiteral("nr3d")] = number(a, QStringLiteral("nr3d/enable"));
        r[QStringLiteral("nr3d")] = kBoolean;
    }
    if (has(a, QStringLiteral("hdrSwitch"))) {
        v[QStringLiteral("hdr")] = number(a, QStringLiteral("hdrSwitch"));
        // A bit per mode, as for the frame rate below. Where there are more
        // than off and on — a doorbell has three, 7 here — the HTTP API lists
        // them: off, then the rest from the top, on the one camera seen.
        const int ability = number(a, QStringLiteral("hdrAbility"));
        if (ability > 3) {
            QJsonArray modes{0};
            for (int bit = 7; bit >= 1; --bit)
                if (ability & (1 << bit))
                    modes.append(bit);
            r[QStringLiteral("hdr")] = modes;
        } else {
            r[QStringLiteral("hdr")] = kBoolean;
        }
    }
    if (has(a, QStringLiteral("constantFrameRate"))) {
        v[QStringLiteral("constantFrameRate")] = number(a, QStringLiteral("constantFrameRate"));
        // A bit per mode the camera can do.
        QJsonArray modes;
        const int ability = number(a, QStringLiteral("constantFrameRateAbility"));
        for (int bit = 0; bit < 8; ++bit)
            if (ability & (1 << bit))
                modes.append(bit);
        r[QStringLiteral("constantFrameRate")] = modes;
    }
    if (range)
        *range = r;
    return v;
}

QJsonObject getIsp(Exchange &x)
{
    const Doc doc = x.get(kGetImage);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement a = at(doc.body(), QStringLiteral("InputAdvanceCfg"));
    if (a.isNull())
        return x.unsupported();
    const Doc threshold = x.get(kGetDayNight);
    QJsonObject range;
    const QJsonObject value = ispValue(a, threshold, x.channel, &range);
    return x.ok({{QStringLiteral("Isp"), value}}, {{QStringLiteral("Isp"), range}});
}

QJsonObject setIsp(Exchange &x)
{
    Doc doc = x.get(kGetImage);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement a = at(doc.body(), QStringLiteral("InputAdvanceCfg"));
    Doc threshold = x.get(kGetDayNight);
    const QJsonObject before = ispValue(a, threshold, x.channel, nullptr);
    const QJsonObject want = x.section(QStringLiteral("Isp"));
    auto str = [&](const char *key) { return want.value(QLatin1String(key)).toString(); };
    auto num = [&](const char *key) { return want.value(QLatin1String(key)).toInt(); };
    auto is = [&](const char *key) { return changed(want, before, QLatin1String(key)); };
    bool touched = false;

    if (is("antiFlicker")) {
        touched = true;
        if (str("antiFlicker") == QLatin1String("Off")) {
            put(a, QStringLiteral("PowerLineFrequency/enable"), 0);
        } else {
            put(a, QStringLiteral("PowerLineFrequency/enable"), 1);
            put(a, QStringLiteral("PowerLineFrequency/mode"), str("antiFlicker").toLower());
        }
    }
    if (is("backLight")) {
        touched = true;
        const QString b = str("backLight");
        put(a, QStringLiteral("BLC/enable"), b == QLatin1String("Off") ? 0 : 1);
        if (b == QLatin1String("BackLightControl"))
            put(a, QStringLiteral("BLC/mode"), QStringLiteral("backLight"));
        else if (b == QLatin1String("DynamicRangeControl"))
            put(a, QStringLiteral("BLC/mode"), QStringLiteral("dynamicRange"));
    }
    if (is("blc")) {
        touched = true;
        put(a, QStringLiteral("BLC/backlight/cur"), num("blc"));
    }
    if (is("drc")) {
        touched = true;
        put(a, QStringLiteral("BLC/dynamicrange/cur"), num("drc"));
    }
    for (const auto &[http, xml] : {std::pair{QStringLiteral("bd_day"), QStringLiteral("bdDayColor")},
                                    std::pair{QStringLiteral("bd_night"), QStringLiteral("bdNight")}}) {
        if (!changed(want, before, http))
            continue;
        touched = true;
        const QJsonObject b = want.value(http).toObject();
        const QDomElement e = at(a, xml);
        put(e, QStringLiteral("mode"), b.value(QStringLiteral("mode")).toString().toLower());
        put(e, QStringLiteral("bright/cur"), b.value(QStringLiteral("bright")).toInt());
        put(e, QStringLiteral("dark/cur"), b.value(QStringLiteral("dark")).toInt());
    }
    if (is("whiteBalance")) {
        touched = true;
        put(a, QStringLiteral("Scene/mode"), str("whiteBalance").toLower());
    }
    if (is("redGain")) {
        touched = true;
        put(a, QStringLiteral("Scene/Redgain/cur"), num("redGain"));
    }
    if (is("blueGain")) {
        touched = true;
        put(a, QStringLiteral("Scene/Bluegain/cur"), num("blueGain"));
    }
    if (is("dayNight")) {
        // "Black&White" is "blackAndWhite", as reolink_aio writes it.
        touched = true;
        QString mode = str("dayNight");
        mode.replace(QLatin1String("&"), QLatin1String("And"));
        put(a, QStringLiteral("DayNight/mode"), mode.left(1).toLower() + mode.mid(1));
    }
    if (is("exposure")) {
        touched = true;
        put(a, QStringLiteral("Exposure/mode"), str("exposure").toLower());
    }
    for (const auto &[http, xml] : {std::pair{QStringLiteral("gain"), QStringLiteral("Exposure/Gainctl")},
                                    std::pair{QStringLiteral("shutter"), QStringLiteral("Exposure/Shutterctl")}}) {
        if (!changed(want, before, http))
            continue;
        touched = true;
        const QJsonObject g = want.value(http).toObject();
        put(a, xml + QStringLiteral("/curMin"), g.value(QStringLiteral("min")).toInt());
        put(a, xml + QStringLiteral("/curMax"), g.value(QStringLiteral("max")).toInt());
    }
    for (const auto &[http, xml] : {std::pair{"mirroring", "mirror"}, std::pair{"rotation", "flip"},
                                    std::pair{"nr3d", "nr3d/enable"}, std::pair{"hdr", "hdrSwitch"},
                                    std::pair{"constantFrameRate", "constantFrameRate"}}) {
        if (!is(http))
            continue;
        touched = true;
        put(a, QLatin1String(xml), num(http));
    }

    if (touched && !x.set(kSetImage, doc.dom))
        return x.refused(kSetImage);
    if (is("dayNightThreshold") && threshold.ok()) {
        put(threshold.body(), QStringLiteral("DayNightThreshold/thresholdval/cur"),
            num("dayNightThreshold"));
        if (!x.set(kSetDayNight, threshold.dom))
            return x.refused(kSetDayNight);
    }
    return x.done();
}

// ── on-screen text ──────────────────────────────────────────────────────────

/// Positions are coordinates in 16.16 fixed point, with 1 for the near edge
/// and 65536 for the far one — and 65537 for the middle. Mapped out on an
/// E1 Zoom by setting each position over HTTP and reading it back here.
struct Corner {
    int x, y;
    const char *name;
};
constexpr Corner kCorners[]{
    {1, 1, "Upper Left"},         {65537, 1, "Top Center"},
    {65536, 1, "Upper Right"},    {1, 65536, "Lower Left"},
    {65537, 65536, "Bottom Center"}, {65536, 65536, "Lower Right"},
};

QString position(const QDomElement &e)
{
    const int x = number(e, QStringLiteral("topLeftX"));
    const int y = number(e, QStringLiteral("topLeftY"));
    for (const Corner &c : kCorners)
        if (c.x == x && c.y == y)
            return QLatin1String(c.name);
    return QStringLiteral("Other");
}

void place(const QDomElement &e, const QString &name)
{
    for (const Corner &c : kCorners) {
        if (name == QLatin1String(c.name)) {
            put(e, QStringLiteral("topLeftX"), c.x);
            put(e, QStringLiteral("topLeftY"), c.y);
        }
    }
}

QJsonObject osdValue(const QDomElement &body, int channel)
{
    const QDomElement name = at(body, QStringLiteral("OsdChannelName"));
    const QDomElement time = at(body, QStringLiteral("OsdDatetime"));
    return {
        {QStringLiteral("channel"), channel},
        {QStringLiteral("bgcolor"), number(name, QStringLiteral("enBgcolor"))},
        {QStringLiteral("watermark"), number(name, QStringLiteral("enWatermark"))},
        {QStringLiteral("osdChannel"),
         QJsonObject{{QStringLiteral("enable"), number(name, QStringLiteral("enable"))},
                     {QStringLiteral("name"), text(name, QStringLiteral("name"))},
                     {QStringLiteral("pos"), position(name)}}},
        {QStringLiteral("osdTime"),
         QJsonObject{{QStringLiteral("enable"), number(time, QStringLiteral("enable"))},
                     {QStringLiteral("pos"), position(time)}}},
    };
}

QJsonObject getOsd(Exchange &x)
{
    const Doc doc = x.get(kGetOsd);
    if (!doc.ok())
        return x.missing(doc);
    QJsonArray corners;
    for (const Corner &c : kCorners)
        corners.append(QLatin1String(c.name));
    const QJsonObject range{
        {QStringLiteral("channel"), x.channel},
        {QStringLiteral("bgcolor"), kBoolean},
        {QStringLiteral("watermark"), kBoolean},
        {QStringLiteral("osdChannel"),
         QJsonObject{{QStringLiteral("enable"), kBoolean},
                     {QStringLiteral("name"), QJsonObject{{QStringLiteral("maxLen"), 31}}},
                     {QStringLiteral("pos"), corners}}},
        {QStringLiteral("osdTime"),
         QJsonObject{{QStringLiteral("enable"), kBoolean}, {QStringLiteral("pos"), corners}}},
    };
    return x.ok({{QStringLiteral("Osd"), osdValue(doc.body(), x.channel)}},
                {{QStringLiteral("Osd"), range}});
}

QJsonObject setOsd(Exchange &x)
{
    Doc doc = x.get(kGetOsd);
    if (!doc.ok())
        return x.missing(doc);
    const QJsonObject want = x.section(QStringLiteral("Osd"));
    const QDomElement name = at(doc.body(), QStringLiteral("OsdChannelName"));
    const QDomElement time = at(doc.body(), QStringLiteral("OsdDatetime"));
    if (want.contains(QStringLiteral("bgcolor")))
        put(name, QStringLiteral("enBgcolor"), want.value(QStringLiteral("bgcolor")).toInt());
    if (want.contains(QStringLiteral("watermark")))
        put(name, QStringLiteral("enWatermark"), want.value(QStringLiteral("watermark")).toInt());
    const QJsonObject channelName = want.value(QStringLiteral("osdChannel")).toObject();
    if (channelName.contains(QStringLiteral("enable")))
        put(name, QStringLiteral("enable"), channelName.value(QStringLiteral("enable")).toInt());
    if (channelName.contains(QStringLiteral("name")))
        put(name, QStringLiteral("name"), channelName.value(QStringLiteral("name")).toString());
    place(name, channelName.value(QStringLiteral("pos")).toString());
    const QJsonObject clock = want.value(QStringLiteral("osdTime")).toObject();
    if (clock.contains(QStringLiteral("enable")))
        put(time, QStringLiteral("enable"), clock.value(QStringLiteral("enable")).toInt());
    place(time, clock.value(QStringLiteral("pos")).toString());
    return x.set(kSetOsd, doc.dom) ? x.done() : x.refused(kSetOsd);
}

// ── privacy areas ───────────────────────────────────────────────────────────

/// Area coordinates are on the same grid the camera reports for the main
/// stream — mapped by drawing an area over HTTP and reading it back here.
QJsonObject getMask(Exchange &x)
{
    const Doc doc = x.get(kGetMask);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement s = at(doc.body(), QStringLiteral("Shelter"));
    QJsonArray areas;
    for (QDomElement e = at(s, QStringLiteral("shelterList")).firstChildElement(); !e.isNull();
         e = e.nextSiblingElement()) {
        areas.append(QJsonObject{
            {QStringLiteral("block"),
             QJsonObject{{QStringLiteral("x"), number(e, QStringLiteral("topLeftX"))},
                         {QStringLiteral("y"), number(e, QStringLiteral("topLeftY"))},
                         {QStringLiteral("width"), number(e, QStringLiteral("width"))},
                         {QStringLiteral("height"), number(e, QStringLiteral("height"))}}},
            {QStringLiteral("screen"),
             QJsonObject{{QStringLiteral("width"), number(e, QStringLiteral("screenWidth"), 0)},
                         {QStringLiteral("height"), number(e, QStringLiteral("screenHeight"), 0)}}},
        });
    }
    QJsonObject value{{QStringLiteral("channel"), x.channel},
                      {QStringLiteral("enable"), number(s, QStringLiteral("enable"))}};
    // Missing, not empty, when there are none: that is what the HTTP API sends.
    value[QStringLiteral("area")] = areas.isEmpty() ? QJsonValue() : QJsonValue(areas);
    const QJsonObject range{{QStringLiteral("channel"), x.channel},
                            {QStringLiteral("enable"), kBoolean},
                            {QStringLiteral("maxAreas"),
                             number(s, QStringLiteral("maxTrackShelterNum"), 4)}};
    return x.ok({{QStringLiteral("Mask"), value}}, {{QStringLiteral("Mask"), range}});
}

QJsonObject setMask(Exchange &x)
{
    Doc doc = x.get(kGetMask);
    if (!doc.ok())
        return x.missing(doc);
    const QJsonObject want = x.section(QStringLiteral("Mask"));
    const QDomElement s = at(doc.body(), QStringLiteral("Shelter"));
    if (want.contains(QStringLiteral("enable")))
        put(s, QStringLiteral("enable"), want.value(QStringLiteral("enable")).toInt());
    // Drawing areas over Baichuan waits until the element layout of one has
    // been seen: none of the cameras this was written against had any, and an
    // invented layout is a good way to blank the wrong part of the picture.
    const QJsonArray areas = want.value(QStringLiteral("area")).toArray();
    if (!areas.isEmpty() && at(s, QStringLiteral("shelterList")).firstChildElement().isNull())
        return x.error(kRefused, QStringLiteral("Drawing privacy areas is not "
                                                "available over Baichuan yet."));
    return x.set(kSetMask, doc.dom) ? x.done() : x.refused(kSetMask);
}

// ── motion ──────────────────────────────────────────────────────────────────

/// The detection grid. HTTP: a string of '0' and '1', `cols` by `rows`.
/// Baichuan: a bitmap of `columns` by `rows` bits, base64, most significant
/// bit first, with the active `width` by `height` in its top left corner —
/// 80 by 60 inside 96 by 64 on every camera seen.
QString gridFromBitmap(const QDomElement &md)
{
    const int width = number(md, QStringLiteral("width"));
    const int height = number(md, QStringLiteral("height"));
    const int columns = number(md, QStringLiteral("scope/columns"));
    const QByteArray bits =
        QByteArray::fromBase64(text(md, QStringLiteral("scope/valueTable")).toLatin1());
    const int stride = (columns + 7) / 8;
    QString grid;
    grid.reserve(width * height);
    for (int r = 0; r < height; ++r) {
        for (int c = 0; c < width; ++c) {
            const int byte = r * stride + c / 8;
            const bool on = byte < bits.size() && (quint8(bits.at(byte)) >> (7 - c % 8)) & 1;
            grid.append(on ? QLatin1Char('1') : QLatin1Char('0'));
        }
    }
    return grid;
}

QString bitmapFromGrid(const QDomElement &md, const QString &grid)
{
    const int width = number(md, QStringLiteral("width"));
    const int height = number(md, QStringLiteral("height"));
    const int columns = number(md, QStringLiteral("scope/columns"));
    const int rows = number(md, QStringLiteral("scope/rows"));
    const int stride = (columns + 7) / 8;
    QByteArray bits(stride * rows, '\0');
    for (int r = 0; r < height && r < rows; ++r) {
        for (int c = 0; c < width && c < columns; ++c) {
            const int i = r * width + c;
            if (i < grid.size() && grid.at(i) == QLatin1Char('1'))
                bits[r * stride + c / 8] = char(quint8(bits.at(r * stride + c / 8)) | (0x80 >> (c % 8)));
        }
    }
    return QString::fromLatin1(bits.toBase64());
}

QJsonObject sensitivityBand(const QDomElement &e, bool withEnable)
{
    QJsonObject band{
        {QStringLiteral("id"), number(e, QStringLiteral("id"))},
        {QStringLiteral("sensitivity"), number(e, QStringLiteral("sensitivity"))},
        {QStringLiteral("beginHour"), number(e, QStringLiteral("beginHour"))},
        {QStringLiteral("beginMin"), number(e, QStringLiteral("beginMinute"))},
        {QStringLiteral("endHour"), number(e, QStringLiteral("endHour"))},
        {QStringLiteral("endMin"), number(e, QStringLiteral("endMinute"))},
    };
    if (withEnable) {
        band[QStringLiteral("enable")] = number(e, QStringLiteral("enable"));
        band[QStringLiteral("priority")] = number(e, QStringLiteral("priority"));
    }
    return band;
}

QJsonObject bandRange(int id, bool withEnable)
{
    QJsonObject r{{QStringLiteral("id"), id},
                  {QStringLiteral("sensitivity"), span(1, 50)},
                  {QStringLiteral("beginHour"), span(0, 23)},
                  {QStringLiteral("beginMin"), span(0, 59)},
                  {QStringLiteral("endHour"), span(0, 23)},
                  {QStringLiteral("endMin"), span(0, 59)}};
    if (withEnable) {
        r[QStringLiteral("enable")] = span(0, 1);
        r[QStringLiteral("priority")] = span(0, 0);
    }
    return r;
}

QJsonObject getMdAlarm(Exchange &x)
{
    const Doc doc = x.get(kGetMotion);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement md = at(doc.body(), QStringLiteral("MD"));
    const int width = number(md, QStringLiteral("width"));
    const int height = number(md, QStringLiteral("height"));

    QJsonArray sens;
    QJsonArray sensRange;
    for (QDomElement e = at(md, QStringLiteral("sensitivityInfoList/sensitivityInfo")); !e.isNull();
         e = e.nextSiblingElement(QStringLiteral("sensitivityInfo"))) {
        sens.append(sensitivityBand(e, false));
        sensRange.append(bandRange(number(e, QStringLiteral("id")), false));
    }

    // The newer list, where the firmware keeps one; otherwise the HTTP API
    // presents the older bands again, switched off — and so does this.
    QJsonArray newSens;
    QJsonArray newRange;
    const QDomElement fresh = at(md, QStringLiteral("sensInfoNew/sensInfoList"));
    for (QDomElement e = fresh.firstChildElement(); !e.isNull(); e = e.nextSiblingElement()) {
        newSens.append(sensitivityBand(e, true));
        newRange.append(bandRange(number(e, QStringLiteral("id")), true));
    }
    if (newSens.isEmpty()) {
        for (const QJsonValue &v : std::as_const(sens)) {
            QJsonObject band = v.toObject();
            band[QStringLiteral("enable")] = 0;
            band[QStringLiteral("priority")] = 0;
            newSens.append(band);
            newRange.append(bandRange(band.value(QStringLiteral("id")).toInt(), true));
        }
    }

    QJsonObject value{
        {QStringLiteral("channel"), x.channel},
        {QStringLiteral("scope"),
         QJsonObject{{QStringLiteral("cols"), width},
                     {QStringLiteral("rows"), height},
                     {QStringLiteral("table"), gridFromBitmap(md)}}},
        {QStringLiteral("sens"), sens},
    };
    QJsonObject range{
        {QStringLiteral("channel"), x.channel},
        {QStringLiteral("scope"),
         QJsonObject{{QStringLiteral("cols"), span(width, width)},
                     {QStringLiteral("rows"), span(height, height)},
                     {QStringLiteral("table"),
                      QJsonObject{{QStringLiteral("maxLen"), width * height}}}}},
        {QStringLiteral("sens"), sensRange},
    };
    // The sensitivity the dialog's own form asks for, which the HTTP API on
    // these models leaves out. Firmware that keeps sensInfoNew goes by its
    // default sensitivity alone: a band written to the older list is taken
    // with status 200 and ignored, on an E1 Pro measured with hand-written
    // XML. So is <enable>0</enable>, which is why there is no switch here —
    // offering one that does nothing would be worse than offering none.
    if (has(md, QStringLiteral("sensInfoNew/sensitivityDefault"))) {
        value[QStringLiteral("sensitivity")] =
            number(md, QStringLiteral("sensInfoNew/sensitivityDefault"));
        range[QStringLiteral("sensitivity")] = span(1, 50);
    }
    if (has(md, QStringLiteral("sensInfoNew"))) {
        value[QStringLiteral("useNewSens")] = 1;
        value[QStringLiteral("newSens")] = QJsonObject{
            {QStringLiteral("sensDef"), number(md, QStringLiteral("sensInfoNew/sensitivityDefault"))},
            {QStringLiteral("sens"), newSens}};
        range[QStringLiteral("useNewSens")] = span(0, 1);
        range[QStringLiteral("newSens")] = QJsonObject{
            {QStringLiteral("sensDef"), span(1, 50)}, {QStringLiteral("sens"), newRange}};
    }
    return x.ok({{QStringLiteral("MdAlarm"), value}}, {{QStringLiteral("MdAlarm"), range}});
}

void writeBands(const QDomElement &list, const QJsonArray &bands)
{
    for (QDomElement e = list.firstChildElement(); !e.isNull(); e = e.nextSiblingElement()) {
        const int id = number(e, QStringLiteral("id"));
        for (const QJsonValue &v : bands) {
            const QJsonObject band = v.toObject();
            if (band.value(QStringLiteral("id")).toInt() != id)
                continue;
            put(e, QStringLiteral("sensitivity"), band.value(QStringLiteral("sensitivity")).toInt());
            put(e, QStringLiteral("beginHour"), band.value(QStringLiteral("beginHour")).toInt());
            put(e, QStringLiteral("beginMinute"), band.value(QStringLiteral("beginMin")).toInt());
            put(e, QStringLiteral("endHour"), band.value(QStringLiteral("endHour")).toInt());
            put(e, QStringLiteral("endMinute"), band.value(QStringLiteral("endMin")).toInt());
            if (band.contains(QStringLiteral("enable")))
                put(e, QStringLiteral("enable"), band.value(QStringLiteral("enable")).toInt());
        }
    }
}

QJsonObject setMdAlarm(Exchange &x)
{
    Doc doc = x.get(kGetMotion);
    if (!doc.ok())
        return x.missing(doc);
    QJsonObject want = x.section(QStringLiteral("MdAlarm"));
    if (want.isEmpty())
        want = x.section(QStringLiteral("Alarm"));
    const QDomElement md = at(doc.body(), QStringLiteral("MD"));

    const QString grid = want.value(QStringLiteral("scope")).toObject()
                             .value(QStringLiteral("table")).toString();
    if (!grid.isEmpty() && grid != gridFromBitmap(md))
        put(md, QStringLiteral("scope/valueTable"), bitmapFromGrid(md, grid));

    // Where the firmware keeps no newer list, the bands under newSens are the
    // older ones shown a second time, and both copies come back. Only the one
    // that was edited is written, or the untouched copy would undo the edit.
    const QJsonObject before = getMdAlarm(x).value(QStringLiteral("value")).toObject()
                                   .value(QStringLiteral("MdAlarm")).toObject();
    const QJsonObject newSens = want.value(QStringLiteral("newSens")).toObject();
    const QJsonObject newBefore = before.value(QStringLiteral("newSens")).toObject();
    if (changed(want, before, QStringLiteral("sens")))
        writeBands(at(md, QStringLiteral("sensitivityInfoList")),
                   want.value(QStringLiteral("sens")).toArray());
    if (changed(newSens, newBefore, QStringLiteral("sensDef")))
        put(md, QStringLiteral("sensInfoNew/sensitivityDefault"),
            newSens.value(QStringLiteral("sensDef")).toInt());
    else if (changed(want, before, QStringLiteral("sensitivity")))
        put(md, QStringLiteral("sensInfoNew/sensitivityDefault"),
            want.value(QStringLiteral("sensitivity")).toInt());

    if (changed(newSens, newBefore, QStringLiteral("sens"))) {
        const QDomElement fresh = at(md, QStringLiteral("sensInfoNew/sensInfoList"));
        writeBands(fresh.firstChildElement().isNull()
                       ? at(md, QStringLiteral("sensitivityInfoList"))
                       : fresh,
                   newSens.value(QStringLiteral("sens")).toArray());
    }

    return x.set(kSetMotion, doc.dom) ? x.done() : x.refused(kSetMotion);
}

// ── recognition ─────────────────────────────────────────────────────────────

/// The HTTP API lists all four kinds whatever the model, switched on or off;
/// Baichuan lists the ones switched on.
const QStringList kAiKinds{QStringLiteral("people"), QStringLiteral("vehicle"),
                           QStringLiteral("dog_cat"), QStringLiteral("face")};

QJsonObject kinds(const QString &list)
{
    const QStringList on = list.split(QLatin1Char(','), Qt::SkipEmptyParts);
    QJsonObject out;
    for (const QString &k : kAiKinds)
        out[k] = on.contains(k) ? 1 : 0;
    return out;
}

QString kindList(const QJsonObject &kinds)
{
    QStringList on;
    for (const QString &k : kAiKinds)
        if (kinds.value(k).toInt() != 0)
            on.append(k);
    return on.join(QLatin1Char(','));
}

QJsonObject aiValue(const QDomElement &ai, int channel, QJsonObject *range)
{
    QJsonObject v{{QStringLiteral("channel"), channel}};
    QJsonObject r{{QStringLiteral("channel"), channel}};
    if (has(ai, QStringLiteral("detectType"))) {
        v[QStringLiteral("AiDetectType")] = kinds(text(ai, QStringLiteral("detectType")));
        QJsonObject b;
        for (const QString &k : kAiKinds)
            b[k] = kBoolean;
        r[QStringLiteral("AiDetectType")] = b;
    }
    if (has(ai, QStringLiteral("smartTrack"))) {
        v[QStringLiteral("bSmartTrack")] = number(ai, QStringLiteral("smartTrack"));
        r[QStringLiteral("bSmartTrack")] = kBoolean;
    }
    if (has(ai, QStringLiteral("smartTrackPt"))) {
        v[QStringLiteral("aiTrack")] = number(ai, QStringLiteral("smartTrackPt"));
        r[QStringLiteral("aiTrack")] = QJsonArray{1};
    }
    if (has(ai, QStringLiteral("smartTrackType")))
        v[QStringLiteral("trackType")] = kinds(text(ai, QStringLiteral("smartTrackType")));
    const QJsonArray delays{10, 20, 30, 60};
    if (has(ai, QStringLiteral("smartTrackObjectStopDelay"))) {
        v[QStringLiteral("aiStopBackTime")] = number(ai, QStringLiteral("smartTrackObjectStopDelay"));
        r[QStringLiteral("aiStopBackTime")] = delays;
    }
    if (has(ai, QStringLiteral("smartTrackObjectDisappearDelay"))) {
        v[QStringLiteral("aiDisappearBackTime")] =
            number(ai, QStringLiteral("smartTrackObjectDisappearDelay"));
        r[QStringLiteral("aiDisappearBackTime")] = delays;
    }
    if (range)
        *range = r;
    return v;
}

QJsonObject getAiCfg(Exchange &x)
{
    const Doc doc = x.get(kGetAi);
    if (!doc.ok())
        return x.missing(doc);
    QJsonObject range;
    const QJsonObject value = aiValue(at(doc.body(), QStringLiteral("AiCfg")), x.channel, &range);
    if (!value.contains(QStringLiteral("AiDetectType")))
        return x.unsupported();
    // The kinds alone, as a Duo 2 answers over HTTP. The dialog's form edits
    // only those, and it can find them only when they are all there is — an
    // E1 Zoom's HTTP reply, with tracking settings beside them, leaves the
    // form empty.
    return x.ok({{QStringLiteral("AiDetectType"), value.value(QStringLiteral("AiDetectType"))}},
                {{QStringLiteral("AiDetectType"), range.value(QStringLiteral("AiDetectType"))}});
}

QJsonObject setAiCfg(Exchange &x)
{
    Doc doc = x.get(kGetAi);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement ai = at(doc.body(), QStringLiteral("AiCfg"));
    const QJsonObject before = aiValue(ai, x.channel, nullptr);
    // Bare, like the reply: the HTTP API takes this one's fields at the top.
    const QJsonObject want = x.param;
    if (changed(want, before, QStringLiteral("AiDetectType")))
        put(ai, QStringLiteral("detectType"),
            kindList(want.value(QStringLiteral("AiDetectType")).toObject()));
    if (changed(want, before, QStringLiteral("trackType")))
        put(ai, QStringLiteral("smartTrackType"),
            kindList(want.value(QStringLiteral("trackType")).toObject()));
    for (const auto &[http, xml] : {std::pair{"bSmartTrack", "smartTrack"},
                                    std::pair{"aiTrack", "smartTrackPt"},
                                    std::pair{"aiStopBackTime", "smartTrackObjectStopDelay"},
                                    std::pair{"aiDisappearBackTime", "smartTrackObjectDisappearDelay"}}) {
        if (changed(want, before, QLatin1String(http)))
            put(ai, QLatin1String(xml), want.value(QLatin1String(http)).toInt());
    }
    return x.set(kSetAi, doc.dom) ? x.done() : x.refused(kSetAi);
}

// ── recording and the tasks that share its schedule ────────────────────────

QString postRecordLabel(int seconds)
{
    if (seconds % 60 == 0 && seconds >= 60)
        return seconds == 60 ? QStringLiteral("1 Minute")
                             : QStringLiteral("%1 Minutes").arg(seconds / 60);
    return QStringLiteral("%1 Seconds").arg(seconds);
}

int postRecordSeconds(const QString &label)
{
    const int n = label.section(QLatin1Char(' '), 0, 0).toInt();
    return label.contains(QLatin1String("Minute")) ? n * 60 : n;
}

QJsonObject recValue(const Doc &cfg, const Doc &plan, int channel, QJsonObject *range)
{
    const QDomElement c = at(cfg.body(), QStringLiteral("RecordCfg"));
    const QDomElement p = at(plan.body(), QStringLiteral("Record"));
    QJsonObject scheduleRange;
    QJsonObject v{
        {QStringLiteral("enable"), number(p, QStringLiteral("enable"))},
        {QStringLiteral("schedule"), readSchedule(p, channel, &scheduleRange, true)},
    };
    QJsonObject r{{QStringLiteral("enable"), kBoolean},
                  {QStringLiteral("schedule"), scheduleRange}};
    if (has(c, QStringLiteral("cycle"))) {
        v[QStringLiteral("overwrite")] = number(c, QStringLiteral("cycle"));
        r[QStringLiteral("overwrite")] = kBoolean;
    }
    if (has(c, QStringLiteral("recordDelayTime"))) {
        v[QStringLiteral("postRec")] = postRecordLabel(number(c, QStringLiteral("recordDelayTime")));
        r[QStringLiteral("postRec")] = strings({"15 Seconds", "30 Seconds", "1 Minute"});
    }
    if (has(c, QStringLiteral("preRecordTime"))) {
        v[QStringLiteral("preRec")] = number(c, QStringLiteral("preRecordTime")) > 0 ? 1 : 0;
        r[QStringLiteral("preRec")] = kBoolean;
    }
    if (has(c, QStringLiteral("smartRecord"))) {
        v[QStringLiteral("bSmartRec")] = number(c, QStringLiteral("smartRecord"));
        r[QStringLiteral("bSmartRec")] = kBoolean;
    }
    if (range)
        *range = r;
    return v;
}

QJsonObject getRec(Exchange &x)
{
    const Doc cfg = x.get(kGetRecordCfg);
    const Doc plan = x.get(kGetRecordPlan);
    if (!plan.ok())
        return x.missing(plan);
    QJsonObject range;
    const QJsonObject value = recValue(cfg, plan, x.channel, &range);
    return x.ok({{QStringLiteral("Rec"), value}}, {{QStringLiteral("Rec"), range}});
}

QJsonObject setRec(Exchange &x)
{
    Doc cfg = x.get(kGetRecordCfg);
    Doc plan = x.get(kGetRecordPlan);
    if (!plan.ok())
        return x.missing(plan);
    const QJsonObject before = recValue(cfg, plan, x.channel, nullptr);
    const QJsonObject want = x.section(QStringLiteral("Rec"));

    if (changed(want, before, QStringLiteral("enable")) ||
        changed(want, before, QStringLiteral("schedule"))) {
        const QDomElement p = at(plan.body(), QStringLiteral("Record"));
        if (want.contains(QStringLiteral("enable")))
            put(p, QStringLiteral("enable"), want.value(QStringLiteral("enable")).toInt());
        writeSchedule(p, want.value(QStringLiteral("schedule")).toObject());
        if (!x.set(kSetRecordPlan, plan.dom))
            return x.refused(kSetRecordPlan);
    }

    const QDomElement c = at(cfg.body(), QStringLiteral("RecordCfg"));
    bool touched = false;
    if (changed(want, before, QStringLiteral("overwrite"))) {
        touched = true;
        put(c, QStringLiteral("cycle"), want.value(QStringLiteral("overwrite")).toInt());
    }
    if (changed(want, before, QStringLiteral("postRec"))) {
        touched = true;
        put(c, QStringLiteral("recordDelayTime"),
            postRecordSeconds(want.value(QStringLiteral("postRec")).toString()));
    }
    if (changed(want, before, QStringLiteral("preRec"))) {
        // A switch in the HTTP API, a length here. Ten seconds is what these
        // cameras come with.
        touched = true;
        put(c, QStringLiteral("preRecordTime"),
            want.value(QStringLiteral("preRec")).toInt() != 0 ? 10 : 0);
    }
    if (changed(want, before, QStringLiteral("bSmartRec"))) {
        touched = true;
        put(c, QStringLiteral("smartRecord"), want.value(QStringLiteral("bSmartRec")).toInt());
    }
    if (touched && (!cfg.ok() || !x.set(kSetRecordCfg, cfg.dom)))
        return x.refused(kSetRecordCfg);
    return x.done();
}

/// E-mail, FTP, push and siren: an on/off switch and the week of hours. The
/// server settings for e-mail and FTP live in messages not mapped yet, so
/// those pages show the switch and the schedule only.
struct Task {
    quint32 get;
    quint32 set;
    const char *root;      ///< the XML element
    const char *wrapper;   ///< the HTTP API's name for the section
};

QJsonObject getTask(Exchange &x, const Task &t)
{
    const Doc doc = x.get(t.get);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement e = at(doc.body(), QLatin1String(t.root));
    QJsonObject scheduleRange;
    const QJsonObject value{
        {QStringLiteral("enable"), number(e, QStringLiteral("enable"))},
        {QStringLiteral("schedule"), readSchedule(e, x.channel, &scheduleRange)},
    };
    const QJsonObject range{{QStringLiteral("enable"), kBoolean},
                            {QStringLiteral("schedule"), scheduleRange}};
    return x.ok({{QLatin1String(t.wrapper), value}}, {{QLatin1String(t.wrapper), range}});
}

QJsonObject setTask(Exchange &x, const Task &t)
{
    Doc doc = x.get(t.get);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement e = at(doc.body(), QLatin1String(t.root));
    const QJsonObject want = x.section(QLatin1String(t.wrapper));
    if (want.contains(QStringLiteral("enable")))
        put(e, QStringLiteral("enable"), want.value(QStringLiteral("enable")).toInt());
    writeSchedule(e, want.value(QStringLiteral("schedule")).toObject());
    return x.set(t.set, doc.dom) ? x.done() : x.refused(t.set);
}

constexpr Task kEmail{kGetEmail, kSetEmail, "EmailTask", "Email"};
constexpr Task kFtp{kGetFtp, kSetFtp, "FtpTask", "Ftp"};
constexpr Task kPush{kGetPush, kSetPush, "PushTask", "Push"};
constexpr Task kSiren{kGetAudioAlarm, kSetAudioAlarm, "AudioTask", "Audio"};

// ── network ─────────────────────────────────────────────────────────────────

/// Ports, each with its switch. The XML calls Baichuan's own port the
/// "server" port; the HTTP API calls it the media port.
struct PortMap {
    const char *element;   ///< e.g. "HttpPort"
    const char *port;      ///< its port element, e.g. "httpPort"
    const char *http;      ///< e.g. "http" → httpPort, httpEnable
};
constexpr PortMap kPorts[]{
    {"HttpPort", "httpPort", "http"},     {"HttpsPort", "httpsPort", "https"},
    {"RtspPort", "rtspPort", "rtsp"},     {"RtmpPort", "rtmpPort", "rtmp"},
    {"OnvifPort", "onvifPort", "onvif"},
};

QJsonObject netPortValue(const QDomElement &body, QJsonObject *range)
{
    QJsonObject v;
    QJsonObject r;
    for (const PortMap &p : kPorts) {
        const QDomElement e = at(body, QLatin1String(p.element));
        if (e.isNull())
            continue;
        const QString name = QLatin1String(p.http);
        v[name + QStringLiteral("Port")] = number(e, QLatin1String(p.port));
        v[name + QStringLiteral("Enable")] = number(e, QStringLiteral("enable"));
        r[name + QStringLiteral("Port")] = span(1, 65535);
    }
    if (has(body, QStringLiteral("ServerPort"))) {
        v[QStringLiteral("mediaPort")] = number(body, QStringLiteral("ServerPort/serverPort"));
        r[QStringLiteral("mediaPort")] = span(1, 65535);
    }
    if (range)
        *range = r;
    return v;
}

QJsonObject getNetPort(Exchange &x)
{
    const Doc doc = x.get(kGetPorts);
    if (!doc.ok())
        return x.missing(doc);
    QJsonObject range;
    const QJsonObject value = netPortValue(doc.body(), &range);
    return x.ok({{QStringLiteral("NetPort"), value}}, {{QStringLiteral("NetPort"), range}});
}

QJsonObject setNetPort(Exchange &x)
{
    Doc doc = x.get(kGetPorts);
    if (!doc.ok())
        return x.missing(doc);
    const QJsonObject want = x.section(QStringLiteral("NetPort"));
    const QJsonObject before = netPortValue(doc.body(), nullptr);
    for (const PortMap &p : kPorts) {
        const QDomElement e = at(doc.body(), QLatin1String(p.element));
        const QString name = QLatin1String(p.http);
        if (changed(want, before, name + QStringLiteral("Port")))
            put(e, QLatin1String(p.port), want.value(name + QStringLiteral("Port")).toInt());
        if (changed(want, before, name + QStringLiteral("Enable")))
            put(e, QStringLiteral("enable"), want.value(name + QStringLiteral("Enable")).toInt());
    }
    if (changed(want, before, QStringLiteral("mediaPort")))
        put(doc.body(), QStringLiteral("ServerPort/serverPort"),
            want.value(QStringLiteral("mediaPort")).toInt());
    return x.set(kSetPorts, doc.dom) ? x.done() : x.refused(kSetPorts);
}

QJsonObject getLocalLink(Exchange &x)
{
    const Doc doc = x.get(kGetNetwork);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement b = doc.body();
    // Which link is in use is not said in so many words. A camera on Wi-Fi
    // names the network it joined; one on a cable names none.
    const Doc wifi = x.get(kWifi);
    const bool onWifi = wifi.ok() && !text(wifi.body(), QStringLiteral("Wifi/ssid")).isEmpty();
    const QJsonObject value{
        {QStringLiteral("activeLink"), onWifi ? QStringLiteral("Wifi") : QStringLiteral("LAN")},
        {QStringLiteral("type"), number(b, QStringLiteral("Dhcp/enable")) != 0
                                     ? QStringLiteral("DHCP")
                                     : QStringLiteral("Static")},
        {QStringLiteral("mac"), text(b, QStringLiteral("Ip/mac"))},
        {QStringLiteral("dns"),
         QJsonObject{{QStringLiteral("auto"), number(b, QStringLiteral("AutoDns/enable"))},
                     {QStringLiteral("dns1"), text(b, QStringLiteral("Dns/dns1"))},
                     {QStringLiteral("dns2"), text(b, QStringLiteral("Dns/dns2"))}}},
        {QStringLiteral("static"),
         QJsonObject{{QStringLiteral("ip"), text(b, QStringLiteral("Ip/ip"))},
                     {QStringLiteral("mask"), text(b, QStringLiteral("Ip/mask"))},
                     {QStringLiteral("gateway"), text(b, QStringLiteral("Ip/gateway"))}}},
    };
    const QJsonObject address{{QStringLiteral("maxLen"), 15}};
    const QJsonObject range{
        {QStringLiteral("type"), strings({"DHCP", "Static"})},
        {QStringLiteral("dns"), QJsonObject{{QStringLiteral("auto"), kBoolean},
                                            {QStringLiteral("dns1"), address},
                                            {QStringLiteral("dns2"), address}}},
        {QStringLiteral("static"), QJsonObject{{QStringLiteral("ip"), address},
                                               {QStringLiteral("mask"), address},
                                               {QStringLiteral("gateway"), address}}},
    };
    return x.ok({{QStringLiteral("LocalLink"), value}}, {{QStringLiteral("LocalLink"), range}});
}

/// Signal in dBm to the HTTP API's bars. Fitted to two cameras answering both
/// ways — -56 dBm reported as 2, -60 as 1 — so near enough, not exact.
int bars(int dbm)
{
    return qBound(0, (dbm + 64) / 4, 4);
}

QJsonObject getWifi(Exchange &x)
{
    const Doc doc = x.get(kWifi);
    if (!doc.ok())
        return x.missing(doc);
    // The password is in there too, in the clear, and stays there.
    const QString ssid = text(doc.body(), QStringLiteral("Wifi/ssid"));
    if (ssid.isEmpty())
        return x.unsupported();   // on a cable
    return x.ok({{QStringLiteral("Wifi"), QJsonObject{{QStringLiteral("ssid"), ssid}}}},
                {{QStringLiteral("Wifi"),
                  QJsonObject{{QStringLiteral("ssid"), QJsonObject{{QStringLiteral("maxLen"), 127}}}}}});
}

QJsonObject scanWifi(Exchange &x)
{
    // The camera lists what it can hear in the same message; asking is the scan.
    const Doc doc = x.get(kWifi);
    if (!doc.ok())
        return x.missing(doc);
    QJsonArray networks;
    for (QDomElement u = at(doc.body(), QStringLiteral("Wifi/udidList/udid")); !u.isNull();
         u = u.nextSiblingElement(QStringLiteral("udid"))) {
        const QString name = text(u, QStringLiteral("name"));
        if (name.isEmpty())
            continue;   // hidden networks
        networks.append(QJsonObject{
            {QStringLiteral("ssid"), name},
            {QStringLiteral("signal"), bars(number(u, QStringLiteral("signal"), -100))},
            {QStringLiteral("encryption"), number(u, QStringLiteral("encrypt"))}});
    }
    return x.ok({{QStringLiteral("Wifi"), networks}});
}

QJsonObject getWifiSignal(Exchange &x)
{
    const Doc doc = x.get(kWifiSignal);
    if (!doc.ok())
        return x.missing(doc);
    return x.ok({{QStringLiteral("wifiSignal"),
                  bars(number(doc.body(), QStringLiteral("WifiSignal/signal"), -100))}},
                {{QStringLiteral("wifiSignal"), span(0, 255)}});
}

QJsonObject getP2p(Exchange &x)
{
    const Doc doc = x.get(kUid);
    if (!doc.ok())
        return x.missing(doc);
    return x.ok({{QStringLiteral("P2p"),
                  QJsonObject{{QStringLiteral("uid"), text(doc.body(), QStringLiteral("Uid/uid"))}}}});
}

// ── time ────────────────────────────────────────────────────────────────────

const QHash<QString, QString> kDateFormats{
    {QStringLiteral("MDY"), QStringLiteral("MM/DD/YYYY")},
    {QStringLiteral("YMD"), QStringLiteral("YYYY/MM/DD")},
    {QStringLiteral("DMY"), QStringLiteral("DD/MM/YYYY")},
};

QJsonObject getTime(Exchange &x)
{
    const Doc doc = x.get(kGetTime);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement g = at(doc.body(), QStringLiteral("SystemGeneral"));
    const QJsonObject time{
        {QStringLiteral("year"), number(g, QStringLiteral("year"))},
        {QStringLiteral("mon"), number(g, QStringLiteral("month"))},
        {QStringLiteral("day"), number(g, QStringLiteral("day"))},
        {QStringLiteral("hour"), number(g, QStringLiteral("hour"))},
        {QStringLiteral("min"), number(g, QStringLiteral("minute"))},
        {QStringLiteral("sec"), number(g, QStringLiteral("second"))},
        {QStringLiteral("timeZone"), number(g, QStringLiteral("timeZone"))},
        {QStringLiteral("timeFmt"), kDateFormats.value(text(g, QStringLiteral("osdFormat")),
                                                       QStringLiteral("MM/DD/YYYY"))},
        {QStringLiteral("hourFmt"), number(g, QStringLiteral("timeFormat"))},
        {QStringLiteral("isDst"), number(g, QStringLiteral("isDst"))},
    };
    const QJsonObject range{
        {QStringLiteral("year"), span(1900, 2100)}, {QStringLiteral("mon"), span(1, 12)},
        {QStringLiteral("day"), span(1, 31)},       {QStringLiteral("hour"), span(0, 23)},
        {QStringLiteral("min"), span(0, 59)},       {QStringLiteral("sec"), span(0, 59)},
        {QStringLiteral("timeZone"), span(-46800, 43200)},
        {QStringLiteral("timeFmt"), strings({"MM/DD/YYYY", "YYYY/MM/DD", "DD/MM/YYYY"})},
        {QStringLiteral("hourFmt"), span(0, 1)},
    };
    return x.ok({{QStringLiteral("Time"), time}}, {{QStringLiteral("Time"), range}});
}

QJsonObject setTime(Exchange &x)
{
    Doc doc = x.get(kGetTime);
    if (!doc.ok())
        return x.missing(doc);
    const QJsonObject want = x.section(QStringLiteral("Time"));
    const QDomElement g = at(doc.body(), QStringLiteral("SystemGeneral"));
    for (const auto &[http, xml] : {std::pair{"year", "year"}, std::pair{"mon", "month"},
                                    std::pair{"day", "day"}, std::pair{"hour", "hour"},
                                    std::pair{"min", "minute"}, std::pair{"sec", "second"},
                                    std::pair{"timeZone", "timeZone"},
                                    std::pair{"hourFmt", "timeFormat"}}) {
        if (want.contains(QLatin1String(http)))
            put(g, QLatin1String(xml), want.value(QLatin1String(http)).toInt());
    }
    if (want.contains(QStringLiteral("timeFmt")))
        put(g, QStringLiteral("osdFormat"),
            kDateFormats.key(want.value(QStringLiteral("timeFmt")).toString(), QStringLiteral("MDY")));
    return x.set(kSetTime, doc.dom) ? x.done() : x.refused(kSetTime);
}

// ── lights ──────────────────────────────────────────────────────────────────

/// The infrared lights and the status light share one message.
QJsonObject getLed(Exchange &x, bool infrared)
{
    const Doc doc = x.get(kGetLed);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement l = at(doc.body(), QStringLiteral("LedState"));
    if (infrared) {
        if (!has(l, QStringLiteral("state")))
            return x.unsupported();
        const QString s = text(l, QStringLiteral("state"));
        const QString state = s == QLatin1String("auto") ? QStringLiteral("Auto")
                              : s == QLatin1String("open") ? QStringLiteral("On")
                                                            : QStringLiteral("Off");
        return x.ok({{QStringLiteral("IrLights"), QJsonObject{{QStringLiteral("state"), state}}}},
                    {{QStringLiteral("IrLights"),
                      QJsonObject{{QStringLiteral("state"), strings({"Auto", "Off"})}}}});
    }
    if (!has(l, QStringLiteral("lightState")))
        return x.unsupported();
    const QString state = text(l, QStringLiteral("lightState")) == QLatin1String("open")
                              ? QStringLiteral("On")
                              : QStringLiteral("Off");
    return x.ok({{QStringLiteral("PowerLed"),
                  QJsonObject{{QStringLiteral("channel"), x.channel}, {QStringLiteral("state"), state}}}},
                {{QStringLiteral("PowerLed"),
                  QJsonObject{{QStringLiteral("state"), strings({"On", "Off"})}}}});
}

QJsonObject setLed(Exchange &x, bool infrared)
{
    Doc doc = x.get(kGetLed);
    if (!doc.ok())
        return x.missing(doc);
    const QDomElement l = at(doc.body(), QStringLiteral("LedState"));
    const QString state = x.section(infrared ? QStringLiteral("IrLights") : QStringLiteral("PowerLed"))
                              .value(QStringLiteral("state")).toString();
    const QString xml = state == QLatin1String("Auto") ? QStringLiteral("auto")
                        : state == QLatin1String("On") ? QStringLiteral("open")
                                                        : QStringLiteral("close");
    put(l, infrared ? QStringLiteral("state") : QStringLiteral("lightState"), xml);
    return x.set(kSetLed, doc.dom) ? x.done() : x.refused(kSetLed);
}

// ── storage and presets ─────────────────────────────────────────────────────

QJsonObject getHddInfo(Exchange &x)
{
    const Doc doc = x.get(kHdd);
    if (!doc.ok())
        return x.missing(doc);
    // Sizes come in two parts, and the HTTP API's figure is G × 1024 + M:
    // 57 and 967 on a camera that says 59335 over HTTP.
    QJsonArray disks;
    for (QDomElement h = at(doc.body(), QStringLiteral("HddInfoList/HddInfo")); !h.isNull();
         h = h.nextSiblingElement(QStringLiteral("HddInfo"))) {
        disks.append(QJsonObject{
            {QStringLiteral("number"), number(h, QStringLiteral("number"))},
            {QStringLiteral("capacity"),
             number(h, QStringLiteral("capacity")) * 1024 + number(h, QStringLiteral("capacityM"))},
            {QStringLiteral("size"),
             number(h, QStringLiteral("remainSize")) * 1024 + number(h, QStringLiteral("remainSizeM"))},
            {QStringLiteral("format"), number(h, QStringLiteral("format"))},
            {QStringLiteral("mount"), number(h, QStringLiteral("mount"))},
        });
    }
    return x.ok({{QStringLiteral("HddInfo"), disks}});
}

QJsonObject getPtzPreset(Exchange &x)
{
    const Doc doc = x.get(kPtzPresets);
    if (!doc.ok())
        return x.missing(doc);
    QJsonArray presets;
    for (QDomElement p = at(doc.body(), QStringLiteral("PtzPreset/presetList")).firstChildElement();
         !p.isNull(); p = p.nextSiblingElement()) {
        presets.append(QJsonObject{{QStringLiteral("channel"), x.channel},
                                   {QStringLiteral("enable"), 1},
                                   {QStringLiteral("id"), number(p, QStringLiteral("id"))},
                                   {QStringLiteral("name"), text(p, QStringLiteral("name"))},
                                   {QStringLiteral("imgName"), QString()}});
    }
    return x.ok({{QStringLiteral("PtzPreset"), presets}});
}

} // namespace

// ── dispatch ────────────────────────────────────────────────────────────────

QJsonObject BaichuanApi::translate(BaichuanClient &client, int channel,
                                   const QString &command, const QJsonObject &param,
                                   int action)
{
    Exchange x{client, channel, command, param, action};
    using Handler = QJsonObject (*)(Exchange &);
    // V20 and plain spellings of the same section: one answers, the other says
    // it does not exist, so the dialog shows the section once — as it does
    // for an HTTP camera, which only ever knows one of the two.
    static const QHash<QString, Handler> handlers{
        {QStringLiteral("GetDevInfo"), getDevInfo},
        {QStringLiteral("Reboot"), reboot},
        {QStringLiteral("GetEnc"), getEnc},
        {QStringLiteral("SetEnc"), setEnc},
        {QStringLiteral("GetImage"), getImage},
        {QStringLiteral("SetImage"), setImage},
        {QStringLiteral("GetIsp"), getIsp},
        {QStringLiteral("SetIsp"), setIsp},
        {QStringLiteral("GetOsd"), getOsd},
        {QStringLiteral("SetOsd"), setOsd},
        {QStringLiteral("GetMask"), getMask},
        {QStringLiteral("SetMask"), setMask},
        {QStringLiteral("GetMdAlarm"), getMdAlarm},
        {QStringLiteral("SetMdAlarm"), setMdAlarm},
        {QStringLiteral("GetAiCfg"), getAiCfg},
        {QStringLiteral("SetAiCfg"), setAiCfg},
        {QStringLiteral("GetRecV20"), getRec},
        {QStringLiteral("SetRecV20"), setRec},
        {QStringLiteral("GetEmailV20"), [](Exchange &e) { return getTask(e, kEmail); }},
        {QStringLiteral("SetEmailV20"), [](Exchange &e) { return setTask(e, kEmail); }},
        {QStringLiteral("GetFtpV20"), [](Exchange &e) { return getTask(e, kFtp); }},
        {QStringLiteral("SetFtpV20"), [](Exchange &e) { return setTask(e, kFtp); }},
        {QStringLiteral("GetPushV20"), [](Exchange &e) { return getTask(e, kPush); }},
        {QStringLiteral("SetPushV20"), [](Exchange &e) { return setTask(e, kPush); }},
        {QStringLiteral("GetAudioAlarmV20"), [](Exchange &e) { return getTask(e, kSiren); }},
        {QStringLiteral("SetAudioAlarmV20"), [](Exchange &e) { return setTask(e, kSiren); }},
        {QStringLiteral("GetNetPort"), getNetPort},
        {QStringLiteral("SetNetPort"), setNetPort},
        {QStringLiteral("GetLocalLink"), getLocalLink},
        {QStringLiteral("GetWifi"), getWifi},
        {QStringLiteral("ScanWifi"), scanWifi},
        {QStringLiteral("GetWifiSignal"), getWifiSignal},
        {QStringLiteral("GetP2p"), getP2p},
        {QStringLiteral("GetTime"), getTime},
        {QStringLiteral("SetTime"), setTime},
        {QStringLiteral("GetIrLights"), [](Exchange &e) { return getLed(e, true); }},
        {QStringLiteral("SetIrLights"), [](Exchange &e) { return setLed(e, true); }},
        {QStringLiteral("GetPowerLed"), [](Exchange &e) { return getLed(e, false); }},
        {QStringLiteral("SetPowerLed"), [](Exchange &e) { return setLed(e, false); }},
        {QStringLiteral("GetHddInfo"), getHddInfo},
        {QStringLiteral("GetPtzPreset"), getPtzPreset},
    };

    const Handler handler = handlers.value(command);
    QJsonObject entry = handler ? handler(x) : x.unsupported();
    if (x.lost && entry.value(QStringLiteral("code")).toInt() != 0)
        entry = x.error(kConnectionLost, client.lastError());
    return entry;
}

// ── the connection ──────────────────────────────────────────────────────────

struct BaichuanApi::Worker : QObject {
    QString host;
    QString user;
    QString secret;
    quint16 port{9000};
    std::unique_ptr<BaichuanClient> client;

    ~Worker() override
    {
        if (client)
            client->close();
    }

    /// A logged-in client, or why there is none.
    QString open()
    {
        if (client)
            return {};
        client = std::make_unique<BaichuanClient>(host, user, secret, port);
        if (!client->login()) {
            const QString why = client->lastError();
            client.reset();
            return QObject::tr("Cannot reach %1 over Baichuan: %2").arg(host, why);
        }
        LEO_INFO(Baichuan, host, QStringLiteral("Settings session open"));
        return {};
    }

    QJsonObject run(int channel, const QString &command, const QJsonObject &param,
                    int action)
    {
        // Once more on a fresh connection if the old one has gone: the camera
        // drops a session it thinks idle, and that is not worth an error.
        for (int attempt = 0; attempt < 2; ++attempt) {
            if (const QString why = open(); !why.isEmpty())
                return errorEntry(command, kConnectionLost, why);
            const QJsonObject entry =
                BaichuanApi::translate(*client, channel, command, param, action);
            const int code = entry.value(QStringLiteral("error")).toObject()
                                 .value(QStringLiteral("rspCode")).toInt();
            if (code != kConnectionLost)
                return entry;
            client->close();
            client.reset();
        }
        return errorEntry(command, kConnectionLost,
                          QObject::tr("Lost the connection to %1.").arg(host));
    }
};

namespace {

QMutex &registryLock()
{
    static QMutex lock;
    return lock;
}

QHash<QString, std::weak_ptr<BaichuanApi>> &registry()
{
    static QHash<QString, std::weak_ptr<BaichuanApi>> table;
    return table;
}

} // namespace

std::shared_ptr<BaichuanApi> BaichuanApi::forCamera(const CameraConfig &camera,
                                                    const QString &secret)
{
    const QMutexLocker lock(&registryLock());
    std::weak_ptr<BaichuanApi> &slot =
        registry()[camera.host + QLatin1Char(':') + QString::number(camera.baichuanPort)];
    if (std::shared_ptr<BaichuanApi> existing = slot.lock())
        return existing;
    std::shared_ptr<BaichuanApi> made(new BaichuanApi(camera, secret));
    slot = made;
    return made;
}

BaichuanApi::BaichuanApi(const CameraConfig &camera, const QString &secret)
{
    m_thread = new QThread;
    m_thread->setObjectName(QStringLiteral("baichuan-api ") + camera.host);
    m_worker = new Worker;
    m_worker->host = camera.host;
    m_worker->user = camera.user;
    m_worker->secret = secret;
    m_worker->port = camera.baichuanPort;
    m_worker->moveToThread(m_thread);
    // Deleted on its own thread, where its socket lives, once the loop stops.
    QObject::connect(m_thread, &QThread::finished, m_worker, &QObject::deleteLater);
    m_thread->start();
}

BaichuanApi::~BaichuanApi()
{
    m_thread->quit();
    m_thread->wait();
    delete m_thread;
}

void BaichuanApi::call(const QString &command, const QJsonObject &param, int action,
                       QObject *context, Reply reply)
{
    const int channel = param.value(QStringLiteral("channel")).toInt(0);
    QPointer<QObject> guard(context);
    Worker *worker = m_worker;
    QMetaObject::invokeMethod(
        m_worker,
        [worker, channel, command, param, action, guard, reply] {
            const QJsonObject entry = worker->run(channel, command, param, action);
            if (guard)
                QMetaObject::invokeMethod(guard.data(), [reply, entry] { reply(entry); },
                                          Qt::QueuedConnection);
        },
        Qt::QueuedConnection);
}

void BaichuanApi::uploadFirmware(const QString &fileName, const QByteArray &pak,
                                 QObject *context, Progress progress, Done done)
{
    QPointer<QObject> guard(context);
    Worker *worker = m_worker;
    QMetaObject::invokeMethod(
        m_worker,
        [worker, fileName, pak, guard, progress, done] {
            const auto toContext = [guard](auto f) {
                if (guard)
                    QMetaObject::invokeMethod(guard.data(), f, Qt::QueuedConnection);
            };
            // Not retried on a fresh connection, unlike a settings read: half a
            // file is not something to start sending again behind the camera's
            // back.
            QString error = worker->open();
            if (error.isEmpty()) {
                LEO_INFO(Baichuan, worker->host,
                         QStringLiteral("Sending firmware %1, %2 bytes")
                             .arg(fileName).arg(pak.size()));
                const bool ok = worker->client->uploadFirmware(
                    fileName, pak, [&toContext, progress](qint64 sent, qint64 total) {
                        if (progress)
                            toContext([progress, sent, total] { progress(sent, total); });
                    });
                if (!ok)
                    error = QObject::tr("The camera did not take the firmware: %1")
                                .arg(worker->client->lastError());
                worker->client->close();
                worker->client.reset();
                if (ok)
                    LEO_INFO(Baichuan, worker->host,
                             QStringLiteral("Firmware sent; the camera installs it and restarts"));
                else
                    LEO_WARN(Baichuan, worker->host, error);
            }
            toContext([done, error] { done(error); });
        },
        Qt::QueuedConnection);
}

int runBaichuanApiProbe(const QString &host, const QString &user,
                        const QString &password, const QString &command,
                        const QString &param)
{
    BaichuanClient client(host, user, password);
    if (!client.login()) {
        std::fprintf(stderr, "login failed: %s\n", qPrintable(client.lastError()));
        return 1;
    }
    QJsonObject p;
    if (!param.isEmpty())
        p = QJsonDocument::fromJson(param.toUtf8()).object();
    const QJsonObject entry = BaichuanApi::translate(client, p.value(QStringLiteral("channel")).toInt(0),
                                                     command, p, 1);
    client.close();
    std::printf("%s\n", QJsonDocument(entry).toJson(QJsonDocument::Indented).constData());
    return entry.value(QStringLiteral("code")).toInt() == 0 ? 0 : 2;
}

namespace {

/// What the camera says it is: hardVer and firmVer, from GetDevInfo.
QJsonObject devInfo(BaichuanClient &client)
{
    return BaichuanApi::translate(client, 0, QStringLiteral("GetDevInfo"), {}, 0)
        .value(QStringLiteral("value")).toObject()
        .value(QStringLiteral("DevInfo")).toObject();
}

} // namespace

int runBaichuanFirmware(const QString &host, const QString &user,
                        const QString &password, const QString &pakPath,
                        bool install)
{
    QFile file(pakPath);
    if (pakPath.isEmpty() || !file.open(QIODevice::ReadOnly)) {
        std::fprintf(stderr, "cannot read the package %s\n", qPrintable(pakPath));
        return 1;
    }
    const QByteArray pak = file.readAll();
    const QString fileName = QFileInfo(pakPath).fileName();

    BaichuanClient client(host, user, password);
    if (!client.login()) {
        std::fprintf(stderr, "login failed: %s\n", qPrintable(client.lastError()));
        return 1;
    }
    const QJsonObject before = devInfo(client);
    const QString hardVer = before.value(QStringLiteral("hardVer")).toString();
    const QString firmVer = before.value(QStringLiteral("firmVer")).toString();
    std::printf("camera   %s, board %s, firmware %s\npackage  %s, %lld bytes\n",
                qPrintable(before.value(QStringLiteral("model")).toString()),
                qPrintable(hardVer), qPrintable(firmVer), qPrintable(fileName),
                qlonglong(pak.size()));
    if (const QString why = firmware::refusal(fileName, pak, hardVer, firmVer); !why.isEmpty()) {
        client.close();
        std::fprintf(stderr, "refused: %s\n", qPrintable(why));
        return 2;
    }
    if (!install) {
        client.close();
        std::printf("checks passed; nothing sent (add --yes to install)\n");
        return 0;
    }

    int lastTenth = -1;
    const bool sent = client.uploadFirmware(fileName, pak, [&lastTenth](qint64 done, qint64 total) {
        const int tenth = int(done * 10 / total);
        if (tenth != lastTenth) {
            lastTenth = tenth;
            std::printf("sent     %3d%%\n", tenth * 10);
            std::fflush(stdout);
        }
    });
    client.close();
    if (!sent) {
        std::fprintf(stderr, "upload failed: %s\n", qPrintable(client.lastError()));
        return 3;
    }

    // The camera writes the image and restarts. Until it answers with the new
    // build, it is either still flashing or still on the old one; asked every
    // fifteen seconds, for as long as a slow Wi-Fi camera has been seen to take.
    const int wanted = firmware::parsePakName(fileName).build;
    std::printf("sent; waiting for the camera to restart on build %d\n", wanted);
    std::fflush(stdout);
    QThread::sleep(30);
    for (int waited = 30; waited <= 600; waited += 15) {
        BaichuanClient again(host, user, password);
        if (again.login()) {
            const QString now = devInfo(again).value(QStringLiteral("firmVer")).toString();
            again.close();
            std::printf("%4d s   %s\n", waited, qPrintable(now.isEmpty() ? QStringLiteral("answering") : now));
            std::fflush(stdout);
            if (firmware::buildOf(now) == wanted)
                return 0;
        } else {
            std::printf("%4d s   not answering\n", waited);
            std::fflush(stdout);
        }
        QThread::sleep(15);
    }
    std::fprintf(stderr, "the camera did not come back on build %d within ten minutes\n", wanted);
    return 4;
}

} // namespace leolink
