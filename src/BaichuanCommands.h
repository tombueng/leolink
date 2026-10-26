// The HTTP API's commands, answered over Baichuan.
#pragma once

#include <QJsonObject>
#include <QString>

namespace leolink {

class BaichuanClient;

namespace baichuan {

/// Speaks the HTTP API's language to a camera that has no HTTP API.
///
/// An E1 Pro has no web server at all, and an E1 can have it switched off, but
/// both carry every setting the settings dialog edits over Baichuan on port
/// 9000 — as XML documents with their own names and layouts. This takes an
/// HTTP command and its JSON (`GetEnc`, `SetImage`, …), does whatever the
/// camera needs over Baichuan to answer it, and hands back exactly the entry
/// the HTTP API would have: `code`, `value`, and for a read the `range`
/// document as well. BaichuanApi runs it on the camera's session when the
/// settings route to Baichuan, so nothing above that layer can tell the
/// difference.
///
/// A write is read, change, write back. The camera's XML carries more than any
/// one HTTP section shows, and starting from what the camera sent is the only
/// way to leave the rest untouched. Commands with no Baichuan counterpart
/// answer -9, the HTTP API's own "this firmware does not know that command",
/// which the dialog already treats as "leave the section out".
///
/// Every mapping was written against the same camera answering both ways — an
/// E1 Zoom, which has HTTP as well — and checked field by field with
/// `--baichuan-api`, then tried on an E1 and an E1 Pro, which have only this.
/// The message numbers and some of the XML paths come from reolink_aio
/// (MIT, Copyright (c) 2023 starkillerOG; the notice is in LICENSE).
///
/// Blocking, on a logged-in client.
QJsonObject translate(BaichuanClient &client, int channel, const QString &command,
                      const QJsonObject &param, int action);

/// The HTTP API's code for "this firmware does not know that command".
constexpr int kUnsupported = -9;
/// Not one of the camera's codes: the connection went, and asking again on a
/// fresh one is worth a try.
constexpr int kConnectionLost = -1001;
/// Nor this: the camera answered a write with something other than 200.
constexpr int kRefused = -1002;

/// A failed entry, shaped as the HTTP API's.
QJsonObject errorEntry(const QString &command, int code, const QString &detail);

} // namespace baichuan
} // namespace leolink
