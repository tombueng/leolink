// Everything configurable, grouped into tabs.
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
    void refreshGridPreview();

private:
    QWidget *buildCameraTab();
    QWidget *buildLayoutTab();
    QWidget *buildEventTab();
    QWidget *buildWindowTab();

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

    // Layout tab
    QSpinBox *m_gridColumns{nullptr};
    QSpinBox *m_gridRows{nullptr};
    QSpinBox *m_row{nullptr};
    QSpinBox *m_col{nullptr};
    QSpinBox *m_rowSpan{nullptr};
    QSpinBox *m_colSpan{nullptr};
    QTableWidget *m_gridPreview{nullptr};

    // Event tab
    QLineEdit *m_motionCommand{nullptr};
    QCheckBox *m_recordOnMotion{nullptr};
    QSpinBox *m_recordTrailing{nullptr};
    QLineEdit *m_recordDir{nullptr};
    QCheckBox *m_showMotion{nullptr};

    // Window tab
    QCheckBox *m_showMenuBar{nullptr};
    QCheckBox *m_showToolBar{nullptr};
    QCheckBox *m_showStatusBar{nullptr};
    QCheckBox *m_frameless{nullptr};
    QCheckBox *m_trayEnabled{nullptr};
    QCheckBox *m_closeToTray{nullptr};
    QCheckBox *m_minimizeToTray{nullptr};
    QCheckBox *m_raiseOnMotion{nullptr};
    QComboBox *m_raiseMode{nullptr};
    QComboBox *m_language{nullptr};
    QComboBox *m_hwdec{nullptr};
    QCheckBox *m_lowLatency{nullptr};

    ReolinkClient *m_tester{nullptr};
    Discovery *m_discovery{nullptr};
};

} // namespace leolink
