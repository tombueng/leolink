#include "VideoTile.h"

#include "BaichuanStream.h"
#include "Log.h"

#include <QFrame>
#include <QTimer>
#include <QGuiApplication>
#include <QHBoxLayout>
#include <QLabel>
#include <QMouseEvent>
#include <QIcon>
#include <QPainter>
#include <QSlider>
#include <QToolButton>
#include <QVBoxLayout>

#include "MpvWidget.h"
#include "SignalIndicator.h"
#include "Spinner.h"

namespace leolink {

namespace {

/// Alert red, readable on light and dark alike. This one colour stays fixed on
/// purpose — an alert that changed shade with the theme would be harder to spot.
const QColor kAlertRed{0xc0, 0x39, 0x2b};

/// Width of the frame drawn around the picture during an alert.
constexpr int kAlertBorder = 6;

QString motionStyle()
{
    return QStringLiteral("QLabel { background:%1; color:white;"
                          " border-radius:3px; padding:1px 6px;"
                          " font-weight:bold; }")
        .arg(kAlertRed.name());
}

/// Builds one of the small buttons in the control strip.
///
/// Theme icons rather than text glyphs wherever the desktop provides them:
/// they follow the icon theme, scale properly, and look like the rest of the
/// system. The glyph stays as a fallback for bare setups with no icon theme.
///
/// The size is derived from the font rather than fixed, so the buttons grow
/// with the desktop's font scaling instead of staying at 16 pixels on a 4K
/// screen — which is what made them too small to hit.
QToolButton *stripButton(QWidget *parent, const QString &themeIcon,
                         const QString &glyph, const QString &tip)
{
    auto *button = new QToolButton(parent);
    button->setAutoRaise(true);
    button->setToolTip(tip);
    button->setFocusPolicy(Qt::NoFocus);

    const int side = qMax(22, parent->fontMetrics().height() + 8);
    button->setIconSize(QSize(side, side));
    button->setMinimumSize(side + 8, side + 6);

    const QIcon icon = QIcon::fromTheme(themeIcon);
    if (!icon.isNull()) {
        button->setIcon(icon);
    } else {
        button->setText(glyph);
        QFont font = button->font();
        font.setPointSizeF(font.pointSizeF() * 1.4);
        button->setFont(font);
    }
    return button;
}

/// Muted variant of the current text colour, so secondary labels recede in
/// whichever theme the desktop is using instead of being hardcoded grey.
QString mutedStyle(const QPalette &palette)
{
    QColor c = palette.color(QPalette::WindowText);
    c.setAlpha(150);
    return QStringLiteral("QLabel { background:transparent; color:rgba(%1,%2,%3,%4);"
                          " padding:1px 6px; }")
        .arg(c.red()).arg(c.green()).arg(c.blue()).arg(c.alpha());
}

} // namespace

VideoTile::VideoTile(const CameraConfig &config, QString hwdec, bool lowLatency,
                     QWidget *parent)
    : QWidget(parent), m_config(config), m_hwdec(std::move(hwdec)),
      m_lowLatency(lowLatency)
{
    buildUi();
}

VideoTile::~VideoTile()
{
    destroyPlayer();
}

void VideoTile::buildUi()
{
    setMinimumSize(240, 160);

    auto *outer = new QVBoxLayout(this);
    // A constant inset around the picture, normally invisible, painted red
    // while an alert is up. The frame therefore sits *outside* mpv's window
    // instead of over it.
    //
    // A translucent wash across the picture was tried first and does not work:
    // mpv renders into its own X window, so a Qt widget on top either covers
    // it completely or disappears behind it, depending on whether it has a
    // native window of its own. There is nothing in between without an ARGB
    // visual and a compositor to match.
    //
    // The inset is permanent rather than added when alerting, because changing
    // it would resize mpv's surface on every event — a visible hiccup in the
    // picture exactly when it matters.
    outer->setContentsMargins(kAlertBorder, kAlertBorder, kAlertBorder, 0);
    outer->setSpacing(0);

    // The tile must claim its whole grid cell; without this the layout hands
    // it only its size hint and the rest of the cell stays empty.
    setSizePolicy(QSizePolicy::Expanding, QSizePolicy::Expanding);

    // ── video surface ───────────────────────────────────────────────────────
    // A GL widget Qt owns, into which libmpv draws. Not a native window handed
    // to mpv: that arrangement broke every time Qt recreated the window.
    m_surface = new MpvWidget(this);
    m_surface->setSizePolicy(QSizePolicy::Expanding, QSizePolicy::Expanding);
    outer->addWidget(m_surface, 1);

    // mpv saying "this stream has ended" is far more reliable than waiting for
    // a timer to notice nothing arrived.
    connect(m_surface, &MpvWidget::endOfFile, this, [this](const QString &reason) {
        if (!m_wantPlayback || reason == QLatin1String("stop") ||
            reason == QLatin1String("quit"))
            return;
        LEO_WARN(Stream, m_config.label(),
                 QStringLiteral("Stream ended (%1) after %2 decoded frames, "
                                "reloading %3")
                     .arg(reason)
                     .arg(m_surface->decodedFrames())
                     .arg(playbackUrl()));
        setStatusText(tr("stream ended (%1) — reconnecting").arg(reason));
        QTimer::singleShot(1500, this, [this] {
            if (m_wantPlayback && m_surface)
                m_surface->play(playbackUrl());
        });
    });
    connect(m_surface, &MpvWidget::logMessage, this, [this](const QString &text) {
        // mpv's own warnings, verbatim. They name the codec, the decoder and
        // the frame that failed, which is most of a diagnosis on its own.
        LEO_WARN(Stream, m_config.label(), text);

        // One case is worth translating from mpv's language into advice,
        // because it is invisible, common, and fixable in ten seconds.
        //
        // Graphics drivers implement *Constrained* Baseline, Main and High. A
        // camera set to plain "Base" emits profile 0x42, which Mesa does not
        // offer, so the frames fail, mpv falls back to software and says
        // nothing further. Everything then works — while decoding 2560x1440 on
        // the processor. The picture is identical; only the fan knows.
        if (!m_warnedAboutProfile &&
            text.contains(QLatin1String("Hardware decoding of this stream is "
                                        "unsupported"))) {
            m_warnedAboutProfile = true;
            LEO_WARN(Stream, m_config.label(),
                     QStringLiteral(
                         "The graphics driver will not decode this stream, so "
                         "it is being decoded on the processor. The usual "
                         "cause is the camera's H.264 profile being set to "
                         "\"Base\": drivers implement Constrained Baseline, "
                         "Main and High, but not plain Baseline. Changing the "
                         "profile to High under camera settings usually "
                         "restores hardware decoding at identical quality."));
        }
        // Anything the decoder complains about counts towards stream health.
        if (text.contains(QLatin1String("decoding"), Qt::CaseInsensitive) ||
            text.contains(QLatin1String("corrupt"), Qt::CaseInsensitive) ||
            text.contains(QLatin1String("no frame"), Qt::CaseInsensitive) ||
            text.contains(QLatin1String("out of range"), Qt::CaseInsensitive))
            ++m_errorsThisWindow;
    });

    // Judged over ten seconds rather than instantly: a single damaged frame
    // after a reconnect is normal and not worth alarming anyone about. While
    // the camera is reconfiguring, nothing is counted at all.
    m_healthTimer = new QTimer(this);
    m_healthTimer->setInterval(10000);
    connect(m_healthTimer, &QTimer::timeout, this, [this] {
        const int errors = m_errorsThisWindow;
        m_errorsThisWindow = 0;
        if (!m_health)
            return;
        if (m_settling) {
            m_health->hide();
            return;
        }

        if (errors < 3) {
            m_health->hide();
            return;
        }
        m_health->setText(errors < 25 ? tr("WEAK SIGNAL") : tr("BAD STREAM"));
        m_health->setStyleSheet(
            QStringLiteral("QLabel { background:%1; color:white;"
                           " border-radius:3px; padding:1px 6px;"
                           " font-weight:bold; }")
                .arg(errors < 25 ? QStringLiteral("#d38f28") : kAlertRed.name()));
        m_health->setToolTip(
            tr("%n damaged frame(s) in the last ten seconds.\n\n"
               "Usually a weak Wi-Fi signal, or a bitrate set too low for the "
               "resolution. leolink repairs what it can — this is what it "
               "could not.", nullptr, errors));
        m_health->show();
    });
    m_healthTimer->start();

    // Sits on top of the surface until video actually arrives. Parented to the
    // tile, not the surface: a child of the native mpv window would be painted
    // over by mpv itself.
    m_spinner = new Spinner(this);
    m_spinner->setText(tr("connecting…"));
    m_spinner->raise();

    // libmpv gives no Qt signal for "first frame". Polling the video width a
    // few times a second is far simpler than wiring up its wakeup callback,
    // and the cost is negligible.
    m_firstFrameTimer = new QTimer(this);
    m_firstFrameTimer->setInterval(150);
    connect(m_firstFrameTimer, &QTimer::timeout, this, [this] {
        if (m_surface && m_surface->videoWidth() > 0) {
            m_spinner->hide();
            m_spinner->setText(tr("connecting…"));
            m_firstFrameTimer->stop();
        }
    });

    // The status line is worth more than the word "main stream": it shows what
    // the camera is actually delivering, which is how you notice a camera
    // quietly dropping to half the frame rate it promised.
    m_infoTimer = new QTimer(this);
    m_infoTimer->setInterval(2000);
    connect(m_infoTimer, &QTimer::timeout, this, &VideoTile::refreshStreamInfo);

    // A stream can stop without anything failing loudly: change the camera's
    // resolution and it restarts its encoder, the RTSP session ends, and mpv
    // simply has nothing more to draw. Nothing in the chain asks for it back,
    // so the picture stays dark for ever. This watches the frame counter and
    // reloads when it stops moving.
    m_watchdog = new QTimer(this);
    m_watchdog->setInterval(3000);
    connect(m_watchdog, &QTimer::timeout, this, &VideoTile::checkAlive);

    // ── control strip ───────────────────────────────────────────────────────
    // Everything below follows the desktop palette, so the strip fits a light
    // theme as naturally as a dark one.
    auto *bar = new QFrame(this);
    bar->setFrameShape(QFrame::NoFrame);
    bar->setAutoFillBackground(true);
    bar->setBackgroundRole(QPalette::Window);

    auto *row = new QHBoxLayout(bar);
    row->setContentsMargins(6, 3, 6, 3);
    row->setSpacing(6);

    m_title = new QLabel(m_config.label(), bar);
    m_title->setStyleSheet(QStringLiteral("QLabel { font-weight:600; }"));
    row->addWidget(m_title);

    m_motion = new QLabel(QString(), bar);
    m_motion->setStyleSheet(mutedStyle(palette()));
    row->addWidget(m_motion);

    m_health = new QLabel(QString(), bar);
    m_health->hide();
    row->addWidget(m_health);

    m_status = new QLabel(tr("connecting…"), bar);
    m_status->setStyleSheet(mutedStyle(palette()));
    // It must be allowed to shrink. Without this the label insists on its full
    // width, the layout gives it to it, and the text runs under the buttons —
    // "sub stre" with the rest behind the speaker icon. setStatusText() elides
    // the text to whatever width it actually ends up with.
    m_status->setMinimumWidth(0);
    m_status->setSizePolicy(QSizePolicy::Ignored, QSizePolicy::Preferred);
    row->addWidget(m_status, 1);

    m_signal = new SignalIndicator(bar);
    m_signal->hide();   // shown once a camera reports a strength
    row->addWidget(m_signal);

    m_muteButton = stripButton(bar, QStringLiteral("audio-volume-high"),
                               QStringLiteral("🔊"), tr("Mute this camera"));
    m_muteButton->setCheckable(true);
    m_muteButton->setChecked(m_config.muted);
    connect(m_muteButton, &QToolButton::clicked, this, &VideoTile::onMuteToggled);
    row->addWidget(m_muteButton);
    updateMuteButton();

    m_volumeSlider = new QSlider(Qt::Horizontal, bar);
    m_volumeSlider->setRange(0, 100);
    m_volumeSlider->setValue(m_config.volume);
    m_volumeSlider->setFixedWidth(90);
    m_volumeSlider->setToolTip(tr("Volume"));
    connect(m_volumeSlider, &QSlider::valueChanged, this, &VideoTile::onVolumeSlider);
    row->addWidget(m_volumeSlider);

    m_recordButton = stripButton(bar, QStringLiteral("media-record"),
                                 QStringLiteral("⏺"), tr("Record this camera"));
    m_recordButton->setCheckable(true);
    connect(m_recordButton, &QToolButton::clicked, this, [this](bool on) {
        emit recordToggled(m_config.id, on);
    });
    row->addWidget(m_recordButton);

    // Talking back. Hidden until a camera has shown it has a speaker: on the
    // majority of models it does nothing, and a button that never works is
    // worse than one that is not there.
    m_talkButton = stripButton(bar, QStringLiteral("audio-input-microphone"),
                               QStringLiteral("🗣"), tr("Speak through the camera"));
    m_talkButton->setCheckable(true);
    m_talkButton->hide();
    connect(m_talkButton, &QToolButton::clicked, this, [this](bool on) {
        emit talkToggled(m_config.id, on);
    });
    row->addWidget(m_talkButton);

    auto *cog = stripButton(bar, QStringLiteral("configure"),
                            QStringLiteral("⚙"), tr("Camera settings"));
    connect(cog, &QToolButton::clicked, this,
            [this] { emit settingsRequested(m_config.id); });
    row->addWidget(cog);

    outer->addWidget(bar, 0);
}

// ── player lifecycle ────────────────────────────────────────────────────────

void VideoTile::createPlayer()
{
    if (!m_surface)
        return;

    auto set = [this](const char *name, const QString &value) {
        m_surface->setOption(QString::fromLatin1(name), value);
    };

    // Surveillance wants "now" rather than "smooth", but not at any price. An
    // earlier version used mpv's own low-latency profile; two of its options
    // cut stream probing so short that recordings came out empty, and two more
    // skipped synchronisation. What is left keeps latency low through a short
    // read-ahead alone.
    if (m_lowLatency) {
        set("cache-pause", QStringLiteral("no"));
        set("video-sync", QStringLiteral("audio"));
        set("interpolation", QStringLiteral("no"));

        // Sound was left at mpv's defaults, which is a fifth of a second of
        // output buffer on top of everything else — and since video-sync is
        // "audio", the picture waits for it. Halving it takes that off both.
        //
        // Not lower: below about 60 ms an output that is even briefly late
        // produces clicks, and a camera microphone is not worth that.
        set("audio-buffer", QStringLiteral("0.1"));
        // Nothing to resample towards a display clock: the audio is the clock.
        set("audio-stream-silence", QStringLiteral("no"));
    }
    set("cache", QStringLiteral("yes"));
    set("demuxer-max-bytes", QStringLiteral("16MiB"));
    set("demuxer-readahead-secs",
        m_lowLatency ? QStringLiteral("0.3") : QStringLiteral("1.0"));
    set("rtsp-transport", QStringLiteral("tcp"));   // UDP loses packets

    // ── surviving a damaged stream ──────────────────────────────────────────
    // Cameras on marginal Wi-Fi, or squeezed into too low a bitrate, emit
    // H.264 with broken slice headers and missing packets. Left alone the
    // decoder gives up on those frames and the picture fills with green
    // blocks or freezes.
    //
    // enable_er lets the decoder carry on through damaged frames, and ec
    // conceals what is missing by borrowing from neighbours instead of
    // showing raw garbage. Measured against a genuinely broken stream from
    // this camera: 74 visible decode errors in 35 seconds without them,
    // 2 with. That is the difference between unusable and watchable.
    set("vd-lavc-o", QStringLiteral("enable_er=1,ec=favor_inter+deblock"));
    // If hardware decoding keeps failing, fall back to software rather than
    // showing nothing — slower is better than blank.
    //
    // Not 3, which was the first value here and far too eager. An RTSP stream
    // is joined mid-picture: the first packets are predicted frames whose
    // reference has already gone past, and a hardware decoder errors on every
    // one of them. Three was reached before the first key frame arrived, so
    // hardware decoding was abandoned on every single start and the whole
    // stream ran in software — quietly, since the fallback is the decoder
    // working as designed. Twenty is past the opening burst and still well
    // short of what a genuinely broken driver produces.
    set("hwdec-software-fallback", QStringLiteral("20"));
    // Never drop frames to catch up: on a camera every frame may be the one
    // that matters, and there is no "later" to catch up to.
    set("framedrop", QStringLiteral("no"));

    // Named explicitly rather than left to mpv. Measured on this hardware:
    // mpv chose vulkan-copy while rendering through OpenGL, and the picture
    // came out solid green. Keeping decode and rendering on one API fixes it.
    set("hwdec", m_hwdec.isEmpty() ? QStringLiteral("vaapi,nvdec,no") : m_hwdec);

    if (m_config.transport == QLatin1String("baichuan")) {
        // Raw H.264 with no container: nothing in the byte stream says what it
        // is, so the demuxer has to be told. Without this mpv probes, guesses
        // and usually gives up.
        set("demuxer", QStringLiteral("lavf"));
        set("demuxer-lavf-format", QStringLiteral("h264"));
        // The elementary stream carries no timestamps either, and mpv says so
        // in as many words: without this it invents them, warns that seeking
        // and buffering will be wrong, and plays at whatever rate it guessed.
        // Telling it not to try, and giving it the rate the camera announced,
        // is mpv's own documented answer to exactly this case.
        set("correct-pts", QStringLiteral("no"));
        set("container-fps-override",
            QString::number(m_baichuanFps > 0 ? m_baichuanFps : 15));
    }

    set("keep-open", QStringLiteral("no"));
    set("idle", QStringLiteral("yes"));
    set("osc", QStringLiteral("no"));
    // mpv loads its bundled Lua scripts by default, including the one that
    // hands unknown URLs to youtube-dl. A camera viewer has no use for any of
    // them, and one fewer thing between the network and the decoder is worth
    // having.
    set("load-scripts", QStringLiteral("no"));
    set("input-default-bindings", QStringLiteral("no"));
    set("input-vo-keyboard", QStringLiteral("no"));
    // A camera that drops off the network should come back by itself.
    set("stream-lavf-o", QStringLiteral("reconnect=1,reconnect_streamed=1"));

    if (qEnvironmentVariableIsSet("LEOLINK_MPV_DEBUG")) {
        set("terminal", QStringLiteral("yes"));
        set("msg-level", QStringLiteral("all=v"));
    }

    pushVolume();
}

void VideoTile::destroyPlayer()
{
    if (m_surface)
        m_surface->stop();
}

void VideoTile::start()
{
    if (m_config.host.isEmpty()) {
        setStatusText(tr("no host configured"));
        return;
    }
    m_wantPlayback = true;
    // Deferred until the widget is on screen — see showEvent().
    if (isVisible())
        beginPlayback();
}

void VideoTile::showEvent(QShowEvent *event)
{
    QWidget::showEvent(event);
    // The GL widget can only build its render context once it is on screen;
    // MpvWidget holds the URL until then, so calling this repeatedly is safe.
    if (m_wantPlayback)
        beginPlayback();
}

QString VideoTile::playbackUrl() const
{
    // Baichuan is spoken by leolink itself and re-served on a loopback port,
    // so the address only exists once that connection is up.
    if (m_config.transport == QLatin1String("baichuan"))
        return m_baichuanUrl;
    return m_config.streamUrl();
}

void VideoTile::startBaichuan()
{
    stopBaichuan();
    m_baichuanUrl.clear();

    m_baichuan = new BaichuanStream(this);
    connect(m_baichuan, &BaichuanStream::formatKnown, this,
            [this](int, int, int fps) {
                // Kept for the next player start: mpv reads the rate when the
                // stream opens, and by then the camera has usually not said
                // what it is yet.
                if (fps > 0)
                    m_baichuanFps = fps;
            });
    connect(m_baichuan, &BaichuanStream::ready, this, [this](const QString &url) {
        m_baichuanUrl = url;
        if (m_wantPlayback && m_surface)
            m_surface->play(url);
    });
    connect(m_baichuan, &BaichuanStream::failed, this, [this](const QString &why) {
        setStatusText(why);
        // Retried on the usual watchdog schedule rather than immediately: a
        // camera that refused once will refuse again a second later, and a
        // tight loop would hold its session pool open for nothing.
        if (m_wantPlayback)
            QTimer::singleShot(5000, this, [this] {
                if (m_wantPlayback)
                    startBaichuan();
            });
    });
    m_baichuan->start(m_config);
}

void VideoTile::stopBaichuan()
{
    if (!m_baichuan)
        return;
    m_baichuan->shutdown();
    m_baichuan->deleteLater();
    m_baichuan = nullptr;
}

void VideoTile::beginPlayback()
{
    createPlayer();

    if (m_config.transport == QLatin1String("baichuan")) {
        setStatusText(tr("connecting over Baichuan…"));
        m_spinner->setGeometry(m_surface->geometry());
        m_spinner->show();
        m_spinner->raise();
        m_firstFrameTimer->start();
        m_infoTimer->start();
        m_lastFrameCount = 0;
        m_stalledChecks = 0;
        m_watchdog->start();
        startBaichuan();
        return;
    }
    // The URL is the single most useful line in the log: it says which
    // transport, which stream and which channel were asked for, and a
    // surprising number of reports come down to the wrong one of the three.
    LEO_INFO(Stream, m_config.label(),
             QStringLiteral("Opening %1 (transport=%2, stream=%3, decoder=%4, "
                            "low latency=%5)")
                 .arg(playbackUrl(), m_config.transport, m_config.stream,
                      m_hwdec.isEmpty() ? QStringLiteral("vaapi,nvdec,no") : m_hwdec,
                      m_lowLatency ? QStringLiteral("yes") : QStringLiteral("no")));
    m_surface->play(playbackUrl());
    setStatusText(m_config.transport == QLatin1String("custom")
                      ? tr("custom stream")
                      : (m_config.stream == QLatin1String("main")
                             ? tr("main stream")
                             : tr("sub stream")));
    m_infoTimer->start();
    m_lastFrameCount = 0;
    m_stalledChecks = 0;
    m_watchdog->start();
    m_spinner->setGeometry(m_surface->geometry());
    m_spinner->show();
    m_spinner->raise();
    m_firstFrameTimer->start();
}

void VideoTile::resizeEvent(QResizeEvent *event)
{
    QWidget::resizeEvent(event);
    updateStatusLabel();
    if (m_spinner && m_spinner->isVisible())
        m_spinner->setGeometry(m_surface->geometry());
}

void VideoTile::stop()
{
    m_wantPlayback = false;
    stopBaichuan();
    if (m_watchdog)
        m_watchdog->stop();
    if (m_infoTimer)
        m_infoTimer->stop();
    if (m_surface)
        m_surface->stop();
}

void VideoTile::restart()
{
    stop();
    destroyPlayer();
    start();
}

// ── configuration ───────────────────────────────────────────────────────────

void VideoTile::applyConfig(const CameraConfig &config)
{
    // Compared as configuration, not as URL: the Baichuan transport has no URL
    // until its connection is up, and comparing empty against empty would make
    // a switch between stream types look like no change at all.
    const bool streamChanged = config.streamUrl() != m_config.streamUrl() ||
                               config.transport != m_config.transport ||
                               config.stream != m_config.stream;
    m_config = config;

    m_title->setText(m_config.label());
    m_volumeSlider->setValue(m_config.volume);
    m_muteButton->setChecked(m_config.muted);
    updateMuteButton();
    if (streamChanged)
        restart();
    else
        pushVolume();
}

void VideoTile::pushVolume()
{
    if (!m_surface)
        return;
    m_surface->setPropertyDouble(QStringLiteral("volume"), m_config.volume);
    m_surface->setPropertyFlag(QStringLiteral("mute"), m_config.muted);
}

void VideoTile::onVolumeSlider(int value)
{
    m_config.volume = value;
    // Nudging the slider up is an unambiguous "let me hear it".
    if (value > 0 && m_config.muted) {
        m_config.muted = false;
        m_muteButton->setChecked(false);
        updateMuteButton();
    }
    pushVolume();
    emit volumeChanged(m_config.id, m_config.volume, m_config.muted);
}

void VideoTile::updateMuteButton()
{
    if (!m_muteButton)
        return;
    const QString name = m_config.muted ? QStringLiteral("audio-volume-muted")
                                        : QStringLiteral("audio-volume-high");
    const QIcon icon = QIcon::fromTheme(name);
    if (!icon.isNull())
        m_muteButton->setIcon(icon);
    else
        m_muteButton->setText(m_config.muted ? QStringLiteral("🔇")
                                             : QStringLiteral("🔊"));
    m_muteButton->setToolTip(m_config.muted ? tr("Unmute this camera")
                                            : tr("Mute this camera"));
}

void VideoTile::onMuteToggled()
{
    m_config.muted = m_muteButton->isChecked();
    updateMuteButton();
    pushVolume();
    emit volumeChanged(m_config.id, m_config.volume, m_config.muted);
}

// ── presentation ────────────────────────────────────────────────────────────

void VideoTile::setMotionActive(bool active)
{
    if (!m_motion)
        return;
    m_motion->setText(active ? tr("MOTION") : QString());
    m_motion->setStyleSheet(active ? motionStyle() : mutedStyle(palette()));
}

void VideoTile::flashAlert(int milliseconds)
{
    if (milliseconds <= 0)
        return;

    if (!m_flashTimer) {
        m_flashTimer = new QTimer(this);
        m_flashTimer->setSingleShot(true);
        connect(m_flashTimer, &QTimer::timeout, this, [this] {
            m_alerting = false;
            update();
        });
    }

    m_alerting = true;
    update();
    m_flashTimer->start(milliseconds);   // restarts while activity continues
}

void VideoTile::paintEvent(QPaintEvent *event)
{
    QWidget::paintEvent(event);
    if (!m_alerting)
        return;

    // Only the inset is painted; the picture itself is never touched.
    QPainter painter(this);
    painter.setPen(Qt::NoPen);
    painter.setBrush(kAlertRed);
    const QRect inner = m_surface->geometry();
    painter.drawRect(QRect(0, 0, width(), inner.top()));                    // top
    painter.drawRect(QRect(0, inner.bottom() + 1, width(),
                           height() - inner.bottom() - 1));                 // bottom
    painter.drawRect(QRect(0, 0, inner.left(), height()));                  // left
    painter.drawRect(QRect(inner.right() + 1, 0,
                           width() - inner.right() - 1, height()));         // right
}

void VideoTile::setWifiSignal(int strength)
{
    if (m_signal)
        m_signal->setStrength(strength);
}

void VideoTile::setLinkType(const QString &activeLink)
{
    if (!m_signal)
        return;

    // Reolink spells the wired case several ways depending on model and
    // firmware, so anything that is not clearly wireless counts as wired.
    SignalIndicator::Link link = SignalIndicator::Link::Wired;
    const QString value = activeLink.toLower();
    if (value.contains(QLatin1String("wifi")) ||
        value.contains(QLatin1String("wlan")))
        link = SignalIndicator::Link::WiFi;
    else if (value.contains(QLatin1String("3g")) ||
             value.contains(QLatin1String("4g")) ||
             value.contains(QLatin1String("5g")) ||
             value.contains(QLatin1String("lte")) ||
             value.contains(QLatin1String("cellular")))
        link = SignalIndicator::Link::Cellular;

    m_signal->setLink(link);
    m_signal->setVisible(link != SignalIndicator::Link::Wired);
}

void VideoTile::setStatusText(const QString &text)
{
    m_statusText = text;
    updateStatusLabel();
}

void VideoTile::updateStatusLabel()
{
    if (!m_status)
        return;
    // Elided to whatever room is left, so a narrow tile shows "main stream ·
    // 2560x1440 · …" rather than running the text under the buttons and
    // cutting it off mid-letter.
    const int room = m_status->width();
    const QString elided =
        m_status->fontMetrics().elidedText(m_statusText, Qt::ElideRight, room);
    // A single letter followed by an ellipsis reads as a fault rather than as
    // shortening. Below that, nothing at all is tidier — the whole text is in
    // the tooltip either way.
    m_status->setText(elided.size() >= 8 ? elided : QString());
    m_status->setToolTip(m_statusText);
}

void VideoTile::expectDisruption(int seconds)
{
    if (!m_settleTimer) {
        m_settleTimer = new QTimer(this);
        m_settleTimer->setInterval(1000);
        connect(m_settleTimer, &QTimer::timeout, this, [this] {
            if (!m_surface || !m_wantPlayback) {
                m_settleTimer->stop();
                m_settling = false;
                return;
            }

            // Back as soon as frames actually flow again. A camera usually
            // rebuilds its encoder in three or four seconds; waiting out a
            // fixed twenty for the rare slow case just makes every change look
            // like a failure.
            if (m_surface->decodedFrames() > m_settleBaseline) {
                m_settleTimer->stop();
                m_settling = false;
                m_stalledChecks = 0;
                m_errorsThisWindow = 0;
                return;
            }

            setStatusText(tr("camera is reconfiguring… %1 s")
                              .arg(m_settleSecondsLeft));

            // Ask again every few seconds rather than once at the end: the
            // stream comes back when the camera is ready, not on our schedule.
            if (m_settleSecondsLeft % 4 == 0)
                m_surface->play(playbackUrl());

            if (--m_settleSecondsLeft <= 0) {
                m_settleTimer->stop();
                m_settling = false;
                m_stalledChecks = 0;   // let the watchdog take over again
            }
        });
    }

    m_settling = true;
    m_errorsThisWindow = 0;
    m_settleSecondsLeft = qMax(4, seconds);
    m_settleBaseline = m_surface ? m_surface->decodedFrames() : 0;
    setStatusText(tr("camera is reconfiguring… %1 s").arg(m_settleSecondsLeft));
    m_spinner->setGeometry(m_surface->geometry());
    m_spinner->setText(tr("camera is reconfiguring…"));
    m_spinner->show();
    m_spinner->raise();
    m_settleTimer->start();
}

void VideoTile::checkAlive()
{
    if (!m_surface || !m_wantPlayback)
        return;

    // Changing resolution, frame rate or profile makes the camera tear its
    // encoder down and build a new one. For a good twenty seconds it emits
    // half-formed frames or nothing at all. Reconnecting into that only
    // restarts the same mess — and reconnecting repeatedly, as this used to,
    // could keep a camera unusable long after it had actually recovered.
    if (m_settling)
        return;

    // Decoded frames, not painted ones. Qt repaints on resize and exposure
    // even when nothing new has arrived, so counting paints reported a frozen
    // stream as healthy — which is exactly how a dead picture went unnoticed.
    const quint64 frames = m_surface->decodedFrames();
    if (frames != m_lastFrameCount) {
        m_lastFrameCount = frames;
        m_stalledChecks = 0;
        m_reconnectAttempts = 0;
        return;
    }

    // Five quiet checks — fifteen seconds. A camera switching between day and
    // night mode, or re-keying its encoder, can go quiet for several seconds
    // without anything being wrong, and reconnecting through that makes the
    // picture worse rather than better.
    if (++m_stalledChecks < 5)
        return;
    m_stalledChecks = 0;

    ++m_reconnectAttempts;
    // Logged at warning level with everything needed to tell the two causes
    // apart: a camera that stopped sending, and a decoder that stopped
    // accepting what it sends.
    const MpvWidget::StreamInfo info = m_surface->streamInfo();
    LEO_WARN(Stream, m_config.label(),
             QStringLiteral("No new frames for 15 s — reconnect attempt %1. "
                            "Last state: %2x%3 %4 %5 fps, %6 kbit/s, core-idle=%7")
                 .arg(m_reconnectAttempts)
                 .arg(info.width).arg(info.height)
                 .arg(info.codec.isEmpty() ? QStringLiteral("?") : info.codec)
                 .arg(info.fps, 0, 'f', 1)
                 .arg(info.bitrateKbps, 0, 'f', 0)
                 .arg(m_surface->isIdle() ? QStringLiteral("yes")
                                          : QStringLiteral("no")));
    setStatusText(tr("stream lost — reconnecting (%1)").arg(m_reconnectAttempts));
    m_spinner->setGeometry(m_surface->geometry());
    m_spinner->show();
    m_spinner->raise();
    m_firstFrameTimer->start();

    // A plain loadfile is enough; the render context stays valid, which is the
    // whole point of not handing mpv a window of its own.
    m_surface->play(playbackUrl());
}

void VideoTile::refreshStreamInfo()
{
    if (!m_surface)
        return;
    const MpvWidget::StreamInfo info = m_surface->streamInfo();
    if (info.width <= 0)
        return;   // nothing playing yet; leave the "connecting" text alone

    // The stream name stays first: it is the one thing that says *which*
    // stream this is, and the numbers underneath mean little without it. A
    // camera reached by a URL of one's own has no main or sub stream to speak
    // of, and calling it one is simply wrong.
    QStringList parts;
    if (m_config.transport == QLatin1String("custom"))
        parts << tr("custom stream");
    else
        parts << (m_config.stream == QLatin1String("main") ? tr("main stream")
                                                           : tr("sub stream"));
    parts << QStringLiteral("%1×%2").arg(info.width).arg(info.height);
    if (info.fps > 0.0)
        parts << tr("%1 fps").arg(info.fps, 0, 'f', info.fps < 10 ? 1 : 0);
    if (info.bitrateKbps > 0.0) {
        parts << (info.bitrateKbps >= 1000
                      ? tr("%1 Mbit/s").arg(info.bitrateKbps / 1000.0, 0, 'f', 1)
                      : tr("%1 kbit/s").arg(info.bitrateKbps, 0, 'f', 0));
    }
    if (!info.codec.isEmpty())
        parts << info.codec.toUpper();

    setStatusText(parts.join(QStringLiteral(" · ")));
}

QImage VideoTile::grabRendered()
{
    return m_surface ? m_surface->grabRendered() : QImage();
}

quint64 VideoTile::renderedFrames() const
{
    return m_surface ? m_surface->renderedFrames() : 0;
}

bool VideoTile::saveScreenshot(const QString &path)
{
    return m_surface && m_surface->command(
        {QStringLiteral("screenshot-to-file"), path, QStringLiteral("video")});
}

void VideoTile::setTalkAvailable(bool available)
{
    if (m_talkButton)
        m_talkButton->setVisible(available);
}

void VideoTile::setTalking(bool talking)
{
    if (!m_talkButton)
        return;
    const QSignalBlocker block(m_talkButton);
    m_talkButton->setChecked(talking);
    m_talkButton->setToolTip(talking ? tr("Stop speaking")
                                     : tr("Speak through the camera"));
}

void VideoTile::setRecording(bool recording)
{
    m_recording = recording;
    m_title->setText(recording ? QStringLiteral("\u25cf %1").arg(m_config.label())
                               : m_config.label());
    m_title->setStyleSheet(
        recording
            ? QStringLiteral("QLabel { color:%1; font-weight:600; }").arg(kAlertRed.name())
            : QStringLiteral("QLabel { font-weight:600; }"));

    if (m_recordButton) {
        QSignalBlocker block(m_recordButton);   // do not re-emit into MainWindow
        m_recordButton->setChecked(recording);
        const QIcon icon = QIcon::fromTheme(recording
                                                ? QStringLiteral("media-playback-stop")
                                                : QStringLiteral("media-record"));
        if (!icon.isNull())
            m_recordButton->setIcon(icon);
        m_recordButton->setToolTip(recording ? tr("Stop recording")
                                             : tr("Record this camera"));
    }
}

void VideoTile::mousePressEvent(QMouseEvent *event)
{
    // Only the strip below the video: dragging on the picture itself would
    // fight with the double-click that toggles full screen.
    if (event->button() == Qt::LeftButton &&
        event->position().y() > m_surface->geometry().bottom()) {
        emit moveWindowRequested();
        event->accept();
        return;
    }
    QWidget::mousePressEvent(event);
}

void VideoTile::mouseDoubleClickEvent(QMouseEvent *event)
{
    emit fullscreenRequested(m_config.id);
    event->accept();
}

} // namespace leolink
