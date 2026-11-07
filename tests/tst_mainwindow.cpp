// What the main window does with recordings and clients when settings change.

#include <clocale>

#include <QFile>
#include <QGuiApplication>
#include <QJsonArray>
#include <QJsonDocument>
#include <QJsonObject>
#include <QPointer>
#include <QProcess>
#include <QSet>
#include <QStandardPaths>
#include <QTcpServer>
#include <QTemporaryDir>
#include <QTest>
#include <QTimer>

#include "MainWindow.h"
#include "MotionDetector.h"
#include "MpvWidget.h"
#include "Recorder.h"
#include "ReolinkClient.h"
#include "VideoTile.h"

using leolink::CameraConfig;
using leolink::Config;
using leolink::MainWindow;
using leolink::Recorder;
using leolink::ReolinkClient;

class TestMainWindow : public QObject {
    Q_OBJECT

private:
    QTemporaryDir m_dir;
    /// Accepts and says nothing: ffmpeg stays connected, recording, until stopped.
    QTcpServer m_silent;

    void writeConfig(bool enabled = true, bool recordOnMotion = false,
                     const QString &url = QString())
    {
        QJsonArray cameras;
        for (const QString &id : {QStringLiteral("a"), QStringLiteral("b")}) {
            cameras.append(QJsonObject{
                {QStringLiteral("id"), id},
                {QStringLiteral("name"), id},
                {QStringLiteral("host"), QStringLiteral("127.0.0.1")},
                {QStringLiteral("enabled"), enabled},
                {QStringLiteral("transport"), QStringLiteral("custom")},
                {QStringLiteral("customUrl"),
                 url.isEmpty() ? QStringLiteral("tcp://127.0.0.1:%1").arg(m_silent.serverPort())
                               : url},
                {QStringLiteral("motionSource"), QStringLiteral("off")},
                {QStringLiteral("recordOnMotion"), recordOnMotion},
                {QStringLiteral("recordTrailingSeconds"), 0},
            });
        }
        QFile f(qEnvironmentVariable("LEOLINK_CONFIG"));
        QVERIFY(f.open(QIODevice::WriteOnly));
        f.write(QJsonDocument(QJsonObject{{QStringLiteral("cameras"), cameras},
                                          {QStringLiteral("recordDir"), m_dir.filePath(QStringLiteral("rec"))}})
                    .toJson());
    }

private slots:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        QVERIFY(m_dir.isValid());
        qputenv("LEOLINK_CONFIG", m_dir.filePath(QStringLiteral("config.json")).toUtf8());
        QVERIFY(m_silent.listen(QHostAddress::LocalHost));
        std::setlocale(LC_NUMERIC, "C");   // libmpv refuses anything else
    }

    /// Needs a display and GL, so not under ctest: run this binary on xcb or Wayland.
    void togglingTheFrameKeepsThePicture()
    {
        if (QGuiApplication::platformName() == QLatin1String("offscreen"))
            QSKIP("needs a display");
        const QString video = m_dir.filePath(QStringLiteral("video.mkv"));
        if (QProcess::execute(QStringLiteral("ffmpeg"),
                              {QStringLiteral("-nostdin"), QStringLiteral("-loglevel"), QStringLiteral("error"),
                               QStringLiteral("-y"), QStringLiteral("-f"), QStringLiteral("lavfi"),
                               QStringLiteral("-i"), QStringLiteral("testsrc2=size=320x180:rate=25"),
                               QStringLiteral("-t"), QStringLiteral("60"), QStringLiteral("-c:v"),
                               QStringLiteral("libx264"), QStringLiteral("-pix_fmt"), QStringLiteral("yuv420p"),
                               video}) != 0)
            QSKIP("ffmpeg cannot make the test video");
        writeConfig(true, false, video);
        MainWindow window;
        window.show();
        QTRY_VERIFY_WITH_TIMEOUT(window.m_tiles.contains(QStringLiteral("a")), 10000);
        auto *surface = window.m_tiles.value(QStringLiteral("a"))->findChild<leolink::MpvWidget *>();
        QVERIFY(surface);
        QTRY_VERIFY_WITH_TIMEOUT(surface->renderedFrames() > 10, 20000);

        for (const bool frameless : {true, false}) {
            window.m_config.frameless = frameless;
            window.applyChrome();
            QCOMPARE(bool(window.windowFlags() & Qt::FramelessWindowHint), frameless);
            QTest::qWait(1000);
            const quint64 before = surface->renderedFrames();
            QTRY_VERIFY_WITH_TIMEOUT(surface->renderedFrames() > before + 10, 20000);
            // testsrc2's colour bars, not a blank.
            const QImage picture = surface->grabRendered();
            QVERIFY(!picture.isNull());
            QSet<QRgb> colours;
            for (int x = 0; x < picture.width(); x += 8)
                colours.insert(picture.pixel(x, picture.height() / 2));
            QVERIFY2(colours.size() > 3, qPrintable(QString::number(colours.size())));
        }
    }

    void removingACameraStopsItsRecording()
    {
        if (!leolink::MotionDetector::available())
            QSKIP("no ffmpeg");
        writeConfig();
        MainWindow window;
        QTRY_VERIFY_WITH_TIMEOUT(window.m_tiles.contains(QStringLiteral("a")), 10000);

        window.onRecordToggled(QStringLiteral("a"), true);
        QVERIFY(window.isRecording(QStringLiteral("a")));
        QPointer<Recorder> recorder = window.m_recorders.value(QStringLiteral("a"));

        Config next = window.m_config;
        next.cameras.removeFirst();
        window.applyConfig(next);
        QTRY_VERIFY_WITH_TIMEOUT(!window.m_tiles.contains(QStringLiteral("a")), 10000);
        QVERIFY(!window.m_recorders.contains(QStringLiteral("a")));
        QTRY_VERIFY_WITH_TIMEOUT(recorder.isNull(), 10000);
    }

    void motionEndingLeavesAManualRecordingRunning()
    {
        if (!leolink::MotionDetector::available())
            QSKIP("no ffmpeg");
        writeConfig(true, true);
        MainWindow window;
        QTRY_VERIFY_WITH_TIMEOUT(window.m_tiles.contains(QStringLiteral("a")), 10000);
        const QString a = QStringLiteral("a");

        window.onRecordToggled(a, true);
        window.raiseEvent(*window.cameraById(a), QStringLiteral("motion"), QString(), false);
        QTest::qWait(300);
        QVERIFY(window.isRecording(a));
        window.onRecordToggled(a, false);
        QTRY_VERIFY_WITH_TIMEOUT(!window.isRecording(a), 12000);

        window.raiseEvent(*window.cameraById(a), QStringLiteral("motion"), QString(), true);
        QVERIFY(window.isRecording(a));
        window.raiseEvent(*window.cameraById(a), QStringLiteral("motion"), QString(), false);
        QTRY_VERIFY_WITH_TIMEOUT(!window.isRecording(a), 12000);
    }

    void actionsAreToldWhichEvent()
    {
        writeConfig();
        MainWindow window;
        const QString log = m_dir.filePath(QStringLiteral("events"));
        window.m_config.actions.runCommand = true;
        window.m_config.actions.command = QStringLiteral("echo %e %s >> '%1'").arg(log);
        const auto logged = [&log] {
            QFile f(log);
            return f.open(QIODevice::ReadOnly) ? f.readAll() : QByteArray();
        };
        const CameraConfig &camera = *window.cameraById(QStringLiteral("a"));

        window.raiseEvent(camera, QStringLiteral("sound"), QString(), true);
        QTRY_COMPARE_WITH_TIMEOUT(logged(), QByteArray("sound on\n"), 5000);
        window.raiseEvent(camera, QStringLiteral("sound"), QString(), false);
        QTRY_COMPARE_WITH_TIMEOUT(logged(), QByteArray("sound on\nsound off\n"), 5000);
        window.raiseEvent(camera, QStringLiteral("motion"), QString(), true);
        QTRY_COMPARE_WITH_TIMEOUT(logged(), QByteArray("sound on\nsound off\nmotion on\n"), 5000);
    }

    void togglingTheFrameLeavesEverythingRunning()
    {
#if QT_VERSION < QT_VERSION_CHECK(6, 10, 0)
        // Qt 6.4 crashes in rhiFlush() showing a GL widget offscreen. 6.10 doesn't.
        if (QGuiApplication::platformName() == QLatin1String("offscreen"))
            QSKIP("needs a display on this Qt");
#endif
        if (!leolink::MotionDetector::available())
            QSKIP("no ffmpeg");
        writeConfig();
        MainWindow window;
        window.show();
        QTRY_VERIFY_WITH_TIMEOUT(window.m_tiles.contains(QStringLiteral("a")), 10000);
        const QString a = QStringLiteral("a");
        leolink::VideoTile *tile = window.m_tiles.value(a);

        window.onRecordToggled(a, true);
        QVERIFY(window.isRecording(a));
        window.m_config.frameless = true;
        window.applyChrome();
        QVERIFY(window.windowFlags() & Qt::FramelessWindowHint);
        QVERIFY(window.isRecording(a));
        QCOMPARE(window.m_tiles.value(a), tile);
    }

    void firstCameraStartsTheStatusPoll()
    {
        writeConfig(false);
        MainWindow window;
        QTest::qWait(500);
        QVERIFY(!window.m_statusTimer);
        Config next = window.m_config;
        next.cameras[0].enabled = true;
        window.applyConfig(next);
        QTRY_VERIFY_WITH_TIMEOUT(window.m_statusTimer && window.m_statusTimer->isActive(), 10000);
    }

    void aNewPasswordGetsANewStatusClient()
    {
        writeConfig();
        MainWindow window;
        QTRY_VERIFY_WITH_TIMEOUT(window.m_tiles.contains(QStringLiteral("a")), 10000);
        const QString host = QStringLiteral("127.0.0.1");

        window.m_statusClients.insert(host, new ReolinkClient);
        Config renamed = window.m_config;
        renamed.cameras[0].name = QStringLiteral("renamed");
        window.applyConfig(renamed);
        QTest::qWait(500);
        QVERIFY(window.m_statusClients.contains(host));

        Config changed = window.m_config;
        changed.cameras[0].password = QStringLiteral("new");
        window.applyConfig(changed);
        QTRY_VERIFY_WITH_TIMEOUT(!window.m_statusClients.contains(host), 10000);
    }
};

QTEST_MAIN(TestMainWindow)
#include "tst_mainwindow.moc"
