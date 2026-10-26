// What leolink concludes a camera offers, and what it then uses.

#include <algorithm>

#include <QFile>
#include <QSet>
#include <QTest>

#include "CameraProbe.h"
#include "Config.h"
#include "MpvWidget.h"
#include "Protocols.h"

using leolink::CameraConfig;
using leolink::CameraProbe;
using leolink::Capabilities;
using leolink::Feature;
using leolink::Protocol;
using leolink::route;

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

/// For the log of a failed comparison: "baichuan" rather than "5".
QString name(Protocol p)
{
    switch (p) {
    case Protocol::None: return QStringLiteral("none");
    case Protocol::HttpApi: return QStringLiteral("http api");
    case Protocol::HttpFlv: return QStringLiteral("http-flv");
    case Protocol::Rtsp: return QStringLiteral("rtsp");
    case Protocol::Onvif: return QStringLiteral("onvif");
    case Protocol::Baichuan: return QStringLiteral("baichuan");
    }
    return {};
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
Q_DECLARE_METATYPE(leolink::Feature)
Q_DECLARE_METATYPE(leolink::Protocol)

class TestTransport : public QObject {
    Q_OBJECT

private slots:
    // ── choosing how to fetch the picture ───────────────────────────────────

    /// Which protocol each feature takes, for the cameras seen so far and a
    /// few that could be. Every feature decides through the one table, so
    /// this is where its choices are checked.
    void routes_data()
    {
        QTest::addColumn<Feature>("feature");
        QTest::addColumn<Capabilities>("caps");
        QTest::addColumn<Protocol>("chosen");
        using F = Feature;
        using P = Protocol;
        const Capabilities unasked;
        Capabilities unaskedWithBaichuan;
        unaskedWithBaichuan.baichuan = true;

        // Video: cheapest for this machine first — HTTP-FLV, RTSP, Baichuan.
        QTest::addRow("video, everything") << F::Video << offering({"http", "rtmp", "rtsp", "baichuan"}) << P::HttpFlv;
        QTest::addRow("video, https only, as an E1 Zoom") << F::Video << offering({"https", "rtmp", "rtsp", "baichuan"}) << P::HttpFlv;
        QTest::addRow("video, web server without RTMP") << F::Video << offering({"http", "rtsp", "baichuan"}) << P::Rtsp;
        QTest::addRow("video, RTMP without a web server") << F::Video << offering({"rtmp", "rtsp", "baichuan"}) << P::Rtsp;
        QTest::addRow("video, E1 Pro") << F::Video << offering({"rtsp", "onvif", "baichuan"}) << P::Rtsp;
        QTest::addRow("video, E1 with everything else off") << F::Video << offering({"baichuan"}) << P::Baichuan;
        QTest::addRow("video, nothing usable") << F::Video << offering({"onvif"}) << P::Rtsp;
        QTest::addRow("video, not asked yet") << F::Video << unasked << P::Rtsp;

        // Settings over Baichuan only where there is no web server. Not asked
        // yet keeps the HTTP API, as leolink always did, even where something
        // has already said Baichuan works.
        QTest::addRow("settings, web server") << F::Settings << offering({"http", "baichuan"}) << P::HttpApi;
        QTest::addRow("settings, https server") << F::Settings << offering({"https", "baichuan"}) << P::HttpApi;
        QTest::addRow("settings, no web server") << F::Settings << offering({"rtsp", "baichuan"}) << P::Baichuan;
        QTest::addRow("settings, neither") << F::Settings << offering({"rtsp"}) << P::None;
        QTest::addRow("settings, not asked yet") << F::Settings << unasked << P::HttpApi;
        QTest::addRow("settings, not asked, Baichuan seen") << F::Settings << unaskedWithBaichuan << P::HttpApi;

        // The camera's own motion: ONVIF where there is one, Baichuan or not.
        QTest::addRow("motion, ONVIF and Baichuan") << F::CameraMotion << offering({"onvif", "baichuan"}) << P::Onvif;
        QTest::addRow("motion, Baichuan only") << F::CameraMotion << offering({"baichuan"}) << P::Baichuan;
        QTest::addRow("motion, neither") << F::CameraMotion << offering({"http", "rtsp"}) << P::None;
        QTest::addRow("motion, not asked yet") << F::CameraMotion << unasked << P::Onvif;

        QTest::addRow("turning, web server") << F::Ptz << offering({"https", "baichuan"}) << P::HttpApi;
        QTest::addRow("turning, no web server") << F::Ptz << offering({"rtsp", "baichuan"}) << P::Baichuan;
        QTest::addRow("talk, RTSP") << F::Talk << offering({"rtsp", "onvif"}) << P::Rtsp;
        QTest::addRow("talk, no RTSP") << F::Talk << offering({"baichuan"}) << P::None;
        QTest::addRow("talk, not asked yet") << F::Talk << unasked << P::Rtsp;
        QTest::addRow("Wi-Fi meter, no web server") << F::WifiSignal << offering({"rtsp", "baichuan"}) << P::None;
        QTest::addRow("firmware file, no Baichuan") << F::FirmwareFile << offering({"http", "rtsp"}) << P::None;
        QTest::addRow("firmware file, not asked yet") << F::FirmwareFile << unasked << P::Baichuan;
    }

    void routes()
    {
        QFETCH(Feature, feature);
        QFETCH(Capabilities, caps);
        QFETCH(Protocol, chosen);
        QCOMPARE(name(route(feature, caps)), name(chosen));
    }

    /// The automatic transport is the video route, by the name it is stored
    /// under.
    void automaticIsTheVideoRoute()
    {
        QCOMPARE(automatic(offering({"http", "rtmp"})).effectiveTransport(), QStringLiteral("flv"));
        QCOMPARE(automatic(offering({"rtsp"})).effectiveTransport(), QStringLiteral("rtsp"));
        QCOMPARE(automatic(offering({"baichuan"})).effectiveTransport(), QStringLiteral("baichuan"));
    }

    /// The README's table of what each feature needs says what the routes do.
    /// A feature that gains or loses a protocol fails here until the README
    /// says so too.
    void readmeSaysTheSame()
    {
        QFile readme(QStringLiteral(LEOLINK_FIXTURES "/../../README.md"));
        QVERIFY(readme.open(QIODevice::ReadOnly));
        const QStringList lines = QString::fromUtf8(readme.readAll()).split(QLatin1Char('\n'));
        const int start = lines.indexOf(QStringLiteral("### What each feature needs"));
        QVERIFY(start >= 0);

        // The table's rows, by the start of their first cell. Rows about no
        // single camera's protocols are left out on purpose.
        const QList<QPair<QString, Feature>> rows{
            {QStringLiteral("Live video"), Feature::Video},
            {QStringLiteral("Camera settings"), Feature::Settings},
            {QStringLiteral("About page"), Feature::Settings},
            {QStringLiteral("Still for drawing"), Feature::Snapshot},
            {QStringLiteral("Motion alerts from the camera"), Feature::CameraMotion},
            {QStringLiteral("Motion and sound detected here"), Feature::Video},
            {QStringLiteral("Recording to disk"), Feature::Video},
            {QStringLiteral("Turning and zooming"), Feature::Ptz},
            {QStringLiteral("Recordings on the SD card"), Feature::CardRecordings},
            {QStringLiteral("Wi-Fi strength"), Feature::WifiSignal},
            {QStringLiteral("Firmware update, downloaded"), Feature::FirmwareDownload},
            {QStringLiteral("Firmware update from a .pak"), Feature::FirmwareFile},
            {QStringLiteral("Sending sound"), Feature::Talk},
        };
        const QStringList elsewhere{QStringLiteral("Finding cameras"),
                                    QStringLiteral("Reaching a camera by UID")};
        // The table's columns, in order.
        const QList<Protocol> columns{Protocol::HttpApi, Protocol::HttpFlv, Protocol::Rtsp,
                                      Protocol::Onvif, Protocol::Baichuan};

        QSet<Feature> seen;
        int checked = 0;
        for (int i = start + 1; i < lines.size(); ++i) {
            const QString line = lines.at(i).trimmed();
            if (line.startsWith(QLatin1String("#")))
                break;
            if (!line.startsWith(QLatin1Char('|')) || line.startsWith(QLatin1String("|---")) ||
                line.startsWith(QLatin1String("| |")))
                continue;
            QStringList cells = line.split(QLatin1Char('|'));
            cells = cells.mid(1, cells.size() - 2);
            const QString label = cells.value(0).trimmed();
            if (std::any_of(elsewhere.cbegin(), elsewhere.cend(),
                            [&](const QString &e) { return label.startsWith(e); }))
                continue;
            const auto row = std::find_if(rows.cbegin(), rows.cend(),
                                          [&](const auto &r) { return label.startsWith(r.first); });
            QVERIFY2(row != rows.cend(), qPrintable(QStringLiteral("README row not known: ") + label));

            QList<Protocol> said;
            for (int c = 0; c < columns.size(); ++c) {
                const QString cell = cells.value(c + 1).trimmed();
                if (!cell.isEmpty() && !cell.startsWith(QStringLiteral("—")))
                    said << columns.at(c);
            }
            QList<Protocol> routed;
            for (const leolink::Route &r : leolink::routes()) {
                if (r.feature == row->second)
                    routed = r.order;
            }
            QSet<Protocol> saidSet(said.cbegin(), said.cend());
            QSet<Protocol> routedSet(routed.cbegin(), routed.cend());
            QVERIFY2(saidSet == routedSet, qPrintable(QStringLiteral("README and routes differ on: ") + label));
            seen.insert(row->second);
            ++checked;
        }
        QVERIFY(checked >= rows.size());
        for (const leolink::Route &r : leolink::routes())
            QVERIFY2(seen.contains(r.feature), "a feature in the routes has no README row");
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

    // ── what the probe makes of a camera ────────────────────────────────────

    /// Nothing answering is a camera that is off, not one with every service
    /// switched off. Unknown keeps everything on offer until it answers.
    void silenceIsUnknown()
    {
        const Capabilities caps = CameraProbe::interpret({}, false, QString());
        QVERIFY(!caps.known);
        QCOMPARE(name(route(Feature::Settings, caps)), name(Protocol::HttpApi));
        QCOMPARE(name(route(Feature::CameraMotion, caps)), name(Protocol::Onvif));
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
        QCOMPARE(name(route(Feature::Settings, caps)), name(Protocol::Baichuan));
        QCOMPARE(name(route(Feature::Video, caps)), name(Protocol::Baichuan));
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
        QCOMPARE(name(route(Feature::Settings, caps)), name(Protocol::Baichuan));
        QCOMPARE(name(route(Feature::Video, caps)), name(Protocol::Rtsp));
    }

    void e1Zoom()
    {
        const Capabilities caps =
            CameraProbe::interpret({80, 443, 554, 8000, 9000}, true, portList(QStringLiteral("e1zoom")));
        QVERIFY(!caps.http);   // port 80 only redirects, and says it is off
        QVERIFY(caps.https);
        QVERIFY(caps.rtmp);
        QCOMPARE(name(route(Feature::Settings, caps)), name(Protocol::HttpApi));
        QCOMPARE(name(route(Feature::Video, caps)), name(Protocol::HttpFlv));
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
