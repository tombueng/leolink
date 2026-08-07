// Motion events over ONVIF PullPoint (port 8000).
#pragma once

#include <QHash>
#include <QList>
#include <QObject>
#include <QString>

#include "Config.h"

class QNetworkAccessManager;

namespace leolink {

/// Long-polls the camera for motion instead of asking every second.
///
/// The CGI API exposes GetMdState, but that needs polling. ONVIF PullPoint is
/// a long poll: the camera answers when something actually happens, which is
/// one request every few seconds rather than 3600 an hour.
///
/// Two quirks of Reolink's ONVIF stack, both found the hard way and both
/// load-bearing:
///
///  * CreatePullPointSubscription must be sent *without* WS-Addressing
///    headers — with them the camera answers HTTP 400.
///  * PullMessages must be sent *with* them — without, HTTP 400 again.
///
/// And the subscription address has to be read from <SubscriptionReference>.
/// Taking the last <Address> in the document picks up the anonymous
/// WS-Addressing ReplyTo instead, and then you happily poll www.w3.org.
class MotionWatcher : public QObject {
    Q_OBJECT

public:
    explicit MotionWatcher(QObject *parent = nullptr);

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

signals:
    /// Emitted on every state change, and once right after subscribing —
    /// the camera reports its current state as a property event, which gives
    /// the UI a defined starting point.
    void motionChanged(const QString &cameraId, bool active);
    void error(const QString &cameraId, const QString &reason);

private:
    void subscribe();
    void pull();
    /// One <NotificationMessage> from a poll: raises motion if it says so and
    /// if it is about this camera.
    void handleMessage(const QString &message);
    /// The channel an event is about, or -1 when it does not say. Read from
    /// the source token, whose shape is firmware's business — "000",
    /// "VideoSource_2" — so the trailing digits decide it.
    int channelOf(const QString &message) const;
    QByteArray envelope(const QString &body, const QString &action,
                        const QString &to) const;
    QString securityHeader() const;

    QNetworkAccessManager *m_net;
    /// The device: host, credentials, and the label used in the log.
    CameraConfig m_camera;
    /// Everything watched through it. One entry for a camera, one per channel
    /// for a recorder.
    QList<CameraConfig> m_cameras;
    /// Last reported state per camera id, so a change is reported once.
    QHash<QString, bool> m_activeById;
    QString m_subscription;
    bool m_active{false};
    bool m_running{false};
    int m_failures{0};
};

} // namespace leolink
