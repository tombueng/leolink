#include "TalkSession.h"

#include <QCryptographicHash>
#include <QProcess>
#include <QRegularExpression>
#include <QTcpSocket>
#include <QTimer>
#include <QUrl>

#include "Log.h"
#include "ProcessUtil.h"

namespace leolink {

namespace {

/// The ONVIF header that makes a camera offer its speaker. Without it the same
/// DESCRIBE returns only the video and microphone tracks.
const char *kRequire = "Require: www.onvif.org/ver20/backchannel\r\n";

/// G.711 carries one byte per sample, so 20 ms at 8 kHz is 160 bytes. Every
/// camera seen offers exactly this; anything else would need its own encoder
/// and is refused rather than guessed at.
constexpr int kSampleRate = 8000;
constexpr int kPacketMs = 20;
constexpr int kPacketBytes = kSampleRate * kPacketMs / 1000;

/// Enough to ride out a stutter from ffmpeg without letting the camera run dry.
constexpr int kPrimePackets = 5;

constexpr int kConnectTimeoutMs = 8000;

} // namespace

TalkSession::TalkSession(QObject *parent) : QObject(parent) {}

TalkSession::~TalkSession()
{
    stop();
}

void TalkSession::probe(const CameraConfig &camera)
{
    stop();
    m_probeOnly = true;
    begin(camera);
}

void TalkSession::start(const CameraConfig &camera, const QString &source)
{
    stop();
    m_probeOnly = false;
    begin(camera);
    if (m_state == State::Idle)
        return;
    startEncoder(source);
    if (!m_encoder)
        stop();
}

void TalkSession::begin(const CameraConfig &camera)
{
    m_camera = camera;
    m_state = State::Options;
    m_cseq = 0;
    m_realm.clear();
    m_nonce.clear();
    m_session.clear();
    m_track.clear();
    m_incoming.clear();
    m_audio.clear();
    m_encoderDone = false;
    m_sequence = 1;
    m_timestamp = 0;
    m_packetsSent = 0;
    // Any value will do as long as it stays put for the session.
    m_ssrc = 0x1A2B3C4D;

    m_socket = new QTcpSocket(this);
    connect(m_socket, &QTcpSocket::readyRead, this, &TalkSession::onReadyRead);
    connect(m_socket, &QTcpSocket::errorOccurred, this, [this] {
        const QString reason = m_socket ? m_socket->errorString() : QString();
        LEO_WARN(Stream, m_camera.label(),
                 QStringLiteral("Talk connection failed: %1").arg(reason));
        if (m_probeOnly)
            emit available(false);
        else
            emit failed(tr("Cannot reach the camera: %1").arg(reason));
        stop();
    });
    connect(m_socket, &QTcpSocket::connected, this, [this] {
        LEO_INFO(Stream, m_camera.label(),
                 QStringLiteral("Asking %1 for its audio backchannel")
                     .arg(m_camera.host));
        sendRequest(QStringLiteral("OPTIONS"), streamUrlForTalk());
    });

    m_socket->connectToHost(m_camera.host, 554);
    QTimer::singleShot(kConnectTimeoutMs, this, [this] {
        if (m_state == State::Options && m_socket &&
            m_socket->state() != QAbstractSocket::ConnectedState) {
            if (m_probeOnly)
                emit available(false);
            else
                emit failed(tr("The camera did not answer on the RTSP port."));
            stop();
        }
    });
}

QString TalkSession::streamUrlForTalk() const
{
    // The backchannel hangs off an ordinary stream URL, without credentials in
    // it: authentication is done properly with digest below, and a password in
    // the URL would end up in the camera's own log.
    return QStringLiteral("rtsp://%1:554/h264Preview_01_sub").arg(m_camera.host);
}

void TalkSession::startEncoder(const QString &source)
{
    m_encoder = new QProcess(this);
    dieWithParent(m_encoder);

    QStringList args{QStringLiteral("-nostdin"),
                     QStringLiteral("-loglevel"), QStringLiteral("error")};
    if (source == QLatin1String("mic")) {
        // PulseAudio and PipeWire both answer to this.
        args << QStringLiteral("-f") << QStringLiteral("pulse")
             << QStringLiteral("-i") << QStringLiteral("default");
    } else {
        args << QStringLiteral("-re")   // real time, so a file is not sent in a burst
             << QStringLiteral("-i") << source;
    }
    // Exactly what the camera asked for in its SDP, and nothing else.
    args << QStringLiteral("-vn")
         << QStringLiteral("-ac") << QStringLiteral("1")
         << QStringLiteral("-ar") << QString::number(kSampleRate)
         << QStringLiteral("-f") << QStringLiteral("mulaw")
         << QStringLiteral("-");

    connect(m_encoder, &QProcess::readyReadStandardOutput, this, [this] {
        m_audio += m_encoder->readAllStandardOutput();
    });
    connect(m_encoder, &QProcess::readyReadStandardError, this, [this] {
        const QString text =
            QString::fromUtf8(m_encoder->readAllStandardError()).trimmed();
        if (!text.isEmpty())
            LEO_WARN(Stream, m_camera.label(),
                     QStringLiteral("ffmpeg (talk): %1").arg(text));
    });
    connect(m_encoder, QOverload<int, QProcess::ExitStatus>::of(&QProcess::finished),
            this, [this] { m_encoderDone = true; });

    const QString ffmpeg = QStringLiteral("ffmpeg");
    m_encoder->start(ffmpeg, args);
    if (!m_encoder->waitForStarted(5000)) {
        LEO_ERROR(Stream, m_camera.label(),
                  QStringLiteral("ffmpeg would not start for talk"));
        emit failed(tr("ffmpeg is needed to send sound and could not be started."));
        m_encoder->deleteLater();
        m_encoder = nullptr;
        m_state = State::Idle;
    }
}

QString TalkSession::authorisation(const QString &method, const QString &url) const
{
    if (m_realm.isEmpty())
        return {};
    auto md5 = [](const QString &text) {
        return QString::fromLatin1(
            QCryptographicHash::hash(text.toUtf8(), QCryptographicHash::Md5).toHex());
    };
    const QString ha1 = md5(QStringLiteral("%1:%2:%3")
                                .arg(m_camera.user, m_realm, m_camera.secret()));
    const QString ha2 = md5(QStringLiteral("%1:%2").arg(method, url));
    const QString response =
        md5(QStringLiteral("%1:%2:%3").arg(ha1, m_nonce, ha2));
    return QStringLiteral("Authorization: Digest username=\"%1\", realm=\"%2\", "
                          "nonce=\"%3\", uri=\"%4\", response=\"%5\"\r\n")
        .arg(m_camera.user, m_realm, m_nonce, url, response);
}

void TalkSession::sendRequest(const QString &method, const QString &url,
                              const QString &extraHeaders)
{
    if (!m_socket)
        return;
    m_pendingMethod = method;
    m_pendingUrl = url;
    m_pendingHeaders = extraHeaders;

    QString request = QStringLiteral("%1 %2 RTSP/1.0\r\nCSeq: %3\r\n"
                                     "User-Agent: leolink\r\n")
                          .arg(method, url)
                          .arg(++m_cseq);
    request += authorisation(method, url);
    request += extraHeaders;
    if (!m_session.isEmpty())
        request += QStringLiteral("Session: %1\r\n").arg(m_session);
    request += QStringLiteral("\r\n");

    LEO_DEBUG(Stream, m_camera.label(),
              QStringLiteral("talk → %1 %2").arg(method, url));
    m_socket->write(request.toUtf8());
}

void TalkSession::onReadyRead()
{
    if (!m_socket)
        return;
    m_incoming += m_socket->readAll();

    while (true) {
        // Once PLAY has been answered the camera interleaves its own RTP into
        // the same connection. Those frames start with '$' and are of no
        // interest here — we are talking, not listening — so they are stepped
        // over rather than confusing the response parser.
        if (m_incoming.startsWith('$')) {
            if (m_incoming.size() < 4)
                return;
            const int length = (quint8(m_incoming[2]) << 8) | quint8(m_incoming[3]);
            if (m_incoming.size() < 4 + length)
                return;
            m_incoming.remove(0, 4 + length);
            continue;
        }

        const int headerEnd = m_incoming.indexOf("\r\n\r\n");
        if (headerEnd < 0)
            return;

        const QString head = QString::fromUtf8(m_incoming.left(headerEnd));
        int bodyLength = 0;
        static const QRegularExpression lengthRe(
            QStringLiteral("(?i)Content-Length:\\s*(\\d+)"));
        const auto match = lengthRe.match(head);
        if (match.hasMatch())
            bodyLength = match.captured(1).toInt();
        if (m_incoming.size() < headerEnd + 4 + bodyLength)
            return;

        const QString body =
            QString::fromUtf8(m_incoming.mid(headerEnd + 4, bodyLength));
        m_incoming.remove(0, headerEnd + 4 + bodyLength);
        handleResponse(head, body);
    }
}

void TalkSession::handleResponse(const QString &head, const QString &body)
{
    const QString status = head.section(QStringLiteral("\r\n"), 0, 0);

    if (status.contains(QLatin1String(" 401 ")) && m_probeOnly &&
        m_retriedWithAuth) {
        emit available(false);
        stop();
        return;
    }

    if (status.contains(QLatin1String(" 401 "))) {
        static const QRegularExpression digestRe(
            QStringLiteral("Digest realm=\"([^\"]*)\", nonce=\"([^\"]*)\""));
        const auto match = digestRe.match(head);
        if (match.hasMatch() && !m_retriedWithAuth) {
            m_realm = match.captured(1);
            m_nonce = match.captured(2);
            m_retriedWithAuth = true;
            sendRequest(m_pendingMethod, m_pendingUrl, m_pendingHeaders);
            return;
        }
        emit failed(tr("The camera rejected the user name or password."));
        stop();
        return;
    }
    m_retriedWithAuth = false;

    if (!status.contains(QLatin1String(" 200 "))) {
        LEO_WARN(Stream, m_camera.label(),
                 QStringLiteral("talk ← %1 (after %2)").arg(status, m_pendingMethod));
        emit failed(tr("The camera refused: %1").arg(status));
        stop();
        return;
    }

    static const QRegularExpression sessionRe(
        QStringLiteral("(?i)Session:\\s*([^;\\r\\n]+)"));
    const auto sessionMatch = sessionRe.match(head);
    if (sessionMatch.hasMatch())
        m_session = sessionMatch.captured(1).trimmed();

    switch (m_state) {
    case State::Options:
        m_state = State::Describe;
        sendRequest(QStringLiteral("DESCRIBE"), streamUrlForTalk(),
                    QString::fromLatin1(kRequire) +
                        QStringLiteral("Accept: application/sdp\r\n"));
        break;

    case State::Describe: {
        parseBackchannel(body);
        if (m_probeOnly) {
            LEO_INFO(Stream, m_camera.label(),
                     m_track.isEmpty()
                         ? QStringLiteral("No audio backchannel — no speaker")
                         : QStringLiteral("Offers an audio backchannel on %1")
                               .arg(m_track));
            emit available(!m_track.isEmpty());
            stop();
            return;
        }
        if (m_track.isEmpty()) {
            LEO_INFO(Stream, m_camera.label(),
                     QStringLiteral("No audio backchannel offered — this camera "
                                    "has no speaker, or will not lend it"));
            emit failed(tr("This camera does not offer a speaker."));
            stop();
            return;
        }
        m_state = State::Setup;
        sendRequest(QStringLiteral("SETUP"),
                    streamUrlForTalk() + QLatin1Char('/') + m_track,
                    QString::fromLatin1(kRequire) +
                        QStringLiteral("Transport: RTP/AVP/TCP;unicast;"
                                       "interleaved=0-1\r\n"));
        break;
    }

    case State::Setup:
        m_state = State::Play;
        sendRequest(QStringLiteral("PLAY"), streamUrlForTalk(),
                    QString::fromLatin1(kRequire));
        break;

    case State::Play: {
        m_state = State::Streaming;
        LEO_INFO(Stream, m_camera.label(),
                 QStringLiteral("Backchannel open (session %1), sending audio")
                     .arg(m_session));
        emit ready();

        m_pacer = new QTimer(this);
        m_pacer->setInterval(kPacketMs);
        connect(m_pacer, &QTimer::timeout, this, &TalkSession::pumpAudio);
        m_pacer->start();
        break;
    }

    default:
        break;
    }
}

void TalkSession::parseBackchannel(const QString &sdp)
{
    // Attributes come in whatever order the camera likes — a Duo 2 puts
    // a=control before a=sendonly — so each m= block is collected whole and
    // judged at the end. Reading it line by line and deciding as it goes was
    // the first attempt, and it found nothing.
    QStringList block;
    auto consider = [this](const QStringList &lines) {
        if (lines.isEmpty() || !lines.first().startsWith(QLatin1String("m=audio")))
            return;
        if (!lines.contains(QLatin1String("a=sendonly")))
            return;   // that one is the camera's microphone, not its speaker
        for (const QString &line : lines) {
            if (line.startsWith(QLatin1String("a=control:")))
                m_track = line.mid(10).trimmed();
        }
        const QStringList media = lines.first().split(QLatin1Char(' '));
        if (media.size() >= 4)
            m_payloadType = media.at(3).toInt();
    };

    for (const QString &raw : sdp.split(QLatin1Char('\n'))) {
        const QString line = raw.trimmed();
        if (line.startsWith(QLatin1String("m="))) {
            consider(block);
            block.clear();
        }
        if (!line.isEmpty())
            block.append(line);
    }
    consider(block);

    if (!m_track.isEmpty()) {
        LEO_DEBUG(Stream, m_camera.label(),
                  QStringLiteral("Backchannel on %1, payload type %2")
                      .arg(m_track).arg(m_payloadType));
    }
}

void TalkSession::pumpAudio()
{
    if (!m_socket || m_state != State::Streaming)
        return;

    // Wait for a little to build up before starting, or the first second
    // arrives in fragments and the camera clicks.
    if (m_packetsSent == 0 && m_audio.size() < kPacketBytes * kPrimePackets &&
        !m_encoderDone) {
        return;
    }

    if (m_audio.size() < kPacketBytes) {
        if (!m_encoderDone)
            return;   // ffmpeg is simply behind
        LEO_INFO(Stream, m_camera.label(),
                 QStringLiteral("Finished talking: %1 packet(s), %2 s")
                     .arg(m_packetsSent)
                     .arg(m_packetsSent * kPacketMs / 1000.0, 0, 'f', 1));
        emit finished();
        stop();
        return;
    }

    const QByteArray payload = m_audio.left(kPacketBytes);
    m_audio.remove(0, kPacketBytes);

    // RTP: version 2, no padding, no extension, no CSRCs, no marker.
    QByteArray packet;
    packet.append(char(0x80));
    packet.append(char(m_payloadType & 0x7F));
    packet.append(char((m_sequence >> 8) & 0xFF));
    packet.append(char(m_sequence & 0xFF));
    for (int shift : {24, 16, 8, 0})
        packet.append(char((m_timestamp >> shift) & 0xFF));
    for (int shift : {24, 16, 8, 0})
        packet.append(char((m_ssrc >> shift) & 0xFF));
    packet += payload;

    // Interleaved framing: '$', channel, 16-bit length.
    QByteArray framed;
    framed.append('$');
    framed.append(char(0));
    framed.append(char((packet.size() >> 8) & 0xFF));
    framed.append(char(packet.size() & 0xFF));
    framed += packet;

    m_socket->write(framed);
    ++m_sequence;
    m_timestamp += kPacketBytes;   // one sample per byte in G.711
    ++m_packetsSent;
}

void TalkSession::stop()
{
    if (m_pacer) {
        m_pacer->stop();
        m_pacer->deleteLater();
        m_pacer = nullptr;
    }
    if (m_socket) {
        if (m_socket->state() == QAbstractSocket::ConnectedState &&
            !m_session.isEmpty()) {
            sendRequest(QStringLiteral("TEARDOWN"), streamUrlForTalk());
            m_socket->waitForBytesWritten(500);
        }
        m_socket->disconnectFromHost();
        m_socket->deleteLater();
        m_socket = nullptr;
    }
    if (m_encoder) {
        m_encoder->kill();
        m_encoder->waitForFinished(1000);
        m_encoder->deleteLater();
        m_encoder = nullptr;
    }
    m_state = State::Idle;
}

} // namespace leolink
