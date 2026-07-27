// Connection strength, drawn the way each kind of link is normally shown.
#pragma once

#include <QWidget>

namespace leolink {

/// Signal strength for a camera's wireless link.
///
/// Wi-Fi is drawn as the familiar fan of arcs, mobile data as ascending bars.
/// Using bars for both would be wrong twice over: it looks like a phone signal
/// where there is none, and it hides the one thing worth knowing at a glance
/// on a camera that can fall back to mobile data — which link it is on right
/// now, and whether that is costing money.
///
/// Reolink reports strength as a small integer. The API claims a range of
/// 0…255; every value seen from hardware is 0…4, matching the bars the
/// camera's own interface draws. Higher values are clamped rather than scaled,
/// because scaling a number the firmware never sends would invent precision.
class SignalIndicator : public QWidget {
    Q_OBJECT

public:
    enum class Link {
        Unknown,   ///< not asked yet
        Wired,     ///< nothing to show; the widget hides itself
        WiFi,
        Cellular,
    };
    Q_ENUM(Link)

    static constexpr int kLevels = 4;

    explicit SignalIndicator(QWidget *parent = nullptr);

    void setLink(Link link);
    Link link() const { return m_link; }

    /// 0…4, or negative for "not known yet".
    void setStrength(int strength);
    int strength() const { return m_strength; }

protected:
    void paintEvent(QPaintEvent *event) override;
    QSize sizeHint() const override;

private:
    void paintWiFi(QPainter &painter, const QColor &active,
                   const QColor &inactive) const;
    void paintCellular(QPainter &painter, const QColor &active,
                       const QColor &inactive) const;
    void refreshToolTip();

    Link m_link{Link::Unknown};
    int m_strength{-1};
};

} // namespace leolink
