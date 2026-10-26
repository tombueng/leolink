// Baichuan — Reolink's proprietary protocol on TCP port 9000.
#pragma once

#include <functional>
#include <optional>

#include <QByteArray>
#include <QString>

#include "Aes128.h"

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
/// Bodies are XML, either behind a fixed-key XOR or under AES-128-CFB, as the
/// camera chooses in step 2. leolink asks for AES, since newer firmware answers
/// nothing else; a camera that grants only XOR gets XOR. Even under AES the
/// login of step 3 still travels XOR'd — sent encrypted it is refused with
/// status 400 — and AES starts with the camera's reply to it.
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

    /// One XML request and its answer: the `<body>` the camera sends back, or
    /// an empty string with lastError() filled. `extension` is an optional
    /// `<Extension>` document sent ahead of the body — most settings messages
    /// want one naming the channel. `status` receives the reply's status code,
    /// 200 on success. Not for use once video has been requested on this
    /// connection: the reply would be somewhere in the media.
    QString request(quint32 msgType, const QString &body = QString(),
                    const QString &extension = QString(), int *status = nullptr);

    /// Sends one XML message and does not wait for the answer: for a
    /// connection that is read elsewhere, as the event subscription is.
    /// Returns the handle it went out under, which its answer will carry.
    /// `channelByte` goes in the header's byte 12 — the channel a message is
    /// about, or 251 for the camera's push messages — and is also the offset
    /// the XOR cipher starts from, as on the camera's side.
    quint16 send(quint32 msgType, const QString &body = QString(),
                 const QString &extension = QString(), quint8 channelByte = 0);

    /// Takes the next message off the wire, whatever it is, and gives back its
    /// header and the XML it carries (empty for media, or a body that is not
    /// XML). False when nothing arrived within `timeoutMs`, or the connection
    /// is gone — isConnected() says which.
    bool readText(BcHeader &header, QString &text, int timeoutMs);
    /// readText() for a message that has already begun to arrive, without
    /// waiting for one that has not: false at once if nothing is there.
    bool pollText(BcHeader &header, QString &text);
    bool isConnected() const;

    /// Asks the camera to push its alarms down this connection: message 31
    /// on the push channel. The camera answers, then sends message 33 with
    /// the state of each channel at once and again on every change. Returns
    /// false with lastError() filled if the request could not be sent.
    bool subscribeAlarms();

    /// Sends a firmware package and leaves the camera to install it.
    ///
    /// Message 67 twice over: once with the file's name and size, then the
    /// file itself in pieces under the same handle, each piece raw behind an
    /// `<Extension>` saying so. Only that extension is encrypted. The camera
    /// answers each piece, and after the last starts flashing and restarts on
    /// its own, so the connection is of no further use. `progress` hears the
    /// bytes sent so far after every piece. Returns false with lastError()
    /// filled if the camera refuses any of it.
    ///
    /// The message, its XML and the piece size follow reolink_aio's
    /// upload_firmware (MIT, Copyright (c) 2023 starkillerOG; the notice is
    /// in LICENSE).
    bool uploadFirmware(const QString &fileName, const QByteArray &pak,
                        const std::function<void(qint64 sent, qint64 total)> &progress = {});

    /// Set to receive a line per message while probing: body length and
    /// payload offset. Only used by --baichuan-video.
    std::function<void(const BcHeader &)> onMessage;
    /// Hears what request() steps over while it waits for its answer: the
    /// camera's pushes, an alarm among them, which would otherwise be lost
    /// on a session that also carries settings.
    std::function<void(const BcHeader &, const QString &text)> onPush;

    /// Device info XML from step 4.
    const QString &deviceInfo() const { return m_deviceInfo; }
    /// One element out of the device info, e.g. "ptzMode" or "diskNum".
    QString field(const QString &name) const;
    const QString &lastError() const { return m_error; }
    /// Whether the camera granted AES in step 2, rather than XOR.
    bool usesAes() const { return m_aes.has_value(); }

    /// Symmetric. `offset` comes from the header field at byte 12.
    static QByteArray xorCrypt(const QByteArray &data, quint8 offset);
    /// Upper-case MD5 hex clipped to 31 characters — Baichuan stores it in a
    /// 32-byte field with a trailing NUL, so the clip is part of the format.
    static QString md5Trunc(const QString &text);

private:
    bool readMessage(BcHeader &header, QByteArray &body,
                     int timeoutMs = 10000);
    QString bodyText(const BcHeader &header, const QByteArray &body) const;
    /// XML on its way out, under whichever cipher the session settled on.
    /// `xorOffset` is the header's byte 12; AES ignores it.
    QByteArray encryptXml(const QString &xml, quint8 xorOffset = 0) const;

    QString m_host, m_user, m_password;
    quint16 m_port;
    QTcpSocket *m_socket{nullptr};
    QString m_deviceInfo;
    QString m_error;
    std::optional<Aes128Cfb> m_aes;
    quint16 m_handle{0};
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
    /// `ptsUs` is when this picture is to be shown, in microseconds, counted
    /// from the first frame of this stream and only ever going forward.
    std::function<void(const QByteArray &nalUnits, bool keyFrame,
                       qint64 ptsUs)> onVideo;
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
    /// How the end of the header was decided, per frame: found by looking for
    /// the picture, or fallen back to the constant for this block type. A
    /// camera that needs the constant everywhere is one whose pictures this
    /// parser cannot find, and that is worth knowing from a log alone.
    int measuredHeaders() const { return m_measuredHeaders; }
    int assumedHeaders() const { return m_assumedHeaders; }

private:
    QByteArray m_buffer;
    QString m_codec;
    qint64 m_videoBytes{0};
    qint64 m_skippedBytes{0};
    int m_frames{0};
    int m_measuredHeaders{0};
    int m_assumedHeaders{0};

    /// Presentation time, unwrapped. The camera counts microseconds in 32
    /// bits, which runs out every 71 minutes; what a player wants is a number
    /// that only goes up, so the wrap is undone here and the count starts at
    /// zero with the first frame.
    bool m_haveTime{false};
    quint32 m_lastRawTime{0};
    qint64 m_timeUs{0};
    qint64 m_lastStepUs{0};
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
