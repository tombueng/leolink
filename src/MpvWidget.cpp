#include "MpvWidget.h"

#include <QGuiApplication>
#include <QOpenGLContext>
#include <QOpenGLFunctions>
#include <QtGlobal>

#include <mpv/client.h>
#include <mpv/render_gl.h>

#include "Log.h"

// Pulls in Xlib on an X11 build, which is why it comes after everything else:
// Xlib defines macros with names like None and Status that break Qt headers
// included afterwards.
#if __has_include(<QtGui/qguiapplication_platform.h>)
#  include <QtGui/qguiapplication_platform.h>
#  define LEOLINK_HAVE_NATIVE_DISPLAY 1
#endif

namespace leolink {

namespace {

/// mpv asks for OpenGL entry points through this; Qt already knows them for
/// whichever context it created, so there is no need to guess at GLX or EGL.
void *getProcAddress(void *, const char *name)
{
    QOpenGLContext *context = QOpenGLContext::currentContext();
    if (!context)
        return nullptr;
    return reinterpret_cast<void *>(context->getProcAddress(name));
}

} // namespace

MpvWidget::MpvWidget(QWidget *parent) : QOpenGLWidget(parent)
{
    // Queued: the signal is emitted from mpv's render thread, and everything
    // touching OpenGL has to happen on the GUI thread.
    connect(this, &MpvWidget::frameReady, this,
            QOverload<>::of(&MpvWidget::update), Qt::QueuedConnection);
    // Same reasoning for events: mpv signals from its own thread, the queue is
    // drained on the GUI thread.
    connect(this, &MpvWidget::eventsPending, this, &MpvWidget::drainEvents,
            Qt::QueuedConnection);
}

MpvWidget::~MpvWidget()
{
    destroyRender();
    if (m_mpv) {
        mpv_terminate_destroy(m_mpv);
        m_mpv = nullptr;
    }
}

void MpvWidget::ensureCreated()
{
    if (m_mpv)
        return;
    m_mpv = mpv_create();
    if (!m_mpv)
        return;
    // The render API is selected by asking for the "libmpv" video output. This
    // must be set before mpv_initialize, and mpv then draws nowhere until a
    // render context exists.
    mpv_set_option_string(m_mpv, "vo", "libmpv");

    // Without this nothing mpv has to say ever reaches us, which is why a
    // stream could die silently and the only symptom was a still picture.
    //
    // The level follows the application's own: at "warn" a decoder quietly
    // falling back to software says nothing at all, and that is precisely the
    // kind of thing a bug report needs. "v" is far too noisy for everyday use,
    // which is why it is not the default.
    mpv_request_log_messages(m_mpv, Log::debugEnabled() ? "v" : "warn");
    mpv_set_wakeup_callback(
        m_mpv,
        [](void *self) { emit static_cast<MpvWidget *>(self)->eventsPending(); },
        this);
}

void MpvWidget::drainEvents()
{
    if (!m_mpv)
        return;

    // Drain fully. libmpv queues events and expects them to be collected; left
    // alone the queue overflows and events are dropped, including the one that
    // says playback has stopped.
    while (true) {
        mpv_event *event = mpv_wait_event(m_mpv, 0);
        if (!event || event->event_id == MPV_EVENT_NONE)
            break;

        switch (event->event_id) {
        case MPV_EVENT_LOG_MESSAGE: {
            auto *message = static_cast<mpv_event_log_message *>(event->data);
            emit logMessage(QStringLiteral("[%1] %2")
                                .arg(QString::fromUtf8(message->prefix),
                                     QString::fromUtf8(message->text).trimmed()));
            break;
        }
        case MPV_EVENT_END_FILE: {
            auto *end = static_cast<mpv_event_end_file *>(event->data);
            QString reason;
            switch (end->reason) {
            case MPV_END_FILE_REASON_EOF:   reason = QStringLiteral("eof"); break;
            case MPV_END_FILE_REASON_ERROR: reason = QStringLiteral("error"); break;
            case MPV_END_FILE_REASON_QUIT:  reason = QStringLiteral("quit"); break;
            case MPV_END_FILE_REASON_STOP:  reason = QStringLiteral("stop"); break;
            default:                        reason = QStringLiteral("redirect"); break;
            }
            if (end->reason == MPV_END_FILE_REASON_ERROR && end->error != 0) {
                reason += QStringLiteral(": ") +
                          QString::fromUtf8(mpv_error_string(end->error));
            }
            emit endOfFile(reason);
            break;
        }
        case MPV_EVENT_PROPERTY_CHANGE: {
            auto *property = static_cast<mpv_event_property *>(event->data);
            if (qstrcmp(property->name, "playback-time") == 0 &&
                property->format == MPV_FORMAT_DOUBLE) {
                const double now = *static_cast<double *>(property->data);
                // Only forward motion counts. A reconnect resets the clock to
                // zero, and that must not read as "still alive".
                if (now > m_lastPlaybackTime)
                    ++m_decodedFrames;
                m_lastPlaybackTime = now;
            } else if (qstrcmp(property->name, "core-idle") == 0 &&
                       property->format == MPV_FORMAT_FLAG) {
                m_coreIdle = *static_cast<int *>(property->data) != 0;
            } else if (qstrcmp(property->name, "hwdec-current") == 0 &&
                       property->format == MPV_FORMAT_STRING) {
                const QString decoder =
                    QString::fromUtf8(*static_cast<char **>(property->data));
                if (!decoder.isEmpty() && decoder != m_activeDecoder) {
                    m_activeDecoder = decoder;
                    Log::setFact(QStringLiteral("Decoder in use"), decoder);
                    LEO_INFO(Stream, QString(),
                             QStringLiteral("Decoder in use: %1").arg(decoder));
                }
            }
            break;
        }
        default:
            break;
        }
    }
}

void MpvWidget::setOption(const QString &name, const QString &value)
{
    ensureCreated();
    if (m_mpv)
        mpv_set_option_string(m_mpv, name.toUtf8().constData(),
                              value.toUtf8().constData());
}

void MpvWidget::setProperty(const QString &name, const QString &value)
{
    if (m_mpv)
        mpv_set_property_string(m_mpv, name.toUtf8().constData(),
                                value.toUtf8().constData());
}

void MpvWidget::setPropertyDouble(const QString &name, double value)
{
    if (m_mpv)
        mpv_set_property(m_mpv, name.toUtf8().constData(), MPV_FORMAT_DOUBLE,
                         &value);
}

void MpvWidget::setPropertyFlag(const QString &name, bool value)
{
    if (m_mpv) {
        int flag = value ? 1 : 0;
        mpv_set_property(m_mpv, name.toUtf8().constData(), MPV_FORMAT_FLAG,
                         &flag);
    }
}

void MpvWidget::initializeGL()
{
    ensureCreated();
    if (!m_mpv || m_render)
        return;

    if (mpv_initialize(m_mpv) < 0)
        return;

    mpv_opengl_init_params glInit{getProcAddress, nullptr};
    // Advanced control is deliberately OFF. With it on, mpv hands frame timing
    // to the application and expects mpv_render_context_report_swap() after
    // every buffer swap; without those reports it simply waits. That is what
    // produced a picture updating roughly once every few seconds — measured at
    // one rendered frame in three, which matches the symptom exactly.
    //
    // With it off, mpv drives its own timing and only asks to be redrawn, which
    // is all this widget wants to do.
    int advancedControl = 0;

    // The display connection, handed over so hardware decoding can work.
    //
    // Without it mpv loads the VA-API driver, finds the EGL interop, then
    // reports "Could not create a VA display" and falls back to software. It
    // has nowhere to get a display from: with the render API the application
    // owns the window system connection, and mpv only sees the GL context.
    //
    // The symptom is a picture that works perfectly and quietly costs a core
    // and a half — on a 2560x1440 stream here it was enough to produce
    // audio/video desynchronisation warnings. Nothing said why until the log
    // started carrying mpv's own messages.
    void *nativeDisplay = nullptr;
#ifdef LEOLINK_HAVE_NATIVE_DISPLAY
    if (auto *x11 = qGuiApp->nativeInterface<QNativeInterface::QX11Application>())
        nativeDisplay = x11->display();
#endif

    QVarLengthArray<mpv_render_param, 6> params{
        {MPV_RENDER_PARAM_API_TYPE, const_cast<char *>(MPV_RENDER_API_TYPE_OPENGL)},
        {MPV_RENDER_PARAM_OPENGL_INIT_PARAMS, &glInit},
        {MPV_RENDER_PARAM_ADVANCED_CONTROL, &advancedControl},
    };
    if (nativeDisplay)
        params.append({MPV_RENDER_PARAM_X11_DISPLAY, nativeDisplay});
    params.append({MPV_RENDER_PARAM_INVALID, nullptr});

    if (mpv_render_context_create(&m_render, m_mpv, params.data()) < 0) {
        m_render = nullptr;
        return;
    }

    mpv_render_context_set_update_callback(
        m_render,
        [](void *self) {
            // On mpv's thread. Emitting is all that is safe here.
            emit static_cast<MpvWidget *>(self)->frameReady();
        },
        this);

    // playback-time is the honest liveness signal: it advances for as long as
    // frames keep arriving and stops the moment they do not.
    //
    // The first attempt watched estimated-frame-count and video-bitrate.
    // Neither moves on a live RTSP stream — one is meaningless without a known
    // duration, the other was measured emitting no changes at all in twenty
    // seconds. The counter therefore never advanced, the stall detector
    // concluded the stream was dead every nine seconds, and reconnected. That
    // was the regular "stream lost" nobody could explain.
    mpv_observe_property(m_mpv, 0, "playback-time", MPV_FORMAT_DOUBLE);
    mpv_observe_property(m_mpv, 0, "core-idle", MPV_FORMAT_FLAG);
    // Which decoder mpv settled on, as opposed to which was asked for. The
    // difference between the two was the entire cause of the green picture:
    // "vaapi" was requested, "vulkan-copy" was used, and nothing said so.
    mpv_observe_property(m_mpv, 0, "hwdec-current", MPV_FORMAT_STRING);

    reportEnvironment();

    if (!m_pendingUrl.isEmpty()) {
        const QString url = m_pendingUrl;
        m_pendingUrl.clear();
        play(url);
    }
}

void MpvWidget::reportEnvironment()
{
    // Recorded once, and only what cannot be worked out from outside the
    // process. Which GL driver is in play decides whether hardware decoding is
    // even possible, and it is the first thing worth knowing when a picture is
    // green, upside down, or absent.
    static bool reported = false;
    if (reported)
        return;
    reported = true;

    if (QOpenGLContext *context = QOpenGLContext::currentContext()) {
        QOpenGLFunctions *gl = context->functions();
        auto text = [gl](GLenum name) {
            const GLubyte *value = gl->glGetString(name);
            return value ? QString::fromUtf8(reinterpret_cast<const char *>(value))
                         : QStringLiteral("unknown");
        };
        Log::setFact(QStringLiteral("OpenGL"),
                     QStringLiteral("%1 — %2 (%3)")
                         .arg(text(GL_RENDERER), text(GL_VERSION), text(GL_VENDOR)));
    }

    if (char *version = mpv_get_property_string(m_mpv, "mpv-version")) {
        Log::setFact(QStringLiteral("mpv"), QString::fromUtf8(version));
        mpv_free(version);
    }
    if (char *ffmpeg = mpv_get_property_string(m_mpv, "ffmpeg-version")) {
        Log::setFact(QStringLiteral("FFmpeg in mpv"), QString::fromUtf8(ffmpeg));
        mpv_free(ffmpeg);
    }
}

void MpvWidget::paintGL()
{
    if (!m_render)
        return;

    // Qt's framebuffer has its origin at the bottom left as far as mpv is
    // concerned, hence flip_y — without it the picture arrives upside down.
    const qreal ratio = devicePixelRatioF();
    mpv_opengl_fbo fbo{static_cast<int>(defaultFramebufferObject()),
                       int(width() * ratio), int(height() * ratio), 0};
    int flipY = 1;
    mpv_render_param params[]{
        {MPV_RENDER_PARAM_OPENGL_FBO, &fbo},
        {MPV_RENDER_PARAM_FLIP_Y, &flipY},
        {MPV_RENDER_PARAM_INVALID, nullptr},
    };
    mpv_render_context_render(m_render, params);
    ++m_frames;
}

QImage MpvWidget::grabRendered()
{
    if (!m_render)
        return {};
    return grabFramebuffer();
}

void MpvWidget::destroyRender()
{
    if (!m_render)
        return;
    // The context must be current: freeing the render context releases OpenGL
    // objects, and doing that without a context is undefined.
    makeCurrent();
    mpv_render_context_free(m_render);
    m_render = nullptr;
    doneCurrent();
}

void MpvWidget::play(const QString &url)
{
    if (!m_render) {
        // Asked before the widget was ever shown; remember it for initializeGL.
        m_pendingUrl = url;
        return;
    }
    command({QStringLiteral("loadfile"), url});
}

void MpvWidget::stop()
{
    m_pendingUrl.clear();
    command({QStringLiteral("stop")});
}

int MpvWidget::videoWidth() const
{
    if (!m_mpv)
        return 0;
    int64_t value = 0;
    if (mpv_get_property(m_mpv, "width", MPV_FORMAT_INT64, &value) < 0)
        return 0;
    return int(value);
}

MpvWidget::StreamInfo MpvWidget::streamInfo() const
{
    StreamInfo info;
    if (!m_mpv)
        return info;

    auto number = [this](const char *name) -> double {
        double value = 0.0;
        if (mpv_get_property(m_mpv, name, MPV_FORMAT_DOUBLE, &value) < 0)
            return 0.0;
        return value;
    };
    auto integer = [this](const char *name) -> int {
        int64_t value = 0;
        if (mpv_get_property(m_mpv, name, MPV_FORMAT_INT64, &value) < 0)
            return 0;
        return int(value);
    };

    info.width = integer("width");
    info.height = integer("height");

    // estimated-vf-fps is what is really arriving; container-fps is what the
    // stream claims, and cameras routinely claim more than they deliver.
    info.fps = number("estimated-vf-fps");
    if (info.fps <= 0.0)
        info.fps = number("container-fps");

    info.bitrateKbps = number("video-bitrate") / 1000.0;

    if (char *codec = mpv_get_property_string(m_mpv, "video-format")) {
        info.codec = QString::fromUtf8(codec);
        mpv_free(codec);
    }
    return info;
}

bool MpvWidget::command(const QStringList &args)
{
    if (!m_mpv)
        return false;

    QList<QByteArray> owned;
    owned.reserve(args.size());
    for (const QString &arg : args)
        owned.append(arg.toUtf8());

    QVarLengthArray<const char *, 8> argv;
    for (const QByteArray &arg : owned)
        argv.append(arg.constData());
    argv.append(nullptr);

    return mpv_command(m_mpv, argv.data()) >= 0;
}

} // namespace leolink
