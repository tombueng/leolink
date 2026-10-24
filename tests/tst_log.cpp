// The log, and the report made from it, which people are asked to send in:
// nothing in either may let somebody into their cameras.

#include <QStandardPaths>
#include <QTest>

#include "Log.h"

using leolink::Log;

class TestLog : public QObject {
    Q_OBJECT

private:
    QString last() const { return Log::instance().recent().value(Log::instance().recent().size() - 1); }

    QString logged(const QString &text)
    {
        LEO_INFO(App, QStringLiteral("test"), text);
        return last();
    }

private slots:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        Log::start();
    }

    void cleanupTestCase() { Log::stop(); }

    void storedPasswordIsHidden()
    {
        Log::addSecret(QStringLiteral("correct horse"));
        const QString line = logged(QStringLiteral("trying correct horse on 192.0.2.10"));
        QVERIFY2(!line.contains(QLatin1String("correct horse")), qPrintable(line));
        QVERIFY(line.contains(QStringLiteral("«hidden»")));
    }

    /// Shorter would hide ordinary words: "admin", "on", "the".
    void tooShortToBeASecret()
    {
        Log::addSecret(QStringLiteral("abc"));
        QVERIFY(logged(QStringLiteral("abc def")).contains(QLatin1String("abc")));
    }

    void sessionTokenIsHidden()
    {
        const QString line = logged(QStringLiteral(
            "GET http://192.0.2.10/cgi-bin/api.cgi?cmd=GetEnc&token=a1b2c3d4e5f6 done"));
        QVERIFY2(!line.contains(QLatin1String("a1b2c3d4e5f6")), qPrintable(line));
        QVERIFY(line.contains(QStringLiteral("token=«token»")));
    }

    void passwordInARequestIsHidden_data()
    {
        QTest::addColumn<QString>("text");
        QTest::addColumn<QString>("secret");
        QTest::addRow("json") << "{\"User\":{\"userName\":\"admin\",\"password\":\"hunter22\"}}" << "hunter22";
        QTest::addRow("json, spaced") << "{\"password\" : \"hunter22\"}" << "hunter22";
        // A Wi-Fi key or a new user's password, as the debug log shows the
        // request. The unquoted rule stopped at the first space.
        QTest::addRow("json with spaces") << "{\"Wifi\":{\"ssid\":\"x\",\"password\":\"two words, a comma\"}}"
                                          << "words, a comma";
        QTest::addRow("json with a quote") << "{\"password\":\"say \\\"hi\\\" now\"}" << "now";
        QTest::addRow("query") << "login?user=admin&password=hunter22&x=1" << "hunter22";
        QTest::addRow("pwd") << "pwd=hunter22" << "hunter22";
        QTest::addRow("rtsp") << "rtsp://admin:hunter22@192.0.2.10:554/h264Preview_01_sub" << "hunter22";
        QTest::addRow("flv") << "http://192.0.2.10/flv?port=1935&user=admin&password=hunter22" << "hunter22";
    }

    void passwordInARequestIsHidden()
    {
        QFETCH(QString, text);
        QFETCH(QString, secret);
        const QString line = logged(text);
        QVERIFY2(!line.contains(secret), qPrintable(line));
    }

    void reportCarriesNoSecret()
    {
        Log::addSecret(QStringLiteral("battery staple"));
        logged(QStringLiteral("battery staple and token=zzzzzzzz"));
        const QString report = Log::report();
        QVERIFY(!report.contains(QLatin1String("battery staple")));
        QVERIFY(!report.contains(QLatin1String("zzzzzzzz")));
    }

    void addresses_data()
    {
        QTest::addColumn<QString>("host");
        QTest::addColumn<bool>("kept");
        QTest::addRow("home network") << "192.168.1.10" << true;
        QTest::addRow("10/8") << "10.1.2.3" << true;
        QTest::addRow("172.16/12") << "172.20.0.5" << true;
        QTest::addRow("loopback") << "127.0.0.1" << true;
        QTest::addRow("mdns") << "camera.local" << true;
        QTest::addRow("public") << "203.0.113.7" << false;
        QTest::addRow("dns name") << "cam.example.com" << false;
    }

    /// A public address says where somebody lives; a private one says nothing.
    void addresses()
    {
        QFETCH(QString, host);
        QFETCH(bool, kept);
        QCOMPARE(Log::maskHost(host) == host, kept);
    }
};

QTEST_GUILESS_MAIN(TestLog)
#include "tst_log.moc"
