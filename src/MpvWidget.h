// Video surface: libmpv rendering into an OpenGL context Qt owns.
#pragma once

#include <QImage>
#include <QOpenGLWidget>
#include <QString>

struct mpv_handle;
struct mpv_render_context;

namespace leolink {

/// Plays a stream inside a Qt widget.
///
/// The first version handed mpv a native window id with `--wid`. That is the
/// quick way and it is unreliable: mpv then owns a foreign X window, and every
/// time Qt recreated or remapped it — minimising and restoring, toggling the
/// window frame, moving between screens — mpv's rendering context was left
/// pointing at something that no longer existed. The symptoms were a picture
/// that froze, ran at a frame every few seconds, or filled with green blocks,
/// and no amount of decoder or buffer tuning could fix any of it because none
/// of those were the cause.
///
/// libmpv's render API turns the relationship around: Qt owns the OpenGL
/// context and mpv draws into whichever framebuffer it is handed, when it is
/// asked to. Window state changes are then Qt's business, which is where they
/// belong.
///
/// Threading: mpv signals "a new frame is ready" from its own thread. That
/// callback does nothing but emit a signal, which a queued connection carries
/// to the GUI thread — calling into OpenGL from mpv's thread would be a
/// crash waiting for a busy moment.
class MpvWidget : public QOpenGLWidget {
    Q_OBJECT

public:
    explicit MpvWidget(QWidget *parent = nullptr);
    ~MpvWidget() override;

    /// Options must be set before the first play(); mpv is initialised lazily
    /// on the first one so that the caller can configure it first.
    void setOption(const QString &name, const QString &value);
    void setProperty(const QString &name, const QString &value);
    void setPropertyDouble(const QString &name, double value);
    void setPropertyFlag(const QString &name, bool value);

    void play(const QString &url);
    void stop();

    /// Video width as mpv reports it, 0 before the first frame.
    int videoWidth() const;

    /// What is actually being played, as opposed to what was configured. Empty
    /// or zero until the first frame has arrived.
    struct StreamInfo {
        int width{0};
        int height{0};
        double fps{0.0};        ///< as measured, not as claimed
        double bitrateKbps{0.0};
        QString codec;          ///< "h264", "hevc" …
    };
    StreamInfo streamInfo() const;

    bool command(const QStringList &args);
    /// Exactly what was drawn, straight out of the framebuffer. Used by the
    /// self-test below; also the honest answer to "what does the user see".
    QImage grabRendered();
    /// Frames drawn since start — the difference between a live picture and a
    /// still one that merely looks alive.
    quint64 renderedFrames() const { return m_frames; }
    bool isReady() const { return m_mpv != nullptr; }

    /// Video frames mpv has actually decoded. Unlike renderedFrames() this
    /// does not move when Qt merely repaints, which is what made an earlier
    /// stall detector useless: it watched paints and a frozen stream still
    /// painted.
    quint64 decodedFrames() const { return m_decodedFrames; }
    /// mpv's own verdict: true while nothing is playing.
    bool isIdle() const { return m_coreIdle; }

signals:
    /// Emitted from mpv's render thread; connect queued.
    void frameReady();
    /// mpv has events waiting. Emitted from mpv's thread, handled queued.
    void eventsPending();
    /// Playback ended, with mpv's own reason ("eof", "error", …).
    void endOfFile(const QString &reason);
    /// Anything mpv logged at warning level or worse.
    void logMessage(const QString &text);

protected:
    void initializeGL() override;
    void paintGL() override;

private:
    void ensureCreated();
    void destroyRender();
    /// Records the graphics stack and mpv's own versions in the log, once.
    void reportEnvironment();

    mpv_handle *m_mpv{nullptr};
    mpv_render_context *m_render{nullptr};
    void drainEvents();

    QString m_pendingUrl;
    quint64 m_frames{0};
    quint64 m_decodedFrames{0};
    double m_lastPlaybackTime{-1.0};
    bool m_coreIdle{false};
    /// What mpv actually decodes with, which is not always what was asked for.
    QString m_activeDecoder;
};

} // namespace leolink
