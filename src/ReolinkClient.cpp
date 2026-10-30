#include "ReolinkClient.h"

#include <memory>

#include <QJsonArray>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QCoreApplication>
#include <QHash>
#include <QPointer>
#include <QThread>
#include <QTimer>
#include <QUrlQuery>

#include "BaichuanApi.h"
#include "BaichuanLink.h"
#include "HttpApiLink.h"
#include "Firmware.h"
#include "Log.h"
#include "Protocols.h"

namespace leolink {

/// The throttle for one address. See ReolinkClient::m_host.
struct HostGate {
    /// Requests on the wire to this device, from every client at once.
    int inFlight{0};
    /// How many of them are allowed at this moment.
    int maxInFlight{1};
    /// The most it may climb back to for now. A refusal lowers it; a long
    /// spell without one raises it again, a step at a time, never past where
    /// this device started.
    int ceiling{ReolinkClient::kMaxInFlight};
    /// What this kind of device is allowed at most: four for a camera, two for
    /// a recorder. Recovery stops here.
    int startCeiling{ReolinkClient::kMaxInFlight};
    /// When it last said "not now", so recovery can wait out a hiccup.
    qint64 lastRefusalAt{0};
    /// Clean answers since the last refusal.
    int goodRun{0};
    /// Minimum gap between requests, non-zero only after the device has balked.
    int paceMs{0};
    qint64 lastSentAt{0};
    /// The device has said "not now"; nothing goes out before this.
    qint64 backOffUntil{0};
    /// Everyone talking to this address, so a slot that comes free is offered
    /// to whoever is waiting rather than only to the client that freed it.
    /// Held weakly: a client that has gone leaves a null behind, not a
    /// dangling pointer.
    QList<QPointer<ReolinkClient>> clients;
};

namespace {

/// The three tables below are main-thread only, and unguarded because of it:
/// every ReolinkClient is built with a widget for a parent and lives where the
/// widgets do. A client on a worker thread would corrupt them quietly, so the
/// functions that touch them assert it in a debug build rather than leaving the
/// rule to be rediscovered.
///
/// Gates live exactly as long as the clients using them. Weakly held, so an
/// address nobody talks to any more leaves nothing behind but an empty slot.
QHash<QString, std::weak_ptr<HostGate>> &hostGates()
{
    static QHash<QString, std::weak_ptr<HostGate>> gates;
    return gates;
}

/// Addresses known to be recorders, remembered for the life of the process.
/// Separate from the gates because it outlives them: a recorder whose last
/// client has closed is still a recorder when the next one opens.
QSet<QString> &knownRecorders()
{
    static QSet<QString> hosts;
    return hosts;
}

/// What each address turned out to be able to take. Kept apart from the gate
/// for the same reason: the last client on a recorder is usually a settings
/// dialog, and the lesson must outlive the window that learned it.
QHash<QString, int> &learnedCeilings()
{
    static QHash<QString, int> ceilings;
    return ceilings;
}

/// How long to leave a camera alone after it has refused a request outright.
constexpr int kBackOffMs = 3000;
} // namespace

void ReolinkClient::setNetworkFactory(std::function<QNetworkAccessManager *(QObject *)> factory)
{
    HttpApiLink::setNetworkFactory(std::move(factory));
}

ReolinkClient::ReolinkClient(QObject *parent)
    : QObject(parent), m_http(std::make_unique<HttpApiLink>(this))
{
}

ReolinkClient::~ReolinkClient()
{
    m_http->releaseSession();
    if (m_host)
        m_host->clients.removeAll(this);
}

void ReolinkClient::setNetwork(QNetworkAccessManager *net)
{
    m_http->setNetwork(net);
}

bool ReolinkClient::hasSession() const
{
    return !m_http->token().isEmpty();
}

CommandLink *ReolinkClient::linkFor(const QString &command)
{
    switch (route(featureOf(command), m_camera.caps)) {
    case Protocol::HttpApi: return m_http.get();
    case Protocol::Baichuan: return &baichuanLink();
    default: return nullptr;
    }
}

BaichuanLink &ReolinkClient::baichuanLink()
{
    if (!m_baichuan)
        m_baichuan = std::make_unique<BaichuanLink>(m_camera, m_camera.secret());
    return *m_baichuan;
}

std::shared_ptr<HostGate> ReolinkClient::gateFor(const QString &host)
{
    Q_ASSERT_X(QThread::currentThread() == qApp->thread(), "ReolinkClient",
               "the per-device tables are main-thread only");
    auto &gates = hostGates();
    if (auto existing = gates.value(host).lock())
        return existing;

    auto gate = std::make_shared<HostGate>();
    const int start = knownRecorders().contains(host) ? kMaxInFlightRecorder
                                                      : kMaxInFlight;
    gate->startCeiling = start;
    gate->ceiling = qMin(start, learnedCeilings().value(host, start));
    gates.insert(host, gate);

    // Addresses that have gone quiet are dropped here rather than on a timer;
    // the list is a handful of entries and this runs once per client.
    for (auto it = gates.begin(); it != gates.end();) {
        if (it.value().expired())
            it = gates.erase(it);
        else
            ++it;
    }

    return gate;
}

void ReolinkClient::noteRecorder(const QString &host)
{
    Q_ASSERT_X(QThread::currentThread() == qApp->thread(), "ReolinkClient",
               "the per-device tables are main-thread only");
    if (host.isEmpty() || knownRecorders().contains(host))
        return;
    knownRecorders().insert(host);

    // Anyone already talking to it is brought down to the recorder's ceiling
    // now, rather than at whatever point it next refuses something.
    if (auto gate = hostGates().value(host).lock()) {
        gate->startCeiling = qMin(gate->startCeiling, kMaxInFlightRecorder);
        gate->ceiling = qMin(gate->ceiling, gate->startCeiling);
        gate->maxInFlight = qMin(gate->maxInFlight, gate->ceiling);
    }
    LEO_DEBUG(Api, host,
              QStringLiteral("Recorder — at most %1 requests at a time")
                  .arg(kMaxInFlightRecorder));
}

bool ReolinkClient::isRecorder(const QString &host)
{
    Q_ASSERT_X(QThread::currentThread() == qApp->thread(), "ReolinkClient",
               "the per-device tables are main-thread only");
    return !host.isEmpty() && knownRecorders().contains(host);
}

void ReolinkClient::setCamera(const CameraConfig &camera)
{
    // Hand back whatever we hold, whether or not the host changed. The earlier
    // version only did so on a change of host, and the token was then cleared
    // regardless — so pointing a client at the same camera again, which the
    // "Test" button does on every press, silently abandoned a live session.
    m_http->releaseSession();
    m_camera = camera;
    m_http->setCamera(camera);
    m_baichuan.reset();

    // A camera on a channel other than zero is behind a recorder and says so
    // by existing. Channel 0 cannot be told apart from a standalone camera
    // from here, which is what noteRecorder() is for.
    if (camera.channel > 0)
        noteRecorder(camera.host);

    if (m_host)
        m_host->clients.removeAll(this);
    m_host = camera.host.isEmpty() ? nullptr : gateFor(camera.host);
    if (m_host)
        m_host->clients.append(this);

    // The log must never carry these, wherever they end up being printed.
    Log::addSecret(camera.password);
    if (!camera.uid.isEmpty())
        Log::addSecret(camera.uid);
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

void ReolinkClient::post(const QString &command, const QJsonObject &param,
                         const std::function<void(const QJsonObject &)> &onOk,
                         const std::function<void(const QString &)> &onErr,
                         int action, int retriesLeft)
{
    // Most callers want the value and nothing else.
    postRaw(command, param,
            [onOk](const QJsonObject &entry) {
                onOk(entry.value(QStringLiteral("value")).toObject());
            },
            onErr, action, retriesLeft);
}

void ReolinkClient::postRaw(const QString &command, const QJsonObject &param,
                            const std::function<void(const QJsonObject &)> &onOk,
                            const std::function<void(const QString &)> &onErr,
                            int action, int retriesLeft)
{
    m_queue.append([this, command, param, onOk, onErr, action, retriesLeft] {
        sendNow(command, param, onOk, onErr, action, retriesLeft);
    });
    pump();
}

void ReolinkClient::pump()
{
    if (m_queue.isEmpty() || !m_host)
        return;

    // A device that has just said "not now" gets a moment's peace — from
    // everyone, not only from whoever it said it to.
    const qint64 now = QDateTime::currentMSecsSinceEpoch();
    if (m_host->backOffUntil > now) {
        if (!m_backOffPending) {
            m_backOffPending = true;
            QTimer::singleShot(int(m_host->backOffUntil - now), this, [this] {
                m_backOffPending = false;
                pump();
            });
        }
        return;
    }

    // Pacing, once the device has shown it needs it.
    if (m_host->paceMs > 0 && m_host->inFlight > 0) {
        const qint64 due = m_host->lastSentAt + m_host->paceMs;
        if (due > now) {
            if (!m_backOffPending) {
                m_backOffPending = true;
                QTimer::singleShot(int(due - now), this, [this] {
                    m_backOffPending = false;
                    pump();
                });
            }
            return;
        }
    }

    while (m_host->inFlight < m_host->maxInFlight && !m_queue.isEmpty()) {
        const std::function<void()> next = m_queue.takeFirst();
        ++m_host->inFlight;
        m_host->lastSentAt = QDateTime::currentMSecsSinceEpoch();
        next();
        if (m_host->paceMs > 0)
            break;   // one at a time while the device is being careful
    }
}

void ReolinkClient::pumpHost()
{
    pump();
    if (!m_host)
        return;
    // Fair enough for the numbers involved: a handful of clients, each with a
    // queue that empties in a second. Whoever is asked first gets the slot.
    for (const QPointer<ReolinkClient> &other : std::as_const(m_host->clients)) {
        if (other && other != this)
            other->pump();
    }
}

void ReolinkClient::noteRefusal()
{
    if (!m_host)
        return;
    m_host->goodRun = 0;
    m_host->lastRefusalAt = QDateTime::currentMSecsSinceEpoch();

    // What it was managing when it gave up is one more than it can take, and
    // that is worth keeping. Otherwise the recovery below walks it straight
    // back to the number that has just failed, and the next dialog on this
    // device learns the same lesson from the same handful of 502s.
    if (m_host->maxInFlight > 1) {
        m_host->ceiling = qMax(1, m_host->maxInFlight - 1);
        learnedCeilings().insert(m_camera.host, m_host->ceiling);
        LEO_INFO(Api, m_camera.label(),
                 QStringLiteral("Refused at %1 requests at a time — this "
                                "device is held to %2 from now on")
                     .arg(m_host->maxInFlight).arg(m_host->ceiling));
    }

    if (m_host->maxInFlight > 1 || m_host->paceMs == 0) {
        m_host->maxInFlight = 1;
        m_host->paceMs = kPaceMs;
        LEO_INFO(Api, m_camera.label(),
                 QStringLiteral("The camera is refusing requests — slowing to "
                                "one at a time, %1 ms apart").arg(m_host->paceMs));
    }
}

void ReolinkClient::noteSuccess()
{
    if (!m_host)
        return;

    // A device that has gone a long while without refusing anything is offered
    // a little more again, one step at a time and never past what its kind
    // started with. The lesson a refusal teaches is worth keeping — but not
    // for ever: a camera held to one request at a time because of a single 502
    // an hour ago is being punished for someone else's traffic.
    const qint64 now = QDateTime::currentMSecsSinceEpoch();
    if (m_host->ceiling < m_host->startCeiling && m_host->paceMs == 0 &&
        m_host->maxInFlight >= m_host->ceiling &&
        now - m_host->lastRefusalAt > kCeilingRecoveryMs) {
        ++m_host->ceiling;
        learnedCeilings().insert(m_camera.host, m_host->ceiling);
        LEO_DEBUG(Api, m_camera.label(),
                  QStringLiteral("Quiet for a while — allowed up to %1 again")
                      .arg(m_host->ceiling));
    }

    if (m_host->maxInFlight >= m_host->ceiling && m_host->paceMs == 0)
        return;
    if (++m_host->goodRun < kSuccessesToRelax)
        return;
    m_host->goodRun = 0;
    m_host->paceMs = 0;
    m_host->maxInFlight = qMin(m_host->ceiling, m_host->maxInFlight + 1);
    LEO_DEBUG(Api, m_camera.label(),
              QStringLiteral("Answering happily again — up to %1 at a time")
                  .arg(m_host->maxInFlight));
}

void ReolinkClient::sendNow(const QString &command, const QJsonObject &param,
                            const std::function<void(const QJsonObject &)> &onOk,
                            const std::function<void(const QString &)> &onErr,
                            int action, int retriesLeft)
{
    const qint64 startedAt = QDateTime::currentMSecsSinceEpoch();
    const auto handle = [this, startedAt, command, param, onOk, onErr, action,
                         retriesLeft](bool overHttp, const QString &over,
                                      const LinkReply &reply) {
        const qint64 elapsed = QDateTime::currentMSecsSinceEpoch() - startedAt;

        // The slot is freed however this ends, and the next request started —
        // after the handler has run, so a retry keeps its place in the queue.
        // The slot belongs to the device, so it is offered to every client on
        // it and not only to this one.
        if (m_host)
            --m_host->inFlight;
        struct Pumper {
            ReolinkClient *self;
            ~Pumper() { self->pumpHost(); }
        } pumper{this};

        switch (reply.kind) {
        case LinkReply::Kind::Ok:
            noteSuccess();
            LEO_DEBUG(Api, m_camera.label(),
                      QStringLiteral("← %1 ok over %2 after %3 ms")
                          .arg(command, over).arg(elapsed));
            onOk(reply.entry);
            return;

        case LinkReply::Kind::Busy:
            // Newer firmware answers 502 or 503 whenever it is unhappy. A
            // Duo 2 was reduced to answering 502 to everything, including
            // Login, by a burst of read-only queries.
            //
            // Treated as "come back later": the queue is held off for a moment
            // so a dialog full of requests does not keep hammering a camera
            // that has already said it has had enough.
            m_lastErrorCode = kCameraOverloaded;
            if (m_host)
                m_host->backOffUntil = QDateTime::currentMSecsSinceEpoch() + kBackOffMs;
            noteRefusal();
            LEO_WARN(Api, m_camera.label(),
                     QStringLiteral("← %1 HTTP %2 after %3 ms — the camera "
                                    "is refusing requests; holding off %4 ms")
                         .arg(command).arg(reply.status).arg(elapsed).arg(kBackOffMs));

            // Asked again, after the pause. "Not now" is not "no", and a single
            // early refusal was otherwise enough to leave the whole dialog
            // empty: the requests behind it went through perfectly well, but
            // the one that was turned away never came back.
            if (retriesLeft > 0) {
                LEO_DEBUG(Api, m_camera.label(),
                          QStringLiteral("Will ask for %1 again once the camera has "
                                         "caught its breath (%2 attempt(s) left)")
                              .arg(command).arg(retriesLeft));
                postRaw(command, param, onOk, onErr, action, retriesLeft - 1);
                return;
            }
            onErr(tr("The camera is not answering requests just now. It does "
                     "this when it has had too many at once; it recovers on "
                     "its own after a moment."));
            return;

        case LinkReply::Kind::Expired:
            // A client kept around for days — the status poller, for one —
            // outlives its session's lease. Before this, that turned into a
            // permanent failure: every later request reused the dead token
            // and the camera looked unreachable. One silent retry with a fresh
            // session is what the user would do by hand.
            if (retriesLeft > 0) {
                LEO_INFO(Api, m_camera.label(),
                         QStringLiteral("Session refused during %1, logging in "
                                        "again").arg(command));
                login([this, command, param, onOk, onErr, action, retriesLeft] {
                          postRaw(command, param, onOk, onErr, action, retriesLeft - 1);
                      },
                      onErr);
                return;
            }
            [[fallthrough]];
        case LinkReply::Kind::Refused:
            // Recorded so the caller can tell "this camera has no such
            // feature" from "something went wrong". Single-threaded and set
            // immediately before the callback runs, which is the only reason a
            // shared field is acceptable here.
            m_lastErrorCode = reply.rspCode;
            LEO_WARN(Api, m_camera.label(),
                     QStringLiteral("← %1 failed over %2 after %3 ms: rspCode=%4 %5")
                         .arg(command, over).arg(elapsed).arg(reply.rspCode)
                         .arg(reply.detail));
            // Over HTTP the camera's code says it all; Baichuan's own
            // failures carry their reason as text.
            onErr(overHttp ? describeError(reply.rspCode) : reply.detail);
            return;

        case LinkReply::Kind::Missing:
            m_lastErrorCode = reply.rspCode;
            LEO_DEBUG(Api, m_camera.label(),
                      QStringLiteral("← %1 not available over %2").arg(command, over));
            // Not "this firmware cannot": the firmware may well, through the
            // web server this camera lacks.
            onErr(tr("Not available without the camera's web server."));
            return;

        case LinkReply::Kind::Garbled:
            LEO_WARN(Api, m_camera.label(),
                     QStringLiteral("← %1 unexpected reply: %2").arg(command, reply.detail));
            onErr(tr("Unexpected reply from %1.").arg(m_camera.host));
            return;

        case LinkReply::Kind::Unreachable:
            // Not the camera's answer, so no code of the camera's. A -9 left
            // over from an earlier request would pass this off as "no such
            // command".
            m_lastErrorCode = 0;
            LEO_WARN(Api, m_camera.label(),
                     QStringLiteral("← %1 network error after %2 ms: %3")
                         .arg(command).arg(elapsed).arg(reply.detail));
            onErr(tr("Cannot reach %1: %2").arg(m_camera.host, reply.detail));
            return;
        }
    };

    CommandLink *via = linkFor(command);
    if (!via) {
        // No protocol on this camera carries it: answered here, as a link
        // without the command would — and later, as a link would. Answered
        // at once it ran inside pump(), which then started again inside
        // itself for every such command queued behind it, and the caller
        // heard back before its own request had returned.
        QMetaObject::invokeMethod(this, [handle] {
            LinkReply none;
            none.kind = LinkReply::Kind::Missing;
            none.rspCode = -9;
            handle(false, QStringLiteral("any protocol"), none);
        }, Qt::QueuedConnection);
        return;
    }
    // What the answer needs to know of the link is taken now: setCamera() may
    // replace the link before the answer comes.
    const bool overHttp = via == m_http.get();
    const QString over = via->name();
    if (!overHttp)
        LEO_DEBUG(Api, m_camera.label(),
                  QStringLiteral("→ %1 action=%2 over %3").arg(command).arg(action).arg(over));
    via->send(command, param, action, this, [handle, overHttp, over](const LinkReply &reply) {
        handle(overHttp, over, reply);
    });
}

void ReolinkClient::login(const std::function<void()> &then,
                          const std::function<void(const QString &)> &onErr)
{
    // A link without sessions, Baichuan, logs in on a connection of its own;
    // a camera with no link at all has nothing to log in to.
    CommandLink *via = linkFor(QStringLiteral("Login"));
    if (!via || !via->needsLogin() || !m_http->token().isEmpty()) {
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
             const QString name = token.value(QStringLiteral("name")).toString();

             // Taken before running any of them: a waiter may well ask for
             // something else that needs a session, and appending to a list
             // being iterated is a bug waiting for a slow camera.
             const QList<PendingLogin> waiting = std::move(m_waiting);
             m_waiting.clear();

             if (name.isEmpty()) {
                 LEO_ERROR(Api, m_camera.label(),
                           QStringLiteral("Login succeeded but returned no token"));
                 for (const PendingLogin &entry : waiting)
                     entry.onError(tr("Login returned no token."));
                 return;
             }

             // The token itself is a working key to the camera for as long as
             // it lasts, so the link keeps it out of the log.
             m_http->setToken(name);
             LEO_DEBUG(Api, m_camera.label(),
                       QStringLiteral("token is %1 chars").arg(name.size()));
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
                 emit deviceIdentified(info);
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

void ReolinkClient::fetchChannelStatus()
{
    login([this] {
        post(QStringLiteral("GetChannelstatus"), {},
             [this](const QJsonObject &value) {
                 // Firmware disagrees about the case of the key, and about
                 // whether the count is worth sending at all.
                 QJsonArray status =
                     value.value(QStringLiteral("status")).toArray();
                 if (status.isEmpty())
                     status = value.value(QStringLiteral("Status")).toArray();
                 emit channelStatusReady(status);
             },
             [this](const QString &e) {
                 emit readoutFailed(QStringLiteral("channels"), e);
             });
    },
    [this](const QString &e) {
        emit readoutFailed(QStringLiteral("channels"), e);
    });
}

void ReolinkClient::fetchSection(const QString &command, const QJsonObject &param)
{
    // action=1 returns the current value *and* the permitted ranges in one
    // round trip, so the dialog can be built from a single request.
    //
    // This used to build and send its own request instead of going through
    // postRaw(). It therefore had none of the logging, none of the retry when a
    // session expires, and did not record the camera's error code — which is
    // why a firmware answering "I do not know that command" turned up as a red
    // error at the foot of the dialog with nothing in the log to explain it.
    // Through login() like everything else. Sending the request straight to
    // postRaw() looks tidier and is wrong: with no session yet the camera
    // answers "please login first" to every section at once, and the dialog
    // comes up empty.
    login([this, command, param] {
        postRaw(command, param,
                [this, command](const QJsonObject &entry) {
                    // Older firmware calls it "initial" rather than "range".
                    QJsonObject ranges =
                        entry.value(QStringLiteral("range")).toObject();
                    if (ranges.isEmpty())
                        ranges = entry.value(QStringLiteral("initial")).toObject();
                    emit sectionReady(command,
                                      entry.value(QStringLiteral("value")).toObject(),
                                      ranges);
                },
                [this, command](const QString &e) {
                    emit sectionFailed(command, m_lastErrorCode);
                    emit failed(e);
                },
                1);
    },
    [this, command](const QString &e) {
        emit sectionFailed(command, m_lastErrorCode);
        emit failed(e);
    });
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
        search[QStringLiteral("channel")] =
            channel < 0 ? m_camera.channel : channel;
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
    QUrl url = m_http->apiUrl(QStringLiteral("Playback"));
    QUrlQuery q(url.query());
    q.addQueryItem(QStringLiteral("source"), recording.name);
    q.addQueryItem(QStringLiteral("output"), recording.name);
    url.setQuery(q);
    return url;
}

QUrl ReolinkClient::downloadUrl(const Recording &recording) const
{
    QUrl url = m_http->apiUrl(QStringLiteral("Download"));
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
                 m_http->forgetToken();
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

void ReolinkClient::fetchPtzAbility()
{
    login([this] {
        QJsonObject user{{QStringLiteral("userName"), m_camera.user}};
        post(QStringLiteral("GetAbility"), {{QStringLiteral("User"), user}},
             [this](const QJsonObject &value) {
                 const QJsonArray channels = value.value(QStringLiteral("Ability"))
                                                 .toObject()
                                                 .value(QStringLiteral("abilityChn"))
                                                 .toArray();
                 const QJsonObject chn = channels.at(channel()).toObject();
                 const auto ver = [&chn](const char *key) {
                     return chn.value(QLatin1String(key)).toObject()
                         .value(QStringLiteral("ver")).toInt();
                 };
                 // ptzType 1, 2 and 5 are the kinds with a zoom lens; an E1
                 // Zoom says 5, and supportZoom 1 besides.
                 const int type = ver("ptzType");
                 emit ptzKnown(ver("ptzCtrl") > 0,
                               ver("supportZoom") > 0 || type == 1 || type == 2 ||
                                   type == 5);
             },
             [this](const QString &) {
                 // A firmware without GetAbility has no motor this knows how
                 // to drive; nothing to show, and nothing worth saying.
                 emit ptzKnown(false, false);
             });
    },
    [this](const QString &) { emit ptzKnown(false, false); });
}

void ReolinkClient::ptz(const QString &op, int speed)
{
    QJsonObject param{{QStringLiteral("channel"), channel()},
                      {QStringLiteral("op"), op}};
    if (speed > 0)
        param[QStringLiteral("speed")] = speed;
    login([this, param] {
        post(QStringLiteral("PtzCtrl"), param, [](const QJsonObject &) {},
             [this](const QString &e) { emit ptzFailed(e); });
    },
    [this](const QString &e) { emit ptzFailed(e); });
}

void ReolinkClient::ptzToPreset(int id)
{
    const QJsonObject param{{QStringLiteral("channel"), channel()},
                            {QStringLiteral("op"), QStringLiteral("ToPos")},
                            {QStringLiteral("id"), id}};
    login([this, param] {
        post(QStringLiteral("PtzCtrl"), param, [](const QJsonObject &) {},
             [this](const QString &e) { emit ptzFailed(e); });
    },
    [this](const QString &e) { emit ptzFailed(e); });
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
                 m_http->forgetToken();
                 emit firmwareInfo(
                     tr("Upgrading. The camera will restart on its own and be "
                        "unreachable for several minutes. Do not cut its power."),
                     false);
                 emit firmwareSent();
             },
             [this](const QString &e) { emit failed(e); });
    },
    [this](const QString &e) { emit failed(e); });
}

void ReolinkClient::installFirmwareFile(const QString &fileName, const QByteArray &pak)
{
    if (route(Feature::FirmwareFile, m_camera.caps) == Protocol::None) {
        emit readoutFailed(QStringLiteral("firmware"),
                           tr("Installing from a file needs the camera's port 9000, "
                              "which it does not offer."));
        return;
    }
    baichuanLink().session().uploadFirmware(
        fileName, pak, this,
        [this](qint64 sent, qint64 total) { emit firmwareProgress(sent, total); },
        [this](const QString &error) {
            if (!error.isEmpty()) {
                m_lastErrorCode = 0;
                emit readoutFailed(QStringLiteral("firmware"), error);
                return;
            }
            // The camera restarts into the new firmware; an HTTP session, if
            // there was one, dies with it.
            m_http->forgetToken();
            emit firmwareInfo(
                tr("Sent. The camera is installing it and will restart on its own, "
                   "unreachable for several minutes. Do not cut its power."),
                false);
            emit firmwareSent();
        });
}

void ReolinkClient::setFirmwareWatchTiming(int intervalMs, int limitMs)
{
    m_firmwareInterval = intervalMs;
    m_firmwareLimit = limitMs;
}

void ReolinkClient::awaitFirmware(int wantedBuild, int previousBuild)
{
    m_firmwareWatch = {true, wantedBuild, previousBuild, false, 0,
                       QDateTime::currentMSecsSinceEpoch()};
    // Not at once: a camera still writing the image answers on the old build,
    // and that says nothing yet.
    QTimer::singleShot(m_firmwareInterval, this, &ReolinkClient::pollFirmware);
}

void ReolinkClient::pollFirmware()
{
    if (!m_firmwareWatch.active)
        return;
    // The session is kept between polls. Throwing it away on every poll, as
    // this once did, opened a new one each time without closing the last, and
    // a camera still on the old build ran out of sessions within minutes and
    // answered -5 to everyone. One from before a restart is answered with -6
    // or -27, which clears it, and the next poll logs in afresh.
    auto gone = [this](const QString &) { firmwareAnswered(QString()); };
    login([this, gone] {
        post(QStringLiteral("GetDevInfo"), {},
             [this](const QJsonObject &value) {
                 firmwareAnswered(value.value(QStringLiteral("DevInfo")).toObject()
                                      .value(QStringLiteral("firmVer")).toString());
             },
             gone);
    },
    gone);
}

void ReolinkClient::firmwareAnswered(const QString &firmVer)
{
    FirmwareWatch &w = m_firmwareWatch;
    if (!w.active)
        return;
    const int seconds =
        int((QDateTime::currentMSecsSinceEpoch() - w.startedAt) / 1000);
    const int build = firmware::buildOf(firmVer);
    const auto finish = [this, &w](const QString &reason) {
        w.active = false;
        m_lastErrorCode = 0;
        emit readoutFailed(QStringLiteral("firmware"), reason);
    };

    // Gone only after three polls missed in a row, some 45 s: a restart to
    // install firmware keeps a camera away for minutes. On one miss, a camera
    // still installing that then answered on its old build was taken for one
    // that had restarted without the update, and the install was offered
    // again in the middle of it.
    if (!firmVer.isEmpty())
        w.misses = 0;
    if (firmVer.isEmpty()) {
        if (++w.misses >= 3)
            w.wentAway = true;
    } else if (w.wanted ? build == w.wanted : build > 0 && build != w.previous) {
        w.active = false;
        LEO_INFO(Api, m_camera.label(),
                 QStringLiteral("Back on firmware %1 after %2 s").arg(firmVer).arg(seconds));
        emit firmwareInstalled(firmVer);
        return;
    } else if (w.wentAway && build == w.previous) {
        LEO_WARN(Api, m_camera.label(),
                 QStringLiteral("Restarted on the old firmware %1").arg(firmVer));
        finish(tr("The camera restarted on %1, the build it had before, so the "
                  "update was not installed.").arg(firmVer));
        return;
    }
    if (seconds * 1000 >= m_firmwareLimit) {
        finish(firmVer.isEmpty()
                   ? tr("The camera has not answered for %n minute(s). It may still "
                        "be installing; leave its power on and look again later.",
                        nullptr, m_firmwareLimit / 60000)
                   : tr("The camera still reports %1 after %n minute(s).",
                        nullptr, m_firmwareLimit / 60000).arg(firmVer));
        return;
    }
    emit firmwareWaiting(seconds, !firmVer.isEmpty());
    QTimer::singleShot(m_firmwareInterval, this, &ReolinkClient::pollFirmware);
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
            param[QStringLiteral("channel")] = m_camera.channel;
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
    if (route(Feature::Snapshot, m_camera.caps) == Protocol::None) {
        emit failed(tr("Snapshots from %1 need its web server, which it does "
                       "not have.").arg(m_camera.label()));
        return;
    }
    login([this] {
        QUrl url = m_http->apiUrl(QStringLiteral("Snap"));
        QUrlQuery q(url.query());
        q.addQueryItem(QStringLiteral("channel"),
                       QString::number(m_camera.channel));
        q.addQueryItem(QStringLiteral("rs"), QStringLiteral("leolink"));
        url.setQuery(q);

        QNetworkReply *reply = m_http->get(url);
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
