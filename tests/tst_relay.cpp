// The Baichuan stream re-served on the loopback interface, to more than one
// reader at once, against FakeCamera.

#include <QElapsedTimer>
#include <QPointer>
#include <QTcpSocket>
#include <QTest>

#include "BaichuanStream.h"
#include "Config.h"
#include "FakeCamera.h"

using leolink::BaichuanStream;
using leolink::CameraConfig;

namespace {

const QString kUser = QStringLiteral("admin");
const QString kPassword = QStringLiteral("not a real password");

/// A reader of the loopback port, holding on to everything it is sent.
struct Reader {
    QTcpSocket socket;
    QByteArray received;

    void open(const QString &url)
    {
        const QUrl u(url);
        socket.connectToHost(u.host(), quint16(u.port()));
    }
    /// Takes whatever has arrived, for up to `ms`.
    void take(int ms)
    {
        if (socket.waitForReadyRead(ms))
            received += socket.readAll();
    }
    /// Whole transport stream packets, every one on its sync byte.
    bool isTransportStream() const
    {
        if (received.size() < 188)
            return false;
        for (qsizetype at = 0; at + 188 <= received.size(); at += 188) {
            if (received.at(at) != '\x47')
                return false;
        }
        return true;
    }
};

} // namespace

class TestRelay : public QObject {
    Q_OBJECT

private:
    std::unique_ptr<FakeCamera> m_camera;

    CameraConfig camera()
    {
        CameraConfig c;
        c.id = QStringLiteral("cam");
        c.name = QStringLiteral("Office");
        c.host = QStringLiteral("127.0.0.1");
        c.user = kUser;
        c.password = kPassword;
        c.baichuanPort = m_camera->port();
        c.transport = QStringLiteral("baichuan");
        c.caps.known = true;
        c.caps.baichuan = true;
        return c;
    }

    /// Reads from both for `ms` in all.
    static void takeBoth(Reader &a, Reader &b, int ms)
    {
        QElapsedTimer t;
        t.start();
        while (t.elapsed() < ms) {
            a.take(20);
            b.take(20);
        }
    }

private slots:
    void init()
    {
        m_camera = std::make_unique<FakeCamera>(kUser, kPassword);
        m_camera->begin();
    }

    void cleanup()
    {
        BaichuanStream::shutdownAll();
        m_camera.reset();
    }

    /// One stream per camera, whoever asks, and its address known at once.
    void sharedByEveryone()
    {
        const CameraConfig c = camera();
        BaichuanStream *first = BaichuanStream::shared(c);
        QCOMPARE(BaichuanStream::shared(c), first);
        QVERIFY(first->url().startsWith(QLatin1String("tcp://127.0.0.1:")));
        QCOMPARE(BaichuanStream::openUrl(c), first->url());

        // Another stream type is another stream.
        CameraConfig main = c;
        main.stream = QStringLiteral("main");
        QVERIFY(BaichuanStream::shared(main) != first);
    }

    /// Two readers that arrive together — a recording and motion detection
    /// started at once — are both served, from one camera connection. The
    /// second used to wait in the server's queue for ever.
    void twoReadersAtOnce()
    {
        const QString url = BaichuanStream::openUrl(camera());
        Reader a, b;
        a.open(url);
        b.open(url);
        takeBoth(a, b, 1500);

        QVERIFY2(a.isTransportStream(), qPrintable(QString::number(a.received.size())));
        QVERIFY2(b.isTransportStream(), qPrintable(QString::number(b.received.size())));
        QVERIFY(a.received.size() > 4 * 188);
        QVERIFY(b.received.size() > 4 * 188);
        QCOMPARE(m_camera->videoRequests(), 1);
    }

    /// One reader going leaves the other served.
    void oneLeavesTheOtherStays()
    {
        const QString url = BaichuanStream::openUrl(camera());
        Reader a, b;
        a.open(url);
        b.open(url);
        takeBoth(a, b, 800);
        a.socket.abort();

        const qsizetype before = b.received.size();
        QElapsedTimer t;
        t.start();
        while (t.elapsed() < 800)
            b.take(20);
        QVERIFY(b.received.size() > before + 188);
        QCOMPARE(m_camera->videoRequests(), 1);
    }

    /// A reader arriving once the stream is running starts on the last key
    /// frame rather than waiting for the next one.
    void lateReaderStartsAtOnce()
    {
        BaichuanStream *stream = BaichuanStream::shared(camera());
        Reader early;
        early.open(stream->url());
        QTRY_VERIFY(stream->isReady());
        QElapsedTimer t;
        t.start();
        while (t.elapsed() < 600)
            early.take(20);

        Reader late;
        late.open(stream->url());
        late.take(300);
        QVERIFY(late.isTransportStream());
        // Tables, then the stored key frame: more than a packet's worth.
        QVERIFY(late.received.size() > 2 * 188);
    }

    /// A stream whose camera has gone is not handed out again.
    void endedStreamIsReplaced()
    {
        const CameraConfig c = camera();
        BaichuanStream *stream = BaichuanStream::shared(c);
        // Once it has ended it deletes itself, so it is watched through this.
        const QPointer<BaichuanStream> alive = stream;
        const auto ended = [&alive] {
            BaichuanStream *s = alive.data();
            return s == nullptr || s->isEnding();
        };
        Reader r;
        r.open(stream->url());
        QTRY_VERIFY(stream->isReady());
        m_camera->silent = true;
        QTRY_VERIFY_WITH_TIMEOUT(ended(), 15000);
        QVERIFY(BaichuanStream::shared(c) != alive.data());
    }
};

QTEST_MAIN(TestRelay)
#include "tst_relay.moc"
