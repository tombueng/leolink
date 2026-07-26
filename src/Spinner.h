// A small indeterminate progress indicator drawn with QPainter.
#pragma once

#include <QWidget>

class QTimer;

namespace leolink {

/// Rotating arc used while a camera is connecting.
///
/// Drawn rather than animated from image files: it scales to any tile size and
/// picks up the palette, so it never looks pasted on. The timer only runs while
/// the widget is visible — a wall of eight cameras should not keep repainting
/// spinners nobody is looking at.
class Spinner : public QWidget {
    Q_OBJECT

public:
    explicit Spinner(QWidget *parent = nullptr);

    void setText(const QString &text);
    QString text() const { return m_text; }

protected:
    void paintEvent(QPaintEvent *event) override;
    void showEvent(QShowEvent *event) override;
    void hideEvent(QHideEvent *event) override;

private:
    QTimer *m_timer;
    int m_angle{0};
    QString m_text;
};

} // namespace leolink
