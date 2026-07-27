// Diagnostics: one log everybody can read, and nobody leaks a password with.
#pragma once

#include <atomic>

#include <QObject>
#include <QString>
#include <QStringList>

namespace leolink {

/// The application log.
///
/// This exists because a camera client fails in other people's houses. A bug
/// report that says "the picture froze" cannot be acted on; the same report
/// with a log showing the camera stopped answering, or the decoder falling
/// back to software, or a token expiring mid-stream, usually answers itself.
///
/// Three things make that workable in practice:
///
/// * **Levels.** Errors, warnings and a thin line of normal activity are always
///   recorded — a user hitting a problem should not have to reproduce it with a
///   flag set. Debug detail is off by default and switched on in the settings,
///   because it is verbose enough to matter on a machine running for weeks.
///
/// * **Categories.** Video, HTTP API, ONVIF and detection all fail in ways that
///   look identical from outside ("no picture"). Tagging every line says which
///   half of the program was talking at the time.
///
/// * **Redaction.** The log is meant to be pasted into a bug report, so it must
///   never contain a camera password, a session token or a full P2P id. Every
///   line passes through a filter before it is written, and secrets are
///   registered with the log rather than trusted not to appear.
///
/// Thread-safe: detection and the Baichuan connection log from their own
/// threads.
class Log : public QObject {
    Q_OBJECT

public:
    enum class Level { Error, Warning, Info, Debug };

    /// Which part of the program is speaking. Kept coarse on purpose: finer
    /// categories are only useful to somebody who already knows the code, and
    /// the point of this is to be readable by somebody who does not.
    enum class Category {
        App,        ///< startup, shutdown, configuration
        Api,        ///< the camera's HTTP CGI interface
        Stream,     ///< video: mpv, decoding, reconnects
        Onvif,      ///< event subscriptions
        Motion,     ///< detection done here
        Record,     ///< writing video to disk
        Event,      ///< what happens when something is detected
        Network,    ///< discovery, Wi-Fi, webhooks, MQTT
        Baichuan,   ///< Reolink's own protocol
        Ui,
        Qt,         ///< anything Qt or a plugin logged by itself
    };

    static Log &instance();

    /// Starts writing to ~/.local/share/leolink/leolink.log and takes over
    /// Qt's own message handler.
    static void start();

    /// Puts Qt's own message handler back and stops accepting lines. Called on
    /// the way out, so nothing logged during shutdown reaches state that is
    /// being torn down.
    static void stop();

    /// Debug detail on or off. Persisted in the configuration; the environment
    /// variable LEOLINK_DEBUG=1 forces it on for one run, which is how you get
    /// a log out of a build that will not start far enough to show a dialog.
    static void setDebugEnabled(bool enabled);
    static bool debugEnabled() { return s_debug; }

    /// Never log this string. Passwords, tokens and anything else that would
    /// turn a helpful log into a security incident. Registering is deliberate:
    /// a filter that only guesses at what looks secret will eventually guess
    /// wrong, and it only has to be wrong once.
    static void addSecret(const QString &secret);
    static void clearSecrets();

    /// A fixed fact about this machine, shown at the top of the report:
    /// OpenGL renderer, mpv version, the decoder actually in use.
    static void setFact(const QString &key, const QString &value);

    static void write(Level level, Category category, const QString &source,
                      const QString &text);

    /// Everything worth knowing about this installation, ready to paste into a
    /// bug report. Runs a couple of processes (ffmpeg), so it is not something
    /// to call in a loop.
    static QString report();

    /// The lines held in memory — enough for the diagnostics window without
    /// re-reading the file, and what gets attached to a report.
    QStringList recent() const;

    /// Hides a host that is reachable from outside the user's network, and
    /// leaves a private address alone. Used wherever a host reaches the log.
    static QString maskHost(const QString &host);

    static QString logPath();
    static QString previousLogPath();

    static QString categoryName(Category category);
    static QString levelName(Level level);
    /// Translated for the diagnostics window's filter; categoryName() stays
    /// English so a log file reads the same whoever sent it.
    static QString categoryLabel(Category category);

signals:
    /// A line was written. Emitted on the thread that logged it, so connect
    /// queued from the GUI.
    void lineWritten(const QString &line);

private:
    Log() = default;

    void writeLine(Level level, Category category, const QString &source,
                   const QString &text);
    void rotateIfNeeded();
    QString redact(QString text) const;

    static bool s_debug;
    /// False before start() and after stop(); write() checks it first.
    static std::atomic_bool s_running;
};

} // namespace leolink

// Debug lines are guarded so that building the string costs nothing when
// detail is switched off — which is most of the time, on most machines. The
// category is written bare at the call site (LEO_DEBUG(Stream, …)); the macro
// qualifies it, which keeps logging statements short enough to be worth adding.
#define LEO_LOG_AT(level, category, source, text)                              \
    ::leolink::Log::write(::leolink::Log::Level::level,                        \
                          ::leolink::Log::Category::category, source, text)

#define LEO_ERROR(category, source, text) LEO_LOG_AT(Error, category, source, text)
#define LEO_WARN(category, source, text)  LEO_LOG_AT(Warning, category, source, text)
#define LEO_INFO(category, source, text)  LEO_LOG_AT(Info, category, source, text)
#define LEO_DEBUG(category, source, text)                                      \
    do {                                                                       \
        if (::leolink::Log::debugEnabled())                                    \
            LEO_LOG_AT(Debug, category, source, text);                         \
    } while (false)
