// Digital zoom: the geometry, the stream it plays, and what it draws.

#include <clocale>

#include <QApplication>
#include <QProcess>
#include <QSet>
#include <QTemporaryDir>
#include <QTest>
#include <QTimer>
#include <QToolButton>
#include <QWheelEvent>

#include "MpvWidget.h"
#include "VideoTile.h"
#include "ZoomView.h"

using leolink::CameraConfig;
using leolink::VideoTile;
using leolink::ZoomView;

namespace {

constexpr double k169 = 16.0 / 9.0;
const QSizeF kWide(1280, 720);

bool near(QPointF a, QPointF b, double eps = 1e-9)
{
    return qAbs(a.x() - b.x()) < eps && qAbs(a.y() - b.y()) < eps;
}

} // namespace

class TestZoom : public QObject {
    Q_OBJECT

    QTemporaryDir m_dir;

    /// Red, green, blue and yellow quarters, top left to bottom right.
    QString quarters()
    {
        const QString path = m_dir.filePath(QStringLiteral("quarters.mkv"));
        if (QFile::exists(path))
            return path;
        const QStringList args{
            QStringLiteral("-nostdin"), QStringLiteral("-loglevel"), QStringLiteral("error"),
            QStringLiteral("-y"),
            QStringLiteral("-f"), QStringLiteral("lavfi"), QStringLiteral("-i"), QStringLiteral("color=red:s=320x180:r=10"),
            QStringLiteral("-f"), QStringLiteral("lavfi"), QStringLiteral("-i"), QStringLiteral("color=lime:s=320x180:r=10"),
            QStringLiteral("-f"), QStringLiteral("lavfi"), QStringLiteral("-i"), QStringLiteral("color=blue:s=320x180:r=10"),
            QStringLiteral("-f"), QStringLiteral("lavfi"), QStringLiteral("-i"), QStringLiteral("color=yellow:s=320x180:r=10"),
            QStringLiteral("-filter_complex"),
            QStringLiteral("[0][1]hstack[t];[2][3]hstack[b];[t][b]vstack,format=yuv420p"),
            QStringLiteral("-t"), QStringLiteral("120"), QStringLiteral("-c:v"), QStringLiteral("libx264"), path};
        return QProcess::execute(QStringLiteral("ffmpeg"), args) == 0 ? path : QString();
    }

    static CameraConfig camera(const QString &transport)
    {
        CameraConfig c;
        c.id = QStringLiteral("z");
        c.name = QStringLiteral("z");
        c.host = QStringLiteral("192.0.2.1");
        c.user = QStringLiteral("admin");
        c.transport = transport;
        c.stream = QStringLiteral("sub");
        return c;
    }

    /// The colour mpv drew at a point of the surface.
    static QRgb colourAt(const QImage &image, QPointF p)
    {
        const QColor c = image.pixelColor(p.toPoint());
        // Named by the strongest channels, which survives scaling and YUV.
        const bool r = c.red() > 160, g = c.green() > 160, b = c.blue() > 160;
        return qRgb(r ? 255 : 0, g ? 255 : 0, b ? 255 : 0);
    }

private slots:
    void initTestCase()
    {
        QVERIFY(m_dir.isValid());
        std::setlocale(LC_NUMERIC, "C");   // libmpv refuses anything else
    }

    void wholePictureToStartWith()
    {
        ZoomView v;
        QVERIFY(!v.isZoomed());
        QCOMPARE(v.mpvZoom(), 0.0);
        QCOMPARE(v.mpvPan(), QPointF(0, 0));
        QCOMPARE(v.frameRect(kWide, k169), QRectF(0, 0, 1280, 720));
    }

    void selectionFillsTheSurface()
    {
        ZoomView v;
        // The second quarter from the left, second from the top.
        v.zoomTo(QRectF(320, 180, 320, 180), kWide, k169);
        QCOMPARE(v.factor(), 4.0);
        QCOMPARE(v.mpvZoom(), 2.0);
        QVERIFY(near(v.center(), QPointF(0.375, 0.375)));
        QVERIFY(near(v.mpvPan(), QPointF(0.125, 0.125)));
        QVERIFY(near(v.toFrame(QPointF(0, 0), kWide, k169), QPointF(0.25, 0.25)));
        QVERIFY(near(v.toFrame(QPointF(1280, 720), kWide, k169), QPointF(0.5, 0.5)));
    }

    void mpvPlacesTheFrameWhereWeThinkItDoes()
    {
        // mpv: left = (widget - frame) / 2 + pan * frame, with frame = fitted * 2^zoom.
        ZoomView v;
        v.zoomTo(QRectF(700, 400, 200, 150), kWide, k169);
        const double frameWidth = 1280 * std::pow(2.0, v.mpvZoom());
        const double frameHeight = 720 * std::pow(2.0, v.mpvZoom());
        const QRectF frame = v.frameRect(kWide, k169);
        QVERIFY(qAbs(frame.left() - ((1280 - frameWidth) / 2 + v.mpvPan().x() * frameWidth)) < 1e-6);
        QVERIFY(qAbs(frame.top() - ((720 - frameHeight) / 2 + v.mpvPan().y() * frameHeight)) < 1e-6);
    }

    void letterboxedSelection()
    {
        // A square surface: the frame sits in a band across the middle.
        const QSizeF square(900, 900);
        ZoomView v;
        const QRectF whole = v.frameRect(square, k169);
        QCOMPARE(whole, QRectF(0, (900 - 506.25) / 2, 900, 506.25));
        const QRectF selection(whole.left() + 300, whole.top() + 200, 300, 100);
        const QPointF target = v.toFrame(selection.center(), square, k169);
        v.zoomTo(selection, square, k169);
        QVERIFY(v.isZoomed());
        QVERIFY(near(v.toFrame(QPointF(450, 450), square, k169), target, 1e-6));
    }

    void wheelKeepsThePointUnderThePointer()
    {
        ZoomView v;
        const QPointF pointer(500, 300);
        const QPointF under = v.toFrame(pointer, kWide, k169);
        v.zoomBy(1.25, pointer, kWide, k169);
        QVERIFY(near(v.toFrame(pointer, kWide, k169), under, 1e-9));
        v.zoomBy(2.0, pointer, kWide, k169);
        QVERIFY(near(v.toFrame(pointer, kWide, k169), under, 1e-9));
        QCOMPARE(v.factor(), 2.5);
    }

    void edgesStayFilled()
    {
        ZoomView v;
        v.zoomBy(4.0, QPointF(0, 0), kWide, k169);
        QCOMPARE(v.frameRect(kWide, k169).topLeft(), QPointF(0, 0));
        v.panBy(QPointF(5000, 5000), kWide, k169);
        QCOMPARE(v.frameRect(kWide, k169).topLeft(), QPointF(0, 0));
        v.panBy(QPointF(-50000, -50000), kWide, k169);
        QCOMPARE(v.frameRect(kWide, k169).bottomRight(), QPointF(1280, 720));
        // Letterboxed: the band stays centred across, and still moves along.
        const QSizeF square(900, 900);
        v.reset();
        v.zoomBy(1.5, QPointF(450, 450), square, k169);
        v.panBy(QPointF(0, 300), square, k169);
        QCOMPARE(v.center().y(), 0.5);
        v.panBy(QPointF(100, 0), square, k169);
        QVERIFY(v.center().x() < 0.5);
    }

    void zoomingOutGoesBackToWhole()
    {
        ZoomView v;
        v.zoomBy(1.5, QPointF(100, 100), kWide, k169);
        QVERIFY(v.isZoomed());
        v.zoomBy(0.5, QPointF(1000, 600), kWide, k169);
        QVERIFY(!v.isZoomed());
        QCOMPARE(v.center(), QPointF(0.5, 0.5));
        v.zoomBy(1000.0, QPointF(640, 360), kWide, k169);
        QCOMPARE(v.factor(), ZoomView::kMaxFactor);
    }

    void reloadKeepsTheZoom()
    {
        // While a stream reloads mpv knows no aspect; a resize then must not unzoom.
        ZoomView v;
        v.zoomTo(QRectF(320, 180, 320, 180), kWide, k169);
        v.clamp(QSizeF(1920, 1080), 0.0);
        QCOMPARE(v.factor(), 4.0);
        QVERIFY(near(v.center(), QPointF(0.375, 0.375)));
    }

    void zoomPlaysTheMainStream()
    {
        VideoTile tile(camera(QStringLiteral("rtsp")), QString(), true);
        QVERIFY(tile.playbackUrl().endsWith(QLatin1String("_sub")));
        tile.m_zoom.zoomBy(2.0, QPointF(10, 10), kWide, k169);
        tile.applyZoom();
        QVERIFY(tile.playbackUrl().endsWith(QLatin1String("_main")));
        QCOMPARE(tile.shownConfig().stream, QStringLiteral("main"));

        // Back a while after zooming out, not at once.
        tile.m_zoomStreamTimer->setInterval(100);
        tile.m_zoom.reset();
        tile.applyZoom();
        QVERIFY(tile.playbackUrl().endsWith(QLatin1String("_main")));
        QTRY_VERIFY(tile.playbackUrl().endsWith(QLatin1String("_sub")));

        // Zooming back in before then keeps it.
        tile.m_zoom.zoomBy(2.0, QPointF(10, 10), kWide, k169);
        tile.applyZoom();
        tile.m_zoom.reset();
        tile.applyZoom();
        tile.m_zoom.zoomBy(2.0, QPointF(10, 10), kWide, k169);
        tile.applyZoom();
        QTest::qWait(300);
        QVERIFY(tile.playbackUrl().endsWith(QLatin1String("_main")));
    }

    void zoomKeepsStreamsItCannotSwitch()
    {
        CameraConfig own = camera(QStringLiteral("custom"));
        own.customUrl = QStringLiteral("rtsp://192.0.2.1/own");
        VideoTile custom(own, QString(), true);
        custom.m_zoom.zoomBy(2.0, QPointF(10, 10), kWide, k169);
        custom.applyZoom();
        QCOMPARE(custom.playbackUrl(), own.customUrl);

        CameraConfig main = camera(QStringLiteral("rtsp"));
        main.stream = QStringLiteral("main");
        VideoTile already(main, QString(), true);
        already.m_zoom.zoomBy(2.0, QPointF(10, 10), kWide, k169);
        already.applyZoom();
        QVERIFY(!already.m_zoomStream);

        // A main stream that showed nothing isn't asked for again.
        VideoTile failing(camera(QStringLiteral("rtsp")), QString(), true);
        failing.m_zoomStreamFailed = true;
        failing.m_zoom.zoomBy(2.0, QPointF(10, 10), kWide, k169);
        failing.applyZoom();
        QVERIFY(failing.playbackUrl().endsWith(QLatin1String("_sub")));
    }

    /// Needs a display and GL, so not under ctest: run this binary on xcb or Wayland.
    void dragWheelAndBack()
    {
        if (QGuiApplication::platformName() == QLatin1String("offscreen"))
            QSKIP("needs a display");
        const QString video = quarters();
        if (video.isEmpty())
            QSKIP("ffmpeg cannot make the test video");

        CameraConfig c = camera(QStringLiteral("custom"));
        c.customUrl = video;
        VideoTile tile(c, QStringLiteral("no"), true);
        tile.resize(800, 520);
        tile.show();
        tile.start();
        leolink::MpvWidget *surface = tile.m_surface;
        QTRY_VERIFY_WITH_TIMEOUT(surface->videoAspect() > 0, 15000);
        QTRY_VERIFY_WITH_TIMEOUT(surface->renderedFrames() > 5, 15000);

        const QPoint origin = surface->geometry().topLeft();
        const QSizeF size(surface->size());
        const QRectF frame = tile.m_zoom.frameRect(size, surface->videoAspect());
        const auto at = [&](double fx, double fy) {
            return QPointF(frame.left() + fx * frame.width(), frame.top() + fy * frame.height());
        };
        const auto shown = [&](double fx, double fy) {
            const quint64 drawn = surface->renderedFrames();
            if (!QTest::qWaitFor([&] { return surface->renderedFrames() > drawn + 2; }, 5000))
                return qRgb(1, 1, 1);   // nothing new drawn
            const QImage image = surface->grabRendered();
            const qreal ratio = image.width() / size.width();
            return colourAt(image, at(fx, fy) * ratio);
        };
        const QRgb red = qRgb(255, 0, 0), green = qRgb(0, 255, 0), blue = qRgb(0, 0, 255),
                   yellow = qRgb(255, 255, 0);
        QCOMPARE(shown(0.25, 0.25), red);
        QCOMPARE(shown(0.75, 0.75), yellow);

        // Drag over the top left quarter: it fills the picture.
        QTest::mousePress(&tile, Qt::LeftButton, {}, origin + at(0.02, 0.02).toPoint());
        QTest::mouseMove(&tile, origin + at(0.25, 0.25).toPoint());
        QTest::mouseRelease(&tile, Qt::LeftButton, {}, origin + at(0.48, 0.48).toPoint());
        QVERIFY(tile.m_zoom.isZoomed());
        QVERIFY(tile.m_zoomButton->isVisible());
        for (const QPointF p : {QPointF(0.1, 0.1), QPointF(0.9, 0.1), QPointF(0.1, 0.9), QPointF(0.9, 0.9)})
            QCOMPARE(shown(p.x(), p.y()), red);

        // A reload, as switching streams does, keeps the zoom.
        tile.restart();
        QTRY_VERIFY_WITH_TIMEOUT(surface->videoAspect() > 0, 15000);
        QTest::qWait(500);
        QCOMPARE(shown(0.9, 0.9), red);

        // Dragging a zoomed picture moves it: pulled up and left, the far quarter comes in.
        const QPointF from = origin + at(0.9, 0.9);
        QTest::mousePress(&tile, Qt::LeftButton, {}, from.toPoint());
        QTest::mouseMove(&tile, (from - QPointF(frame.width() * 0.8, frame.height() * 0.8)).toPoint());
        QTest::mouseRelease(&tile, Qt::LeftButton, {},
                            (from - QPointF(frame.width() * 0.8, frame.height() * 0.8)).toPoint());
        QCOMPARE(shown(0.9, 0.9), yellow);

        // Back to the whole picture.
        QTest::mouseClick(tile.m_zoomButton, Qt::LeftButton);
        QVERIFY(!tile.m_zoom.isZoomed());
        QCOMPARE(shown(0.25, 0.25), red);
        QCOMPARE(shown(0.75, 0.25), green);
        QCOMPARE(shown(0.25, 0.75), blue);
        QCOMPARE(shown(0.75, 0.75), yellow);

        // The wheel zooms at the pointer: over the blue quarter, blue stays under it.
        const QPointF over = origin + at(0.3, 0.8);
        for (int i = 0; i < 6; ++i) {
            QWheelEvent wheel(over, tile.mapToGlobal(over), QPoint(), QPoint(0, 120), Qt::NoButton,
                              Qt::NoModifier, Qt::NoScrollPhase, false);
            QApplication::sendEvent(&tile, &wheel);
        }
        QVERIFY(tile.m_zoom.factor() > 3.0);
        QCOMPARE(shown(0.3, 0.8), blue);
        QCOMPARE(shown(0.05, 0.05), blue);
    }
};

QTEST_MAIN(TestZoom)
#include "tst_zoom.moc"
