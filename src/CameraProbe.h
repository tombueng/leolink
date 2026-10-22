// Asks a camera, once, what it actually offers.
#pragma once

#include <QList>
#include <QString>

#include "Config.h"

namespace leolink {

/// Finds out which of a camera's services are really there.
///
/// leolink used to assume every camera had all of them, and retried whatever
/// was missing for as long as the window was open: an E1 Pro, which has no web
/// server, was asked to log in to its HTTP API every thirty seconds, an E1 with
/// RTSP and ONVIF switched off was offered an event subscription and a talk
/// session it could only refuse. Asking once costs a few hundred milliseconds
/// per camera at startup and spares it all of that.
///
/// Two sources, and neither is enough alone. Over Baichuan the camera states
/// which services it has switched on — but an E1 on 3.1.0.1643 says HTTPS is on
/// with nothing listening on 443. A port that accepts a connection is real, but
/// says nothing about RTMP, which HTTP-FLV needs and which lives behind the web
/// server. So a service counts when the camera says it is on, where it says
/// anything, *and* its port answers.
///
/// Blocking. Run it off the interface thread.
class CameraProbe {
public:
    /// `secret` is the camera's password, already resolved: the keyring and a
    /// password command both want the interface thread.
    static Capabilities run(const CameraConfig &camera, const QString &secret);

    /// What run() concludes from what it found: the ports that accepted a
    /// connection, whether a Baichuan login worked, and the camera's own list
    /// of its services (message 37), empty where there was none.
    static Capabilities interpret(const QList<quint16> &openPorts, bool baichuanLogin,
                                  const QString &portList);

    /// One line for the log: what was found, and how video will be fetched.
    static QString describe(const CameraConfig &camera);
};

} // namespace leolink
