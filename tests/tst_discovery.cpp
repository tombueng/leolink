// Finding cameras: what a WS-Discovery reply says about the device behind it.

#include <QFile>
#include <QHostAddress>
#include <QTest>

#include "Discovery.h"

using leolink::Discovery;

namespace {

QByteArray fixture(const QString &name)
{
    QFile f(QStringLiteral(LEOLINK_FIXTURES "/onvif/") + name);
    return f.open(QIODevice::ReadOnly) ? f.readAll() : QByteArray();
}

/// A ProbeMatch the way the standard writes it, for makers other than Reolink.
QByteArray probeMatch(const QString &scopes, const QString &xaddrs)
{
    return QStringLiteral(
               "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
               "<s:Envelope xmlns:s=\"http://www.w3.org/2003/05/soap-envelope\" "
               "xmlns:d=\"http://schemas.xmlsoap.org/ws/2005/04/discovery\"><s:Body>"
               "<d:ProbeMatches><d:ProbeMatch><d:Scopes>%1</d:Scopes>"
               "<d:XAddrs>%2</d:XAddrs></d:ProbeMatch></d:ProbeMatches></s:Body></s:Envelope>")
        .arg(scopes, xaddrs)
        .toUtf8();
}

} // namespace

class TestDiscovery : public QObject {
    Q_OBJECT

private slots:
    /// An E1 Zoom's real reply. It calls itself "IPC-BO", gives "E1Zoom" as
    /// its hardware, and never says Reolink — which was enough for leolink not
    /// to recognise its own cameras.
    void e1Zoom()
    {
        const auto camera = Discovery::parseReply(fixture(QStringLiteral("discovery-e1zoom.xml")),
                                                  QHostAddress(QStringLiteral("192.0.2.10")));
        QVERIFY(camera);
        QCOMPARE(camera->address, QStringLiteral("192.0.2.10"));
        QCOMPARE(camera->serviceUrl, QStringLiteral("http://192.0.2.10:8000/onvif/device_service"));
        QCOMPARE(camera->manufacturer, QStringLiteral("E1Zoom"));
        QVERIFY(camera->looksReolink);
    }

    void reolinkByName_data()
    {
        QTest::addColumn<QString>("scopes");
        QTest::addColumn<bool>("reolink");
        QTest::addRow("RLC") << "onvif://www.onvif.org/name/RLC-410W" << true;
        QTest::addRow("RLN") << "onvif://www.onvif.org/name/RLN8-410" << true;
        QTest::addRow("says so") << "onvif://www.onvif.org/hardware/Reolink%20Duo%202" << true;
        QTest::addRow("argus") << "onvif://www.onvif.org/hardware/Argus3Pro" << true;
        QTest::addRow("another maker") << "onvif://www.onvif.org/name/DS-2CD2043 onvif://www.onvif.org/hardware/HIKVISION" << false;
        QTest::addRow("nothing said") << "" << false;
    }

    void reolinkByName()
    {
        QFETCH(QString, scopes);
        QFETCH(bool, reolink);
        const auto camera = Discovery::parseReply(probeMatch(scopes, QStringLiteral("http://192.0.2.11/onvif/device_service")),
                                                  QHostAddress(QStringLiteral("192.0.2.11")));
        QVERIFY(camera);
        QCOMPARE(camera->looksReolink, reolink);
    }

    void spacesInNamesAreDecoded()
    {
        const auto camera = Discovery::parseReply(
            probeMatch(QStringLiteral("onvif://www.onvif.org/name/Front%20Door"), QString()),
            QHostAddress(QStringLiteral("192.0.2.11")));
        QCOMPARE(camera->name, QStringLiteral("Front Door"));
    }

    /// Devices may list several service addresses; the first is the one used.
    void firstServiceAddress()
    {
        const auto camera = Discovery::parseReply(
            probeMatch(QString(), QStringLiteral(" http://192.0.2.11/onvif/device_service http://[2001:db8::1]/onvif/device_service ")),
            QHostAddress(QStringLiteral("192.0.2.11")));
        QCOMPARE(camera->serviceUrl, QStringLiteral("http://192.0.2.11/onvif/device_service"));
    }

    /// An IPv4 reply on a dual-stack socket comes from ::ffff:a.b.c.d.
    void mappedAddress()
    {
        const auto camera = Discovery::parseReply(probeMatch(QString(), QString()),
                                                  QHostAddress(QStringLiteral("::ffff:192.0.2.12")));
        QCOMPARE(camera->address, QStringLiteral("192.0.2.12"));
    }

    void otherTrafficIsIgnored()
    {
        // Our own probe, which comes back on the multicast group, among others.
        QVERIFY(!Discovery::parseReply("<e:Envelope><e:Body><d:Probe/></e:Body></e:Envelope>",
                                       QHostAddress(QStringLiteral("192.0.2.13"))));
        QVERIFY(!Discovery::parseReply("M-SEARCH * HTTP/1.1", QHostAddress(QStringLiteral("192.0.2.13"))));
    }
};

QTEST_GUILESS_MAIN(TestDiscovery)
#include "tst_discovery.moc"
