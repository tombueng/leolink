// The camera dialog's motion form and its area and schedule editors share one
// section, and go back to the camera as one write.

#include <QTest>

#include "CameraSettingsDialog.h"

using leolink::CameraSettingsDialog;

class TestAlarmMerge : public QObject {
    Q_OBJECT

private:
    const QJsonObject m_original{
        {QStringLiteral("channel"), 0},
        {QStringLiteral("sensitivity"), 10},
        {QStringLiteral("scope"), QJsonObject{{QStringLiteral("table"), QStringLiteral("1111")}}},
    };

private slots:
    void untouchedFormChangesNothing()
    {
        QJsonObject alarm = m_original;
        QVERIFY(!CameraSettingsDialog::mergeFormEdits(alarm, m_original, m_original));
        QCOMPARE(alarm, m_original);
    }

    void formEditIsTaken()
    {
        QJsonObject alarm = m_original;
        QJsonObject form = m_original;
        form[QStringLiteral("sensitivity")] = 30;
        QVERIFY(CameraSettingsDialog::mergeFormEdits(alarm, form, m_original));
        QCOMPARE(alarm.value(QStringLiteral("sensitivity")).toInt(), 30);
    }

    /// The form hands back the area as it was when the dialog opened. Taking
    /// it would undo the area just drawn, which is what two writes of the one
    /// section did, one after the other.
    void areaDrawnMeanwhileSurvives()
    {
        QJsonObject alarm = m_original;
        alarm[QStringLiteral("scope")] = QJsonObject{{QStringLiteral("table"), QStringLiteral("0110")}};
        QJsonObject form = m_original;
        form[QStringLiteral("sensitivity")] = 30;
        QVERIFY(CameraSettingsDialog::mergeFormEdits(alarm, form, m_original));
        QCOMPARE(alarm.value(QStringLiteral("scope")).toObject().value(QStringLiteral("table")).toString(),
                 QStringLiteral("0110"));
        QCOMPARE(alarm.value(QStringLiteral("sensitivity")).toInt(), 30);
    }
};

QTEST_GUILESS_MAIN(TestAlarmMerge)
#include "tst_alarmmerge.moc"
