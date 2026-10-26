#include "FakeCamera.h"

#include <optional>

#include <QCryptographicHash>
#include <QDataStream>
#include <QDir>
#include <QFile>
#include <QTcpServer>
#include <QTcpSocket>

#include "Aes128.h"
#include "Baichuan.h"
#include "XmlText.h"

using leolink::Aes128Cfb;
using leolink::BaichuanClient;

namespace {

constexpr quint32 kMagic = 0x0ABCDEF0;
constexpr quint16 kClassLegacy = 0x6514;
constexpr quint16 kClassLegacyReply = 0x6614;
constexpr quint16 kAskAes = 0xDC12;
constexpr quint16 kGrantAes = 0xDD12;
constexpr quint16 kGrantXor = 0xDD01;
constexpr quint32 kLogin = 1;
constexpr quint32 kLogout = 2;
constexpr quint32 kVideo = 3;
constexpr quint32 kAlarmSubscribe = 31;
constexpr quint32 kAlarm = 33;
constexpr quint32 kUpgradeFile = 67;
constexpr char kIv[] = "0123456789abcdef";
constexpr char kNonce[] = "0a1b2c3d4e5f6789";

/// Which get each set replaces. Cameras number them as neighbours, but not
/// always in the same order.
const QHash<quint32, quint32> kSetReplaces{
    {25, 26},   {36, 37},   {45, 44},   {47, 46},   {53, 52},   {55, 54},
    {57, 56},   {71, 70},   {82, 81},   {105, 104}, {209, 208}, {216, 217},
    {218, 219}, {231, 232}, {297, 296}, {300, 299},
};

struct Header {
    quint32 msg{0};
    quint32 length{0};
    quint8 encOffset{0};
    quint16 handle{0};
    quint16 field16{0};
    quint16 msgClass{0};
    quint32 payloadOffset{0};
};

bool readExactly(QTcpSocket &socket, QByteArray &into, int bytes)
{
    while (into.size() < bytes) {
        if (socket.bytesAvailable() == 0 && !socket.waitForReadyRead(5000))
            return false;
        into += socket.read(bytes - into.size());
    }
    return true;
}

bool readMessage(QTcpSocket &socket, Header &h, QByteArray &body)
{
    QByteArray head;
    if (!readExactly(socket, head, 20))
        return false;
    QDataStream s(head);
    s.setByteOrder(QDataStream::LittleEndian);
    quint32 magic = 0;
    quint8 streamId = 0;
    s >> magic >> h.msg >> h.length >> h.encOffset >> streamId >> h.handle >> h.field16 >> h.msgClass;
    if (magic != kMagic)
        return false;
    if (h.msgClass != kClassLegacy) {
        QByteArray tail;
        if (!readExactly(socket, tail, 4))
            return false;
        QDataStream t(tail);
        t.setByteOrder(QDataStream::LittleEndian);
        t >> h.payloadOffset;
    }
    body.clear();
    return readExactly(socket, body, int(h.length));
}

QByteArray header(quint32 msg, quint32 length, quint16 handle, quint16 field16, quint16 msgClass)
{
    QByteArray out;
    QDataStream s(&out, QIODevice::WriteOnly);
    s.setByteOrder(QDataStream::LittleEndian);
    s << kMagic << msg << length << quint8(0) << quint8(0) << handle << field16 << msgClass;
    if (msgClass != kClassLegacyReply)
        s << quint32(0);
    return out;
}

void appendU32(QByteArray &out, quint32 v)
{
    for (int i = 0; i < 4; ++i)
        out.append(char((v >> (8 * i)) & 0xff));
}

/// The block that opens a stream: picture size and frame rate.
QByteArray infoBlock(int width, int height, int fps)
{
    QByteArray b("1001", 4);
    appendU32(b, 32);           // its own length
    appendU32(b, quint32(width));
    appendU32(b, quint32(height));
    b.append(char(0));
    b.append(char(fps));
    b.append(QByteArray(32 - b.size(), '\0'));
    return b;
}

/// One picture. A key frame carries its parameter sets, as a camera's do,
/// behind a 32-byte header; a predicted one is a single slice behind 24.
/// The contents are filler that contains no start code and no block magic.
QByteArray videoBlock(bool key, quint32 timeUs)
{
    const QByteArray start("\x00\x00\x00\x01", 4);
    const QByteArray nal =
        key ? start + '\x67' + QByteArray(20, '\xaa') + start + '\x68' +
                  QByteArray(4, '\xaa') + start + '\x65' + QByteArray(400, '\xbb')
            : start + '\x41' + QByteArray(120, '\xcc');
    QByteArray b(key ? "00dcH264" : "01dcH264", 8);
    appendU32(b, quint32(nal.size()));
    appendU32(b, 0);
    appendU32(b, timeUs);
    appendU32(b, 0);
    if (key)
        b.append(QByteArray(8, '\0'));
    b += nal;
    b.append(QByteArray((8 - b.size() % 8) % 8, '\0'));
    return b;
}

} // namespace

FakeCamera::FakeCamera(QString user, QString password)
    : m_user(std::move(user)), m_password(std::move(password))
{
}

FakeCamera::~FakeCamera()
{
    m_stop = true;
    wait();
}

void FakeCamera::begin()
{
    start();
    while (m_port == 0 && isRunning())
        QThread::msleep(5);
}

void FakeCamera::setDocument(quint32 msg, const QString &xml)
{
    const QMutexLocker lock(&m_lock);
    m_documents[msg] = xml;
}

QString FakeCamera::document(quint32 msg) const
{
    const QMutexLocker lock(&m_lock);
    return m_documents.value(msg);
}

void FakeCamera::loadDocuments(const QString &directory)
{
    const QDir dir(directory);
    for (const QString &name : dir.entryList({QStringLiteral("*.xml")}, QDir::Files)) {
        QFile f(dir.filePath(name));
        if (f.open(QIODevice::ReadOnly))
            setDocument(name.section(QLatin1Char('.'), 0, 0).toUInt(), QString::fromUtf8(f.readAll()));
    }
}

QList<FakeCamera::Request> FakeCamera::requests() const
{
    const QMutexLocker lock(&m_lock);
    return m_requests;
}

QString FakeCamera::uploadAnnouncement() const
{
    const QMutexLocker lock(&m_lock);
    return m_uploadAnnouncement;
}

QByteArray FakeCamera::uploaded() const
{
    const QMutexLocker lock(&m_lock);
    return m_uploaded;
}

QList<quint16> FakeCamera::uploadHandles() const
{
    const QMutexLocker lock(&m_lock);
    return m_uploadHandles;
}

void FakeCamera::clearRequests()
{
    const QMutexLocker lock(&m_lock);
    m_requests.clear();
}

void FakeCamera::streamVideo(QTcpSocket &socket)
{
    const int fps = qMax(1, videoFps);
    quint32 timeUs = 0;
    QByteArray opening = infoBlock(640, 360, fps);
    for (int n = 0; !m_stop && !silent && socket.state() == QAbstractSocket::ConnectedState; ++n) {
        const QByteArray media = opening + videoBlock(n % 10 == 0, timeUs);
        opening.clear();
        socket.write(header(kVideo, media.size(), 0, 200, 0x0000) + media);
        socket.flush();
        timeUs += quint32(1000000 / fps);
        // Anything from the client — its logout — ends the stream, as does
        // its going.
        if (socket.waitForReadyRead(1000 / fps))
            return;
    }
}

void FakeCamera::run()
{
    QTcpServer server;
    if (!server.listen(QHostAddress::LocalHost, 0))
        return;
    m_port = server.serverPort();
    while (!m_stop) {
        if (!server.waitForNewConnection(50))
            continue;
        QTcpSocket *socket = server.nextPendingConnection();
        ++m_connections;
        if (!silent)
            serve(*socket);
        socket->abort();
        delete socket;
    }
}

void FakeCamera::serve(QTcpSocket &socket)
{
    std::optional<Aes128Cfb> aes;
    bool loggedIn = false;
    const QByteArray iv = QByteArray::fromRawData(kIv, 16);

    const auto seal = [&](const QString &xml) {
        const QByteArray plain = xml.toUtf8();
        return aes ? aes->encrypt(plain, iv) : BaichuanClient::xorCrypt(plain, 0);
    };
    const auto open = [&](const QByteArray &data) {
        if (data.isEmpty())
            return QString();
        if (aes) {
            const QByteArray plain = aes->decrypt(data, iv);
            if (plain.startsWith("<?xml"))
                return QString::fromUtf8(plain);
        }
        return QString::fromUtf8(BaichuanClient::xorCrypt(data, 0));
    };
    const auto send = [&](quint32 msg, quint16 handle, int status, const QString &xml = {}) {
        const QByteArray body = xml.isEmpty() ? QByteArray() : seal(xml);
        socket.write(header(msg, body.size(), handle, quint16(status), 0x0000) + body);
        socket.flush();
    };

    while (!m_stop && socket.state() == QAbstractSocket::ConnectedState) {
        Header h;
        QByteArray body;
        if (!readMessage(socket, h, body) || silent)
            return;

        // 1–2: a login asking for an encryption, answered with a nonce.
        if (h.msg == kLogin && h.msgClass == kClassLegacy) {
            m_askedFor = h.field16;
            if (h.field16 != kAskAes && !answerXorRequest)
                continue;
            const bool granted = grantAes && h.field16 == kAskAes;
            const QByteArray nonce = BaichuanClient::xorCrypt(
                QStringLiteral("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<body>\n"
                               "<Encryption version=\"1.1\">\n<type>md5</type>\n"
                               "<nonce>%1</nonce>\n</Encryption>\n</body>\n")
                    .arg(QLatin1String(kNonce))
                    .toUtf8(),
                0);
            socket.write(header(kLogin, nonce.size(), 0, granted ? kGrantAes : kGrantXor,
                                kClassLegacyReply) +
                         nonce);
            socket.flush();
            if (granted) {
                const QByteArray phrase = (QLatin1String(kNonce) + QLatin1Char('-') + m_password).toUtf8();
                aes.emplace(QCryptographicHash::hash(phrase, QCryptographicHash::Md5)
                                .toHex().toUpper().left(16));
            }
            continue;
        }

        // 3–4: credentials bound to the nonce, always under XOR.
        if (h.msg == kLogin) {
            const QString xml = QString::fromUtf8(BaichuanClient::xorCrypt(body, 0));
            m_loginWasXor = xml.startsWith(QLatin1String("<?xml"));
            const QString nonce = QLatin1String(kNonce);
            const bool good =
                m_loginWasXor &&
                leolink::xml::inner(xml, QStringLiteral("userName")) == BaichuanClient::md5Trunc(m_user + nonce) &&
                leolink::xml::inner(xml, QStringLiteral("password")) == BaichuanClient::md5Trunc(m_password + nonce);
            if (!m_loginWasXor) {
                send(kLogin, h.handle, 400);
                continue;
            }
            if (!good) {
                send(kLogin, h.handle, 401);
                continue;
            }
            loggedIn = true;
            send(kLogin, h.handle, 200, loginReply.isEmpty() ? document(80) : loginReply);
            continue;
        }

        if (h.msg == kLogout)
            return;

        const quint32 offset = qMin(h.payloadOffset, quint32(body.size()));
        m_largestMessage = qMax(m_largestMessage.load(), 24 + int(body.size()));

        // A firmware upload: an announcement, then raw pieces behind an
        // extension saying so, all under one handle.
        if (h.msg == kUpgradeFile && loggedIn) {
            const QString extension = open(body.left(int(offset)));
            int status = 200;
            {
                const QMutexLocker lock(&m_lock);
                m_uploadHandles.append(h.handle);
                const bool piece = extension.contains(QLatin1String("<binaryData>1</binaryData>"));
                if (!piece && refuseAnnouncement)
                    status = 400;
                else if (!piece)
                    m_uploadAnnouncement = open(body);
                else if (m_uploadHandles.size() - 2 == refusePiece)
                    status = 400;
                else
                    m_uploaded += body.mid(int(offset));
            }
            send(h.msg, h.handle, status);
            continue;
        }
        Request request{h.msg, open(body.left(int(offset))), open(body.mid(int(offset)))};
        {
            const QMutexLocker lock(&m_lock);
            m_requests.append(request);
        }

        if (int(h.msg) == dropOn.exchange(-1)) {
            socket.abort();
            return;
        }
        if (!loggedIn) {
            send(h.msg, h.handle, 401);
            continue;
        }
        if (chatter)
            send(kAlarm, 0, 200,
                 !chatterAlarm.isEmpty()
                     ? chatterAlarm
                     : QStringLiteral("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n"
                                      "<body>\n<AlarmEventList />\n</body>\n"));
        if (statusFor.contains(h.msg)) {
            send(h.msg, h.handle, statusFor.value(h.msg));
            continue;
        }
        if (h.msg == kAlarmSubscribe) {
            send(h.msg, h.handle, 200);
            for (const QString &alarm : std::as_const(alarmsOnSubscribe))
                send(kAlarm, h.handle, 200, alarm);
            if (dropAfterAlarms.exchange(false)) {
                socket.disconnectFromHost();
                return;
            }
            continue;
        }
        if (h.msg == kVideo) {
            ++m_videoRequests;
            streamVideo(socket);
            return;
        }
        if (kSetReplaces.contains(h.msg)) {
            setDocument(kSetReplaces.value(h.msg), request.body);
            send(h.msg, h.handle, 200);
            continue;
        }
        const QString doc = document(h.msg);
        if (doc.isEmpty())
            send(h.msg, h.handle, 400);
        else
            send(h.msg, h.handle, 200, doc);
    }
}
