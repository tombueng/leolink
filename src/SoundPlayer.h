// Plays short alert sounds.
#pragma once

#include <QObject>
#include <QString>

struct mpv_handle;

namespace leolink {

/// Plays a notification sound through a dedicated, video-less libmpv instance.
///
/// libmpv is already a dependency for the video, so using it here as well
/// avoids pulling in Qt Multimedia — one fewer library in every package and one
/// fewer thing to justify to a software centre. It also means any format the
/// system can decode will play, including the desktop's own .oga theme sounds.
///
/// One instance is kept alive rather than created per event: setting up an mpv
/// context takes long enough that an alert would lag behind the flash.
class SoundPlayer : public QObject {
    Q_OBJECT

public:
    explicit SoundPlayer(QObject *parent = nullptr);
    ~SoundPlayer() override;

    /// Starts playback and returns immediately. A sound already playing is
    /// replaced, so a burst of events cannot pile up into a drone.
    void play(const QString &path, int volume = 70);

private:
    mpv_handle *m_mpv{nullptr};
};

} // namespace leolink
