#include "Discovery.h"

#include <QNetworkInterface>
#include <QRegularExpression>
#include <QTimer>
#include <QUdpSocket>
#include <QUuid>

namespace leolink {

namespace {

const QHostAddress kMulticastGroup{QStringLiteral("239.255.255.250")};
constexpr quint16 kWsDiscoveryPort = 3702;

/// The standard ONVIF NetworkVideoTransmitter probe.
QByteArray probeMessage()
{
    const QString messageId =
        QUuid::createUuid().toString(QUuid::WithoutBraces);
    return QStringLiteral(
               "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
               "<e:Envelope xmlns:e=\"http://www.w3.org/2003/05/soap-envelope\" "
               "xmlns:w=\"http://schemas.xmlsoap.org/ws/2004/08/addressing\" "
               "xmlns:d=\"http://schemas.xmlsoap.org/ws/2005/04/discovery\" "
               "xmlns:dn=\"http://www.onvif.org/ver10/network/wsdl\">"
               "<e:Header>"
               "<w:MessageID>uuid:%1</w:MessageID>"
               "<w:To e:mustUnderstand=\"true\">"
               "urn:schemas-xmlsoap-org:ws:2005:04:discovery</w:To>"
               "<w:Action e:mustUnderstand=\"true\">"
               "http://schemas.xmlsoap.org/ws/2005/04/discovery/Probe</w:Action>"
               "</e:Header>"
               "<e:Body><d:Probe><d:Types>dn:NetworkVideoTransmitter</d:Types>"
               "</d:Probe></e:Body></e:Envelope>")
        .arg(messageId)
        .toUtf8();
}

/// Pulls a value out of the ONVIF scope list, e.g. onvif://www.onvif.org/name/RLC-410W
QString scopeValue(const QString &xml, const QString &key)
{
    const QRegularExpression re(
        QStringLiteral("onvif://www\\.onvif\\.org/%1/([^\\s<]+)").arg(key));
    const auto m = re.match(xml);
    if (!m.hasMatch())
        return {};
    QString value = m.captured(1);
    value.replace(QLatin1String("%20"), QLatin1String(" "));
    return value;
}

} // namespace

Discovery::Discovery(QObject *parent) : QObject(parent) {}

void Discovery::start(int milliseconds)
{
    stop();

    m_socket = new QUdpSocket(this);
    // Bind to any port on all interfaces; replies come back as unicast to
    // whatever source port we send from.
    if (!m_socket->bind(QHostAddress::AnyIPv4, 0,
                        QUdpSocket::ShareAddress | QUdpSocket::ReuseAddressHint)) {
        emit failed(tr("Cannot open a UDP socket for discovery."));
        return;
    }
    connect(m_socket, &QUdpSocket::readyRead, this, &Discovery::readReplies);

    m_seen.clear();
    m_running = true;

    const QByteArray probe = probeMessage();

    // Send once per interface that can carry multicast. On a machine with a
    // VPN or several NICs, sending only to the default route misses cameras
    // sitting on the other one.
    int sent = 0;
    const auto interfaces = QNetworkInterface::allInterfaces();
    for (const QNetworkInterface &iface : interfaces) {
        if (!iface.flags().testFlag(QNetworkInterface::IsUp) ||
            !iface.flags().testFlag(QNetworkInterface::CanMulticast) ||
            iface.flags().testFlag(QNetworkInterface::IsLoopBack))
            continue;
        m_socket->setMulticastInterface(iface);
        if (m_socket->writeDatagram(probe, kMulticastGroup, kWsDiscoveryPort) > 0)
            ++sent;
    }
    if (sent == 0)
        m_socket->writeDatagram(probe, kMulticastGroup, kWsDiscoveryPort);

    m_timer = new QTimer(this);
    m_timer->setSingleShot(true);
    connect(m_timer, &QTimer::timeout, this, [this] {
        const int count = m_seen.size();
        stop();
        emit finished(count);
    });
    m_timer->start(milliseconds);
}

void Discovery::stop()
{
    m_running = false;
    if (m_timer) {
        m_timer->stop();
        m_timer->deleteLater();
        m_timer = nullptr;
    }
    if (m_socket) {
        m_socket->close();
        m_socket->deleteLater();
        m_socket = nullptr;
    }
}

void Discovery::readReplies()
{
    while (m_socket && m_socket->hasPendingDatagrams()) {
        QByteArray datagram(int(m_socket->pendingDatagramSize()), Qt::Uninitialized);
        QHostAddress sender;
        quint16 senderPort = 0;
        m_socket->readDatagram(datagram.data(), datagram.size(), &sender, &senderPort);

        const QString xml = QString::fromUtf8(datagram);
        if (!xml.contains(QLatin1String("ProbeMatch")))
            continue;

        DiscoveredCamera camera;
        // Strip the ::ffff: prefix an IPv4-mapped IPv6 address arrives with.
        camera.address = sender.toString().section(QLatin1Char(':'), -1);

        const QRegularExpression addrRe(
            QStringLiteral("<[^>]*XAddrs[^>]*>(.*?)</[^>]*XAddrs>"),
            QRegularExpression::DotMatchesEverythingOption);
        const auto addrMatch = addrRe.match(xml);
        if (addrMatch.hasMatch())
            camera.serviceUrl = addrMatch.captured(1).trimmed()
                                    .section(QLatin1Char(' '), 0, 0);

        camera.name = scopeValue(xml, QStringLiteral("name"));
        camera.manufacturer = scopeValue(xml, QStringLiteral("hardware"));
        camera.looksReolink =
            xml.contains(QLatin1String("reolink"), Qt::CaseInsensitive) ||
            camera.name.startsWith(QLatin1String("RLC"), Qt::CaseInsensitive) ||
            camera.name.startsWith(QLatin1String("RLN"), Qt::CaseInsensitive) ||
            camera.name.startsWith(QLatin1String("Reolink"), Qt::CaseInsensitive);

        // One device answers on several interfaces; report it once.
        if (m_seen.contains(camera.address))
            continue;
        m_seen.append(camera.address);
        emit found(camera);
    }
}

} // namespace leolink
