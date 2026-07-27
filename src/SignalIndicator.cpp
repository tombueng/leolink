#include "SignalIndicator.h"

#include <QPainter>
#include <QPainterPath>
#include <QtMath>

namespace leolink {

namespace {
/// Weak signal earns a colour; anything usable stays in the text colour so a
/// wall of healthy cameras does not turn into a wall of decoration.
const QColor kWeak{0xc0, 0x39, 0x2b};
const QColor kFair{0xd3, 0x8f, 0x28};
} // namespace

SignalIndicator::SignalIndicator(QWidget *parent) : QWidget(parent)
{
    refreshToolTip();
}

QSize SignalIndicator::sizeHint() const
{
    // Matched to the buttons beside it. Smaller looked like an afterthought
    // and sat oddly low in the row, because a short widget gets centred while
    // the glyph inside it is drawn from the bottom up.
    const int side = qMax(18, fontMetrics().height() + 6);
    return QSize(side, side);
}

void SignalIndicator::setLink(Link link)
{
    if (link == m_link)
        return;
    m_link = link;
    refreshToolTip();
    update();
}

void SignalIndicator::setStrength(int strength)
{
    const int clamped = strength < 0 ? -1 : qMin(strength, kLevels);
    if (clamped == m_strength)
        return;
    m_strength = clamped;
    refreshToolTip();
    update();
}

void SignalIndicator::refreshToolTip()
{
    QString kind;
    switch (m_link) {
    case Link::WiFi:     kind = tr("Wi-Fi"); break;
    case Link::Cellular: kind = tr("Mobile data"); break;
    case Link::Wired:    kind = tr("Wired"); break;
    case Link::Unknown:  kind = tr("Connection"); break;
    }

    if (m_link == Link::Wired)
        setToolTip(kind);
    else if (m_strength < 0)
        setToolTip(tr("%1 — strength unknown").arg(kind));
    else
        setToolTip(tr("%1 — %2 of %3").arg(kind).arg(m_strength).arg(kLevels));
}

void SignalIndicator::paintEvent(QPaintEvent *)
{
    if (m_link == Link::Wired || m_link == Link::Unknown)
        return;

    QPainter painter(this);
    painter.setRenderHint(QPainter::Antialiasing);

    QColor active = palette().color(QPalette::WindowText);
    if (m_strength >= 0 && m_strength <= 1)
        active = kWeak;
    else if (m_strength == 2)
        active = kFair;

    QColor inactive = palette().color(QPalette::WindowText);
    inactive.setAlpha(55);

    if (m_link == Link::Cellular)
        paintCellular(painter, active, inactive);
    else
        paintWiFi(painter, active, inactive);
}

void SignalIndicator::paintWiFi(QPainter &painter, const QColor &active,
                                const QColor &inactive) const
{
    // A dot with three arcs above it. Level 1 is the dot alone, 4 is all of it.
    const qreal w = width();
    const qreal h = height();

    // Thin strokes: at this size a heavy line turns the arcs into a blob.
    const qreal thickness = qMax(qreal(1.0), h * 0.07);
    const qreal dotRadius = qMax(qreal(1.0), h * 0.07);

    // The outer arc spans 45° each side of vertical, so it reaches
    // radius*sin(45°) sideways; the stroke adds half its width again. Deriving
    // the radius from that keeps the arcs off the left and right edges.
    const qreal usableHalfWidth = w / 2.0 - thickness / 2.0 - 0.5;
    const qreal maxRadius = usableHalfWidth / qSin(qDegreesToRadians(45.0));

    // Centre the whole glyph rather than the widget. The shape grows upwards
    // from the dot, so anchoring the dot near the bottom edge — as the first
    // version did — left a gap above and none below, and the symbol looked
    // like it had slipped down in the row.
    const qreal glyphHeight = maxRadius + thickness / 2.0 + dotRadius;
    const qreal top = (h - glyphHeight) / 2.0;
    const QPointF origin(w / 2.0, top + glyphHeight - dotRadius);

    painter.setPen(Qt::NoPen);
    painter.setBrush(m_strength >= 1 ? active : inactive);
    painter.drawEllipse(origin, dotRadius, dotRadius);

    for (int arc = 0; arc < 3; ++arc) {
        const qreal radius = maxRadius * (0.40 + 0.30 * arc);
        QPen pen(m_strength >= arc + 2 ? active : inactive, thickness);
        pen.setCapStyle(Qt::RoundCap);
        painter.setPen(pen);
        painter.setBrush(Qt::NoBrush);
        const QRectF box(origin.x() - radius, origin.y() - radius,
                         radius * 2, radius * 2);
        painter.drawArc(box, 45 * 16, 90 * 16);   // sixteenths of a degree
    }
}

void SignalIndicator::paintCellular(QPainter &painter, const QColor &active,
                                    const QColor &inactive) const
{
    painter.setPen(Qt::NoPen);

    const qreal gap = qMax(qreal(1.0), width() / 12.0);
    const qreal barWidth = (width() - gap * (kLevels - 1)) / kLevels;

    for (int bar = 0; bar < kLevels; ++bar) {
        const qreal barHeight = height() * (0.34 + 0.22 * bar);
        const QRectF rect(bar * (barWidth + gap), height() - barHeight,
                          barWidth, barHeight);
        painter.setBrush(m_strength > bar ? active : inactive);
        painter.drawRoundedRect(rect, barWidth / 4.0, barWidth / 4.0);
    }
}

} // namespace leolink
