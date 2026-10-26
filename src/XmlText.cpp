#include "XmlText.h"

#include <QRegularExpression>

namespace leolink::xml {

namespace {

QRegularExpression elementRe(const QString &name)
{
    const QString n = QRegularExpression::escape(name);
    return QRegularExpression(
        QStringLiteral("<(?:[\\w.-]+:)?%1(?:\\s[^>]*)?>(.*?)</(?:[\\w.-]+:)?%1\\s*>").arg(n),
        QRegularExpression::DotMatchesEverythingOption);
}

} // namespace

QString inner(const QString &xml, const QString &name)
{
    const QRegularExpressionMatch m = elementRe(name).match(xml);
    return m.hasMatch() ? m.captured(1) : QString();
}

QString text(const QString &xml, const QString &name)
{
    return inner(xml, name).trimmed();
}

QStringList all(const QString &xml, const QString &name)
{
    QStringList found;
    auto it = elementRe(name).globalMatch(xml);
    while (it.hasNext())
        found << it.next().captured(1);
    return found;
}

} // namespace leolink::xml
