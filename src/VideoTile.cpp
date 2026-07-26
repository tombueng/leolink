#include "VideoTile.h"

#include <QFrame>
#include <QTimer>
#include <QGuiApplication>
#include <QHBoxLayout>
#include <QLabel>
#include <QMouseEvent>
#include <QSlider>
#include <QToolButton>
#include <QVBoxLayout>

#include <mpv/client.h>

#include "Spinner.h"

namespace leolink {

namespace {

/// Alert red, readable on light and dark alike. This one colour stays fixed on
/// purpose — an alert that changed shade with the theme would be harder to spot.
const QColor kAlertRed{0xc0, 0x39, 0x2b};

QString motionStyle()
{
    return QStringLiteral("QLabel { background:%1; color:white;"
                          " border-radius:3px; padding:1px 6px;"
                          " font-weight:bold; }")
        .arg(kAlertRed.name());
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
    outer->setContentsMargins(0, 0, 0, 0);
    outer->setSpacing(0);

    // The tile must claim its whole grid cell; without this the layout hands
    // it only its size hint and the rest of the cell stays empty.
    setSizePolicy(QSizePolicy::Expanding, QSizePolicy::Expanding);

    // ── video surface ───────────────────────────────────────────────────────
    m_surface = new QWidget(this);
    m_surface->setAttribute(Qt::WA_NativeWindow);   // mpv needs a real window
    m_surface->setAttribute(Qt::WA_DontCreateNativeAncestors);
    // Video sits on near-black in every theme: letterbox bars and dark scenes
    // read correctly against it, and a light backdrop would glare at night.
    m_surface->setStyleSheet(QStringLiteral("background:#101214;"));
    m_surface->setSizePolicy(QSizePolicy::Expanding, QSizePolicy::Expanding);
    outer->addWidget(m_surface, 1);

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
        if (!m_mpv)
            return;
        int64_t width = 0;
        if (mpv_get_property(m_mpv, "width", MPV_FORMAT_INT64, &width) >= 0 &&
            width > 0) {
            m_spinner->hide();
            m_firstFrameTimer->stop();
        }
    });

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

    m_status = new QLabel(tr("connecting…"), bar);
    m_status->setStyleSheet(mutedStyle(palette()));
    row->addWidget(m_status, 1);

    m_muteButton = new QToolButton(bar);
    m_muteButton->setCheckable(true);
    m_muteButton->setChecked(m_config.muted);
    m_muteButton->setText(m_config.muted ? QStringLiteral("🔇") : QStringLiteral("🔊"));
    m_muteButton->setToolTip(tr("Mute this camera"));
    m_muteButton->setAutoRaise(true);
    connect(m_muteButton, &QToolButton::clicked, this, &VideoTile::onMuteToggled);
    row->addWidget(m_muteButton);

    m_volumeSlider = new QSlider(Qt::Horizontal, bar);
    m_volumeSlider->setRange(0, 100);
    m_volumeSlider->setValue(m_config.volume);
    m_volumeSlider->setFixedWidth(90);
    m_volumeSlider->setToolTip(tr("Volume"));
    connect(m_volumeSlider, &QSlider::valueChanged, this, &VideoTile::onVolumeSlider);
    row->addWidget(m_volumeSlider);

    m_recordButton = new QToolButton(bar);
    m_recordButton->setCheckable(true);
    m_recordButton->setAutoRaise(true);
    m_recordButton->setText(QStringLiteral("⏺"));
    m_recordButton->setToolTip(tr("Record this camera"));
    connect(m_recordButton, &QToolButton::clicked, this, [this](bool on) {
        emit recordToggled(m_config.id, on);
    });
    row->addWidget(m_recordButton);

    auto *cog = new QToolButton(bar);
    cog->setText(QStringLiteral("⚙"));
    cog->setAutoRaise(true);
    cog->setToolTip(tr("Camera settings"));
    connect(cog, &QToolButton::clicked, this,
            [this] { emit settingsRequested(m_config.id); });
    row->addWidget(cog);

    outer->addWidget(bar, 0);
}

// ── player lifecycle ────────────────────────────────────────────────────────

void VideoTile::setMpvOption(const char *name, const QString &value)
{
    if (m_mpv)
        mpv_set_option_string(m_mpv, name, value.toUtf8().constData());
}

void VideoTile::createPlayer()
{
    if (m_mpv)
        return;

    m_mpv = mpv_create();
    if (!m_mpv) {
        setStatusText(tr("libmpv unavailable"));
        return;
    }

    // Render into this widget. winId() must be a native window handle; the
    // platform selection in main.cpp guarantees that.
    const auto wid = static_cast<int64_t>(m_surface->winId());
    mpv_set_option(m_mpv, "wid", MPV_FORMAT_INT64, const_cast<int64_t *>(&wid));

    // Surveillance wants "now" rather than "smooth", but not at any price.
    //
    // An earlier version also set `untimed=yes` and `cache=no`. That is fine
    // for a 640x360 sub stream and actively harmful for a 2560x1440 main
    // stream at 8 Mbit/s: with nowhere to absorb network jitter, packets are
    // lost, and with a two-second GOP the picture then stays broken — green
    // blocks — until the next keyframe. A small demuxer buffer costs a
    // fraction of a second of latency and removes the whole failure mode.
    // Deliberately NOT mpv's own "low-latency" profile, and not a
    // reconstruction of it either. Two things were measured against a real
    // 1440p camera:
    //
    //   * demuxer-lavf-probe-info=nostreams and
    //     demuxer-lavf-analyzeduration=0.1 cut stream probing so short that
    //     the recorder never learns the codec parameters — every recording
    //     came out as a zero-byte file.
    //   * video-latency-hacks and stream-buffer-size=4k skip synchronisation
    //     and starve the reader, which shows up as green blocks in the
    //     picture on some drivers.
    //
    // What is left keeps latency low through a short read-ahead alone, which
    // measured zero dropped frames and produced valid recordings.
    if (m_lowLatency) {
        setMpvOption("cache-pause", QStringLiteral("no"));
        setMpvOption("video-sync", QStringLiteral("audio"));
        setMpvOption("interpolation", QStringLiteral("no"));
    }
    setMpvOption("cache", QStringLiteral("yes"));
    setMpvOption("demuxer-max-bytes", QStringLiteral("16MiB"));
    setMpvOption("demuxer-readahead-secs", m_lowLatency ? QStringLiteral("0.3")
                                                        : QStringLiteral("1.0"));
    setMpvOption("rtsp-transport", QStringLiteral("tcp"));   // UDP loses frames
    setMpvOption("hwdec", m_hwdec.isEmpty() ? QStringLiteral("auto-safe")
                                            : m_hwdec);
    setMpvOption("vo", QStringLiteral("gpu"));

    // Pin mpv to the same windowing system Qt is using. Left to itself mpv
    // picks a Wayland context whenever WAYLAND_DISPLAY is set — even though we
    // handed it an X11 window id — and then renders into its own surface
    // instead of our tile, leaving the tile blank with no error anywhere.
    if (QGuiApplication::platformName() == QLatin1String("xcb"))
        setMpvOption("gpu-context", QStringLiteral("x11egl"));
    setMpvOption("keep-open", QStringLiteral("no"));
    setMpvOption("idle", QStringLiteral("yes"));
    setMpvOption("osc", QStringLiteral("no"));
    // Paint the surface in our own dark tone before any frame exists; some
    // drivers otherwise show an uninitialised buffer as a green flash.
    setMpvOption("background", QStringLiteral("#101214"));
    setMpvOption("input-default-bindings", QStringLiteral("no"));
    setMpvOption("input-vo-keyboard", QStringLiteral("no"));
    // A camera that drops off the network should reconnect by itself.
    setMpvOption("stream-lavf-o", QStringLiteral("reconnect=1,reconnect_streamed=1"));

    // libmpv is silent by default, which makes "black tile, no reason given"
    // impossible to diagnose. LEOLINK_MPV_DEBUG=1 turns its own log on so a
    // bug report can carry something useful.
    if (qEnvironmentVariableIsSet("LEOLINK_MPV_DEBUG")) {
        setMpvOption("terminal", QStringLiteral("yes"));
        setMpvOption("msg-level", QStringLiteral("all=v"));
    }

    if (mpv_initialize(m_mpv) < 0) {
        destroyPlayer();
        setStatusText(tr("player init failed"));
        return;
    }
    pushVolume();
}

void VideoTile::destroyPlayer()
{
    if (!m_mpv)
        return;
    mpv_terminate_destroy(m_mpv);
    m_mpv = nullptr;
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
    if (m_wantPlayback && !m_mpv)
        beginPlayback();
}

void VideoTile::beginPlayback()
{
    createPlayer();
    if (!m_mpv)
        return;

    const QByteArray url = m_config.streamUrl().toUtf8();
    const char *cmd[] = {"loadfile", url.constData(), nullptr};
    if (mpv_command(m_mpv, cmd) < 0) {
        setStatusText(tr("cannot open stream"));
        return;
    }
    setStatusText(m_config.stream == QLatin1String("main") ? tr("main stream")
                                                           : tr("sub stream"));
    m_spinner->setGeometry(m_surface->geometry());
    m_spinner->show();
    m_spinner->raise();
    m_firstFrameTimer->start();
}

void VideoTile::resizeEvent(QResizeEvent *event)
{
    QWidget::resizeEvent(event);
    if (m_spinner && m_spinner->isVisible())
        m_spinner->setGeometry(m_surface->geometry());
    if (m_flash && m_flash->isVisible())
        m_flash->setGeometry(m_surface->geometry());
}

void VideoTile::stop()
{
    if (!m_mpv)
        return;
    const char *cmd[] = {"stop", nullptr};
    mpv_command(m_mpv, cmd);
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
    const bool streamChanged = config.streamUrl() != m_config.streamUrl();
    m_config = config;

    m_title->setText(m_config.label());
    m_volumeSlider->setValue(m_config.volume);
    m_muteButton->setChecked(m_config.muted);
    m_muteButton->setText(m_config.muted ? QStringLiteral("🔇")
                                         : QStringLiteral("🔊"));
    if (streamChanged)
        restart();
    else
        pushVolume();
}

void VideoTile::pushVolume()
{
    if (!m_mpv)
        return;
    double vol = m_config.volume;
    mpv_set_property(m_mpv, "volume", MPV_FORMAT_DOUBLE, &vol);
    int flag = m_config.muted ? 1 : 0;
    mpv_set_property(m_mpv, "mute", MPV_FORMAT_FLAG, &flag);
}

void VideoTile::onVolumeSlider(int value)
{
    m_config.volume = value;
    // Nudging the slider up is an unambiguous "let me hear it".
    if (value > 0 && m_config.muted) {
        m_config.muted = false;
        m_muteButton->setChecked(false);
        m_muteButton->setText(QStringLiteral("🔊"));
    }
    pushVolume();
    emit volumeChanged(m_config.id, m_config.volume, m_config.muted);
}

void VideoTile::onMuteToggled()
{
    m_config.muted = m_muteButton->isChecked();
    m_muteButton->setText(m_config.muted ? QStringLiteral("🔇")
                                         : QStringLiteral("🔊"));
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

    if (!m_flash) {
        m_flash = new QWidget(this);
        m_flash->setAttribute(Qt::WA_TransparentForMouseEvents);
        // Translucent rather than opaque: the picture stays visible through
        // the alert, which is the point of flashing it in the first place.
        m_flash->setStyleSheet(
            QStringLiteral("background:rgba(%1,%2,%3,90);"
                           "border:3px solid %4;")
                .arg(kAlertRed.red()).arg(kAlertRed.green()).arg(kAlertRed.blue())
                .arg(kAlertRed.name()));
        m_flashTimer = new QTimer(this);
        m_flashTimer->setSingleShot(true);
        connect(m_flashTimer, &QTimer::timeout, this, [this] { m_flash->hide(); });
    }

    m_flash->setGeometry(m_surface->geometry());
    m_flash->show();
    m_flash->raise();
    m_flashTimer->start(milliseconds);   // restarts if motion continues
}

void VideoTile::setStatusText(const QString &text)
{
    if (m_status)
        m_status->setText(text);
}

bool VideoTile::saveScreenshot(const QString &path)
{
    if (!m_mpv)
        return false;
    const QByteArray target = path.toUtf8();
    const char *cmd[] = {"screenshot-to-file", target.constData(), "video", nullptr};
    return mpv_command(m_mpv, cmd) >= 0;
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
