#include <clocale>
#include <csignal>
#include <unistd.h>

#include <QApplication>
#include <QCommandLineParser>
#include <QIcon>
#include <QSocketNotifier>
#include <QTimer>
#include <QLibraryInfo>
#include <QLocale>
#include <QTranslator>

#include "Baichuan.h"
#include "CameraSettingsDialog.h"
#include "Config.h"
#include "Log.h"
#include "MainWindow.h"
#include "TalkSession.h"

namespace {

/// libmpv draws into a native window handed to it via its `wid` option, and
/// that only works where `winId()` is an X11 window. Under a Wayland session
/// Qt hands out a wl_surface instead, which mpv cannot use, so we ask for the
/// xcb platform and let XWayland bridge it.
///
/// Anyone who has set QT_QPA_PLATFORM themselves keeps their choice; this only
/// fills in a default.
void selectPlatform()
{
    if (!qEnvironmentVariableIsSet("QT_QPA_PLATFORM") &&
        qEnvironmentVariableIsSet("WAYLAND_DISPLAY") &&
        qEnvironmentVariableIsSet("DISPLAY")) {
        qputenv("QT_QPA_PLATFORM", "xcb");
    }

    // Ask Qt's X11 backend for EGL rather than its default of GLX.
    //
    // This is what hardware decoding hangs on. VA-API shares decoded frames
    // with OpenGL through an EGL extension; under GLX mpv says so in as many
    // words — "VAAPI hwdec only works with OpenGL or Vulkan backends" — and
    // decodes in software instead. On a 2560x1440 stream that is the
    // difference between an idle processor and a busy one.
    //
    // Anyone who has chosen an integration themselves keeps it, and it can be
    // switched back with QT_XCB_GL_INTEGRATION=xcb_glx if a driver dislikes EGL.
    if (!qEnvironmentVariableIsSet("QT_XCB_GL_INTEGRATION"))
        qputenv("QT_XCB_GL_INTEGRATION", "xcb_egl");
}

/// Ends the program tidily when the desktop asks it to.
///
/// Logging out, shutting down and `kill` all send SIGTERM, and the default
/// action is to stop the process where it stands — no destructors, so no
/// logout, so every camera session stays occupied for its full hour. On a
/// machine that gets restarted daily that is the difference between a camera
/// that answers and one that does not.
///
/// A signal handler may do almost nothing safely, so it writes one byte to a
/// pipe; Qt reads that from the event loop and quits properly.
int g_signalPipe[2] = {-1, -1};

void onTerminationSignal(int)
{
    const char byte = 1;
    // Return value ignored deliberately: there is nothing a signal handler
    // could do about a failed write, and it must not call anything that might.
    ssize_t ignored = ::write(g_signalPipe[1], &byte, 1);
    (void)ignored;
}

void installSignalHandling(QCoreApplication *app)
{
    if (::pipe(g_signalPipe) != 0)
        return;

    auto *notifier = new QSocketNotifier(g_signalPipe[0], QSocketNotifier::Read, app);
    QObject::connect(notifier, &QSocketNotifier::activated, app, [app, notifier] {
        notifier->setEnabled(false);
        char byte = 0;
        ssize_t ignored = ::read(g_signalPipe[0], &byte, 1);
        (void)ignored;
        leolink::Log::write(leolink::Log::Level::Info,
                            leolink::Log::Category::App, QString(),
                            QStringLiteral("Asked to stop — closing down"));
        app->quit();
    });

    std::signal(SIGTERM, onTerminationSignal);
    std::signal(SIGINT, onTerminationSignal);
    std::signal(SIGHUP, onTerminationSignal);
}

} // namespace

int main(int argc, char *argv[])
{
    selectPlatform();

    // The language has to be settled before the QApplication exists. The
    // desktop's own Qt integration — KDE's, for one — installs translations
    // while the application is being built, taken from the system language,
    // and those answer before anything installed afterwards: an Arabic window
    // would end up with a German “Close” button. Setting LANGUAGE first makes
    // that integration agree with us instead of fighting us.
    //
    // Reading the configuration this early is safe: it needs the application
    // name, which is a static setting, and then only the file itself.
    QCoreApplication::setApplicationName(QStringLiteral("leolink"));
    const leolink::Config config = leolink::Config::load();
    if (config.language != QLatin1String("system"))
        qputenv("LANGUAGE", config.language.toUtf8());

    QApplication app(argc, argv);
    QApplication::setApplicationName(QStringLiteral("leolink"));
    QApplication::setApplicationVersion(QStringLiteral(LEOLINK_VERSION));
    // No organisation name on purpose: it would push the config into
    // ~/.config/leolink/leolink/ instead of ~/.config/leolink/.
    QApplication::setDesktopFileName(QStringLiteral(LEOLINK_APP_ID));
    QApplication::setWindowIcon(QIcon(QStringLiteral(":/icons/leolink.svg")));

    // Qt resets LC_NUMERIC when the QApplication is constructed, and libmpv
    // refuses to run under anything but the C numeric locale. Order matters:
    // this must come after the QApplication, not before.
    std::setlocale(LC_NUMERIC, "C");

    // Language: the configured one, or whatever the system asks for.
    const QLocale locale = config.language == QLatin1String("system")
                               ? QLocale()
                               : QLocale(config.language);
    QLocale::setDefault(locale);

    // Qt's own strings first (buttons in standard dialogs, and so on). Both
    // catalogues are needed: qt_xx is only an umbrella, and the strings that
    // actually show up — “Close”, “Cancel”, the file dialog — live in
    // qtbase_xx. Without it the desktop's own integration answers instead, out
    // of the system language, and an Arabic window ends up with a German
    // button. Installed last so it is asked first.
    const QString qtCatalogues = QLibraryInfo::path(QLibraryInfo::TranslationsPath);
    QTranslator qtTranslator;
    if (qtTranslator.load(locale, QStringLiteral("qt"), QStringLiteral("_"),
                          qtCatalogues))
        QApplication::installTranslator(&qtTranslator);

    QTranslator qtBaseTranslator;
    if (qtBaseTranslator.load(locale, QStringLiteral("qtbase"),
                              QStringLiteral("_"), qtCatalogues))
        QApplication::installTranslator(&qtBaseTranslator);

    // … then ours, which is compiled into the binary.
    QTranslator appTranslator;
    if (appTranslator.load(locale, QStringLiteral("leolink"),
                           QStringLiteral("_"), QStringLiteral(":/i18n")))
        QApplication::installTranslator(&appTranslator);

    // Arabic and the other right-to-left languages need the whole interface
    // mirrored. Qt normally works this out from its own translation catalogue,
    // which is a separate distribution package and often simply absent — so ask
    // the locale directly. After the translators, because installing one sends
    // a LanguageChange event that recomputes the direction.
    QApplication::setLayoutDirection(locale.textDirection());

    QCommandLineParser parser;
    parser.setApplicationDescription(
        QStringLiteral("Native Linux client for Reolink cameras."));
    parser.addHelpOption();
    parser.addVersionOption();

    const QCommandLineOption bcTest(
        QStringList{QStringLiteral("baichuan-test")},
        QStringLiteral("Probe the proprietary Baichuan protocol on a camera "
                       "and print what comes back."),
        QStringLiteral("host"));
    const QCommandLineOption bcUid(
        QStringList{QStringLiteral("baichuan-p2p")},
        QStringLiteral("Probe P2P access by camera UID. UNTESTED — see the "
                       "handbook before relying on it."),
        QStringLiteral("uid"));
    const QCommandLineOption bcVideo(
        QStringList{QStringLiteral("baichuan-video")},
        QStringLiteral("Ask a camera for video over Baichuan and report what "
                       "the container holds. Writes the elementary stream to "
                       "the file given by --out."),
        QStringLiteral("host"));
    const QCommandLineOption bcOut(
        QStringList{QStringLiteral("out")},
        QStringLiteral("Where to write the probed stream."),
        QStringLiteral("path"), QStringLiteral("/tmp/leolink-baichuan.h264"));
    const QCommandLineOption bcSeconds(
        QStringList{QStringLiteral("seconds")},
        QStringLiteral("How long to record during a probe."),
        QStringLiteral("n"), QStringLiteral("10"));
    const QCommandLineOption bcUser(QStringList{QStringLiteral("user")},
                                    QStringLiteral("User name for the probes."),
                                    QStringLiteral("user"),
                                    QStringLiteral("admin"));
    const QCommandLineOption bcPass(QStringList{QStringLiteral("password")},
                                    QStringLiteral("Password for the probes."),
                                    QStringLiteral("password"));
    parser.addOption(bcTest);
    parser.addOption(bcUid);
    parser.addOption(bcVideo);
    parser.addOption(bcOut);
    parser.addOption(bcSeconds);
    parser.addOption(bcUser);
    parser.addOption(bcPass);
    // Only now. QCommandLineParser answers --version and --help by calling
    // exit() outright, which runs static destructors while Qt is still very
    // much alive — and anything logged in that window reaches a handler whose
    // state is already being taken apart. Inside the Flatpak that produced a
    // double free every time; on the host it was luck.
    parser.process(app);

    // Every stored password goes in as a secret before the first line is
    // written, so that even a stray dump of the configuration cannot put one
    // in a file the user is later asked to send us.
    leolink::Log::setDebugEnabled(config.debugLogging);
    for (const leolink::CameraConfig &camera : config.cameras) {
        leolink::Log::addSecret(camera.password);
        leolink::Log::addSecret(camera.uid);
        leolink::Log::addSecret(camera.actions.mqttPassword);
    }
    leolink::Log::addSecret(config.actions.mqttPassword);
    leolink::Log::start();

    // Diagnostic modes: no window, just protocol output on the terminal.
    if (parser.isSet(bcTest)) {
        return leolink::runBaichuanProbe(parser.value(bcTest),
                                         parser.value(bcUser),
                                         parser.value(bcPass));
    }
    if (parser.isSet(bcVideo)) {
        return leolink::runBaichuanVideoProbe(
            parser.value(bcVideo), parser.value(bcUser), parser.value(bcPass),
            parser.value(bcOut), parser.value(bcSeconds).toInt());
    }
    if (parser.isSet(bcUid)) {
        return leolink::runP2PProbe(parser.value(bcUid),
                                    parser.value(bcUser),
                                    parser.value(bcPass));
    }

    // A way to look at the camera-settings dialog without a screen. It builds
    // the whole thing, waits for the camera to answer, and prints what ended up
    // on it — which is the only way to check a dialog's size and contents from
    // outside without taking over somebody's desktop.
    if (qEnvironmentVariableIsSet("LEOLINK_DIALOG_TEST")) {
        if (config.active().isEmpty()) {
            std::fprintf(stderr, "no camera configured\n");
            return 1;
        }
        // LEOLINK_DIALOG_HOST picks which camera, since the interesting one is
        // usually the odd one out rather than the first.
        leolink::CameraConfig subject = config.active().first();
        const QString wanted = qEnvironmentVariable("LEOLINK_DIALOG_HOST");
        if (!wanted.isEmpty()) {
            for (const leolink::CameraConfig &camera : config.active()) {
                if (camera.host == wanted) {
                    subject = camera;
                    break;
                }
            }
        }
        auto *dialog = new leolink::CameraSettingsDialog(subject);
        dialog->show();
        // Long enough for every section to have come back. Six seconds was not,
        // and the report then described a dialog that was still filling in.
        const int wait =
            qEnvironmentVariableIntValue("LEOLINK_DIALOG_TEST") > 1
                ? qEnvironmentVariableIntValue("LEOLINK_DIALOG_TEST") * 1000
                : 15000;
        QTimer::singleShot(wait, &app, [dialog] {
            dialog->reportForTesting();
            // Deleted, so the session goes back. A test that leaks one is a
            // test that makes the next run fail.
            delete dialog;
            QApplication::quit();
        });
        return QApplication::exec();
    }

    // LEOLINK_TALK_TEST=<host>|<file> sends one clip through the real code path
    // and reports what happened. Pointed at a silent file it proves the whole
    // chain — handshake, encoder, RTP framing — without making a sound in
    // somebody's house.
    if (qEnvironmentVariableIsSet("LEOLINK_TALK_TEST")) {
        const QStringList parts =
            qEnvironmentVariable("LEOLINK_TALK_TEST").split(QLatin1Char('|'));
        if (parts.size() != 2) {
            std::fprintf(stderr, "LEOLINK_TALK_TEST=<host>|<file>\n");
            return 2;
        }
        leolink::CameraConfig subject;
        for (const leolink::CameraConfig &camera : config.active()) {
            if (camera.host == parts.at(0))
                subject = camera;
        }
        if (subject.host.isEmpty()) {
            std::fprintf(stderr, "no camera configured at %s\n",
                         qPrintable(parts.at(0)));
            return 2;
        }
        auto *talk = new leolink::TalkSession(&app);
        QObject::connect(talk, &leolink::TalkSession::ready, [] {
            std::fprintf(stderr, "backchannel open\n");
        });
        QObject::connect(talk, &leolink::TalkSession::finished, &app, [&app] {
            std::fprintf(stderr, "finished\n");
            QApplication::quit();
        });
        QObject::connect(talk, &leolink::TalkSession::failed, &app,
                         [&app](const QString &why) {
                             std::fprintf(stderr, "failed: %s\n", qPrintable(why));
                             QApplication::quit();
                         });
        talk->start(subject, parts.at(1));
        QTimer::singleShot(30000, &app, &QApplication::quit);
        return QApplication::exec();
    }

    installSignalHandling(&app);

    int result = 0;
    {
        leolink::MainWindow window;
        window.show();
        result = QApplication::exec();
    }
    // Scoped on purpose: the window is destroyed *here*, while the application
    // object is still alive. Its destructor logs every camera session out, and
    // that needs an event loop to run in — which QEventLoop can still provide
    // after exec() has returned, but only for as long as there is a
    // QApplication.

    LEO_INFO(App, QString(), QStringLiteral("Stopped"));
    leolink::Log::stop();
    return result;
}
