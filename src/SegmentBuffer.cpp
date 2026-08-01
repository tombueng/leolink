#include "SegmentBuffer.h"

#include <csignal>

#include <QDir>
#include <QFileInfo>
#include <QProcess>
#include <QStandardPaths>
#include <QTemporaryFile>
#include <QTimer>

#include "Config.h"
#include "Log.h"
#include "ProcessUtil.h"

namespace leolink {

namespace {

QString ffmpegPath()
{
    static const QString path =
        QStandardPaths::findExecutable(QStringLiteral("ffmpeg"));
    return path;
}

/// Segments are named by the moment they start, which is the only reason the
/// buffer can answer "what did you have at 21:42" without opening a file.
const char *kStamp = "yyyyMMdd-HHmmss";
QString kPattern() { return QStringLiteral("seg-*.mkv"); }

} // namespace

SegmentBuffer::SegmentBuffer(QObject *parent) : QObject(parent)
{
    m_prune = new QTimer(this);
    m_prune->setInterval(30000);
    connect(m_prune, &QTimer::timeout, this, &SegmentBuffer::prune);

    m_restart = new QTimer(this);
    m_restart->setSingleShot(true);
    m_restart->setInterval(10000);
    connect(m_restart, &QTimer::timeout, this, [this] {
        if (m_camera)
            startProcess();
    });
}

SegmentBuffer::~SegmentBuffer()
{
    stop();
    delete m_camera;
}

bool SegmentBuffer::available()
{
    return !ffmpegPath().isEmpty();
}

bool SegmentBuffer::isRunning() const
{
    return m_process && m_process->state() != QProcess::NotRunning;
}

bool SegmentBuffer::start(const CameraConfig &camera, const Settings &settings)
{
    // Nothing to do if this is the same camera on the same terms. Settings
    // are re-applied on every change to the configuration, and tearing the
    // buffer down for an unrelated edit would punch a hole in the archive.
    if (isRunning() && m_camera && m_camera->id == camera.id &&
        m_camera->streamUrl() == camera.streamUrl() &&
        m_settings.directory == settings.directory &&
        m_settings.segmentSeconds == settings.segmentSeconds) {
        m_settings.retentionSeconds = settings.retentionSeconds;
        prune();
        return true;
    }

    stop();
    if (ffmpegPath().isEmpty()) {
        emit failed(tr("ffmpeg is not installed, so continuous recording is "
                       "unavailable."));
        return false;
    }
    if (camera.streamUrl().isEmpty()) {
        emit failed(tr("No stream address for %1.").arg(camera.label()));
        return false;
    }
    if (!QDir().mkpath(settings.directory)) {
        emit failed(tr("Cannot write to %1.").arg(settings.directory));
        return false;
    }

    delete m_camera;
    m_camera = new CameraConfig(camera);
    m_settings = settings;
    m_label = camera.label();

    startProcess();
    m_prune->start();
    prune();
    return isRunning();
}

void SegmentBuffer::startProcess()
{
    if (isRunning() || !m_camera)
        return;

    m_stopping = false;
    m_process = new QProcess(this);
    dieWithParent(m_process);

    // ffmpeg fills the stamp in itself, once per segment.
    const QString target =
        m_settings.directory + QStringLiteral("/seg-%Y%m%d-%H%M%S.mkv");

    const QString url = m_camera->streamUrl();
    QStringList args{
        QStringLiteral("-nostdin"),
        QStringLiteral("-loglevel"), QStringLiteral("error"),
    };
    args += rtspTransportArgs(url);
    args += QStringList{
        QStringLiteral("-i"), url,
        QStringLiteral("-c"), QStringLiteral("copy"),
        QStringLiteral("-f"), QStringLiteral("segment"),
        QStringLiteral("-segment_time"),
        QString::number(m_settings.segmentSeconds),
        QStringLiteral("-segment_format"), QStringLiteral("matroska"),
        // Segments are cut on key frames — ffmpeg's default when copying, and
        // what makes this work at all: a segment opening mid-GOP could not be
        // decoded from its start, which is precisely what a pre-recording is
        // made of. So segment_time is a target, not a promise, and the real
        // lengths follow the camera's key frame interval.
        //
        // Each segment starts at zero, which is what the concat demuxer wants
        // when the pieces are joined back together.
        QStringLiteral("-reset_timestamps"), QStringLiteral("1"),
        QStringLiteral("-strftime"), QStringLiteral("1"),
        target,
    };

    connect(m_process, &QProcess::readyReadStandardError, this, [this] {
        if (!m_process)
            return;
        const QString text =
            QString::fromUtf8(m_process->readAllStandardError()).trimmed();
        if (!text.isEmpty())
            LEO_WARN(Record, m_label,
                     QStringLiteral("buffer ffmpeg: %1").arg(text));
    });
    connect(m_process,
            QOverload<int, QProcess::ExitStatus>::of(&QProcess::finished), this,
            [this](int code, QProcess::ExitStatus) {
                if (m_process) {
                    m_process->deleteLater();
                    m_process = nullptr;
                }
                if (m_stopping)
                    return;
                // The camera went away, or the stream broke. Say so once and
                // try again on the timer; the archive has a hole either way,
                // and giving up entirely would make it a permanent one.
                LEO_WARN(Record, m_label,
                         QStringLiteral("Continuous recording stopped "
                                        "(ffmpeg exit %1) — trying again")
                             .arg(code));
                m_restart->start();
            });

    LEO_INFO(Record, m_label,
             QStringLiteral("Buffering %1 s segments into %2, keeping %3 s")
                 .arg(m_settings.segmentSeconds)
                 .arg(m_settings.directory)
                 .arg(m_settings.retentionSeconds));
    m_process->start(ffmpegPath(), args);
    if (!m_process->waitForStarted(5000)) {
        LEO_ERROR(Record, m_label,
                  QStringLiteral("buffer ffmpeg did not start"));
        m_process->deleteLater();
        m_process = nullptr;
        m_restart->start();
    }
}

void SegmentBuffer::stop()
{
    m_prune->stop();
    m_restart->stop();
    if (!isRunning())
        return;

    m_stopping = true;
    // SIGINT so the segment being written gets its trailer and stays
    // playable — it is very likely the one an event is about to ask for.
    ::kill(static_cast<pid_t>(m_process->processId()), SIGINT);
    if (!m_process->waitForFinished(8000)) {
        m_process->kill();
        m_process->waitForFinished(2000);
    }
}

QList<SegmentBuffer::Segment> SegmentBuffer::segments() const
{
    QList<Segment> out;
    QDir dir(m_settings.directory);
    const QFileInfoList files =
        dir.entryInfoList({kPattern()}, QDir::Files, QDir::Name);
    out.reserve(files.size());
    for (const QFileInfo &info : files) {
        // seg-20260801-214206.mkv
        const QString stamp = info.completeBaseName().mid(4);
        const QDateTime start =
            QDateTime::fromString(stamp, QLatin1String(kStamp));
        if (start.isValid())
            out.append({info.absoluteFilePath(), start});
    }
    // Sorted by name, which for this stamp is sorted by time.
    return out;
}

void SegmentBuffer::prune()
{
    if (m_settings.retentionSeconds <= 0 || m_settings.directory.isEmpty())
        return;

    const QDateTime cutoff =
        QDateTime::currentDateTime().addSecs(-m_settings.retentionSeconds);
    const QList<Segment> all = segments();
    int removed = 0;
    for (int i = 0; i < all.size(); ++i) {
        // Never the newest: ffmpeg is writing it, and its name says it began
        // long before it will end.
        if (i + 1 >= all.size())
            break;
        // A segment is only past once the one after it has also expired,
        // otherwise the moment the cutoff falls inside a segment its whole
        // span disappears.
        if (all.at(i + 1).start >= cutoff)
            break;
        if (QFile::remove(all.at(i).path))
            ++removed;
    }
    if (removed > 0)
        LEO_DEBUG(Record, m_label,
                  QStringLiteral("Dropped %1 expired segment(s)").arg(removed));
}

void SegmentBuffer::extract(const QDateTime &from, const QDateTime &to,
                            const QString &outPath)
{
    const QList<Segment> all = segments();
    if (all.isEmpty()) {
        emit failed(tr("Nothing had been buffered yet."));
        return;
    }

    // Every segment that overlaps the wanted span. A segment runs until the
    // next one starts; the last runs until now.
    QList<Segment> wanted;
    for (int i = 0; i < all.size(); ++i) {
        const QDateTime end = (i + 1 < all.size())
                                  ? all.at(i + 1).start
                                  : QDateTime::currentDateTime();
        if (end > from && all.at(i).start < to)
            wanted.append(all.at(i));
    }
    if (wanted.isEmpty()) {
        emit failed(tr("That moment is no longer in the buffer."));
        return;
    }

    // The concat demuxer wants a list file, and it outlives this call: the
    // process reads it after we return.
    auto *list = new QTemporaryFile(
        QDir::tempPath() + QStringLiteral("/leolink-concat-XXXXXX.txt"), this);
    if (!list->open()) {
        emit failed(tr("Cannot write to %1.").arg(QDir::tempPath()));
        delete list;
        return;
    }
    for (const Segment &segment : wanted) {
        QString quoted = segment.path;
        quoted.replace(QLatin1Char('\''), QLatin1String("'\\''"));
        list->write(QStringLiteral("file '%1'\n").arg(quoted).toUtf8());
    }
    list->flush();

    // How far into the first segment the wanted span begins, and how long it
    // runs. Both are seconds with millisecond resolution; -c copy then cuts
    // at the nearest key frame, which is why the buffer only cuts on those.
    const double offset =
        qMax(0.0, wanted.first().start.msecsTo(from) / 1000.0);
    const double duration = qMax(1.0, from.msecsTo(to) / 1000.0);

    const QStringList args{
        QStringLiteral("-nostdin"),
        QStringLiteral("-loglevel"), QStringLiteral("error"),
        QStringLiteral("-ss"), QString::number(offset, 'f', 3),
        QStringLiteral("-f"), QStringLiteral("concat"),
        QStringLiteral("-safe"), QStringLiteral("0"),
        QStringLiteral("-i"), list->fileName(),
        QStringLiteral("-t"), QString::number(duration, 'f', 3),
        QStringLiteral("-c"), QStringLiteral("copy"),
        QStringLiteral("-f"), QStringLiteral("matroska"),
        QStringLiteral("-y"), outPath,
    };

    auto *cut = new QProcess(this);
    dieWithParent(cut);
    connect(cut, QOverload<int, QProcess::ExitStatus>::of(&QProcess::finished),
            this, [this, cut, list, outPath](int code, QProcess::ExitStatus) {
                const QString errors =
                    QString::fromUtf8(cut->readAllStandardError()).trimmed();
                cut->deleteLater();
                list->deleteLater();

                const QFileInfo info(outPath);
                if (code != 0 || !info.exists() || info.size() == 0) {
                    LEO_ERROR(Record, m_label,
                              QStringLiteral("Could not cut %1 out of the "
                                             "buffer (exit %2): %3")
                                  .arg(outPath).arg(code).arg(errors));
                    emit failed(tr("The recording could not be cut out of the "
                                   "buffer."));
                    return;
                }
                LEO_INFO(Record, m_label,
                         QStringLiteral("Wrote %1 (%2 KiB) from the buffer")
                             .arg(outPath).arg(info.size() / 1024));
                emit extracted(outPath);
            });
    cut->start(ffmpegPath(), args);
}

} // namespace leolink
