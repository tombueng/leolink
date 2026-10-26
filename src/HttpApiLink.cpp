#include "HttpApiLink.h"

#include <QEventLoop>
#include <QJsonArray>
#include <QJsonDocument>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QNetworkRequest>
#include <QPointer>
#include <QSslConfiguration>
#include <QTimer>
#include <QUrlQuery>

#include "Log.h"

namespace leolink {

namespace {

/// How long to wait for a camera to acknowledge a logout. Long enough for a
/// device on the same network, short enough that one which has vanished does
/// not hold up closing the window.
constexpr int kLogoutWaitMs = 700;

std::function<QNetworkAccessManager *(QObject *)> &networkFactory()
{
    static std::function<QNetworkAccessManager *(QObject *)> factory;
    return factory;
}

QNetworkAccessManager *makeNetwork(QObject *owner)
{
    return networkFactory() ? networkFactory()(owner) : new QNetworkAccessManager(owner);
}

QByteArray body(const QString &command, const QJsonObject &param, int action)
{
    QJsonObject entry;
    entry[QStringLiteral("cmd")] = command;
    entry[QStringLiteral("action")] = action;
    entry[QStringLiteral("param")] = param;
    return QJsonDocument(QJsonArray{entry}).toJson(QJsonDocument::Compact);
}

} // namespace

HttpApiLink::HttpApiLink(QObject *owner) : m_net(makeNetwork(owner)) {}

void HttpApiLink::setNetworkFactory(std::function<QNetworkAccessManager *(QObject *)> factory)
{
    networkFactory() = std::move(factory);
}

void HttpApiLink::setToken(const QString &token)
{
    m_token = token;
    Log::addSecret(token);
}

void HttpApiLink::secure(QNetworkRequest &request) const
{
    if (!m_camera.effectiveHttps())
        return;
    // Cameras ship a self-signed certificate; refusing it would make HTTPS
    // unusable on every device out there.
    QSslConfiguration ssl = QSslConfiguration::defaultConfiguration();
    ssl.setPeerVerifyMode(QSslSocket::VerifyNone);
    request.setSslConfiguration(ssl);
}

QUrl HttpApiLink::apiUrl(const QString &command, bool withToken) const
{
    QUrl url;
    url.setScheme(m_camera.effectiveHttps() ? QStringLiteral("https") : QStringLiteral("http"));
    url.setHost(m_camera.host);
    url.setPath(QStringLiteral("/cgi-bin/api.cgi"));

    QUrlQuery q;
    q.addQueryItem(QStringLiteral("cmd"), command);
    if (withToken && !m_token.isEmpty())
        q.addQueryItem(QStringLiteral("token"), m_token);
    url.setQuery(q);
    return url;
}

QNetworkReply *HttpApiLink::get(const QUrl &url)
{
    QNetworkRequest request(url);
    secure(request);
    return m_net->get(request);
}

void HttpApiLink::send(const QString &command, const QJsonObject &param, int action,
                       QObject *context, Done done)
{
    QNetworkRequest req(apiUrl(command));
    req.setHeader(QNetworkRequest::ContentTypeHeader, QStringLiteral("application/json"));
    secure(req);

    const QByteArray payload = body(command, param, action);
    LEO_DEBUG(Api, m_camera.label(),
              QStringLiteral("→ %1 action=%2 session=%3 %4")
                  .arg(command).arg(action)
                  .arg(m_token.isEmpty()
                           ? QStringLiteral("none")
                           : QStringLiteral("%1 chars").arg(m_token.size()))
                  .arg(param.isEmpty() ? QString()
                                       : QString::fromUtf8(payload)));

    const QString tokenUsed = m_token;
    QNetworkReply *reply = m_net->post(req, payload);
    QObject::connect(reply, &QNetworkReply::finished, context,
                     [this, reply, tokenUsed, done] {
        reply->deleteLater();
        LinkReply r;
        r.status = reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt();

        if (reply->error() != QNetworkReply::NoError) {
            // 502 and 503 are answers, not network faults. Newer Reolink
            // firmware returns them instead of a JSON error whenever it is
            // unhappy — too many sessions, a parameter it did not expect, a
            // request while it is busy.
            r.kind = r.status == 502 || r.status == 503 ? LinkReply::Kind::Busy
                                                         : LinkReply::Kind::Unreachable;
            r.detail = reply->errorString();
            done(r);
            return;
        }

        const QByteArray raw = reply->readAll();
        const QJsonDocument doc = QJsonDocument::fromJson(raw);
        if (!doc.isArray() || doc.array().isEmpty()) {
            r.kind = LinkReply::Kind::Garbled;
            r.detail = QString::fromUtf8(raw.left(400));
            done(r);
            return;
        }

        r.entry = doc.array().first().toObject();
        if (r.entry.value(QStringLiteral("code")).toInt(-1) == 0) {
            r.kind = LinkReply::Kind::Ok;
            r.detail = QString::number(raw.size());
            done(r);
            return;
        }

        const QJsonObject err = r.entry.value(QStringLiteral("error")).toObject();
        r.rspCode = err.value(QStringLiteral("rspCode")).toInt();
        r.detail = err.value(QStringLiteral("detail")).toString();
        // A token has a lease, and a client kept around for days — the status
        // poller, for one — will outlive it. The session is forgotten only if
        // nobody has already replaced it: twenty requests failing on one
        // expired session must not each throw away the new one.
        if (!tokenUsed.isEmpty() && (r.rspCode == -6 || r.rspCode == -27)) {
            r.kind = LinkReply::Kind::Expired;
            if (m_token == tokenUsed)
                m_token.clear();
        } else {
            r.kind = LinkReply::Kind::Refused;
        }
        done(r);
    });
}

void HttpApiLink::releaseSession()
{
    if (m_token.isEmpty())
        return;

    // Sessions are a scarce resource on these cameras — six or eight for the
    // whole device, shared with the phone app and the web interface — and they
    // are only freed by logging out or by waiting for the lease to lapse.
    // Without this, every settings dialog and every snapshot left one behind
    // until the camera answered -5 "max session" and appeared to be broken.
    //
    // Sent detached: this runs from the destructor, so nothing owned by the
    // client may outlive the call. Nobody waits for the answer; there is
    // nothing useful to do with it.
    const QUrl url = apiUrl(QStringLiteral("Logout"));
    m_token.clear();

    auto *net = new QNetworkAccessManager;
    QNetworkRequest request(url);
    request.setHeader(QNetworkRequest::ContentTypeHeader, QStringLiteral("application/json"));
    secure(request);
    QNetworkReply *reply = net->post(request, body(QStringLiteral("Logout"), {}, 0));

    // Waited for, briefly. Posting and walking away looked right and is not:
    // this is called from destructors, and the last of those run as the
    // application is shutting down, when there is no longer an event loop to
    // carry the request out of the process. The session would then be held for
    // its full hour — the very thing this exists to prevent.
    //
    // User input is excluded so a half-destroyed dialog cannot be clicked, and
    // the wait is capped: a camera that has gone off the network must not stop
    // the program from closing.
    QEventLoop loop;
    QObject::connect(reply, &QNetworkReply::finished, &loop, &QEventLoop::quit);
    QTimer::singleShot(kLogoutWaitMs, &loop, &QEventLoop::quit);
    loop.exec(QEventLoop::ExcludeUserInputEvents);

    const bool acknowledged = reply->isFinished();
    reply->deleteLater();
    net->deleteLater();

    LEO_DEBUG(Api, m_camera.label(),
              acknowledged ? QStringLiteral("Logout acknowledged, session released")
                           : QStringLiteral("Logout sent, no answer within %1 ms")
                                 .arg(kLogoutWaitMs));
}

} // namespace leolink
