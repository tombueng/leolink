#include "ZoomView.h"

#include <cmath>

#include <QtMath>

namespace leolink {

namespace {

/// The frame's size at factor 1: fitted into the widget, aspect kept.
QSizeF fitted(QSizeF widget, double aspect)
{
    const double width = qMin(widget.width(), widget.height() * aspect);
    return {width, width / aspect};
}

} // namespace

void ZoomView::reset()
{
    m_factor = 1.0;
    m_center = {0.5, 0.5};
}

QRectF ZoomView::frameRect(QSizeF widget, double aspect) const
{
    const QSizeF size = fitted(widget, aspect) * m_factor;
    return {widget.width() / 2 - m_center.x() * size.width(),
            widget.height() / 2 - m_center.y() * size.height(), size.width(),
            size.height()};
}

QPointF ZoomView::toFrame(QPointF widgetPoint, QSizeF widget, double aspect) const
{
    const QRectF frame = frameRect(widget, aspect);
    return {(widgetPoint.x() - frame.left()) / frame.width(),
            (widgetPoint.y() - frame.top()) / frame.height()};
}

void ZoomView::zoomTo(const QRectF &widgetRect, QSizeF widget, double aspect)
{
    const QPointF a = toFrame(widgetRect.topLeft(), widget, aspect);
    const QPointF b = toFrame(widgetRect.bottomRight(), widget, aspect);
    const QSizeF fit = fitted(widget, aspect);
    const double w = qMax(b.x() - a.x(), 1e-6);
    const double h = qMax(b.y() - a.y(), 1e-6);
    m_factor = qBound(1.0,
                      qMin(widget.width() / (fit.width() * w),
                           widget.height() / (fit.height() * h)),
                      kMaxFactor);
    m_center = (a + b) / 2;
    clamp(widget, aspect);
}

void ZoomView::zoomBy(double factor, QPointF widgetPoint, QSizeF widget, double aspect)
{
    const QPointF anchor = toFrame(widgetPoint, widget, aspect);
    m_factor = qBound(1.0, m_factor * factor, kMaxFactor);
    const QSizeF size = fitted(widget, aspect) * m_factor;
    m_center = {anchor.x() - (widgetPoint.x() - widget.width() / 2) / size.width(),
                anchor.y() - (widgetPoint.y() - widget.height() / 2) / size.height()};
    clamp(widget, aspect);
}

void ZoomView::panBy(QPointF widgetDelta, QSizeF widget, double aspect)
{
    const QSizeF size = fitted(widget, aspect) * m_factor;
    m_center -= QPointF(widgetDelta.x() / size.width(), widgetDelta.y() / size.height());
    clamp(widget, aspect);
}

void ZoomView::clamp(QSizeF widget, double aspect)
{
    if (m_factor <= 1.0) {
        reset();
        return;
    }
    if (aspect <= 0 || widget.isEmpty())
        return;   // no picture yet, as while a stream reloads
    const QSizeF size = fitted(widget, aspect) * m_factor;
    // Half the visible part, in frame fractions. Wider than the frame: centred.
    const auto bound = [](double centre, double half) {
        return half >= 0.5 ? 0.5 : qBound(half, centre, 1.0 - half);
    };
    m_center = {bound(m_center.x(), widget.width() / (2 * size.width())),
                bound(m_center.y(), widget.height() / (2 * size.height()))};
}

double ZoomView::mpvZoom() const
{
    return std::log2(m_factor);
}

QPointF ZoomView::mpvPan() const
{
    // mpv places the frame's left edge at (widget - frame) / 2 + pan * frame.
    return {0.5 - m_center.x(), 0.5 - m_center.y()};
}

} // namespace leolink
