// Writes a camera's stream to disk.
#pragma once

#include <QObject>
#include <QString>

class QProcess;

namespace leolink {

struct CameraConfig;

/// Records one camera to a file using a separate ffmpeg process.
///
/// An earlier version used libmpv's `stream-record` on the same handle that
/// draws the picture. That was a mistake on two counts. mpv labels the feature
/// experimental and it produced files that ended prematurely and would not
/// decode; worse, it coupled recording to playback, so every option tuned for
/// low-latency display silently changed whether recordings worked at all —
/// cutting stream probing for latency left the recorder without codec
/// parameters and wrote zero-byte files.
///
/// A separate process removes the coupling entirely: display settings cannot
/// affect recordings, a crash in one does not take the other with it, and
/// ffmpeg finalises the container properly when asked to stop.
///
/// The cost is a second connection to the camera. Reolink devices allow only a
/// handful of sessions, so this matters when many cameras record at once — but
/// a recording that cannot be played back is worth nothing at all.
class Recorder : public QObject {
    Q_OBJECT

public:
    explicit Recorder(QObject *parent = nullptr);
    ~Recorder() override;

    /// Starts recording `camera` to `path`. Returns false if ffmpeg is missing
    /// or the process will not start.
    bool start(const CameraConfig &camera, const QString &path);

    /// Asks ffmpeg to finish. The container is only valid after this — killing
    /// the process outright leaves a truncated file.
    void stop();

    bool isRecording() const;
    QString path() const { return m_path; }

    /// Whether an ffmpeg binary can be found at all.
    static bool available();

signals:
    void started(const QString &path);
    /// `path` is the finished file; empty if it never got that far.
    void stopped(const QString &path);
    void failed(const QString &reason);

private:
    QProcess *m_process{nullptr};
    QString m_path;
};

} // namespace leolink
