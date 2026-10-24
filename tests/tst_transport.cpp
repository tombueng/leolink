// What leolink concludes a camera offers, and what it then uses.

#include <QFile>
#include <QTest>

#include "CameraProbe.h"
#include "Config.h"
#include "MpvWidget.h"

using leolink::CameraConfig;
using leolink::CameraProbe;
using leolink::Capabilities;

namespace {

QString portList(const QString &model)
{
    QFile f(QStringLiteral(LEOLINK_FIXTURES "/") + model + QStringLiteral("/37.xml"));
    return f.open(QIODevice::ReadOnly) ? QString::fromUtf8(f.readAll()) : QString();
}

Capabilities offering(std::initializer_list<const char *> services)
{
    Capabilities c;
    c.known = true;
    for (const char *s : services) {
        const QLatin1String name(s);
        c.http |= name == QLatin1String("http");
        c.https |= name == QLatin1String("https");
        c.rtsp |= name == QLatin1String("rtsp");
        c.rtmp |= name == QLatin1String("rtmp");
        c.onvif |= name == QLatin1String("onvif");
        c.baichuan |= name == QLatin1String("baichuan");
    }
    return c;
}

CameraConfig automatic(const Capabilities &caps)
{
    CameraConfig camera;
    camera.transport = QStringLiteral("auto");
    camera.caps = caps;
    return camera;
}

} // namespace

Q_DECLARE_METATYPE(leolink::Capabilities)

class TestTransport : public QObject {
    Q_OBJECT

private slots:
    // ── choosing how to fetch the picture ───────────────────────────────────

    void automaticChoice_data()
    {
        QTest::addColumn<Capabilities>("caps");
        QTest::addColumn<QString>("chosen");
        QTest::addRow("everything") << offering({"http", "rtmp", "rtsp", "baichuan"}) << "flv";
        QTest::addRow("https only, as an E1 Zoom") << offering({"https", "rtmp", "rtsp", "baichuan"}) << "flv";
        QTest::addRow("web server without RTMP") << offering({"http", "rtsp", "baichuan"}) << "rtsp";
        QTest::addRow("RTMP without a web server") << offering({"rtmp", "rtsp", "baichuan"}) << "rtsp";
        QTest::addRow("E1 Pro") << offering({"rtsp", "onvif", "baichuan"}) << "rtsp";
        QTest::addRow("E1 with everything else off") << offering({"baichuan"}) << "baichuan";
        QTest::addRow("nothing usable") << offering({"onvif"}) << "rtsp";
        QTest::addRow("not asked yet") << Capabilities{} << "rtsp";
    }

    /// Cheapest for this machine first: HTTP-FLV, then RTSP, then Baichuan.
    void automaticChoice()
    {
        QFETCH(Capabilities, caps);
        QFETCH(QString, chosen);
        QCOMPARE(automatic(caps).effectiveTransport(), chosen);
    }

    /// A transport that never produced a picture is passed over, in order.
    void failedTransportsArePassedOver()
    {
        Capabilities caps = offering({"http", "rtmp", "rtsp", "baichuan"});
        caps.failed << QStringLiteral("flv");
        QCOMPARE(automatic(caps).effectiveTransport(), QStringLiteral("rtsp"));
        caps.failed << QStringLiteral("rtsp");
        QCOMPARE(automatic(caps).effectiveTransport(), QStringLiteral("baichuan"));
        caps.failed << QStringLiteral("baichuan");
        QCOMPARE(automatic(caps).effectiveTransport(), QStringLiteral("rtsp"));
    }

    void chosenByHandStays()
    {
        for (const char *t : {"rtsp", "flv", "baichuan", "custom"}) {
            CameraConfig camera = automatic(offering({"baichuan"}));
            camera.transport = QLatin1String(t);
            QCOMPARE(camera.effectiveTransport(), QLatin1String(t));
        }
    }

    /// An E1 Zoom answers port 80 only with a redirect, so HTTPS is used
    /// whenever it is all there is.
    void httpsWhenOnlyHttps()
    {
        CameraConfig camera = automatic(offering({"https", "rtmp"}));
        camera.host = QStringLiteral("192.0.2.10");
        QVERIFY(camera.effectiveHttps());
        QVERIFY(camera.streamUrl().startsWith(QLatin1String("https://")));
        camera.caps = offering({"http", "https", "rtmp"});
        QVERIFY(!camera.effectiveHttps());
    }

    // ── which way the settings go ───────────────────────────────────────────

    void settingsRoute_data()
    {
        QTest::addColumn<Capabilities>("caps");
        QTest::addColumn<bool>("overBaichuan");
        QTest::addRow("web server") << offering({"http", "baichuan"}) << false;
        QTest::addRow("https server") << offering({"https", "baichuan"}) << false;
        QTest::addRow("no web server") << offering({"rtsp", "baichuan"}) << true;
        QTest::addRow("neither") << offering({"rtsp"}) << false;
        // Asked nothing yet: keep the HTTP API, as leolink always did, even
        // where something has already said Baichuan works.
        QTest::addRow("not asked yet") << Capabilities{} << false;
        Capabilities unasked;
        unasked.baichuan = true;
        QTest::addRow("not asked, Baichuan seen") << unasked << false;
    }

    void settingsRoute()
    {
        QFETCH(Capabilities, caps);
        QFETCH(bool, overBaichuan);
        QCOMPARE(caps.settingsOverBaichuan(), overBaichuan);
    }

    // ── what the probe makes of a camera ────────────────────────────────────

    /// Nothing answering is a camera that is off, not one with every service
    /// switched off. Unknown keeps everything on offer until it answers.
    void silenceIsUnknown()
    {
        const Capabilities caps = CameraProbe::interpret({}, false, QString());
        QVERIFY(!caps.known);
        QVERIFY(caps.api());
        QVERIFY(caps.events());
    }

    /// An E1 on 3.1.0.1643 says HTTPS is on with nothing listening on 443.
    /// The port decides.
    void portMustAnswer()
    {
        const Capabilities caps = CameraProbe::interpret({9000}, true, portList(QStringLiteral("e1")));
        QVERIFY(caps.known);
        QVERIFY(caps.baichuan);
        QVERIFY(!caps.https);
        QVERIFY(!caps.http);
        QVERIFY(!caps.rtsp);
        QVERIFY(caps.settingsOverBaichuan());
        QCOMPARE(automatic(caps).effectiveTransport(), QStringLiteral("baichuan"));
    }

    /// A port that answers for a service the camera says is off is not used.
    void cameraMustSayOn()
    {
        const Capabilities caps =
            CameraProbe::interpret({80, 443, 554, 8000, 9000}, true, portList(QStringLiteral("e1")));
        QVERIFY(!caps.http);   // <enable>0</enable>
        QVERIFY(caps.https);   // on, and answering
        QVERIFY(!caps.rtsp);
        QVERIFY(!caps.onvif);
    }

    void e1Pro()
    {
        const Capabilities caps =
            CameraProbe::interpret({554, 8000, 9000}, true, portList(QStringLiteral("e1pro")));
        QVERIFY(caps.rtsp);
        QVERIFY(caps.onvif);
        QVERIFY(caps.baichuan);
        QVERIFY(!caps.api());
        QVERIFY(caps.settingsOverBaichuan());
        QCOMPARE(automatic(caps).effectiveTransport(), QStringLiteral("rtsp"));
    }

    void e1Zoom()
    {
        const Capabilities caps =
            CameraProbe::interpret({80, 443, 554, 8000, 9000}, true, portList(QStringLiteral("e1zoom")));
        QVERIFY(!caps.http);   // port 80 only redirects, and says it is off
        QVERIFY(caps.https);
        QVERIFY(caps.rtmp);
        QVERIFY(!caps.settingsOverBaichuan());
        QCOMPARE(automatic(caps).effectiveTransport(), QStringLiteral("flv"));
    }

    /// Without a Baichuan login there is no list, and the ports alone decide.
    /// RTMP, which an E1 does not list at all, then rests on port 1935.
    void portsAloneWithoutALogin()
    {
        const Capabilities caps = CameraProbe::interpret({80, 554, 1935}, false, QString());
        QVERIFY(caps.known);
        QVERIFY(caps.http);
        QVERIFY(caps.rtsp);
        QVERIFY(caps.rtmp);
        QVERIFY(!caps.baichuan);
        QVERIFY(!CameraProbe::interpret({80, 554}, false, QString()).rtmp);
    }

    // ── drawing ─────────────────────────────────────────────────────────────

    /// Software renderers get mpv's direct path: through intermediate
    /// framebuffers, llvmpipe over xrdp drew tiles black or green.
    void softwareRenderers_data()
    {
        QTest::addColumn<QString>("renderer");
        QTest::addColumn<bool>("software");
        QTest::addRow("llvmpipe") << "llvmpipe (LLVM 19.1.1, 256 bits)" << true;
        QTest::addRow("softpipe") << "softpipe" << true;
        QTest::addRow("generic") << "Software Rasterizer" << true;
        QTest::addRow("intel") << "Mesa Intel(R) UHD Graphics 620 (KBL GT2)" << false;
        QTest::addRow("amd") << "AMD Radeon RX 6600 (radeonsi, navi23, LLVM 17.0.6, DRM 3.54)" << false;
        QTest::addRow("nvidia") << "NVIDIA GeForce RTX 3060/PCIe/SSE2" << false;
        QTest::addRow("unknown") << "" << false;
    }

    void softwareRenderers()
    {
        QFETCH(QString, renderer);
        QFETCH(bool, software);
        QCOMPARE(leolink::MpvWidget::isSoftwareRenderer(renderer), software);
    }
};

QTEST_MAIN(TestTransport)
#include "tst_transport.moc"
