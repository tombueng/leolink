// Motion events over ONVIF PullPoint (port 8000).
#pragma once

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

    void watch(const CameraConfig &camera);
    void stop();

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
    QByteArray envelope(const QString &body, const QString &action,
                        const QString &to) const;
    QString securityHeader() const;

    QNetworkAccessManager *m_net;
    CameraConfig m_camera;
    QString m_subscription;
    bool m_active{false};
    bool m_running{false};
    int m_failures{0};
};

} // namespace leolink
