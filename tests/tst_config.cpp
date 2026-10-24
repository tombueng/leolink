// The configuration file: what adding a camera, and every setting, leaves
// behind, and what an older file turns into.

#include <QFile>
#include <QJsonArray>
#include <QJsonDocument>
#include <QJsonObject>
#include <QSet>
#include <QStandardPaths>
#include <QTemporaryDir>
#include <QTest>
#include <QUrl>
#include <QUrlQuery>

#include "Config.h"

using leolink::CameraConfig;
using leolink::Config;

class TestConfig : public QObject {
    Q_OBJECT

private:
    QTemporaryDir m_dir;

    QString file() const { return m_dir.filePath(QStringLiteral("config.json")); }

    void writeFile(const QJsonObject &root)
    {
        QFile f(file());
        QVERIFY(f.open(QIODevice::WriteOnly));
        f.write(QJsonDocument(root).toJson());
    }

    QJsonObject readFile()
    {
        QFile f(file());
        if (!f.open(QIODevice::ReadOnly))
            return {};
        return QJsonDocument::fromJson(f.readAll()).object();
    }

    static CameraConfig camera(const QString &name, const QString &host)
    {
        CameraConfig c;
        c.id = Config::newId();
        c.name = name;
        c.host = host;
        return c;
    }

private slots:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        QVERIFY(m_dir.isValid());
        qputenv("LEOLINK_CONFIG", file().toUtf8());
        QCOMPARE(Config::path(), file());
    }

    void init() { QFile::remove(file()); }

    void nothingThereIsEmpty()
    {
        const Config c = Config::load();
        QVERIFY(c.cameras.isEmpty());
        QCOMPARE(c.gridShape(), qMakePair(1, 1));
        QVERIFY(c.layout().isEmpty());
    }

    void unreadableFileIsEmpty()
    {
        QFile f(file());
        QVERIFY(f.open(QIODevice::WriteOnly));
        f.write("{ \"cameras\": [ { \"host\": ");   // cut off mid-write
        f.close();
        QVERIFY(Config::load().cameras.isEmpty());
    }

    /// What the settings dialog does when a camera is added and saved.
    void addedCameraSurvivesASave()
    {
        Config config;
        CameraConfig hall = camera(QStringLiteral("Hall"), QStringLiteral("192.0.2.10"));
        hall.user = QStringLiteral("viewer");
        hall.password = QStringLiteral("p@ss word, with \"quotes\"");
        hall.transport = QStringLiteral("auto");
        hall.stream = QStringLiteral("main");
        hall.channel = 3;
        hall.https = true;
        hall.muted = false;
        hall.volume = 80;
        hall.row = 1;
        hall.col = 0;
        hall.rowSpan = 2;
        hall.colSpan = 2;
        hall.motionSource = QStringLiteral("both");
        hall.motionZones = QStringLiteral("0.1,0.1,0.5,0.5");
        hall.recordOnMotion = true;
        hall.recordPreSeconds = 5;
        hall.continuousRecording = true;
        hall.continuousRetentionHours = 168;
        hall.useGlobalActions = false;
        hall.actions.callWebhook = true;
        hall.actions.webhookUrl = QStringLiteral("http://example.com/hook?cam=%n");
        hall.actions.publishMqtt = true;
        hall.actions.mqttHost = QStringLiteral("broker.example.com");
        hall.actions.mqttTopic = QStringLiteral("home/%n/motion");
        config.cameras.append(hall);
        CameraConfig porch = camera(QStringLiteral("Porch"), QStringLiteral("porch.example.com"));
        porch.enabled = false;
        porch.passwordSource = QStringLiteral("command");
        porch.passwordCommand = QStringLiteral("pass show cameras/porch");
        config.cameras.append(porch);
        config.gridColumns = 3;
        config.language = QStringLiteral("de");
        config.hwdec = QStringLiteral("off");
        config.frameless = true;
        QVERIFY(config.save());

        const Config back = Config::load();
        QCOMPARE(back.cameras.size(), 2);
        const CameraConfig &h = back.cameras.at(0);
        QCOMPARE(h.id, hall.id);
        QCOMPARE(h.name, hall.name);
        QCOMPARE(h.host, hall.host);
        QCOMPARE(h.user, hall.user);
        QCOMPARE(h.password, hall.password);
        QCOMPARE(h.transport, QStringLiteral("auto"));
        QCOMPARE(h.stream, hall.stream);
        QCOMPARE(h.channel, 3);
        QVERIFY(h.https);
        QVERIFY(!h.muted);
        QCOMPARE(h.volume, 80);
        QCOMPARE(h.row, 1);
        QCOMPARE(h.colSpan, 2);
        QCOMPARE(h.motionSource, hall.motionSource);
        QCOMPARE(h.motionZones, hall.motionZones);
        QVERIFY(h.recordOnMotion);
        QCOMPARE(h.recordPreSeconds, 5);
        QVERIFY(h.continuousRecording);
        QCOMPARE(h.continuousRetentionHours, 168);
        QVERIFY(!h.useGlobalActions);
        QVERIFY(h.actions.callWebhook);
        QCOMPARE(h.actions.webhookUrl, hall.actions.webhookUrl);
        QCOMPARE(h.actions.mqttTopic, hall.actions.mqttTopic);
        const CameraConfig &p = back.cameras.at(1);
        QVERIFY(!p.enabled);
        QCOMPARE(p.passwordSource, QStringLiteral("command"));
        QCOMPARE(p.passwordCommand, porch.passwordCommand);
        QCOMPARE(back.gridColumns, 3);
        QCOMPARE(back.language, QStringLiteral("de"));
        QCOMPARE(back.hwdec, QStringLiteral("off"));
        QVERIFY(back.frameless);
    }

    /// It holds passwords in clear text.
    void fileIsTheOwnersAlone()
    {
        Config config;
        config.cameras.append(camera(QStringLiteral("Hall"), QStringLiteral("192.0.2.10")));
        QVERIFY(config.save());
        QCOMPARE(QFile::permissions(file()) & ~(QFile::ReadUser | QFile::WriteUser),
                 QFile::ReadOwner | QFile::WriteOwner);
    }

    /// What a camera offers is asked each time, never written down: ports are
    /// switched on and off from the camera's own app.
    void capabilitiesAreNotSaved()
    {
        Config config;
        CameraConfig c = camera(QStringLiteral("Hall"), QStringLiteral("192.0.2.10"));
        c.caps.known = true;
        c.caps.baichuan = true;
        c.caps.failed << QStringLiteral("flv");
        config.cameras.append(c);
        QVERIFY(config.save());
        const QJsonObject saved = readFile().value(QStringLiteral("cameras")).toArray().first().toObject();
        QVERIFY(!saved.contains(QStringLiteral("caps")));
        QVERIFY(!Config::load().cameras.first().caps.known);
    }

    void cameraWithoutAnAddressIsDropped()
    {
        writeFile({{QStringLiteral("cameras"),
                    QJsonArray{QJsonObject{{QStringLiteral("name"), QStringLiteral("nowhere")}},
                               QJsonObject{{QStringLiteral("host"), QStringLiteral("192.0.2.10")}}}}});
        const Config c = Config::load();
        QCOMPARE(c.cameras.size(), 1);
        QVERIFY(!c.cameras.first().id.isEmpty());   // given one on the way in
    }

    /// Files from older versions keep working.
    void olderFilesCarryOver()
    {
        writeFile({
            {QStringLiteral("columns"), 4},
            {QStringLiteral("showMotion"), false},
            {QStringLiteral("cameras"),
             QJsonArray{QJsonObject{{QStringLiteral("host"), QStringLiteral("192.0.2.10")},
                                    {QStringLiteral("motionCommand"), QStringLiteral("notify-send %n")},
                                    {QStringLiteral("passwordCommand"), QStringLiteral("pass show hall")}}}},
        });
        const Config c = Config::load();
        QCOMPARE(c.gridColumns, 4);
        const CameraConfig &cam = c.cameras.first();
        QCOMPARE(cam.motionSource, QStringLiteral("off"));
        QVERIFY(cam.actions.runCommand);
        QCOMPARE(cam.actions.command, QStringLiteral("notify-send %n"));
        QVERIFY(!cam.useGlobalActions);
        QCOMPARE(cam.passwordSource, QStringLiteral("command"));
        QCOMPARE(cam.transport, QStringLiteral("rtsp"));   // as it always was
    }

    void idsAreUnique()
    {
        QSet<QString> seen;
        for (int i = 0; i < 500; ++i) {
            const QString id = Config::newId();
            QCOMPARE(id.size(), 8);
            QVERIFY(!seen.contains(id));
            seen.insert(id);
        }
    }

    void passwordFromACommand()
    {
        CameraConfig c = camera(QStringLiteral("Hall"), QStringLiteral("192.0.2.10"));
        c.passwordSource = QStringLiteral("command");
        c.passwordCommand = QStringLiteral("printf 'from the command\\n'");
        QCOMPARE(c.secret(), QStringLiteral("from the command"));
        c.passwordCommand = QStringLiteral("exit 1");
        QVERIFY(c.secret().isEmpty());
    }

    // ── the grid ────────────────────────────────────────────────────────────

    void gridGrowsWithTheCameras_data()
    {
        QTest::addColumn<int>("count");
        QTest::addColumn<int>("cols");
        QTest::addColumn<int>("rows");
        QTest::addRow("1") << 1 << 1 << 1;
        QTest::addRow("2") << 2 << 2 << 1;
        QTest::addRow("3") << 3 << 2 << 2;
        QTest::addRow("4") << 4 << 2 << 2;
        QTest::addRow("5") << 5 << 3 << 2;
        QTest::addRow("9") << 9 << 3 << 3;
        QTest::addRow("10") << 10 << 4 << 3;
    }

    void gridGrowsWithTheCameras()
    {
        QFETCH(int, count);
        QFETCH(int, cols);
        QFETCH(int, rows);
        Config config;
        for (int i = 0; i < count; ++i)
            config.cameras.append(camera(QString::number(i), QStringLiteral("192.0.2.%1").arg(10 + i)));
        QCOMPARE(config.gridShape(), qMakePair(cols, rows));
        QCOMPARE(config.layout().size(), count);
    }

    void disabledCamerasTakeNoCell()
    {
        Config config;
        config.cameras.append(camera(QStringLiteral("a"), QStringLiteral("192.0.2.10")));
        CameraConfig off = camera(QStringLiteral("b"), QStringLiteral("192.0.2.11"));
        off.enabled = false;
        config.cameras.append(off);
        QCOMPARE(config.active().size(), 1);
        QCOMPARE(config.layout().size(), 1);
    }

    /// Placed cameras keep their cells; the rest fill what is left, in reading
    /// order, and none overlap.
    void placedCamerasKeepTheirCells()
    {
        Config config;
        config.gridColumns = 3;
        CameraConfig big = camera(QStringLiteral("big"), QStringLiteral("192.0.2.10"));
        big.row = 0;
        big.col = 1;
        big.rowSpan = 2;
        big.colSpan = 2;
        config.cameras.append(camera(QStringLiteral("a"), QStringLiteral("192.0.2.11")));
        config.cameras.append(big);
        config.cameras.append(camera(QStringLiteral("b"), QStringLiteral("192.0.2.12")));
        config.cameras.append(camera(QStringLiteral("c"), QStringLiteral("192.0.2.13")));

        QSet<QPair<int, int>> taken;
        for (const leolink::Placement &p : config.layout()) {
            if (p.cameraId == big.id) {
                QCOMPARE(p.row, 0);
                QCOMPARE(p.col, 1);
            }
            for (int r = p.row; r < p.row + p.rowSpan; ++r)
                for (int c = p.col; c < p.col + p.colSpan; ++c) {
                    QVERIFY2(!taken.contains({r, c}), "two cameras in one cell");
                    taken.insert({r, c});
                }
        }
        QCOMPARE(config.layout().size(), 4);
    }

    /// A camera placed beyond the grid widens it rather than vanishing.
    void placementBeyondTheGridWidensIt()
    {
        Config config;
        config.gridColumns = 2;
        config.gridRows = 1;
        CameraConfig far = camera(QStringLiteral("far"), QStringLiteral("192.0.2.10"));
        far.row = 2;
        far.col = 3;
        config.cameras.append(far);
        QCOMPARE(config.gridShape(), qMakePair(4, 3));
        QCOMPARE(config.layout().size(), 1);
    }

    // ── where the picture comes from ────────────────────────────────────────

    void rtspAddress()
    {
        CameraConfig c = camera(QStringLiteral("Hall"), QStringLiteral("192.0.2.10"));
        c.password = QStringLiteral("a b@c");
        QCOMPARE(c.streamUrl(), QStringLiteral("rtsp://admin:a%20b%40c@192.0.2.10:554/h264Preview_01_sub"));
        c.channel = 2;
        c.stream = QStringLiteral("main");
        QVERIFY(c.streamUrl().endsWith(QLatin1String("/h264Preview_03_main")));
    }

    void flvAddress()
    {
        CameraConfig c = camera(QStringLiteral("Hall"), QStringLiteral("192.0.2.10"));
        c.transport = QStringLiteral("flv");
        const QUrl url(c.streamUrl());
        QCOMPARE(url.scheme(), QStringLiteral("http"));
        QCOMPARE(url.path(), QStringLiteral("/flv"));
        QCOMPARE(QUrlQuery(url).queryItemValue(QStringLiteral("stream")), QStringLiteral("channel0_sub.bcs"));
    }

    void customAddressAsGiven()
    {
        CameraConfig c = camera(QStringLiteral("Other"), QStringLiteral("192.0.2.10"));
        c.transport = QStringLiteral("custom");
        c.customUrl = QStringLiteral("rtsp://192.0.2.10/stream1");
        QCOMPARE(c.streamUrl(), c.customUrl);
    }

    void labelFallsBackToTheAddress()
    {
        CameraConfig c = camera(QString(), QStringLiteral("192.0.2.10"));
        QVERIFY(c.label().contains(QLatin1String("192.0.2.10")));
    }
};

QTEST_GUILESS_MAIN(TestConfig)
#include "tst_config.moc"
