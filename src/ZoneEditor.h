// Draw the area a camera should watch.
#pragma once

#include <QDialog>
#include <QPixmap>
#include <QWidget>

#include "Config.h"

class QLabel;

namespace leolink {

class ReolinkClient;

/// The grid itself: a live snapshot with cells drawn over it.
///
/// Cells are toggled by dragging, like a paint tool, because setting a
/// hundred-odd cells one click at a time would be tedious. Whether the drag
/// switches cells on or off is decided by the first cell touched — the same
/// behaviour as selecting checkboxes in a file manager.
class ZoneGrid : public QWidget {
    Q_OBJECT

public:
    explicit ZoneGrid(QWidget *parent = nullptr);

    void setBackground(const QPixmap &snapshot);
    void setMask(const QString &mask);
    QString mask() const;

    void fill(bool watched);
    void invert();

signals:
    void maskChanged();

protected:
    void paintEvent(QPaintEvent *event) override;
    void mousePressEvent(QMouseEvent *event) override;
    void mouseMoveEvent(QMouseEvent *event) override;
    int heightForWidth(int width) const override;
    bool hasHeightForWidth() const override { return true; }

private:
    /// Cell under a point, or -1 outside the grid.
    int cellAt(const QPoint &point) const;

    QPixmap m_background;
    QVector<bool> m_cells;
    /// What a drag is currently doing, decided at the first cell touched.
    bool m_paintValue{true};
};

/// Dialog around the grid: fetches a snapshot so the user draws on the actual
/// view rather than on an empty rectangle.
class ZoneEditor : public QDialog {
    Q_OBJECT

public:
    ZoneEditor(const CameraConfig &camera, const QString &mask,
               QWidget *parent = nullptr);

    QString mask() const;

private:
    ZoneGrid *m_grid;
    QLabel *m_status;
    ReolinkClient *m_client;
};

} // namespace leolink
