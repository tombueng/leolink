// The buffer behind motion recordings, and the detectors, against real ffmpeg.

#include <QFile>
#include <QProcess>
#include <QSignalSpy>
#include <QTemporaryDir>
#include <QTest>

#include "AudioDetector.h"
#include "Config.h"
#include "MotionDetector.h"
#include "SegmentBuffer.h"

using leolink::AudioDetector;
using leolink::CameraConfig;
using leolink::MotionDetector;
using leolink::SegmentBuffer;

namespace {

CameraConfig fileCamera(const QString &path)
{
    CameraConfig c;
    c.id = QStringLiteral("file");
    c.host = QStringLiteral("192.0.2.1");
    c.transport = QStringLiteral("custom");
    c.customUrl = path;
    return c;
}

QString segment(const QTemporaryDir &dir, const QDateTime &start)
{
    const QString path = dir.filePath(
        QStringLiteral("seg-%1.mkv").arg(start.toString(QStringLiteral("yyyyMMdd-HHmmss"))));
    QFile file(path);
    return file.open(QIODevice::WriteOnly) ? path : QString();
}

bool ffmpeg(const QStringList &args)
{
    return QProcess::execute(QStringLiteral("ffmpeg"),
                             QStringList{QStringLiteral("-nostdin"), QStringLiteral("-loglevel"),
                                         QStringLiteral("error"), QStringLiteral("-y")} + args) == 0;
}

} // namespace

class TestRecording : public QObject {
    Q_OBJECT

private:
    struct Buffer {
        QTemporaryDir dir;
        SegmentBuffer buffer;
        Buffer()
        {
            SegmentBuffer::Settings settings;
            settings.directory = dir.path();
            settings.retentionSeconds = 60;
            buffer.start(fileCamera(dir.filePath(QStringLiteral("nothing.mkv"))), settings);
        }
    };

private slots:
    void init()
    {
        if (!SegmentBuffer::available())
            QSKIP("no ffmpeg");
    }

    void withoutAHoldOldSegmentsGo()
    {
        Buffer b;
        const QDateTime now = QDateTime::currentDateTime();
        const QString old = segment(b.dir, now.addSecs(-600));
        const QString older = segment(b.dir, now.addSecs(-300));
        const QString newest = segment(b.dir, now.addSecs(-30));
        b.buffer.prune();
        QVERIFY(!QFile::exists(old));
        QVERIFY(QFile::exists(older));   // runs until the newest, inside the retention
        QVERIFY(QFile::exists(newest));
    }

    void anEventInProgressKeepsItsSegments()
    {
        Buffer b;
        const QDateTime now = QDateTime::currentDateTime();
        const QString before = segment(b.dir, now.addSecs(-900));
        const QString first = segment(b.dir, now.addSecs(-600));
        const QString second = segment(b.dir, now.addSecs(-300));
        const QString newest = segment(b.dir, now.addSecs(-30));
        const QDateTime from = now.addSecs(-400);

        b.buffer.holdFrom(from);
        b.buffer.prune();
        QVERIFY(!QFile::exists(before));
        QVERIFY(QFile::exists(first));
        QVERIFY(QFile::exists(second));

        // The cut fails on these empty files; the hold goes either way.
        QSignalSpy failed(&b.buffer, &SegmentBuffer::failed);
        b.buffer.extract(from, now, b.dir.filePath(QStringLiteral("out.mkv")));
        QVERIFY(failed.wait(10000));
        b.buffer.prune();
        QVERIFY(!QFile::exists(first));
        QVERIFY(QFile::exists(newest));
    }

    void anEventThatNeverEndsIsBounded()
    {
        Buffer b;
        const QDateTime now = QDateTime::currentDateTime();
        const QString old = segment(b.dir, now.addSecs(-3 * 3600));
        const QString next = segment(b.dir, now.addSecs(-2 * 3600));
        const QString newest = segment(b.dir, now.addSecs(-30));
        b.buffer.holdFrom(now.addSecs(-4 * 3600));
        b.buffer.prune();
        QVERIFY(!QFile::exists(old));
        QVERIFY(QFile::exists(newest));
        Q_UNUSED(next);
    }

    /// ffmpeg ends with the file, as it does when a camera goes away.
    void motionDetectorClearsAndTriesAgain()
    {
        QTemporaryDir dir;
        const QString video = dir.filePath(QStringLiteral("video.mkv"));
        if (!ffmpeg({QStringLiteral("-f"), QStringLiteral("lavfi"), QStringLiteral("-i"),
                     QStringLiteral("testsrc2=size=160x90:rate=5"), QStringLiteral("-t"),
                     QStringLiteral("2"), QStringLiteral("-c:v"), QStringLiteral("ffv1"), video}))
            QSKIP("ffmpeg cannot make the test video");

        MotionDetector detector;
        QSignalSpy motion(&detector, &MotionDetector::motionChanged);
        detector.start(fileCamera(video), QString(), 10, 1);
        QTRY_VERIFY_WITH_TIMEOUT(motion.size() >= 2, 10000);
        QCOMPARE(motion.at(0).first().toBool(), true);
        QCOMPARE(motion.at(1).first().toBool(), false);
        QVERIFY(!detector.isActive());
        QTRY_VERIFY_WITH_TIMEOUT(motion.size() >= 3, 20000);
        QCOMPARE(motion.at(2).first().toBool(), true);
    }

    void audioDetectorClearsAndTriesAgain()
    {
        QTemporaryDir dir;
        const QString audio = dir.filePath(QStringLiteral("audio.wav"));
        if (!ffmpeg({QStringLiteral("-f"), QStringLiteral("lavfi"), QStringLiteral("-i"),
                     QStringLiteral("sine=frequency=440:duration=2"), audio}))
            QSKIP("ffmpeg cannot make the test audio");

        AudioDetector detector;
        QSignalSpy sound(&detector, &AudioDetector::soundChanged);
        detector.start(fileCamera(audio), -60.0, 60);
        QTRY_VERIFY_WITH_TIMEOUT(sound.size() >= 2, 10000);
        QCOMPARE(sound.at(0).first().toBool(), true);
        QCOMPARE(sound.at(1).first().toBool(), false);
        QTRY_VERIFY_WITH_TIMEOUT(sound.size() >= 3, 20000);
        QCOMPARE(sound.at(2).first().toBool(), true);
    }
};

QTEST_GUILESS_MAIN(TestRecording)
#include "tst_recording.moc"
