// Reading single values out of the XML cameras send, without a parser.
#pragma once

#include <QString>
#include <QStringList>

/// What every protocol here needs from a camera's XML: the text of an element
/// named this, wherever it is. Baichuan's documents, ONVIF's SOAP replies and
/// the login handshake are all small and regular, and a document parser would
/// buy nothing but strictness about details cameras get wrong.
///
/// An element matches by its local name: a namespace prefix (`tt:Address`) and
/// attributes (`<Topic Dialect="…">`) are allowed, a longer name is not —
/// `channelId` does not match `<channelIdList>`.
namespace leolink::xml {

/// Everything between the first such element's tags, as it is. Null when there
/// is none, empty when there is one with nothing in it.
QString inner(const QString &xml, const QString &name);

/// inner(), trimmed: what a value is wanted as.
QString text(const QString &xml, const QString &name);

/// inner() of every such element, in order. Elements nested in one another
/// with the same name are not supported, and no camera sends them.
QStringList all(const QString &xml, const QString &name);

} // namespace leolink::xml
