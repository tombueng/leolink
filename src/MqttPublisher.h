// Minimal MQTT 3.1.1 publisher — connect, publish, disconnect.
#pragma once

#include <QObject>
#include <QString>

namespace leolink {

/// Publishes a single retained-or-not message at QoS 0 and closes again.
///
/// Deliberately not a full MQTT client. leolink only ever needs to fire one
/// short message when something happens, and a fire-and-forget publisher fits
/// that in about a hundred lines. Pulling in a client library for this would
/// add a dependency to every package and every app-store submission for no
/// benefit.
///
/// QoS 0 means the broker is not asked to acknowledge. For an alert that is
/// the right trade: a late or duplicated notification is worse than a lost one,
/// and the event log is the authoritative record either way.
///
/// TLS is not implemented. Use it on a trusted network, or point it at a local
/// broker that bridges onward.
class MqttPublisher : public QObject {
    Q_OBJECT

public:
    explicit MqttPublisher(QObject *parent = nullptr);

    struct Settings {
        QString host;
        quint16 port{1883};
        QString topic;
        QString username;
        QString password;
        QString clientId;
        bool retain{false};
    };

    /// Connects, publishes, disconnects. Reports through published()/failed().
    void publish(const Settings &settings, const QByteArray &payload);

signals:
    void published(const QString &topic);
    void failed(const QString &reason);

private:
    static QByteArray encodeLength(int length);
    static QByteArray encodeString(const QString &text);
};

} // namespace leolink
