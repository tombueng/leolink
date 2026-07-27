// A week of hours, painted rather than typed.
#pragma once

#include <QDialog>
#include <QString>
#include <QVector>
#include <QWidget>

class QLabel;

namespace leolink {

/// Seven days by twenty-four hours, toggled by dragging.
///
/// Reolink stores schedules as 168 characters of '0' and '1'. Editing that as
/// text is out of the question, and a form of start/end times per day cannot
/// express "mornings and evenings but not the afternoon", which the format
/// allows and people actually want. A grid is the shape of the data.
class ScheduleGrid : public QWidget {
    Q_OBJECT

public:
    /// 7 x 24, the size of every schedule this API uses.
    static constexpr int kDays = 7;
    static constexpr int kHours = 24;
    static constexpr int kCells = kDays * kHours;

    explicit ScheduleGrid(QWidget *parent = nullptr);

    /// `table` is 168 characters of '0'/'1'. Anything else is treated as an
    /// empty week, because a half-parsed schedule is worse than none.
    void setTable(const QString &table);
    QString table() const;

    /// Which weekday the first row stands for, 1 = Monday … 7 = Sunday, in
    /// Qt's numbering. The camera decides this, not us — see the note in
    /// CameraSettingsDialog where it is set.
    void setFirstDay(int day);

    void fill(bool on);
    void invert();
    /// Common shapes, offered because building them cell by cell is tedious.
    void applyPreset(const QString &preset);

signals:
    void changed();

protected:
    void paintEvent(QPaintEvent *event) override;
    void mousePressEvent(QMouseEvent *event) override;
    void mouseMoveEvent(QMouseEvent *event) override;
    QSize minimumSizeHint() const override;
    QSize sizeHint() const override;

private:
    /// Cell under a point, or -1 outside the grid.
    int cellAt(const QPoint &point) const;
    QRect gridRect() const;
    int labelWidth() const;
    int headerHeight() const;

    QVector<bool> m_cells;
    int m_firstDay{1};
    /// What a drag is doing, decided by the first cell it touches.
    bool m_paintValue{true};
};

/// The grid with its buttons and an explanation.
class ScheduleDialog : public QDialog {
    Q_OBJECT

public:
    ScheduleDialog(const QString &title, const QString &explanation,
                   const QString &table, int firstDay, QWidget *parent = nullptr);

    QString table() const;

private:
    ScheduleGrid *m_grid;
    QLabel *m_summary;
    void refreshSummary();
};

} // namespace leolink
