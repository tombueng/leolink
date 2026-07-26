#include "Recorder.h"

#include <csignal>

#include <QFileInfo>
#include <QProcess>
#include <QStandardPaths>

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
        emit failed(tr("ffmpeg is not installed, so recording is unavailable."));
        return false;
    }

    const QString url = camera.streamUrl();
    if (url.isEmpty()) {
        emit failed(tr("No stream address for %1.").arg(camera.label()));
        return false;
    }

    m_path = path;
    m_process = new QProcess(this);

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

    connect(m_process, &QProcess::errorOccurred, this,
            [this](QProcess::ProcessError) {
                emit failed(tr("Recording failed: %1")
                                .arg(m_process ? m_process->errorString()
                                               : QString()));
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
                    emit failed(tr("Recording produced no data (ffmpeg exit %1).")
                                    .arg(exitCode));
                    emit stopped(QString());
                    return;
                }
                emit stopped(finished);
            });

    m_process->start(ffmpeg, args);
    if (!m_process->waitForStarted(5000)) {
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
