// A camera's stream, always running, written to disk in segments.
#pragma once

#include <QDateTime>
#include <QObject>
#include <QString>

class QProcess;
class QTimer;

namespace leolink {

struct CameraConfig;

/// Keeps the recent past of one camera on disk, as a run of short files.
///
/// This is what makes two things possible that a recorder started on motion
/// cannot do at all. It can hand back the seconds *before* an event, because
/// they were already being written when the event happened; and left with a
/// long retention it is itself the round-the-clock archive, oldest segments
/// falling off the back as new ones arrive.
///
/// Segments rather than one file, because a file cannot be trimmed at the
/// front: keeping "the last 24 hours" in a single file would mean rewriting
/// tens of gigabytes every time a minute expires. Dropping a whole segment
/// costs one unlink.
///
/// One ffmpeg, one connection to the camera, `-c copy` throughout — the
/// packets are written as they arrive, so the archive costs almost no
/// processor time and is bit-identical to what the camera sent.
class SegmentBuffer : public QObject {
    Q_OBJECT

public:
    explicit SegmentBuffer(QObject *parent = nullptr);
    ~SegmentBuffer() override;

    struct Settings {
        QString directory;
        /// Length of one segment. Short buffers seek finely; a day-long
        /// archive wants minutes, or the folder becomes unusable.
        int segmentSeconds{6};
        /// How far back to keep. Everything older is deleted.
        qint64 retentionSeconds{60};
    };

    /// (Re)starts the buffer. Returns false if ffmpeg is missing or the
    /// directory cannot be made. Restarting with identical settings is a
    /// no-op, so this can be called on every configuration change.
    bool start(const CameraConfig &camera, const Settings &settings);
    void stop();
    bool isRunning() const;
    Settings settings() const { return m_settings; }

    /// Cuts everything between `from` and `to` out of the buffered segments
    /// into one file, without re-encoding. Answers with extracted() or
    /// failed(); `outPath` is echoed back so several can be in flight.
    void extract(const QDateTime &from, const QDateTime &to,
                 const QString &outPath);

    /// Deletes segments older than the retention. Called on a timer; exposed
    /// so a shrunk retention takes effect at once rather than a minute later.
    void prune();

    static bool available();

signals:
    void extracted(const QString &path);
    void failed(const QString &reason);

private:
    struct Segment {
        QString path;
        QDateTime start;
    };
    /// Every segment on disk, oldest first, times taken from the names.
    QList<Segment> segments() const;
    void startProcess();

    CameraConfig *m_camera{nullptr};
    Settings m_settings;
    QProcess *m_process{nullptr};
    QTimer *m_prune{nullptr};
    QString m_label;
    bool m_stopping{false};
    /// Restarts after an unexpected exit, backing off so a camera that is
    /// simply gone does not spin.
    QTimer *m_restart{nullptr};
};

} // namespace leolink
