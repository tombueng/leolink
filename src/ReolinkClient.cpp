#include "ReolinkClient.h"

#include <QJsonArray>
#include <QJsonDocument>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QNetworkRequest>
#include <QSslConfiguration>
#include <QUrlQuery>

namespace leolink {

ReolinkClient::ReolinkClient(QObject *parent)
    : QObject(parent), m_net(new QNetworkAccessManager(this))
{
}

void ReolinkClient::setCamera(const CameraConfig &camera)
{
    m_camera = camera;
    m_token.clear();   // a different camera means a different session
}

QString ReolinkClient::describeError(int rspCode)
{
    switch (rspCode) {
    case -3:   return tr("File format not recognised.");
    case -4:   return tr("Invalid input.");
    case -5:   return tr("No free connections — the camera allows only a few "
                         "sessions at a time.");
    case -6:   return tr("Session expired.");
    case -7:   return tr("Wrong user name or password.");
    case -8:   return tr("Timed out.");
    case -9:   return tr("This firmware does not support that command.");
    case -12:  return tr("Could not read the configuration.");
    case -13:  return tr("Could not verify the configuration.");
    case -17:  return tr("Subsystem unavailable — typically no SD card fitted.");
    case -26:  return tr("Not permitted — this model lacks the hardware.");
    case -27:  return tr("Account invalid, log in again.");
    case -28:  return tr("User name already taken.");
    case -29:  return tr("Maximum number of users reached.");
    case -31:  return tr("Camera busy, try again shortly.");
    case -32:  return tr("IP address conflict.");
    case -100: return tr("Configuration test failed.");
    case -200: return tr("FTP login failed.");
    case -201: return tr("FTP could not create the directory.");
    case -202: return tr("FTP upload failed.");
    case -203: return tr("FTP could not reach the server.");
    default:   return tr("Camera reported error %1.").arg(rspCode);
    }
}

QUrl ReolinkClient::apiUrl(const QString &command, bool withToken) const
{
    QUrl url;
    url.setScheme(m_camera.https ? QStringLiteral("https") : QStringLiteral("http"));
    url.setHost(m_camera.host);
    url.setPath(QStringLiteral("/cgi-bin/api.cgi"));

    QUrlQuery q;
    q.addQueryItem(QStringLiteral("cmd"), command);
    if (withToken && !m_token.isEmpty())
        q.addQueryItem(QStringLiteral("token"), m_token);
    url.setQuery(q);
    return url;
}

void ReolinkClient::post(const QString &command, const QJsonObject &param,
                         const std::function<void(const QJsonObject &)> &onOk,
                         const std::function<void(const QString &)> &onErr,
                         int action)
{
    QJsonObject entry;
    entry[QStringLiteral("cmd")] = command;
    entry[QStringLiteral("action")] = action;
    entry[QStringLiteral("param")] = param;

    QJsonArray body;
    body.append(entry);

    QNetworkRequest req(apiUrl(command));
    req.setHeader(QNetworkRequest::ContentTypeHeader,
                  QStringLiteral("application/json"));
    if (m_camera.https) {
        // Cameras ship a self-signed certificate; refusing it would make HTTPS
        // unusable on every device out there.
        QSslConfiguration ssl = QSslConfiguration::defaultConfiguration();
        ssl.setPeerVerifyMode(QSslSocket::VerifyNone);
        req.setSslConfiguration(ssl);
    }

    QNetworkReply *reply =
        m_net->post(req, QJsonDocument(body).toJson(QJsonDocument::Compact));

    connect(reply, &QNetworkReply::finished, this, [this, reply, command, onOk, onErr] {
        reply->deleteLater();
        if (reply->error() != QNetworkReply::NoError) {
            onErr(tr("Cannot reach %1: %2").arg(m_camera.host, reply->errorString()));
            return;
        }
        const QJsonDocument doc = QJsonDocument::fromJson(reply->readAll());
        if (!doc.isArray() || doc.array().isEmpty()) {
            onErr(tr("Unexpected reply from %1.").arg(m_camera.host));
            return;
        }
        const QJsonObject first = doc.array().first().toObject();
        if (first.value(QStringLiteral("code")).toInt(-1) != 0) {
            const QJsonObject err = first.value(QStringLiteral("error")).toObject();
            onErr(describeError(err.value(QStringLiteral("rspCode")).toInt()));
            return;
        }
        onOk(first.value(QStringLiteral("value")).toObject());
    });
}

void ReolinkClient::login(const std::function<void()> &then,
                          const std::function<void(const QString &)> &onErr)
{
    if (!m_token.isEmpty()) {
        then();
        return;
    }

    QJsonObject user;
    user[QStringLiteral("userName")] = m_camera.user;
    user[QStringLiteral("password")] = m_camera.secret();
    QJsonObject param;
    param[QStringLiteral("User")] = user;

    post(QStringLiteral("Login"), param,
         [this, then, onErr](const QJsonObject &value) {
             m_token = value.value(QStringLiteral("Token"))
                            .toObject()
                            .value(QStringLiteral("name"))
                            .toString();
             if (m_token.isEmpty()) {
                 onErr(tr("Login returned no token."));
                 return;
             }
             then();
         },
         onErr);
}

void ReolinkClient::testConnection()
{
    login([this] {
        post(QStringLiteral("GetDevInfo"), {},
             [this](const QJsonObject &value) {
                 const QJsonObject info =
                     value.value(QStringLiteral("DevInfo")).toObject();
                 emit testSucceeded(
                     tr("%1 — firmware %2, %3 channel(s)")
                         .arg(info.value(QStringLiteral("model")).toString(),
                              info.value(QStringLiteral("firmVer")).toString())
                         .arg(info.value(QStringLiteral("channelNum")).toInt(1)));
             },
             [this](const QString &e) { emit testFailed(e); });
    },
    [this](const QString &e) { emit testFailed(e); });
}

void ReolinkClient::fetchDeviceInfo()
{
    login([this] {
        post(QStringLiteral("GetDevInfo"), {},
             [this](const QJsonObject &value) {
                 emit deviceInfoReady(
                     value.value(QStringLiteral("DevInfo")).toObject());
             },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::fetchSection(const QString &command, const QJsonObject &param)
{
    login([this, command, param] {
        // action=1 returns the current value *and* the permitted ranges in one
        // round trip, so the dialog can be built from a single request.
        QJsonObject entry;
        entry[QStringLiteral("cmd")] = command;
        entry[QStringLiteral("action")] = 1;
        entry[QStringLiteral("param")] = param;

        QJsonArray body;
        body.append(entry);

        QNetworkRequest req(apiUrl(command));
        req.setHeader(QNetworkRequest::ContentTypeHeader,
                      QStringLiteral("application/json"));
        if (m_camera.https) {
            QSslConfiguration ssl = QSslConfiguration::defaultConfiguration();
            ssl.setPeerVerifyMode(QSslSocket::VerifyNone);
            req.setSslConfiguration(ssl);
        }

        QNetworkReply *reply =
            m_net->post(req, QJsonDocument(body).toJson(QJsonDocument::Compact));
        connect(reply, &QNetworkReply::finished, this, [this, reply, command] {
            reply->deleteLater();
            if (reply->error() != QNetworkReply::NoError) {
                emit failed(tr("Cannot reach %1: %2")
                                .arg(m_camera.host, reply->errorString()));
                return;
            }
            const QJsonDocument doc = QJsonDocument::fromJson(reply->readAll());
            if (!doc.isArray() || doc.array().isEmpty()) {
                emit failed(tr("Unexpected reply from %1.").arg(m_camera.host));
                return;
            }
            const QJsonObject first = doc.array().first().toObject();
            if (first.value(QStringLiteral("code")).toInt(-1) != 0) {
                const QJsonObject err = first.value(QStringLiteral("error")).toObject();
                emit failed(describeError(err.value(QStringLiteral("rspCode")).toInt()));
                return;
            }
            // Older firmware calls it "initial" rather than "range".
            QJsonObject ranges = first.value(QStringLiteral("range")).toObject();
            if (ranges.isEmpty())
                ranges = first.value(QStringLiteral("initial")).toObject();
            emit sectionReady(command,
                              first.value(QStringLiteral("value")).toObject(),
                              ranges);
        });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::applySection(const QString &command, const QJsonObject &param)
{
    login([this, command, param] {
        post(command, param,
             [this, command](const QJsonObject &) { emit sectionApplied(command); },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

namespace {

/// The camera splits time into fields rather than sending a timestamp.
QJsonObject toCameraTime(const QDateTime &when)
{
    QJsonObject o;
    o[QStringLiteral("year")] = when.date().year();
    o[QStringLiteral("mon")] = when.date().month();
    o[QStringLiteral("day")] = when.date().day();
    o[QStringLiteral("hour")] = when.time().hour();
    o[QStringLiteral("min")] = when.time().minute();
    o[QStringLiteral("sec")] = when.time().second();
    return o;
}

QDateTime fromCameraTime(const QJsonObject &o)
{
    if (o.isEmpty())
        return {};
    return QDateTime(QDate(o.value(QStringLiteral("year")).toInt(),
                           o.value(QStringLiteral("mon")).toInt(),
                           o.value(QStringLiteral("day")).toInt()),
                     QTime(o.value(QStringLiteral("hour")).toInt(),
                           o.value(QStringLiteral("min")).toInt(),
                           o.value(QStringLiteral("sec")).toInt()));
}

} // namespace

void ReolinkClient::searchRecordings(const QDateTime &from, const QDateTime &to,
                                     const QString &streamType, int channel)
{
    login([this, from, to, streamType, channel] {
        QJsonObject search;
        search[QStringLiteral("channel")] = channel;
        search[QStringLiteral("streamType")] = streamType;
        // onlyStatus 0 asks for the file list itself; 1 would return only
        // which days have anything, which is a useful optimisation for a
        // calendar view but not for this.
        search[QStringLiteral("onlyStatus")] = 0;
        search[QStringLiteral("StartTime")] = toCameraTime(from);
        search[QStringLiteral("EndTime")] = toCameraTime(to);

        QJsonObject param;
        param[QStringLiteral("Search")] = search;

        post(QStringLiteral("Search"), param,
             [this](const QJsonObject &value) {
                 const QJsonObject result =
                     value.value(QStringLiteral("SearchResult")).toObject();
                 QList<Recording> recordings;
                 const QJsonArray files =
                     result.value(QStringLiteral("File")).toArray();
                 for (const QJsonValue &v : files) {
                     const QJsonObject o = v.toObject();
                     Recording recording;
                     recording.name = o.value(QStringLiteral("name")).toString();
                     recording.size =
                         qint64(o.value(QStringLiteral("size")).toDouble());
                     recording.start = fromCameraTime(
                         o.value(QStringLiteral("StartTime")).toObject());
                     recording.end = fromCameraTime(
                         o.value(QStringLiteral("EndTime")).toObject());
                     recording.streamType =
                         o.value(QStringLiteral("type")).toString();
                     if (!recording.name.isEmpty())
                         recordings.append(recording);
                 }
                 emit recordingsReady(recordings);
             },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

QUrl ReolinkClient::playbackUrl(const Recording &recording) const
{
    QUrl url = apiUrl(QStringLiteral("Playback"));
    QUrlQuery q(url.query());
    q.addQueryItem(QStringLiteral("source"), recording.name);
    q.addQueryItem(QStringLiteral("output"), recording.name);
    url.setQuery(q);
    return url;
}

QUrl ReolinkClient::downloadUrl(const Recording &recording) const
{
    QUrl url = apiUrl(QStringLiteral("Download"));
    QUrlQuery q(url.query());
    q.addQueryItem(QStringLiteral("source"), recording.name);
    q.addQueryItem(QStringLiteral("output"), recording.name);
    url.setQuery(q);
    return url;
}

void ReolinkClient::fetchSnapshot()
{
    login([this] {
        QUrl url = apiUrl(QStringLiteral("Snap"));
        QUrlQuery q(url.query());
        q.addQueryItem(QStringLiteral("channel"), QStringLiteral("0"));
        q.addQueryItem(QStringLiteral("rs"), QStringLiteral("leolink"));
        url.setQuery(q);

        QNetworkRequest req(url);
        if (m_camera.https) {
            QSslConfiguration ssl = QSslConfiguration::defaultConfiguration();
            ssl.setPeerVerifyMode(QSslSocket::VerifyNone);
            req.setSslConfiguration(ssl);
        }
        QNetworkReply *reply = m_net->get(req);
        connect(reply, &QNetworkReply::finished, this, [this, reply] {
            reply->deleteLater();
            const QByteArray data = reply->readAll();
            // A JSON error body comes back with HTTP 200, so sniff the JPEG
            // start-of-image marker rather than trusting the status code.
            if (reply->error() != QNetworkReply::NoError ||
                !data.startsWith("\xFF\xD8")) {
                emit failed(tr("Snapshot failed."));
                return;
            }
            emit snapshotReady(data);
        });
    },
    [this](const QString &e) { emit failed(e); });
}

} // namespace leolink
