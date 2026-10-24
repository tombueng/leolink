// What happens when a camera sees something: the event log, and the actions —
// a command, a webhook, an MQTT message.

#include <QFile>
#include <QFileInfo>
#include <QJsonDocument>
#include <QJsonObject>
#include <QSignalSpy>
#include <QStandardPaths>
#include <QTcpServer>
#include <QTcpSocket>
#include <QTemporaryDir>
#include <QTest>

#include "EventActions.h"
#include "EventLog.h"
#include "FakeWebServer.h"
#include "MqttPublisher.h"

using leolink::ActionConfig;
using leolink::EventContext;
using leolink::EventDispatcher;
using leolink::EventEntry;
using leolink::EventLog;
using leolink::MqttPublisher;

namespace {

EventContext context()
{
    EventContext c;
    c.cameraName = QStringLiteral("Hall");
    c.cameraId = QStringLiteral("ab12cd34");
    c.host = QStringLiteral("192.0.2.10");
    c.timestamp = QStringLiteral("2026-10-24T12:00:00");
    c.eventType = QStringLiteral("motion");
    c.active = true;
    c.recordingPath = QStringLiteral("/videos/hall.mkv");
    c.imagePath = QStringLiteral("/videos/hall.jpg");
    return c;
}

/// The smallest broker that will take one message: CONNECT, CONNACK, PUBLISH.
struct Broker {
    QTcpServer server;
    QByteArray received;
    quint8 answer{0};   ///< CONNACK return code

    Broker()
    {
        server.listen(QHostAddress::LocalHost, 0);
        QObject::connect(&server, &QTcpServer::newConnection, &server, [this] {
            QTcpSocket *s = server.nextPendingConnection();
            QObject::connect(s, &QTcpSocket::readyRead, s, [this, s] {
                const QByteArray in = s->readAll();
                if (received.isEmpty() && !in.isEmpty() && quint8(in.at(0)) == 0x10) {
                    const char connack[] = {0x20, 0x02, 0x00, char(answer)};
                    s->write(connack, 4);
                }
                received += in;
            });
        });
    }
};

/// "MQTT" string, as the protocol writes them: two bytes of length first.
QByteArray mqttString(const QByteArray &s)
{
    return QByteArray(1, char(s.size() >> 8)) + char(s.size() & 0xff) + s;
}

} // namespace

class TestEvents : public QObject {
    Q_OBJECT

private slots:
    void initTestCase() { QStandardPaths::setTestModeEnabled(true); }

    // ── placeholders ────────────────────────────────────────────────────────

    void placeholders()
    {
        QCOMPARE(EventDispatcher::expand(QStringLiteral("%n %i %h %t %e %s %f %p"), context()),
                 QStringLiteral("Hall ab12cd34 192.0.2.10 2026-10-24T12:00:00 motion on "
                                "/videos/hall.mkv /videos/hall.jpg"));
        EventContext ended = context();
        ended.active = false;
        QCOMPARE(EventDispatcher::expand(QStringLiteral("%s"), ended), QStringLiteral("off"));
    }

    /// What one placeholder puts in is not read again for others: a camera
    /// called "Gate %h" came out as "Gate 192.0.2.10".
    void placeholdersExpandOnce()
    {
        EventContext c = context();
        c.cameraName = QStringLiteral("Gate %h");
        QCOMPARE(EventDispatcher::expand(QStringLiteral("[%n]"), c), QStringLiteral("[Gate %h]"));
        c.cameraName = QStringLiteral("Garage 100%");
        QCOMPARE(EventDispatcher::expand(QStringLiteral("%n%t"), c),
                 QStringLiteral("Garage 100%2026-10-24T12:00:00"));
        c.recordingPath = QStringLiteral("/videos/%s%e.mkv");
        QCOMPARE(EventDispatcher::expand(QStringLiteral("%f"), c), QStringLiteral("/videos/%s%e.mkv"));
    }

    void otherPercentSignsStay()
    {
        QCOMPARE(EventDispatcher::expand(QStringLiteral("50% %x %% %"), context()),
                 QStringLiteral("50% %x %% %"));
    }

    void defaultPayload()
    {
        const QJsonObject o = QJsonDocument::fromJson(EventDispatcher::defaultPayload(context())).object();
        QCOMPARE(o.value(QStringLiteral("camera")).toString(), QStringLiteral("Hall"));
        QCOMPARE(o.value(QStringLiteral("event")).toString(), QStringLiteral("motion"));
        QCOMPARE(o.value(QStringLiteral("state")).toString(), QStringLiteral("on"));
        QCOMPARE(o.value(QStringLiteral("recording")).toString(), QStringLiteral("/videos/hall.mkv"));
    }

    // ── actions ─────────────────────────────────────────────────────────────

    void webhookPostsTheEvent()
    {
        FakeWebServer server([](const FakeWebServer::Request &) { return FakeWebServer::Response{}; });
        ActionConfig actions;
        actions.callWebhook = true;
        actions.webhookUrl = QStringLiteral("http://127.0.0.1:%1/hook?camera=%n").arg(server.port());
        EventDispatcher dispatcher;
        QSignalSpy ok(&dispatcher, &EventDispatcher::actionSucceeded);
        dispatcher.dispatch(actions, context());
        QVERIFY(ok.wait(5000));

        QCOMPARE(server.requests().size(), 1);
        const FakeWebServer::Request r = server.requests().first();
        QCOMPARE(r.method, QByteArray("POST"));
        QCOMPARE(r.query.queryItemValue(QStringLiteral("camera")), QStringLiteral("Hall"));
        QCOMPARE(r.headers.value("content-type"), QByteArray("application/json"));
        QCOMPARE(QJsonDocument::fromJson(r.body).object().value(QStringLiteral("cameraId")).toString(),
                 QStringLiteral("ab12cd34"));
    }

    void webhookWithABodyOfItsOwn()
    {
        FakeWebServer server([](const FakeWebServer::Request &) { return FakeWebServer::Response{}; });
        ActionConfig actions;
        actions.callWebhook = true;
        actions.webhookMethod = QStringLiteral("put");
        actions.webhookUrl = QStringLiteral("http://127.0.0.1:%1/hook").arg(server.port());
        actions.webhookBody = QStringLiteral("%n is %s");
        EventDispatcher dispatcher;
        QSignalSpy ok(&dispatcher, &EventDispatcher::actionSucceeded);
        dispatcher.dispatch(actions, context());
        QVERIFY(ok.wait(5000));
        QCOMPARE(server.requests().first().method, QByteArray("PUT"));
        QCOMPARE(server.requests().first().body, QByteArray("Hall is on"));
    }

    void webhookThatFailsSaysSo()
    {
        FakeWebServer server([](const FakeWebServer::Request &) {
            FakeWebServer::Response r;
            r.status = 500;
            return r;
        });
        ActionConfig actions;
        actions.callWebhook = true;
        actions.webhookUrl = QStringLiteral("http://127.0.0.1:%1/hook").arg(server.port());
        EventDispatcher dispatcher;
        QSignalSpy failed(&dispatcher, &EventDispatcher::actionFailed);
        dispatcher.dispatch(actions, context());
        QVERIFY(failed.wait(5000));
    }

    void commandRuns()
    {
        QTemporaryDir dir;
        const QString out = dir.filePath(QStringLiteral("ran"));
        ActionConfig actions;
        actions.runCommand = true;
        actions.command = QStringLiteral("echo '%n %s' > '") + out + QStringLiteral("'");
        EventDispatcher dispatcher;
        dispatcher.dispatch(actions, context());
        QTRY_VERIFY_WITH_TIMEOUT(QFile::exists(out) && QFileInfo(out).size() > 0, 5000);
        QFile f(out);
        QVERIFY(f.open(QIODevice::ReadOnly));
        QCOMPARE(f.readAll().trimmed(), QByteArray("Hall on"));
    }

    void nothingConfiguredDoesNothing()
    {
        EventDispatcher dispatcher;
        QSignalSpy ok(&dispatcher, &EventDispatcher::actionSucceeded);
        QSignalSpy failed(&dispatcher, &EventDispatcher::actionFailed);
        ActionConfig actions;
        actions.callWebhook = true;   // switched on, but with nowhere to go
        dispatcher.dispatch(actions, context());
        QTest::qWait(200);
        QCOMPARE(ok.size() + failed.size(), 0);
    }

    void mqttPublishes()
    {
        Broker broker;
        MqttPublisher mqtt;
        QSignalSpy published(&mqtt, &MqttPublisher::published);
        MqttPublisher::Settings s;
        s.host = QStringLiteral("127.0.0.1");
        s.port = broker.server.serverPort();
        s.topic = QStringLiteral("home/hall/motion");
        s.username = QStringLiteral("leolink");
        s.password = QStringLiteral("broker-secret");
        s.retain = true;
        mqtt.publish(s, QByteArray("{\"state\":\"on\"}"));
        QVERIFY(published.wait(5000));
        QTRY_VERIFY(broker.received.contains(QByteArray("{\"state\":\"on\"}")));

        const QByteArray &in = broker.received;
        QCOMPARE(quint8(in.at(0)), quint8(0x10));                   // CONNECT
        QVERIFY(in.contains(mqttString("MQTT") + char(0x04)));      // 3.1.1
        QVERIFY(in.contains(mqttString("leolink")));
        QVERIFY(in.contains(mqttString("broker-secret")));
        const int publish = in.indexOf(mqttString("home/hall/motion")) - 2;
        QVERIFY(publish > 0);
        QCOMPARE(quint8(in.at(publish)), quint8(0x31));              // PUBLISH, retained
    }

    void mqttRefusalSaysWhy()
    {
        Broker broker;
        broker.answer = 4;
        MqttPublisher mqtt;
        QSignalSpy failed(&mqtt, &MqttPublisher::failed);
        MqttPublisher::Settings s;
        s.host = QStringLiteral("127.0.0.1");
        s.port = broker.server.serverPort();
        s.topic = QStringLiteral("t");
        mqtt.publish(s, "x");
        QVERIFY(failed.wait(5000));
        QVERIFY(failed.first().first().toString().contains(QLatin1String("user name or password")));
    }

    void mqttLengths()
    {
        QCOMPARE(MqttPublisher::encodeLength(0), QByteArray(1, '\x00'));
        QCOMPARE(MqttPublisher::encodeLength(127), QByteArray(1, '\x7f'));
        QCOMPARE(MqttPublisher::encodeLength(128), QByteArray("\x80\x01", 2));
        QCOMPARE(MqttPublisher::encodeLength(16383), QByteArray("\xff\x7f", 2));
        QCOMPARE(MqttPublisher::encodeLength(16384), QByteArray("\x80\x80\x01", 3));
    }

    // ── the event log ───────────────────────────────────────────────────────

    void eventLogKeepsAndPrunes()
    {
        EventLog log;
        log.clear();
        EventEntry old;
        old.time = QDateTime::currentDateTime().addDays(-100);
        old.cameraId = QStringLiteral("a");
        old.type = QStringLiteral("motion");
        log.append(old);
        for (int i = 0; i < 3; ++i) {
            EventEntry e;
            e.time = QDateTime::currentDateTime().addSecs(i);
            e.cameraId = i == 1 ? QStringLiteral("b") : QStringLiteral("a");
            e.cameraName = QStringLiteral("Camera %1").arg(i);
            e.message = QStringLiteral("number %1").arg(i);
            log.append(e);
        }
        QCOMPARE(log.read().size(), 4);
        QCOMPARE(log.read().first().message, QStringLiteral("number 2"));   // newest first
        QCOMPARE(log.read(QStringLiteral("b")).size(), 1);
        QCOMPARE(log.read(QString(), 2).size(), 2);

        QCOMPARE(log.prune(90), 1);
        QCOMPARE(log.read().size(), 3);
        QCOMPARE(log.prune(90), 0);
        log.clear();
        QVERIFY(log.read().isEmpty());
    }

    /// A line cut short by a crash costs that line, not the log.
    void eventLogSurvivesAHalfLine()
    {
        EventLog log;
        log.clear();
        EventEntry e;
        e.time = QDateTime::currentDateTime();
        e.message = QStringLiteral("whole");
        log.append(e);
        QFile f(EventLog::path());
        QVERIFY(f.open(QIODevice::Append));
        f.write("{\"time\":\"2026-");
        f.close();
        QCOMPARE(log.read().size(), 1);
        log.clear();
    }
};

QTEST_GUILESS_MAIN(TestEvents)
#include "tst_events.moc"
