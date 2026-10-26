#include "OnvifEvents.h"

#include <QCryptographicHash>
#include <QDateTime>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QNetworkRequest>
#include <QRandomGenerator>
#include <QRegularExpression>
#include <QTimer>
#include <QUuid>

#include "XmlText.h"

namespace leolink {

namespace {

constexpr int kPullSeconds = 30;

/// How long a subscription is asked to last. Left to itself an E1 Zoom gives
/// ten seconds, and holds a poll for up to twenty: a quiet poll outlived its
/// own subscription, and the next one was refused.
constexpr int kLifetimeSeconds = 120;

const QString kRenewAction =
    QStringLiteral("http://docs.oasis-open.org/wsn/bw-2/SubscriptionManager/RenewRequest");

const QString kPullAction =
    QStringLiteral("http://www.onvif.org/ver10/events/wsdl/"
                   "PullPointSubscription/PullMessages");

} // namespace

OnvifEvents::OnvifEvents(const CameraConfig &camera, QObject *parent)
    : EventSource(parent), m_net(new QNetworkAccessManager(this)),
      m_renewTimer(new QTimer(this)), m_camera(camera)
{
    connect(m_renewTimer, &QTimer::timeout, this, &OnvifEvents::renew);
}

void OnvifEvents::start()
{
    m_running = true;
    m_failures = 0;
    subscribe();
}

void OnvifEvents::stop()
{
    m_running = false;
    m_subscription.clear();
    m_renewTimer->stop();
}

QString OnvifEvents::securityHeader() const
{
    // WS-Security UsernameToken, PasswordDigest:
    //   digest = Base64(SHA1(nonce || created || password))
    QByteArray nonce(16, Qt::Uninitialized);
    QRandomGenerator::global()->fillRange(
        reinterpret_cast<quint32 *>(nonce.data()), nonce.size() / 4);

    const QString created =
        QDateTime::currentDateTimeUtc().toString(Qt::ISODate);

    QCryptographicHash sha(QCryptographicHash::Sha1);
    sha.addData(nonce);
    sha.addData(created.toUtf8());
    sha.addData(m_camera.secret().toUtf8());

    return QStringLiteral(
               "<Security s:mustUnderstand=\"1\" xmlns=\"http://docs.oasis-open.org/wss/"
               "2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd\">"
               "<UsernameToken><Username>%1</Username>"
               "<Password Type=\"http://docs.oasis-open.org/wss/2004/01/"
               "oasis-200401-wss-username-token-profile-1.0#PasswordDigest\">%2</Password>"
               "<Nonce EncodingType=\"http://docs.oasis-open.org/wss/2004/01/"
               "oasis-200401-wss-soap-message-security-1.0#Base64Binary\">%3</Nonce>"
               "<Created xmlns=\"http://docs.oasis-open.org/wss/2004/01/"
               "oasis-200401-wss-wssecurity-utility-1.0.xsd\">%4</Created>"
               "</UsernameToken></Security>")
        .arg(m_camera.user,
             QString::fromLatin1(sha.result().toBase64()),
             QString::fromLatin1(nonce.toBase64()),
             created);
}

QByteArray OnvifEvents::envelope(const QString &body, const QString &action,
                                   const QString &to) const
{
    QString addressing;
    if (!action.isEmpty()) {
        addressing =
            QStringLiteral("<wsa:Action s:mustUnderstand=\"1\">%1</wsa:Action>"
                           "<wsa:MessageID>urn:uuid:%2</wsa:MessageID>"
                           "<wsa:ReplyTo><wsa:Address>"
                           "http://www.w3.org/2005/08/addressing/anonymous"
                           "</wsa:Address></wsa:ReplyTo>"
                           "<wsa:To s:mustUnderstand=\"1\">%3</wsa:To>")
                .arg(action,
                     QUuid::createUuid().toString(QUuid::WithoutBraces),
                     to);
    }

    return QStringLiteral(
               "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
               "<s:Envelope xmlns:s=\"http://www.w3.org/2003/05/soap-envelope\" "
               "xmlns:wsa=\"http://www.w3.org/2005/08/addressing\" "
               "xmlns:tev=\"http://www.onvif.org/ver10/events/wsdl\">"
               "<s:Header>%1%2</s:Header><s:Body>%3</s:Body></s:Envelope>")
        .arg(addressing, securityHeader(), body)
        .toUtf8();
}

void OnvifEvents::renew()
{
    if (!m_running || m_subscription.isEmpty())
        return;
    QNetworkRequest req{QUrl(m_subscription)};
    req.setHeader(QNetworkRequest::ContentTypeHeader,
                  QStringLiteral("application/soap+xml; charset=utf-8"));
    // With WS-Addressing, like a poll: without it the camera answers 400.
    QNetworkReply *reply = m_net->post(
        req, envelope(QStringLiteral("<wsnt:Renew xmlns:wsnt=\"http://docs.oasis-open.org/wsn/b-2\">"
                                     "<wsnt:TerminationTime>PT%1S</wsnt:TerminationTime>"
                                     "</wsnt:Renew>")
                          .arg(kLifetimeSeconds),
                      kRenewAction, m_subscription));
    connect(reply, &QNetworkReply::finished, this, [this, reply] {
        reply->deleteLater();
        // A renewal that fails is followed by a poll that fails, and that
        // subscribes again; nothing more to do here than say so.
        if (reply->error() != QNetworkReply::NoError)
            LEO_DEBUG(Onvif, m_camera.label(),
                      QStringLiteral("Renewal refused: %1").arg(reply->errorString()));
    });
}

void OnvifEvents::subscribe()
{
    if (!m_running || m_camera.host.isEmpty())
        return;

    const QString url =
        QStringLiteral("http://%1:8000/onvif/event_service").arg(m_camera.host);

    QNetworkRequest req{QUrl(url)};
    req.setHeader(QNetworkRequest::ContentTypeHeader,
                  QStringLiteral("application/soap+xml; charset=utf-8"));

    // No WS-Addressing here — Reolink rejects the subscribe request with it.
    QNetworkReply *reply = m_net->post(
        req, envelope(QStringLiteral("<tev:CreatePullPointSubscription>"
                                     "<tev:InitialTerminationTime>PT%1S</tev:InitialTerminationTime>"
                                     "</tev:CreatePullPointSubscription>")
                          .arg(kLifetimeSeconds),
                      {}, {}));

    connect(reply, &QNetworkReply::finished, this, [this, reply] {
        reply->deleteLater();
        if (!m_running)
            return;

        const QString answer = QString::fromUtf8(reply->readAll());

        // Scope to <SubscriptionReference>, otherwise we would pick up the
        // anonymous ReplyTo address and poll w3.org instead of the camera.
        const QString reference = xml::inner(answer, QStringLiteral("SubscriptionReference"));
        const QString scope = reference.isNull() ? answer : reference;
        const QString address = xml::text(scope, QStringLiteral("Address"));

        if (address.isEmpty() || address.contains(QLatin1String("w3.org"))) {
            // The reply itself is the diagnosis here: cameras refuse for
            // entirely different reasons — events switched off, ONVIF disabled,
            // a user without the rights — and all of them look the same from
            // the outside.
            LEO_WARN(Onvif, m_camera.label(),
                     QStringLiteral("Subscription refused by %1; reply was: %2")
                         .arg(m_camera.host, answer.left(500)));
            emit lost(tr("ONVIF subscription failed."));
            if (m_running)
                QTimer::singleShot(30000, this, &OnvifEvents::subscribe);
            return;
        }
        m_subscription = address;

        // Kept alive at half of what the camera granted, which is not always
        // what was asked: a camera that ignores the request still gets its
        // renewal in time.
        const QDateTime now = QDateTime::fromString(xml::text(answer, QStringLiteral("CurrentTime")), Qt::ISODate);
        const QDateTime end = QDateTime::fromString(xml::text(answer, QStringLiteral("TerminationTime")), Qt::ISODate);
        const qint64 granted = now.isValid() && end.isValid() ? now.secsTo(end) : 10;
        m_renewTimer->start(int(qBound(qint64(1), granted / 2, qint64(kLifetimeSeconds / 2))) * 1000);

        LEO_INFO(Onvif, m_camera.label(),
                 QStringLiteral("Subscribed for %1 s, polling %2").arg(granted).arg(address));
        pull();
    });
}

void OnvifEvents::pull()
{
    if (!m_running || m_subscription.isEmpty())
        return;

    QNetworkRequest req{QUrl(m_subscription)};
    req.setHeader(QNetworkRequest::ContentTypeHeader,
                  QStringLiteral("application/soap+xml; charset=utf-8"));
    req.setTransferTimeout((kPullSeconds + 15) * 1000);

    const QString body =
        QStringLiteral("<tev:PullMessages><tev:Timeout>PT%1S</tev:Timeout>"
                       "<tev:MessageLimit>20</tev:MessageLimit></tev:PullMessages>")
            .arg(kPullSeconds);

    // WS-Addressing required on this one — mirror image of subscribe().
    QNetworkReply *reply =
        m_net->post(req, envelope(body, kPullAction, m_subscription));

    connect(reply, &QNetworkReply::finished, this, [this, reply] {
        reply->deleteLater();
        if (!m_running)
            return;

        if (reply->error() != QNetworkReply::NoError) {
            // Subscriptions expire; resubscribing is the normal path back.
            if (++m_failures > 3) {
                LEO_WARN(Onvif, m_camera.label(),
                         QStringLiteral("Poll failed four times (%1) — "
                                        "subscribing again")
                             .arg(reply->errorString()));
                m_failures = 0;
                m_subscription.clear();
                emit lost(tr("ONVIF subscription failed."));
                QTimer::singleShot(5000, this, &OnvifEvents::subscribe);
                return;
            }
            LEO_DEBUG(Onvif, m_camera.label(),
                      QStringLiteral("Poll %1 failed: %2")
                          .arg(m_failures).arg(reply->errorString()));
            QTimer::singleShot(2000, this, &OnvifEvents::pull);
            return;
        }
        m_failures = 0;

        const QString answer = QString::fromUtf8(reply->readAll());

        // A poll can carry several events, and behind a recorder they are not
        // all about the same camera. Splitting them up first is what makes it
        // possible to tell whose they are; a camera's reply usually holds one
        // message and the split changes nothing.
        const QStringList messages = xml::all(answer, QStringLiteral("NotificationMessage"));
        for (const QString &message : messages)
            read(message);
        // Firmware that does not wrap its events the way the standard says
        // still gets read, exactly as before this could tell channels apart.
        if (messages.isEmpty())
            read(answer);

        pull();   // straight back into the long poll
    });
}

int OnvifEvents::channelOf(const QString &message) const
{
    const QString source = xml::inner(message, QStringLiteral("Source"));
    if (source.isNull())
        return -1;

    const QRegularExpression valueRe(
        QStringLiteral("<(?:\\w+:)?SimpleItem\\s+Name=\"([^\"]+)\"\\s+Value=\"([^\"]+)\""));
    auto it = valueRe.globalMatch(source);
    while (it.hasNext()) {
        const auto m = it.next();
        const QRegularExpression tailRe(QStringLiteral("(\\d+)\\s*$"));
        const auto tail = tailRe.match(m.captured(2));
        if (tail.hasMatch()) {
            LEO_DEBUG(Onvif, m_camera.label(),
                      QStringLiteral("Event source %1=%2 → channel %3")
                          .arg(m.captured(1), m.captured(2), tail.captured(1)));
            return tail.captured(1).toInt();
        }
    }
    return -1;
}

void OnvifEvents::read(const QString &message)
{
    const QRegularExpression itemRe(
        QStringLiteral("<(?:\\w+:)?SimpleItem\\s+Name=\"(IsMotion|State)\"\\s+"
                       "Value=\"([^\"]+)\""));
    auto it = itemRe.globalMatch(message);
    if (!it.hasNext())
        return;

    // Each topic has its state of its own. A camera reports plain motion and
    // each kind of recognised object separately — CellMotionDetector/Motion,
    // MyRuleDetector/PeopleDetect, VehicleDetect … — and a person leaving the
    // picture says PeopleDetect false while the motion goes on. Taken as one
    // switch, that ended the alert in the middle of it.
    const QString topic = xml::text(message, QStringLiteral("Topic"));
    const int channel = channelOf(message);
    while (it.hasNext()) {
        const auto m = it.next();
        const bool on = m.captured(2).compare(QLatin1String("true"),
                                              Qt::CaseInsensitive) == 0;
        emit happened(channel, topic + QLatin1Char('/') + m.captured(1), on);
    }
}

} // namespace leolink
