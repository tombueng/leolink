// Buttons that turn and zoom a camera, laid over its picture.
#pragma once

#include <QFrame>

class QToolButton;

namespace leolink {

/// Eight directions round a centre, and zoom in and out beside them.
///
/// A camera moves for as long as a button is held and stops when it is let
/// go: that is how Reolink's own app does it and how the motor is driven —
/// a direction goes on until "Stop" or the end of its travel, so there is no
/// "one step" to send. Each press says which way, each release says stop.
///
/// Laid over the picture by the tile rather than beside it, so a camera can be
/// aimed while watching what it sees. A child of the tile, not of the video
/// surface, which mpv would paint over.
class PtzPad : public QFrame {
    Q_OBJECT

public:
    explicit PtzPad(QWidget *parent = nullptr);

    /// Shows or hides the zoom buttons. Only cameras with a zoom lens have it.
    void setZoomAvailable(bool available);

signals:
    /// `op` is the HTTP API's word for the movement: "Left", "RightUp",
    /// "ZoomInc"… and "Stop" when the button is let go.
    void moveRequested(const QString &op);

private:
    QToolButton *button(const QString &op, const QString &glyph,
                        const QString &tip);

    QToolButton *m_zoomIn{nullptr};
    QToolButton *m_zoomOut{nullptr};
};

} // namespace leolink
