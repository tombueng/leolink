// The buttons laid over a tile's picture to turn the camera.

#include <QSignalSpy>
#include <QTest>
#include <QToolButton>

#include "PtzPad.h"

using leolink::PtzPad;

namespace {

QToolButton *button(PtzPad &pad, const QString &tip)
{
    for (QToolButton *b : pad.findChildren<QToolButton *>()) {
        if (b->toolTip() == tip)
            return b;
    }
    return nullptr;
}

} // namespace

class TestPtzPad : public QObject {
    Q_OBJECT

private slots:
    /// Held, not clicked: the camera turns from the press until the release,
    /// so each says what it is — the direction, then Stop.
    void heldThenLetGo()
    {
        PtzPad pad;
        pad.show();
        QSignalSpy moves(&pad, &PtzPad::moveRequested);

        QToolButton *left = button(pad, QStringLiteral("Left"));
        QVERIFY(left);
        QTest::mousePress(left, Qt::LeftButton);
        QCOMPARE(moves.count(), 1);
        QCOMPARE(moves.last().first().toString(), QStringLiteral("Left"));
        QTest::mouseRelease(left, Qt::LeftButton);
        QCOMPARE(moves.count(), 2);
        QCOMPARE(moves.last().first().toString(), QStringLiteral("Stop"));

        QToolButton *diagonal = button(pad, QStringLiteral("Down and right"));
        QVERIFY(diagonal);
        QTest::mousePress(diagonal, Qt::LeftButton);
        QCOMPARE(moves.last().first().toString(), QStringLiteral("RightDown"));
        QTest::mouseRelease(diagonal, Qt::LeftButton);
        QCOMPARE(moves.last().first().toString(), QStringLiteral("Stop"));
    }

    /// Zoom is offered only on a camera with a zoom lens.
    void zoomOnlyWhereThereIsOne()
    {
        PtzPad pad;
        pad.show();
        QToolButton *in = button(pad, QStringLiteral("Zoom in"));
        QToolButton *out = button(pad, QStringLiteral("Zoom out"));
        QVERIFY(in && out);
        QVERIFY(!in->isVisible());
        QVERIFY(!out->isVisible());

        pad.setZoomAvailable(true);
        QVERIFY(in->isVisible());
        QSignalSpy moves(&pad, &PtzPad::moveRequested);
        QTest::mousePress(in, Qt::LeftButton);
        QTest::mouseRelease(in, Qt::LeftButton);
        QCOMPARE(moves.count(), 2);
        QCOMPARE(moves.first().first().toString(), QStringLiteral("ZoomInc"));
    }
};

QTEST_MAIN(TestPtzPad)
#include "tst_ptzpad.moc"
