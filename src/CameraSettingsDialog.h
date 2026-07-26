// Settings that live on the camera: encoder, picture, day/night, OSD.
#pragma once

#include <QDialog>
#include <QJsonObject>

#include "Config.h"

class QComboBox;
class QLabel;
class QPushButton;
class QSlider;
class QTabWidget;

namespace leolink {

class ReolinkClient;

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

private slots:
    void onSectionReady(const QString &command, const QJsonObject &value,
                        const QJsonObject &ranges);
    void onSectionApplied(const QString &command);
    void onFailed(const QString &reason);
    void onApply();

private:
    void buildEncoderTab();
    void buildPictureTab();
    /// Fills one stream's controls from the camera's range document.
    void populateStream(const QString &which, const QJsonObject &value,
                        const QJsonObject &range);
    QJsonObject collectEncoder() const;
    QJsonObject collectImage() const;

    CameraConfig m_camera;
    ReolinkClient *m_client;
    QTabWidget *m_tabs;
    QLabel *m_status;
    QPushButton *m_applyButton;

    /// What the camera last told us, kept so that writing back only changes
    /// the fields the user touched — Set* wants the whole structure, and
    /// inventing the untouched half would overwrite settings we never showed.
    QJsonObject m_encValue;
    QJsonObject m_encRange;
    QJsonObject m_imageValue;

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
