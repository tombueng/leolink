#include "MqttPublisher.h"

#include <QTcpSocket>
#include <QTimer>

namespace leolink {

namespace {
constexpr int kTimeoutMs = 8000;
constexpr quint8 kConnect = 0x10;
constexpr quint8 kConnAck = 0x20;
constexpr quint8 kPublish = 0x30;
constexpr quint8 kDisconnect = 0xE0;
} // namespace

MqttPublisher::MqttPublisher(QObject *parent) : QObject(parent) {}

QByteArray MqttPublisher::encodeLength(int length)
{
    // MQTT's variable-length integer: seven bits per byte, top bit is
    // "another byte follows".
    QByteArray out;
    do {
        quint8 byte = length % 128;
        length /= 128;
        if (length > 0)
            byte |= 0x80;
        out.append(static_cast<char>(byte));
    } while (length > 0);
    return out;
}

QByteArray MqttPublisher::encodeString(const QString &text)
{
    const QByteArray utf8 = text.toUtf8();
    QByteArray out;
    out.append(static_cast<char>((utf8.size() >> 8) & 0xFF));
    out.append(static_cast<char>(utf8.size() & 0xFF));
    out.append(utf8);
    return out;
}

void MqttPublisher::publish(const Settings &settings, const QByteArray &payload)
{
    if (settings.host.isEmpty() || settings.topic.isEmpty()) {
        emit failed(tr("MQTT broker or topic not set."));
        return;
    }

    auto *socket = new QTcpSocket(this);

    // One timer guards the whole exchange. Without it a broker that accepts
    // the TCP connection and then says nothing would leak a socket per event.
    auto *guard = new QTimer(socket);
    guard->setSingleShot(true);
    guard->setInterval(kTimeoutMs);
    connect(guard, &QTimer::timeout, this, [this, socket] {
        emit failed(tr("MQTT broker did not respond."));
        socket->abort();
        socket->deleteLater();
    });

    connect(socket, &QTcpSocket::errorOccurred, this,
            [this, socket](QAbstractSocket::SocketError) {
                emit failed(tr("MQTT: %1").arg(socket->errorString()));
                socket->deleteLater();
            });

    connect(socket, &QTcpSocket::connected, this, [socket, settings] {
        // ── CONNECT ─────────────────────────────────────────────────────────
        QByteArray variable;
        variable += encodeString(QStringLiteral("MQTT"));   // protocol name
        variable += char(0x04);                             // level 4 = 3.1.1

        quint8 flags = 0x02;                                // clean session
        if (!settings.username.isEmpty())
            flags |= 0x80;
        if (!settings.password.isEmpty())
            flags |= 0x40;
        variable += static_cast<char>(flags);
        variable += char(0x00);
        variable += char(0x3C);                             // keep-alive 60 s

        QByteArray body;
        body += encodeString(settings.clientId.isEmpty()
                                 ? QStringLiteral("leolink")
                                 : settings.clientId);
        if (!settings.username.isEmpty())
            body += encodeString(settings.username);
        if (!settings.password.isEmpty())
            body += encodeString(settings.password);

        QByteArray packet;
        packet += static_cast<char>(kConnect);
        packet += encodeLength(variable.size() + body.size());
        packet += variable;
        packet += body;
        socket->write(packet);
    });

    connect(socket, &QTcpSocket::readyRead, this,
            [this, socket, settings, payload, guard] {
                const QByteArray reply = socket->readAll();
                if (reply.size() < 4 ||
                    quint8(reply[0]) != kConnAck) {
                    emit failed(tr("MQTT: unexpected reply from the broker."));
                    socket->disconnectFromHost();
                    socket->deleteLater();
                    return;
                }
                const quint8 returnCode = quint8(reply[3]);
                if (returnCode != 0) {
                    static const char *reasons[] = {
                        "", "unacceptable protocol version", "client id rejected",
                        "server unavailable", "bad user name or password",
                        "not authorised"};
                    const QString why =
                        returnCode < 6 ? QString::fromLatin1(reasons[returnCode])
                                       : QStringLiteral("code %1").arg(returnCode);
                    emit failed(tr("MQTT refused the connection: %1").arg(why));
                    socket->disconnectFromHost();
                    socket->deleteLater();
                    return;
                }

                // ── PUBLISH (QoS 0, so no packet id and no ack) ─────────────
                QByteArray variable = encodeString(settings.topic);
                QByteArray packet;
                packet += static_cast<char>(kPublish |
                                            (settings.retain ? 0x01 : 0x00));
                packet += encodeLength(variable.size() + payload.size());
                packet += variable;
                packet += payload;
                socket->write(packet);

                const char disconnectPacket[] = {char(kDisconnect), 0x00};
                socket->write(disconnectPacket, 2);
                socket->flush();

                guard->stop();
                emit published(settings.topic);
                socket->disconnectFromHost();
                socket->deleteLater();
            });

    guard->start();
    socket->connectToHost(settings.host, settings.port);
}

} // namespace leolink
