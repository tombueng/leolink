// Settings that exist only once: window, alerting, defaults, video, language.
#pragma once

#include <QDialog>

#include "Config.h"

class QCheckBox;
class QComboBox;
class QLineEdit;
class QSpinBox;

namespace leolink {

class ActionEditor;

/// Everything global, and nothing else.
///
/// The dividing line is one question: can this sensibly have only one value?
/// A recordings folder can, a language can, a decoder can. Whether *this*
/// camera is watched over ONVIF cannot — there are as many answers as there
/// are cameras — so it lives in the camera's own dialog, not here.
class PreferencesDialog : public QDialog {
    Q_OBJECT

public:
    explicit PreferencesDialog(const Config &config, QWidget *parent = nullptr);

    /// Only meaningful once exec() returned Accepted.
    Config result() const { return m_config; }

private slots:
    void onAccept();

private:
    QWidget *buildWindowTab();
    QWidget *buildAlertTab();
    QWidget *buildActionTab();
    QWidget *buildRecordingTab();
    QWidget *buildVideoTab();
    QWidget *buildGeneralTab();

    Config m_config;

    // Window
    QCheckBox *m_showMenuBar{nullptr};
    QCheckBox *m_showToolBar{nullptr};
    QCheckBox *m_showStatusBar{nullptr};
    QCheckBox *m_frameless{nullptr};
    QCheckBox *m_trayEnabled{nullptr};
    QCheckBox *m_closeToTray{nullptr};
    QCheckBox *m_minimizeToTray{nullptr};

    // On motion
    QCheckBox *m_flashOnMotion{nullptr};
    QSpinBox *m_flashMilliseconds{nullptr};
    QCheckBox *m_soundOnMotion{nullptr};
    QLineEdit *m_soundFile{nullptr};
    QCheckBox *m_raiseOnMotion{nullptr};
    QComboBox *m_raiseMode{nullptr};

    // Default reactions
    ActionEditor *m_actions{nullptr};

    // Recordings
    QLineEdit *m_recordDir{nullptr};

    // Video
    QComboBox *m_hwdec{nullptr};
    QCheckBox *m_lowLatency{nullptr};

    // General
    QComboBox *m_language{nullptr};
    QCheckBox *m_debugLogging{nullptr};
};

} // namespace leolink
