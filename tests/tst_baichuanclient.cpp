// The Baichuan login and message exchange, against a camera on loopback.

#include <QTest>

#include "Baichuan.h"
#include "FakeCamera.h"

using leolink::BaichuanClient;

namespace {

const QString kUser = QStringLiteral("admin");
const QString kPassword = QStringLiteral("not-a-real-password");

const QString kDeviceInfo = QStringLiteral(
    "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<body>\n<DeviceInfo version=\"1.1\">\n"
    "<type>E1 Pro</type>\n<diskNum>1</diskNum>\n</DeviceInfo>\n</body>\n");

const QString kExtension = QStringLiteral(
    "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<Extension version=\"1.1\">\n"
    "<channelId>0</channelId>\n</Extension>\n");

QString document(const QString &element)
{
    return QStringLiteral("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<body>\n<%1 version=\"1.1\">\n"
                          "<enable>1</enable>\n</%1>\n</body>\n").arg(element);
}

} // namespace

class TestBaichuanClient : public QObject {
    Q_OBJECT

private slots:
    void init()
    {
        m_camera = std::make_unique<FakeCamera>(kUser, kPassword);
        m_camera->setDocument(80, kDeviceInfo);
    }

    void cleanup() { m_camera.reset(); }

    /// An E1 Pro on 3.1.0.3149 never answers a login that asks for XOR, so
    /// the first message has to ask for AES. Asking for XOR left every one of
    /// them timing out at login.
    void asksForAesFirst()
    {
        m_camera->answerXorRequest = false;
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, m_camera->port());
        QVERIFY2(client.login(), qPrintable(client.lastError()));
        QCOMPARE(m_camera->askedFor(), quint16(0xDC12));
        QVERIFY(client.usesAes());
    }

    /// Granted AES or not, the credentials go under XOR: the firmware refuses
    /// them with 400 if they arrive encrypted.
    void credentialsTravelUnderXor()
    {
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, m_camera->port());
        QVERIFY2(client.login(), qPrintable(client.lastError()));
        QVERIFY(m_camera->loginWasXor());
    }

    void deviceInfoArrivesUnderAes()
    {
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, m_camera->port());
        QVERIFY(client.login());
        QCOMPARE(client.field(QStringLiteral("type")), QStringLiteral("E1 Pro"));
        QCOMPARE(client.field(QStringLiteral("diskNum")), QStringLiteral("1"));
    }

    /// A camera that knows only XOR and ignores a request for AES is asked
    /// again, for XOR, on a new connection: leolink asked for XOR until the
    /// E1 Pro, and such a camera must not stop working because of it.
    void asksForXorWhenAesGoesUnanswered()
    {
        m_camera->answerAesRequest = false;
        m_camera->grantAes = false;
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, m_camera->port());
        QVERIFY2(client.login(), qPrintable(client.lastError()));
        QCOMPARE(m_camera->askedFor(), quint16(0xDC01));
        QVERIFY(!client.usesAes());
    }

    /// An older camera may grant XOR when asked for AES; the session follows.
    void followsAnXorGrant()
    {
        m_camera->grantAes = false;
        m_camera->setDocument(37, document(QStringLiteral("HttpPort")));
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, m_camera->port());
        QVERIFY(client.login());
        QVERIFY(!client.usesAes());
        int status = 0;
        QCOMPARE(client.request(37, QString(), kExtension, &status), document(QStringLiteral("HttpPort")));
        QCOMPARE(status, 200);
    }

    void wrongPasswordIsRefused()
    {
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, QStringLiteral("wrong"),
                              m_camera->port());
        QVERIFY(!client.login());
        QVERIFY2(client.lastError().contains(QLatin1String("401")), qPrintable(client.lastError()));
    }

    void nobodyListening()
    {
        m_camera->begin();
        const quint16 port = m_camera->port();
        m_camera.reset();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, port);
        QVERIFY(!client.login());
        QVERIFY(client.lastError().contains(QLatin1String("cannot connect")));
    }

    /// Extension and body are encrypted each from the start of the keystream,
    /// and the header's payload offset says where one ends. Encrypted as one
    /// run, the camera reads the body as noise.
    void extensionAndBodyAreSealedApart()
    {
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, m_camera->port());
        QVERIFY(client.login());
        const QString body = document(QStringLiteral("Compression"));
        int status = 0;
        client.request(57, body, kExtension, &status);
        QCOMPARE(status, 200);
        const QList<FakeCamera::Request> sent = m_camera->requests();
        QCOMPARE(sent.size(), 1);
        QCOMPARE(sent.first().msg, 57u);
        QCOMPARE(sent.first().extension, kExtension);
        QCOMPARE(sent.first().body, body);
        // The camera keeps what it was sent.
        QCOMPARE(m_camera->document(56), body);
    }

    /// Cameras send alarms on the same connection whenever they like. A reply
    /// is the one with this request's message number and handle.
    void stepsOverUnrelatedMessages()
    {
        m_camera->chatter = true;
        m_camera->setDocument(26, document(QStringLiteral("VideoInput")));
        m_camera->setDocument(44, document(QStringLiteral("OsdDatetime")));
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, m_camera->port());
        QVERIFY(client.login());
        QCOMPARE(client.request(26, QString(), kExtension), document(QStringLiteral("VideoInput")));
        QCOMPARE(client.request(44, QString(), kExtension), document(QStringLiteral("OsdDatetime")));
    }

    void reportsTheCamerasStatus()
    {
        m_camera->statusFor.insert(52, 400);
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, m_camera->port());
        QVERIFY(client.login());
        int status = 0;
        QVERIFY(client.request(52, QString(), kExtension, &status).isEmpty());
        QCOMPARE(status, 400);
        QVERIFY(client.lastError().contains(QLatin1String("400")));
    }

    /// -1, not a camera's code, when the connection goes mid-request.
    void lostConnectionIsNotAStatus()
    {
        m_camera->dropOn = 56;
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, m_camera->port());
        QVERIFY(client.login());
        int status = 0;
        QVERIFY(client.request(56, QString(), kExtension, &status).isEmpty());
        QCOMPARE(status, -1);
    }

private:
    std::unique_ptr<FakeCamera> m_camera;
};

QTEST_GUILESS_MAIN(TestBaichuanClient)
#include "tst_baichuanclient.moc"
