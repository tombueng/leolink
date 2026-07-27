// Baichuan — Reolink's proprietary protocol on TCP port 9000.
#pragma once

#include <functional>

#include <QByteArray>
#include <QString>

class QTcpSocket;

namespace leolink {

/// Frame header. Length depends on the message class, see BaichuanClient.
struct BcHeader {
    quint32 msgType{0};
    quint32 bodyLen{0};
    quint8 encOffset{0};
    quint8 streamId{0};
    quint16 handle{0};
    quint16 field16{0};   ///< legacy: encryption protocol · modern: status code
    quint16 msgClass{0};
    int headerLen{20};
    /// Only present on 24-byte headers. For binary messages it says how many
    /// bytes at the start of the body are an XML preamble rather than media —
    /// discarding it is what put a stray `<Extension>` document in front of the
    /// first video frame.
    quint32 payloadOffset{0};

    bool isModern() const { return headerLen == 24; }
    int status() const { return isModern() ? int(field16) : -1; }
};

/// Direct LAN access over TCP.
///
/// The login handshake is four messages and is verified against real hardware:
///
///   1. client → legacy login, asking for an encryption mode
///   2. camera → nonce
///   3. client → modern login, credentials hashed together with that nonce
///   4. camera → device info, status 200
///
/// Bodies are XML behind a fixed-key XOR. That is obfuscation, not encryption;
/// the key is a constant in this file.
///
/// leolink does not need Baichuan for ordinary viewing — the HTTP API, RTSP
/// and ONVIF cover wired cameras completely. It matters for battery models
/// that keep RTSP switched off, for reaching a camera by UID from outside the
/// LAN, and for two-way audio.
class BaichuanClient {
public:
    BaichuanClient(QString host, QString user, QString password,
                   quint16 port = 9000);
    ~BaichuanClient();

    /// Runs the four-message handshake. Returns false and fills lastError().
    bool login();
    void close();

    /// Asks the camera to start sending video on this connection.
    ///
    /// The camera answers with a run of message-type-3 frames whose bodies
    /// carry the "BcMedia" container: a sequence of blocks, each tagged with a
    /// four-character magic, holding H.264/H.265 access units and audio.
    bool requestVideo(int channel, bool mainStream);

    /// Pulls one message off the wire and appends its media payload to
    /// `media`. Returns false when the connection ends or times out.
    bool readMediaChunk(QByteArray &media, int timeoutMs = 10000);

    /// Set to receive a line per message while probing: body length and
    /// payload offset. Only used by --baichuan-video.
    std::function<void(const BcHeader &)> onMessage;

    /// Device info XML from step 4.
    const QString &deviceInfo() const { return m_deviceInfo; }
    /// One element out of the device info, e.g. "ptzMode" or "diskNum".
    QString field(const QString &name) const;
    const QString &lastError() const { return m_error; }

    /// Symmetric. `offset` comes from the header field at byte 12.
    static QByteArray xorCrypt(const QByteArray &data, quint8 offset);
    /// Upper-case MD5 hex clipped to 31 characters — Baichuan stores it in a
    /// 32-byte field with a trailing NUL, so the clip is part of the format.
    static QString md5Trunc(const QString &text);

private:
    bool readMessage(BcHeader &header, QByteArray &body,
                     int timeoutMs = 10000);
    static QString bodyText(const BcHeader &header, const QByteArray &body);

    QString m_host, m_user, m_password;
    quint16 m_port;
    QTcpSocket *m_socket{nullptr};
    QString m_deviceInfo;
    QString m_error;
};

/// Splits the BcMedia container into elementary streams.
///
/// Written to report what it does not understand rather than to assume. The
/// block layouts below were taken from the neolink project's notes and then
/// checked against real hardware with --baichuan-video; anything unrecognised
/// is counted and named in the log instead of being skipped silently, because
/// a parser that guesses wrong produces a picture that is subtly broken rather
/// than one that is obviously absent.
class BcMediaParser {
public:
    /// Feed whatever arrived; complete blocks are dispatched, the remainder is
    /// kept for next time.
    void feed(const QByteArray &data);

    /// Annex-B video, ready for a decoder.
    std::function<void(const QByteArray &nalUnits, bool keyFrame)> onVideo;
    /// Called once the camera has announced picture size and frame rate.
    std::function<void(int width, int height, int fps)> onFormat;
    /// A block whose magic is not one of the known ones. Carries the four
    /// characters seen, so an unfamiliar firmware can be reported usefully.
    std::function<void(const QString &magic)> onUnknown;

    /// "H264", "H265" or empty until the first frame.
    const QString &videoCodec() const { return m_codec; }
    qint64 videoBytes() const { return m_videoBytes; }
    int frames() const { return m_frames; }
    /// Alignment and frame trailers stepped over. A handful per key frame is
    /// normal; a steadily growing figure would mean the layout is wrong.
    qint64 skippedBytes() const { return m_skippedBytes; }

private:
    QByteArray m_buffer;
    QString m_codec;
    qint64 m_videoBytes{0};
    qint64 m_skippedBytes{0};
    int m_frames{0};
};

/// Diagnostic entry points used by --baichuan-test / --baichuan-p2p.
int runBaichuanProbe(const QString &host, const QString &user,
                     const QString &password);

/// Connects, logs in, asks for video and reports what the container actually
/// contains — block magics, sizes, codec — writing the elementary stream to
/// `outputPath` so it can be checked with a decoder.
int runBaichuanVideoProbe(const QString &host, const QString &user,
                          const QString &password, const QString &outputPath,
                          int seconds);

/// P2P lookup by camera UID via Reolink's rendezvous servers.
///
/// **Not verified against hardware** — written from the protocol description
/// because the author has no P2P-capable camera. It reports every step so a
/// tester can see exactly where it stops. See the handbook.
int runP2PProbe(const QString &uid, const QString &user,
                const QString &password);

} // namespace leolink
