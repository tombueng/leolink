// The ways the HTTP API's commands reach a camera.
#pragma once

#include <functional>

#include <QJsonObject>
#include <QString>

class QObject;

namespace leolink {

/// How one command went, in terms every link can report.
///
/// A link only sends and sorts the answer. What to do about it — wait, retry,
/// log in again, what to tell the user — is ReolinkClient's, the same for
/// every link, so a camera reached over Baichuan is retried and throttled
/// exactly as one with a web server.
struct LinkReply {
    enum class Kind {
        Ok,           ///< `entry` is the camera's answer
        Refused,      ///< the camera said no: `rspCode`, `detail`
        Missing,      ///< this link has no way to carry the command at all
        Expired,      ///< the session it was sent on is gone; log in and retry
        Busy,         ///< "not now" (HTTP 502/503): back off and retry
        Garbled,      ///< an answer nobody can read: `detail` holds its start
        Unreachable,  ///< no answer: `detail` says why
    };
    Kind kind{Kind::Unreachable};
    QJsonObject entry;
    int rspCode{0};
    QString detail;
    /// The HTTP status, where there was one.
    int status{0};
};

/// One way of sending the HTTP API's commands: the camera's own web server,
/// or Baichuan answering in the HTTP API's terms. Which one a command takes
/// is the routing table's decision (Protocols.h), not the caller's.
class CommandLink {
public:
    using Done = std::function<void(const LinkReply &reply)>;

    virtual ~CommandLink() = default;

    /// Sends one command. `done` runs on `context`'s thread, and not at all if
    /// `context` is gone by then.
    virtual void send(const QString &command, const QJsonObject &param, int action,
                      QObject *context, Done done) = 0;

    /// Whether commands need a session opened by a Login command first.
    virtual bool needsLogin() const = 0;

    /// For the log: how this link reaches the camera.
    virtual QString name() const = 0;
};

} // namespace leolink
