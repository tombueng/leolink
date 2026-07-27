#include "SchedulePicker.h"

#include <QDialogButtonBox>
#include <QFontMetrics>
#include <QHBoxLayout>
#include <QLabel>
#include <QLocale>
#include <QMouseEvent>
#include <QPainter>
#include <QPushButton>
#include <QVBoxLayout>

namespace leolink {

ScheduleGrid::ScheduleGrid(QWidget *parent)
    : QWidget(parent), m_cells(kCells, true)
{
    setMouseTracking(false);
    setSizePolicy(QSizePolicy::Expanding, QSizePolicy::Fixed);
}

void ScheduleGrid::setTable(const QString &table)
{
    m_cells.fill(false);
    if (table.size() == kCells) {
        for (int i = 0; i < kCells; ++i)
            m_cells[i] = table.at(i) != QLatin1Char('0');
    }
    update();
}

QString ScheduleGrid::table() const
{
    QString out;
    out.reserve(kCells);
    for (bool cell : m_cells)
        out += cell ? QLatin1Char('1') : QLatin1Char('0');
    return out;
}

void ScheduleGrid::setFirstDay(int day)
{
    m_firstDay = qBound(1, day, 7);
    update();
}

void ScheduleGrid::fill(bool on)
{
    m_cells.fill(on);
    update();
    emit changed();
}

void ScheduleGrid::invert()
{
    for (int i = 0; i < kCells; ++i)
        m_cells[i] = !m_cells[i];
    update();
    emit changed();
}

void ScheduleGrid::applyPreset(const QString &preset)
{
    m_cells.fill(false);
    for (int day = 0; day < kDays; ++day) {
        // Which weekday this row is depends on where the week starts, and
        // "weekend" has to follow the data rather than the row number.
        const int weekday = (m_firstDay - 1 + day) % 7 + 1;   // 1 = Monday
        const bool weekend = weekday >= 6;
        for (int hour = 0; hour < kHours; ++hour) {
            bool on = false;
            if (preset == QLatin1String("night"))
                on = hour < 6 || hour >= 22;
            else if (preset == QLatin1String("away"))
                on = !weekend && hour >= 8 && hour < 17;
            else if (preset == QLatin1String("weekend"))
                on = weekend;
            m_cells[day * kHours + hour] = on;
        }
    }
    update();
    emit changed();
}

int ScheduleGrid::labelWidth() const
{
    // Wide enough for the longest short day name in this locale, whatever it
    // is: "Mi" in German, "Wed" in English, longer elsewhere.
    int width = 0;
    const QFontMetrics metrics(font());
    for (int day = 1; day <= 7; ++day)
        width = qMax(width, metrics.horizontalAdvance(QLocale().dayName(
                                day, QLocale::ShortFormat)));
    return width + 8;
}

int ScheduleGrid::headerHeight() const
{
    return fontMetrics().height() + 4;
}

QRect ScheduleGrid::gridRect() const
{
    return QRect(labelWidth(), headerHeight(), width() - labelWidth() - 1,
                 height() - headerHeight() - 1);
}

QSize ScheduleGrid::minimumSizeHint() const
{
    return QSize(labelWidth() + kHours * 14, headerHeight() + kDays * 18);
}

QSize ScheduleGrid::sizeHint() const
{
    return QSize(labelWidth() + kHours * 22, headerHeight() + kDays * 22);
}

int ScheduleGrid::cellAt(const QPoint &point) const
{
    const QRect grid = gridRect();
    if (!grid.contains(point))
        return -1;
    const int column = (point.x() - grid.left()) * kHours / grid.width();
    const int row = (point.y() - grid.top()) * kDays / grid.height();
    if (column < 0 || column >= kHours || row < 0 || row >= kDays)
        return -1;
    return row * kHours + column;
}

void ScheduleGrid::paintEvent(QPaintEvent *)
{
    QPainter painter(this);
    painter.setRenderHint(QPainter::Antialiasing, false);

    const QRect grid = gridRect();
    const QColor text = palette().color(QPalette::WindowText);
    // Follows the system palette rather than fixed colours, so this does not
    // glow white in a dark theme.
    QColor on = palette().color(QPalette::Highlight);
    QColor off = palette().color(QPalette::Base);
    QColor line = text;
    line.setAlpha(40);

    painter.setPen(text);
    const QFontMetrics metrics = painter.fontMetrics();

    // Hour numbers, every third one — all twenty-four never fit.
    for (int hour = 0; hour < kHours; hour += 3) {
        const int x = grid.left() + hour * grid.width() / kHours;
        painter.drawText(QRect(x, 0, grid.width() / kHours * 3, headerHeight()),
                         Qt::AlignLeft | Qt::AlignVCenter,
                         QString::number(hour));
    }

    for (int day = 0; day < kDays; ++day) {
        const int weekday = (m_firstDay - 1 + day) % 7 + 1;
        const int y = grid.top() + day * grid.height() / kDays;
        const int nextY = grid.top() + (day + 1) * grid.height() / kDays;

        painter.setPen(text);
        painter.drawText(QRect(0, y, labelWidth() - 6, nextY - y),
                         Qt::AlignRight | Qt::AlignVCenter,
                         QLocale().dayName(weekday, QLocale::ShortFormat));

        for (int hour = 0; hour < kHours; ++hour) {
            const int x = grid.left() + hour * grid.width() / kHours;
            const int nextX = grid.left() + (hour + 1) * grid.width() / kHours;
            const QRect cell(x, y, nextX - x, nextY - y);
            painter.fillRect(cell, m_cells[day * kHours + hour] ? on : off);
            painter.setPen(line);
            painter.drawRect(cell.adjusted(0, 0, -1, -1));
        }
    }

    Q_UNUSED(metrics);
}

void ScheduleGrid::mousePressEvent(QMouseEvent *event)
{
    const int cell = cellAt(event->pos());
    if (cell < 0)
        return;
    // The first cell decides what the drag does, the same way selecting files
    // works: press on something on to turn a block off, and the reverse.
    m_paintValue = !m_cells[cell];
    m_cells[cell] = m_paintValue;
    update();
    emit changed();
}

void ScheduleGrid::mouseMoveEvent(QMouseEvent *event)
{
    if (!(event->buttons() & Qt::LeftButton))
        return;
    const int cell = cellAt(event->pos());
    if (cell < 0 || m_cells[cell] == m_paintValue)
        return;
    m_cells[cell] = m_paintValue;
    update();
    emit changed();
}

// ── the dialog ──────────────────────────────────────────────────────────────

ScheduleDialog::ScheduleDialog(const QString &title, const QString &explanation,
                               const QString &table, int firstDay,
                               QWidget *parent)
    : QDialog(parent)
{
    setWindowTitle(title);

    m_grid = new ScheduleGrid(this);
    m_grid->setFirstDay(firstDay);
    m_grid->setTable(table);

    auto *note = new QLabel(explanation, this);
    note->setWordWrap(true);
    note->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    m_summary = new QLabel(this);

    auto *all = new QPushButton(tr("All week"), this);
    auto *none = new QPushButton(tr("Never"), this);
    auto *nights = new QPushButton(tr("Nights"), this);
    auto *away = new QPushButton(tr("Working hours"), this);
    auto *weekend = new QPushButton(tr("Weekends"), this);
    auto *invert = new QPushButton(tr("Invert"), this);

    nights->setToolTip(tr("22:00 to 06:00, every day."));
    away->setToolTip(tr("08:00 to 17:00, Monday to Friday."));

    connect(all, &QPushButton::clicked, this, [this] { m_grid->fill(true); });
    connect(none, &QPushButton::clicked, this, [this] { m_grid->fill(false); });
    connect(invert, &QPushButton::clicked, this, [this] { m_grid->invert(); });
    connect(nights, &QPushButton::clicked, this,
            [this] { m_grid->applyPreset(QStringLiteral("night")); });
    connect(away, &QPushButton::clicked, this,
            [this] { m_grid->applyPreset(QStringLiteral("away")); });
    connect(weekend, &QPushButton::clicked, this,
            [this] { m_grid->applyPreset(QStringLiteral("weekend")); });

    auto *presets = new QHBoxLayout;
    presets->addWidget(all);
    presets->addWidget(none);
    presets->addWidget(nights);
    presets->addWidget(away);
    presets->addWidget(weekend);
    presets->addWidget(invert);
    presets->addStretch(1);

    auto *buttons = new QDialogButtonBox(
        QDialogButtonBox::Ok | QDialogButtonBox::Cancel, this);
    connect(buttons, &QDialogButtonBox::accepted, this, &QDialog::accept);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);

    auto *layout = new QVBoxLayout(this);
    layout->addWidget(note);
    layout->addWidget(m_grid, 1);
    layout->addLayout(presets);
    layout->addWidget(m_summary);
    layout->addWidget(buttons);

    connect(m_grid, &ScheduleGrid::changed, this,
            &ScheduleDialog::refreshSummary);
    refreshSummary();
    resize(680, 360);
}

void ScheduleDialog::refreshSummary()
{
    const QString table = m_grid->table();
    const int hours = int(table.count(QLatin1Char('1')));
    if (hours == 0) {
        // Worth saying plainly: an empty schedule looks like a setting and
        // behaves like a switched-off feature.
        m_summary->setText(tr("Nothing is selected — this will never run."));
        m_summary->setStyleSheet(QStringLiteral("color:#c0392b;"));
    } else if (hours == ScheduleGrid::kCells) {
        m_summary->setText(tr("Always on."));
        m_summary->setStyleSheet(QString());
    } else {
        m_summary->setText(tr("%n hour(s) a week.", nullptr, hours));
        m_summary->setStyleSheet(QString());
    }
}

QString ScheduleDialog::table() const
{
    return m_grid->table();
}

} // namespace leolink
