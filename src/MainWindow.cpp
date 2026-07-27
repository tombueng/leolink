#include "MainWindow.h"

#include <cstdio>

#include <QApplication>
#include <QCloseEvent>
#include <QDateTime>
#include <QDesktopServices>
#include <QDir>
#include <QFileInfo>
#include <QTextStream>
#include <QFileDialog>
#include <QGridLayout>
#include <QInputDialog>
#include <QLabel>
#include <QMenu>
#include <QMenuBar>
#include <QMessageBox>
#include <QProcess>
#include <QPushButton>
#include <QRegularExpression>
#include <QSet>
#include <QStandardPaths>
#include <QStatusBar>
#include <QSystemTrayIcon>
#include <QTimer>
#include <QToolBar>
#include <QUrl>
#include <QWindow>

#include "CameraSettingsDialog.h"
#include "DiagnosticsDialog.h"
#include "EventActions.h"
#include "Log.h"
#include "EventLog.h"
#include "EventLogDialog.h"
#include "SoundPlayer.h"
#include "AudioDetector.h"
#include "MotionDetector.h"
#include "MotionWatcher.h"
#include "PlaybackBrowser.h"
#include "Recorder.h"
#include "ReolinkClient.h"
#include "SettingsDialog.h"
#include "VideoTile.h"

namespace leolink {

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent), m_config(Config::load()),
      m_eventLog(new EventLog(this)),
      m_dispatcher(new EventDispatcher(this)),
      m_sound(new SoundPlayer(this))
{
    // A webhook that cannot be reached must not interrupt anyone watching, so
    // failures land in the event log rather than in a dialog.
    connect(m_dispatcher, &EventDispatcher::actionFailed, this,
            [this](const QString &what, const QString &reason) {
                EventEntry entry;
                entry.time = QDateTime::currentDateTime();
                entry.type = QStringLiteral("error");
                entry.cameraName = what;
                entry.message = reason;
                m_eventLog->append(entry);
                statusBar()->showMessage(tr("%1 failed: %2").arg(what, reason), 8000);
            });

    // Keep the history from growing without bound on a machine left running.
    m_eventLog->prune(90);
    LEO_INFO(App, QString(),
             QStringLiteral("%1 camera(s) configured, %2 active, decoder=%3, "
                            "low latency=%4")
                 .arg(m_config.cameras.size())
                 .arg(m_config.active().size())
                 .arg(m_config.mpvHwdecValue())
                 .arg(m_config.lowLatency ? QStringLiteral("yes")
                                          : QStringLiteral("no")));

    // One line per camera at startup. Half of what a report needs is simply
    // "how is it set up", and asking a user to describe that accurately in
    // prose rarely works.
    for (const CameraConfig &camera : m_config.active()) {
        LEO_INFO(App, camera.label(),
                 QStringLiteral("%1, transport=%2, stream=%3, motion=%4%5%6")
                     .arg(Log::maskHost(camera.host), camera.transport,
                          camera.stream, camera.motionSource,
                          camera.audioDetection ? QStringLiteral(", sound")
                                                : QString(),
                          camera.recordOnMotion ? QStringLiteral(", records here")
                                                : QString()));
    }

    setWindowTitle(QStringLiteral("leolink"));
    setWindowIcon(QIcon(QStringLiteral(":/icons/leolink.svg")));
    resize(1100, 700);

    m_central = new QWidget(this);
    m_grid = new QGridLayout(m_central);
    m_grid->setContentsMargins(4, 4, 4, 4);
    m_grid->setSpacing(4);
    setCentralWidget(m_central);

    m_placeholder = new QLabel(
        tr("No cameras configured yet.\n\nUse “Cameras…” to add one."),
        m_central);
    m_placeholder->setAlignment(Qt::AlignCenter);
    m_placeholder->setStyleSheet(QStringLiteral("color:#7f8c8d; font-size:15px;"));

    buildMenus();
    buildContextMenu();
    buildTray();
    applyChrome();
    rebuildGrid();
    startWatchers();

    const QString selfTest = qEnvironmentVariable("LEOLINK_SELFTEST");
    std::fprintf(stderr, "selftest env = '%s'\n", qPrintable(selfTest));
    if (!selfTest.isEmpty()) {
        // Delay is adjustable so the self-test can be pointed at a specific
        // moment — after a camera has been reconfigured, for instance.
        const int delay =
            qEnvironmentVariableIntValue("LEOLINK_SELFTEST_DELAY") > 0
                ? qEnvironmentVariableIntValue("LEOLINK_SELFTEST_DELAY") * 1000
                : 15000;
        QTimer::singleShot(delay, this, [this, selfTest] { runSelfTest(selfTest); });
    } else if (m_config.cameras.isEmpty()) {
        QTimer::singleShot(0, this, &MainWindow::showFirstRunHint);
    }
}

MainWindow::~MainWindow()
{
    teardownGrid();
    releaseStatusClients();
}

const CameraConfig *MainWindow::cameraById(const QString &id) const
{
    for (const CameraConfig &c : m_config.cameras)
        if (c.id == id)
            return &c;
    return nullptr;
}

// ── menus and chrome ────────────────────────────────────────────────────────

void MainWindow::buildMenus()
{
    auto *fileMenu = menuBar()->addMenu(tr("&File"));

    auto *settingsAction = fileMenu->addAction(tr("&Cameras…"));
    settingsAction->setShortcut(QKeySequence::Preferences);
    settingsAction->setIcon(QIcon::fromTheme(QStringLiteral("configure")));
    connect(settingsAction, &QAction::triggered, this, &MainWindow::openSettings);

    auto *snapAction = fileMenu->addAction(tr("&Save snapshots…"));
    snapAction->setShortcut(QKeySequence(QStringLiteral("Ctrl+S")));
    snapAction->setIcon(QIcon::fromTheme(QStringLiteral("camera-photo")));
    connect(snapAction, &QAction::triggered, this, &MainWindow::snapshotAll);

    m_recordAllAction = fileMenu->addAction(tr("&Record all cameras"));
    m_recordAllAction->setShortcut(QKeySequence(QStringLiteral("Ctrl+R")));
    m_recordAllAction->setCheckable(true);
    m_recordAllAction->setIcon(QIcon::fromTheme(QStringLiteral("media-record")));
    connect(m_recordAllAction, &QAction::triggered, this,
            &MainWindow::toggleRecordAll);

    auto *eventLogAction = fileMenu->addAction(tr("&Event log…"));
    eventLogAction->setShortcut(QKeySequence(QStringLiteral("Ctrl+L")));
    eventLogAction->setIcon(QIcon::fromTheme(QStringLiteral("view-list-details")));
    connect(eventLogAction, &QAction::triggered, this, [this] {
        EventLogDialog dialog(m_config, m_eventLog, this);
        dialog.exec();
    });

    auto *cameraRecordings = fileMenu->addAction(tr("Recordings on the &camera…"));
    cameraRecordings->setToolTip(
        tr("Browse what is stored on the camera's own SD card."));
    connect(cameraRecordings, &QAction::triggered, this, [this] {
        const QList<CameraConfig> cameras = m_config.active();
        if (cameras.isEmpty()) {
            statusBar()->showMessage(tr("No cameras configured"), 5000);
            return;
        }
        // With one camera there is nothing to choose; with several, ask.
        CameraConfig chosen = cameras.first();
        if (cameras.size() > 1) {
            QStringList names;
            for (const CameraConfig &c : cameras)
                names << c.label();
            bool ok = false;
            const QString picked = QInputDialog::getItem(
                this, tr("Which camera"), tr("Show recordings from"),
                names, 0, false, &ok);
            if (!ok)
                return;
            const int index = names.indexOf(picked);
            if (index >= 0)
                chosen = cameras.at(index);
        }
        PlaybackBrowser browser(chosen, this);
        browser.exec();
    });

    auto *openRecordings = fileMenu->addAction(tr("Open &recordings folder"));
    connect(openRecordings, &QAction::triggered, this, [this] {
        const QString dir = m_config.effectiveRecordDir();
        QDir().mkpath(dir);
        QDesktopServices::openUrl(QUrl::fromLocalFile(dir));
    });

    fileMenu->addSeparator();
    auto *quitAction = fileMenu->addAction(tr("&Quit"));
    quitAction->setShortcut(QKeySequence::Quit);
    connect(quitAction, &QAction::triggered, this, &MainWindow::quitApplication);

    // ── View ────────────────────────────────────────────────────────────────
    auto *viewMenu = menuBar()->addMenu(tr("&View"));

    auto *fullScreenAction = viewMenu->addAction(tr("&Full screen"));
    fullScreenAction->setShortcut(QKeySequence::FullScreen);
    fullScreenAction->setCheckable(true);
    connect(fullScreenAction, &QAction::toggled, this, [this](bool on) {
        setWindowState(on ? windowState() | Qt::WindowFullScreen
                          : windowState() & ~Qt::WindowFullScreen);
    });

    viewMenu->addSeparator();

    m_menuBarAction = viewMenu->addAction(tr("Show &menu bar"));
    m_menuBarAction->setCheckable(true);
    m_menuBarAction->setChecked(m_config.showMenuBar);
    // Ctrl+M must stay reachable on the window itself: once the menu bar is
    // hidden its own shortcut would go with it, leaving no way back.
    m_menuBarAction->setShortcut(QKeySequence(QStringLiteral("Ctrl+M")));
    m_menuBarAction->setShortcutContext(Qt::ApplicationShortcut);
    addAction(m_menuBarAction);
    connect(m_menuBarAction, &QAction::toggled, this, [this](bool on) {
        m_config.showMenuBar = on;
        applyChrome();
        m_config.save();
    });

    m_toolBarAction = viewMenu->addAction(tr("Show &toolbar"));
    m_toolBarAction->setCheckable(true);
    m_toolBarAction->setChecked(m_config.showToolBar);
    connect(m_toolBarAction, &QAction::toggled, this, [this](bool on) {
        m_config.showToolBar = on;
        applyChrome();
        m_config.save();
    });

    m_statusBarAction = viewMenu->addAction(tr("Show status &bar"));
    m_statusBarAction->setCheckable(true);
    m_statusBarAction->setChecked(m_config.showStatusBar);
    connect(m_statusBarAction, &QAction::toggled, this, [this](bool on) {
        m_config.showStatusBar = on;
        applyChrome();
        m_config.save();
    });

    m_framelessAction = viewMenu->addAction(tr("Hide window &decoration"));
    m_framelessAction->setCheckable(true);
    m_framelessAction->setChecked(m_config.frameless);
    m_framelessAction->setShortcut(QKeySequence(QStringLiteral("Ctrl+Shift+D")));
    m_framelessAction->setShortcutContext(Qt::ApplicationShortcut);
    addAction(m_framelessAction);
    connect(m_framelessAction, &QAction::toggled, this, [this](bool on) {
        m_config.frameless = on;
        applyChrome();
        m_config.save();
        if (on) {
            statusBar()->showMessage(
                tr("Drag the strip under a camera to move the window. "
                   "Ctrl+Shift+D brings the frame back, Ctrl+M the menu."),
                12000);
        }
    });

    // ── Help ────────────────────────────────────────────────────────────────
    auto *helpMenu = menuBar()->addMenu(tr("&Help"));

    auto *handbook = helpMenu->addAction(tr("&Online handbook"));
    handbook->setShortcut(QKeySequence::HelpContents);
    handbook->setIcon(QIcon::fromTheme(QStringLiteral("help-contents")));
    connect(handbook, &QAction::triggered, this, [] {
        QDesktopServices::openUrl(QUrl(QStringLiteral(LEOLINK_HELP_URL)));
    });

    auto *protocolDocs = helpMenu->addAction(tr("&Protocol notes"));
    connect(protocolDocs, &QAction::triggered, this, [] {
        QDesktopServices::openUrl(
            QUrl(QStringLiteral(LEOLINK_HELP_URL "protocol.html")));
    });

    auto *diagnostics = helpMenu->addAction(tr("&Diagnostics…"));
    diagnostics->setShortcut(QKeySequence(QStringLiteral("Ctrl+D")));
    diagnostics->setIcon(QIcon::fromTheme(QStringLiteral("tools-report-bug")));
    diagnostics->setToolTip(tr("What leolink and the cameras have been doing — "
                               "and a report to attach to a bug report."));
    connect(diagnostics, &QAction::triggered, this, &MainWindow::openDiagnostics);

    auto *reportIssue = helpMenu->addAction(tr("&Report a problem"));
    connect(reportIssue, &QAction::triggered, this, [this] {
        // Nudged towards Diagnostics first: a report with a log attached can be
        // acted on, and one without it usually cannot.
        QMessageBox box(this);
        box.setWindowTitle(tr("Report a problem"));
        box.setIcon(QMessageBox::Information);
        box.setText(tr("<b>Attach a diagnostics report</b>"));
        box.setInformativeText(
            tr("It records what your machine is, what the cameras answered and "
               "where things went wrong — with passwords and addresses already "
               "removed. Without it, most reports cannot be followed up.\n\n"
               "If the problem is one you can trigger, switch on detailed "
               "logging in the diagnostics window first, make it happen again, "
               "then copy the report."));
        QAbstractButton *openDiag =
            box.addButton(tr("Open diagnostics"), QMessageBox::AcceptRole);
        QAbstractButton *straight =
            box.addButton(tr("Go to the issue tracker"), QMessageBox::ActionRole);
        box.addButton(QMessageBox::Cancel);
        box.exec();
        if (box.clickedButton() == openDiag)
            openDiagnostics();
        else if (box.clickedButton() == straight)
            QDesktopServices::openUrl(
                QUrl(QStringLiteral("https://github.com/tombueng/leolink/issues")));
    });

    helpMenu->addSeparator();
    auto *aboutAction = helpMenu->addAction(tr("&About leolink"));
    connect(aboutAction, &QAction::triggered, this, [this] {
        QMessageBox::about(
            this, tr("About leolink"),
            tr("<h3>leolink %1</h3>"
               "<p>A native Linux client for Reolink cameras.</p>"
               "<p>Speaks the camera's own protocols directly: HTTP API, RTSP "
               "and ONVIF on the local network, and Reolink's P2P service when "
               "you want to reach a camera from elsewhere.</p>"
               "<p><a href=\"%2\">Handbook</a> · "
               "<a href=\"https://github.com/tombueng/leolink\">Source</a></p>"
               "<p>Not affiliated with or endorsed by Reolink.</p>")
                .arg(QStringLiteral(LEOLINK_VERSION),
                     QStringLiteral(LEOLINK_HELP_URL)));
    });

    auto *toolbar = addToolBar(tr("Main"));
    toolbar->setObjectName(QStringLiteral("mainToolBar"));
    toolbar->setMovable(false);
    // Derived from the font rather than fixed, so the toolbar follows the
    // desktop's scaling instead of staying tiny on a high-resolution screen.
    const int toolbarIcon = qMax(24, fontMetrics().height() + 10);
    toolbar->setIconSize(QSize(toolbarIcon, toolbarIcon));
    toolbar->addAction(settingsAction);
    toolbar->addAction(snapAction);
    toolbar->addAction(m_recordAllAction);

    statusBar()->showMessage(tr("Ready"));
}

void MainWindow::buildContextMenu()
{
    m_contextMenu = new QMenu(this);

    // Re-use the very actions the View menu holds, so their checkboxes and this
    // menu can never disagree about the current state.
    m_contextMenu->addAction(m_menuBarAction);
    m_contextMenu->addAction(m_toolBarAction);
    m_contextMenu->addAction(m_statusBarAction);
    m_contextMenu->addAction(m_framelessAction);
    m_contextMenu->addSeparator();

    auto *settings = m_contextMenu->addAction(tr("Cameras…"));
    connect(settings, &QAction::triggered, this, &MainWindow::openSettings);
    auto *log = m_contextMenu->addAction(tr("Event log…"));
    connect(log, &QAction::triggered, this, [this] {
        EventLogDialog dialog(m_config, m_eventLog, this);
        dialog.exec();
    });
    m_contextMenu->addSeparator();
    auto *quit = m_contextMenu->addAction(tr("Quit"));
    connect(quit, &QAction::triggered, this, &MainWindow::quitApplication);

    m_central->setContextMenuPolicy(Qt::CustomContextMenu);
    connect(m_central, &QWidget::customContextMenuRequested, this,
            [this](const QPoint &pos) {
                m_contextMenu->popup(m_central->mapToGlobal(pos));
            });
}

void MainWindow::startWindowDrag()
{
    // Ask the compositor to move the window. Works on Wayland, where a client
    // is not allowed to reposition itself, as well as on X11.
    if (QWindow *handle = windowHandle())
        handle->startSystemMove();
}

void MainWindow::applyChrome()
{
    menuBar()->setVisible(m_config.showMenuBar);
    statusBar()->setVisible(m_config.showStatusBar);
    if (auto *bar = findChild<QToolBar *>(QStringLiteral("mainToolBar")))
        bar->setVisible(m_config.showToolBar);

    const bool wantFrameless = m_config.frameless;
    if (bool(windowFlags() & Qt::FramelessWindowHint) != wantFrameless) {
        const bool wasVisible = isVisible();
        // Changing this flag destroys and recreates the native window, which
        // takes every tile's mpv surface with it — so rebuild afterwards.
        setWindowFlag(Qt::FramelessWindowHint, wantFrameless);
        if (wasVisible) {
            show();
            rebuildGrid();
        }
    }
}

void MainWindow::buildTray()
{
    if (!m_config.trayEnabled || !QSystemTrayIcon::isSystemTrayAvailable())
        return;

    m_tray = new QSystemTrayIcon(QIcon(QStringLiteral(":/icons/leolink.svg")), this);
    m_tray->setToolTip(QStringLiteral("leolink"));

    auto *menu = new QMenu(this);
    auto *showAction = menu->addAction(tr("Show window"));
    connect(showAction, &QAction::triggered, this, [this] {
        showNormal();
        raise();
        activateWindow();
    });
    auto *settingsAction = menu->addAction(tr("Cameras…"));
    connect(settingsAction, &QAction::triggered, this, &MainWindow::openSettings);
    menu->addSeparator();
    auto *quitAction = menu->addAction(tr("Quit"));
    connect(quitAction, &QAction::triggered, this, &MainWindow::quitApplication);

    m_tray->setContextMenu(menu);
    connect(m_tray, &QSystemTrayIcon::activated, this,
            [this](QSystemTrayIcon::ActivationReason reason) {
                if (reason != QSystemTrayIcon::Trigger)
                    return;
                if (isVisible()) {
                    hide();
                } else {
                    showNormal();
                    raise();
                    activateWindow();
                }
            });
    m_tray->show();
}

// ── grid ────────────────────────────────────────────────────────────────────

void MainWindow::teardownGrid()
{
    for (auto *watcher : std::as_const(m_watchers)) {
        watcher->stop();
        watcher->deleteLater();
    }
    m_watchers.clear();

    for (auto *detector : std::as_const(m_detectors)) {
        detector->stop();
        detector->deleteLater();
    }
    m_detectors.clear();

    for (auto *listener : std::as_const(m_listeners)) {
        listener->stop();
        listener->deleteLater();
    }
    m_listeners.clear();

    for (auto *timer : std::as_const(m_stopTimers))
        timer->deleteLater();
    m_stopTimers.clear();

    // Status clients deliberately survive this. The grid is rebuilt whenever
    // settings are applied, and throwing them away meant a logout and a fresh
    // login per camera every time — which is precisely when the camera's small
    // pool of sessions was running dry. pollCameraStatus() drops the ones whose
    // camera has actually gone; releaseStatusClients() empties the lot when the
    // window is closing.

    for (auto *recorder : std::as_const(m_recorders)) {
        recorder->stop();
        recorder->deleteLater();
    }
    m_recorders.clear();

    for (auto *tile : std::as_const(m_tiles)) {
        tile->stop();
        tile->deleteLater();
    }
    m_tiles.clear();

    m_grid->removeWidget(m_placeholder);
    m_placeholder->hide();
}

void MainWindow::rebuildGrid()
{
    teardownGrid();

    const QList<CameraConfig> cameras = m_config.active();
    if (cameras.isEmpty()) {
        m_grid->addWidget(m_placeholder, 0, 0);
        m_placeholder->show();
        statusBar()->showMessage(tr("No cameras configured"));
        return;
    }

    for (const CameraConfig &camera : cameras) {
        auto *tile = new VideoTile(camera, m_config.mpvHwdecValue(),
                                   m_config.lowLatency, m_central);
        connect(tile, &VideoTile::volumeChanged, this, &MainWindow::onVolumeChanged);
        connect(tile, &VideoTile::fullscreenRequested,
                this, &MainWindow::toggleFullscreenTile);
        connect(tile, &VideoTile::settingsRequested, this,
                [this](const QString &cameraId) {
                    // The cog on a tile means "this camera", so open the
                    // camera's own settings rather than the application's.
                    if (const CameraConfig *c = cameraById(cameraId)) {
                        CameraSettingsDialog dialog(*c, this);
                        connect(&dialog, &CameraSettingsDialog::streamReconfigured,
                                this, [this, cameraId] {
                                    // Not a reconnect: tell the tile to expect
                                    // twenty seconds of nonsense and sit it
                                    // out. Restarting into a half-built
                                    // encoder is what made a profile change
                                    // look like a permanent failure.
                                    if (auto *tile = m_tiles.value(cameraId))
                                        tile->expectDisruption(20);
                                });
                        dialog.exec();
                    }
                });
        connect(tile, &VideoTile::moveWindowRequested,
                this, &MainWindow::startWindowDrag);
        connect(tile, &VideoTile::recordToggled,
                this, &MainWindow::onRecordToggled);
        // The tiles cover the central widget, so they need the escape hatch too.
        tile->setContextMenuPolicy(Qt::CustomContextMenu);
        connect(tile, &QWidget::customContextMenuRequested, this,
                [this, tile](const QPoint &pos) {
                    m_contextMenu->popup(tile->mapToGlobal(pos));
                });
        m_tiles.insert(camera.id, tile);
    }

    applyLayout();

    for (auto *tile : std::as_const(m_tiles))
        tile->start();

    // Every half minute is plenty: signal strength drifts, it does not jump,
    // and each poll is a login plus one request on a small embedded device.
    if (!m_statusTimer) {
        m_statusTimer = new QTimer(this);
        m_statusTimer->setInterval(30000);
        connect(m_statusTimer, &QTimer::timeout, this, &MainWindow::pollCameraStatus);
    }
    m_statusTimer->start();
    QTimer::singleShot(2000, this, &MainWindow::pollCameraStatus);

    statusBar()->showMessage(tr("%n camera(s) live", nullptr, cameras.size()));
}

void MainWindow::applyLayout()
{
    // Detach first: QGridLayout keeps the previous cell when a widget is
    // re-added without removal, and spans would then stack on one another.
    for (auto *tile : std::as_const(m_tiles))
        m_grid->removeWidget(tile);

    const auto [cols, rows] = m_config.gridShape();

    // Equal weight in both directions, otherwise a 2x2 tile does not actually
    // get four cells' worth of space.
    for (int c = 0; c < m_grid->columnCount(); ++c)
        m_grid->setColumnStretch(c, 0);
    for (int r = 0; r < m_grid->rowCount(); ++r)
        m_grid->setRowStretch(r, 0);
    for (int c = 0; c < cols; ++c)
        m_grid->setColumnStretch(c, 1);
    for (int r = 0; r < rows; ++r)
        m_grid->setRowStretch(r, 1);

    for (const Placement &p : m_config.layout()) {
        if (auto *tile = m_tiles.value(p.cameraId))
            m_grid->addWidget(tile, p.row, p.col, p.rowSpan, p.colSpan);
    }
}

void MainWindow::startWatchers()
{
    if (!m_config.showMotion)
        return;

    for (const CameraConfig &camera : m_config.active()) {
        const QString source = camera.motionSource;
        const bool useCamera = source == QLatin1String("camera") ||
                               source == QLatin1String("both");
        const bool useLocal = source == QLatin1String("local") ||
                              source == QLatin1String("both");

        if (useCamera) {
            auto *watcher = new MotionWatcher(this);
            connect(watcher, &MotionWatcher::motionChanged,
                    this, &MainWindow::onMotionChanged);
            watcher->watch(camera);
            m_watchers.insert(camera.id, watcher);
        }

        if (useLocal && MotionDetector::available()) {
            auto *detector = new MotionDetector(this);
            const QString id = camera.id;
            connect(detector, &MotionDetector::motionChanged, this,
                    [this, id](bool active) { onMotionChanged(id, active); });
            connect(detector, &MotionDetector::failed, this,
                    [this](const QString &why) {
                        statusBar()->showMessage(why, 10000);
                    });
            detector->start(camera, camera.motionZones,
                            camera.motionSensitivity, camera.motionMinArea);
            m_detectors.insert(camera.id, detector);
        }

        if (camera.audioDetection && AudioDetector::available()) {
            auto *listener = new AudioDetector(this);
            const QString id = camera.id;
            connect(listener, &AudioDetector::soundChanged, this,
                    [this, id](bool active) { onSoundChanged(id, active); });
            connect(listener, &AudioDetector::failed, this,
                    [this](const QString &why) {
                        statusBar()->showMessage(why, 10000);
                    });
            listener->start(camera, camera.audioThresholdDb,
                            camera.audioHoldSeconds);
            m_listeners.insert(camera.id, listener);
        }
    }
}

void MainWindow::runSelfTest(const QString &directory)
{
    std::fprintf(stderr, "selftest: writing to %s, %d tile(s)\n",
                 qPrintable(directory), int(m_tiles.size()));
    QDir().mkpath(directory);
    for (auto it = m_tiles.cbegin(); it != m_tiles.cend(); ++it) {
        VideoTile *tile = it.value();
        const QImage first = tile->grabRendered();
        const quint64 before = tile->renderedFrames();

        QString safe = tile->config().label();
        safe.replace(QRegularExpression(QStringLiteral("[^\\w.-]")),
                     QStringLiteral("_"));
        if (!first.isNull())
            first.save(QStringLiteral("%1/%2.png").arg(directory, safe));

        // A second grab a moment later: identical pixels mean a frozen
        // picture, however healthy the logs look.
        QTimer::singleShot(3000, this, [this, directory, safe, before, tile] {
            const QImage second = tile->grabRendered();
            if (!second.isNull())
                second.save(QStringLiteral("%1/%2_later.png").arg(directory, safe));
            const quint64 drawn = tile->renderedFrames() - before;
            std::fprintf(stderr, "selftest: %s drew %llu frames in 3 s\n",
                         qPrintable(safe),
                         static_cast<unsigned long long>(drawn));
            QFile report(directory + QStringLiteral("/report.txt"));
            if (report.open(QIODevice::Append | QIODevice::Text)) {
                QTextStream(&report)
                    << safe << " rendered_frames_in_3s=" << drawn << "\n";
            }
            QApplication::quit();
        });
    }
}

void MainWindow::openDiagnostics()
{
    // Non-modal: the point is to watch the log while provoking the fault, and a
    // modal window would stop the user from touching anything that might cause
    // it.
    if (!m_diagnostics) {
        m_diagnostics = new DiagnosticsDialog(this);
        m_diagnostics->setAttribute(Qt::WA_DeleteOnClose);
        connect(m_diagnostics, &DiagnosticsDialog::debugLoggingChanged, this,
                [this](bool enabled) {
                    m_config.debugLogging = enabled;
                    m_config.save();
                });
        connect(m_diagnostics, &QObject::destroyed, this,
                [this] { m_diagnostics = nullptr; });
    }
    m_diagnostics->show();
    m_diagnostics->raise();
    m_diagnostics->activateWindow();
}

void MainWindow::releaseStatusClients()
{
    for (auto *client : std::as_const(m_statusClients))
        delete client;   // not deleteLater: on the way out there may be no
                         // event loop left to run it, and the destructor is
                         // what sends the logout
    m_statusClients.clear();
}

void MainWindow::pollCameraStatus()
{
    // Cameras that have been removed or switched off take their session with
    // them, rather than being polled for ever.
    const QList<CameraConfig> active = m_config.active();
    QSet<QString> live;
    for (const CameraConfig &camera : active)
        live.insert(camera.id);
    for (const QString &id : m_statusClients.keys()) {
        if (!live.contains(id)) {
            delete m_statusClients.take(id);
            LEO_DEBUG(Api, id, QStringLiteral("Camera gone, session released"));
        }
    }

    for (const CameraConfig &camera : active) {
        ReolinkClient *client = m_statusClients.value(camera.id);
        if (!client) {
            client = new ReolinkClient(this);
            client->setCamera(camera);
            const QString id = camera.id;
            connect(client, &ReolinkClient::wifiSignalReady, this,
                    [this, id](int strength) {
                        if (auto *tile = m_tiles.value(id))
                            tile->setWifiSignal(strength);
                    });
            // A camera on Ethernet answers with an error; hide the bars rather
            // than showing an empty meter that looks like a fault.
            connect(client, &ReolinkClient::linkTypeReady, this,
                    [this, id](const QString &link) {
                        if (auto *tile = m_tiles.value(id))
                            tile->setLinkType(link);
                    });
            connect(client, &ReolinkClient::failed, this, [this, id](const QString &) {
                if (auto *tile = m_tiles.value(id))
                    tile->setWifiSignal(-1);
            });
            m_statusClients.insert(camera.id, client);
            // The link type is asked once; it does not change while running.
            client->fetchNetworkInfo();
        }
        client->fetchWifiSignal();
    }
}

void MainWindow::toggleFullscreenTile(const QString &cameraId)
{
    if (!m_tiles.contains(cameraId))
        return;

    if (m_fullscreenId == cameraId) {
        m_fullscreenId.clear();
        for (auto *tile : std::as_const(m_tiles))
            tile->show();
        applyLayout();
        statusBar()->showMessage(tr("Grid view"));
        return;
    }

    m_fullscreenId = cameraId;
    for (auto it = m_tiles.cbegin(); it != m_tiles.cend(); ++it)
        it.value()->setVisible(it.key() == cameraId);
    m_grid->addWidget(m_tiles.value(cameraId), 0, 0);
    statusBar()->showMessage(tr("Double-click to return to the grid"));
}

// ── events ──────────────────────────────────────────────────────────────────

void MainWindow::dispatchActions(const CameraConfig &camera, bool active,
                                 const QString &recording, const QString &still)
{
    // A camera either follows the house rule or replaces it — see CameraConfig.
    const ActionConfig &actions =
        camera.useGlobalActions ? m_config.actions : camera.actions;
    if (!actions.anyEnabled())
        return;

    EventContext context;
    context.cameraName = camera.label();
    context.cameraId = camera.id;
    context.host = camera.host;
    context.timestamp = QDateTime::currentDateTime().toString(Qt::ISODate);
    context.eventType = QStringLiteral("motion");
    context.active = active;
    context.recordingPath = recording;
    context.imagePath = still;

    m_dispatcher->dispatch(actions, context);
}

void MainWindow::beginMotionRecording(const CameraConfig &camera)
{
    if (isRecording(camera.id))
        return;

    const QString path = recordingPathFor(camera);
    if (path.isEmpty()) {
        statusBar()->showMessage(
            tr("Cannot create %1").arg(m_config.effectiveRecordDir()), 8000);
        return;
    }
    recorderFor(camera)->start(camera, path);
}

void MainWindow::scheduleRecordingStop(const CameraConfig &camera)
{
    if (!isRecording(camera.id))
        return;

    QTimer *timer = m_stopTimers.value(camera.id);
    if (!timer) {
        timer = new QTimer(this);
        timer->setSingleShot(true);
        const QString id = camera.id;
        connect(timer, &QTimer::timeout, this, [this, id] {
            if (auto *recorder = m_recorders.value(id))
                recorder->stop();   // reports through Recorder::stopped
        });
        m_stopTimers.insert(camera.id, timer);
    }
    timer->start(qMax(0, camera.recordTrailingSeconds) * 1000);
}

Recorder *MainWindow::recorderFor(const CameraConfig &camera)
{
    if (auto *existing = m_recorders.value(camera.id))
        return existing;

    auto *recorder = new Recorder(this);
    const QString id = camera.id;
    const QString name = camera.label();

    connect(recorder, &Recorder::started, this, [this, id](const QString &path) {
        if (auto *tile = m_tiles.value(id))
            tile->setRecording(true);
        statusBar()->showMessage(tr("Recording %1").arg(path), 5000);
    });
    connect(recorder, &Recorder::stopped, this,
            [this, id, name](const QString &path) {
                if (auto *tile = m_tiles.value(id))
                    tile->setRecording(false);
                if (path.isEmpty())
                    return;
                statusBar()->showMessage(tr("Saved %1").arg(path), 6000);
                EventEntry entry;
                entry.time = QDateTime::currentDateTime();
                entry.cameraId = id;
                entry.cameraName = name;
                entry.type = QStringLiteral("recording");
                entry.message = tr("Recording stopped");
                entry.videoPath = path;
                m_eventLog->append(entry);
            });
    connect(recorder, &Recorder::failed, this, [this, id, name](const QString &why) {
        if (auto *tile = m_tiles.value(id))
            tile->setRecording(false);
        statusBar()->showMessage(tr("%1: %2").arg(name, why), 10000);
        EventEntry entry;
        entry.time = QDateTime::currentDateTime();
        entry.cameraId = id;
        entry.cameraName = name;
        entry.type = QStringLiteral("error");
        entry.message = why;
        m_eventLog->append(entry);
    });

    m_recorders.insert(camera.id, recorder);
    return recorder;
}

bool MainWindow::isRecording(const QString &cameraId) const
{
    auto *recorder = m_recorders.value(cameraId);
    return recorder && recorder->isRecording();
}

QString MainWindow::activeRecording(const QString &cameraId) const
{
    auto *recorder = m_recorders.value(cameraId);
    return recorder && recorder->isRecording() ? recorder->path() : QString();
}

QString MainWindow::recordingPathFor(const CameraConfig &camera) const
{
    const QString dir = m_config.effectiveRecordDir();
    if (!QDir().mkpath(dir))
        return {};

    QString safe = camera.label();
    // A camera called "Front / Drive" would otherwise become a directory.
    safe.replace(QRegularExpression(QStringLiteral("[^\\w.-]")),
                 QStringLiteral("_"));
    return QStringLiteral("%1/%2-%3.mkv")
        .arg(dir, safe,
             QDateTime::currentDateTime().toString(
                 QStringLiteral("yyyyMMdd-HHmmss")));
}

void MainWindow::onRecordToggled(const QString &cameraId, bool recording)
{
    const CameraConfig *camera = cameraById(cameraId);
    if (!camera)
        return;

    if (!recording) {
        // A manual stop must not be undone seconds later by the trailing
        // timer of a motion event.
        if (auto *timer = m_stopTimers.value(cameraId))
            timer->stop();
        if (auto *recorder = m_recorders.value(cameraId))
            recorder->stop();
        m_recordAllAction->setChecked(false);
        return;
    }

    if (isRecording(cameraId))
        return;

    const QString path = recordingPathFor(*camera);
    if (path.isEmpty()) {
        statusBar()->showMessage(
            tr("Cannot create %1").arg(m_config.effectiveRecordDir()), 8000);
        if (auto *tile = m_tiles.value(cameraId))
            tile->setRecording(false);
        return;
    }
    if (!recorderFor(*camera)->start(*camera, path)) {
        if (auto *tile = m_tiles.value(cameraId))
            tile->setRecording(false);
        return;
    }

    EventEntry entry;
    entry.time = QDateTime::currentDateTime();
    entry.cameraId = camera->id;
    entry.cameraName = camera->label();
    entry.type = QStringLiteral("recording");
    entry.message = tr("Recording started");
    entry.videoPath = path;
    m_eventLog->append(entry);
}

void MainWindow::toggleRecordAll()
{
    // Mixed state counts as "not recording", so one press starts everything.
    bool anyRecording = false;
    for (auto it = m_tiles.cbegin(); it != m_tiles.cend(); ++it)
        anyRecording = anyRecording || isRecording(it.key());

    const bool start = !anyRecording;
    for (auto it = m_tiles.cbegin(); it != m_tiles.cend(); ++it) {
        if (isRecording(it.key()) != start)
            onRecordToggled(it.key(), start);
    }
    m_recordAllAction->setChecked(start);
    statusBar()->showMessage(start ? tr("Recording all cameras")
                                   : tr("Recording stopped"), 5000);
}

QString MainWindow::captureEventStill(const CameraConfig &camera)
{
    auto *tile = m_tiles.value(camera.id);
    if (!tile)
        return {};

    const QString dir = m_config.effectiveRecordDir() + QStringLiteral("/stills");
    if (!QDir().mkpath(dir))
        return {};

    QString safe = camera.label();
    safe.replace(QRegularExpression(QStringLiteral("[^\\w.-]")),
                 QStringLiteral("_"));
    const QString path =
        QStringLiteral("%1/%2-%3.jpg")
            .arg(dir, safe,
                 QDateTime::currentDateTime().toString(
                     QStringLiteral("yyyyMMdd-HHmmss")));

    return tile->saveScreenshot(path) ? path : QString();
}

void MainWindow::raiseForEvent()
{
    if (m_config.raiseMode == QLatin1String("fullscreen"))
        showFullScreen();
    else
        showNormal();   // restores whatever geometry the window had
    raise();
    activateWindow();
}

void MainWindow::raiseEvent(const CameraConfig &camera, const QString &type,
                            const QString &message, bool active)
{
    if (!active) {
        // Tell the outside world it is over: a webhook or MQTT consumer needs
        // the falling edge to close its own state.
        dispatchActions(camera, false, QString(), QString());
        if (camera.recordOnMotion)
            scheduleRecordingStop(camera);
        return;
    }

    // Continuing activity cancels a pending stop, so one event stays one file.
    if (auto *timer = m_stopTimers.value(camera.id))
        timer->stop();

    if (camera.recordOnMotion)
        beginMotionRecording(camera);

    auto *tile = m_tiles.value(camera.id);
    const QString recording = activeRecording(camera.id);

    EventEntry entry;
    entry.time = QDateTime::currentDateTime();
    entry.cameraId = camera.id;
    entry.cameraName = camera.label();
    entry.type = type;
    entry.message = message;
    entry.videoPath = recording;
    entry.imagePath = captureEventStill(camera);
    m_eventLog->append(entry);

    if (m_config.flashOnMotion && tile)
        tile->flashAlert(m_config.flashMilliseconds);
    if (m_config.soundOnMotion)
        m_sound->play(m_config.effectiveSoundFile());

    // Actions last, so they can refer to the still and the recording.
    dispatchActions(camera, true, recording, entry.imagePath);

    statusBar()->showMessage(tr("%1 at %2").arg(message, camera.label()), 8000);
    if (m_tray && !isVisible())
        m_tray->showMessage(message, camera.label(),
                            QSystemTrayIcon::Information, 5000);
    if (m_config.raiseOnMotion)
        raiseForEvent();
}

void MainWindow::onMotionChanged(const QString &cameraId, bool active)
{
    if (auto *tile = m_tiles.value(cameraId))
        tile->setMotionActive(active);

    const CameraConfig *camera = cameraById(cameraId);
    if (!camera)
        return;

    // With "both" sources, either can raise the event and either can clear it.
    // Whichever speaks first wins; a second report of the same state is a
    // no-op because the tile and the recorder are already in that state.
    raiseEvent(*camera, QStringLiteral("motion"), tr("Motion detected"), active);
}

void MainWindow::onSoundChanged(const QString &cameraId, bool active)
{
    if (auto *tile = m_tiles.value(cameraId))
        tile->setMotionActive(active);

    const CameraConfig *camera = cameraById(cameraId);
    if (!camera)
        return;

    raiseEvent(*camera, QStringLiteral("sound"), tr("Sound detected"), active);
}

// ── actions ─────────────────────────────────────────────────────────────────

void MainWindow::openSettings()
{
    SettingsDialog dialog(m_config, this);
    if (dialog.exec() != QDialog::Accepted)
        return;

    m_config = dialog.result();
    if (!m_config.save()) {
        QMessageBox::warning(this, tr("Cannot save"),
                             tr("Settings could not be written to %1.")
                                 .arg(Config::path()));
    }
    m_fullscreenId.clear();

    if (m_menuBarAction)
        m_menuBarAction->setChecked(m_config.showMenuBar);
    if (m_toolBarAction)
        m_toolBarAction->setChecked(m_config.showToolBar);
    if (m_statusBarAction)
        m_statusBarAction->setChecked(m_config.showStatusBar);
    if (m_framelessAction)
        m_framelessAction->setChecked(m_config.frameless);

    applyChrome();
    rebuildGrid();
    startWatchers();
}

void MainWindow::snapshotAll()
{
    if (m_tiles.isEmpty()) {
        statusBar()->showMessage(tr("Nothing to capture"));
        return;
    }

    const QString dir = QFileDialog::getExistingDirectory(
        this, tr("Save snapshots to"),
        QStandardPaths::writableLocation(QStandardPaths::PicturesLocation));
    if (dir.isEmpty())
        return;

    const QString stamp =
        QDateTime::currentDateTime().toString(QStringLiteral("yyyyMMdd-HHmmss"));

    int saved = 0;
    for (auto it = m_tiles.cbegin(); it != m_tiles.cend(); ++it) {
        QString safe = it.value()->config().label();
        safe.replace(QRegularExpression(QStringLiteral("[^\\w.-]")),
                     QStringLiteral("_"));
        const QString path =
            QStringLiteral("%1/%2-%3.jpg").arg(dir, safe, stamp);
        if (it.value()->saveScreenshot(path))
            ++saved;
    }
    statusBar()->showMessage(tr("Saved %n snapshot(s)", nullptr, saved), 5000);
}

void MainWindow::onVolumeChanged(const QString &cameraId, int volume, bool muted)
{
    for (CameraConfig &c : m_config.cameras) {
        if (c.id == cameraId) {
            c.volume = volume;
            c.muted = muted;
            break;
        }
    }
    m_config.save();
}

void MainWindow::showFirstRunHint()
{
    QMessageBox box(this);
    box.setWindowTitle(tr("Welcome to leolink"));
    box.setIcon(QMessageBox::Information);
    box.setText(tr("<b>No cameras are configured yet.</b>"));
    box.setInformativeText(
        tr("Add a camera with its address, user name and password. "
           "leolink talks to the camera directly on your network — "
           "no cloud account is involved.<p>"
           "The handbook covers what each option does."));
    QAbstractButton *add = box.addButton(tr("Add camera…"), QMessageBox::AcceptRole);
    QAbstractButton *help = box.addButton(tr("Open handbook"), QMessageBox::HelpRole);
    box.addButton(QMessageBox::Close);
    box.exec();

    if (box.clickedButton() == add)
        openSettings();
    else if (box.clickedButton() == help)
        QDesktopServices::openUrl(QUrl(QStringLiteral(LEOLINK_HELP_URL)));
}

void MainWindow::quitApplication()
{
    // close() alone was not enough. Qt quits when the *last visible window*
    // closes, and by the time someone picks Quit from the tray the window is
    // usually already hidden — so there was no window left to close and
    // nothing told the application to stop. It kept running with only the tray
    // icon to show for it.
    m_reallyQuit = true;

    // Take the tray icon down first, or it lingers in the panel until the
    // process actually exits.
    if (m_tray)
        m_tray->hide();

    teardownGrid();          // stops recordings properly
    releaseStatusClients();  // and hands every session back to the cameras
    close();
    QApplication::quit();
}

void MainWindow::changeEvent(QEvent *event)
{
    if (event->type() == QEvent::WindowStateChange && isMinimized() &&
        m_config.minimizeToTray && m_tray && m_tray->isVisible()) {
        // Defer: hiding from inside the state-change handler confuses some
        // window managers, which then leave a ghost entry in the task bar.
        QTimer::singleShot(0, this, &QWidget::hide);
    }
    QMainWindow::changeEvent(event);
}

void MainWindow::closeEvent(QCloseEvent *event)
{
    if (!m_reallyQuit && m_tray && m_config.closeToTray && m_tray->isVisible()) {
        hide();
        event->ignore();
        // Say so once, otherwise closing looks like the application crashed.
        static bool told = false;
        if (!told) {
            told = true;
            m_tray->showMessage(
                tr("leolink is still running"),
                tr("Cameras keep recording. Use the tray icon to come back."),
                QSystemTrayIcon::Information, 4000);
        }
        return;
    }
    teardownGrid();
    event->accept();
}

} // namespace leolink
