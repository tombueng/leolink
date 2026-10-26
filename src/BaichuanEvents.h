// Motion events over Baichuan (port 9000).
#pragma once

#include <memory>

#include "Config.h"
#include "EventSource.h"

namespace leolink {

class BaichuanApi;

/// The camera's alarms, heard on the Baichuan session BaichuanApi keeps for
/// the camera, for one with no ONVIF to report through — an E1 with its web
/// server and RTSP off. See BaichuanApi::watchAlarms().
///
/// Every alarm carries the whole state of its channel, so there is one thing
/// happening per channel, "alarm", rather than ONVIF's one per kind seen.
class BaichuanEvents : public EventSource {
    Q_OBJECT

public:
    explicit BaichuanEvents(const CameraConfig &camera, QObject *parent = nullptr);
    ~BaichuanEvents() override;

    void start() override;
    void stop() override;
    Log::Category category() const override { return Log::Category::Baichuan; }

private:
    CameraConfig m_camera;
    std::shared_ptr<BaichuanApi> m_api;
    int m_watch{0};
};

} // namespace leolink
