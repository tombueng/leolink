#include "MotionDetector.h"

#include "Log.h"

#include <cstdlib>

#include <QProcess>
#include <QStandardPaths>

#include "ProcessUtil.h"

#include "Config.h"

namespace leolink {

namespace {

constexpr int kWidth = 160;
constexpr int kHeight = 90;
constexpr int kFrameBytes = kWidth * kHeight;   // one byte per pixel, greyscale
constexpr int kFramesPerSecond = 5;

QString ffmpegPath()
{
    static const QString path =
        QStandardPaths::findExecutable(QStringLiteral("ffmpeg"));
    return path;
}

} // namespace

MotionDetector::MotionDetector(QObject *parent) : QObject(parent) {}

MotionDetector::~MotionDetector()
{
    stop();
}

bool MotionDetector::available()
{
    return !ffmpegPath().isEmpty();
}

bool MotionDetector::isRunning() const
{
    return m_process && m_process->state() != QProcess::NotRunning;
}

void MotionDetector::start(const CameraConfig &camera, const QString &mask,
                           int sensitivity, int minimumArea)
{
    stop();

    const QString ffmpeg = ffmpegPath();
    if (ffmpeg.isEmpty()) {
        LEO_ERROR(Motion, camera.label(),
                  QStringLiteral("ffmpeg not found in PATH — detection here is "
                                 "not possible"));
        emit failed(tr("ffmpeg is not installed, so motion detection is "
                       "unavailable."));
        return;
    }

    // Sensitivity is offered as 1…10 in the interface because "how much must a
    // pixel change" means nothing to anyone. Higher sensitivity means a smaller
    // change is enough: 10 → 6, 1 → 60.
    m_pixelThreshold = qBound(4, 66 - qBound(1, sensitivity, 10) * 6, 80);
    m_areaThreshold = qBound(0.001, minimumArea / 1000.0, 0.5);

    // Expand the per-cell mask to per-pixel once, so the hot loop is a plain
    // multiply rather than a division per pixel.
    m_mask = QByteArray(kFrameBytes, char(1));
    if (mask.size() == kZoneCount) {
        for (int y = 0; y < kHeight; ++y) {
            const int cellRow = y * kZoneRows / kHeight;
            for (int x = 0; x < kWidth; ++x) {
                const int cellCol = x * kZoneColumns / kWidth;
                const bool watch =
                    mask.at(cellRow * kZoneColumns + cellCol) != QLatin1Char('0');
                m_mask[y * kWidth + x] = char(watch ? 1 : 0);
            }
        }
    }

    m_stopping = false;
    m_previous.clear();
    m_buffer.clear();
    m_hits = m_misses = 0;
    m_active = false;
    m_level = 0.0;

    // Always the sub stream: analysing 640x360 costs a fraction of the main
    // stream and the answer is the same. A camera configured for main-stream
    // viewing still gets watched cheaply.
    CameraConfig analysis = camera;
    if (analysis.transport != QLatin1String("custom"))
        analysis.stream = QStringLiteral("sub");
    const QString url = analysis.streamUrl();
    if (url.isEmpty()) {
        emit failed(tr("No stream address for %1.").arg(camera.label()));
        return;
    }

    m_process = new QProcess(this);
    dieWithParent(m_process);
    QStringList args{
        QStringLiteral("-nostdin"),
        QStringLiteral("-loglevel"), QStringLiteral("error"),
    };
    args += rtspTransportArgs(url);
    args += QStringList{
        QStringLiteral("-i"), url,
        QStringLiteral("-an"),
        QStringLiteral("-vf"),
        QStringLiteral("fps=%1,scale=%2:%3,format=gray")
            .arg(kFramesPerSecond).arg(kWidth).arg(kHeight),
        QStringLiteral("-f"), QStringLiteral("rawvideo"),
        QStringLiteral("-"),
    };

    connect(m_process, &QProcess::readyReadStandardOutput,
            this, &MotionDetector::consume);
    connect(m_process, &QProcess::errorOccurred, this, [this] {
        // Not while we are the ones ending it. Shutting down killed ffmpeg and
        // then reported the kill as a fault, which is a log crying wolf at
        // precisely the moment somebody reading it wants to trust it.
        if (m_stopping)
            return;
        const QString reason = m_process ? m_process->errorString() : QString();
        LEO_WARN(Motion, m_label, QStringLiteral("ffmpeg failed: %1").arg(reason));
        emit failed(tr("Motion detection stopped: %1").arg(reason));
    });
    // ffmpeg's own complaints — a refused connection, an unsupported codec —
    // are the reason detection silently does nothing on some cameras.
    connect(m_process, &QProcess::readyReadStandardError, this, [this] {
        if (!m_process)
            return;
        const QString text =
            QString::fromUtf8(m_process->readAllStandardError()).trimmed();
        if (!text.isEmpty())
            LEO_WARN(Motion, m_label, QStringLiteral("ffmpeg: %1").arg(text));
    });

    m_label = camera.label();
    LEO_INFO(Motion, m_label,
             QStringLiteral("Watching %1 — threshold %2/255 per pixel, %3 % of "
                            "the area, %4 zone(s) masked out")
                 .arg(url).arg(m_pixelThreshold)
                 .arg(m_areaThreshold * 100.0, 0, 'f', 1)
                 .arg(mask.size() == kZoneCount
                          ? mask.count(QLatin1Char('0')) : 0));

    m_process->start(ffmpeg, args);
    if (!m_process->waitForStarted(5000)) {
        LEO_ERROR(Motion, m_label, QStringLiteral("ffmpeg did not start"));
        emit failed(tr("Could not start ffmpeg for motion detection."));
        m_process->deleteLater();
        m_process = nullptr;
    }
}

void MotionDetector::stop()
{
    m_stopping = true;
    if (!m_process)
        return;
    m_process->kill();          // no container to finalise here
    m_process->waitForFinished(2000);
    m_process->deleteLater();
    m_process = nullptr;

    if (m_active) {
        m_active = false;
        emit motionChanged(false);
    }
}

void MotionDetector::consume()
{
    if (!m_process)
        return;

    m_buffer += m_process->readAllStandardOutput();

    // ffmpeg writes a continuous stream; carve it into whole frames.
    while (m_buffer.size() >= kFrameBytes) {
        analyse(m_buffer.left(kFrameBytes));
        m_buffer.remove(0, kFrameBytes);
    }

    // If analysis ever falls behind the pipe, drop the backlog rather than
    // growing without bound — old frames are worthless for "is something
    // moving now".
    if (m_buffer.size() > kFrameBytes * 4)
        m_buffer.clear();
}

void MotionDetector::analyse(const QByteArray &frame)
{
    if (m_previous.size() != frame.size()) {
        m_previous = frame;
        return;                 // nothing to compare the first frame against
    }

    const auto *now = reinterpret_cast<const unsigned char *>(frame.constData());
    const auto *before =
        reinterpret_cast<const unsigned char *>(m_previous.constData());
    const auto *mask =
        reinterpret_cast<const unsigned char *>(m_mask.constData());

    int watched = 0;
    int changed = 0;
    for (int i = 0; i < kFrameBytes; ++i) {
        if (!mask[i])
            continue;
        ++watched;
        if (std::abs(int(now[i]) - int(before[i])) > m_pixelThreshold)
            ++changed;
    }
    m_previous = frame;

    if (watched == 0)           // every zone switched off
        return;

    m_level = double(changed) / double(watched);
    emit levelChanged(m_level);

    // Asymmetric hysteresis: quick to notice, slow to forget. Motion that
    // stops for half a second is the same event, not two.
    if (m_level >= m_areaThreshold) {
        m_misses = 0;
        if (!m_active && ++m_hits >= m_hitsToTrigger) {
            m_active = true;
            LEO_INFO(Motion, m_label,
                     QStringLiteral("Motion here: %1 %% of the watched area "
                                    "changed")
                         .arg(m_level * 100.0, 0, 'f', 2));
            emit motionChanged(true);
        }
    } else {
        m_hits = 0;
        if (m_active && ++m_misses >= m_missesToClear) {
            m_active = false;
            LEO_INFO(Motion, m_label, QStringLiteral("Motion ended"));
            emit motionChanged(false);
        }
    }
}

} // namespace leolink
