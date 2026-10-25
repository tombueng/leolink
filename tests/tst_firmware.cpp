// Firmware packages: what may go to which camera, and how it gets there.

#include <QRandomGenerator>
#include <QTest>

#include "Baichuan.h"
#include "FakeCamera.h"
#include "Firmware.h"

using leolink::BaichuanClient;
namespace firmware = leolink::firmware;

namespace {

const QString kUser = QStringLiteral("admin");
const QString kPassword = QStringLiteral("not-a-real-password");

// The names of the two packages Reolink's download centre gave for an E1 and
// an E1 Pro, and what those cameras report about themselves.
const QString kE1Pak = QStringLiteral("IPC_561SD53MP.4450_2509011489.E1.3MP.WIFI5.PT.REOLINK.pak");
const QString kE1ProPak = QStringLiteral("IPC_566SD54MP.5112_2507081475.E1-Pro.4MP.WIFI7.PT.REOLINK.pak");
const QString kE1Board = QStringLiteral("IPC_561SD53MP");
const QString kE1ProBoard = QStringLiteral("IPC_566SD54MP");
const QString kE1Version = QStringLiteral("v3.1.0.1643_22122300");
const QString kE1ProVersion = QStringLiteral("v3.1.0.3149_2401092478");

/// Something that starts like a package and is the size of one.
QByteArray fakePak(qsizetype size = 3 * 1024 * 1024 + 12345)
{
    QByteArray data(size, Qt::Uninitialized);
    QRandomGenerator rng(42);
    for (qsizetype i = 0; i < size; ++i)
        data[i] = char(rng.bounded(256));
    data.replace(0, 4, QByteArray("\x13\x59\x72\x32", 4));
    return data;
}

const QString kDeviceInfo = QStringLiteral(
    "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<body>\n<DeviceInfo version=\"1.1\">\n"
    "<type>E1</type>\n</DeviceInfo>\n</body>\n");

} // namespace

class TestFirmware : public QObject {
    Q_OBJECT

private:
    std::unique_ptr<FakeCamera> m_camera;

private slots:
    void init()
    {
        m_camera = std::make_unique<FakeCamera>(kUser, kPassword);
        m_camera->setDocument(80, kDeviceInfo);
    }

    void cleanup() { m_camera.reset(); }

    void readsTheName()
    {
        const firmware::PakName e1 = firmware::parsePakName(kE1Pak);
        QCOMPARE(e1.board, kE1Board);
        QCOMPARE(e1.build, 4450);
        QCOMPARE(e1.date, QStringLiteral("2509011489"));
        // From wherever it was picked.
        QCOMPARE(firmware::parsePakName(QStringLiteral("/home/x/Downloads/") + kE1ProPak).board,
                 kE1ProBoard);
        QVERIFY(!firmware::parsePakName(QStringLiteral("E1_4450_2509011489.zip")).valid());
        QVERIFY(!firmware::parsePakName(QStringLiteral("firmware.pak")).valid());
    }

    void readsTheVersion()
    {
        QCOMPARE(firmware::buildOf(kE1Version), 1643);
        QCOMPARE(firmware::buildOf(kE1ProVersion), 3149);
        QCOMPARE(firmware::buildOf(QStringLiteral("3.0.0.6460_2605211897")), 6460);
        QCOMPARE(firmware::buildOf(QString()), 0);
    }

    void whatMayGoWhere_data()
    {
        QTest::addColumn<QString>("name");
        QTest::addColumn<QByteArray>("data");
        QTest::addColumn<QString>("board");
        QTest::addColumn<QString>("version");
        QTest::addColumn<QString>("refusedFor");   // a word of the refusal, or empty

        const QByteArray pak = fakePak();
        QTest::addRow("E1's own") << kE1Pak << pak << kE1Board << kE1Version << QString();
        QTest::addRow("E1 Pro's own") << kE1ProPak << pak << kE1ProBoard << kE1ProVersion << QString();
        QTest::addRow("board in another case") << kE1Pak << pak << kE1Board.toLower() << kE1Version << QString();
        // The one that matters: an E1 Pro and an E1 sit side by side in the
        // same list, and their packages differ by one character of the board.
        QTest::addRow("E1 Pro's to an E1") << kE1ProPak << pak << kE1Board << kE1Version << "board";
        QTest::addRow("E1's to an E1 Zoom") << kE1Pak << pak << "IPC_566SD664M5MP"
                                            << "v3.1.0.4417_2412122178" << "board";
        QTest::addRow("installed already") << kE1Pak << pak << kE1Board << "v3.1.0.4450_2509011489" << "already";
        QTest::addRow("older") << kE1Pak << pak << kE1Board << "v3.1.0.5000_2601010000" << "older";
        QTest::addRow("unknown board") << kE1Pak << pak << QString() << kE1Version << "board";
        QTest::addRow("the zip") << "E1_4450_2509011489.zip" << pak << kE1Board << kE1Version << ".pak";
        QTest::addRow("not a package") << kE1Pak << QByteArray(pak).replace(0, 4, "PK\x03\x04")
                                       << kE1Board << kE1Version << "look";
        QTest::addRow("cut short") << kE1Pak << pak.left(4096) << kE1Board << kE1Version << "look";
    }

    void whatMayGoWhere()
    {
        QFETCH(QString, name);
        QFETCH(QByteArray, data);
        QFETCH(QString, board);
        QFETCH(QString, version);
        QFETCH(QString, refusedFor);
        const QString why = firmware::refusal(name, data, board, version);
        if (refusedFor.isEmpty())
            QVERIFY2(why.isEmpty(), qPrintable(why));
        else
            QVERIFY2(why.contains(refusedFor), qPrintable(why));
    }

    void upload_data()
    {
        QTest::addColumn<bool>("aes");
        QTest::addRow("AES, as an E1 Pro") << true;
        QTest::addRow("XOR, as an E1 can") << false;
    }

    /// The file arrives whole and in order, announced first, every piece under
    /// one handle, and no message of it as large as the 40,000 bytes at which
    /// the camera hangs up.
    void upload()
    {
        QFETCH(bool, aes);
        m_camera->grantAes = aes;
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, m_camera->port());
        QVERIFY2(client.login(), qPrintable(client.lastError()));

        const QByteArray pak = fakePak();
        QList<qint64> heard;
        QVERIFY2(client.uploadFirmware(kE1Pak, pak,
                                       [&heard, &pak](qint64 sent, qint64 total) {
                                           QCOMPARE(total, qint64(pak.size()));
                                           heard << sent;
                                       }),
                 qPrintable(client.lastError()));

        QCOMPARE(m_camera->uploaded().size(), pak.size());
        QVERIFY(m_camera->uploaded() == pak);
        const QString announcement = m_camera->uploadAnnouncement();
        QVERIFY2(announcement.contains(QStringLiteral("<fileName>%1</fileName>").arg(kE1Pak)),
                 qPrintable(announcement));
        QVERIFY(announcement.contains(QStringLiteral("<fileSize>%1</fileSize>").arg(pak.size())));
        QVERIFY(announcement.contains(QLatin1String("<channelBits>0</channelBits>")));

        const QList<quint16> handles = m_camera->uploadHandles();
        QCOMPARE(handles.size(), heard.size() + 1);
        for (quint16 h : handles)
            QCOMPARE(h, handles.first());
        QVERIFY2(m_camera->largestMessage() < 40000, qPrintable(QString::number(m_camera->largestMessage())));
        QVERIFY(m_camera->largestMessage() > 30000);   // and not dribbled out

        for (int i = 1; i < heard.size(); ++i)
            QVERIFY(heard[i] > heard[i - 1]);
        QCOMPARE(heard.last(), qint64(pak.size()));
    }

    /// A camera that turns a piece down has not got the firmware, and is not
    /// sent the rest as if it had.
    void refusedPieceStops()
    {
        m_camera->refusePiece = 5;
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, m_camera->port());
        QVERIFY(client.login());
        QVERIFY(!client.uploadFirmware(kE1Pak, fakePak()));
        QVERIFY2(client.lastError().contains(QLatin1String("400")), qPrintable(client.lastError()));
        QCOMPARE(m_camera->uploadHandles().size(), 1 + 6);
    }

    void refusedAnnouncementSendsNothing()
    {
        m_camera->refuseAnnouncement = true;
        m_camera->begin();
        BaichuanClient client(QStringLiteral("127.0.0.1"), kUser, kPassword, m_camera->port());
        QVERIFY(client.login());
        QVERIFY(!client.uploadFirmware(kE1Pak, fakePak()));
        QVERIFY(client.lastError().contains(QLatin1String("announcement")));
        QCOMPARE(m_camera->uploadHandles().size(), 1);
        QVERIFY(m_camera->uploaded().isEmpty());
    }
};

QTEST_GUILESS_MAIN(TestFirmware)
#include "tst_firmware.moc"
