// The camera's HTTP API: logging in, asking, and what goes wrong — against a
// web server that answers the way an E1 Zoom did.

#include <QDir>
#include <QFile>
#include <QJsonArray>
#include <QJsonDocument>
#include <QSignalSpy>
#include <QTest>

#include "FakeWebServer.h"
#include "ReolinkClient.h"

using leolink::CameraConfig;
using leolink::ReolinkClient;

namespace {

const QString kPassword = QStringLiteral("not-a-real-password");

/// The CGI API of one camera: a login with a lease, and every read the
/// fixtures hold.
struct HttpCamera {
    int logins{0};
    int issued{0};
    QString token;
    /// Turned down once with -6, as a lapsed session is.
    bool expireNext{false};
    /// Answered 502 this many times, as newer firmware does under load.
    int overloaded{0};
    QStringList asked;
    /// Answers for commands the fixtures do not hold, by command.
    QHash<QString, QJsonObject> values;
    /// Commands turned down, with the code to give.
    QHash<QString, int> refuse;

    static QJsonObject failure(const QString &cmd, int rspCode)
    {
        return {{QStringLiteral("cmd"), cmd}, {QStringLiteral("code"), 1},
                {QStringLiteral("error"), QJsonObject{{QStringLiteral("rspCode"), rspCode},
                                                      {QStringLiteral("detail"), QStringLiteral("x")}}}};
    }

    FakeWebServer::Response answer(const FakeWebServer::Request &request)
    {
        FakeWebServer::Response response;
        if (request.path != QLatin1String("/cgi-bin/api.cgi")) {
            response.status = 404;
            return response;
        }
        if (overloaded > 0) {
            --overloaded;
            response.status = 502;
            return response;
        }
        const QJsonObject entry = QJsonDocument::fromJson(request.body).array().first().toObject();
        const QString cmd = entry.value(QStringLiteral("cmd")).toString();
        asked << cmd;
        QJsonObject reply;
        if (cmd == QLatin1String("Login")) {
            ++logins;
            const QJsonObject user = entry.value(QStringLiteral("param")).toObject()
                                         .value(QStringLiteral("User")).toObject();
            if (user.value(QStringLiteral("password")).toString() != kPassword) {
                reply = failure(cmd, -7);
            } else {
                token = QStringLiteral("token%1").arg(++issued);
                reply = {{QStringLiteral("cmd"), cmd}, {QStringLiteral("code"), 0},
                         {QStringLiteral("value"),
                          QJsonObject{{QStringLiteral("Token"),
                                       QJsonObject{{QStringLiteral("name"), token},
                                                   {QStringLiteral("leaseTime"), 3600}}}}}};
            }
        } else if (cmd == QLatin1String("Logout")) {
            reply = {{QStringLiteral("cmd"), cmd}, {QStringLiteral("code"), 0}};
        } else if (token.isEmpty() ||
                   request.query.queryItemValue(QStringLiteral("token")) != token) {
            reply = failure(cmd, -6);
        } else if (expireNext) {
            expireNext = false;
            token.clear();
            reply = failure(cmd, -6);
        } else if (refuse.contains(cmd)) {
            reply = failure(cmd, refuse.value(cmd));
        } else if (values.contains(cmd)) {
            reply = {{QStringLiteral("cmd"), cmd}, {QStringLiteral("code"), 0},
                     {QStringLiteral("value"), values.value(cmd)}};
        } else {
            QFile f(QStringLiteral(LEOLINK_FIXTURES "/e1zoom/http/") + cmd + QStringLiteral(".json"));
            reply = f.open(QIODevice::ReadOnly) ? QJsonDocument::fromJson(f.readAll()).object()
                                                : failure(cmd, -9);
        }
        response.body = QJsonDocument(QJsonArray{reply}).toJson(QJsonDocument::Compact);
        return response;
    }
};

} // namespace

class TestReolinkClient : public QObject {
    Q_OBJECT

private:
    HttpCamera m_camera;
    std::unique_ptr<FakeWebServer> m_server;
    std::unique_ptr<ReolinkClient> m_client;
    RedirectingNetwork *m_net{nullptr};

    CameraConfig config(const QString &password = kPassword) const
    {
        CameraConfig c;
        c.id = QStringLiteral("test");
        c.host = QStringLiteral("192.0.2.10");
        c.password = password;
        return c;
    }

    void connectTo(const CameraConfig &camera)
    {
        m_client = std::make_unique<ReolinkClient>();
        m_net = new RedirectingNetwork(m_server->port(), m_client.get());
        m_client->setNetwork(m_net);
        m_client->setCamera(camera);
    }

private slots:
    void init()
    {
        m_camera = HttpCamera{};
        m_server = std::make_unique<FakeWebServer>(
            [this](const FakeWebServer::Request &r) { return m_camera.answer(r); });
    }

    void cleanup()
    {
        m_client.reset();
        m_server.reset();
    }

    /// The Test button in the camera list.
    void testIdentifiesTheCamera()
    {
        connectTo(config());
        QSignalSpy ok(m_client.get(), &ReolinkClient::testSucceeded);
        QSignalSpy identified(m_client.get(), &ReolinkClient::deviceIdentified);
        m_client->testConnection();
        QVERIFY(ok.wait(5000));
        QCOMPARE(identified.first().first().toJsonObject().value(QStringLiteral("model")).toString(),
                 QStringLiteral("E1 Zoom"));
        const QString summary = ok.first().first().toString();
        QVERIFY2(summary.contains(QLatin1String("E1 Zoom")) &&
                     summary.contains(QLatin1String("v3.1.0.4417")),
                 qPrintable(summary));
        QCOMPARE(m_camera.asked, (QStringList{QStringLiteral("Login"), QStringLiteral("GetDevInfo")}));
    }

    void wrongPasswordSaysSo()
    {
        connectTo(config(QStringLiteral("wrong")));
        QSignalSpy failed(m_client.get(), &ReolinkClient::testFailed);
        m_client->testConnection();
        QVERIFY(failed.wait(5000));
        QCOMPARE(failed.first().first().toString(), ReolinkClient::describeError(-7));
    }

    void nobodyThere()
    {
        const quint16 port = m_server->port();
        m_server.reset();
        m_client = std::make_unique<ReolinkClient>();
        m_client->setNetwork(new RedirectingNetwork(port, m_client.get()));
        m_client->setCamera(config());
        QSignalSpy failed(m_client.get(), &ReolinkClient::testFailed);
        m_client->testConnection();
        QVERIFY(failed.wait(5000));
        QVERIFY(failed.first().first().toString().contains(QLatin1String("192.0.2.10")));
    }

    /// The camera dialog asks for every section at once. Each wanted a session,
    /// none existed yet, and every one of them logged in: twenty sessions, of
    /// which the camera allows a handful. One login, and the rest wait for it.
    void oneLoginForEverything()
    {
        connectTo(config());
        QSignalSpy ready(m_client.get(), &ReolinkClient::sectionReady);
        const QStringList sections{
            QStringLiteral("GetEnc"),   QStringLiteral("GetImage"),   QStringLiteral("GetIsp"),
            QStringLiteral("GetOsd"),   QStringLiteral("GetMask"),    QStringLiteral("GetMdAlarm"),
            QStringLiteral("GetRecV20"), QStringLiteral("GetEmailV20"), QStringLiteral("GetFtpV20"),
            QStringLiteral("GetNetPort"), QStringLiteral("GetTime"),  QStringLiteral("GetIrLights"),
        };
        for (const QString &s : sections)
            m_client->fetchSection(s, {{QStringLiteral("channel"), 0}});
        QTRY_COMPARE_WITH_TIMEOUT(ready.size(), sections.size(), 10000);
        QCOMPARE(m_camera.logins, 1);

        // And the ranges come with each, which the dialog's forms are built from.
        for (const QList<QVariant> &signal : ready)
            if (signal.at(0).toString() == QLatin1String("GetEnc"))
                QVERIFY(!signal.at(2).toJsonObject().isEmpty());
    }

    /// A session lapses while the client lives on. Before, every request after
    /// that failed for good; now the client logs in once more and carries on.
    void lapsedSessionIsRenewed()
    {
        connectTo(config());
        QSignalSpy ready(m_client.get(), &ReolinkClient::sectionReady);
        QSignalSpy failed(m_client.get(), &ReolinkClient::failed);
        m_client->fetchSection(QStringLiteral("GetEnc"));
        QVERIFY(ready.wait(5000));
        m_camera.expireNext = true;
        m_client->fetchSection(QStringLiteral("GetImage"));
        QVERIFY(ready.wait(5000));
        QCOMPARE(m_camera.logins, 2);
        QCOMPARE(failed.size(), 0);
    }

    /// 502 is "not now", and asked again once after a pause.
    void overloadedCameraIsAskedAgain()
    {
        connectTo(config());
        m_camera.overloaded = 1;
        QSignalSpy ok(m_client.get(), &ReolinkClient::testSucceeded);
        m_client->testConnection();
        QVERIFY(ok.wait(10000));
    }

    void unsupportedSectionIsTold()
    {
        connectTo(config());
        QSignalSpy failed(m_client.get(), &ReolinkClient::failed);
        m_client->fetchSection(QStringLiteral("GetBuzzerAlarmV20"));
        QVERIFY(failed.wait(5000));
        QCOMPARE(m_client->lastErrorCode(), -9);
        QVERIFY(ReolinkClient::meansUnsupported(-9));
    }

    void writeIsSent()
    {
        connectTo(config());
        QSignalSpy applied(m_client.get(), &ReolinkClient::sectionApplied);
        m_client->applySection(QStringLiteral("SetOsd"),
                               {{QStringLiteral("Osd"), QJsonObject{{QStringLiteral("watermark"), 1}}}});
        // The fixtures hold no answer to a set, so the camera says -9; what
        // matters here is what was sent, and that it went with the session.
        QTRY_VERIFY_WITH_TIMEOUT(m_camera.asked.contains(QStringLiteral("SetOsd")), 5000);
        const FakeWebServer::Request set = m_server->requests().last();
        QCOMPARE(set.query.queryItemValue(QStringLiteral("token")), m_camera.token);
        const QJsonObject entry = QJsonDocument::fromJson(set.body).array().first().toObject();
        QCOMPARE(entry.value(QStringLiteral("param")).toObject().value(QStringLiteral("Osd"))
                     .toObject().value(QStringLiteral("watermark")).toInt(), 1);
    }

    /// An E1 Zoom answers port 80 only with a redirect.
    void httpsWhereThatIsAllThereIs()
    {
        CameraConfig camera = config();
        camera.caps.known = true;
        camera.caps.https = true;
        connectTo(camera);
        QSignalSpy ok(m_client.get(), &ReolinkClient::testSucceeded);
        m_client->testConnection();
        QVERIFY(ok.wait(5000));
        QCOMPARE(m_net->intended().first().scheme(), QStringLiteral("https"));
    }

    /// A camera found to have no web server is never asked to log in to one:
    /// an E1 Pro was, every thirty seconds, for as long as the window was open.
    void noWebServerNoHttp()
    {
        CameraConfig camera = config();
        camera.host = QStringLiteral("127.0.0.1");   // nothing on 9000 here
        camera.caps.known = true;
        camera.caps.rtsp = true;
        camera.caps.baichuan = true;
        connectTo(camera);
        QSignalSpy failed(m_client.get(), &ReolinkClient::failed);
        m_client->fetchSection(QStringLiteral("GetEnc"));
        QVERIFY(failed.wait(15000));
        QVERIFY2(failed.first().first().toString().contains(QLatin1String("Baichuan")),
                 qPrintable(failed.first().first().toString()));
        QVERIFY(m_server->requests().isEmpty());
    }

    /// Which cameras get the turning buttons, from what GetAbility says of
    /// the channel. An E1 Zoom gives its kind as ptzType 5 and supportZoom 0.
    void ptzAbility_data()
    {
        QTest::addColumn<int>("ptzCtrl");
        QTest::addColumn<int>("ptzType");
        QTest::addColumn<int>("supportZoom");
        QTest::addColumn<bool>("canMove");
        QTest::addColumn<bool>("canZoom");
        QTest::newRow("E1 Zoom") << 1 << 5 << 0 << true << true;
        QTest::newRow("says zoom") << 1 << 0 << 1 << true << true;
        QTest::newRow("pan and tilt") << 1 << 0 << 0 << true << false;
        QTest::newRow("fixed") << 0 << 0 << 0 << false << false;
    }

    void ptzAbility()
    {
        QFETCH(int, ptzCtrl);
        QFETCH(int, ptzType);
        QFETCH(int, supportZoom);
        QFETCH(bool, canMove);
        QFETCH(bool, canZoom);
        const auto ver = [](int v) { return QJsonObject{{QStringLiteral("ver"), v}}; };
        m_camera.values.insert(
            QStringLiteral("GetAbility"),
            {{QStringLiteral("Ability"),
              QJsonObject{{QStringLiteral("abilityChn"),
                           QJsonArray{QJsonObject{{QStringLiteral("ptzCtrl"), ver(ptzCtrl)},
                                                  {QStringLiteral("ptzType"), ver(ptzType)},
                                                  {QStringLiteral("supportZoom"),
                                                   ver(supportZoom)}}}}}}});
        connectTo(config());
        QSignalSpy known(m_client.get(), &ReolinkClient::ptzKnown);
        m_client->fetchPtzAbility();
        QVERIFY(known.wait(5000));
        QCOMPARE(known.first().at(0).toBool(), canMove);
        QCOMPARE(known.first().at(1).toBool(), canZoom);
    }

    /// Firmware without GetAbility gets no buttons, and no complaint.
    void ptzAbilityUnknown()
    {
        connectTo(config());
        QSignalSpy known(m_client.get(), &ReolinkClient::ptzKnown);
        QSignalSpy failed(m_client.get(), &ReolinkClient::failed);
        m_client->fetchPtzAbility();
        QVERIFY(known.wait(5000));
        QCOMPARE(known.first().at(0).toBool(), false);
        QCOMPARE(known.first().at(1).toBool(), false);
        QCOMPARE(failed.count(), 0);
    }

    /// A move, its stop and a preset, as PtzCtrl on the camera's channel.
    void ptzMoves()
    {
        m_camera.values.insert(QStringLiteral("PtzCtrl"), {});
        connectTo(config());
        m_client->ptz(QStringLiteral("Left"));
        m_client->ptz(QStringLiteral("Stop"));
        m_client->ptzToPreset(3);

        const auto sent = [this] {
            QList<QJsonObject> params;
            for (const FakeWebServer::Request &r : m_server->requests()) {
                const QJsonObject entry =
                    QJsonDocument::fromJson(r.body).array().first().toObject();
                if (entry.value(QStringLiteral("cmd")).toString() == QLatin1String("PtzCtrl"))
                    params << entry.value(QStringLiteral("param")).toObject();
            }
            return params;
        };
        QTRY_COMPARE(sent().size(), 3);
        const QList<QJsonObject> params = sent();
        QCOMPARE(params.at(0).value(QStringLiteral("op")).toString(), QStringLiteral("Left"));
        QCOMPARE(params.at(0).value(QStringLiteral("channel")).toInt(), 0);
        QVERIFY(!params.at(0).contains(QStringLiteral("speed")));
        QCOMPARE(params.at(1).value(QStringLiteral("op")).toString(), QStringLiteral("Stop"));
        QCOMPARE(params.at(2).value(QStringLiteral("op")).toString(), QStringLiteral("ToPos"));
        QCOMPARE(params.at(2).value(QStringLiteral("id")).toInt(), 3);
    }

    /// A camera that turns a move down says so, through ptzFailed().
    void ptzRefused()
    {
        m_camera.refuse.insert(QStringLiteral("PtzCtrl"), -9);
        connectTo(config());
        QSignalSpy failed(m_client.get(), &ReolinkClient::ptzFailed);
        m_client->ptz(QStringLiteral("Up"));
        QVERIFY(failed.wait(5000));
        QVERIFY(!failed.first().first().toString().isEmpty());
    }

    void errorsAreExplained()
    {
        for (int code : {-5, -6, -7, -9, -17, -31})
            QVERIFY(!ReolinkClient::describeError(code).contains(QStringLiteral("error %1").arg(code)));
        QVERIFY(ReolinkClient::describeError(-12345).contains(QLatin1String("-12345")));
    }
};

QTEST_GUILESS_MAIN(TestReolinkClient)
#include "tst_reolinkclient.moc"
