// The camera list and the grid they are shown in.
#pragma once

#include <QDialog>

#include "Config.h"

class QCheckBox;
class QComboBox;
class QLabel;
class QLineEdit;
class QListWidget;
class QPushButton;
class QSpinBox;
class QTableWidget;

namespace leolink {

class Discovery;
class ReolinkClient;

class SettingsDialog : public QDialog {
    Q_OBJECT

public:
    explicit SettingsDialog(const Config &config, QWidget *parent = nullptr);

    /// Only meaningful once exec() returned Accepted.
    Config result() const { return m_config; }

private slots:
    void onSelectionChanged(int row);
    void onAdd();
    void onRemove();
    void onTest();
    void onScan();
    void onAccept();
    void onOpenCameraSettings();
    void refreshGridPreview();

private:
    QWidget *buildCameraTab();
    QWidget *buildLayoutTab();

    void rebuildList();
    void loadIntoForm(const CameraConfig &camera);
    void storeFromForm();

    Config m_config;
    int m_current{-1};
    /// Stops the form from writing back while it is being populated.
    bool m_loading{false};

    // Camera tab
    QListWidget *m_list{nullptr};
    QLineEdit *m_name{nullptr};
    QLineEdit *m_host{nullptr};
    QLineEdit *m_user{nullptr};
    QLineEdit *m_password{nullptr};
    QLineEdit *m_passwordCommand{nullptr};
    QLineEdit *m_uid{nullptr};
    QLineEdit *m_customUrl{nullptr};
    QComboBox *m_stream{nullptr};
    QComboBox *m_transport{nullptr};
    QCheckBox *m_https{nullptr};
    QCheckBox *m_enabled{nullptr};
    QLabel *m_testResult{nullptr};
    QPushButton *m_testButton{nullptr};
    QPushButton *m_scanButton{nullptr};
    QPushButton *m_settingsButton{nullptr};

    // Layout tab
    QSpinBox *m_gridColumns{nullptr};
    QSpinBox *m_gridRows{nullptr};
    QSpinBox *m_row{nullptr};
    QSpinBox *m_col{nullptr};
    QSpinBox *m_rowSpan{nullptr};
    QSpinBox *m_colSpan{nullptr};
    QTableWidget *m_gridPreview{nullptr};

    ReolinkClient *m_tester{nullptr};
    Discovery *m_discovery{nullptr};
};

} // namespace leolink
