// Draw the area a camera should watch.
#pragma once

#include <QDialog>
#include <QList>
#include <QPixmap>
#include <QRectF>
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

    /// The grid this mask is expressed in. leolink's own detection uses a
    /// coarse 16x9; the camera's own uses 80x45 and says so in its range
    /// document, so the size is set rather than assumed.
    void setGridSize(int columns, int rows);
    int columns() const { return m_columns; }
    int rows() const { return m_rows; }

    void setBackground(const QPixmap &snapshot);
    void setMask(const QString &mask);
    QString mask() const;

    void fill(bool watched);
    void invert();

    /// What dragging does. Painting cell by cell suits touching up an edge;
    /// dragging a rectangle suits the usual job, which is "ignore that whole
    /// corner". Both exist because neither covers the other.
    enum class Tool { Paint, RectangleOn, RectangleOff };
    void setTool(Tool tool) { m_tool = tool; }

signals:
    void maskChanged();

protected:
    void paintEvent(QPaintEvent *event) override;
    void mousePressEvent(QMouseEvent *event) override;
    void mouseMoveEvent(QMouseEvent *event) override;
    void mouseReleaseEvent(QMouseEvent *event) override;
    int heightForWidth(int width) const override;
    bool hasHeightForWidth() const override { return true; }

private:
    /// Cell under a point, or -1 outside the grid.
    int cellAt(const QPoint &point) const;

    /// Cells under a rectangle from `from` to `to`, inclusive.
    void applyRectangle(int from, int to, bool value);

    QPixmap m_background;
    int m_columns;
    int m_rows;
    QVector<bool> m_cells;
    /// What a drag is currently doing, decided at the first cell touched.
    bool m_paintValue{true};
    Tool m_tool{Tool::Paint};
    /// While a rectangle is being dragged out.
    int m_rubberFrom{-1};
    int m_rubberTo{-1};
};

/// Draws the rectangles a camera blanks out of its own picture.
///
/// Separate from ZoneGrid because the camera's model is different: a privacy
/// mask is a handful of rectangles, not a grid of cells, and it reports how
/// many it will accept. Painting cells and then fitting boxes around them
/// would lose the user's intent somewhere in the conversion; dragging out the
/// boxes directly is both simpler and exactly what gets sent.
class MaskCanvas : public QWidget {
    Q_OBJECT

public:
    explicit MaskCanvas(QWidget *parent = nullptr);

    void setBackground(const QPixmap &snapshot);
    /// How many rectangles this camera accepts, from its range document.
    void setMaximum(int maximum);
    /// Rectangles in the camera's own coordinates, given the reference size it
    /// reported alongside them.
    void setAreas(const QList<QRectF> &areas);
    QList<QRectF> areas() const { return m_areas; }

    void clear();
    void removeLast();

signals:
    void changed();

protected:
    void paintEvent(QPaintEvent *event) override;
    void mousePressEvent(QMouseEvent *event) override;
    void mouseMoveEvent(QMouseEvent *event) override;
    void mouseReleaseEvent(QMouseEvent *event) override;
    int heightForWidth(int width) const override;
    bool hasHeightForWidth() const override { return true; }

private:
    QPixmap m_background;
    /// Normalised 0…1, so the mask survives a change of resolution.
    QList<QRectF> m_areas;
    QPointF m_dragStart;
    QRectF m_dragging;
    bool m_drawing{false};
    int m_maximum{4};
};

/// Dialog around the grid: fetches a snapshot so the user draws on the actual
/// view rather than on an empty rectangle.
class ZoneEditor : public QDialog {
    Q_OBJECT

public:
    /// `columns` x `rows` describes the mask's own grid; the defaults match
    /// leolink's detection. Pass what the camera reports when editing the
    /// camera's own area.
    ZoneEditor(const CameraConfig &camera, const QString &mask,
               QWidget *parent = nullptr, int columns = 16, int rows = 9,
               const QString &title = {}, const QString &hint = {});

    QString mask() const;

private:
    ZoneGrid *m_grid;
    QLabel *m_status;
    ReolinkClient *m_client;
};

/// Dialog around MaskCanvas, with the same snapshot behind it.
class MaskEditor : public QDialog {
    Q_OBJECT

public:
    MaskEditor(const CameraConfig &camera, const QList<QRectF> &areas,
               int maximum, QWidget *parent = nullptr);

    QList<QRectF> areas() const;

private:
    MaskCanvas *m_canvas;
    QLabel *m_status;
    QLabel *m_count;
    ReolinkClient *m_client;
    int m_maximum;
    void refreshCount();
};

} // namespace leolink
