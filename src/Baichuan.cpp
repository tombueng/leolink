#include "Baichuan.h"

#include <QCryptographicHash>
#include <QDateTime>
#include <QFile>
#include <QMap>
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
constexpr quint32 kMsgVideo = 3;

constexpr int kTimeoutMs = 10000;

// ── BcMedia block magics ────────────────────────────────────────────────────
// Four ASCII characters at the start of every block inside a video message,
// written as they appear on the wire. Taken from a capture rather than from a
// specification: the published notes on this container give the magics as
// little-endian integers, which spell them backwards ("c300" for what the
// hardware actually sends as "00dc"), and the first parser written from them
// found nothing at all.
//
// The names are the ones AVI uses, which is presumably where they came from:
// "00dc" is compressed video on stream 0, "01dc" on stream 1, "wb" is audio.
constexpr char kMagicInfoV1[] = "1001";
constexpr char kMagicInfoV2[] = "1002";
constexpr char kMagicIFrame[] = "00dc";
constexpr char kMagicPFrame[] = "01dc";
constexpr char kMagicAac[] = "05wb";
constexpr char kMagicAdpcm[] = "01wb";

/// Bytes of header before the payload, per block type. Verified by checking
/// that the byte at that offset is the start of an Annex-B start code.
constexpr int kIFrameHeaderLen = 32;
constexpr int kPFrameHeaderLen = 24;
constexpr int kAudioHeaderLen = 8;

/// Field offsets inside a video block header.
constexpr int kVideoCodecOffset = 4;    ///< "H264" / "H265"
constexpr int kVideoSizeOffset = 8;     ///< payload length, u32

/// Bytes between blocks that count as alignment or a frame trailer rather than
/// as damage. Measured: four after the first key frame, three after later ones.
constexpr int kMaxTrailerBytes = 8;

/// … and inside an info block.
constexpr int kInfoLengthOffset = 4;    ///< the camera states its own size
constexpr int kInfoWidthOffset = 8;
constexpr int kInfoHeightOffset = 12;
constexpr int kInfoFpsOffset = 17;

quint32 readU32(const QByteArray &data, int offset)
{
    return quint32(quint8(data[offset])) |
           quint32(quint8(data[offset + 1])) << 8 |
           quint32(quint8(data[offset + 2])) << 16 |
           quint32(quint8(data[offset + 3])) << 24;
}

quint16 readU16(const QByteArray &data, int offset)
{
    return quint16(quint8(data[offset])) | quint16(quint8(data[offset + 1])) << 8;
}

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

// ── BcMedia container ───────────────────────────────────────────────────────

void BcMediaParser::feed(const QByteArray &data)
{
    m_buffer += data;

    while (m_buffer.size() >= 4) {
        // Blocks are padded with zero bytes to keep them aligned. How much
        // varies — five bytes after one key frame, none after the next — so
        // they are skipped rather than counted.
        int skip = 0;
        while (skip < m_buffer.size() && m_buffer.at(skip) == '\0')
            ++skip;
        if (skip > 0) {
            m_skippedBytes += skip;
            m_buffer.remove(0, skip);
            continue;
        }

        const QByteArray magic = m_buffer.left(4);
        auto short_of = [this](int bytes) { return m_buffer.size() < bytes; };

        if (magic == kMagicInfoV1 || magic == kMagicInfoV2) {
            if (short_of(kInfoFpsOffset + 1))
                return;
            // The block states its own length, so a firmware that adds fields
            // does not shift everything after it.
            const int length = int(readU32(m_buffer, kInfoLengthOffset));
            if (length < 24 || length > 256) {
                if (onUnknown)
                    onUnknown(QStringLiteral("info block claiming %1 bytes")
                                  .arg(length));
                m_buffer.remove(0, 4);
                continue;
            }
            if (short_of(length))
                return;
            const int width = int(readU32(m_buffer, kInfoWidthOffset));
            const int height = int(readU32(m_buffer, kInfoHeightOffset));
            const int fps = int(quint8(m_buffer.at(kInfoFpsOffset)));
            if (onFormat && width > 0 && height > 0)
                onFormat(width, height, fps);
            m_buffer.remove(0, length);
            continue;
        }

        const bool iFrame = magic == kMagicIFrame;
        if (iFrame || magic == kMagicPFrame) {
            const int headerLen = iFrame ? kIFrameHeaderLen : kPFrameHeaderLen;
            if (short_of(headerLen))
                return;
            const int payload = int(readU32(m_buffer, kVideoSizeOffset));
            if (payload <= 0 || payload > 16 * 1024 * 1024) {
                if (onUnknown)
                    onUnknown(QStringLiteral("%1 claiming a %2 byte frame")
                                  .arg(QString::fromLatin1(magic)).arg(payload));
                m_buffer.remove(0, 4);
                continue;
            }
            if (short_of(headerLen + payload))
                return;

            if (m_codec.isEmpty()) {
                m_codec = QString::fromLatin1(
                              m_buffer.mid(kVideoCodecOffset, 4)).trimmed();
            }

            const QByteArray frame = m_buffer.mid(headerLen, payload);
            m_buffer.remove(0, headerLen + payload);
            m_videoBytes += payload;
            ++m_frames;
            if (onVideo)
                onVideo(frame, iFrame);
            continue;
        }

        if (magic == kMagicAac || magic == kMagicAdpcm) {
            if (short_of(kAudioHeaderLen))
                return;
            const int payload = int(readU16(m_buffer, 4));
            if (short_of(kAudioHeaderLen + payload))
                return;
            // Carried but unused: sound comes from RTSP, and decoding the
            // camera's ADPCM here would add work for no gain until Baichuan is
            // the only transport left.
            m_buffer.remove(0, kAudioHeaderLen + payload);
            continue;
        }

        // Unrecognised. Look for the next block that is recognised and carry on
        // from there: one strange block should not end a stream that is
        // otherwise perfectly readable, and a firmware that adds a block type
        // should cost a report rather than a picture.
        int next = -1;
        for (const char *known : {kMagicInfoV1, kMagicInfoV2, kMagicIFrame,
                                  kMagicPFrame, kMagicAac, kMagicAdpcm}) {
            const int at = m_buffer.indexOf(known, 1);
            if (at >= 0 && (next < 0 || at < next))
                next = at;
        }
        if (next < 0) {
            // Keep the last three bytes: a magic may be split across reads.
            if (m_buffer.size() > 3)
                m_buffer.remove(0, m_buffer.size() - 3);
            return;
        }

        // A few bytes between blocks are normal: key frames are followed by a
        // short trailer holding the capture time, and its length is not
        // constant — four bytes after the first, three after the ones that
        // follow. Reporting those as damage would fill the log with a fault
        // that is not one, so only a gap too large to be a trailer is worth
        // mentioning.
        if (next <= kMaxTrailerBytes) {
            m_skippedBytes += next;
        } else if (onUnknown) {
            onUnknown(QString::fromLatin1(m_buffer.left(4)));
        }
        m_buffer.remove(0, next);
    }
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

bool BaichuanClient::readMessage(BcHeader &header, QByteArray &body,
                                 int timeoutMs)
{
    if (!m_socket)
        return false;

    while (m_socket->bytesAvailable() < 20) {
        if (!m_socket->waitForReadyRead(timeoutMs)) {
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
            if (!m_socket->waitForReadyRead(timeoutMs)) {
                m_error = QStringLiteral("truncated header");
                return false;
            }
        }
        const QByteArray tail = m_socket->read(4);
        header.payloadOffset = readU32(tail, 0);
    }

    body.clear();
    while (body.size() < int(header.bodyLen)) {
        if (m_socket->bytesAvailable() == 0 &&
            !m_socket->waitForReadyRead(timeoutMs)) {
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

bool BaichuanClient::requestVideo(int channel, bool mainStream)
{
    if (!m_socket || m_socket->state() != QAbstractSocket::ConnectedState) {
        m_error = QStringLiteral("not connected");
        return false;
    }

    // The handle ties the reply stream to this request. Anything unique will
    // do; the camera echoes it back in the header of every media message.
    const quint32 handle = 0;
    const QString xml =
        QStringLiteral("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<body>\n"
                       "<Preview version=\"1.1\">\n"
                       "<channelId>%1</channelId>\n"
                       "<handle>%2</handle>\n"
                       "<streamType>%3</streamType>\n"
                       "</Preview>\n</body>\n")
            .arg(channel)
            .arg(handle)
            .arg(mainStream ? QStringLiteral("mainStream")
                            : QStringLiteral("subStream"));

    const QByteArray encrypted = xorCrypt(xml.toUtf8(), 0);
    m_socket->write(modernHeader(kMsgVideo, encrypted.size()) + encrypted);
    m_socket->flush();

    // Not waitForBytesWritten(): flush() usually gets everything out, and the
    // call then returns false because there is nothing left to wait for. Taking
    // that as failure reported a working request as broken.
    while (m_socket->bytesToWrite() > 0) {
        if (!m_socket->waitForBytesWritten(kTimeoutMs)) {
            m_error = QStringLiteral("could not send the video request: %1")
                          .arg(m_socket->errorString());
            return false;
        }
    }
    return m_socket->state() == QAbstractSocket::ConnectedState;
}

bool BaichuanClient::readMediaChunk(QByteArray &media, int timeoutMs)
{
    BcHeader header;
    QByteArray body;
    if (!m_socket)
        return false;

    // Media messages arrive continuously once video has been requested, so a
    // timeout here means the camera has stopped sending rather than that it is
    // still thinking about the request.
    if (!readMessage(header, body, timeoutMs))
        return false;

    if (onMessage)
        onMessage(header);

    if (header.msgType != kMsgVideo)
        return true;   // status replies and keep-alives share the connection

    // The first `payloadOffset` bytes are an XML preamble, not media. The
    // camera puts one in front of the very first video message and none after
    // that; feeding it to the container parser produced an unrecognised block
    // before every stream started.
    if (header.payloadOffset > 0 &&
        header.payloadOffset < quint32(body.size()))
        body = body.mid(int(header.payloadOffset));

    // Media bodies are not obfuscated: the XOR applies to the XML control
    // messages. Sending a video stream through it would cost a pass over every
    // frame for no benefit, and the hardware does not do it.
    media += body;
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

int runBaichuanVideoProbe(const QString &host, const QString &user,
                          const QString &password, const QString &outputPath,
                          int seconds)
{
    out() << "Baichuan video probe against " << host << ":9000 for "
          << seconds << " s\n\n";
    out().flush();

    BaichuanClient client(host, user, password);
    if (!client.login()) {
        out() << "FAILED at login: " << client.lastError() << "\n";
        out().flush();
        return 1;
    }
    out() << "Login succeeded, asking for the sub stream.\n";
    out().flush();

    if (!client.requestVideo(0, false)) {
        out() << "FAILED to request video: " << client.lastError() << "\n";
        out().flush();
        return 1;
    }

    QFile output(outputPath);
    if (!outputPath.isEmpty() &&
        !output.open(QIODevice::WriteOnly | QIODevice::Truncate)) {
        out() << "Cannot write " << outputPath << "\n";
        out().flush();
        return 1;
    }

    BcMediaParser parser;
    QMap<QString, int> unknown;
    int keyFrames = 0;
    int startCodeOk = 0;
    int startCodeBad = 0;

    parser.onFormat = [](int width, int height, int fps) {
        out() << "  format: " << width << "x" << height << " @ " << fps
              << " fps\n";
        out().flush();
    };
    parser.onUnknown = [&unknown](const QString &magic) {
        ++unknown[magic];
    };
    parser.onVideo = [&](const QByteArray &frame, bool keyFrame) {
        if (keyFrame)
            ++keyFrames;
        // The strongest check there is that the header layout is right: an
        // H.264 access unit begins with an Annex-B start code. If these come
        // out wrong, the offsets are wrong, and no amount of decoding effort
        // downstream will fix it.
        if (frame.startsWith(QByteArray("\x00\x00\x00\x01", 4)) ||
            frame.startsWith(QByteArray("\x00\x00\x01", 3)))
            ++startCodeOk;
        else
            ++startCodeBad;
        if (output.isOpen())
            output.write(frame);
    };

    // The container as it arrived, untouched. Without this there is no way to
    // check the block layout other than by guessing at it again.
    QFile raw(outputPath + QStringLiteral(".raw"));
    const bool keepRaw = !outputPath.isEmpty() &&
                         raw.open(QIODevice::WriteOnly | QIODevice::Truncate);

    const QDateTime deadline =
        QDateTime::currentDateTime().addSecs(seconds);
    QByteArray chunk;
    while (QDateTime::currentDateTime() < deadline) {
        chunk.clear();
        if (!client.readMediaChunk(chunk, 5000)) {
            out() << "  stream ended: " << client.lastError() << "\n";
            break;
        }
        if (chunk.isEmpty())
            continue;
        if (keepRaw)
            raw.write(chunk);
        parser.feed(chunk);
    }
    if (keepRaw) {
        raw.close();
        out() << "  raw container written to " << raw.fileName() << "\n";
    }

    if (output.isOpen())
        output.close();

    out() << "\nResult\n"
          << "  codec reported     " << (parser.videoCodec().isEmpty()
                                             ? QStringLiteral("(none)")
                                             : parser.videoCodec()) << "\n"
          << "  frames             " << parser.frames() << " (" << keyFrames
          << " key)\n"
          << "  video bytes        " << parser.videoBytes() << "\n"
          << "  padding skipped    " << parser.skippedBytes() << "\n"
          << "  Annex-B start code " << startCodeOk << " ok, " << startCodeBad
          << " wrong\n";
    for (auto it = unknown.cbegin(); it != unknown.cend(); ++it)
        out() << "  unknown block      " << it.key() << " x" << it.value() << "\n";

    if (!outputPath.isEmpty() && parser.frames() > 0) {
        out() << "\nWrote " << outputPath
              << " — check it with:  ffprobe " << outputPath << "\n";
    }
    if (startCodeBad > 0) {
        out() << "\nThe frames do not start with an Annex-B start code, so the "
                 "block layout assumed here does not match this firmware.\n";
    }
    out().flush();
    return parser.frames() > 0 && startCodeBad == 0 ? 0 : 1;
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
