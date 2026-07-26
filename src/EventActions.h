// What leolink does when a camera reports something.
#pragma once

#include <QObject>
#include <QString>

class QNetworkAccessManager;

namespace leolink {

struct CameraConfig;
class MqttPublisher;

/// One set of reactions to an event.
///
/// The same structure is used for the global defaults and for a per-camera
/// override, so a camera either follows the house rule or replaces it wholesale
/// — no half-inherited state to reason about.
struct ActionConfig {
    // Run a shell command.
    bool runCommand{false};
    QString command;

    // Call an HTTP endpoint.
    bool callWebhook{false};
    QString webhookUrl;
    QString webhookMethod{QStringLiteral("POST")};
    /// Empty body sends a small JSON document describing the event.
    QString webhookBody;

    // Publish an MQTT message.
    bool publishMqtt{false};
    QString mqttHost;
    int mqttPort{1883};
    QString mqttTopic{QStringLiteral("leolink/%n/motion")};
    QString mqttUser;
    QString mqttPassword;
    QString mqttPayload;
    bool mqttRetain{false};

    bool anyEnabled() const { return runCommand || callWebhook || publishMqtt; }
};

/// Everything known about the event, ready to be substituted into templates.
struct EventContext {
    QString cameraName;
    QString cameraId;
    QString host;
    QString timestamp;    ///< ISO 8601
    QString eventType;    ///< "motion"
    bool active{true};
    QString recordingPath;
    QString imagePath;
};

/// Carries out an ActionConfig.
///
/// Placeholders understood everywhere a template is accepted:
///   %n camera name · %i camera id · %h host · %t ISO timestamp
///   %e event type · %s state ("on"/"off") · %f recording file · %p image file
class EventDispatcher : public QObject {
    Q_OBJECT

public:
    explicit EventDispatcher(QObject *parent = nullptr);

    void dispatch(const ActionConfig &actions, const EventContext &context);

    static QString expand(const QString &tmpl, const EventContext &context);
    /// The JSON sent when no webhook body or MQTT payload is given.
    static QByteArray defaultPayload(const EventContext &context);

signals:
    /// Reported rather than shown: an alert box per failed webhook would be
    /// unusable on a wall of cameras. MainWindow puts these in the event log.
    void actionFailed(const QString &what, const QString &reason);
    void actionSucceeded(const QString &what);

private:
    void runCommand(const ActionConfig &actions, const EventContext &context);
    void callWebhook(const ActionConfig &actions, const EventContext &context);
    void publishMqtt(const ActionConfig &actions, const EventContext &context);

    QNetworkAccessManager *m_net;
    MqttPublisher *m_mqtt;
};

} // namespace leolink
