// Motion events over ONVIF PullPoint (port 8000).
#pragma once

#include "Config.h"
#include "EventSource.h"

class QNetworkAccessManager;
class QTimer;

namespace leolink {

/// Long-polls the camera for events instead of asking every second.
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
class OnvifEvents : public EventSource {
    Q_OBJECT

public:
    /// `camera` supplies the address and the login.
    explicit OnvifEvents(const CameraConfig &camera, QObject *parent = nullptr);

    void start() override;
    void stop() override;
    Log::Category category() const override { return Log::Category::Onvif; }

    /// Where requests go. Only a test changes this, to send them to a camera
    /// of its own.
    void setNetwork(QNetworkAccessManager *net) { m_net = net; }

private:
    void subscribe();
    void pull();
    /// Extends the subscription before the camera lets it lapse.
    void renew();
    /// One <NotificationMessage> from a poll.
    void read(const QString &message);
    /// The channel an event is about, or -1 when it does not say. Read from
    /// the source token, whose shape is firmware's business — "000",
    /// "VideoSource_2" — so the trailing digits decide it.
    int channelOf(const QString &message) const;
    QByteArray envelope(const QString &body, const QString &action,
                        const QString &to) const;
    QString securityHeader() const;

    QNetworkAccessManager *m_net;
    QTimer *m_renewTimer;
    CameraConfig m_camera;
    QString m_subscription;
    bool m_running{false};
    int m_failures{0};
};

} // namespace leolink
