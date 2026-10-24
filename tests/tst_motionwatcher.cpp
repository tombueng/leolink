// Motion as the camera reports it, over ONVIF: subscribing, the long poll, and
// what each event means — against a camera answering with an E1 Zoom's words.

#include <QCryptographicHash>
#include <QFile>
#include <QRegularExpression>
#include <QSignalSpy>
#include <QTest>

#include "FakeWebServer.h"
#include "MotionWatcher.h"

using leolink::CameraConfig;
using leolink::MotionWatcher;

namespace {

const QString kPassword = QStringLiteral("not-a-real-password");

QByteArray fixture(const QString &name)
{
    QFile f(QStringLiteral(LEOLINK_FIXTURES "/onvif/") + name);
    return f.open(QIODevice::ReadOnly) ? f.readAll() : QByteArray();
}

QString tag(const QByteArray &xml, const QString &name)
{
    const QRegularExpression re(QStringLiteral("<(?:\\w+:)?%1[^>]*>(.*?)</(?:\\w+:)?%1>").arg(name),
                                QRegularExpression::DotMatchesEverythingOption);
    return re.match(QString::fromUtf8(xml)).captured(1);
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
    std::unique_ptr<FakeWebServer> m_server;
    std::unique_ptr<MotionWatcher> m_watcher;

    /// The camera checks the WS-Security digest, as a real one does.
    bool authentic(const QByteArray &body)
    {
        const QByteArray nonce = QByteArray::fromBase64(tag(body, QStringLiteral("Nonce")).toLatin1());
        const QString created = tag(body, QStringLiteral("Created"));
        QCryptographicHash sha(QCryptographicHash::Sha1);
        sha.addData(nonce);
        sha.addData(created.toUtf8());
        sha.addData(kPassword.toUtf8());
        return !nonce.isEmpty() && tag(body, QStringLiteral("Password")) == QString::fromLatin1(sha.result().toBase64());
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
                response.delayMs = 60000;
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
};

QTEST_GUILESS_MAIN(TestMotionWatcher)
#include "tst_motionwatcher.moc"
