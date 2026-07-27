// Sending sound the other way: from here to the camera's speaker.
#pragma once

#include <QByteArray>
#include <QObject>
#include <QString>

#include "Config.h"

class QProcess;
class QTcpSocket;
class QTimer;

namespace leolink {

/// Talks to a camera's loudspeaker over the ONVIF audio backchannel.
///
/// The obvious route was Reolink's own Baichuan protocol, which is what their
/// app uses. It turned out not to be necessary: a Duo 2 offers a standard
/// backchannel, and answering DESCRIBE with the ONVIF Require header makes it
/// say so plainly —
///
///     m=audio 0 RTP/AVP 0
///     a=rtpmap:0 PCMU/8000
///     a=sendonly
///     a=control:track3
///
/// — a G.711 µ-law track the client sends *to* the camera. That is an open
/// standard, it works on cameras from other makers too, and it needs no
/// reverse engineering at all.
///
/// The audio is carried inside the RTSP connection (interleaved RTP) rather
/// than on a second UDP port, which keeps it working through the same
/// firewalls and NAT as the picture.
///
/// Whatever is to be said is converted by ffmpeg — any file it can read, or a
/// microphone — into raw µ-law at 8 kHz, and paced out in 20 ms packets. The
/// camera plays it as it arrives, so pacing matters: sent as fast as the
/// socket allows, it arrives as a chirp.
class TalkSession : public QObject {
    Q_OBJECT

public:
    explicit TalkSession(QObject *parent = nullptr);
    ~TalkSession() override;

    /// `source` is anything ffmpeg can open: a sound file, or "mic" for this
    /// machine's default input.
    void start(const CameraConfig &camera, const QString &source);

    /// Asks whether the camera has a speaker to lend, without sending
    /// anything or starting ffmpeg. Answers through available().
    ///
    /// Only RTSP knows: the CGI interface has no such question, and a model
    /// name is not an answer — so the camera is asked the same way it will be
    /// asked when someone actually presses the button.
    void probe(const CameraConfig &camera);

    void stop();

    bool isRunning() const { return m_state != State::Idle; }

    /// True once the camera has accepted the backchannel. Only known after
    /// ready() — a camera without a speaker refuses at DESCRIBE.
    bool hasBackchannel() const { return !m_track.isEmpty(); }

signals:
    /// Result of probe(): whether this camera offers a backchannel at all.
    void available(bool yes);
    /// The camera is listening; audio is on its way.
    void ready();
    /// The clip ran out, or stop() was called.
    void finished();
    void failed(const QString &reason);

private:
    enum class State { Idle, Options, Describe, Setup, Play, Streaming };

    void begin(const CameraConfig &camera);
    bool m_probeOnly{false};

    void sendRequest(const QString &method, const QString &url,
                     const QString &extraHeaders = {});
    void onReadyRead();
    void handleResponse(const QString &head, const QString &body);
    QString authorisation(const QString &method, const QString &url) const;
    void parseBackchannel(const QString &sdp);
    void startEncoder(const QString &source);
    void pumpAudio();
    /// The stream the backchannel hangs off, without credentials in it.
    QString streamUrlForTalk() const;

    CameraConfig m_camera;
    QTcpSocket *m_socket{nullptr};
    QProcess *m_encoder{nullptr};
    QTimer *m_pacer{nullptr};

    State m_state{State::Idle};
    int m_cseq{0};
    QString m_realm;
    QString m_nonce;
    QString m_session;
    QString m_track;       ///< control path of the backchannel track
    int m_payloadType{0};  ///< 0 = PCMU, what every camera seen offers
    QString m_pendingMethod;
    QString m_pendingUrl;
    QString m_pendingHeaders;
    bool m_retriedWithAuth{false};

    QByteArray m_incoming;   ///< RTSP bytes not yet forming a whole response
    QByteArray m_audio;      ///< µ-law waiting to be paced out
    bool m_encoderDone{false};
    quint16 m_sequence{1};
    quint32 m_timestamp{0};
    quint32 m_ssrc{0};
    qint64 m_packetsSent{0};
};

} // namespace leolink
