#include "ZoneEditor.h"

#include <QDialogButtonBox>
#include <QHBoxLayout>
#include <QLabel>
#include <QMouseEvent>
#include <QPainter>
#include <QPushButton>
#include <QVBoxLayout>

#include "MotionDetector.h"
#include "ReolinkClient.h"

namespace leolink {

namespace {
constexpr int kColumns = MotionDetector::kZoneColumns;
constexpr int kRows = MotionDetector::kZoneRows;
constexpr int kCells = MotionDetector::kZoneCount;
} // namespace

// ── grid ────────────────────────────────────────────────────────────────────

ZoneGrid::ZoneGrid(QWidget *parent)
    : QWidget(parent), m_cells(kCells, true)
{
    setMinimumSize(320, 180);
    setMouseTracking(false);
    setCursor(Qt::PointingHandCursor);
}

void ZoneGrid::setBackground(const QPixmap &snapshot)
{
    m_background = snapshot;
    update();
}

void ZoneGrid::setMask(const QString &mask)
{
    m_cells.fill(true);
    if (mask.size() == kCells) {
        for (int i = 0; i < kCells; ++i)
            m_cells[i] = mask.at(i) != QLatin1Char('0');
    }
    update();
}

QString ZoneGrid::mask() const
{
    QString out;
    out.reserve(kCells);
    for (bool watched : m_cells)
        out += watched ? QLatin1Char('1') : QLatin1Char('0');
    return out;
}

void ZoneGrid::fill(bool watched)
{
    m_cells.fill(watched);
    update();
    emit maskChanged();
}

void ZoneGrid::invert()
{
    for (int i = 0; i < m_cells.size(); ++i)
        m_cells[i] = !m_cells[i];
    update();
    emit maskChanged();
}

int ZoneGrid::heightForWidth(int width) const
{
    return width * kRows / kColumns;   // keep the camera's 16:9 shape
}

int ZoneGrid::cellAt(const QPoint &point) const
{
    if (!rect().contains(point))
        return -1;
    const int column = point.x() * kColumns / qMax(1, width());
    const int row = point.y() * kRows / qMax(1, height());
    if (column < 0 || column >= kColumns || row < 0 || row >= kRows)
        return -1;
    return row * kColumns + column;
}

void ZoneGrid::mousePressEvent(QMouseEvent *event)
{
    const int cell = cellAt(event->pos());
    if (cell < 0)
        return;
    // The first cell decides the direction for the whole drag.
    m_paintValue = !m_cells[cell];
    m_cells[cell] = m_paintValue;
    update();
    emit maskChanged();
}

void ZoneGrid::mouseMoveEvent(QMouseEvent *event)
{
    if (!(event->buttons() & Qt::LeftButton))
        return;
    const int cell = cellAt(event->pos());
    if (cell < 0 || m_cells[cell] == m_paintValue)
        return;
    m_cells[cell] = m_paintValue;
    update();
    emit maskChanged();
}

void ZoneGrid::paintEvent(QPaintEvent *)
{
    QPainter painter(this);
    painter.setRenderHint(QPainter::SmoothPixmapTransform);

    if (m_background.isNull()) {
        painter.fillRect(rect(), QColor(0x10, 0x12, 0x14));
        painter.setPen(QColor(0x7f, 0x8c, 0x8d));
        painter.drawText(rect(), Qt::AlignCenter, tr("no picture available"));
    } else {
        painter.drawPixmap(rect(), m_background);
    }

    const double cellWidth = double(width()) / kColumns;
    const double cellHeight = double(height()) / kRows;

    // Ignored cells are dimmed rather than watched ones highlighted: the
    // interesting question is "what am I not looking at", and the picture stays
    // readable where it matters.
    painter.setPen(Qt::NoPen);
    painter.setBrush(QColor(0, 0, 0, 130));
    for (int row = 0; row < kRows; ++row) {
        for (int column = 0; column < kColumns; ++column) {
            if (m_cells[row * kColumns + column])
                continue;
            painter.drawRect(QRectF(column * cellWidth, row * cellHeight,
                                    cellWidth, cellHeight));
        }
    }

    painter.setBrush(Qt::NoBrush);
    painter.setPen(QPen(QColor(255, 255, 255, 45), 1));
    for (int column = 1; column < kColumns; ++column)
        painter.drawLine(QPointF(column * cellWidth, 0),
                         QPointF(column * cellWidth, height()));
    for (int row = 1; row < kRows; ++row)
        painter.drawLine(QPointF(0, row * cellHeight),
                         QPointF(width(), row * cellHeight));
}

// ── dialog ──────────────────────────────────────────────────────────────────

ZoneEditor::ZoneEditor(const CameraConfig &camera, const QString &mask,
                       QWidget *parent)
    : QDialog(parent), m_grid(new ZoneGrid(this)),
      m_status(new QLabel(this)), m_client(new ReolinkClient(this))
{
    setWindowTitle(tr("%1 — motion zones").arg(camera.label()));
    resize(760, 620);

    m_grid->setMask(mask);

    auto *hint = new QLabel(
        tr("Drag over the picture to choose what is watched. Darkened areas are "
           "ignored — useful for a road at the edge of view, a tree that moves "
           "in the wind, or a neighbour's doorway."),
        this);
    hint->setWordWrap(true);

    auto *all = new QPushButton(tr("Watch all"), this);
    auto *none = new QPushButton(tr("Ignore all"), this);
    auto *invert = new QPushButton(tr("Invert"), this);
    connect(all, &QPushButton::clicked, this, [this] { m_grid->fill(true); });
    connect(none, &QPushButton::clicked, this, [this] { m_grid->fill(false); });
    connect(invert, &QPushButton::clicked, this, [this] { m_grid->invert(); });

    auto *buttonsRow = new QHBoxLayout;
    buttonsRow->addWidget(all);
    buttonsRow->addWidget(none);
    buttonsRow->addWidget(invert);
    buttonsRow->addStretch(1);

    auto *dialogButtons = new QDialogButtonBox(
        QDialogButtonBox::Save | QDialogButtonBox::Cancel, this);
    connect(dialogButtons, &QDialogButtonBox::accepted, this, &QDialog::accept);
    connect(dialogButtons, &QDialogButtonBox::rejected, this, &QDialog::reject);

    m_status->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
    m_status->setText(tr("Fetching a picture from %1…").arg(camera.host));

    auto *layout = new QVBoxLayout(this);
    layout->addWidget(hint);
    layout->addWidget(m_grid, 1);
    layout->addLayout(buttonsRow);
    layout->addWidget(m_status);
    layout->addWidget(dialogButtons);

    connect(m_client, &ReolinkClient::snapshotReady, this,
            [this](const QByteArray &jpeg) {
                QPixmap picture;
                if (picture.loadFromData(jpeg, "JPEG")) {
                    m_grid->setBackground(picture);
                    m_status->clear();
                }
            });
    connect(m_client, &ReolinkClient::failed, this, [this](const QString &why) {
        // Zones can still be drawn on an empty rectangle; say so rather than
        // blocking the dialog.
        m_status->setText(tr("No picture: %1 — the zones can still be set.").arg(why));
    });

    m_client->setCamera(camera);
    m_client->fetchSnapshot();
}

QString ZoneEditor::mask() const
{
    return m_grid->mask();
}

} // namespace leolink
