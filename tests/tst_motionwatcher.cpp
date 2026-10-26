// Motion as the camera reports it, over ONVIF: subscribing, the long poll, and
// what each event means — against a camera answering with an E1 Zoom's words.

#include <QCryptographicHash>
#include <QElapsedTimer>
#include <QFile>
#include <QJsonObject>
#include <QSignalSpy>
#include <QTest>

#include "BaichuanApi.h"
#include "FakeCamera.h"
#include "FakeWebServer.h"
#include "MotionWatcher.h"
#include "XmlText.h"

using leolink::BaichuanApi;
using leolink::CameraConfig;
using leolink::MotionWatcher;

namespace {

const QString kPassword = QStringLiteral("not-a-real-password");

QByteArray fixture(const QString &name)
{
    QFile f(QStringLiteral(LEOLINK_FIXTURES "/onvif/") + name);
    return f.open(QIODevice::ReadOnly) ? f.readAll() : QByteArray();
}

/// One event, in the camera's own wording.
QByteArray notification(const QString &topic, const QString &item, bool on, const QString &source = QStringLiteral("000"))
{
    return QStringLiteral(
               "<wsnt:NotificationMessage><wsnt:Topic Dialect=\"http://www.onvif.org/ver10/tev/"
               "topicExpression/ConcreteSet\">tns1:RuleEngine/%1</wsnt:Topic><wsnt:Message>"
               "<tt:Message UtcTime=\"2026-10-24T17:11:42Z\" PropertyOperation=\"Changed\">"
               "<tt:Source><tt:SimpleItem Name=\"Source\" Value=\"%4\" /></tt:Source>"
               "<tt:Data><tt:SimpleItem Name=\"%2\" Value=\"%3\" /></tt:Data></tt:Message>"
               "</wsnt:Message></wsnt:NotificationMessage>")
        .arg(topic, item, on ? QStringLiteral("true") : QStringLiteral("false"), source)
        .toUtf8();
}

QByteArray pullReply(const QList<QByteArray> &events)
{
    QByteArray body;
    for (const QByteArray &e : events)
        body += e;
    return "<?xml version=\"1.0\" encoding=\"UTF-8\"?><SOAP-ENV:Envelope "
           "xmlns:SOAP-ENV=\"http://www.w3.org/2003/05/soap-envelope\" "
           "xmlns:tev=\"http://www.onvif.org/ver10/events/wsdl\" "
           "xmlns:wsnt=\"http://docs.oasis-open.org/wsn/b-2\" xmlns:tt=\"http://www.onvif.org/ver10/schema\">"
           "<SOAP-ENV:Body><tev:PullMessagesResponse>" + body +
           "</tev:PullMessagesResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>";
}

const QString kMotion = QStringLiteral("CellMotionDetector/Motion");
const QString kPeople = QStringLiteral("MyRuleDetector/PeopleDetect");

} // namespace

class TestMotionWatcher : public QObject {
    Q_OBJECT

private:
    /// What each poll after the subscription answers, in turn. Past the end,
    /// a poll is held, as a camera holds one while nothing happens.
    QList<QByteArray> m_polls;
    int m_pollsServed{0};
    QStringList m_problems;
    /// How long a subscription lasts unless renewed, as the camera grants it;
    /// 0 for for ever. And how long an empty poll is held.
    int m_lifetimeMs{0};
    int m_holdMs{60000};
    QElapsedTimer m_alive;
    qint64 m_expiresAt{0};
    int m_renewals{0};
    std::unique_ptr<FakeWebServer> m_server;
    std::unique_ptr<MotionWatcher> m_watcher;

    /// The camera checks the WS-Security digest, as a real one does.
    bool authentic(const QByteArray &body)
    {
        const QByteArray nonce = QByteArray::fromBase64(leolink::xml::inner(QString::fromUtf8(body), QStringLiteral("Nonce")).toLatin1());
        const QString created = leolink::xml::inner(QString::fromUtf8(body), QStringLiteral("Created"));
        QCryptographicHash sha(QCryptographicHash::Sha1);
        sha.addData(nonce);
        sha.addData(created.toUtf8());
        sha.addData(kPassword.toUtf8());
        return !nonce.isEmpty() && leolink::xml::inner(QString::fromUtf8(body), QStringLiteral("Password")) == QString::fromLatin1(sha.result().toBase64());
    }

    FakeWebServer::Response answer(const FakeWebServer::Request &r)
    {
        FakeWebServer::Response response;
        response.contentType = "application/soap+xml";
        if (!authentic(r.body)) {
            m_problems << QStringLiteral("bad digest on %1").arg(r.path);
            response.status = 400;
            return response;
        }
        const bool addressed = r.body.contains("<wsa:Action");
        if (r.path == QLatin1String("/onvif/event_service")) {
            // Reolink answers 400 to a subscription with WS-Addressing.
            if (addressed) {
                m_problems << QStringLiteral("subscribe carried WS-Addressing");
                response.status = 400;
                return response;
            }
            response.body = fixture(QStringLiteral("subscribe-e1zoom.xml"));
            if (m_lifetimeMs > 0) {
                // The camera's own times, with the lifetime it grants.
                response.body.replace("<wsnt:TerminationTime>2026-10-24T17:11:51Z",
                                      "<wsnt:TerminationTime>2026-10-24T17:11:43Z");
                m_alive.start();
                m_expiresAt = m_lifetimeMs;
            }
            return response;
        }
        if (r.path == QLatin1String("/onvif/PullSubManager") && r.body.contains("Renew>")) {
            if (!addressed) {
                m_problems << QStringLiteral("renewal without WS-Addressing");
                response.status = 400;
                return response;
            }
            ++m_renewals;
            m_expiresAt = m_alive.elapsed() + m_lifetimeMs;
            response.body = "<?xml version=\"1.0\"?><s:Envelope xmlns:s=\"http://www.w3.org/2003/05/soap-envelope\">"
                            "<s:Body><wsnt:RenewResponse xmlns:wsnt=\"http://docs.oasis-open.org/wsn/b-2\"/>"
                            "</s:Body></s:Envelope>";
            return response;
        }
        if (m_lifetimeMs > 0 && m_alive.elapsed() > m_expiresAt) {
            m_problems << QStringLiteral("polled a subscription that had lapsed");
            response.status = 400;
            return response;
        }
        if (r.path == QLatin1String("/onvif/PullSubManager")) {
            // … and to a poll without it.
            if (!addressed) {
                m_problems << QStringLiteral("poll without WS-Addressing");
                response.status = 400;
                return response;
            }
            if (m_pollsServed < m_polls.size()) {
                response.body = m_polls.at(m_pollsServed++);
            } else {
                response.body = pullReply({});
                response.delayMs = m_holdMs;
            }
            return response;
        }
        m_problems << QStringLiteral("asked for %1").arg(r.path);
        response.status = 404;
        return response;
    }

    QSignalSpy *watch(const QList<CameraConfig> &cameras)
    {
        m_server = std::make_unique<FakeWebServer>(
            [this](const FakeWebServer::Request &r) { return answer(r); });
        m_watcher = std::make_unique<MotionWatcher>();
        m_watcher->setNetwork(new RedirectingNetwork(m_server->port(), m_watcher.get()));
        auto *spy = new QSignalSpy(m_watcher.get(), &MotionWatcher::motionChanged);
        m_watcher->watch(cameras);
        return spy;
    }

    static CameraConfig camera(const QString &id = QStringLiteral("cam"), int channel = 0)
    {
        CameraConfig c;
        c.id = id;
        c.host = QStringLiteral("192.0.2.10");
        c.password = kPassword;
        c.channel = channel;
        return c;
    }

    /// The states reported, in order, as "id:on" / "id:off".
    static QStringList states(const QSignalSpy &spy)
    {
        QStringList out;
        for (const QList<QVariant> &s : spy)
            out << s.at(0).toString() + (s.at(1).toBool() ? QStringLiteral(":on") : QStringLiteral(":off"));
        return out;
    }

private slots:
    void init()
    {
        m_polls.clear();
        m_pollsServed = 0;
        m_problems.clear();
        m_lifetimeMs = 0;
        m_holdMs = 60000;
        m_renewals = 0;
    }

    void cleanup()
    {
        if (m_watcher)
            m_watcher->stop();
        m_watcher.reset();
        m_server.reset();
        QVERIFY2(m_problems.isEmpty(), qPrintable(m_problems.join(QLatin1Char('\n'))));
    }

    /// The subscription's own address is polled — not the anonymous ReplyTo,
    /// which once had leolink polling www.w3.org.
    void pollsTheSubscription()
    {
        m_polls = {fixture(QStringLiteral("pull-e1zoom.xml"))};
        std::unique_ptr<QSignalSpy> spy(watch({camera()}));
        QTRY_COMPARE_WITH_TIMEOUT(m_pollsServed, 1, 5000);
        const QList<FakeWebServer::Request> sent = m_server->requests();
        QCOMPARE(sent.at(1).path, QStringLiteral("/onvif/PullSubManager"));
        QCOMPARE(sent.at(1).query.queryItemValue(QStringLiteral("Idx")), QStringLiteral("153889622"));
        // A camera at rest says so: nothing to report.
        QCOMPARE(spy->size(), 0);
    }

    void motionStartsAndEnds()
    {
        m_polls = {fixture(QStringLiteral("pull-e1zoom.xml")),
                   pullReply({notification(kMotion, QStringLiteral("IsMotion"), true)}),
                   pullReply({notification(kMotion, QStringLiteral("IsMotion"), false)})};
        std::unique_ptr<QSignalSpy> spy(watch({camera()}));
        QTRY_COMPARE_WITH_TIMEOUT(spy->size(), 2, 5000);
        QCOMPARE(states(*spy), (QStringList{QStringLiteral("cam:on"), QStringLiteral("cam:off")}));
        QVERIFY(!m_watcher->isActive());
    }

    /// A person walks out of a scene that is still moving. PeopleDetect says
    /// false; the motion has not ended, and neither has the alert.
    void eachKindHasItsOwnState()
    {
        m_polls = {pullReply({notification(kMotion, QStringLiteral("IsMotion"), true),
                              notification(kPeople, QStringLiteral("State"), true)}),
                   pullReply({notification(kPeople, QStringLiteral("State"), false)})};
        std::unique_ptr<QSignalSpy> spy(watch({camera()}));
        // The third poll arriving means the second answer has been read.
        QTRY_VERIFY_WITH_TIMEOUT(m_server && m_server->requests().size() >= 4, 5000);
        QCOMPARE(states(*spy), QStringList{QStringLiteral("cam:on")});
        QVERIFY(m_watcher->isActive());
    }

    /// Only when the last of them ends.
    void endsWhenEveryKindHas()
    {
        m_polls = {pullReply({notification(kMotion, QStringLiteral("IsMotion"), true),
                              notification(kPeople, QStringLiteral("State"), true)}),
                   pullReply({notification(kMotion, QStringLiteral("IsMotion"), false)}),
                   pullReply({notification(kPeople, QStringLiteral("State"), false)})};
        std::unique_ptr<QSignalSpy> spy(watch({camera()}));
        QTRY_COMPARE_WITH_TIMEOUT(spy->size(), 2, 5000);
        QCOMPARE(states(*spy), (QStringList{QStringLiteral("cam:on"), QStringLiteral("cam:off")}));
        QCOMPARE(m_pollsServed, 3);   // and not before the third
    }

    /// The camera grants a short subscription and holds a poll longer than
    /// that. Left alone, a quiet poll outlived its subscription; the next was
    /// refused, four of them were, and motion went unheard for a dozen
    /// seconds of every half minute. It is asked for longer, and renewed
    /// before it lapses.
    void subscriptionIsKeptAlive()
    {
        m_lifetimeMs = 2000;   // the fixture's 17:11:41 to 17:11:43
        m_holdMs = 1500;
        std::unique_ptr<QSignalSpy> spy(watch({camera()}));
        QTest::qWait(7000);
        QVERIFY2(m_renewals >= 4, qPrintable(QString::number(m_renewals)));
        QVERIFY(m_server->requests().first().body.contains("<tev:InitialTerminationTime>PT120S"));
        int subscriptions = 0;
        for (const FakeWebServer::Request &r : m_server->requests())
            subscriptions += r.path == QLatin1String("/onvif/event_service");
        QCOMPARE(subscriptions, 1);
    }

    /// The same state twice is reported once.
    void repeatsAreQuiet()
    {
        m_polls = {pullReply({notification(kMotion, QStringLiteral("IsMotion"), true)}),
                   pullReply({notification(kMotion, QStringLiteral("IsMotion"), true)})};
        std::unique_ptr<QSignalSpy> spy(watch({camera()}));
        QTRY_COMPARE_WITH_TIMEOUT(m_pollsServed, 2, 5000);
        QTest::qWait(100);
        QCOMPARE(spy->size(), 1);
    }

    /// A recorder sends every channel's events down one subscription; each
    /// goes to the camera on its channel, and only to it.
    void recorderEventsGoByChannel()
    {
        m_polls = {pullReply({notification(kMotion, QStringLiteral("IsMotion"), true, QStringLiteral("VideoSource_2"))}),
                   pullReply({notification(kMotion, QStringLiteral("IsMotion"), true, QStringLiteral("000"))})};
        std::unique_ptr<QSignalSpy> spy(watch({camera(QStringLiteral("door"), 0), camera(QStringLiteral("yard"), 2)}));
        QTRY_COMPARE_WITH_TIMEOUT(spy->size(), 2, 5000);
        QCOMPARE(states(*spy), (QStringList{QStringLiteral("yard:on"), QStringLiteral("door:on")}));
    }

    // ── over Baichuan, for a camera with no ONVIF ───────────────────────────

    /// What an E1 on 3.1.0.4450 sends on subscribing, and what it would send
    /// on motion and on recognising someone.
    static QString alarm(const QString &status, const QString &ai, int channel = 0)
    {
        return QStringLiteral("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<body>\n"
                              "<AlarmEventList version=\"1.1\">\n"
                              "<AlarmEvent version=\"1.1\">\n"
                              "<channelId>%3</channelId>\n<status>%1</status>\n"
                              "<AItype>%2</AItype>\n<recording>0</recording>\n"
                              "<timeStamp>0</timeStamp>\n</AlarmEvent>\n"
                              "</AlarmEventList>\n</body>\n")
            .arg(status, ai).arg(channel);
    }

    void alarmsAreRead()
    {
        const auto read = [](const QString &xml) {
            QStringList out;
            for (const BaichuanApi::Alarm &a : BaichuanApi::parseAlarms(xml))
                out << QStringLiteral("%1:%2:%3").arg(a.channel).arg(a.active ? 1 : 0).arg(a.what);
            return out;
        };
        QCOMPARE(read(alarm(QStringLiteral("none"), QStringLiteral("none"))),
                 QStringList{QStringLiteral("0:0:")});
        QCOMPARE(read(alarm(QStringLiteral("MD"), QStringLiteral("none"))),
                 QStringList{QStringLiteral("0:1:MD")});
        QCOMPARE(read(alarm(QStringLiteral("MD"), QStringLiteral("people,vehicle"), 2)),
                 QStringList{QStringLiteral("2:1:MD,people,vehicle")});
        // Recognised without motion still counts, as ONVIF reports it.
        QCOMPARE(read(alarm(QStringLiteral("none"), QStringLiteral("dog_cat"))),
                 QStringList{QStringLiteral("0:1:dog_cat")});
        // A doorbell press is not motion.
        QCOMPARE(read(alarm(QStringLiteral("visitor"), QStringLiteral("none"))),
                 QStringList{QStringLiteral("0:0:")});
    }

    /// A camera that offers Baichuan and no ONVIF is subscribed to over
    /// Baichuan, and its alarms come out as motion like ONVIF's do.
    void baichuanAlarmsAreMotion()
    {
        FakeCamera fake(QStringLiteral("admin"), kPassword);
        fake.alarmsOnSubscribe = {
            alarm(QStringLiteral("none"), QStringLiteral("none")),
            alarm(QStringLiteral("MD"), QStringLiteral("none")),
            alarm(QStringLiteral("MD"), QStringLiteral("people")),
            alarm(QStringLiteral("none"), QStringLiteral("none")),
        };
        fake.begin();

        CameraConfig c = camera();
        c.host = QStringLiteral("127.0.0.1");
        c.baichuanPort = fake.port();
        c.caps.known = true;
        c.caps.baichuan = true;

        m_watcher = std::make_unique<MotionWatcher>();
        QSignalSpy spy(m_watcher.get(), &MotionWatcher::motionChanged);
        m_watcher->watch(c);
        QTRY_COMPARE(states(spy), (QStringList{QStringLiteral("cam:on"), QStringLiteral("cam:off")}));

        bool subscribed = false;
        for (const FakeCamera::Request &r : fake.requests())
            subscribed |= r.msg == 31;
        QVERIFY(subscribed);
        m_watcher->stop();
        m_watcher.reset();
    }

    /// A camera that drops the session in the middle of motion: the motion
    /// ends here rather than staying on with nobody to say when it stops, and
    /// the subscription comes back by itself with the camera's state.
    void baichuanAlarmsComeBack()
    {
        FakeCamera fake(QStringLiteral("admin"), kPassword);
        fake.alarmsOnSubscribe = {alarm(QStringLiteral("MD"), QStringLiteral("none"))};
        fake.dropAfterAlarms = true;
        fake.begin();

        CameraConfig c = camera();
        c.host = QStringLiteral("127.0.0.1");
        c.baichuanPort = fake.port();
        c.caps.known = true;
        c.caps.baichuan = true;

        m_watcher = std::make_unique<MotionWatcher>();
        QSignalSpy spy(m_watcher.get(), &MotionWatcher::motionChanged);
        QSignalSpy errors(m_watcher.get(), &MotionWatcher::error);
        m_watcher->watch(c);
        // The first retry is two seconds after the loss.
        QTRY_COMPARE_WITH_TIMEOUT(states(spy),
                                  (QStringList{QStringLiteral("cam:on"), QStringLiteral("cam:off"),
                                               QStringLiteral("cam:on")}),
                                  10000);
        QCOMPARE(errors.count(), 1);
        QCOMPARE(fake.connections(), 2);

        m_watcher->stop();
        m_watcher.reset();
    }

    /// The alarms ride on the session the settings use: one connection to the
    /// camera for both, and an alarm the camera pushes while a request waits
    /// for its answer is heard, not stepped over.
    void alarmsShareTheSettingsSession()
    {
        FakeCamera fake(QStringLiteral("admin"), kPassword);
        fake.alarmsOnSubscribe = {alarm(QStringLiteral("none"), QStringLiteral("none"))};
        fake.setDocument(190, QStringLiteral("<?xml version=\"1.0\" ?>\n<body>\n"
                                             "<PtzPreset version=\"1.1\">\n<presetList />\n"
                                             "</PtzPreset>\n</body>\n"));
        fake.begin();

        CameraConfig c = camera();
        c.host = QStringLiteral("127.0.0.1");
        c.baichuanPort = fake.port();
        c.caps.known = true;
        c.caps.baichuan = true;

        m_watcher = std::make_unique<MotionWatcher>();
        QSignalSpy spy(m_watcher.get(), &MotionWatcher::motionChanged);
        m_watcher->watch(c);
        const auto subscribed = [&fake] {
            for (const FakeCamera::Request &r : fake.requests()) {
                if (r.msg == 31)
                    return true;
            }
            return false;
        };
        QTRY_VERIFY(subscribed());

        // Motion starts while a settings read is waiting for its answer.
        fake.chatterAlarm = alarm(QStringLiteral("MD"), QStringLiteral("none"));
        fake.chatter = true;
        auto api = BaichuanApi::forCamera(c, kPassword);
        QJsonObject entry;
        QObject context;
        api->call(QStringLiteral("GetPtzPreset"), {}, 0,
                  &context, [&entry](const QJsonObject &e) { entry = e; });
        QTRY_VERIFY(!entry.isEmpty());
        QCOMPARE(entry.value(QStringLiteral("code")).toInt(), 0);
        QTRY_COMPARE(states(spy), QStringList{QStringLiteral("cam:on")});
        QCOMPARE(fake.connections(), 1);

        m_watcher->stop();
        m_watcher.reset();
    }
};

QTEST_GUILESS_MAIN(TestMotionWatcher)
#include "tst_motionwatcher.moc"
