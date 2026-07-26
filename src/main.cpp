#include <clocale>

#include <QApplication>
#include <QCommandLineParser>
#include <QIcon>
#include <QLibraryInfo>
#include <QLocale>
#include <QTranslator>

#include "Baichuan.h"
#include "Config.h"
#include "MainWindow.h"

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
    if (qEnvironmentVariableIsSet("QT_QPA_PLATFORM"))
        return;
    if (qEnvironmentVariableIsSet("WAYLAND_DISPLAY") &&
        qEnvironmentVariableIsSet("DISPLAY")) {
        qputenv("QT_QPA_PLATFORM", "xcb");
    }
}

} // namespace

int main(int argc, char *argv[])
{
    selectPlatform();

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
    const leolink::Config config = leolink::Config::load();
    const QLocale locale = config.language == QLatin1String("system")
                               ? QLocale()
                               : QLocale(config.language);
    QLocale::setDefault(locale);

    // Qt's own strings first (buttons in standard dialogs, and so on) …
    QTranslator qtTranslator;
    if (qtTranslator.load(locale, QStringLiteral("qt"), QStringLiteral("_"),
                          QLibraryInfo::path(QLibraryInfo::TranslationsPath)))
        QApplication::installTranslator(&qtTranslator);

    // … then ours, which is compiled into the binary.
    QTranslator appTranslator;
    if (appTranslator.load(locale, QStringLiteral("leolink"),
                           QStringLiteral("_"), QStringLiteral(":/i18n")))
        QApplication::installTranslator(&appTranslator);

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
    const QCommandLineOption bcUser(QStringList{QStringLiteral("user")},
                                    QStringLiteral("User name for the probes."),
                                    QStringLiteral("user"),
                                    QStringLiteral("admin"));
    const QCommandLineOption bcPass(QStringList{QStringLiteral("password")},
                                    QStringLiteral("Password for the probes."),
                                    QStringLiteral("password"));
    parser.addOption(bcTest);
    parser.addOption(bcUid);
    parser.addOption(bcUser);
    parser.addOption(bcPass);
    parser.process(app);

    // Diagnostic modes: no window, just protocol output on the terminal.
    if (parser.isSet(bcTest)) {
        return leolink::runBaichuanProbe(parser.value(bcTest),
                                         parser.value(bcUser),
                                         parser.value(bcPass));
    }
    if (parser.isSet(bcUid)) {
        return leolink::runP2PProbe(parser.value(bcUid),
                                    parser.value(bcUser),
                                    parser.value(bcPass));
    }

    leolink::MainWindow window;
    window.show();
    return QApplication::exec();
}
