#include "SoundPlayer.h"

#include <QFileInfo>

#include <mpv/client.h>

namespace leolink {

SoundPlayer::SoundPlayer(QObject *parent) : QObject(parent)
{
    m_mpv = mpv_create();
    if (!m_mpv)
        return;

    mpv_set_option_string(m_mpv, "vo", "null");
    mpv_set_option_string(m_mpv, "video", "no");
    mpv_set_option_string(m_mpv, "audio-display", "no");
    mpv_set_option_string(m_mpv, "idle", "yes");
    mpv_set_option_string(m_mpv, "terminal", "no");
    mpv_set_option_string(m_mpv, "input-default-bindings", "no");
    // Alert sounds are short; a cache would only add latency.
    mpv_set_option_string(m_mpv, "cache", "no");

    if (mpv_initialize(m_mpv) < 0) {
        mpv_terminate_destroy(m_mpv);
        m_mpv = nullptr;
    }
}

SoundPlayer::~SoundPlayer()
{
    if (m_mpv)
        mpv_terminate_destroy(m_mpv);
}

void SoundPlayer::play(const QString &path, int volume)
{
    if (!m_mpv || path.isEmpty() || !QFileInfo::exists(path))
        return;

    double vol = qBound(0, volume, 100);
    mpv_set_property(m_mpv, "volume", MPV_FORMAT_DOUBLE, &vol);

    // "replace" rather than "append": several cameras triggering at once
    // should sound once, not queue up a chime for each.
    const QByteArray file = path.toUtf8();
    const char *cmd[] = {"loadfile", file.constData(), "replace", nullptr};
    mpv_command_async(m_mpv, 0, cmd);
}

} // namespace leolink
