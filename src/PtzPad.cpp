#include "PtzPad.h"

#include <QGridLayout>
#include <QToolButton>

namespace leolink {

PtzPad::PtzPad(QWidget *parent) : QFrame(parent)
{
    // The desktop palette, like the strip under the picture, and opaque: the
    // picture behind is mpv's, and a translucent widget over it shows
    // whatever the compositor last had there rather than the video.
    setFrameShape(QFrame::StyledPanel);
    setAutoFillBackground(true);
    setBackgroundRole(QPalette::Window);

    auto *grid = new QGridLayout(this);
    grid->setContentsMargins(4, 4, 4, 4);
    grid->setSpacing(2);

    grid->addWidget(button(QStringLiteral("LeftUp"), QStringLiteral("↖"), tr("Up and left")), 0, 0);
    grid->addWidget(button(QStringLiteral("Up"), QStringLiteral("↑"), tr("Up")), 0, 1);
    grid->addWidget(button(QStringLiteral("RightUp"), QStringLiteral("↗"), tr("Up and right")), 0, 2);
    grid->addWidget(button(QStringLiteral("Left"), QStringLiteral("←"), tr("Left")), 1, 0);
    grid->addWidget(button(QStringLiteral("Right"), QStringLiteral("→"), tr("Right")), 1, 2);
    grid->addWidget(button(QStringLiteral("LeftDown"), QStringLiteral("↙"), tr("Down and left")), 2, 0);
    grid->addWidget(button(QStringLiteral("Down"), QStringLiteral("↓"), tr("Down")), 2, 1);
    grid->addWidget(button(QStringLiteral("RightDown"), QStringLiteral("↘"), tr("Down and right")), 2, 2);

    m_zoomIn = button(QStringLiteral("ZoomInc"), QStringLiteral("+"), tr("Zoom in"));
    m_zoomOut = button(QStringLiteral("ZoomDec"), QStringLiteral("−"), tr("Zoom out"));
    grid->addWidget(m_zoomIn, 0, 3);
    grid->addWidget(m_zoomOut, 2, 3);
    setZoomAvailable(false);
}

void PtzPad::setZoomAvailable(bool available)
{
    m_zoomIn->setVisible(available);
    m_zoomOut->setVisible(available);
    adjustSize();
}

QToolButton *PtzPad::button(const QString &op, const QString &glyph,
                            const QString &tip)
{
    auto *b = new QToolButton(this);
    b->setText(glyph);
    b->setToolTip(tip);
    b->setAutoRaise(true);
    b->setFixedSize(28, 28);
    // Held, not clicked: the camera turns while the button is down.
    connect(b, &QToolButton::pressed, this, [this, op] { emit moveRequested(op); });
    connect(b, &QToolButton::released, this,
            [this] { emit moveRequested(QStringLiteral("Stop")); });
    return b;
}

} // namespace leolink
