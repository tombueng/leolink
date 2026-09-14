#include "TsMuxer.h"

namespace leolink {

namespace {

/// One transport packet, always. The size is the whole point of the format:
/// everything is stuffed or split to land on it.
constexpr int kPacketSize = 188;

constexpr int kPidPat = 0x0000;
constexpr int kPidPmt = 0x1000;
constexpr int kPidVideo = 0x0100;

/// 90 kHz is what MPEG counts presentation time in, and 27 MHz what it counts
/// the clock in. Both are fixed by the standard.
constexpr qint64 kPtsHz = 90000;

/// The clock is put a little ahead of the first picture, because a decoder is
/// entitled to hold a frame until its time comes and a frame that is already
/// late when it arrives may be dropped. A fifth of a second is comfortably more
/// than a camera stream needs and comfortably less than anyone notices.
constexpr qint64 kClockLeadUs = 200000;

void appendU16(QByteArray &out, quint16 value)
{
    out.append(char(value >> 8));
    out.append(char(value & 0xff));
}

/// The CRC every MPEG table ends with: the usual 32-bit polynomial, fed
/// most-significant bit first and left uninverted, which is what makes it
/// different from the CRC in a zip file.
quint32 tableCrc(const QByteArray &data)
{
    quint32 crc = 0xffffffff;
    for (char c : data) {
        crc ^= quint32(quint8(c)) << 24;
        for (int i = 0; i < 8; ++i)
            crc = (crc & 0x80000000) ? (crc << 1) ^ 0x04c11db7 : crc << 1;
    }
    return crc;
}

/// A table shares its packet with a pointer byte saying where it starts.
QByteArray withCrc(QByteArray section)
{
    const quint32 crc = tableCrc(section);
    section.append(char(crc >> 24));
    section.append(char((crc >> 16) & 0xff));
    section.append(char((crc >> 8) & 0xff));
    section.append(char(crc & 0xff));
    return QByteArray(1, '\0') + section;   // pointer_field = 0
}

/// The five bytes a PTS occupies, with its bits scattered around three marker
/// bits — an arrangement that exists so a parser can resynchronise, and that
/// has to be reproduced exactly.
void appendTimestamp(QByteArray &out, quint8 prefix, qint64 ticks)
{
    out.append(char((prefix << 4) | (((ticks >> 30) & 0x07) << 1) | 1));
    appendU16(out, quint16((((ticks >> 15) & 0x7fff) << 1) | 1));
    appendU16(out, quint16(((ticks & 0x7fff) << 1) | 1));
}

} // namespace

TsMuxer::TsMuxer(const QString &codec)
    : m_streamType(codec.compare(QLatin1String("H265"), Qt::CaseInsensitive) == 0
                       ? 0x24
                       : 0x1b)
{
}

void TsMuxer::setCodec(const QString &codec)
{
    m_streamType =
        codec.compare(QLatin1String("H265"), Qt::CaseInsensitive) == 0 ? 0x24
                                                                      : 0x1b;
}

QByteArray TsMuxer::packet(int pid, const QByteArray &payload, bool start,
                           bool wantPcr, qint64 pcrBase, int *consumed)
{
    quint8 &counter = pid == kPidPat  ? m_patCounter
                      : pid == kPidPmt ? m_pmtCounter
                                       : m_videoCounter;

    // The adaptation field carries two things: the clock, and whatever padding
    // is needed to fill the packet. A packet is always 188 bytes, so a short
    // payload is not sent short — it is sent padded, and the padding has to go
    // somewhere a decoder will not read as picture.
    QByteArray field;               // everything after the length byte
    if (wantPcr) {
        const qint64 pcr = pcrBase * 300;      // 27 MHz, as the standard has it
        field.append(char(0x50));              // random access here, PCR follows
        field.append(char((pcr >> 25) & 0xff));
        field.append(char((pcr >> 17) & 0xff));
        field.append(char((pcr >> 9) & 0xff));
        field.append(char((pcr >> 1) & 0xff));
        field.append(char(((pcr & 1) << 7) | 0x7e));
        field.append(char(0x00));
    }

    bool haveField = !field.isEmpty();
    int capacity = kPacketSize - 4 - (haveField ? 1 + field.size() : 0);
    int take = qMin(payload.size(), capacity);
    int fill = capacity - take;

    if (fill > 0) {
        if (!haveField && fill == 1) {
            // Exactly one byte spare: a length of zero fills it, and there is
            // no room for anything after it.
            haveField = true;                  // field stays empty
        } else {
            if (!haveField) {
                haveField = true;
                field.append(char(0x00));      // no flags set
                fill -= 2;                     // the length byte and this one
            } else {
                fill -= 0;                     // the field is already there
            }
            if (fill > 0)
                field.append(QByteArray(fill, '\xff'));
        }
        capacity = kPacketSize - 4 - (1 + field.size());
        take = qMin(payload.size(), capacity);
    }

    QByteArray out;
    out.reserve(kPacketSize);
    out.append(char(0x47));
    out.append(char((start ? 0x40 : 0x00) | ((pid >> 8) & 0x1f)));
    out.append(char(pid & 0xff));
    out.append(char((haveField ? 0x30 : 0x10) | (counter & 0x0f)));
    ++counter;
    if (haveField) {
        out.append(char(field.size()));
        out.append(field);
    }
    out.append(payload.left(take));

    // Anything left over is a mistake in the arithmetic above, not something to
    // paper over at run time: a packet that is not 188 bytes desynchronises
    // every packet after it.
    Q_ASSERT(out.size() == kPacketSize);
    if (consumed)
        *consumed = take;
    return out;
}

QByteArray TsMuxer::tables()
{
    // Programme association: one programme, described by the table below.
    QByteArray pat;
    pat.append(char(0x00));                       // table id
    appendU16(pat, 0xb00d);                       // section syntax, length 13
    appendU16(pat, 0x0001);                       // transport stream id
    pat.append(char(0xc1));                       // current, version 0
    pat.append(char(0x00));                       // section number
    pat.append(char(0x00));                       // last section number
    appendU16(pat, 0x0001);                       // programme number
    appendU16(pat, quint16(0xe000 | kPidPmt));

    // Programme map: one stream, and where the clock comes from.
    QByteArray pmt;
    pmt.append(char(0x02));
    appendU16(pmt, 0xb011);                       // section length 17
    appendU16(pmt, 0x0001);                       // programme number
    pmt.append(char(0xc1));
    pmt.append(char(0x00));
    pmt.append(char(0x00));
    appendU16(pmt, quint16(0xe000 | kPidVideo));  // the clock rides with video
    appendU16(pmt, 0xf000);                       // no programme descriptors
    pmt.append(char(m_streamType));
    appendU16(pmt, quint16(0xe000 | kPidVideo));
    appendU16(pmt, 0xf000);                       // no stream descriptors

    QByteArray out;
    out += packet(kPidPat, withCrc(pat), true);
    out += packet(kPidPmt, withCrc(pmt), true);
    return out;
}

QByteArray TsMuxer::frame(const QByteArray &annexB, bool keyFrame, qint64 ptsUs)
{
    const qint64 pts = ((ptsUs + kClockLeadUs) * kPtsHz) / 1000000;

    QByteArray pes;
    pes.append(QByteArray("\x00\x00\x01", 3));    // packet start code
    pes.append(char(0xe0));                       // video stream 0
    // Length 0 means "until the next start", which is the only thing a stream
    // of unknown length can say, and what every player expects for video.
    appendU16(pes, 0x0000);
    pes.append(char(0x80));                       // no scrambling, not aligned
    pes.append(char(0x80));                       // PTS only, no DTS
    pes.append(char(0x05));                       // five bytes of it
    appendTimestamp(pes, 0x02, pts);
    pes.append(annexB);

    QByteArray out;
    if (keyFrame)
        out += tables();                          // joinable at every key frame

    bool first = true;
    int at = 0;
    while (at < pes.size()) {
        int took = 0;
        out += packet(kPidVideo, pes.mid(at), first, first && keyFrame, pts,
                      &took);
        if (took <= 0)
            break;              // cannot happen; refuses to spin if it does
        at += took;
        first = false;
    }
    return out;
}

} // namespace leolink
