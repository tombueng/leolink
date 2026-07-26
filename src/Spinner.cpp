#include "Spinner.h"

#include <QConicalGradient>
#include <QFontMetrics>
#include <QPainter>
#include <QPainterPath>
#include <QTimer>

namespace leolink {

namespace {
constexpr int kFrameMs = 40;      // 25 fps is plenty for a spinner
constexpr int kStepDegrees = 6;
} // namespace

Spinner::Spinner(QWidget *parent)
    : QWidget(parent), m_timer(new QTimer(this))
{
    setAttribute(Qt::WA_TransparentForMouseEvents);
    m_timer->setInterval(kFrameMs);
    connect(m_timer, &QTimer::timeout, this, [this] {
        m_angle = (m_angle + kStepDegrees) % 360;
        update();
    });
}

void Spinner::setText(const QString &text)
{
    m_text = text;
    update();
}

void Spinner::showEvent(QShowEvent *event)
{
    QWidget::showEvent(event);
    m_timer->start();
}

void Spinner::hideEvent(QHideEvent *event)
{
    QWidget::hideEvent(event);
    m_timer->stop();
}

void Spinner::paintEvent(QPaintEvent *)
{
    QPainter painter(this);
    painter.setRenderHint(QPainter::Antialiasing);

    // Opaque backdrop: this widget exists to cover the video surface before
    // the first frame, which would otherwise show as an uninitialised green
    // rectangle on some drivers.
    painter.fillRect(rect(), QColor(0x10, 0x12, 0x14));

    const int side = qMin(width(), height());
    const int diameter = qBound(24, side / 5, 64);
    const int thickness = qMax(3, diameter / 8);

    QRectF arcRect(0, 0, diameter, diameter);
    arcRect.moveCenter(QPointF(width() / 2.0,
                               height() / 2.0 - (m_text.isEmpty() ? 0 : 12)));

    // Faint full ring, then a bright sweep rotating over it.
    QPen track(QColor(255, 255, 255, 28), thickness, Qt::SolidLine, Qt::RoundCap);
    painter.setPen(track);
    painter.drawArc(arcRect, 0, 360 * 16);

    QPen sweep(QColor(0x4a, 0x90, 0xd9), thickness, Qt::SolidLine, Qt::RoundCap);
    painter.setPen(sweep);
    // Negative span so it turns clockwise, matching every other spinner.
    painter.drawArc(arcRect, (90 - m_angle) * 16, -110 * 16);

    if (!m_text.isEmpty()) {
        painter.setPen(QColor(0x7f, 0x8c, 0x8d));
        QRectF textRect(0, arcRect.bottom() + 10, width(), 24);
        painter.drawText(textRect, Qt::AlignHCenter | Qt::AlignTop,
                         fontMetrics().elidedText(m_text, Qt::ElideRight,
                                                  width() - 16));
    }
}

} // namespace leolink
