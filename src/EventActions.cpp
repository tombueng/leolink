#include "EventActions.h"

#include <QJsonDocument>
#include <QJsonObject>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QNetworkRequest>
#include <QProcess>
#include <QUrl>

#include "Log.h"
#include "MqttPublisher.h"

namespace leolink {

EventDispatcher::EventDispatcher(QObject *parent)
    : QObject(parent), m_net(new QNetworkAccessManager(this)),
      m_mqtt(new MqttPublisher(this))
{
    connect(m_mqtt, &MqttPublisher::failed, this, [this](const QString &reason) {
        LEO_WARN(Event, QStringLiteral("MQTT"), reason);
        emit actionFailed(QStringLiteral("MQTT"), reason);
    });
    connect(m_mqtt, &MqttPublisher::published, this, [this](const QString &topic) {
        LEO_INFO(Event, QStringLiteral("MQTT"),
                 QStringLiteral("Published to %1").arg(topic));
        emit actionSucceeded(QStringLiteral("MQTT → %1").arg(topic));
    });
}

QString EventDispatcher::expand(const QString &tmpl, const EventContext &c)
{
    QString out = tmpl;
    out.replace(QStringLiteral("%n"), c.cameraName);
    out.replace(QStringLiteral("%i"), c.cameraId);
    out.replace(QStringLiteral("%h"), c.host);
    out.replace(QStringLiteral("%t"), c.timestamp);
    out.replace(QStringLiteral("%e"), c.eventType);
    out.replace(QStringLiteral("%s"), c.active ? QStringLiteral("on")
                                               : QStringLiteral("off"));
    out.replace(QStringLiteral("%f"), c.recordingPath);
    out.replace(QStringLiteral("%p"), c.imagePath);
    return out;
}

QByteArray EventDispatcher::defaultPayload(const EventContext &c)
{
    QJsonObject o;
    o[QStringLiteral("camera")] = c.cameraName;
    o[QStringLiteral("cameraId")] = c.cameraId;
    o[QStringLiteral("host")] = c.host;
    o[QStringLiteral("event")] = c.eventType;
    o[QStringLiteral("state")] = c.active ? QStringLiteral("on")
                                          : QStringLiteral("off");
    o[QStringLiteral("time")] = c.timestamp;
    if (!c.recordingPath.isEmpty())
        o[QStringLiteral("recording")] = c.recordingPath;
    if (!c.imagePath.isEmpty())
        o[QStringLiteral("image")] = c.imagePath;
    return QJsonDocument(o).toJson(QJsonDocument::Compact);
}

void EventDispatcher::dispatch(const ActionConfig &actions,
                               const EventContext &context)
{
    // One line per event saying what was asked for. "Nothing happened when
    // motion was detected" is the commonest complaint about this kind of
    // program, and half the time the answer is that nothing was configured.
    QStringList planned;
    if (actions.runCommand && !actions.command.isEmpty())
        planned << QStringLiteral("command");
    if (actions.callWebhook && !actions.webhookUrl.isEmpty())
        planned << QStringLiteral("webhook");
    if (actions.publishMqtt && !actions.mqttHost.isEmpty())
        planned << QStringLiteral("mqtt");
    LEO_INFO(Event, context.cameraName,
             QStringLiteral("%1 %2 → %3")
                 .arg(context.eventType,
                      context.active ? QStringLiteral("started")
                                     : QStringLiteral("ended"),
                      planned.isEmpty() ? QStringLiteral("no actions configured")
                                        : planned.join(QStringLiteral(", "))));

    if (actions.runCommand && !actions.command.isEmpty())
        runCommand(actions, context);
    if (actions.callWebhook && !actions.webhookUrl.isEmpty())
        callWebhook(actions, context);
    if (actions.publishMqtt && !actions.mqttHost.isEmpty())
        publishMqtt(actions, context);
}

void EventDispatcher::runCommand(const ActionConfig &actions,
                                 const EventContext &context)
{
    const QString command = expand(actions.command, context);
    // Detached, because a hook that blocks must not stall the video.
    if (!QProcess::startDetached(QStringLiteral("/bin/sh"),
                                 {QStringLiteral("-c"), command})) {
        LEO_WARN(Event, context.cameraName,
                 QStringLiteral("Command could not be started: %1").arg(command));
        emit actionFailed(tr("Command"), tr("could not be started"));
        return;
    }
    // The expanded command, not the template: a placeholder that resolved to
    // an empty string is invisible in the template and obvious here.
    LEO_INFO(Event, context.cameraName,
             QStringLiteral("Ran: %1").arg(command));
    emit actionSucceeded(tr("Command"));
}

void EventDispatcher::callWebhook(const ActionConfig &actions,
                                  const EventContext &context)
{
    const QUrl url(expand(actions.webhookUrl, context));
    if (!url.isValid()) {
        LEO_WARN(Event, context.cameraName,
                 QStringLiteral("Webhook URL is not valid: %1")
                     .arg(actions.webhookUrl));
        emit actionFailed(tr("Webhook"), tr("invalid URL"));
        return;
    }

    QNetworkRequest request(url);
    request.setHeader(QNetworkRequest::UserAgentHeader,
                      QStringLiteral("leolink/" LEOLINK_VERSION));

    const QByteArray body = actions.webhookBody.isEmpty()
                                ? defaultPayload(context)
                                : expand(actions.webhookBody, context).toUtf8();
    request.setHeader(QNetworkRequest::ContentTypeHeader,
                      actions.webhookBody.isEmpty()
                          ? QStringLiteral("application/json")
                          : QStringLiteral("text/plain; charset=utf-8"));

    QNetworkReply *reply = nullptr;
    const QString method = actions.webhookMethod.toUpper();
    if (method == QLatin1String("GET"))
        reply = m_net->get(request);
    else if (method == QLatin1String("PUT"))
        reply = m_net->put(request, body);
    else
        reply = m_net->post(request, body);

    const QString camera = context.cameraName;
    LEO_DEBUG(Event, camera,
              QStringLiteral("%1 %2, %3 bytes").arg(method, url.toString())
                  .arg(body.size()));

    connect(reply, &QNetworkReply::finished, this, [this, reply, url, camera] {
        reply->deleteLater();
        const int status =
            reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt();
        if (reply->error() != QNetworkReply::NoError) {
            LEO_WARN(Event, camera,
                     QStringLiteral("Webhook to %1 failed (HTTP %2): %3")
                         .arg(url.host()).arg(status).arg(reply->errorString()));
            emit actionFailed(tr("Webhook"), reply->errorString());
            return;
        }
        LEO_INFO(Event, camera,
                 QStringLiteral("Webhook to %1 answered HTTP %2")
                     .arg(url.host()).arg(status));
        emit actionSucceeded(tr("Webhook → %1").arg(url.host()));
    });
}

void EventDispatcher::publishMqtt(const ActionConfig &actions,
                                  const EventContext &context)
{
    MqttPublisher::Settings settings;
    settings.host = actions.mqttHost;
    settings.port = quint16(actions.mqttPort);
    settings.topic = expand(actions.mqttTopic, context);
    settings.username = actions.mqttUser;
    settings.password = actions.mqttPassword;
    settings.retain = actions.mqttRetain;
    settings.clientId =
        QStringLiteral("leolink-%1").arg(context.cameraId.left(8));

    const QByteArray payload = actions.mqttPayload.isEmpty()
                                   ? defaultPayload(context)
                                   : expand(actions.mqttPayload, context).toUtf8();
    LEO_DEBUG(Event, context.cameraName,
              QStringLiteral("MQTT %1:%2 topic %3, %4 bytes")
                  .arg(settings.host).arg(settings.port).arg(settings.topic)
                  .arg(payload.size()));
    m_mqtt->publish(settings, payload);
}

} // namespace leolink
