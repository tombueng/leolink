#include "MotionWatcher.h"

#include "Log.h"

#include <QCryptographicHash>
#include <QDateTime>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QNetworkRequest>
#include <QRandomGenerator>
#include <QRegularExpression>
#include <QTimer>
#include <QUuid>

namespace leolink {

namespace {

constexpr int kPullSeconds = 30;

const QString kPullAction =
    QStringLiteral("http://www.onvif.org/ver10/events/wsdl/"
                   "PullPointSubscription/PullMessages");

/// Text of the first element with this local name, namespace prefix ignored.
QString tagText(const QString &xml, const QString &localName)
{
    const QRegularExpression re(
        QStringLiteral("<(?:\\w+:)?%1[^>]*>(.*?)</(?:\\w+:)?%1>").arg(localName),
        QRegularExpression::DotMatchesEverythingOption);
    const auto m = re.match(xml);
    return m.hasMatch() ? m.captured(1).trimmed() : QString();
}

} // namespace

MotionWatcher::MotionWatcher(QObject *parent)
    : QObject(parent), m_net(new QNetworkAccessManager(this))
{
}

QString MotionWatcher::securityHeader() const
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

QByteArray MotionWatcher::envelope(const QString &body, const QString &action,
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

void MotionWatcher::watch(const CameraConfig &camera)
{
    m_camera = camera;
    m_running = true;
    m_failures = 0;
    subscribe();
}

void MotionWatcher::stop()
{
    m_running = false;
    m_subscription.clear();
}

void MotionWatcher::subscribe()
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
        req, envelope(QStringLiteral("<tev:CreatePullPointSubscription/>"), {}, {}));

    connect(reply, &QNetworkReply::finished, this, [this, reply] {
        reply->deleteLater();
        if (!m_running)
            return;

        const QString xml = QString::fromUtf8(reply->readAll());

        // Scope to <SubscriptionReference>, otherwise we would pick up the
        // anonymous ReplyTo address and poll w3.org instead of the camera.
        const QRegularExpression refRe(
            QStringLiteral("<(?:\\w+:)?SubscriptionReference[^>]*>(.*?)"
                           "</(?:\\w+:)?SubscriptionReference>"),
            QRegularExpression::DotMatchesEverythingOption);
        const auto refMatch = refRe.match(xml);
        const QString scope = refMatch.hasMatch() ? refMatch.captured(1) : xml;
        const QString address = tagText(scope, QStringLiteral("Address"));

        if (address.isEmpty() || address.contains(QLatin1String("w3.org"))) {
            // The reply itself is the diagnosis here: cameras refuse for
            // entirely different reasons — events switched off, ONVIF disabled,
            // a user without the rights — and all of them look the same from
            // the outside.
            LEO_WARN(Onvif, m_camera.label(),
                     QStringLiteral("Subscription refused by %1; reply was: %2")
                         .arg(m_camera.host, xml.left(500)));
            emit error(m_camera.id, tr("ONVIF subscription failed."));
            if (m_running)
                QTimer::singleShot(30000, this, &MotionWatcher::subscribe);
            return;
        }
        m_subscription = address;
        LEO_INFO(Onvif, m_camera.label(),
                 QStringLiteral("Subscribed, polling %1").arg(address));
        pull();
    });
}

void MotionWatcher::pull()
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
                QTimer::singleShot(5000, this, &MotionWatcher::subscribe);
                return;
            }
            LEO_DEBUG(Onvif, m_camera.label(),
                      QStringLiteral("Poll %1 failed: %2")
                          .arg(m_failures).arg(reply->errorString()));
            QTimer::singleShot(2000, this, &MotionWatcher::pull);
            return;
        }
        m_failures = 0;

        const QString xml = QString::fromUtf8(reply->readAll());
        const QRegularExpression itemRe(
            QStringLiteral("<(?:\\w+:)?SimpleItem\\s+Name=\"(IsMotion|State)\"\\s+"
                           "Value=\"([^\"]+)\""));
        auto it = itemRe.globalMatch(xml);
        while (it.hasNext()) {
            const auto m = it.next();
            const bool active = m.captured(2).compare(QLatin1String("true"),
                                                      Qt::CaseInsensitive) == 0;
            if (active != m_active) {
                m_active = active;
                LEO_INFO(Onvif, m_camera.label(),
                         active ? QStringLiteral("Camera reports motion")
                                : QStringLiteral("Camera reports motion ended"));
                emit motionChanged(m_camera.id, active);
            }
        }
        pull();   // straight back into the long poll
    });
}

} // namespace leolink
