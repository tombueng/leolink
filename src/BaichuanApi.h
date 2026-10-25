// The HTTP API's commands, answered over Baichuan for cameras without one.
#pragma once

#include <functional>
#include <memory>

#include <QJsonObject>
#include <QObject>
#include <QPointer>
#include <QString>

#include "Config.h"

class QThread;

namespace leolink {

class BaichuanClient;

/// Speaks the HTTP API's language to a camera that has no HTTP API.
///
/// An E1 Pro has no web server at all, and an E1 can have it switched off, but
/// both carry every setting the settings dialog edits over Baichuan on port
/// 9000 — as XML documents with their own names and layouts. This takes an
/// HTTP command and its JSON (`GetEnc`, `SetImage`, …), does whatever the
/// camera needs over Baichuan to answer it, and hands back exactly the entry
/// the HTTP API would have: `code`, `value`, and for a read the `range`
/// document as well. ReolinkClient routes through it when a camera offers
/// Baichuan and no web server, so nothing above that layer can tell the
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
/// One connection per camera, on a thread of its own, since the client
/// underneath blocks. Shared by every ReolinkClient pointed at the camera and
/// closed when the last of them lets go: the camera allows only a handful of
/// Baichuan sessions, and its own app needs one.
class BaichuanApi : public QObject {
    Q_OBJECT

public:
    using Reply = std::function<void(const QJsonObject &entry)>;

    /// The one for this camera, created on first use. `secret` is the
    /// password, already resolved on the interface thread.
    static std::shared_ptr<BaichuanApi> forCamera(const CameraConfig &camera,
                                                  const QString &secret);
    ~BaichuanApi() override;

    /// Answers one HTTP API command. `reply` runs on `context`'s thread, and
    /// not at all if `context` is gone by then.
    void call(const QString &command, const QJsonObject &param, int action,
              QObject *context, Reply reply);

    /// Sends a firmware package on this camera's session; see
    /// BaichuanClient::uploadFirmware. `progress` and `done` run on
    /// `context`'s thread; `done` gets an empty string once the camera has the
    /// whole file, or why it does not. The session is closed either way, since
    /// a camera that took the file is about to restart.
    using Progress = std::function<void(qint64 sent, qint64 total)>;
    using Done = std::function<void(const QString &error)>;
    void uploadFirmware(const QString &fileName, const QByteArray &pak,
                        QObject *context, Progress progress, Done done);

    /// The translation itself, blocking, on a logged-in client. Public for the
    /// `--baichuan-api` diagnostic, which compares it with the HTTP API's own
    /// answer on a camera that has both.
    static QJsonObject translate(BaichuanClient &client, int channel,
                                 const QString &command, const QJsonObject &param,
                                 int action);

private:
    BaichuanApi(const CameraConfig &camera, const QString &secret);

    struct Worker;
    QThread *m_thread{nullptr};
    Worker *m_worker{nullptr};
};

/// `--baichuan-api <host> <command> [json param]`: logs in, translates one
/// command and prints the entry as JSON.
int runBaichuanApiProbe(const QString &host, const QString &user,
                        const QString &password, const QString &command,
                        const QString &param);

/// `--baichuan-firmware <host> <file.pak> [--yes]`: checks the package against
/// the camera and, given `install`, sends it and waits for the camera to come
/// back reporting the new build. 0 when it has, or when the checks passed and
/// nothing was asked to be installed.
int runBaichuanFirmware(const QString &host, const QString &user,
                        const QString &password, const QString &pakPath,
                        bool install);

} // namespace leolink
