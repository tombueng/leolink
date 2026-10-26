#include "BaichuanApi.h"

#include <atomic>

#include <QElapsedTimer>
#include <QHash>
#include <QMutex>
#include <QThread>
#include <QTimer>

#include "Baichuan.h"
#include "BaichuanCommands.h"
#include "BaichuanMessages.h"
#include "Log.h"
#include "XmlText.h"

namespace leolink {

using namespace baichuan;

namespace {

/// The alarm subscription. Drained four times a second between requests; a
/// keep-alive every 25 s, where reolink_aio waits a little under a minute;
/// and silence for three of those, keep-alives unanswered included, taken as
/// a session gone, since a camera that lost power never closes anything.
constexpr int kAlarmDrainMs = 250;
constexpr qint64 kAlarmKeepAliveMs = 25000;
constexpr qint64 kAlarmSilenceMs = 3 * kAlarmKeepAliveMs;
constexpr int kAlarmRetryFirstMs = 2000;
constexpr int kAlarmRetryLastMs = 60000;

} // namespace

// ── the connection ──────────────────────────────────────────────────────────

struct BaichuanApi::Worker : QObject {
    QString host;
    QString user;
    QString secret;
    quint16 port{9000};
    std::unique_ptr<BaichuanClient> client;

    // ── alarms ──────────────────────────────────────────────────────────────
    struct Listener {
        QPointer<QObject> context;
        AlarmHandler onAlarm;
        LostHandler onLost;
    };
    QHash<int, Listener> listeners;
    /// Takes what the camera pushes between one request and the next.
    QTimer *drainTimer{nullptr};
    QElapsedTimer heard;
    QElapsedTimer sinceKeepAlive;
    /// Before the next attempt at a session that went, doubling.
    int retryMs{kAlarmRetryFirstMs};
    bool retryPending{false};

    ~Worker() override
    {
        if (client)
            client->close();
    }

    /// A logged-in client, or why there is none. Subscribed to the alarms if
    /// anyone is listening, so a session made again for any reason — a
    /// dropped one, a firmware upload — carries on where the last left off.
    QString open()
    {
        if (client)
            return {};
        client = std::make_unique<BaichuanClient>(host, user, secret, port);
        if (!client->login()) {
            const QString why = client->lastError();
            client.reset();
            return QObject::tr("Cannot reach %1 over Baichuan: %2").arg(host, why);
        }
        LEO_INFO(Baichuan, host, QStringLiteral("Settings session open"));
        client->onPush = [this](const BcHeader &header, const QString &text) {
            heard.restart();
            if (header.msgType == kAlarm)
                dispatch(text);
        };
        if (!listeners.isEmpty())
            subscribe();
        return {};
    }

    void subscribe()
    {
        client->subscribeAlarms();
        heard.restart();
        sinceKeepAlive.restart();
        LEO_INFO(Baichuan, host, QStringLiteral("Subscribed to the camera's alarms"));
    }

    void dispatch(const QString &xml)
    {
        for (const Alarm &a : parseAlarms(xml)) {
            for (const Listener &l : std::as_const(listeners)) {
                if (!l.context)
                    continue;
                const AlarmHandler handler = l.onAlarm;
                QMetaObject::invokeMethod(l.context.data(), [handler, a] {
                    handler(a.channel, a.active, a.what);
                }, Qt::QueuedConnection);
            }
        }
    }

    void addListener(int id, const Listener &listener)
    {
        listeners.insert(id, listener);
        if (!drainTimer) {
            drainTimer = new QTimer(this);
            drainTimer->setInterval(kAlarmDrainMs);
            QObject::connect(drainTimer, &QTimer::timeout, this, [this] { drain(); });
        }
        if (listeners.size() == 1) {
            // Subscribed on the session there is, or on the one the first
            // drain makes.
            if (client)
                subscribe();
            drainTimer->start();
        }
    }

    void removeListener(int id)
    {
        listeners.remove(id);
        if (!listeners.isEmpty())
            return;
        // There is no message that ends a subscription; the session is let go
        // instead, and the next settings request opens a quiet one.
        if (drainTimer)
            drainTimer->stop();
        if (client) {
            client->close();
            client.reset();
        }
    }

    /// Between requests: whatever the camera has pushed, a keep-alive when
    /// one is due, and a new session if this one has gone.
    void drain()
    {
        for (auto it = listeners.begin(); it != listeners.end();) {
            it = it->context ? std::next(it) : listeners.erase(it);
        }
        if (listeners.isEmpty()) {
            removeListener(-1);
            return;
        }
        if (!client) {
            if (retryPending)
                return;
            if (const QString why = open(); !why.isEmpty()) {
                lost(why);
                return;
            }
            retryMs = kAlarmRetryFirstMs;
        }

        BcHeader header;
        QString text;
        while (client->pollText(header, text)) {
            heard.restart();
            if (header.msgType == kAlarm)
                dispatch(text);
        }

        if (!client->isConnected()) {
            lost(QStringLiteral("the camera closed the connection"));
        } else if (heard.elapsed() > kAlarmSilenceMs) {
            lost(QStringLiteral("nothing heard for %1 s").arg(kAlarmSilenceMs / 1000));
        } else if (sinceKeepAlive.elapsed() > kAlarmKeepAliveMs) {
            client->send(kLinkType);
            sinceKeepAlive.restart();
        }
    }

    /// The session went: say so, and try again after a pause that doubles —
    /// a camera restarting comes back, and one that is gone should not be
    /// asked every quarter of a second.
    void lost(const QString &why)
    {
        if (client) {
            client->close();
            client.reset();
        }
        LEO_WARN(Baichuan, host,
                 QStringLiteral("Alarm subscription lost (%1) — trying again in %2 s")
                     .arg(why).arg(retryMs / 1000));
        for (const Listener &l : std::as_const(listeners)) {
            if (!l.context)
                continue;
            const LostHandler handler = l.onLost;
            QMetaObject::invokeMethod(l.context.data(), [handler, why] { handler(why); },
                                      Qt::QueuedConnection);
        }
        retryPending = true;
        QTimer::singleShot(retryMs, this, [this] { retryPending = false; });
        retryMs = qMin(retryMs * 2, kAlarmRetryLastMs);
    }

    QJsonObject run(int channel, const QString &command, const QJsonObject &param,
                    int action)
    {
        // Once more on a fresh connection if the old one has gone: the camera
        // drops a session it thinks idle, and that is not worth an error.
        for (int attempt = 0; attempt < 2; ++attempt) {
            if (const QString why = open(); !why.isEmpty())
                return errorEntry(command, kConnectionLost, why);
            const QJsonObject entry =
                translate(*client, channel, command, param, action);
            const int code = entry.value(QStringLiteral("error")).toObject()
                                 .value(QStringLiteral("rspCode")).toInt();
            if (code != kConnectionLost)
                return entry;
            client->close();
            client.reset();
        }
        return errorEntry(command, kConnectionLost,
                          QObject::tr("Lost the connection to %1.").arg(host));
    }
};

namespace {

QMutex &registryLock()
{
    static QMutex lock;
    return lock;
}

QHash<QString, std::weak_ptr<BaichuanApi>> &registry()
{
    static QHash<QString, std::weak_ptr<BaichuanApi>> table;
    return table;
}

} // namespace

std::shared_ptr<BaichuanApi> BaichuanApi::forCamera(const CameraConfig &camera,
                                                    const QString &secret)
{
    const QMutexLocker lock(&registryLock());
    std::weak_ptr<BaichuanApi> &slot =
        registry()[camera.host + QLatin1Char(':') + QString::number(camera.baichuanPort)];
    if (std::shared_ptr<BaichuanApi> existing = slot.lock())
        return existing;
    std::shared_ptr<BaichuanApi> made(new BaichuanApi(camera, secret));
    slot = made;
    return made;
}

BaichuanApi::BaichuanApi(const CameraConfig &camera, const QString &secret)
{
    m_thread = new QThread;
    m_thread->setObjectName(QStringLiteral("baichuan-api ") + camera.host);
    m_worker = new Worker;
    m_worker->host = camera.host;
    m_worker->user = camera.user;
    m_worker->secret = secret;
    m_worker->port = camera.baichuanPort;
    m_worker->moveToThread(m_thread);
    // Deleted on its own thread, where its socket lives, once the loop stops.
    QObject::connect(m_thread, &QThread::finished, m_worker, &QObject::deleteLater);
    m_thread->start();
}

BaichuanApi::~BaichuanApi()
{
    m_thread->quit();
    m_thread->wait();
    delete m_thread;
}

void BaichuanApi::call(const QString &command, const QJsonObject &param, int action,
                       QObject *context, Reply reply)
{
    const int channel = param.value(QStringLiteral("channel")).toInt(0);
    QPointer<QObject> guard(context);
    Worker *worker = m_worker;
    QMetaObject::invokeMethod(
        m_worker,
        [worker, channel, command, param, action, guard, reply] {
            const QJsonObject entry = worker->run(channel, command, param, action);
            if (guard)
                QMetaObject::invokeMethod(guard.data(), [reply, entry] { reply(entry); },
                                          Qt::QueuedConnection);
        },
        Qt::QueuedConnection);
}

int BaichuanApi::watchAlarms(QObject *context, AlarmHandler onAlarm, LostHandler onLost)
{
    static std::atomic_int nextId{1};
    const int id = nextId++;
    const Worker::Listener listener{QPointer<QObject>(context), std::move(onAlarm),
                                    std::move(onLost)};
    Worker *worker = m_worker;
    QMetaObject::invokeMethod(m_worker, [worker, id, listener] {
        worker->addListener(id, listener);
    }, Qt::QueuedConnection);
    return id;
}

void BaichuanApi::unwatchAlarms(int id)
{
    Worker *worker = m_worker;
    QMetaObject::invokeMethod(m_worker, [worker, id] { worker->removeListener(id); },
                              Qt::QueuedConnection);
}

QList<BaichuanApi::Alarm> BaichuanApi::parseAlarms(const QString &xml)
{
    QList<Alarm> alarms;
    for (const QString &event : xml::all(xml, QStringLiteral("AlarmEvent"))) {
        bool ok = false;
        const int channel = xml::text(event, QStringLiteral("channelId")).toInt(&ok);
        if (!ok)
            continue;
        // Both lists are comma-separated.
        QStringList what;
        const QStringList status = xml::text(event, QStringLiteral("status"))
                                       .split(QLatin1Char(','), Qt::SkipEmptyParts);
        for (const QString &s : status) {
            if (s.trimmed() == QLatin1String("MD"))
                what << QStringLiteral("MD");
        }
        const QStringList kinds = xml::text(event, QStringLiteral("AItype"))
                                      .split(QLatin1Char(','), Qt::SkipEmptyParts);
        for (const QString &k : kinds) {
            const QString kind = k.trimmed();
            if (!kind.isEmpty() && kind != QLatin1String("none"))
                what << kind;
        }
        alarms.append({channel, !what.isEmpty(), what.join(QLatin1Char(','))});
    }
    return alarms;
}

void BaichuanApi::uploadFirmware(const QString &fileName, const QByteArray &pak,
                                 QObject *context, Progress progress, Done done)
{
    QPointer<QObject> guard(context);
    Worker *worker = m_worker;
    QMetaObject::invokeMethod(
        m_worker,
        [worker, fileName, pak, guard, progress, done] {
            const auto toContext = [guard](auto f) {
                if (guard)
                    QMetaObject::invokeMethod(guard.data(), f, Qt::QueuedConnection);
            };
            // Always on a fresh session. The one the dialog's reads opened has
            // usually been dropped by the time anyone picks a file — an E1 Pro
            // hangs up within a minute of quiet — and a dead socket is not
            // found out until the first write. Nor retried once under way, as
            // a settings read is: half a file is not something to start
            // sending again behind the camera's back.
            if (worker->client) {
                worker->client->close();
                worker->client.reset();
            }
            QString error = worker->open();
            if (error.isEmpty()) {
                LEO_INFO(Baichuan, worker->host,
                         QStringLiteral("Sending firmware %1, %2 bytes")
                             .arg(fileName).arg(pak.size()));
                const bool ok = worker->client->uploadFirmware(
                    fileName, pak, [&toContext, progress](qint64 sent, qint64 total) {
                        if (progress)
                            toContext([progress, sent, total] { progress(sent, total); });
                    });
                if (!ok)
                    error = QObject::tr("The camera did not take the firmware: %1")
                                .arg(worker->client->lastError());
                worker->client->close();
                worker->client.reset();
                if (ok)
                    LEO_INFO(Baichuan, worker->host,
                             QStringLiteral("Firmware sent; the camera installs it and restarts"));
                else
                    LEO_WARN(Baichuan, worker->host, error);
            }
            toContext([done, error] { done(error); });
        },
        Qt::QueuedConnection);
}

} // namespace leolink
