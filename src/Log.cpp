#include "Log.h"

#include <cstdio>

#include <QCoreApplication>
#include <QDateTime>
#include <QDir>
#include <QFile>
#include <QGuiApplication>
#include <QHostAddress>
#include <QLocale>
#include <QMap>
#include <QMutex>
#include <QMutexLocker>
#include <QProcess>
#include <QRegularExpression>
#include <QStandardPaths>
#include <QSysInfo>
#include <QThread>
#include <QUrl>

#ifndef LEOLINK_VERSION
#define LEOLINK_VERSION "0.0.0"
#endif

namespace leolink {

namespace {

/// Everything the log owns, deliberately never destroyed.
///
/// It used to be a set of file-scope globals, and that crashed on the way out.
/// Qt's own message handler is still installed while static destructors run,
/// so anything logged during shutdown — by Qt, by a plugin, by a driver —
/// reached a mutex and a QFile that had already been torn down. The symptoms
/// were "QRegularExpression object is invalid" followed by a double free, and
/// they only showed up inside the Flatpak, where the runtime happens to log
/// something late. On the host the same bug sat there silently.
///
/// A leaked singleton has no destruction order to get wrong. It costs one
/// allocation that is never freed, which for a process-lifetime log is the
/// correct trade.
struct State {
    QMutex mutex;
    QFile file;
    QStringList ring;
    QStringList secrets;
    QMap<QString, QString> facts;
    bool started = false;
};

State &state()
{
    static State *instance = new State;
    return *instance;
}

/// How many lines the diagnostics window can show without re-reading the file.
constexpr int kRingLines = 3000;

/// Debug logging is roughly twenty times as chatty, so it gets a bigger file.
/// Both are small enough that a wall display left running for a month cannot
/// fill its disk with diagnostics.
qint64 maxFileSize()
{
    return Log::debugEnabled() ? 8 * 1024 * 1024 : 2 * 1024 * 1024;
}

QString directory()
{
    return QStandardPaths::writableLocation(QStandardPaths::AppDataLocation);
}

/// Private addresses are shown as they are: they identify nothing outside the
/// house, and knowing whether a camera is at .77 or .78 is often the whole
/// diagnosis. Anything routable is hidden, because that plus a leaked password
/// would be a camera on the internet with a stranger's eyes on it.
} // namespace

QString Log::maskHost(const QString &host)
{
    const QHostAddress address(host);
    if (!address.isNull() &&
        (address.isLoopback() || address.isLinkLocal() ||
         address.isInSubnet(QHostAddress(QStringLiteral("10.0.0.0")), 8) ||
         address.isInSubnet(QHostAddress(QStringLiteral("172.16.0.0")), 12) ||
         address.isInSubnet(QHostAddress(QStringLiteral("192.168.0.0")), 16))) {
        return host;
    }
    if (host.endsWith(QLatin1String(".local")) ||
        host.compare(QLatin1String("localhost"), Qt::CaseInsensitive) == 0) {
        return host;
    }
    return QStringLiteral("«remote host»");
}

namespace {

QString osRelease()
{
    QFile file(QStringLiteral("/etc/os-release"));
    if (!file.open(QIODevice::ReadOnly | QIODevice::Text))
        return QStringLiteral("unknown");
    while (!file.atEnd()) {
        const QString line = QString::fromUtf8(file.readLine()).trimmed();
        if (line.startsWith(QLatin1String("PRETTY_NAME="))) {
            QString value = line.mid(12);
            if (value.startsWith('"') && value.endsWith('"'))
                value = value.mid(1, value.size() - 2);
            return value;
        }
    }
    return QStringLiteral("unknown");
}

/// First line of `<program> -version`, or a note that it is missing. Which
/// ffmpeg is installed decides whether recording and local motion detection
/// work at all, and "no ffmpeg" is a common enough cause to be worth asking
/// about before anything else.
QString toolVersion(const QString &program)
{
    QProcess process;
    process.start(program, {QStringLiteral("-version")});
    if (!process.waitForStarted(1500))
        return QStringLiteral("not installed");
    if (!process.waitForFinished(3000)) {
        process.kill();
        return QStringLiteral("did not answer");
    }
    const QString output = QString::fromUtf8(process.readAllStandardOutput());
    const QString first = output.section('\n', 0, 0).trimmed();
    return first.isEmpty() ? QStringLiteral("unknown") : first;
}

void writeToStderr(const QString &line)
{
    // qInfo and friends are compiled out of release builds, so this goes
    // straight to the stream. Anyone who started leolink from a terminal
    // expects to see its complaints there.
    std::fprintf(stderr, "%s\n", qPrintable(line));
}

} // namespace

bool Log::s_debug = false;
std::atomic_bool Log::s_running{false};

Log &Log::instance()
{
    static Log log;
    return log;
}

QString Log::logPath()
{
    return directory() + QStringLiteral("/leolink.log");
}

QString Log::previousLogPath()
{
    return directory() + QStringLiteral("/leolink.log.1");
}

void Log::start()
{
    {
        QMutexLocker locker(&state().mutex);
        if (state().started)
            return;
        state().started = true;
        QDir().mkpath(directory());
        state().file.setFileName(logPath());
        if (!state().file.open(QIODevice::Append | QIODevice::Text)) {
            // A read-only home directory or a full disk. Say so once on the
            // terminal: silently losing the log is how a diagnosable problem
            // becomes an undiagnosable one.
            writeToStderr(QStringLiteral("leolink: cannot write %1: %2")
                              .arg(logPath(), state().file.errorString()));
        }
    }

    if (qEnvironmentVariableIntValue("LEOLINK_DEBUG") > 0)
        s_debug = true;
    s_running = true;

    // Qt, its platform plugins and the Wayland stack all complain through
    // qWarning. Those complaints are frequently the actual explanation — a
    // missing plugin, a rejected surface, a broken GL context — and before this
    // they went to a terminal nobody was looking at.
    qInstallMessageHandler([](QtMsgType type, const QMessageLogContext &context,
                              const QString &message) {
        Level level = Level::Info;
        switch (type) {
        case QtDebugMsg:    level = Level::Debug; break;
        case QtInfoMsg:     level = Level::Info; break;
        case QtWarningMsg:  level = Level::Warning; break;
        case QtCriticalMsg:
        case QtFatalMsg:    level = Level::Error; break;
        }
        const QString source = context.category && *context.category
                                   ? QString::fromUtf8(context.category)
                                   : QString();
        Log::write(level, Category::Qt, source, message);
    });

    LEO_INFO(App, QString(),
             QStringLiteral("──── leolink %1 started ────")
                 .arg(QStringLiteral(LEOLINK_VERSION)));
    LEO_INFO(App, QString(),
             QStringLiteral("%1, Qt %2, %3")
                 .arg(osRelease(), QString::fromLatin1(qVersion()),
                      QGuiApplication::platformName().isEmpty()
                          ? QStringLiteral("no GUI")
                          : QGuiApplication::platformName()));
}

void Log::stop()
{
    // Order matters: stop the handler first, so nothing new arrives while the
    // last lines are being flushed.
    qInstallMessageHandler(nullptr);
    s_running = false;
    QMutexLocker locker(&state().mutex);
    if (state().file.isOpen())
        state().file.flush();
}

void Log::setDebugEnabled(bool enabled)
{
    if (enabled == s_debug)
        return;
    s_debug = enabled;
    LEO_INFO(App, QString(),
             enabled ? QStringLiteral("Detailed logging on")
                     : QStringLiteral("Detailed logging off"));
}

void Log::addSecret(const QString &secret)
{
    // Anything shorter than four characters would match ordinary words and
    // turn the log into a field of markers. A password that short is its own
    // problem, and hiding it would not fix that.
    if (secret.size() < 4)
        return;
    QMutexLocker locker(&state().mutex);
    if (!state().secrets.contains(secret))
        state().secrets.append(secret);
}

void Log::clearSecrets()
{
    QMutexLocker locker(&state().mutex);
    state().secrets.clear();
}

void Log::setFact(const QString &key, const QString &value)
{
    QMutexLocker locker(&state().mutex);
    state().facts.insert(key, value);
}

QString Log::categoryName(Category category)
{
    switch (category) {
    case Category::App:      return QStringLiteral("app");
    case Category::Api:      return QStringLiteral("api");
    case Category::Stream:   return QStringLiteral("stream");
    case Category::Onvif:    return QStringLiteral("onvif");
    case Category::Motion:   return QStringLiteral("motion");
    case Category::Record:   return QStringLiteral("record");
    case Category::Event:    return QStringLiteral("event");
    case Category::Network:  return QStringLiteral("network");
    case Category::Baichuan: return QStringLiteral("baichuan");
    case Category::Ui:       return QStringLiteral("ui");
    case Category::Qt:       return QStringLiteral("qt");
    }
    return QStringLiteral("app");
}

QString Log::categoryLabel(Category category)
{
    switch (category) {
    case Category::App:      return tr("Application");
    case Category::Api:      return tr("Camera API");
    case Category::Stream:   return tr("Video");
    case Category::Onvif:    return tr("ONVIF events");
    case Category::Motion:   return tr("Detection");
    case Category::Record:   return tr("Recording");
    case Category::Event:    return tr("Event actions");
    case Category::Network:  return tr("Network");
    case Category::Baichuan: return tr("Baichuan");
    case Category::Ui:       return tr("User interface");
    case Category::Qt:       return tr("Qt");
    }
    return tr("Application");
}

QString Log::levelName(Level level)
{
    switch (level) {
    case Level::Error:   return QStringLiteral("ERROR");
    case Level::Warning: return QStringLiteral("WARN ");
    case Level::Info:    return QStringLiteral("INFO ");
    case Level::Debug:   return QStringLiteral("DEBUG");
    }
    return QStringLiteral("INFO ");
}

QString Log::redact(QString text) const
{
    // Caller holds the mutex: state().secrets is read here.
    for (const QString &secret : std::as_const(state().secrets))
        text.replace(secret, QStringLiteral("«hidden»"));

    // Session tokens appear in every API URL. They expire, but a log is often
    // read minutes after it was taken, and a live token is a working key to
    // the camera.
    static const QRegularExpression token(
        QStringLiteral("(?i)\\btoken=[^&\\s\"'})\\],;]+"));
    text.replace(token, QStringLiteral("token=«token»"));

    // password=…, "password": "…", pwd=… — the shapes this API and its cousins
    // actually use.
    static const QRegularExpression password(QStringLiteral(
        "(?i)\\b(password|passwd|pwd|secret)(\"?\\s*[:=]\\s*\"?)([^&\"'\\s,}]+)"));
    text.replace(password, QStringLiteral("\\1\\2«hidden»"));

    // rtsp://user:password@host — the credentials live in the URL itself.
    static const QRegularExpression urlCredentials(
        QStringLiteral("(?i)\\b([a-z][a-z0-9+.-]*://)([^:/@\\s]+):([^@/\\s]+)@"));
    text.replace(urlCredentials, QStringLiteral("\\1\\2:«hidden»@"));

    return text;
}

void Log::write(Level level, Category category, const QString &source,
                const QString &text)
{
    if (!s_running)
        return;   // before start(), or after stop() during shutdown
    if (level == Level::Debug && !s_debug)
        return;
    instance().writeLine(level, category, source, text);
}

void Log::writeLine(Level level, Category category, const QString &source,
                    const QString &text)
{
    QString line;
    {
        QMutexLocker locker(&state().mutex);

        // %-8s on the category and a fixed-width level keep the columns lined
        // up, which is the difference between skimming a log and reading it.
        line = QStringLiteral("%1 %2 %3 %4%5")
                   .arg(QDateTime::currentDateTime().toString(
                            QStringLiteral("yyyy-MM-dd HH:mm:ss.zzz")),
                        levelName(level),
                        categoryName(category).leftJustified(8),
                        source.isEmpty() ? QString()
                                         : QStringLiteral("[%1] ").arg(source),
                        text);
        line = redact(line);

        if (state().file.isOpen()) {
            rotateIfNeeded();
            state().file.write(line.toUtf8());
            state().file.write("\n");
            // Flushed every line on purpose. A log that loses its last page is
            // useless precisely when it matters, because the interesting thing
            // is usually whatever happened just before the crash.
            state().file.flush();
        }

        state().ring.append(line);
        while (state().ring.size() > kRingLines)
            state().ring.removeFirst();
    }

    if (level == Level::Error || level == Level::Warning || s_debug)
        writeToStderr(line);

    emit lineWritten(line);
}

void Log::rotateIfNeeded()
{
    // Caller holds the mutex.
    if (state().file.size() <= maxFileSize())
        return;

    state().file.close();
    const QString current = logPath();
    const QString previous = previousLogPath();
    QFile::remove(previous);
    QFile::rename(current, previous);
    state().file.setFileName(current);
    if (!state().file.open(QIODevice::Append | QIODevice::Text))
        writeToStderr(QStringLiteral("leolink: cannot reopen %1").arg(current));
}

QStringList Log::recent() const
{
    QMutexLocker locker(&state().mutex);
    return state().ring;
}

QString Log::report()
{
    QMap<QString, QString> facts;
    {
        QMutexLocker locker(&state().mutex);
        facts = state().facts;
    }

    QStringList lines;
    lines << QStringLiteral("leolink %1").arg(QStringLiteral(LEOLINK_VERSION))
          << QStringLiteral("Report taken %1")
                 .arg(QDateTime::currentDateTime().toString(Qt::ISODate))
          << QString()
          << QStringLiteral("System")
          << QStringLiteral("  OS              %1").arg(osRelease())
          << QStringLiteral("  Kernel          %1 %2")
                 .arg(QSysInfo::kernelType(), QSysInfo::kernelVersion())
          << QStringLiteral("  Architecture    %1").arg(QSysInfo::currentCpuArchitecture())
          << QStringLiteral("  Qt              %1 (built against %2)")
                 .arg(QString::fromLatin1(qVersion()),
                      QStringLiteral(QT_VERSION_STR))
          << QStringLiteral("  Platform plugin %1")
                 .arg(QGuiApplication::platformName())
          << QStringLiteral("  GL integration  %1")
                 .arg(qEnvironmentVariable("QT_XCB_GL_INTEGRATION",
                                           QStringLiteral("default")))
          << QStringLiteral("  Session         %1 / %2")
                 .arg(qEnvironmentVariable("XDG_SESSION_TYPE",
                                           QStringLiteral("unknown")),
                      qEnvironmentVariable("XDG_CURRENT_DESKTOP",
                                           QStringLiteral("unknown")))
          << QStringLiteral("  Locale          %1").arg(QLocale().name())
          << QStringLiteral("  ffmpeg          %1")
                 .arg(toolVersion(QStringLiteral("ffmpeg")))
          << QStringLiteral("  Debug logging   %1")
                 .arg(debugEnabled() ? QStringLiteral("on") : QStringLiteral("off"));

    if (!facts.isEmpty()) {
        lines << QString() << QStringLiteral("Video");
        for (auto it = facts.cbegin(); it != facts.cend(); ++it)
            lines << QStringLiteral("  %1%2").arg(it.key().leftJustified(16),
                                                  it.value());
    }
    return lines.join('\n');
}

} // namespace leolink
