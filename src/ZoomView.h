// Digital zoom: which part of the picture a tile shows.
#pragma once

#include <QPointF>
#include <QRectF>
#include <QSizeF>

namespace leolink {

/// A zoom factor and the frame point shown in the middle of the widget, in
/// fractions of the frame. Factor 1 is the whole picture, fitted as mpv fits it.
/// `aspect` is the frame's display aspect, `widget` the surface size.
class ZoomView {
public:
    static constexpr double kMaxFactor = 16.0;

    bool isZoomed() const { return m_factor > 1.0; }
    double factor() const { return m_factor; }
    QPointF center() const { return m_center; }
    void reset();

    /// Where the whole frame lies in the widget.
    QRectF frameRect(QSizeF widget, double aspect) const;
    /// A widget point as a frame point (0..1 inside the frame).
    QPointF toFrame(QPointF widgetPoint, QSizeF widget, double aspect) const;

    /// Makes the widget rectangle as large as fits.
    void zoomTo(const QRectF &widgetRect, QSizeF widget, double aspect);
    /// Multiplies the factor, keeping the frame point under widgetPoint in place.
    void zoomBy(double factor, QPointF widgetPoint, QSizeF widget, double aspect);
    /// Moves the picture with the pointer.
    void panBy(QPointF widgetDelta, QSizeF widget, double aspect);
    /// Keeps the frame filling the widget where it can; after a resize, too.
    void clamp(QSizeF widget, double aspect);

    /// mpv's video-zoom (log2 of the factor).
    double mpvZoom() const;
    /// mpv's video-pan-x/y, in widths and heights of the zoomed frame.
    QPointF mpvPan() const;

private:
    double m_factor{1.0};
    QPointF m_center{0.5, 0.5};
};

} // namespace leolink
