#include "BaichuanProbes.h"

#include <cstdio>

#include <QCryptographicHash>
#include <QDateTime>
#include <QFile>
#include <QFileInfo>
#include <QHostAddress>
#include <QJsonDocument>
#include <QTextStream>
#include <QThread>
#include <QUdpSocket>

#include "Baichuan.h"
#include "BaichuanCommands.h"
#include "Firmware.h"

namespace leolink {

namespace {

QTextStream &out()
{
    static QTextStream stream(stdout);
    return stream;
}

} // namespace

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

    out() << "Login succeeded, " << (client.usesAes() ? "AES" : "XOR")
          << " encryption.\n\n";
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
    parser.onVideo = [&](const QByteArray &frame, bool keyFrame, qint64) {
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

// ── the HTTP API over Baichuan, and firmware ─────────────────────────────────

int runBaichuanApiProbe(const QString &host, const QString &user,
                        const QString &password, const QString &command,
                        const QString &param)
{
    BaichuanClient client(host, user, password);
    if (!client.login()) {
        std::fprintf(stderr, "login failed: %s\n", qPrintable(client.lastError()));
        return 1;
    }
    QJsonObject p;
    if (!param.isEmpty())
        p = QJsonDocument::fromJson(param.toUtf8()).object();
    const QJsonObject entry = baichuan::translate(client, p.value(QStringLiteral("channel")).toInt(0),
                                                     command, p, 1);
    client.close();
    std::printf("%s\n", QJsonDocument(entry).toJson(QJsonDocument::Indented).constData());
    return entry.value(QStringLiteral("code")).toInt() == 0 ? 0 : 2;
}

namespace {

/// What the camera says it is: hardVer and firmVer, from GetDevInfo.
QJsonObject devInfo(BaichuanClient &client)
{
    return baichuan::translate(client, 0, QStringLiteral("GetDevInfo"), {}, 0)
        .value(QStringLiteral("value")).toObject()
        .value(QStringLiteral("DevInfo")).toObject();
}

} // namespace

int runBaichuanFirmware(const QString &host, const QString &user,
                        const QString &password, const QString &pakPath,
                        bool install)
{
    QFile file(pakPath);
    if (pakPath.isEmpty() || !file.open(QIODevice::ReadOnly)) {
        std::fprintf(stderr, "cannot read the package %s\n", qPrintable(pakPath));
        return 1;
    }
    const QByteArray pak = file.readAll();
    const QString fileName = QFileInfo(pakPath).fileName();

    BaichuanClient client(host, user, password);
    if (!client.login()) {
        std::fprintf(stderr, "login failed: %s\n", qPrintable(client.lastError()));
        return 1;
    }
    const QJsonObject before = devInfo(client);
    const QString hardVer = before.value(QStringLiteral("hardVer")).toString();
    const QString firmVer = before.value(QStringLiteral("firmVer")).toString();
    std::printf("camera   %s, board %s, firmware %s\npackage  %s, %lld bytes\n",
                qPrintable(before.value(QStringLiteral("model")).toString()),
                qPrintable(hardVer), qPrintable(firmVer), qPrintable(fileName),
                qlonglong(pak.size()));
    if (const QString why = firmware::refusal(fileName, pak, hardVer, firmVer); !why.isEmpty()) {
        client.close();
        std::fprintf(stderr, "refused: %s\n", qPrintable(why));
        return 2;
    }
    if (!install) {
        client.close();
        std::printf("checks passed; nothing sent (add --yes to install)\n");
        return 0;
    }

    int lastTenth = -1;
    const bool sent = client.uploadFirmware(fileName, pak, [&lastTenth](qint64 done, qint64 total) {
        const int tenth = int(done * 10 / total);
        if (tenth != lastTenth) {
            lastTenth = tenth;
            std::printf("sent     %3d%%\n", tenth * 10);
            std::fflush(stdout);
        }
    });
    client.close();
    if (!sent) {
        std::fprintf(stderr, "upload failed: %s\n", qPrintable(client.lastError()));
        return 3;
    }

    // The camera writes the image and restarts. Until it answers with the new
    // build, it is either still flashing or still on the old one; asked every
    // fifteen seconds, for as long as a slow Wi-Fi camera has been seen to take.
    const int wanted = firmware::parsePakName(fileName).build;
    std::printf("sent; waiting for the camera to restart on build %d\n", wanted);
    std::fflush(stdout);
    QThread::sleep(30);
    for (int waited = 30; waited <= 600; waited += 15) {
        BaichuanClient again(host, user, password);
        if (again.login()) {
            const QString now = devInfo(again).value(QStringLiteral("firmVer")).toString();
            again.close();
            std::printf("%4d s   %s\n", waited, qPrintable(now.isEmpty() ? QStringLiteral("answering") : now));
            std::fflush(stdout);
            if (firmware::buildOf(now) == wanted)
                return 0;
        } else {
            std::printf("%4d s   not answering\n", waited);
            std::fflush(stdout);
        }
        QThread::sleep(15);
    }
    std::fprintf(stderr, "the camera did not come back on build %d within ten minutes\n", wanted);
    return 4;
}

} // namespace leolink
