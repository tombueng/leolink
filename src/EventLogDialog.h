// Browse recorded events, filter by camera, open the captured media.
#pragma once

#include <QDialog>

#include "Config.h"
#include "EventLog.h"

class QComboBox;
class QLabel;
class QPushButton;
class QTableWidget;

namespace leolink {

class EventLogDialog : public QDialog {
    Q_OBJECT

public:
    EventLogDialog(const Config &config, EventLog *log, QWidget *parent = nullptr);

private slots:
    void reload();
    void onRowSelected(int row);
    void openSelectedMedia();
    void onClear();

private:
    const Config &m_config;
    EventLog *m_log;
    QList<EventEntry> m_entries;

    QComboBox *m_cameraFilter{nullptr};
    QComboBox *m_typeFilter{nullptr};
    QTableWidget *m_table{nullptr};
    QLabel *m_preview{nullptr};
    QLabel *m_details{nullptr};
    QPushButton *m_openButton{nullptr};
};

} // namespace leolink
