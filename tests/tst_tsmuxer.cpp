// The transport stream that carries Baichuan video to the player.

#include <QTest>

#include "TsMuxer.h"

using leolink::TsMuxer;

namespace {

/// CRC-32/MPEG-2, written apart from the muxer's own so that one cannot
/// vouch for the other.
quint32 crc32Mpeg2(const QByteArray &data)
{
    quint32 crc = 0xffffffff;
    for (char c : data) {
        for (int bit = 7; bit >= 0; --bit) {
            const bool top = ((crc >> 31) & 1) != ((quint8(c) >> bit) & 1);
            crc <<= 1;
            if (top)
                crc ^= 0x04c11db7;
        }
    }
    return crc;
}

struct Section {
    int pid{-1};
    QByteArray bytes;   ///< table id to CRC, as long as the section says
    int declared{0};    ///< section_length
};

/// The tables in `stream`, each read the way a strict demuxer reads it: as
/// long as its own length field says, and no longer.
QList<Section> sections(const QByteArray &stream)
{
    QList<Section> out;
    for (int at = 0; at + 188 <= stream.size(); at += 188) {
        const QByteArray p = stream.mid(at, 188);
        if (quint8(p.at(0)) != 0x47 || !(quint8(p.at(1)) & 0x40))
            continue;
        const int pid = ((quint8(p.at(1)) & 0x1f) << 8) | quint8(p.at(2));
        if (pid != 0x0000 && pid != 0x1000)
            continue;
        int start = 4;
        if (quint8(p.at(3)) & 0x20)
            start += 1 + quint8(p.at(4));
        start += 1 + quint8(p.at(start));     // pointer field
        Section s;
        s.pid = pid;
        s.declared = ((quint8(p.at(start + 1)) & 0x0f) << 8) | quint8(p.at(start + 2));
        s.bytes = p.mid(start, 3 + s.declared);
        out.append(s);
    }
    return out;
}

struct Stream {
    int type;
    int pid;
};

QList<Stream> streamsIn(const Section &pmt)
{
    const QByteArray &b = pmt.bytes;
    const int programInfo = ((quint8(b.at(10)) & 0x0f) << 8) | quint8(b.at(11));
    QList<Stream> out;
    for (int at = 12 + programInfo; at + 5 <= b.size() - 4;) {
        const int type = quint8(b.at(at));
        const int pid = ((quint8(b.at(at + 1)) & 0x1f) << 8) | quint8(b.at(at + 2));
        const int info = ((quint8(b.at(at + 3)) & 0x0f) << 8) | quint8(b.at(at + 4));
        out.append({type, pid});
        at += 5 + info;
    }
    return out;
}

} // namespace

class TestTsMuxer : public QObject {
    Q_OBJECT

private slots:
    void crcItself()
    {
        QCOMPARE(crc32Mpeg2("123456789"), 0x0376e6e7u);
    }

    /// Each table's CRC is over exactly the bytes its length claims, so a CRC
    /// across the whole section, CRC included, comes to zero.
    void tablesAreTheLengthTheySay()
    {
        TsMuxer muxer;
        const QList<Section> found = sections(muxer.tables());
        QCOMPARE(found.size(), 2);
        for (const Section &s : found) {
            QCOMPARE(s.bytes.size(), 3 + s.declared);
            QCOMPARE(crc32Mpeg2(s.bytes), 0u);
        }
        QCOMPARE(found.at(0).declared, 13);   // PAT: one programme
        QCOMPARE(found.at(1).declared, 18);   // PMT: one stream
    }

    /// The PMT said 17 once. Read as written, that was a programme with no
    /// streams in it, and ffmpeg 6.1 reading the relay live never found the
    /// video: every Baichuan camera was a black tile.
    void programmeHasItsStream()
    {
        TsMuxer muxer;
        const QList<Section> found = sections(muxer.tables());
        QCOMPARE(found.at(1).pid, 0x1000);
        const QList<Stream> streams = streamsIn(found.at(1));
        QCOMPARE(streams.size(), 1);
        QCOMPARE(streams.first().type, 0x1b);
        QCOMPARE(streams.first().pid, 0x0100);
    }

    void h265IsAnnounced()
    {
        TsMuxer muxer(QStringLiteral("H265"));
        const QList<Stream> streams = streamsIn(sections(muxer.tables()).at(1));
        QCOMPARE(streams.size(), 1);
        QCOMPARE(streams.first().type, 0x24);
    }

    /// Every key frame carries the tables, so a player can join at any of them.
    void keyFramesCarryTheTables()
    {
        TsMuxer muxer;
        const QByteArray frame("\x00\x00\x00\x01\x65\x88\x84\x00", 8);
        QCOMPARE(sections(muxer.frame(frame, true, 0)).size(), 2);
        QCOMPARE(sections(muxer.frame(frame, false, 40000)).size(), 0);
        const QByteArray big = muxer.frame(QByteArray(5000, '\x11'), false, 80000);
        QCOMPARE(big.size() % 188, 0);
    }
};

QTEST_GUILESS_MAIN(TestTsMuxer)
#include "tst_tsmuxer.moc"
