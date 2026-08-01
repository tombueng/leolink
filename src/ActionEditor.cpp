#include "ActionEditor.h"

#include <QCheckBox>
#include <QComboBox>
#include <QFormLayout>
#include <QGroupBox>
#include <QLabel>
#include <QLineEdit>
#include <QPlainTextEdit>
#include <QSpinBox>
#include <QVBoxLayout>

namespace leolink {

namespace {

/// The placeholder line under every template field. Written once: three
/// copies of the same list drift apart the first time one is extended.
QLabel *placeholderHint(QWidget *parent)
{
    auto *hint = new QLabel(
        ActionEditor::tr("%n camera name · %h host · %t time · %e event · "
                         "%s on/off · %f recording · %p image"),
        parent);
    hint->setWordWrap(true);
    hint->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
    return hint;
}

} // namespace

ActionEditor::ActionEditor(QWidget *parent) : QWidget(parent)
{
    // ── run a command ───────────────────────────────────────────────────────
    m_runCommand = new QCheckBox(tr("Run a command"), this);
    m_command = new QLineEdit(this);
    m_command->setPlaceholderText(QStringLiteral("notify-send \"%n\""));

    auto *commandForm = new QFormLayout;
    commandForm->addRow(QString(), m_runCommand);
    commandForm->addRow(tr("Command"), m_command);
    commandForm->addRow(QString(), placeholderHint(this));

    auto *commandBox = new QGroupBox(tr("Command"), this);
    commandBox->setLayout(commandForm);

    connect(m_runCommand, &QCheckBox::toggled, m_command, &QWidget::setEnabled);

    // ── call a webhook ──────────────────────────────────────────────────────
    m_callWebhook = new QCheckBox(tr("Call a webhook"), this);
    m_webhookUrl = new QLineEdit(this);
    m_webhookUrl->setPlaceholderText(QStringLiteral("https://…"));

    m_webhookMethod = new QComboBox(this);
    m_webhookMethod->addItems({QStringLiteral("POST"), QStringLiteral("GET"),
                               QStringLiteral("PUT")});

    m_webhookBody = new QPlainTextEdit(this);
    m_webhookBody->setPlaceholderText(
        tr("Left empty, leolink sends a small JSON document describing the "
           "event."));
    // Three lines: enough to see a template, not so much that it dominates.
    m_webhookBody->setFixedHeight(72);

    auto *webhookForm = new QFormLayout;
    webhookForm->addRow(QString(), m_callWebhook);
    webhookForm->addRow(tr("Address"), m_webhookUrl);
    webhookForm->addRow(tr("Method"), m_webhookMethod);
    webhookForm->addRow(tr("Body"), m_webhookBody);
    webhookForm->addRow(QString(), placeholderHint(this));

    auto *webhookBox = new QGroupBox(tr("Webhook"), this);
    webhookBox->setLayout(webhookForm);

    auto syncWebhook = [this](bool on) {
        m_webhookUrl->setEnabled(on);
        m_webhookMethod->setEnabled(on);
        m_webhookBody->setEnabled(on);
    };
    connect(m_callWebhook, &QCheckBox::toggled, this, syncWebhook);

    // ── publish over MQTT ───────────────────────────────────────────────────
    m_publishMqtt = new QCheckBox(tr("Publish an MQTT message"), this);
    m_mqttHost = new QLineEdit(this);
    m_mqttHost->setPlaceholderText(QStringLiteral("broker.lan"));

    m_mqttPort = new QSpinBox(this);
    m_mqttPort->setRange(1, 65535);
    m_mqttPort->setValue(1883);

    m_mqttTopic = new QLineEdit(this);
    m_mqttTopic->setPlaceholderText(QStringLiteral("leolink/%n/motion"));

    m_mqttUser = new QLineEdit(this);
    m_mqttPassword = new QLineEdit(this);
    m_mqttPassword->setEchoMode(QLineEdit::Password);

    m_mqttPayload = new QLineEdit(this);
    m_mqttPayload->setPlaceholderText(
        tr("Left empty: the same JSON document as the webhook."));

    m_mqttRetain = new QCheckBox(tr("Keep the last message on the broker"), this);
    m_mqttRetain->setToolTip(
        tr("A client connecting later is told the current state straight away, "
           "instead of waiting for the next event. This is what home automation "
           "usually wants."));

    auto *mqttForm = new QFormLayout;
    mqttForm->addRow(QString(), m_publishMqtt);
    mqttForm->addRow(tr("Broker"), m_mqttHost);
    mqttForm->addRow(tr("Port"), m_mqttPort);
    mqttForm->addRow(tr("Topic"), m_mqttTopic);
    mqttForm->addRow(tr("User"), m_mqttUser);
    mqttForm->addRow(tr("Password"), m_mqttPassword);
    mqttForm->addRow(tr("Payload"), m_mqttPayload);
    mqttForm->addRow(QString(), m_mqttRetain);
    mqttForm->addRow(QString(), placeholderHint(this));

    auto *mqttBox = new QGroupBox(tr("MQTT"), this);
    mqttBox->setLayout(mqttForm);

    auto syncMqtt = [this](bool on) {
        m_mqttHost->setEnabled(on);
        m_mqttPort->setEnabled(on);
        m_mqttTopic->setEnabled(on);
        m_mqttUser->setEnabled(on);
        m_mqttPassword->setEnabled(on);
        m_mqttPayload->setEnabled(on);
        m_mqttRetain->setEnabled(on);
    };
    connect(m_publishMqtt, &QCheckBox::toggled, this, syncMqtt);

    auto *layout = new QVBoxLayout(this);
    layout->setContentsMargins(0, 0, 0, 0);
    layout->addWidget(commandBox);
    layout->addWidget(webhookBox);
    layout->addWidget(mqttBox);

    // Start from the defaults so nothing is left enabled-looking but empty.
    setActions(ActionConfig{});
}

void ActionEditor::setActions(const ActionConfig &actions)
{
    m_runCommand->setChecked(actions.runCommand);
    m_command->setText(actions.command);
    m_command->setEnabled(actions.runCommand);

    m_callWebhook->setChecked(actions.callWebhook);
    m_webhookUrl->setText(actions.webhookUrl);
    m_webhookMethod->setCurrentText(actions.webhookMethod);
    m_webhookBody->setPlainText(actions.webhookBody);
    m_webhookUrl->setEnabled(actions.callWebhook);
    m_webhookMethod->setEnabled(actions.callWebhook);
    m_webhookBody->setEnabled(actions.callWebhook);

    m_publishMqtt->setChecked(actions.publishMqtt);
    m_mqttHost->setText(actions.mqttHost);
    m_mqttPort->setValue(actions.mqttPort);
    m_mqttTopic->setText(actions.mqttTopic);
    m_mqttUser->setText(actions.mqttUser);
    m_mqttPassword->setText(actions.mqttPassword);
    m_mqttPayload->setText(actions.mqttPayload);
    m_mqttRetain->setChecked(actions.mqttRetain);
    for (QWidget *w : {static_cast<QWidget *>(m_mqttHost),
                       static_cast<QWidget *>(m_mqttPort),
                       static_cast<QWidget *>(m_mqttTopic),
                       static_cast<QWidget *>(m_mqttUser),
                       static_cast<QWidget *>(m_mqttPassword),
                       static_cast<QWidget *>(m_mqttPayload),
                       static_cast<QWidget *>(m_mqttRetain)})
        w->setEnabled(actions.publishMqtt);
}

ActionConfig ActionEditor::actions() const
{
    ActionConfig a;
    a.runCommand = m_runCommand->isChecked();
    a.command = m_command->text();

    a.callWebhook = m_callWebhook->isChecked();
    a.webhookUrl = m_webhookUrl->text();
    a.webhookMethod = m_webhookMethod->currentText();
    a.webhookBody = m_webhookBody->toPlainText();

    a.publishMqtt = m_publishMqtt->isChecked();
    a.mqttHost = m_mqttHost->text();
    a.mqttPort = m_mqttPort->value();
    a.mqttTopic = m_mqttTopic->text();
    a.mqttUser = m_mqttUser->text();
    a.mqttPassword = m_mqttPassword->text();
    a.mqttPayload = m_mqttPayload->text();
    a.mqttRetain = m_mqttRetain->isChecked();
    return a;
}

} // namespace leolink
