// Settings that live on the camera: encoder, picture, day/night, OSD.
#pragma once

#include <QDialog>
#include <QHash>
#include <QMap>
#include <QJsonArray>
#include <QJsonObject>
#include <QList>

#include "Config.h"

class QComboBox;
class QGroupBox;
class QLabel;
class QLineEdit;
class QPlainTextEdit;
class QPushButton;
class QSlider;
class QTableWidget;
class QTabWidget;

namespace leolink {

class ReolinkClient;
class SectionEditor;
class SignalIndicator;

/// Changes settings on the camera itself, as opposed to how leolink displays
/// it.
///
/// Every control is built from what the camera reports through `action=1`:
/// resolutions, bit rates, frame rates and profiles all come from its own
/// `range` document. Nothing here is hardcoded, which is what lets one dialog
/// serve models with entirely different capabilities — and why a setting the
/// camera cannot do simply does not appear.
class CameraSettingsDialog : public QDialog {
    Q_OBJECT

public:
    CameraSettingsDialog(const CameraConfig &camera, QWidget *parent = nullptr);

    /// Prints what the dialog ended up looking like and holding. Used by
    /// LEOLINK_DIALOG_TEST; there is no other way to check a dialog from
    /// outside the process.
    void reportForTesting() const;

signals:
    /// The camera's encoder was changed, so its stream has just restarted.
    void streamReconfigured();

private slots:
    void onSectionReady(const QString &command, const QJsonObject &value,
                        const QJsonObject &ranges);
    void onSectionApplied(const QString &command);
    void onFailed(const QString &reason);
    void onApply();
    void onReboot();
    void onNetworkInfo(const QJsonObject &info);
    void onScanWifi();
    void onWifiNetworks(const QJsonArray &networks);
    void onJoinWifi();
    void onAddUser();
    void onDeleteUser();
    void onChangePassword();
    void onFormatStorage();
    /// The camera's alarm section: detection grid, week of hours, sensitivity
    /// bands. Too structured for a generated form, so it is handled here.
    void onAlarmReady(const QJsonObject &alarm);
    void onEditDetectionArea();
    void onEditDetectionSchedule();
    void onEditRecordingSchedule();
    void onMaskReady(const QJsonObject &mask, const QJsonObject &range);
    void onEditPrivacyMask();
    void onProbeCapabilities();
    void onCapabilities(const QMap<QString, QString> &results);

private:
    void buildEncoderTab();
    void buildPictureTab();
    void buildMaintenanceTab();
    void buildNetworkTab();
    void buildMobileTab();
    void buildPictureSections();
    void buildOverlayTab();
    void buildDetectionTab();
    void buildRecordingTab();
    void buildAlertTab();
    void buildTimeTab();
    void buildUserTab();

    /// Creates an editor for one camera section and registers it so the reply
    /// to Get<name> lands in the right place.
    /// Adds a tab, wrapped so the dialog stays resizable.
    void addPage(QWidget *page, const QString &title);
    SectionEditor *addSection(QWidget *page, const QString &command,
                              const QString &title,
                              const QList<struct FieldSpec> &fields,
                              bool perChannel = true);
    /// Fills one stream's controls from the camera's range document.
    void populateStream(const QString &which, const QJsonObject &value,
                        const QJsonObject &range);
    QJsonObject collectEncoder() const;
    QJsonObject collectImage() const;
    QJsonObject collectAlarm() const;
    void refreshMaskSummary();
    /// Resolution the camera's own pixel coordinates refer to.
    QSize mainStreamSize() const;

    CameraConfig m_camera;
    ReolinkClient *m_client;
    QTabWidget *m_tabs;
    QLabel *m_status;
    QPushButton *m_applyButton;
    QPushButton *m_rebootButton{nullptr};
    QLabel *m_networkInfo{nullptr};
    SignalIndicator *m_signal{nullptr};
    QComboBox *m_wifiNetworks{nullptr};
    /// Explains duplicate names after a scan; a mesh is the usual reason.
    QLabel *m_wifiHint{nullptr};
    QLineEdit *m_wifiPassword{nullptr};
    QPushButton *m_wifiScanButton{nullptr};
    QPushButton *m_wifiJoinButton{nullptr};
    QTableWidget *m_userTable{nullptr};

    // ── detection ───────────────────────────────────────────────────────────
    QGroupBox *m_alarmBox{nullptr};
    QPushButton *m_areaButton{nullptr};
    QPushButton *m_detectionScheduleButton{nullptr};
    QTableWidget *m_sensitivityTable{nullptr};
    /// The alarm section as the camera sent it, edited in place. Written back
    /// whole: Set* replaces the structure, and a field left out is a field
    /// reset.
    QJsonObject m_alarm;
    bool m_alarmDirty{false};
    /// Stops the table's own signals from marking the dialog dirty while it is
    /// being filled.
    bool m_loadingAlarm{false};

    // ── privacy ─────────────────────────────────────────────────────────────
    QPushButton *m_maskButton{nullptr};
    QLabel *m_maskSummary{nullptr};
    QJsonObject m_mask;
    int m_maskMaximum{4};
    bool m_maskDirty{false};

    // ── recording ───────────────────────────────────────────────────────────
    QPushButton *m_recordScheduleButton{nullptr};
    QJsonObject m_recording;
    bool m_recordingDirty{false};
    QLabel *m_performance{nullptr};
    QPlainTextEdit *m_capabilities{nullptr};
    /// The same list in a form worth pasting into a bug report.
    QString m_capabilityReport;
    QLabel *m_firmware{nullptr};
    QPushButton *m_checkFirmwareButton{nullptr};
    /// Says why the user list is empty, rather than leaving an empty table.
    QLabel *m_userStatus{nullptr};
    QPushButton *m_upgradeButton{nullptr};

    /// What the camera last told us, kept so that writing back only changes
    /// the fields the user touched — Set* wants the whole structure, and
    /// inventing the untouched half would overwrite settings we never showed.
    QJsonObject m_encValue;
    QJsonObject m_encRange;
    QJsonObject m_imageValue;

    /// Generated sections, keyed by the Get command that fills them. Writing
    /// back turns Get into Set, which is how this API is shaped throughout.
    QHash<QString, SectionEditor *> m_sections;
    QHash<QString, QJsonObject> m_sectionParams;
    /// Wrapper key inside the reply, e.g. GetIsp → "Isp".
    QHash<QString, QString> m_sectionWrappers;

    struct StreamControls {
        QComboBox *size{nullptr};
        QComboBox *frameRate{nullptr};
        QComboBox *bitRate{nullptr};
        QComboBox *profile{nullptr};
    };
    StreamControls m_main;
    StreamControls m_sub;

    QSlider *m_bright{nullptr};
    QSlider *m_contrast{nullptr};
    QSlider *m_saturation{nullptr};
    QSlider *m_sharpen{nullptr};
    QSlider *m_hue{nullptr};

    int m_pending{0};   ///< outstanding writes, so status only clears at the end
};

} // namespace leolink
