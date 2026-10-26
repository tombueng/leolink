#include "CameraProbe.h"

#include <QDeadlineTimer>
#include <QList>
#include <QRegularExpression>
#include <QStringList>
#include <QTcpSocket>

#include "Baichuan.h"
#include "BaichuanMessages.h"

namespace leolink {

namespace {

/// Long enough for a camera on poor Wi-Fi, which can take a second to answer
/// anything; short enough that one which is off does not hold up the others.
constexpr int kPortTimeoutMs = 2000;

struct Port {
    quint16 number;
    bool open{false};
};

/// Every port tried at once, so the slowest decides the wait rather than the
/// sum of them. A closed port refuses at once; only a filtered one runs out
/// the clock.
void probePorts(const QString &host, QList<Port> &ports)
{
    QList<QTcpSocket *> sockets;
    for (const Port &port : ports) {
        auto *socket = new QTcpSocket;
        socket->connectToHost(host, port.number);
        sockets.append(socket);
    }

    const QDeadlineTimer deadline(kPortTimeoutMs);
    for (int i = 0; i < sockets.size(); ++i) {
        QTcpSocket *socket = sockets[i];
        if (socket->state() != QAbstractSocket::ConnectedState)
            socket->waitForConnected(int(qMax<qint64>(0, deadline.remainingTime())));
        ports[i].open = socket->state() == QAbstractSocket::ConnectedState;
        socket->abort();
        delete socket;
    }
}

/// What the camera said about one service in its port list: switched on,
/// switched off, or not mentioned at all — an E1 lists no RTMP port.
enum class Stated { On, Off, Silent };

Stated stated(const QString &xml, const QString &element)
{
    const QRegularExpression re(
        QStringLiteral("<%1\\b[^>]*>.*?<enable>(\\d)</enable>.*?</%1>").arg(element),
        QRegularExpression::DotMatchesEverythingOption);
    const QRegularExpressionMatch m = re.match(xml);
    if (!m.hasMatch())
        return Stated::Silent;
    return m.captured(1) == QLatin1String("1") ? Stated::On : Stated::Off;
}

} // namespace

Capabilities CameraProbe::run(const CameraConfig &camera, const QString &secret)
{
    QList<Port> ports{{80}, {443}, {554}, {1935}, {8000}, {9000}};
    probePorts(camera.host, ports);
    QList<quint16> open;
    for (const Port &p : ports)
        if (p.open)
            open.append(p.number);

    bool login = false;
    QString portList;
    if (open.contains(9000)) {
        BaichuanClient client(camera.host, camera.user, secret);
        if (client.login()) {
            login = true;
            portList = client.request(baichuan::kGetPorts);
            client.close();
        }
    }
    return interpret(open, login, portList);
}

Capabilities CameraProbe::interpret(const QList<quint16> &openPorts, bool baichuanLogin,
                                    const QString &portList)
{
    const auto open = [&openPorts](quint16 number) { return openPorts.contains(number); };

    // Nothing answering at all is a camera that is off, rebooting or out of
    // reach, not one with every service disabled. Saying so would switch off
    // everything leolink does with it until the next restart; leaving it
    // unknown keeps the old behaviour, which recovers by itself.
    if (openPorts.isEmpty())
        return {};

    Capabilities caps;
    caps.known = true;
    caps.baichuan = baichuanLogin;

    // Only believed together with the port: see the class comment.
    const auto offered = [&](const QString &element, quint16 number) {
        if (!open(number))
            return false;
        return portList.isEmpty() || stated(portList, element) != Stated::Off;
    };
    caps.http = offered(QStringLiteral("HttpPort"), 80);
    caps.https = offered(QStringLiteral("HttpsPort"), 443);
    caps.rtsp = offered(QStringLiteral("RtspPort"), 554);
    caps.onvif = offered(QStringLiteral("OnvifPort"), 8000);
    // RTMP is reached through the web server rather than directly, so its own
    // port is not what decides. Where the camera says nothing, an open 1935
    // is the only evidence there is.
    const Stated rtmp = portList.isEmpty() ? Stated::Silent
                                           : stated(portList, QStringLiteral("RtmpPort"));
    caps.rtmp = rtmp == Stated::On || (rtmp == Stated::Silent && open(1935));
    return caps;
}

QString CameraProbe::describe(const CameraConfig &camera)
{
    const Capabilities &c = camera.caps;
    if (!c.known)
        return QStringLiteral("Did not answer on any port; assuming everything "
                              "until it does");
    QStringList offers;
    if (c.http)
        offers << QStringLiteral("HTTP");
    if (c.https)
        offers << QStringLiteral("HTTPS");
    if (c.rtmp)
        offers << QStringLiteral("RTMP");
    if (c.rtsp)
        offers << QStringLiteral("RTSP");
    if (c.onvif)
        offers << QStringLiteral("ONVIF");
    if (c.baichuan)
        offers << QStringLiteral("Baichuan");
    QString line = QStringLiteral("Offers %1; video over %2")
                       .arg(offers.isEmpty() ? QStringLiteral("nothing usable")
                                             : offers.join(QStringLiteral(", ")),
                            camera.effectiveTransport());
    if (camera.transport != QLatin1String("auto"))
        line += QStringLiteral(" (set by hand)");
    return line;
}

} // namespace leolink
