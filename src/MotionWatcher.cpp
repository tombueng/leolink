#include "MotionWatcher.h"

#include <algorithm>

#include "BaichuanEvents.h"
#include "Log.h"
#include "OnvifEvents.h"
#include "Protocols.h"
#include "ReolinkClient.h"

namespace leolink {

MotionWatcher::MotionWatcher(QObject *parent) : QObject(parent) {}

MotionWatcher::~MotionWatcher()
{
    stop();
}

void MotionWatcher::watch(const QList<CameraConfig> &cameras)
{
    if (cameras.isEmpty())
        return;
    stop();

    // The first one supplies the address and the login. They are all on the
    // same device, so any of them would do.
    m_camera = cameras.first();
    m_cameras = cameras;
    m_activeById.clear();
    m_happening.clear();

    switch (route(Feature::CameraMotion, m_camera.caps)) {
    case Protocol::Onvif: {
        auto *onvif = new OnvifEvents(m_camera, this);
        if (m_net)
            onvif->setNetwork(m_net);
        m_source = onvif;
        break;
    }
    case Protocol::Baichuan:
        m_source = new BaichuanEvents(m_camera, this);
        break;
    default:
        return;
    }
    connect(m_source, &EventSource::happened, this, &MotionWatcher::heard);
    connect(m_source, &EventSource::lost, this, &MotionWatcher::lost);
    m_source->start();
}

void MotionWatcher::stop()
{
    if (!m_source)
        return;
    m_source->stop();
    m_source->disconnect(this);
    m_source->deleteLater();
    m_source = nullptr;
}

void MotionWatcher::heard(int channel, const QString &what, bool on)
{
    // Which camera this is about.
    //
    // A camera with nothing else on its address is never asked: it has only one
    // answer, and firmware that names no source at all would otherwise go
    // unheard — which is how this behaved before recorders existed, and there
    // is no reason to make it stricter.
    //
    // One channel of a recorder looks like exactly that case from here and is
    // not it. A recorder sends every channel's events down the one
    // subscription, so taking them all for the single camera configured on it
    // reports the neighbours' motion as that camera's: an alert, a recording
    // and a webhook, all about a doorway nobody is watching. Worse than
    // silence, so a recorder is always routed by channel.
    if (m_cameras.isEmpty() || !m_source)
        return;
    const bool recorder = m_cameras.size() > 1 ||
                          m_cameras.first().channel > 0 ||
                          ReolinkClient::isRecorder(m_camera.host);
    if (!recorder) {
        channel = m_cameras.first().channel;
    } else if (channel < 0) {
        Log::write(Log::Level::Debug, m_source->category(), m_camera.label(),
                   QStringLiteral("Event names no channel, ignored on a recorder "
                                  "watching %1 camera(s): %2")
                       .arg(m_cameras.size()).arg(what));
        return;
    }

    for (const CameraConfig &camera : std::as_const(m_cameras)) {
        if (camera.channel == channel)
            setHappening(camera, what, on);
    }
}

void MotionWatcher::lost(const QString &reason)
{
    // Motion that was on when the connection went cannot be heard ending, and
    // left on it would hold a recording open until the camera came back.
    for (const CameraConfig &camera : std::as_const(m_cameras)) {
        const QSet<QString> happening = m_happening.value(camera.id);
        for (const QString &what : happening)
            setHappening(camera, what, false);
    }
    emit error(m_camera.id, reason);
}

void MotionWatcher::setHappening(const CameraConfig &camera, const QString &what, bool on)
{
    QSet<QString> &happening = m_happening[camera.id];
    if (on)
        happening.insert(what);
    else
        happening.remove(what);
    const bool active = !happening.isEmpty();
    if (m_activeById.value(camera.id, false) != active) {
        m_activeById.insert(camera.id, active);
        Log::write(Log::Level::Info, m_source->category(), camera.label(),
                   active ? QStringLiteral("Camera reports motion")
                          : QStringLiteral("Camera reports motion ended"));
        emit motionChanged(camera.id, active);
    }

    // Kept for isActive(): any watched camera seeing something.
    m_active = std::any_of(m_activeById.cbegin(), m_activeById.cend(),
                           [](bool on) { return on; });
}

} // namespace leolink
