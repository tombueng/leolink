#include "BaichuanEvents.h"

#include "BaichuanApi.h"

namespace leolink {

BaichuanEvents::BaichuanEvents(const CameraConfig &camera, QObject *parent)
    : EventSource(parent), m_camera(camera)
{
}

BaichuanEvents::~BaichuanEvents()
{
    stop();
}

void BaichuanEvents::start()
{
    if (m_api)
        return;
    m_api = BaichuanApi::forCamera(m_camera, m_camera.secret());
    m_watch = m_api->watchAlarms(
        this,
        [this](int channel, bool active, const QString &what) {
            LEO_DEBUG(Baichuan, m_camera.label(),
                      QStringLiteral("Alarm on channel %1: %2")
                          .arg(channel)
                          .arg(what.isEmpty() ? QStringLiteral("none") : what));
            emit happened(channel, QStringLiteral("alarm"), active);
        },
        [this](const QString &why) {
            emit lost(tr("Lost the camera's alarms: %1").arg(why));
        });
}

void BaichuanEvents::stop()
{
    if (!m_api)
        return;
    m_api->unwatchAlarms(m_watch);
    m_api.reset();
}

} // namespace leolink
