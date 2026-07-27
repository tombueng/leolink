// Builds a settings form from what the camera says it accepts.
#pragma once

#include <QGroupBox>
#include <QJsonObject>
#include <QList>
#include <QMap>
#include <QString>

class QWidget;
class QFormLayout;
class QLabel;

namespace leolink {

/// One field the camera exposes.
struct FieldSpec {
    QString key;       ///< key inside the section object, e.g. "dayNight"
    QString label;
    QString tooltip;
    /// Optional nicer names for enumerated values, keyed by the camera's own
    /// string: {"Auto", "Automatic"}. Anything unmapped is shown verbatim.
    QMap<QString, QString> choices;
};

/// A group of controls generated from a camera section.
///
/// Every Get* command answers `action=1` with both the current value and a
/// `range` document describing what may be set: an array of allowed values, a
/// {min,max} pair, or the string "boolean". That is enough to decide the right
/// control for each field, which is why this builds forms rather than each
/// screen hardcoding combo boxes.
///
/// It matters beyond saving code. Reolink models differ wildly in what they
/// support, and a hardcoded form either offers settings a camera cannot do or
/// hides ones it can. Generated forms show exactly what the device in front of
/// you accepts — and a field the camera does not report simply does not appear.
class SectionEditor : public QGroupBox {
    Q_OBJECT

public:
    SectionEditor(const QString &title, QList<FieldSpec> fields,
                  QWidget *parent = nullptr);

    /// Fills the form. `value` and `range` come from one action=1 reply.
    void populate(const QJsonObject &value, const QJsonObject &range);

    /// The edited section, built from the original so untouched keys survive.
    /// Set* replaces the whole structure, so anything dropped here would be
    /// silently reset on the camera.
    QJsonObject collect() const;

    bool hasAnything() const { return !m_controls.isEmpty(); }

signals:
    void edited();

private:
    QList<FieldSpec> m_fields;
    QJsonObject m_original;
    /// key → the control that edits it
    QMap<QString, QWidget *> m_controls;
    QFormLayout *m_form;
    QLabel *m_empty;
};

} // namespace leolink
