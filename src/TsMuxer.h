// H.264/H.265 frames wrapped in MPEG-TS, so each one carries its own time.
#pragma once

#include <QByteArray>
#include <QString>

namespace leolink {

/// Wraps Annex-B frames in an MPEG transport stream.
///
/// Baichuan hands over an elementary stream: pictures, one after another, with
/// nothing to say when each is due. A player given that has to be told a frame
/// rate and then trusts it completely, so a rate that is wrong by two frames a
/// second is a delay that grows for as long as the window is open — which is
/// exactly the bug this was written for. The camera does know when each picture
/// was taken, to the microsecond; it simply had nowhere to put it.
///
/// MPEG-TS is the smallest container that fixes that. It carries a timestamp
/// per picture, every player reads it, it is designed to be joined mid-stream —
/// which is what a viewer connecting to a camera does — and it needs no library
/// to write. The cost is about six per cent in overhead, which on a sub stream
/// is nothing next to a delay that never recovers.
///
/// Not a general muxer: one video track, no audio, no B-frames — which is what
/// these cameras send.
class TsMuxer {
public:
    /// `codec` is what the camera called it: "H264" or "H265".
    explicit TsMuxer(const QString &codec = QStringLiteral("H264"));

    /// What the camera says it is sending, once it has said. Takes effect with
    /// the next tables, which go out with every key frame.
    void setCodec(const QString &codec);

    /// The tables a player needs before it can make sense of anything. Sent
    /// again with every key frame, and again for each player that connects, so
    /// somebody arriving mid-stream is never left waiting for the next one.
    QByteArray tables();

    /// One picture, wrapped. `ptsUs` is microseconds from the start of the
    /// stream; `keyFrame` decides whether a player may start here.
    QByteArray frame(const QByteArray &annexB, bool keyFrame, qint64 ptsUs);

private:
    /// One 188-byte packet. `consumed` reports how much of `payload` went in,
    /// which varies with how much room the adaptation field took.
    QByteArray packet(int pid, const QByteArray &payload, bool start,
                      bool wantPcr = false, qint64 pcrBase = 0,
                      int *consumed = nullptr);

    int m_streamType;      ///< 0x1b for H.264, 0x24 for H.265
    quint8 m_patCounter{0};
    quint8 m_pmtCounter{0};
    quint8 m_videoCounter{0};
};

} // namespace leolink
