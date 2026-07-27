#include "Recorder.h"

#include "Log.h"

#include <csignal>

#include <QFileInfo>
#include <QProcess>
#include <QStandardPaths>

#include "ProcessUtil.h"

#include "Config.h"

namespace leolink {

namespace {

QString ffmpegPath()
{
    static const QString path = QStandardPaths::findExecutable(
        QStringLiteral("ffmpeg"));
    return path;
}

} // namespace

Recorder::Recorder(QObject *parent) : QObject(parent) {}

Recorder::~Recorder()
{
    if (isRecording())
        stop();
}

bool Recorder::available()
{
    return !ffmpegPath().isEmpty();
}

bool Recorder::isRecording() const
{
    return m_process && m_process->state() != QProcess::NotRunning;
}

bool Recorder::start(const CameraConfig &camera, const QString &path)
{
    if (isRecording())
        return false;

    const QString ffmpeg = ffmpegPath();
    if (ffmpeg.isEmpty()) {
        LEO_ERROR(Record, camera.label(),
                  QStringLiteral("ffmpeg not found in PATH — cannot record"));
        emit failed(tr("ffmpeg is not installed, so recording is unavailable."));
        return false;
    }

    const QString url = camera.streamUrl();
    if (url.isEmpty()) {
        emit failed(tr("No stream address for %1.").arg(camera.label()));
        return false;
    }

    m_path = path;
    m_stopping = false;
    m_process = new QProcess(this);
    dieWithParent(m_process);

    const QStringList args{
        QStringLiteral("-nostdin"),
        QStringLiteral("-loglevel"), QStringLiteral("error"),
        // TCP for the same reason the viewer uses it: UDP loses packets and a
        // recording with holes is worse than a slightly later one.
        QStringLiteral("-rtsp_transport"), QStringLiteral("tcp"),
        QStringLiteral("-i"), url,
        // Copy the packets through. No re-encoding means no quality loss and
        // almost no CPU, which is what makes recording several cameras at
        // once practical.
        QStringLiteral("-c"), QStringLiteral("copy"),
        // Matroska survives an abrupt end; MP4 needs its index written on
        // close and is worthless if the machine loses power mid-recording.
        QStringLiteral("-f"), QStringLiteral("matroska"),
        QStringLiteral("-y"), path,
    };

    m_label = camera.label();
    connect(m_process, &QProcess::errorOccurred, this,
            [this](QProcess::ProcessError) {
                // Silent while we are the ones ending it: stop() kills ffmpeg
                // if it ignores the polite request, and reporting that as a
                // failure would put a fault in the log where there is none.
                if (m_stopping)
                    return;
                const QString reason =
                    m_process ? m_process->errorString() : QString();
                LEO_WARN(Record, m_label,
                         QStringLiteral("ffmpeg failed: %1").arg(reason));
                emit failed(tr("Recording failed: %1").arg(reason));
            });
    // ffmpeg is told to be quiet unless something is wrong, so whatever comes
    // out of here is worth keeping: a refused stream, a codec the container
    // will not take, a directory that cannot be written.
    connect(m_process, &QProcess::readyReadStandardError, this, [this] {
        if (!m_process)
            return;
        const QString text =
            QString::fromUtf8(m_process->readAllStandardError()).trimmed();
        if (!text.isEmpty())
            LEO_WARN(Record, m_label, QStringLiteral("ffmpeg: %1").arg(text));
    });

    connect(m_process,
            QOverload<int, QProcess::ExitStatus>::of(&QProcess::finished), this,
            [this](int exitCode, QProcess::ExitStatus) {
                const QString finished = m_path;
                m_path.clear();
                if (m_process) {
                    m_process->deleteLater();
                    m_process = nullptr;
                }
                // ffmpeg exits non-zero when interrupted, which is the normal
                // way a recording ends here — only complain if nothing usable
                // was written.
                const QFileInfo info(finished);
                if (!info.exists() || info.size() == 0) {
                    LEO_ERROR(Record, m_label,
                              QStringLiteral("Recording %1 is empty (ffmpeg "
                                             "exit %2)")
                                  .arg(finished).arg(exitCode));
                    emit failed(tr("Recording produced no data (ffmpeg exit %1).")
                                    .arg(exitCode));
                    emit stopped(QString());
                    return;
                }
                LEO_INFO(Record, m_label,
                         QStringLiteral("Wrote %1 (%2 KiB)")
                             .arg(finished).arg(info.size() / 1024));
                emit stopped(finished);
            });

    LEO_INFO(Record, m_label,
             QStringLiteral("Recording %1 to %2").arg(url, path));
    m_process->start(ffmpeg, args);
    if (!m_process->waitForStarted(5000)) {
        LEO_ERROR(Record, m_label, QStringLiteral("ffmpeg did not start"));
        emit failed(tr("Could not start ffmpeg."));
        m_process->deleteLater();
        m_process = nullptr;
        m_path.clear();
        return false;
    }

    emit started(path);
    return true;
}

void Recorder::stop()
{
    if (!isRecording())
        return;
    m_stopping = true;

    // SIGINT, not kill: ffmpeg then writes the container's trailer and the
    // file is playable. Terminating it outright is what produced the
    // "file ended prematurely" recordings this class replaced.
    ::kill(static_cast<pid_t>(m_process->processId()), SIGINT);

    if (!m_process->waitForFinished(8000)) {
        // Only if it ignored the polite request.
        m_process->kill();
        m_process->waitForFinished(2000);
    }
}

} // namespace leolink
