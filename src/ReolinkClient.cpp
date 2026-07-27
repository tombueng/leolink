#include "ReolinkClient.h"

#include <memory>

#include <QJsonArray>
#include <QJsonDocument>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QNetworkRequest>
#include <QEventLoop>
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
} // namespace

ReolinkClient::ReolinkClient(QObject *parent)
    : QObject(parent), m_net(new QNetworkAccessManager(this))
{
}

ReolinkClient::~ReolinkClient()
{
    releaseSession();
}

void ReolinkClient::setCamera(const CameraConfig &camera)
{
    // Hand back whatever we hold, whether or not the host changed. The earlier
    // version only did so on a change of host, and the token was then cleared
    // regardless — so pointing a client at the same camera again, which the
    // "Test" button does on every press, silently abandoned a live session.
    releaseSession();
    m_camera = camera;
    m_token.clear();

    // The log must never carry these, wherever they end up being printed.
    Log::addSecret(camera.password);
    if (!camera.uid.isEmpty())
        Log::addSecret(camera.uid);
}

void ReolinkClient::releaseSession()
{
    if (m_token.isEmpty())
        return;

    // Sessions are a scarce resource on these cameras — six or eight for the
    // whole device, shared with the phone app and the web interface — and they
    // are only freed by logging out or by waiting for the lease to lapse.
    // Without this, every settings dialog and every snapshot left one behind
    // until the camera answered -5 "max session" and appeared to be broken.
    //
    // Sent detached: this runs from the destructor, so nothing owned by this
    // object may outlive the call. Nobody waits for the answer; there is
    // nothing useful to do with it.
    QUrl url = apiUrl(QStringLiteral("Logout"));
    const QString token = m_token;
    m_token.clear();

    auto *net = new QNetworkAccessManager;
    QNetworkRequest request(url);
    request.setHeader(QNetworkRequest::ContentTypeHeader,
                      QStringLiteral("application/json"));
    if (m_camera.https) {
        QSslConfiguration ssl = QSslConfiguration::defaultConfiguration();
        ssl.setPeerVerifyMode(QSslSocket::VerifyNone);
        request.setSslConfiguration(ssl);
    }

    QJsonObject entry;
    entry[QStringLiteral("cmd")] = QStringLiteral("Logout");
    entry[QStringLiteral("action")] = 0;
    entry[QStringLiteral("param")] = QJsonObject();
    QJsonArray body;
    body.append(entry);

    QNetworkReply *reply =
        net->post(request, QJsonDocument(body).toJson(QJsonDocument::Compact));

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

    const bool done = reply->isFinished();
    reply->deleteLater();
    net->deleteLater();

    Q_UNUSED(token);
    LEO_DEBUG(Api, m_camera.label(),
              done ? QStringLiteral("Logout acknowledged, session released")
                   : QStringLiteral("Logout sent, no answer within %1 ms")
                         .arg(kLogoutWaitMs));
}

QString ReolinkClient::describeError(int rspCode)
{
    switch (rspCode) {
    case -3:   return tr("File format not recognised.");
    case -4:   return tr("Invalid input.");
    case -5:   return tr("The camera has no free sessions. It allows only a "
                         "handful at once, shared with the phone app and its "
                         "web page. Close those, or wait a minute for the old "
                         "ones to lapse.");
    case -6:   return tr("Session expired.");
    case -7:   return tr("Wrong user name or password.");
    case -8:   return tr("Timed out.");
    case -9:   return tr("This firmware does not support that command.");
    case -12:  return tr("Could not read the configuration.");
    case -13:  return tr("Could not verify the configuration.");
    case -17:  return tr("Part of the camera did not answer. Depending on what "
                         "was asked, that means no SD card is fitted, or the "
                         "camera has no way out to the internet.");
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
                         int action, bool mayRetry)
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

    const QByteArray payload = QJsonDocument(body).toJson(QJsonDocument::Compact);
    LEO_DEBUG(Api, m_camera.label(),
              QStringLiteral("→ %1 action=%2 %3")
                  .arg(command).arg(action)
                  .arg(param.isEmpty() ? QString()
                                       : QString::fromUtf8(payload)));

    const qint64 startedAt = QDateTime::currentMSecsSinceEpoch();
    QNetworkReply *reply = m_net->post(req, payload);

    connect(reply, &QNetworkReply::finished, this,
            [this, reply, startedAt, command, param, onOk, onErr, action, mayRetry] {
        reply->deleteLater();
        const qint64 elapsed = QDateTime::currentMSecsSinceEpoch() - startedAt;

        if (reply->error() != QNetworkReply::NoError) {
            const QString message =
                tr("Cannot reach %1: %2").arg(m_camera.host, reply->errorString());
            LEO_WARN(Api, m_camera.label(),
                     QStringLiteral("← %1 network error after %2 ms: %3")
                         .arg(command).arg(elapsed).arg(reply->errorString()));
            onErr(message);
            return;
        }

        const QByteArray raw = reply->readAll();
        const QJsonDocument doc = QJsonDocument::fromJson(raw);
        if (!doc.isArray() || doc.array().isEmpty()) {
            LEO_WARN(Api, m_camera.label(),
                     QStringLiteral("← %1 unexpected reply: %2")
                         .arg(command, QString::fromUtf8(raw.left(400))));
            onErr(tr("Unexpected reply from %1.").arg(m_camera.host));
            return;
        }

        const QJsonObject first = doc.array().first().toObject();
        if (first.value(QStringLiteral("code")).toInt(-1) != 0) {
            const QJsonObject err = first.value(QStringLiteral("error")).toObject();
            const int rspCode = err.value(QStringLiteral("rspCode")).toInt();

            // A token has a lease, and a client kept around for days — the
            // status poller, for one — will outlive it. Before this, that
            // turned into a permanent failure: every later request reused the
            // dead token and the camera looked unreachable. One silent retry
            // with a fresh session is what the user would do by hand.
            if (mayRetry && !m_token.isEmpty() &&
                (rspCode == -6 || rspCode == -27)) {
                LEO_INFO(Api, m_camera.label(),
                         QStringLiteral("Session expired during %1, logging in "
                                        "again").arg(command));
                m_token.clear();
                login([this, command, param, onOk, onErr, action] {
                          post(command, param, onOk, onErr, action, false);
                      },
                      onErr);
                return;
            }

            LEO_WARN(Api, m_camera.label(),
                     QStringLiteral("← %1 failed after %2 ms: rspCode=%3 %4")
                         .arg(command).arg(elapsed).arg(rspCode)
                         .arg(err.value(QStringLiteral("detail")).toString()));
            onErr(describeError(rspCode));
            return;
        }

        LEO_DEBUG(Api, m_camera.label(),
                  QStringLiteral("← %1 ok after %2 ms, %3 bytes")
                      .arg(command).arg(elapsed).arg(raw.size()));
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

    // Everything that needs a session queues behind one login.
    //
    // Without this the settings dialog alone opened around twenty. It asks for
    // every section at once, each asks for a session, and at that moment none
    // exists yet — so every one of them started its own Login. The camera
    // handed out twenty sessions, this object kept the last token and forgot
    // the other nineteen, and there was nothing left to log them out with. A
    // few of those and the camera answers -5 to everything, for an hour,
    // including to other programs. It looks exactly like a broken camera.
    //
    // The queue also means a burst of requests costs one round trip instead of
    // twenty, which is the difference between a dialog that opens and one that
    // stutters.
    m_waiting.append({then, onErr});
    if (m_loggingIn)
        return;
    m_loggingIn = true;

    QJsonObject user;
    user[QStringLiteral("userName")] = m_camera.user;
    user[QStringLiteral("password")] = m_camera.secret();
    QJsonObject param;
    param[QStringLiteral("User")] = user;

    post(QStringLiteral("Login"), param,
         [this](const QJsonObject &value) {
             m_loggingIn = false;
             const QJsonObject token =
                 value.value(QStringLiteral("Token")).toObject();
             m_token = token.value(QStringLiteral("name")).toString();

             // Taken before running any of them: a waiter may well ask for
             // something else that needs a session, and appending to a list
             // being iterated is a bug waiting for a slow camera.
             const QList<PendingLogin> waiting = std::move(m_waiting);
             m_waiting.clear();

             if (m_token.isEmpty()) {
                 LEO_ERROR(Api, m_camera.label(),
                           QStringLiteral("Login succeeded but returned no token"));
                 for (const PendingLogin &entry : waiting)
                     entry.onError(tr("Login returned no token."));
                 return;
             }

             // The token itself is a working key to the camera for as long as
             // it lasts, so it never reaches the log intact.
             Log::addSecret(m_token);
             LEO_DEBUG(Api, m_camera.label(),
                       QStringLiteral("Logged in as %1, lease %2 s, %3 request(s) "
                                      "were waiting")
                           .arg(m_camera.user)
                           .arg(token.value(QStringLiteral("leaseTime")).toInt())
                           .arg(waiting.size()));
             for (const PendingLogin &entry : waiting)
                 entry.then();
         },
         [this](const QString &error) {
             m_loggingIn = false;
             const QList<PendingLogin> waiting = std::move(m_waiting);
             m_waiting.clear();
             LEO_WARN(Api, m_camera.label(),
                      QStringLiteral("Login failed: %1 (%2 request(s) waiting)")
                          .arg(error).arg(waiting.size()));
             for (const PendingLogin &entry : waiting)
                 entry.onError(error);
         });
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

void ReolinkClient::reboot()
{
    login([this] {
        post(QStringLiteral("Reboot"), {},
             [this](const QJsonObject &) {
                 // The session dies with the camera; drop the token so the
                 // next request logs in again rather than failing on -6.
                 m_token.clear();
                 emit rebootAccepted();
             },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::fetchWifiSignal()
{
    login([this] {
        post(QStringLiteral("GetWifiSignal"), {},
             [this](const QJsonObject &value) {
                 emit wifiSignalReady(
                     value.value(QStringLiteral("wifiSignal")).toInt(-1));
             },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::fetchNetworkInfo()
{
    login([this] {
        // Three separate commands, collected into one object so the dialog has
        // a single thing to render. A shared pointer because each reply lands
        // in its own callback and whichever arrives last emits.
        auto merged = std::make_shared<QJsonObject>();
        auto outstanding = std::make_shared<int>(3);

        auto done = [this, merged, outstanding] {
            if (--*outstanding == 0)
                emit networkInfoReady(*merged);
        };

        post(QStringLiteral("GetLocalLink"), {},
             [this, merged, done](const QJsonObject &value) {
                 const QJsonObject link =
                     value.value(QStringLiteral("LocalLink")).toObject();
                 (*merged)[QStringLiteral("LocalLink")] = link;
                 emit linkTypeReady(
                     link.value(QStringLiteral("activeLink")).toString());
                 done();
             },
             [done](const QString &) { done(); });

        post(QStringLiteral("GetWifi"), {},
             [merged, done](const QJsonObject &value) {
                 (*merged)[QStringLiteral("Wifi")] =
                     value.value(QStringLiteral("Wifi"));
                 done();
             },
             // Ethernet-only cameras have no Wi-Fi section; not an error.
             [done](const QString &) { done(); });

        post(QStringLiteral("GetNetPort"), {},
             [merged, done](const QJsonObject &value) {
                 (*merged)[QStringLiteral("NetPort")] =
                     value.value(QStringLiteral("NetPort"));
                 done();
             },
             [done](const QString &) { done(); });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::scanWifi()
{
    login([this] {
        post(QStringLiteral("ScanWifi"), {},
             [this](const QJsonObject &value) {
                 emit wifiNetworksReady(
                     value.value(QStringLiteral("Wifi")).toArray());
             },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::applyWifi(const QString &ssid, const QString &password)
{
    login([this, ssid, password] {
        QJsonObject wifi;
        wifi[QStringLiteral("ssid")] = ssid;
        wifi[QStringLiteral("password")] = password;
        QJsonObject param;
        param[QStringLiteral("Wifi")] = wifi;

        // TestWifi first: it makes the camera try the credentials and report
        // back while still reachable on its current connection. Writing them
        // blind is how a camera ends up on no network at all.
        post(QStringLiteral("TestWifi"), param,
             [this, param](const QJsonObject &) {
                 post(QStringLiteral("SetWifi"), param,
                      [this](const QJsonObject &) { emit wifiApplied(); },
                      [this](const QString &e) { emit failed(e); });
             },
             [this](const QString &e) {
                 emit failed(tr("The camera could not join that network: %1").arg(e));
             });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::testEmail()
{
    login([this] {
        post(QStringLiteral("TestEmail"), {},
             [this](const QJsonObject &) { emit testSucceededWith(tr("E-mail")); },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::testFtp()
{
    login([this] {
        post(QStringLiteral("TestFtp"), {},
             [this](const QJsonObject &) { emit testSucceededWith(tr("FTP")); },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::fetchPerformance()
{
    auto fail = [this](const QString &e) {
        emit readoutFailed(QStringLiteral("performance"), e);
    };
    login([this, fail] {
        post(QStringLiteral("GetPerformance"), {},
             [this](const QJsonObject &value) {
                 emit performanceReady(
                     value.value(QStringLiteral("Performance")).toObject());
             },
             fail);
    },
    fail);
}

void ReolinkClient::checkFirmware()
{
    // A camera behind a network with no route out cannot reach Reolink, and
    // says so with -17. Reported here rather than through failed(), so the
    // answer appears where the question was asked.
    auto fail = [this](const QString &e) {
        emit readoutFailed(QStringLiteral("firmware"), e);
    };
    login([this, fail] {
        post(QStringLiteral("CheckFirmware"), {},
             [this](const QJsonObject &value) {
                 const QString newer =
                     value.value(QStringLiteral("newFirmware")).toVariant().toString();
                 // The camera answers 0 for "nothing newer", otherwise a
                 // version. Anything that is not a plain 0 counts as an offer.
                 const bool available = !newer.isEmpty() &&
                                        newer != QLatin1String("0");
                 emit firmwareInfo(available
                                       ? tr("Update available: %1").arg(newer)
                                       : tr("The firmware is up to date."),
                                   available);
             },
             fail);
    },
    fail);
}

void ReolinkClient::upgradeFirmware()
{
    login([this] {
        post(QStringLiteral("UpgradeOnline"), {},
             [this](const QJsonObject &) {
                 // The camera reboots into the new firmware on its own; the
                 // session dies with it.
                 m_token.clear();
                 emit firmwareInfo(
                     tr("Upgrading. The camera will restart on its own and be "
                        "unreachable for several minutes. Do not cut its power."),
                     false);
             },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::formatStorage()
{
    login([this] {
        QJsonObject param;
        param[QStringLiteral("HddInfo")] = QJsonObject{{QStringLiteral("id"), 0}};
        post(QStringLiteral("Format"), param,
             [this](const QJsonObject &) { emit storageFormatted(); },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::probeCommands(const QStringList &commands)
{
    login([this, commands] {
        auto results = std::make_shared<QMap<QString, QString>>();
        auto outstanding = std::make_shared<int>(int(commands.size()));

        for (const QString &command : commands) {
            QJsonObject param;
            param[QStringLiteral("channel")] = 0;
            // action=1 asks for the range document as well, which is what
            // reveals whether a command is genuinely implemented rather than
            // merely accepted.
            post(command, param,
                 [results, outstanding, command, this](const QJsonObject &) {
                     results->insert(command, QString());
                     if (--*outstanding == 0)
                         emit commandsProbed(*results);
                 },
                 [results, outstanding, command, this](const QString &error) {
                     results->insert(command, error);
                     if (--*outstanding == 0)
                         emit commandsProbed(*results);
                 },
                 1);
        }
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::fetchUsers()
{
    auto fail = [this](const QString &e) {
        emit readoutFailed(QStringLiteral("users"), e);
    };
    login([this, fail] {
        post(QStringLiteral("GetUser"), {},
             [this](const QJsonObject &value) {
                 emit usersReady(value.value(QStringLiteral("User")).toArray());
             },
             fail);
    },
    fail);
}

void ReolinkClient::addUser(const QString &name, const QString &password,
                            const QString &level)
{
    login([this, name, password, level] {
        QJsonObject user;
        user[QStringLiteral("userName")] = name;
        user[QStringLiteral("password")] = password;
        user[QStringLiteral("level")] = level;
        QJsonObject param;
        param[QStringLiteral("User")] = user;
        post(QStringLiteral("AddUser"), param,
             [this](const QJsonObject &) { emit usersChanged(); },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::deleteUser(const QString &name)
{
    login([this, name] {
        QJsonObject param;
        param[QStringLiteral("User")] =
            QJsonObject{{QStringLiteral("userName"), name}};
        post(QStringLiteral("DelUser"), param,
             [this](const QJsonObject &) { emit usersChanged(); },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::changePassword(const QString &name, const QString &password)
{
    login([this, name, password] {
        QJsonObject user;
        user[QStringLiteral("userName")] = name;
        user[QStringLiteral("password")] = password;
        QJsonObject param;
        param[QStringLiteral("User")] = user;
        post(QStringLiteral("ModifyUser"), param,
             [this](const QJsonObject &) { emit usersChanged(); },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
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
