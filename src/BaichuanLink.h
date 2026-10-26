// The HTTP API's commands, carried over the camera's Baichuan session.
#pragma once

#include <memory>

#include "CommandLink.h"
#include "Config.h"

namespace leolink {

class BaichuanApi;

/// Sends the HTTP API's commands over Baichuan, where BaichuanApi answers
/// them from the camera's XML in the HTTP API's own shape.
///
/// No Login: the session underneath logs itself in, and is shared with
/// everything else that talks to the camera over Baichuan.
class BaichuanLink : public CommandLink {
public:
    /// `secret` is the camera's password, already resolved.
    BaichuanLink(const CameraConfig &camera, const QString &secret);
    ~BaichuanLink() override;

    void send(const QString &command, const QJsonObject &param, int action,
              QObject *context, Done done) override;
    bool needsLogin() const override { return false; }
    QString name() const override { return QStringLiteral("Baichuan"); }

    /// The session, for what is not a command: a firmware upload.
    BaichuanApi &session() { return *m_api; }

private:
    std::shared_ptr<BaichuanApi> m_api;
};

} // namespace leolink
