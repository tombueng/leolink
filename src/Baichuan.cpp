#include "Baichuan.h"

#include <QCryptographicHash>
#include <QDataStream>
#include <QHostAddress>
#include <QRegularExpression>
#include <QTcpSocket>
#include <QTextStream>
#include <QUdpSocket>

namespace leolink {

namespace {

constexpr quint32 kMagic = 0x0ABCDEF0;

constexpr quint16 kClassLegacy = 0x6514;       // legacy request
constexpr quint16 kClassLegacyReply = 0x6614;  // its reply — also 20 bytes
constexpr quint16 kClassModern = 0x6414;

constexpr quint16 kEncXor = 0xDC01;

constexpr quint32 kMsgLogin = 1;
constexpr quint32 kMsgLogout = 2;

constexpr int kTimeoutMs = 10000;

/// Fixed obfuscation key. Present verbatim in the vendor's own SDK.
constexpr unsigned char kXorKey[8] = {0x1F, 0x2D, 0x3C, 0x4B,
                                      0x5A, 0x69, 0x78, 0xFF};

QByteArray legacyHeader(quint32 msgType, quint32 bodyLen, quint16 enc)
{
    QByteArray out;
    QDataStream s(&out, QIODevice::WriteOnly);
    s.setByteOrder(QDataStream::LittleEndian);
    s << kMagic << msgType << bodyLen
      << quint8(0) << quint8(0) << quint16(0) << enc << kClassLegacy;
    return out;
}

QByteArray modernHeader(quint32 msgType, quint32 bodyLen, quint8 encOffset = 0)
{
    QByteArray out;
    QDataStream s(&out, QIODevice::WriteOnly);
    s.setByteOrder(QDataStream::LittleEndian);
    s << kMagic << msgType << bodyLen
      << encOffset << quint8(0) << quint16(0) << quint16(0) << kClassModern
      << quint32(0);
    return out;
}

QString tagText(const QString &xml, const QString &name)
{
    const QRegularExpression re(
        QStringLiteral("<%1>(.*?)</%1>").arg(name),
        QRegularExpression::DotMatchesEverythingOption);
    const auto m = re.match(xml);
    return m.hasMatch() ? m.captured(1).trimmed() : QString();
}

QTextStream &out()
{
    static QTextStream stream(stdout);
    return stream;
}

} // namespace

// ── helpers ─────────────────────────────────────────────────────────────────

QByteArray BaichuanClient::xorCrypt(const QByteArray &data, quint8 offset)
{
    QByteArray result(data.size(), Qt::Uninitialized);
    for (int i = 0; i < data.size(); ++i) {
        result[i] = static_cast<char>(
            static_cast<unsigned char>(data[i]) ^ kXorKey[(i + offset) % 8] ^ offset);
    }
    return result;
}

QString BaichuanClient::md5Trunc(const QString &text)
{
    return QString::fromLatin1(
               QCryptographicHash::hash(text.toUtf8(), QCryptographicHash::Md5)
                   .toHex())
        .toUpper()
        .left(31);
}

// ── client ──────────────────────────────────────────────────────────────────

BaichuanClient::BaichuanClient(QString host, QString user, QString password,
                               quint16 port)
    : m_host(std::move(host)), m_user(std::move(user)),
      m_password(std::move(password)), m_port(port)
{
}

BaichuanClient::~BaichuanClient()
{
    close();
}

bool BaichuanClient::readMessage(BcHeader &header, QByteArray &body)
{
    if (!m_socket)
        return false;

    while (m_socket->bytesAvailable() < 20) {
        if (!m_socket->waitForReadyRead(kTimeoutMs)) {
            m_error = QStringLiteral("timed out waiting for a reply");
            return false;
        }
    }

    QByteArray head = m_socket->read(20);
    QDataStream s(head);
    s.setByteOrder(QDataStream::LittleEndian);

    quint32 magic = 0;
    s >> magic >> header.msgType >> header.bodyLen >> header.encOffset
      >> header.streamId >> header.handle >> header.field16 >> header.msgClass;

    if (magic != kMagic) {
        m_error = QStringLiteral("not a Baichuan frame (magic 0x%1)")
                      .arg(magic, 8, 16, QLatin1Char('0'));
        return false;
    }

    // Header length follows the message class. 0x6614 is the reply to a legacy
    // request and arrives with a 20-byte header — the published dissector
    // groups it with the 24-byte classes, but the hardware disagrees. Read four
    // bytes too many here and the body is short, decryption yields noise.
    header.headerLen =
        (header.msgClass == kClassLegacy || header.msgClass == kClassLegacyReply)
            ? 20
            : 24;

    if (header.headerLen == 24) {
        while (m_socket->bytesAvailable() < 4) {
            if (!m_socket->waitForReadyRead(kTimeoutMs)) {
                m_error = QStringLiteral("truncated header");
                return false;
            }
        }
        m_socket->read(4);   // payload offset — unused for the login exchange
    }

    body.clear();
    while (body.size() < int(header.bodyLen)) {
        if (m_socket->bytesAvailable() == 0 &&
            !m_socket->waitForReadyRead(kTimeoutMs)) {
            break;
        }
        body += m_socket->read(int(header.bodyLen) - body.size());
    }
    return true;
}

QString BaichuanClient::bodyText(const BcHeader &header, const QByteArray &body)
{
    if (body.isEmpty())
        return {};
    if (body.startsWith("<?xml"))
        return QString::fromUtf8(body);
    const QByteArray plain = xorCrypt(body, header.encOffset);
    if (plain.startsWith("<?xml") || plain.contains("<body"))
        return QString::fromUtf8(plain);
    return {};
}

bool BaichuanClient::login()
{
    m_socket = new QTcpSocket;
    m_socket->connectToHost(m_host, m_port);
    if (!m_socket->waitForConnected(kTimeoutMs)) {
        m_error = QStringLiteral("cannot connect to %1:%2 — %3")
                      .arg(m_host).arg(m_port).arg(m_socket->errorString());
        return false;
    }

    // 1. Legacy login, asking for XOR obfuscation.
    QByteArray body;
    body += md5Trunc(m_user).toLatin1().leftJustified(32, '\0');
    body += md5Trunc(m_password).toLatin1().leftJustified(32, '\0');
    m_socket->write(legacyHeader(kMsgLogin, body.size(), kEncXor) + body);
    m_socket->flush();

    // 2. Nonce.
    BcHeader header;
    QByteArray reply;
    if (!readMessage(header, reply))
        return false;

    const QString nonce = tagText(bodyText(header, reply), QStringLiteral("nonce"));
    if (nonce.isEmpty()) {
        m_error = QStringLiteral("no nonce in the reply (class 0x%1)")
                      .arg(header.msgClass, 4, 16, QLatin1Char('0'));
        return false;
    }

    // 3. Modern login. Binding the credentials to the nonce is what stops a
    //    captured login from being replayed.
    const QString xml =
        QStringLiteral("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<body>\n"
                       "<LoginUser version=\"1.1\">\n"
                       "<userName>%1</userName>\n"
                       "<password>%2</password>\n"
                       "<userVer>1</userVer>\n</LoginUser>\n"
                       "<LoginNet version=\"1.1\">\n<type>LAN</type>\n"
                       "<udpPort>0</udpPort>\n</LoginNet>\n</body>\n")
            .arg(md5Trunc(m_user + nonce), md5Trunc(m_password + nonce));

    const QByteArray encrypted = xorCrypt(xml.toUtf8(), 0);
    m_socket->write(modernHeader(kMsgLogin, encrypted.size()) + encrypted);
    m_socket->flush();

    // 4. Device info.
    if (!readMessage(header, reply))
        return false;
    if (header.isModern() && header.status() != 200) {
        m_error = QStringLiteral("login rejected, status %1").arg(header.status());
        return false;
    }
    m_deviceInfo = bodyText(header, reply);
    return true;
}

void BaichuanClient::close()
{
    if (!m_socket)
        return;
    if (m_socket->state() == QAbstractSocket::ConnectedState) {
        m_socket->write(modernHeader(kMsgLogout, 0));
        m_socket->flush();
        m_socket->waitForBytesWritten(1000);
    }
    m_socket->disconnectFromHost();
    delete m_socket;
    m_socket = nullptr;
}

QString BaichuanClient::field(const QString &name) const
{
    return tagText(m_deviceInfo, name);
}

// ── probes ──────────────────────────────────────────────────────────────────

int runBaichuanProbe(const QString &host, const QString &user,
                     const QString &password)
{
    out() << "Baichuan probe against " << host << ":9000\n\n";
    out().flush();

    BaichuanClient client(host, user, password);
    if (!client.login()) {
        out() << "FAILED: " << client.lastError() << "\n";
        out().flush();
        return 1;
    }

    out() << "Login succeeded.\n\n";
    const QStringList fields{
        QStringLiteral("type"),        QStringLiteral("channelNum"),
        QStringLiteral("ptzMode"),     QStringLiteral("diskNum"),
        QStringLiteral("sdCard"),      QStringLiteral("resolutionName"),
        QStringLiteral("secretCode"),  QStringLiteral("authMode")};
    for (const QString &f : fields) {
        const QString v = client.field(f);
        if (!v.isEmpty())
            out() << "  " << f.leftJustified(16) << v << "\n";
    }
    out() << "\nNote: <sdCard> means 'supported', <diskNum> says whether a card "
             "is actually fitted.\n";
    out().flush();
    return 0;
}

// ── P2P (untested) ──────────────────────────────────────────────────────────

namespace {

constexpr quint32 kUdpMagicDiscovery = 0x2A87CF3A;
constexpr quint16 kP2PPort = 9999;

QStringList rendezvousServers()
{
    QStringList list{QStringLiteral("p2p.reolink.com")};
    for (int i = 1; i <= 11; ++i)
        list << QStringLiteral("p2p%1.reolink.com").arg(i);
    return list;
}

} // namespace

int runP2PProbe(const QString &uid, const QString &user, const QString &password)
{
    Q_UNUSED(user)
    Q_UNUSED(password)

    out() << "P2P lookup for UID " << uid << "\n"
          << "WARNING: this path has never been run against real hardware.\n"
          << "         The author has no P2P-capable camera. Please report\n"
          << "         what you see at github.com/tombueng/leolink/issues\n\n";
    out().flush();

    // Step 1: C2mQ — ask the rendezvous servers which registrar and relay
    // handle this UID. Steps 3-6 (C2rC / R2cCr / C2dT / D2cCfm) need a real
    // device on the other end to develop against, so they stop here rather
    // than pretend to work.
    const QString xml =
        QStringLiteral("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<P2P>\n"
                       "<C2M_Q>\n<uid>%1</uid>\n<p>%2</p>\n</C2M_Q>\n</P2P>\n")
            .arg(uid, QString::fromLatin1(
                          QCryptographicHash::hash(uid.toUtf8(),
                                                   QCryptographicHash::Md5)
                              .toHex()).left(16).toUpper());

    const quint16 tid = 1;
    const QByteArray payload = BaichuanClient::xorCrypt(xml.toUtf8(), tid & 0xFF);

    QByteArray packet;
    {
        QDataStream s(&packet, QIODevice::WriteOnly);
        s.setByteOrder(QDataStream::LittleEndian);
        quint32 checksum = 0;
        for (unsigned char c : payload)
            checksum += c;
        checksum += tid;
        // The checksum is the least certain part of this packet: it is derived
        // from a prose description, not from captured traffic. If the servers
        // stay silent, suspect this first.
        s << kUdpMagicDiscovery << quint32(payload.size()) << quint32(1)
          << quint32(tid) << checksum;
    }
    packet += payload;

    QUdpSocket socket;
    if (!socket.bind()) {
        out() << "Cannot open a UDP socket.\n";
        out().flush();
        return 1;
    }

    const QStringList servers = rendezvousServers();
    for (const QString &server : servers)
        socket.writeDatagram(packet, QHostAddress(server), kP2PPort);
    out() << "Query sent to " << servers.size() << " rendezvous servers.\n";
    out().flush();

    int replies = 0;
    while (socket.waitForReadyRead(5000)) {
        while (socket.hasPendingDatagrams()) {
            QByteArray datagram(int(socket.pendingDatagramSize()), Qt::Uninitialized);
            QHostAddress sender;
            socket.readDatagram(datagram.data(), datagram.size(), &sender);
            ++replies;
            out() << "\nReply from " << sender.toString() << " ("
                  << datagram.size() << " bytes)\n";
            if (datagram.size() > 20) {
                const QByteArray plain =
                    BaichuanClient::xorCrypt(datagram.mid(20), tid & 0xFF);
                out() << QString::fromUtf8(plain.left(400)) << "\n";
            }
            out().flush();
        }
    }

    if (replies == 0) {
        out() << "\nNo replies. Likely causes, in order:\n"
                 "  1. the discovery checksum above is wrong\n"
                 "  2. the UID is not correct\n"
                 "  3. no route to the rendezvous servers\n";
        out().flush();
        return 1;
    }

    out() << "\nGot " << replies << " reply/replies. Steps 3-6 of the "
             "handshake are not implemented yet —\nplease attach this output "
             "to an issue so they can be.\n";
    out().flush();
    return 0;
}

} // namespace leolink
