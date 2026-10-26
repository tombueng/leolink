// The HTTP API answered over Baichuan, against captures of four real cameras.

#include <tuple>

#include <QDir>
#include <QDomDocument>
#include <QEventLoop>
#include <QFile>
#include <QJsonArray>
#include <QJsonDocument>
#include <QTest>
#include <QTimer>

#include "Baichuan.h"
#include "BaichuanApi.h"
#include "FakeCamera.h"

using leolink::BaichuanApi;
using leolink::BaichuanClient;

namespace {

const QString kUser = QStringLiteral("admin");
const QString kPassword = QStringLiteral("not-a-real-password");

QString fixture(const QString &model)
{
    return QStringLiteral(LEOLINK_FIXTURES "/") + model;
}

/// Every leaf under `o`, keyed by its path: "Enc/mainStream/bitRate".
void flatten(const QJsonValue &v, const QString &path, QMap<QString, QJsonValue> &out)
{
    if (v.isObject()) {
        const QJsonObject o = v.toObject();
        for (auto it = o.constBegin(); it != o.constEnd(); ++it)
            flatten(it.value(), path.isEmpty() ? it.key() : path + QLatin1Char('/') + it.key(), out);
    } else if (v.isArray() && !v.toArray().isEmpty() &&
               (v.toArray().first().isObject() || v.toArray().first().isArray())) {
        const QJsonArray a = v.toArray();
        for (int i = 0; i < a.size(); ++i)
            flatten(a.at(i), path + QStringLiteral("[%1]").arg(i), out);
    } else {
        out.insert(path, v);
    }
}

QMap<QString, QJsonValue> flat(const QJsonValue &v)
{
    QMap<QString, QJsonValue> out;
    flatten(v, QString(), out);
    return out;
}

QJsonValue valueAt(const QJsonObject &o, const QString &path)
{
    QJsonValue v = o;
    for (const QString &step : path.split(QLatin1Char('/')))
        v = v.toObject().value(step);
    return v;
}

QJsonObject withValue(const QJsonObject &o, const QStringList &path, const QJsonValue &value)
{
    QJsonObject out = o;
    if (path.size() == 1)
        out[path.first()] = value;
    else
        out[path.first()] = withValue(o.value(path.first()).toObject(), path.mid(1), value);
    return out;
}

QJsonObject withValue(const QJsonObject &o, const QString &path, const QJsonValue &value)
{
    return withValue(o, path.split(QLatin1Char('/')), value);
}

/// The document as data, with the camera's layout and the declaration gone.
QString canonical(const QString &xml)
{
    QDomDocument doc;
    if (!doc.setContent(xml))
        return QStringLiteral("unreadable: ") + xml;
    return doc.toString(-1);
}

int rspCode(const QJsonObject &entry)
{
    return entry.value(QStringLiteral("error")).toObject().value(QStringLiteral("rspCode")).toInt();
}

QString flipHour(const QString &table, int hour)
{
    QString out = table;
    out[hour] = out.at(hour) == QLatin1Char('1') ? QLatin1Char('0') : QLatin1Char('1');
    return out;
}

/// Each get, the set that writes it back, and the section the set carries.
struct Pair {
    const char *get;
    const char *set;
};
const Pair kPairs[]{
    {"GetEnc", "SetEnc"},           {"GetImage", "SetImage"},
    {"GetIsp", "SetIsp"},           {"GetOsd", "SetOsd"},
    {"GetMask", "SetMask"},         {"GetMdAlarm", "SetMdAlarm"},
    {"GetAiCfg", "SetAiCfg"},       {"GetRecV20", "SetRecV20"},
    {"GetEmailV20", "SetEmailV20"}, {"GetFtpV20", "SetFtpV20"},
    {"GetPushV20", "SetPushV20"},   {"GetAudioAlarmV20", "SetAudioAlarmV20"},
    {"GetNetPort", "SetNetPort"},   {"GetTime", "SetTime"},
    {"GetIrLights", "SetIrLights"}, {"GetPowerLed", "SetPowerLed"},
};

const char *kModels[]{"e1zoom", "doorbell", "e1", "e1pro"};

} // namespace

class TestBaichuanApi : public QObject {
    Q_OBJECT

private:
    std::unique_ptr<FakeCamera> m_camera;
    std::unique_ptr<BaichuanClient> m_client;

    void connectTo(const QString &model, const QString &loginReply = {})
    {
        m_client.reset();
        m_camera = std::make_unique<FakeCamera>(kUser, kPassword);
        m_camera->loadDocuments(fixture(model));
        m_camera->loginReply = loginReply;
        m_camera->begin();
        m_client = std::make_unique<BaichuanClient>(QStringLiteral("127.0.0.1"), kUser, kPassword,
                                                    m_camera->port());
        QVERIFY2(m_client->login(), qPrintable(m_client->lastError()));
    }

    QJsonObject call(const QString &command, const QJsonObject &param = {})
    {
        return BaichuanApi::translate(*m_client, 0, command, param, 1);
    }

    QJsonObject value(const QString &command)
    {
        const QJsonObject entry = call(command);
        return entry.value(QStringLiteral("value")).toObject();
    }

    /// Writes `param` with `set`, and fails the test if the camera did not take it.
    void write(const QString &set, const QJsonObject &param)
    {
        const QJsonObject entry = call(set, param);
        QVERIFY2(entry.value(QStringLiteral("code")).toInt() == 0,
                 qPrintable(QJsonDocument(entry).toJson(QJsonDocument::Compact)));
    }

private slots:
    void cleanup()
    {
        m_client.reset();
        m_camera.reset();
    }

    // ── the same answer either way ──────────────────────────────────────────

    void matchesTheHttpApi_data()
    {
        QTest::addColumn<QString>("model");
        QTest::addColumn<QString>("command");
        for (const char *model : {"e1zoom", "doorbell"}) {
            const QDir dir(fixture(QLatin1String(model)) + QStringLiteral("/http"));
            for (const QString &file : dir.entryList({QStringLiteral("*.json")}, QDir::Files)) {
                const QString command = file.section(QLatin1Char('.'), 0, 0);
                QTest::newRow(qPrintable(QLatin1String(model) + QLatin1Char(' ') + command))
                    << QString::fromLatin1(model) << command;
            }
        }
    }

    /// Every field both protocols report has the same value, and its range
    /// the same choices. Captured from cameras that answer both ways, so this
    /// is the HTTP API's own answer that the translation has to give.
    void matchesTheHttpApi()
    {
        QFETCH(QString, model);
        QFETCH(QString, command);
        QFile file(fixture(model) + QStringLiteral("/http/") + command + QStringLiteral(".json"));
        QVERIFY(file.open(QIODevice::ReadOnly));
        const QJsonObject http = QJsonDocument::fromJson(file.readAll()).object();

        // Where the two answers differ and the translation is not the reason.
        static const QHash<QString, QString> kKnown{
            {QStringLiteral("doorbell GetRecV20"),
             QStringLiteral("message 81 was not captured from the doorbell")},
            {QStringLiteral("doorbell GetPtzPreset"),
             QStringLiteral("the doorbell has no presets over Baichuan; over HTTP it lists 64 empty slots")},
            {QStringLiteral("e1zoom GetPtzPreset"),
             QStringLiteral("over HTTP, 64 empty slots; over Baichuan, the presets there are, none")},
        };
        if (kKnown.contains(model + QLatin1Char(' ') + command))
            QSKIP(qPrintable(kKnown.value(model + QLatin1Char(' ') + command)));

        connectTo(model);
        const QJsonObject baichuan = call(command);
        if (http.value(QStringLiteral("code")).toInt() != 0) {
            QVERIFY(baichuan.value(QStringLiteral("code")).toInt() != 0);
            return;
        }
        QVERIFY2(baichuan.value(QStringLiteral("code")).toInt() == 0,
                 qPrintable(QJsonDocument(baichuan).toJson(QJsonDocument::Compact)));

        // Fields that are a measurement rather than a setting, and moved in
        // the minutes between the two captures.
        static const QStringList kMoving{
            QStringLiteral("Time/sec"), QStringLiteral("Time/min"), QStringLiteral("Time/hour"),
            QStringLiteral("wifiSignal"), QStringLiteral("HddInfo[0]/size"),
        };
        // And fields the camera itself reports differently over the two.
        static const QHash<QString, QString> kCameraDiffers{
            // "pak" over Baichuan, "pak,paks" over HTTP, on both cameras.
            {QStringLiteral("DevInfo/pakSuffix"), QStringLiteral("firmware")},
            // The doorbell's serial differs in its last digit between the two.
            {QStringLiteral("DevInfo/serial"), QStringLiteral("doorbell")},
            // 12999 over HTTP, which is no grid's size: 80 × 60 is 4800, and
            // that is what the dialog draws and writes.
            {QStringLiteral("MdAlarm/scope/table/maxLen"), QStringLiteral("firmware")},
        };

        int shared = 0;
        QStringList differ;
        for (const char *part : {"value", "range"}) {
            const auto a = flat(baichuan.value(QLatin1String(part)));
            const auto b = flat(http.value(QLatin1String(part)));
            for (auto it = a.constBegin(); it != a.constEnd(); ++it) {
                if (!b.contains(it.key()) || kMoving.contains(it.key()))
                    continue;
                const QString differs = kCameraDiffers.value(it.key());
                if (differs == QLatin1String("firmware") || differs == model)
                    continue;
                ++shared;
                if (it.value() != b.value(it.key()))
                    differ << QStringLiteral("%1 %2: baichuan %3, http %4")
                                  .arg(QLatin1String(part), it.key(),
                                       QString::fromUtf8(QJsonDocument(QJsonArray{it.value()}).toJson(QJsonDocument::Compact)),
                                       QString::fromUtf8(QJsonDocument(QJsonArray{b.value(it.key())}).toJson(QJsonDocument::Compact)));
            }
        }
        QVERIFY2(differ.isEmpty(), qPrintable(differ.join(QLatin1Char('\n'))));
        QVERIFY2(shared > 0, "no field in common with the HTTP API's answer");
    }

    // ── writing back ────────────────────────────────────────────────────────

    void unchangedWriteChangesNothing_data()
    {
        QTest::addColumn<QString>("model");
        QTest::addColumn<QString>("get");
        QTest::addColumn<QString>("set");
        for (const char *model : kModels)
            for (const Pair &p : kPairs)
                QTest::newRow(qPrintable(QLatin1String(model) + QLatin1Char(' ') + QLatin1String(p.set)))
                    << QString::fromLatin1(model)
                                                     << QString::fromLatin1(p.get)
                                                     << QString::fromLatin1(p.set);
    }

    /// The dialog sends a whole section back whether anything was edited or
    /// not. Doing so must leave the camera exactly as it was: every write was
    /// tried on real cameras this way, and their documents compared after.
    void unchangedWriteChangesNothing()
    {
        QFETCH(QString, model);
        QFETCH(QString, get);
        QFETCH(QString, set);
        connectTo(model);
        const QJsonObject entry = call(get);
        if (entry.value(QStringLiteral("code")).toInt() != 0)
            QSKIP("this camera has no such section");

        QMap<quint32, QString> before;
        for (quint32 msg = 0; msg < 400; ++msg)
            if (!m_camera->document(msg).isEmpty())
                before.insert(msg, canonical(m_camera->document(msg)));

        write(set, entry.value(QStringLiteral("value")).toObject());

        for (auto it = before.constBegin(); it != before.constEnd(); ++it)
            QCOMPARE(canonical(m_camera->document(it.key())), it.value());
        QCOMPARE(value(get), entry.value(QStringLiteral("value")).toObject());
    }

    void editChangesThatAlone_data()
    {
        QTest::addColumn<QString>("get");
        QTest::addColumn<QString>("set");
        QTest::addColumn<QString>("path");
        QTest::addColumn<QJsonValue>("to");
        QTest::addColumn<QJsonValue>("otherwise");   // where the camera already has `to`
        QTest::addRow("bit rate") << "GetEnc" << "SetEnc" << "Enc/mainStream/bitRate" << QJsonValue(1024) << QJsonValue(2048);
        QTest::addRow("frame rate") << "GetEnc" << "SetEnc" << "Enc/subStream/frameRate" << QJsonValue(10) << QJsonValue(7);
        QTest::addRow("profile") << "GetEnc" << "SetEnc" << "Enc/mainStream/profile" << QJsonValue("Main") << QJsonValue("High");
        QTest::addRow("microphone") << "GetEnc" << "SetEnc" << "Enc/audio" << QJsonValue(0) << QJsonValue(1);
        QTest::addRow("brightness") << "GetImage" << "SetImage" << "Image/bright" << QJsonValue(200) << QJsonValue(100);
        QTest::addRow("day and night") << "GetIsp" << "SetIsp" << "Isp/dayNight" << QJsonValue("Black&White") << QJsonValue("Color");
        QTest::addRow("mirror") << "GetIsp" << "SetIsp" << "Isp/mirroring" << QJsonValue(1) << QJsonValue(0);
        QTest::addRow("anti-flicker") << "GetIsp" << "SetIsp" << "Isp/antiFlicker" << QJsonValue("50HZ") << QJsonValue("60HZ");
        QTest::addRow("osd name") << "GetOsd" << "SetOsd" << "Osd/osdChannel/name" << QJsonValue("Porch") << QJsonValue("Hall");
        QTest::addRow("osd name position") << "GetOsd" << "SetOsd" << "Osd/osdChannel/pos" << QJsonValue("Upper Left") << QJsonValue("Lower Right");
        QTest::addRow("osd clock position") << "GetOsd" << "SetOsd" << "Osd/osdTime/pos" << QJsonValue("Bottom Center") << QJsonValue("Top Center");
        QTest::addRow("osd clock") << "GetOsd" << "SetOsd" << "Osd/osdTime/enable" << QJsonValue(0) << QJsonValue(1);
        QTest::addRow("privacy mask") << "GetMask" << "SetMask" << "Mask/enable" << QJsonValue(1) << QJsonValue(0);
        QTest::addRow("vehicle detection") << "GetAiCfg" << "SetAiCfg" << "AiDetectType/vehicle" << QJsonValue(1) << QJsonValue(0);
        QTest::addRow("people detection") << "GetAiCfg" << "SetAiCfg" << "AiDetectType/people" << QJsonValue(0) << QJsonValue(1);
        QTest::addRow("overwrite card") << "GetRecV20" << "SetRecV20" << "Rec/overwrite" << QJsonValue(0) << QJsonValue(1);
        QTest::addRow("post-record") << "GetRecV20" << "SetRecV20" << "Rec/postRec" << QJsonValue("1 Minute") << QJsonValue("15 Seconds");
        QTest::addRow("recording") << "GetRecV20" << "SetRecV20" << "Rec/enable" << QJsonValue(0) << QJsonValue(1);
        QTest::addRow("e-mail") << "GetEmailV20" << "SetEmailV20" << "Email/enable" << QJsonValue(0) << QJsonValue(1);
        QTest::addRow("ftp") << "GetFtpV20" << "SetFtpV20" << "Ftp/enable" << QJsonValue(0) << QJsonValue(1);
        QTest::addRow("push") << "GetPushV20" << "SetPushV20" << "Push/enable" << QJsonValue(0) << QJsonValue(1);
        QTest::addRow("siren") << "GetAudioAlarmV20" << "SetAudioAlarmV20" << "Audio/enable" << QJsonValue(1) << QJsonValue(0);
        QTest::addRow("onvif port") << "GetNetPort" << "SetNetPort" << "NetPort/onvifPort" << QJsonValue(8001) << QJsonValue(8002);
        QTest::addRow("rtsp switch") << "GetNetPort" << "SetNetPort" << "NetPort/rtspEnable" << QJsonValue(0) << QJsonValue(1);
        QTest::addRow("24-hour clock") << "GetTime" << "SetTime" << "Time/hourFmt" << QJsonValue(1) << QJsonValue(0);
        QTest::addRow("date format") << "GetTime" << "SetTime" << "Time/timeFmt" << QJsonValue("DD/MM/YYYY") << QJsonValue("YYYY/MM/DD");
        QTest::addRow("infrared") << "GetIrLights" << "SetIrLights" << "IrLights/state" << QJsonValue("Off") << QJsonValue("Auto");
        QTest::addRow("status light") << "GetPowerLed" << "SetPowerLed" << "PowerLed/state" << QJsonValue("Off") << QJsonValue("On");
    }

    /// One field edited: read back, that field has its new value and every
    /// other field the value it had. On each model that has the field.
    void editChangesThatAlone()
    {
        QFETCH(QString, get);
        QFETCH(QString, set);
        QFETCH(QString, path);
        QFETCH(QJsonValue, to);
        QFETCH(QJsonValue, otherwise);
        int tried = 0;
        for (const char *model : kModels) {
            connectTo(QLatin1String(model));
            const QJsonObject before = value(get);
            if (valueAt(before, path).isUndefined())
                continue;
            ++tried;
            const QJsonObject wanted =
                withValue(before, path, valueAt(before, path) == to ? otherwise : to);
            QVERIFY(wanted != before);
            write(set, wanted);
            const QJsonObject after = value(get);
            QVERIFY2(after == wanted, qPrintable(QStringLiteral("%1:\nwanted %2\ngot    %3").arg(
                                          QLatin1String(model),
                                          QString::fromUtf8(QJsonDocument(wanted).toJson(QJsonDocument::Compact)),
                                          QString::fromUtf8(QJsonDocument(after).toJson(QJsonDocument::Compact)))));
        }
        QVERIFY2(tried > 0, "no model has this field");
    }

    /// The week of hours, per kind of event, round trip.
    void scheduleHoursChange()
    {
        for (const char *model : kModels) {
            connectTo(QLatin1String(model));
            for (const auto &[get, set, wrapper] :
                 {std::tuple{"GetRecV20", "SetRecV20", "Rec"}, std::tuple{"GetEmailV20", "SetEmailV20", "Email"},
                  std::tuple{"GetPushV20", "SetPushV20", "Push"}}) {
                const QJsonObject before = value(QLatin1String(get));
                const QString path = QLatin1String(wrapper) + QStringLiteral("/schedule/table/MD");
                const QString hours = valueAt(before, path).toString();
                if (hours.size() != 168)
                    continue;
                const QJsonObject wanted = withValue(before, path, flipHour(hours, 30));
                write(QLatin1String(set), wanted);
                QCOMPARE(value(QLatin1String(get)), wanted);
            }
        }
    }

    // ── what each mapping says ──────────────────────────────────────────────

    /// Most significant bit first, 96 columns to a row of which the first 80
    /// are the picture — as an E1 Zoom drew it over HTTP and reported it here.
    void motionGridBitOrder()
    {
        connectTo(QStringLiteral("e1zoom"));
        QJsonObject md = value(QStringLiteral("GetMdAlarm"));
        const int cols = valueAt(md, QStringLiteral("MdAlarm/scope/cols")).toInt();
        const int rows = valueAt(md, QStringLiteral("MdAlarm/scope/rows")).toInt();
        QCOMPARE(cols, 80);
        QCOMPARE(rows, 60);

        QString grid(cols * rows, QLatin1Char('0'));
        grid[0] = QLatin1Char('1');            // row 0, column 0
        grid[9] = QLatin1Char('1');            // row 0, column 9
        grid[cols * 1 + 0] = QLatin1Char('1'); // row 1, column 0
        grid[cols * rows - 1] = QLatin1Char('1');
        write(QStringLiteral("SetMdAlarm"), withValue(md, QStringLiteral("MdAlarm/scope/table"), grid));

        QDomDocument doc;
        QVERIFY(doc.setContent(m_camera->document(46)));
        const QByteArray bits = QByteArray::fromBase64(
            doc.documentElement().firstChildElement(QStringLiteral("MD")).firstChildElement(QStringLiteral("scope"))
                .firstChildElement(QStringLiteral("valueTable")).text().toLatin1());
        QCOMPARE(bits.size(), 96 / 8 * 64);
        QCOMPARE(quint8(bits.at(0)), quint8(0x80));
        QCOMPARE(quint8(bits.at(1)), quint8(0x40));
        QCOMPARE(quint8(bits.at(12)), quint8(0x80));
        QCOMPARE(quint8(bits.at(59 * 12 + 9)), quint8(0x01));
        QCOMPARE(valueAt(value(QStringLiteral("GetMdAlarm")), QStringLiteral("MdAlarm/scope/table")).toString(), grid);
    }

    /// Where the firmware keeps no newer list, its bands are shown twice —
    /// under sens and under newSens — and both come back. Writing both once
    /// let the untouched copy undo the edit.
    void editedBandSurvivesItsCopy()
    {
        connectTo(QStringLiteral("e1pro"));
        const QJsonObject md = value(QStringLiteral("GetMdAlarm"));
        const QJsonArray sens = valueAt(md, QStringLiteral("MdAlarm/sens")).toArray();
        QVERIFY(!sens.isEmpty());
        QJsonObject band = sens.first().toObject();
        band[QStringLiteral("sensitivity")] = band.value(QStringLiteral("sensitivity")).toInt() == 5 ? 6 : 5;
        QJsonArray edited = sens;
        edited[0] = band;
        write(QStringLiteral("SetMdAlarm"), withValue(md, QStringLiteral("MdAlarm/sens"), edited));
        QCOMPARE(valueAt(value(QStringLiteral("GetMdAlarm")), QStringLiteral("MdAlarm/sens")).toArray().first(),
                 QJsonValue(band));
    }

    /// And the other way round: the copy under newSens edited, the one under
    /// sens left as it came.
    void editedNewBandSurvivesItsCopy()
    {
        connectTo(QStringLiteral("e1"));
        const QJsonObject md = value(QStringLiteral("GetMdAlarm"));
        const QJsonArray sens = valueAt(md, QStringLiteral("MdAlarm/newSens/sens")).toArray();
        QVERIFY(!sens.isEmpty());
        QJsonObject band = sens.last().toObject();
        band[QStringLiteral("beginHour")] = band.value(QStringLiteral("beginHour")).toInt() == 19 ? 20 : 19;
        QJsonArray edited = sens;
        edited[edited.size() - 1] = band;
        write(QStringLiteral("SetMdAlarm"), withValue(md, QStringLiteral("MdAlarm/newSens/sens"), edited));
        const QJsonObject after = value(QStringLiteral("GetMdAlarm"));
        QCOMPARE(valueAt(after, QStringLiteral("MdAlarm/newSens/sens")).toArray().last(), QJsonValue(band));
        QCOMPARE(valueAt(after, QStringLiteral("MdAlarm/sens")).toArray().last().toObject()
                     .value(QStringLiteral("beginHour")), band.value(QStringLiteral("beginHour")));
    }

    /// The sensitivity the dialog's own form edits: the firmware's default,
    /// in the newer list. Writing a band there is accepted and ignored.
    void sensitivityIsTheDefault()
    {
        connectTo(QStringLiteral("e1pro"));
        QJsonObject md = value(QStringLiteral("GetMdAlarm"));
        QCOMPARE(valueAt(md, QStringLiteral("MdAlarm/sensitivity")).toInt(), 10);
        write(QStringLiteral("SetMdAlarm"), withValue(md, QStringLiteral("MdAlarm/sensitivity"), 23));
        QVERIFY(m_camera->document(46).contains(QLatin1String("<sensitivityDefault>23</sensitivityDefault>")));
        // One number, shown twice: both say so on reading back, and nothing else moved.
        const QJsonObject after = value(QStringLiteral("GetMdAlarm"));
        QCOMPARE(valueAt(after, QStringLiteral("MdAlarm/sensitivity")).toInt(), 23);
        QCOMPARE(valueAt(after, QStringLiteral("MdAlarm/newSens/sensDef")).toInt(), 23);
        QJsonObject expected = withValue(md, QStringLiteral("MdAlarm/sensitivity"), 23);
        expected = withValue(expected, QStringLiteral("MdAlarm/newSens/sensDef"), 23);
        QCOMPARE(after, expected);
        // So does the copy under newSens, which the HTTP API's own form edits.
        write(QStringLiteral("SetMdAlarm"), withValue(after, QStringLiteral("MdAlarm/newSens/sensDef"), 40));
        QCOMPARE(valueAt(value(QStringLiteral("GetMdAlarm")), QStringLiteral("MdAlarm/sensitivity")).toInt(), 40);
    }

    void osdPositions_data()
    {
        QTest::addColumn<QString>("name");
        QTest::addColumn<int>("x");
        QTest::addColumn<int>("y");
        QTest::addRow("upper left") << "Upper Left" << 1 << 1;
        QTest::addRow("top center") << "Top Center" << 65537 << 1;
        QTest::addRow("upper right") << "Upper Right" << 65536 << 1;
        QTest::addRow("lower left") << "Lower Left" << 1 << 65536;
        QTest::addRow("bottom center") << "Bottom Center" << 65537 << 65536;
        QTest::addRow("lower right") << "Lower Right" << 65536 << 65536;
    }

    /// 1 the near edge, 65536 the far one, 65537 the middle.
    void osdPositions()
    {
        QFETCH(QString, name);
        QFETCH(int, x);
        QFETCH(int, y);
        connectTo(QStringLiteral("e1"));
        const QJsonObject osd = value(QStringLiteral("GetOsd"));
        write(QStringLiteral("SetOsd"), withValue(osd, QStringLiteral("Osd/osdTime/pos"), name));
        const QString xml = m_camera->document(44);
        const QString clock = xml.section(QStringLiteral("<OsdDatetime"), 1).section(QStringLiteral("</OsdDatetime>"), 0, 0);
        QVERIFY(clock.contains(QStringLiteral("<topLeftX>%1</topLeftX>").arg(x)));
        QVERIFY(clock.contains(QStringLiteral("<topLeftY>%1</topLeftY>").arg(y)));
        QCOMPARE(valueAt(value(QStringLiteral("GetOsd")), QStringLiteral("Osd/osdTime/pos")).toString(), name);
    }

    /// Two parts, G × 1024 + M: 57 and 967 is 59335, as the HTTP API says.
    void cardSize()
    {
        connectTo(QStringLiteral("e1zoom"));
        const QJsonArray disks = value(QStringLiteral("GetHddInfo")).value(QStringLiteral("HddInfo")).toArray();
        QCOMPARE(disks.size(), 1);
        QCOMPARE(disks.first().toObject().value(QStringLiteral("capacity")).toInt(), 59335);
    }

    void signalBars_data()
    {
        QTest::addColumn<int>("dbm");
        QTest::addColumn<int>("bars");
        QTest::addRow("-40") << -40 << 4;
        QTest::addRow("-56") << -56 << 2;
        QTest::addRow("-60") << -60 << 1;
        QTest::addRow("-64") << -64 << 0;
        QTest::addRow("-100") << -100 << 0;
    }

    /// Fitted to two cameras answering both ways: -56 dBm is 2, -60 is 1.
    void signalBars()
    {
        QFETCH(int, dbm);
        QFETCH(int, bars);
        connectTo(QStringLiteral("e1"));
        m_camera->setDocument(115, QStringLiteral("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<body>\n"
                                                  "<WifiSignal version=\"1.1\">\n<signal>%1</signal>\n"
                                                  "</WifiSignal>\n</body>\n").arg(dbm));
        QCOMPARE(value(QStringLiteral("GetWifiSignal")).value(QStringLiteral("wifiSignal")).toInt(), bars);
    }

    /// The kinds alone: the dialog's form finds them only when they are all
    /// there is.
    void recognitionKindsOnly()
    {
        connectTo(QStringLiteral("e1zoom"));
        const QJsonObject ai = value(QStringLiteral("GetAiCfg"));
        QCOMPARE(ai.keys(), QStringList{QStringLiteral("AiDetectType")});
        QCOMPARE(ai.value(QStringLiteral("AiDetectType")).toObject().keys().size(), 4);
    }

    void devInfo()
    {
        connectTo(QStringLiteral("e1pro"));
        const QJsonObject info = value(QStringLiteral("GetDevInfo")).value(QStringLiteral("DevInfo")).toObject();
        QCOMPARE(info.value(QStringLiteral("model")).toString(), QStringLiteral("E1 Pro"));
        QCOMPARE(info.value(QStringLiteral("firmVer")).toString(), QStringLiteral("v3.1.0.3149_2401092478"));
        QCOMPARE(info.value(QStringLiteral("wifi")).toInt(), 1);
        QCOMPARE(info.value(QStringLiteral("diskNum")).toInt(), 1);
    }

    // ── turning the camera ──────────────────────────────────────────────────

    /// The login's device info, as far as PTZ goes.
    static QString deviceInfo(const QString &ptzMode)
    {
        return QStringLiteral("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<body>\n"
                              "<DeviceInfo version=\"1.1\">\n<ptzMode>%1</ptzMode>\n"
                              "</DeviceInfo>\n</body>\n").arg(ptzMode);
    }

    /// The last request the camera saw.
    FakeCamera::Request last() const
    {
        const QList<FakeCamera::Request> requests = m_camera->requests();
        return requests.isEmpty() ? FakeCamera::Request{} : requests.last();
    }

    void ptzMoves()
    {
        connectTo(QStringLiteral("e1"));
        m_camera->setDocument(18, QStringLiteral("<?xml version=\"1.0\" ?>\n<body/>\n"));
        QJsonObject entry = call(QStringLiteral("PtzCtrl"),
                                 {{QStringLiteral("channel"), 0},
                                  {QStringLiteral("op"), QStringLiteral("LeftUp")},
                                  {QStringLiteral("speed"), 12}});
        QCOMPARE(entry.value(QStringLiteral("code")).toInt(), 0);
        QCOMPARE(last().msg, 18u);
        QVERIFY(last().body.contains(QLatin1String("<command>LeftUp</command>")));
        QVERIFY(last().body.contains(QLatin1String("<speed>12</speed>")));
        QVERIFY(last().extension.contains(QLatin1String("<channelId>0</channelId>")));

        // No speed given, none sent: the camera keeps its own.
        entry = call(QStringLiteral("PtzCtrl"), {{QStringLiteral("op"), QStringLiteral("Stop")}});
        QCOMPARE(entry.value(QStringLiteral("code")).toInt(), 0);
        QVERIFY(last().body.contains(QLatin1String("<command>Stop</command>")));
        QVERIFY(!last().body.contains(QLatin1String("<speed>")));
    }

    void ptzGoesToPreset()
    {
        connectTo(QStringLiteral("e1pro"));
        m_camera->setDocument(19, QStringLiteral("<?xml version=\"1.0\" ?>\n<body/>\n"));
        const QJsonObject entry = call(QStringLiteral("PtzCtrl"),
                                       {{QStringLiteral("op"), QStringLiteral("ToPos")},
                                        {QStringLiteral("id"), 3}});
        QCOMPARE(entry.value(QStringLiteral("code")).toInt(), 0);
        QCOMPARE(last().msg, 19u);
        QVERIFY(last().body.contains(QLatin1String("<id>3</id>")));
        QVERIFY(last().body.contains(QLatin1String("<command>toPos</command>")));
    }

    /// Only the HTTP API's own words go to the motor.
    void ptzUnknownMoveIsRefused()
    {
        connectTo(QStringLiteral("e1"));
        const int before = int(m_camera->requests().size());
        const QJsonObject entry = call(QStringLiteral("PtzCtrl"),
                                       {{QStringLiteral("op"), QStringLiteral("Spin")}});
        QCOMPARE(entry.value(QStringLiteral("code")).toInt(), 1);
        QCOMPARE(int(m_camera->requests().size()), before);
    }

    /// A camera without a motor turns the message down.
    void ptzOnCameraWithoutOne()
    {
        connectTo(QStringLiteral("doorbell"));
        m_camera->statusFor.insert(18, 400);
        QCOMPARE(rspCode(call(QStringLiteral("PtzCtrl"),
                              {{QStringLiteral("op"), QStringLiteral("Left")}})), -9);
    }

    void ptzAbility_data()
    {
        QTest::addColumn<QString>("mode");
        QTest::addColumn<int>("move");
        QTest::addColumn<int>("zoom");
        QTest::newRow("E1, E1 Pro") << QStringLiteral("pt") << 1 << 0;
        QTest::newRow("E1 Zoom") << QStringLiteral("ptz") << 1 << 1;
        QTest::newRow("doorbell") << QStringLiteral("none") << 0 << 0;
    }

    /// GetAbility answered from the login's device info.
    void ptzAbility()
    {
        QFETCH(QString, mode);
        QFETCH(int, move);
        QFETCH(int, zoom);
        connectTo(QStringLiteral("e1"), deviceInfo(mode));
        const QJsonObject chn = value(QStringLiteral("GetAbility"))
                                    .value(QStringLiteral("Ability")).toObject()
                                    .value(QStringLiteral("abilityChn")).toArray()
                                    .at(0).toObject();
        const auto ver = [&chn](const char *key) {
            return chn.value(QLatin1String(key)).toObject().value(QStringLiteral("ver")).toInt();
        };
        QCOMPARE(ver("ptzCtrl"), move);
        QCOMPARE(ver("supportZoom"), zoom);
    }

    // ── saying no ───────────────────────────────────────────────────────────

    /// The HTTP API's own "no such command", which the dialog already treats
    /// as "leave the section out".
    void unknownCommandIsUnsupported()
    {
        connectTo(QStringLiteral("e1"));
        for (const char *command : {"GetUser", "GetNtp", "Format", "Upgrade", "Snap"}) {
            const QJsonObject entry = call(QLatin1String(command));
            QCOMPARE(entry.value(QStringLiteral("code")).toInt(), 1);
            QCOMPARE(rspCode(entry), -9);
        }
    }

    /// A camera without a feature answers its message with 400.
    void refusedReadIsUnsupported()
    {
        connectTo(QStringLiteral("e1"));
        m_camera->statusFor.insert(52, 400);
        QCOMPARE(rspCode(call(QStringLiteral("GetMask"))), -9);
    }

    void refusedWriteSaysSo()
    {
        connectTo(QStringLiteral("e1"));
        m_camera->statusFor.insert(57, 400);
        const QJsonObject enc = value(QStringLiteral("GetEnc"));
        const QJsonObject entry = call(QStringLiteral("SetEnc"),
                                       withValue(enc, QStringLiteral("Enc/mainStream/bitRate"), 1024));
        QCOMPARE(rspCode(entry), -1002);
    }

    void droppedConnectionIsNotUnsupported()
    {
        connectTo(QStringLiteral("e1"));
        m_camera->dropOn = 56;
        QCOMPARE(rspCode(call(QStringLiteral("GetEnc"))), -1001);
    }

    /// The camera may go before it answers, which is the restart working.
    void rebootThatHangsUpIsDone()
    {
        connectTo(QStringLiteral("e1"));
        m_camera->dropOn = 23;
        QCOMPARE(call(QStringLiteral("Reboot")).value(QStringLiteral("code")).toInt(), 0);
    }

    /// Drawing an area waits until the layout of one has been seen.
    void drawingMaskAreasIsRefused()
    {
        connectTo(QStringLiteral("e1"));
        QJsonObject mask = value(QStringLiteral("GetMask"));
        const QJsonArray area{QJsonObject{{QStringLiteral("block"),
                                           QJsonObject{{QStringLiteral("x"), 0}, {QStringLiteral("y"), 0},
                                                       {QStringLiteral("width"), 10}, {QStringLiteral("height"), 10}}}}};
        const QString before = canonical(m_camera->document(52));
        QCOMPARE(rspCode(call(QStringLiteral("SetMask"), withValue(mask, QStringLiteral("Mask/area"), area))), -1002);
        QCOMPARE(canonical(m_camera->document(52)), before);
    }

    // ── the connection behind the dialog ────────────────────────────────────

    /// A session the camera dropped is opened again, once, without an error.
    void reconnectsOnce()
    {
        m_camera = std::make_unique<FakeCamera>(kUser, kPassword);
        m_camera->loadDocuments(fixture(QStringLiteral("e1")));
        m_camera->begin();
        leolink::CameraConfig camera;
        camera.host = QStringLiteral("127.0.0.1");
        camera.user = kUser;
        camera.baichuanPort = m_camera->port();
        const auto api = BaichuanApi::forCamera(camera, kPassword);

        QObject context;
        QJsonObject entry;
        QEventLoop loop;
        auto ask = [&](const QString &command) {
            api->call(command, {}, 1, &context, [&](const QJsonObject &e) {
                entry = e;
                loop.quit();
            });
            QTimer::singleShot(20000, &loop, &QEventLoop::quit);
            loop.exec();
        };

        ask(QStringLiteral("GetEnc"));
        QCOMPARE(entry.value(QStringLiteral("code")).toInt(), 0);
        QCOMPARE(m_camera->connections(), 1);

        m_camera->dropOn = 26;
        ask(QStringLiteral("GetImage"));
        QCOMPARE(entry.value(QStringLiteral("code")).toInt(), 0);
        QCOMPARE(m_camera->connections(), 2);

        // Every call on one camera shares its one session.
        QCOMPARE(BaichuanApi::forCamera(camera, kPassword), api);
    }

    /// Every settings message names the channel, as the firmware wants.
    void everyRequestNamesTheChannel()
    {
        connectTo(QStringLiteral("e1"));
        m_camera->clearRequests();
        for (const Pair &p : kPairs)
            call(QLatin1String(p.get));
        const QList<FakeCamera::Request> sent = m_camera->requests();
        QVERIFY(!sent.isEmpty());
        for (const FakeCamera::Request &r : sent)
            QVERIFY2(r.extension.contains(QLatin1String("<channelId>0</channelId>")),
                     qPrintable(QString::number(r.msg)));
    }
};

QTEST_GUILESS_MAIN(TestBaichuanApi)
#include "tst_baichuanapi.moc"
