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

/// A camera's Baichuan session, shared by everything that talks to the camera
/// over it: the settings, answered in the HTTP API's own terms by
/// baichuan::translate() (BaichuanCommands.h), the camera's alarms, PTZ, and a
/// firmware upload.
///
/// One connection per camera, on a thread of its own, since the client
/// underneath blocks. Shared by every ReolinkClient pointed at the camera and
/// closed when the last of them lets go: the camera allows only a handful of
/// Baichuan sessions, and its own app needs one. An E1 with two taken refused
/// three more at once.
///
/// The same session carries the camera's alarms, for a camera with no ONVIF
/// to report motion through; see watchAlarms(). So a camera reached only over
/// Baichuan costs two sessions in all — this one, and the video.
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

    /// Hears the camera's alarms on this session, for as long as `context`
    /// lives or until unwatchAlarms(). Both handlers run on `context`'s
    /// thread: `onAlarm` for every event, starting with the state the camera
    /// reports on subscribing; `onLost` when the session went and is being
    /// made again.
    ///
    /// Subscribing is message 31, on the push channel (251 in the header's
    /// byte 12). The camera answers with message 33 at once and again on every
    /// change, and nothing more needs sending but message 93 now and then to
    /// keep the session — which keeps it open for settings too, where an
    /// E1 Pro would otherwise hang up within a minute of quiet. The
    /// subscription, the event layout and the keep-alive follow reolink_aio
    /// (MIT, Copyright (c) 2023 starkillerOG; the notice is in LICENSE), and
    /// were checked against an E1 on 3.1.0.4450.
    using AlarmHandler = std::function<void(int channel, bool active, const QString &what)>;
    using LostHandler = std::function<void(const QString &why)>;
    int watchAlarms(QObject *context, AlarmHandler onAlarm, LostHandler onLost);
    void unwatchAlarms(int id);

    /// What one `<AlarmEvent>` of message 33 says. Each names its channel, a
    /// `<status>` that holds "MD" while there is motion, and an `<AItype>`
    /// listing what the camera recognised ("people", "vehicle", "dog_cat") or
    /// "none". Either counts as the channel seeing something, as ONVIF reports
    /// both; a doorbell press ("visitor") does not.
    struct Alarm {
        int channel{-1};
        bool active{false};
        /// "MD", "people" … as the camera named them; for the log.
        QString what;
    };
    static QList<Alarm> parseAlarms(const QString &document);

private:
    BaichuanApi(const CameraConfig &camera, const QString &secret);

    struct Worker;
    QThread *m_thread{nullptr};
    Worker *m_worker{nullptr};
};

} // namespace leolink
