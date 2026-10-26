// One protocol's report of what a camera sees.
#pragma once

#include <QObject>
#include <QString>

#include "Log.h"

namespace leolink {

/// A device's own motion events, from whichever protocol carries them.
///
/// Each source speaks its protocol and reports what it heard in the same
/// terms; MotionWatcher decides which camera an event is about and whether
/// that camera is seeing motion. Which source a camera gets is the routing
/// table's decision (Feature::CameraMotion in Protocols.h).
class EventSource : public QObject {
    Q_OBJECT

public:
    using QObject::QObject;

    virtual void start() = 0;
    virtual void stop() = 0;

    /// For the log: where these events came from.
    virtual Log::Category category() const = 0;

signals:
    /// Something the camera reports started or ended. `channel` is the input
    /// it names, or -1 when it names none. `what` tells apart the things a
    /// camera reports separately — plain motion, a person, a vehicle — so one
    /// ending does not end the others.
    void happened(int channel, const QString &what, bool on);
    /// The connection went, so nothing it said is happening can be heard to
    /// end. The source comes back by itself; `reason` is for the user.
    void lost(const QString &reason);
};

} // namespace leolink
