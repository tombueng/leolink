// Baichuan — Reolink's proprietary protocol on TCP port 9000.
#pragma once

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
    bool readMessage(BcHeader &header, QByteArray &body);
    static QString bodyText(const BcHeader &header, const QByteArray &body);

    QString m_host, m_user, m_password;
    quint16 m_port;
    QTcpSocket *m_socket{nullptr};
    QString m_deviceInfo;
    QString m_error;
};

/// Diagnostic entry points used by --baichuan-test / --baichuan-p2p.
int runBaichuanProbe(const QString &host, const QString &user,
                     const QString &password);

/// P2P lookup by camera UID via Reolink's rendezvous servers.
///
/// **Not verified against hardware** — written from the protocol description
/// because the author has no P2P-capable camera. It reports every step so a
/// tester can see exactly where it stops. See the handbook.
int runP2PProbe(const QString &uid, const QString &user,
                const QString &password);

} // namespace leolink
