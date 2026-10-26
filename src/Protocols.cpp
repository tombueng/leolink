#include "Protocols.h"

#include <QHash>

namespace leolink {

const QList<Route> &routes()
{
    using P = Protocol;
    static const QList<Route> table{
        // Ordered by what each costs this machine, cheapest first. HTTP-FLV is
        // one HTTP connection whose container the player reads as it comes.
        // RTSP adds a session to negotiate and a stream to reassemble from RTP
        // packets. Baichuan is all of that done by leolink itself — login,
        // decryption, the camera's own container taken apart and wrapped again
        // as MPEG-TS — plus a loopback hop before the player sees a byte.
        {Feature::Video, {P::HttpFlv, P::Rtsp, P::Baichuan}, P::Rtsp, true},
        // Over Baichuan only where there is no web server: BaichuanApi answers
        // most of the HTTP API's commands, not all of them.
        {Feature::Settings, {P::HttpApi, P::Baichuan}},
        {Feature::CameraMotion, {P::Onvif, P::Baichuan}},
        {Feature::Ptz, {P::HttpApi, P::Baichuan}},
        // The ONVIF audio backchannel, which is asked for and carried over RTSP.
        {Feature::Talk, {P::Rtsp}},
        {Feature::WifiSignal, {P::HttpApi}},
        {Feature::Snapshot, {P::HttpApi}},
        {Feature::CardRecordings, {P::HttpApi}},
        {Feature::FirmwareDownload, {P::HttpApi}},
        {Feature::FirmwareFile, {P::Baichuan}},
    };
    return table;
}

bool offers(const Capabilities &caps, Protocol protocol)
{
    if (!caps.known)
        return protocol != Protocol::None;
    switch (protocol) {
    case Protocol::None: return false;
    case Protocol::HttpApi: return caps.http || caps.https;
    case Protocol::HttpFlv: return (caps.http || caps.https) && caps.rtmp;
    case Protocol::Rtsp: return caps.rtsp;
    case Protocol::Onvif: return caps.onvif;
    case Protocol::Baichuan: return caps.baichuan;
    }
    return false;
}

Protocol route(Feature feature, const Capabilities &caps)
{
    for (const Route &r : routes()) {
        if (r.feature != feature)
            continue;
        // Not asked yet: what leolink did before it asked. For every feature
        // but video that is the first in the list, which is the protocol
        // leolink always used for it.
        if (!caps.known)
            return r.fallback != Protocol::None ? r.fallback : r.order.value(0);
        for (Protocol p : r.order) {
            if (!offers(caps, p))
                continue;
            if (r.skipsFailed && caps.failed.contains(transportName(p)))
                continue;
            return p;
        }
        return r.fallback;
    }
    return Protocol::None;
}

Feature featureOf(const QString &command)
{
    static const QHash<QString, Feature> commands{
        {QStringLiteral("PtzCtrl"), Feature::Ptz},
        {QStringLiteral("GetPtzPreset"), Feature::Ptz},
        {QStringLiteral("GetAbility"), Feature::Ptz},
        {QStringLiteral("Search"), Feature::CardRecordings},
        {QStringLiteral("CheckFirmware"), Feature::FirmwareDownload},
        {QStringLiteral("UpgradeOnline"), Feature::FirmwareDownload},
    };
    return commands.value(command, Feature::Settings);
}

QString transportName(Protocol protocol)
{
    switch (protocol) {
    case Protocol::HttpFlv: return QStringLiteral("flv");
    case Protocol::Rtsp: return QStringLiteral("rtsp");
    case Protocol::Baichuan: return QStringLiteral("baichuan");
    default: return {};
    }
}

} // namespace leolink
