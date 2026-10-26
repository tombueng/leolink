// The camera's own web server: /cgi-bin/api.cgi on port 80 or 443.
#pragma once

#include <functional>

#include <QString>
#include <QUrl>

#include "CommandLink.h"
#include "Config.h"

class QNetworkAccessManager;
class QNetworkReply;
class QNetworkRequest;

namespace leolink {

/// Sends the HTTP API's commands to the camera's web server, and holds the
/// session they go on.
///
/// The protocol is a JSON array in, JSON array out, with a token in the URL
/// once logged in. Cameras ship a self-signed certificate, so HTTPS is not
/// verified. What this does not do is decide anything: throttling, retries
/// and logging in are ReolinkClient's, the same for every link.
class HttpApiLink : public CommandLink {
public:
    /// The network manager is created with `owner` for its parent.
    explicit HttpApiLink(QObject *owner);

    void setCamera(const CameraConfig &camera) { m_camera = camera; }
    /// Where requests go. Only a test changes this, to send them to a web
    /// server of its own.
    void setNetwork(QNetworkAccessManager *net) { m_net = net; }
    /// Makes the network manager of every link created from now on. For
    /// tests; null restores the ordinary one.
    static void setNetworkFactory(std::function<QNetworkAccessManager *(QObject *)> factory);

    void send(const QString &command, const QJsonObject &param, int action,
              QObject *context, Done done) override;
    bool needsLogin() const override { return true; }
    QString name() const override { return QStringLiteral("HTTP API"); }

    const QString &token() const { return m_token; }
    /// Keeps the token a Login returned. It is a working key to the camera
    /// for as long as it lasts, so it is also hidden from the log.
    void setToken(const QString &token);
    void forgetToken() { m_token.clear(); }

    /// `/cgi-bin/api.cgi?cmd=…`, with the token when there is one.
    QUrl apiUrl(const QString &command, bool withToken = true) const;
    /// A plain GET on the camera, for what is not a JSON command: a snapshot.
    QNetworkReply *get(const QUrl &url);

    /// Hands the session back. Cameras allow only a handful at once, and one
    /// that is merely dropped stays occupied until its lease runs out.
    void releaseSession();

private:
    /// HTTPS without verifying the camera's self-signed certificate.
    void secure(QNetworkRequest &request) const;

    QNetworkAccessManager *m_net;
    CameraConfig m_camera;
    QString m_token;
};

} // namespace leolink
