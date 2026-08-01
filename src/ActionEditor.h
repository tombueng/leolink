// One set of reactions to an event: command, webhook, MQTT.
#pragma once

#include <QWidget>

#include "EventActions.h"

class QCheckBox;
class QComboBox;
class QLineEdit;
class QPlainTextEdit;
class QSpinBox;

namespace leolink {

/// Edits an ActionConfig. The same widget serves the house rule under
/// Settings and a camera's own set, because they are the same structure —
/// a camera either follows the defaults or replaces them wholesale.
class ActionEditor : public QWidget {
    Q_OBJECT

public:
    explicit ActionEditor(QWidget *parent = nullptr);

    void setActions(const ActionConfig &actions);
    ActionConfig actions() const;

private:
    QCheckBox *m_runCommand{nullptr};
    QLineEdit *m_command{nullptr};

    QCheckBox *m_callWebhook{nullptr};
    QLineEdit *m_webhookUrl{nullptr};
    QComboBox *m_webhookMethod{nullptr};
    QPlainTextEdit *m_webhookBody{nullptr};

    QCheckBox *m_publishMqtt{nullptr};
    QLineEdit *m_mqttHost{nullptr};
    QSpinBox *m_mqttPort{nullptr};
    QLineEdit *m_mqttTopic{nullptr};
    QLineEdit *m_mqttUser{nullptr};
    QLineEdit *m_mqttPassword{nullptr};
    QLineEdit *m_mqttPayload{nullptr};
    QCheckBox *m_mqttRetain{nullptr};
};

} // namespace leolink
