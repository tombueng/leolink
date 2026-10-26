#include "BaichuanLink.h"

#include "BaichuanApi.h"
#include "BaichuanCommands.h"

namespace leolink {

BaichuanLink::BaichuanLink(const CameraConfig &camera, const QString &secret)
    : m_api(BaichuanApi::forCamera(camera, secret))
{
}

BaichuanLink::~BaichuanLink() = default;

void BaichuanLink::send(const QString &command, const QJsonObject &param, int action,
                        QObject *context, Done done)
{
    m_api->call(command, param, action, context, [done](const QJsonObject &entry) {
        LinkReply r;
        r.entry = entry;
        if (entry.value(QStringLiteral("code")).toInt(-1) == 0) {
            r.kind = LinkReply::Kind::Ok;
            done(r);
            return;
        }
        const QJsonObject err = entry.value(QStringLiteral("error")).toObject();
        r.rspCode = err.value(QStringLiteral("rspCode")).toInt();
        r.detail = err.value(QStringLiteral("detail")).toString();
        // -9 here is not the firmware saying it has no such command, as it is
        // over HTTP: it is this link having no translation for it. The
        // firmware may well have it, behind the web server this camera lacks.
        // A session that went is retried inside BaichuanApi already, so what
        // arrives here is final, and says why in `detail`.
        r.kind = r.rspCode == baichuan::kUnsupported || r.rspCode == -26
                     ? LinkReply::Kind::Missing
                     : LinkReply::Kind::Refused;
        done(r);
    });
}

} // namespace leolink
