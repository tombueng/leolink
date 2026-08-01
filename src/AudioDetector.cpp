#include "AudioDetector.h"

#include "Log.h"

#include <cmath>

#include <QProcess>
#include <QStandardPaths>

#include "ProcessUtil.h"

#include "Config.h"

namespace leolink {

namespace {

constexpr int kSampleRate = 8000;
constexpr int kWindowMs = 250;
/// 16-bit mono, so two bytes a sample.
constexpr int kWindowBytes = kSampleRate * kWindowMs / 1000 * 2;
constexpr double kSilenceDb = -100.0;

QString ffmpegPath()
{
    static const QString path =
        QStandardPaths::findExecutable(QStringLiteral("ffmpeg"));
    return path;
}

} // namespace

AudioDetector::AudioDetector(QObject *parent) : QObject(parent) {}

AudioDetector::~AudioDetector()
{
    stop();
}

bool AudioDetector::available()
{
    return !ffmpegPath().isEmpty();
}

bool AudioDetector::isRunning() const
{
    return m_process && m_process->state() != QProcess::NotRunning;
}

void AudioDetector::start(const CameraConfig &camera, double thresholdDb,
                          int holdSeconds)
{
    stop();

    const QString ffmpeg = ffmpegPath();
    if (ffmpeg.isEmpty()) {
        emit failed(tr("ffmpeg is not installed, so sound detection is "
                       "unavailable."));
        return;
    }

    m_thresholdDb = qBound(-90.0, thresholdDb, 0.0);
    m_holdWindows = qMax(1, holdSeconds * 1000 / kWindowMs);
    m_quietWindows = 0;
    m_active = false;
    m_levelDb = kSilenceDb;
    m_buffer.clear();

    CameraConfig analysis = camera;
    if (analysis.transport != QLatin1String("custom"))
        analysis.stream = QStringLiteral("sub");
    const QString url = analysis.streamUrl();
    if (url.isEmpty()) {
        emit failed(tr("No stream address for %1.").arg(camera.label()));
        return;
    }

    m_stopping = false;
    m_label = camera.label();
    m_process = new QProcess(this);
    dieWithParent(m_process);
    QStringList args{
        QStringLiteral("-nostdin"),
        QStringLiteral("-loglevel"), QStringLiteral("error"),
    };
    args += rtspTransportArgs(url);
    args += QStringList{
        QStringLiteral("-i"), url,
        QStringLiteral("-vn"),
        QStringLiteral("-ac"), QStringLiteral("1"),
        QStringLiteral("-ar"), QString::number(kSampleRate),
        QStringLiteral("-f"), QStringLiteral("s16le"),
        QStringLiteral("-"),
    };

    connect(m_process, &QProcess::readyReadStandardOutput,
            this, &AudioDetector::consume);
    connect(m_process, &QProcess::errorOccurred, this, [this] {
        if (m_stopping)
            return;   // we killed it; that is not a fault
        const QString reason = m_process ? m_process->errorString() : QString();
        LEO_WARN(Motion, m_label, QStringLiteral("ffmpeg failed: %1").arg(reason));
        emit failed(tr("Sound detection stopped: %1").arg(reason));
    });

    m_process->start(ffmpeg, args);
    if (!m_process->waitForStarted(5000)) {
        emit failed(tr("Could not start ffmpeg for sound detection."));
        m_process->deleteLater();
        m_process = nullptr;
    }
}

void AudioDetector::stop()
{
    m_stopping = true;
    if (!m_process)
        return;
    m_process->kill();
    m_process->waitForFinished(2000);
    m_process->deleteLater();
    m_process = nullptr;

    if (m_active) {
        m_active = false;
        emit soundChanged(false);
    }
}

void AudioDetector::consume()
{
    if (!m_process)
        return;

    m_buffer += m_process->readAllStandardOutput();
    while (m_buffer.size() >= kWindowBytes) {
        analyse(m_buffer.left(kWindowBytes));
        m_buffer.remove(0, kWindowBytes);
    }
    if (m_buffer.size() > kWindowBytes * 8)
        m_buffer.clear();   // never let a backlog build up
}

void AudioDetector::analyse(const QByteArray &window)
{
    const auto *samples = reinterpret_cast<const qint16 *>(window.constData());
    const int count = window.size() / 2;
    if (count == 0)
        return;

    // Root mean square, then to dBFS against a full-scale 16-bit sample.
    // RMS rather than peak: a single sharp click should not read the same as a
    // sustained noise.
    double sum = 0.0;
    for (int i = 0; i < count; ++i) {
        const double s = samples[i] / 32768.0;
        sum += s * s;
    }
    const double rms = std::sqrt(sum / count);
    m_levelDb = rms > 0.0 ? 20.0 * std::log10(rms) : kSilenceDb;
    emit levelChanged(m_levelDb);

    if (m_levelDb >= m_thresholdDb) {
        m_quietWindows = 0;
        if (!m_active) {
            m_active = true;
            emit soundChanged(true);
        }
    } else if (m_active && ++m_quietWindows >= m_holdWindows) {
        m_active = false;
        emit soundChanged(false);
    }
}

} // namespace leolink
