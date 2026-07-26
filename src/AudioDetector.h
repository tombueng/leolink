// Sound detection, for cameras with a microphone.
#pragma once

#include <QByteArray>
#include <QObject>
#include <QString>

class QProcess;

namespace leolink {

struct CameraConfig;

/// Raises an event when the camera hears something above a threshold.
///
/// Works out the loudness of the camera's microphone feed and compares it
/// against a level the user sets. Useful where the picture gives nothing away —
/// a door in the dark, glass breaking out of frame, a dog at the far end of a
/// garden.
///
/// The audio is taken as 8 kHz mono PCM, which is a couple of kilobytes a
/// second and plenty to judge loudness by. The threshold is in dBFS because
/// that is what audio levels are measured in everywhere else: -60 dB is close
/// to silence, -20 dB is a raised voice nearby.
class AudioDetector : public QObject {
    Q_OBJECT

public:
    explicit AudioDetector(QObject *parent = nullptr);
    ~AudioDetector() override;

    /// `thresholdDb` is negative, e.g. -35. `holdSeconds` keeps the event up
    /// after the noise stops, so one bark is not reported four times.
    void start(const CameraConfig &camera, double thresholdDb, int holdSeconds);
    void stop();
    bool isRunning() const;

    bool isActive() const { return m_active; }
    /// Loudness of the most recent window in dBFS, or -100 when silent.
    double lastLevelDb() const { return m_levelDb; }

    static bool available();

signals:
    void soundChanged(bool active);
    void levelChanged(double dbfs);
    void failed(const QString &reason);

private:
    void consume();
    void analyse(const QByteArray &window);

    QProcess *m_process{nullptr};
    QByteArray m_buffer;

    double m_thresholdDb{-35.0};
    int m_holdWindows{4};
    int m_quietWindows{0};

    bool m_active{false};
    double m_levelDb{-100.0};
};

} // namespace leolink
