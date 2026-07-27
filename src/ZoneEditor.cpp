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

// ── grid ────────────────────────────────────────────────────────────────────

ZoneGrid::ZoneGrid(QWidget *parent)
    : QWidget(parent), m_columns(MotionDetector::kZoneColumns),
      m_rows(MotionDetector::kZoneRows),
      m_cells(MotionDetector::kZoneCount, true)
{
    setMinimumSize(320, 180);
    setMouseTracking(false);
    setCursor(Qt::PointingHandCursor);
}

void ZoneGrid::setGridSize(int columns, int rows)
{
    if (columns <= 0 || rows <= 0 || (columns == m_columns && rows == m_rows))
        return;
    m_columns = columns;
    m_rows = rows;
    m_cells.fill(true);
    m_cells.resize(columns * rows);
    updateGeometry();
    update();
}

void ZoneGrid::setBackground(const QPixmap &snapshot)
{
    m_background = snapshot;
    update();
}

void ZoneGrid::setMask(const QString &mask)
{
    m_cells.fill(true);
    if (mask.size() == m_cells.size()) {
        for (int i = 0; i < m_cells.size(); ++i)
            m_cells[i] = mask.at(i) != QLatin1Char('0');
    }
    update();
}

QString ZoneGrid::mask() const
{
    QString out;
    out.reserve(m_cells.size());
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
    return width * m_rows / m_columns;   // keep the camera's 16:9 shape
}

int ZoneGrid::cellAt(const QPoint &point) const
{
    if (!rect().contains(point))
        return -1;
    const int column = point.x() * m_columns / qMax(1, width());
    const int row = point.y() * m_rows / qMax(1, height());
    if (column < 0 || column >= m_columns || row < 0 || row >= m_rows)
        return -1;
    return row * m_columns + column;
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

    const double cellWidth = double(width()) / m_columns;
    const double cellHeight = double(height()) / m_rows;

    // Ignored cells are dimmed rather than watched ones highlighted: the
    // interesting question is "what am I not looking at", and the picture stays
    // readable where it matters.
    painter.setPen(Qt::NoPen);
    painter.setBrush(QColor(0, 0, 0, 130));
    for (int row = 0; row < m_rows; ++row) {
        for (int column = 0; column < m_columns; ++column) {
            if (m_cells[row * m_columns + column])
                continue;
            painter.drawRect(QRectF(column * cellWidth, row * cellHeight,
                                    cellWidth, cellHeight));
        }
    }

    painter.setBrush(Qt::NoBrush);
    painter.setPen(QPen(QColor(255, 255, 255, 45), 1));
    for (int column = 1; column < m_columns; ++column)
        painter.drawLine(QPointF(column * cellWidth, 0),
                         QPointF(column * cellWidth, height()));
    for (int row = 1; row < m_rows; ++row)
        painter.drawLine(QPointF(0, row * cellHeight),
                         QPointF(width(), row * cellHeight));
}

// ── dialog ──────────────────────────────────────────────────────────────────

ZoneEditor::ZoneEditor(const CameraConfig &camera, const QString &mask,
                       QWidget *parent, int columns, int rows,
                       const QString &title, const QString &hintText)
    : QDialog(parent), m_grid(new ZoneGrid(this)),
      m_status(new QLabel(this)), m_client(new ReolinkClient(this))
{
    setWindowTitle(title.isEmpty() ? tr("%1 — motion zones").arg(camera.label())
                                   : title);
    resize(760, 620);

    m_grid->setGridSize(columns, rows);
    m_grid->setMask(mask);

    auto *hint = new QLabel(
        hintText.isEmpty()
            ? tr("Drag over the picture to choose what is watched. Darkened "
                 "areas are ignored — useful for a road at the edge of view, a "
                 "tree that moves in the wind, or a neighbour's doorway.")
            : hintText,
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


// ── privacy mask ────────────────────────────────────────────────────────────

MaskCanvas::MaskCanvas(QWidget *parent) : QWidget(parent)
{
    setMinimumSize(320, 180);
    setCursor(Qt::CrossCursor);
}

void MaskCanvas::setBackground(const QPixmap &snapshot)
{
    m_background = snapshot;
    update();
}

void MaskCanvas::setMaximum(int maximum)
{
    m_maximum = qMax(1, maximum);
}

void MaskCanvas::setAreas(const QList<QRectF> &areas)
{
    m_areas = areas;
    update();
}

void MaskCanvas::clear()
{
    m_areas.clear();
    update();
    emit changed();
}

void MaskCanvas::removeLast()
{
    if (m_areas.isEmpty())
        return;
    m_areas.removeLast();
    update();
    emit changed();
}

int MaskCanvas::heightForWidth(int width) const
{
    return width * 9 / 16;
}

void MaskCanvas::mousePressEvent(QMouseEvent *event)
{
    if (m_areas.size() >= m_maximum)
        return;   // the camera would refuse a fifth
    m_drawing = true;
    m_dragStart = QPointF(double(event->position().x()) / qMax(1, width()),
                          double(event->position().y()) / qMax(1, height()));
    m_dragging = QRectF(m_dragStart, m_dragStart);
}

void MaskCanvas::mouseMoveEvent(QMouseEvent *event)
{
    if (!m_drawing)
        return;
    const QPointF now(double(event->position().x()) / qMax(1, width()),
                      double(event->position().y()) / qMax(1, height()));
    m_dragging = QRectF(m_dragStart, now).normalized();
    update();
}

void MaskCanvas::mouseReleaseEvent(QMouseEvent *)
{
    if (!m_drawing)
        return;
    m_drawing = false;
    // A stray click should not leave an invisible rectangle behind that still
    // counts towards the camera's limit of four.
    if (m_dragging.width() > 0.02 && m_dragging.height() > 0.02) {
        m_areas.append(m_dragging.intersected(QRectF(0, 0, 1, 1)));
        emit changed();
    }
    m_dragging = QRectF();
    update();
}

void MaskCanvas::paintEvent(QPaintEvent *)
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

    auto toWidget = [this](const QRectF &normalised) {
        return QRectF(normalised.x() * width(), normalised.y() * height(),
                      normalised.width() * width(),
                      normalised.height() * height());
    };

    // Drawn solid, not translucent: the camera blanks these areas outright, and
    // showing them as a tint would suggest something is still visible there.
    painter.setPen(QPen(QColor(255, 255, 255, 160), 1));
    painter.setBrush(QColor(0, 0, 0, 235));
    int index = 1;
    for (const QRectF &area : std::as_const(m_areas)) {
        const QRectF box = toWidget(area);
        painter.drawRect(box);
        painter.setPen(QColor(255, 255, 255, 200));
        painter.drawText(box, Qt::AlignCenter, QString::number(index++));
        painter.setPen(QPen(QColor(255, 255, 255, 160), 1));
    }

    if (m_drawing && !m_dragging.isNull()) {
        painter.setBrush(QColor(0, 0, 0, 120));
        painter.setPen(QPen(Qt::white, 1, Qt::DashLine));
        painter.drawRect(toWidget(m_dragging));
    }
}

MaskEditor::MaskEditor(const CameraConfig &camera, const QList<QRectF> &areas,
                       int maximum, QWidget *parent)
    : QDialog(parent), m_canvas(new MaskCanvas(this)),
      m_status(new QLabel(this)), m_count(new QLabel(this)),
      m_client(new ReolinkClient(this)), m_maximum(maximum)
{
    setWindowTitle(tr("%1 — privacy areas").arg(camera.label()));
    resize(760, 640);

    m_canvas->setMaximum(maximum);
    m_canvas->setAreas(areas);

    auto *hint = new QLabel(
        tr("Drag out the parts of the view the camera should blank. It blacks "
           "them out before anything leaves the device, so they are missing "
           "from the live picture, from recordings and from every other client "
           "— including the manufacturer's app."),
        this);
    hint->setWordWrap(true);

    auto *undo = new QPushButton(tr("Remove the last"), this);
    auto *clear = new QPushButton(tr("Remove all"), this);
    connect(undo, &QPushButton::clicked, m_canvas, &MaskCanvas::removeLast);
    connect(clear, &QPushButton::clicked, m_canvas, &MaskCanvas::clear);

    auto *row = new QHBoxLayout;
    row->addWidget(undo);
    row->addWidget(clear);
    row->addStretch(1);
    row->addWidget(m_count);

    auto *buttons = new QDialogButtonBox(
        QDialogButtonBox::Save | QDialogButtonBox::Cancel, this);
    connect(buttons, &QDialogButtonBox::accepted, this, &QDialog::accept);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);

    m_status->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
    m_status->setText(tr("Fetching a picture from %1…").arg(camera.host));

    auto *layout = new QVBoxLayout(this);
    layout->addWidget(hint);
    layout->addWidget(m_canvas, 1);
    layout->addLayout(row);
    layout->addWidget(m_status);
    layout->addWidget(buttons);

    connect(m_canvas, &MaskCanvas::changed, this, &MaskEditor::refreshCount);
    refreshCount();

    connect(m_client, &ReolinkClient::snapshotReady, this,
            [this](const QByteArray &jpeg) {
                QPixmap picture;
                if (picture.loadFromData(jpeg, "JPEG")) {
                    m_canvas->setBackground(picture);
                    m_status->clear();
                }
            });
    connect(m_client, &ReolinkClient::failed, this, [this](const QString &why) {
        m_status->setText(
            tr("No picture: %1 — the areas can still be drawn.").arg(why));
    });

    m_client->setCamera(camera);
    m_client->fetchSnapshot();
}

void MaskEditor::refreshCount()
{
    const int used = m_canvas->areas().size();
    m_count->setText(tr("%1 of %2 areas").arg(used).arg(m_maximum));
    // Said plainly rather than by a control that stops responding: a canvas
    // that silently ignores a drag reads as broken.
    m_count->setStyleSheet(used >= m_maximum
                               ? QStringLiteral("color:#d38f28;")
                               : QStringLiteral("color:#7f8c8d;"));
}

QList<QRectF> MaskEditor::areas() const
{
    return m_canvas->areas();
}

} // namespace leolink
