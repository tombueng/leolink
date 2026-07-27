#include "SectionEditor.h"

#include <QCheckBox>
#include <QComboBox>
#include <QFormLayout>
#include <QJsonArray>
#include <QLabel>
#include <QLineEdit>
#include <QSpinBox>

namespace leolink {

SectionEditor::SectionEditor(const QString &title, QList<FieldSpec> fields,
                             QWidget *parent)
    : QGroupBox(title, parent), m_fields(std::move(fields))
{
    m_form = new QFormLayout(this);
    m_empty = new QLabel(tr("This camera does not offer these settings."), this);
    m_empty->setWordWrap(true);
    m_empty->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
    m_form->addRow(m_empty);
}

void SectionEditor::populate(const QJsonObject &value, const QJsonObject &range)
{
    m_original = value;

    // Rebuild from scratch: a second camera may support a different set.
    for (QWidget *control : std::as_const(m_controls))
        control->deleteLater();
    m_controls.clear();
    while (m_form->rowCount() > 0)
        m_form->removeRow(0);

    for (const FieldSpec &field : std::as_const(m_fields)) {
        if (!value.contains(field.key))
            continue;   // this model has no such setting

        const QJsonValue current = value.value(field.key);
        const QJsonValue allowed = range.value(field.key);
        QWidget *control = nullptr;

        if (allowed.isArray()) {
            // A list of permitted values: offer exactly those.
            auto *box = new QComboBox(this);
            for (const QJsonValue &option : allowed.toArray()) {
                const QString raw = option.isDouble()
                                        ? QString::number(option.toInt())
                                        : option.toString();
                box->addItem(field.choices.value(raw, raw), option.toVariant());
            }
            const QString want = current.isDouble()
                                     ? QString::number(current.toInt())
                                     : current.toString();
            for (int i = 0; i < box->count(); ++i) {
                if (box->itemData(i).toString() == want) {
                    box->setCurrentIndex(i);
                    break;
                }
            }
            connect(box, &QComboBox::currentIndexChanged,
                    this, &SectionEditor::edited);
            control = box;

        } else if (allowed.isObject() &&
                   allowed.toObject().contains(QStringLiteral("min"))) {
            const QJsonObject bounds = allowed.toObject();
            auto *box = new QSpinBox(this);
            box->setRange(bounds.value(QStringLiteral("min")).toInt(),
                          bounds.value(QStringLiteral("max")).toInt(0));
            box->setValue(current.toInt());
            connect(box, &QSpinBox::valueChanged, this, &SectionEditor::edited);
            control = box;

        } else if (allowed.toString() == QLatin1String("boolean") ||
                   (allowed.isUndefined() && current.isBool())) {
            auto *box = new QCheckBox(this);
            // Cameras report booleans as 0/1 as often as true/false.
            box->setChecked(current.isBool() ? current.toBool()
                                             : current.toInt() != 0);
            connect(box, &QCheckBox::toggled, this, &SectionEditor::edited);
            control = box;

        } else if (current.isDouble()) {
            // No range given; allow the number to be edited within reason.
            auto *box = new QSpinBox(this);
            box->setRange(0, 65535);
            box->setValue(current.toInt());
            connect(box, &QSpinBox::valueChanged, this, &SectionEditor::edited);
            control = box;

        } else if (current.isString()) {
            auto *edit = new QLineEdit(current.toString(), this);
            connect(edit, &QLineEdit::textChanged, this, &SectionEditor::edited);
            control = edit;
        }

        if (!control)
            continue;   // nested objects and arrays need their own screens

        if (!field.tooltip.isEmpty())
            control->setToolTip(field.tooltip);
        m_controls.insert(field.key, control);
        m_form->addRow(field.label, control);
    }

    if (m_controls.isEmpty()) {
        m_empty = new QLabel(tr("This camera does not offer these settings."), this);
        m_empty->setWordWrap(true);
        m_empty->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
        m_form->addRow(m_empty);
    }
}

QJsonObject SectionEditor::collect() const
{
    // Start from what the camera sent and change only what is on screen.
    QJsonObject result = m_original;

    for (auto it = m_controls.cbegin(); it != m_controls.cend(); ++it) {
        const QString &key = it.key();
        QWidget *control = it.value();

        if (auto *box = qobject_cast<QComboBox *>(control)) {
            const QVariant data = box->currentData();
            // Preserve the original type: a camera that sent a number wants a
            // number back, and quietly turning it into a string is rejected.
            if (m_original.value(key).isDouble())
                result[key] = data.toInt();
            else
                result[key] = data.toString();
        } else if (auto *box = qobject_cast<QSpinBox *>(control)) {
            result[key] = box->value();
        } else if (auto *box = qobject_cast<QCheckBox *>(control)) {
            if (m_original.value(key).isBool())
                result[key] = box->isChecked();
            else
                result[key] = box->isChecked() ? 1 : 0;
        } else if (auto *edit = qobject_cast<QLineEdit *>(control)) {
            result[key] = edit->text();
        }
    }
    return result;
}

} // namespace leolink
