// Motion detection performed here, for cameras that report none themselves.
#pragma once

#include <QByteArray>
#include <QObject>
#include <QString>

class QProcess;

namespace leolink {

struct CameraConfig;

/// Detects movement by comparing successive frames.
///
/// Some cameras report nothing over ONVIF — older firmware, other makers, or a
/// model where motion detection is switched off in the camera. This watches the
/// picture instead.
///
/// The analysis runs on a deliberately tiny image: ffmpeg is asked for
/// greyscale frames at 160x90, a few per second, from the *sub* stream. That is
/// about 14 kB per frame and a handful of comparisons — small enough to watch
/// many cameras at once, and quite enough to notice a person walking through.
/// Analysing the full 2560x1440 main stream would cost hundreds of times more
/// for no better answer.
///
/// Like Recorder, this is a separate process. Display settings cannot affect
/// detection, and a decoder problem in one does not disturb the other.
class MotionDetector : public QObject {
    Q_OBJECT

public:
    /// The mask divides the frame into kZoneColumns x kZoneRows cells. Motion
    /// in a disabled cell is ignored — a tree in the wind, a road at the edge
    /// of view, a doorway that is someone else's.
    static constexpr int kZoneColumns = 16;
    static constexpr int kZoneRows = 9;
    static constexpr int kZoneCount = kZoneColumns * kZoneRows;

    explicit MotionDetector(QObject *parent = nullptr);
    ~MotionDetector() override;

    /// `mask` is kZoneCount characters of '1' (watch) and '0' (ignore). Empty
    /// or malformed means watch everything.
    void start(const CameraConfig &camera, const QString &mask,
               int sensitivity, int minimumArea);
    void stop();
    bool isRunning() const;

    bool isActive() const { return m_active; }
    /// Share of watched pixels that changed in the last frame, 0…1. Drives the
    /// live bar in the settings dialog so a threshold can be chosen by eye
    /// rather than by guesswork.
    double lastLevel() const { return m_level; }

    static bool available();

signals:
    void motionChanged(bool active);
    void levelChanged(double level);
    void failed(const QString &reason);

private:
    void consume();
    void analyse(const QByteArray &frame);

    QProcess *m_process{nullptr};
    QByteArray m_previous;      ///< last frame, for differencing
    QByteArray m_buffer;        ///< partial frame from the pipe
    QByteArray m_mask;          ///< one byte per pixel: 1 watch, 0 ignore

    /// Fraction of watched pixels that must change, and how much a single
    /// pixel must change to count at all.
    double m_areaThreshold{0.02};
    int m_pixelThreshold{25};

    /// Consecutive frames needed to declare motion, and to declare it over.
    /// Without this a single noisy frame at night would trigger everything.
    int m_hitsToTrigger{2};
    int m_missesToClear{8};
    int m_hits{0};
    int m_misses{0};

    bool m_active{false};
    double m_level{0.0};
};

} // namespace leolink
