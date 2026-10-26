// Which protocol each feature uses, in one table.
#pragma once

#include <QList>
#include <QString>

#include "Config.h"

namespace leolink {

/// The ways leolink can talk to a camera.
enum class Protocol {
    None,       ///< the feature is not available on this camera
    HttpApi,    ///< /cgi-bin/api.cgi on port 80 or 443
    HttpFlv,    ///< the web server's /flv path, served from RTMP inside
    Rtsp,       ///< port 554
    Onvif,      ///< port 8000
    Baichuan,   ///< Reolink's own protocol, port 9000
};

/// What leolink does with a camera that more than one protocol could carry,
/// or that only some cameras can have.
enum class Feature {
    Video,             ///< live video, and recording and local analysis of it
    Settings,          ///< the camera settings dialog, its About page included
    CameraMotion,      ///< the camera's own motion events
    Ptz,               ///< turning and zooming the camera
    Talk,              ///< sending sound to the camera's speaker
    WifiSignal,        ///< the Wi-Fi meter on the tile
    Snapshot,          ///< a still, for drawing the detection area on
    CardRecordings,    ///< recordings on the SD card
    FirmwareDownload,  ///< the camera fetching its own update from Reolink
    FirmwareFile,      ///< a .pak sent from this computer
};

/// One feature: the protocols that can carry it, best first.
///
/// This is the whole of how leolink decides what to talk to a camera with.
/// A feature takes the first protocol in its list that the camera offers, so
/// a camera without a web server gets its settings over Baichuan, and one
/// without ONVIF its motion events. Nothing else in leolink looks at which
/// ports a camera has. The README's table of what each feature needs says the
/// same thing, and a test holds the two together.
struct Route {
    Feature feature;
    QList<Protocol> order;
    /// What a camera not asked yet, or offering none of `order`, gets.
    /// RTSP for video, which is what leolink always used and the one most
    /// likely to come back by itself; nothing for everything else.
    Protocol fallback{Protocol::None};
    /// Whether a protocol that has failed this session is passed over. Only
    /// video records failures: a picture that never came is the one failure
    /// leolink can tell apart from a camera that is merely off.
    bool skipsFailed{false};
};

const QList<Route> &routes();

/// Whether the camera was found to offer it. A camera not asked yet offers
/// everything, which is how leolink behaved before it asked anything.
bool offers(const Capabilities &caps, Protocol protocol);

/// The protocol `feature` uses on a camera with these capabilities.
Protocol route(Feature feature, const Capabilities &caps);

/// The feature an HTTP API command belongs to, which decides the protocol it
/// goes over: `PtzCtrl` is Feature::Ptz, `Search` Feature::CardRecordings.
/// Anything not listed is a setting, which is most of them.
Feature featureOf(const QString &command);

/// The name a transport is stored under, and recorded as failed under:
/// "flv", "rtsp", "baichuan". Empty for a protocol that carries no video.
QString transportName(Protocol protocol);

} // namespace leolink
