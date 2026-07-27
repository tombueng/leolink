// The log, on screen, in a shape that can be pasted into a bug report.
#pragma once

#include <QDialog>

#include "Log.h"

class QCheckBox;
class QComboBox;
class QLabel;
class QLineEdit;
class QPlainTextEdit;

namespace leolink {

/// Shows what leolink has been doing and packages it for someone else to read.
///
/// Bug reports from strangers are almost always "it does not work". This window
/// is the answer to that: it turns the running log into something a user can
/// copy in one click, with the machine's details attached and every password,
/// token and remote address already removed — so nobody has to choose between
/// helping and handing over the keys to their camera.
class DiagnosticsDialog : public QDialog {
    Q_OBJECT

public:
    explicit DiagnosticsDialog(QWidget *parent = nullptr);

signals:
    /// The user switched detailed logging on or off; the caller persists it.
    void debugLoggingChanged(bool enabled);

private:
    void refresh();
    void appendIfWanted(const QString &line);
    bool passesFilter(const QString &line) const;
    QString buildReport() const;

    QComboBox *m_level;
    QComboBox *m_category;
    QLineEdit *m_search;
    QCheckBox *m_debug;
    QCheckBox *m_follow;
    QPlainTextEdit *m_view;
    QLabel *m_summary;
};

} // namespace leolink
