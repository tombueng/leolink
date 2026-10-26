// A camera's own motion events, whichever protocol brings them.
#pragma once

#include <QHash>
#include <QList>
#include <QObject>
#include <QPointer>
#include <QSet>
#include <QString>

#include "Config.h"

class QNetworkAccessManager;

namespace leolink {

class EventSource;

/// Says when a camera's own detection sees something and when it stops.
///
/// The events come from an EventSource for the device — ONVIF where it has
/// it, Baichuan where it has not, as the routing table says. This decides
/// which camera each event is about and keeps each kind of thing reported
/// apart, so what comes out is the same whichever protocol it came over.
class MotionWatcher : public QObject {
    Q_OBJECT

public:
    explicit MotionWatcher(QObject *parent = nullptr);
    ~MotionWatcher() override;

    void watch(const CameraConfig &camera) { watch(QList<CameraConfig>{camera}); }
    /// Watches every camera on one device with a single subscription.
    ///
    /// A recorder sends all of its channels' events down each subscription it
    /// hands out, so one per camera means the same events five times over and
    /// five long polls against a box that already refuses requests under load.
    /// One subscription per host, fanned out by the channel the event names,
    /// is the same information for a fifth of the traffic.
    void watch(const QList<CameraConfig> &cameras);
    void stop();

    /// True if any of the watched cameras is seeing motion.
    bool isActive() const { return m_active; }

    /// Where ONVIF requests go. Only a test changes this, to send them to a
    /// camera of its own.
    void setNetwork(QNetworkAccessManager *net) { m_net = net; }

signals:
    /// Emitted on every state change, and once right after subscribing —
    /// the camera reports its current state as a property event, which gives
    /// the UI a defined starting point.
    void motionChanged(const QString &cameraId, bool active);
    void error(const QString &cameraId, const QString &reason);

private:
    /// One event from the source: the camera it is about, if any, has `what`
    /// happening or not.
    void heard(int channel, const QString &what, bool on);
    /// The source lost its connection: nothing it reported can be heard to
    /// end, so everything ends here, and the next subscription says afresh.
    void lost(const QString &reason);
    /// Records one topic of one camera as happening or not, and reports the
    /// camera's motion if that changed it.
    void setHappening(const CameraConfig &camera, const QString &what, bool on);

    QPointer<EventSource> m_source;
    QNetworkAccessManager *m_net{nullptr};
    /// The device: host, credentials, and the label used in the log.
    CameraConfig m_camera;
    /// Everything watched through it. One entry for a camera, one per channel
    /// for a recorder.
    QList<CameraConfig> m_cameras;
    /// Last reported state per camera id, so a change is reported once.
    QHash<QString, bool> m_activeById;
    /// What each camera currently reports as happening, one entry per topic
    /// and item: "tns1:RuleEngine/CellMotionDetector/Motion/IsMotion". A
    /// camera is seeing motion while any of them is.
    QHash<QString, QSet<QString>> m_happening;
    bool m_active{false};
};

} // namespace leolink
