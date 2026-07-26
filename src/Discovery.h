// Find cameras on the local network.
#pragma once

#include <QHostAddress>
#include <QObject>
#include <QString>

class QUdpSocket;
class QTimer;

namespace leolink {

/// A camera answered the probe.
struct DiscoveredCamera {
    QString address;      ///< IP the reply came from
    QString name;         ///< model or scope name, if the device offered one
    QString manufacturer;
    QString serviceUrl;   ///< ONVIF device service
    bool looksReolink{false};
};

/// WS-Discovery over UDP multicast.
///
/// This is the ONVIF standard mechanism: a Probe goes to 239.255.255.250:3702
/// and conforming devices answer with a ProbeMatch describing themselves.
/// It finds any ONVIF camera, not only Reolink ones — which is a feature, and
/// why the result carries a flag rather than filtering silently.
///
/// A probe is not a port scan: nothing is connected to and nothing is tried
/// against a device that does not answer.
class Discovery : public QObject {
    Q_OBJECT

public:
    explicit Discovery(QObject *parent = nullptr);

    /// Sends the probe and collects replies for `milliseconds`.
    void start(int milliseconds = 4000);
    void stop();
    bool isRunning() const { return m_running; }

signals:
    void found(const DiscoveredCamera &camera);
    void finished(int count);
    void failed(const QString &reason);

private:
    void readReplies();

    QUdpSocket *m_socket{nullptr};
    QTimer *m_timer{nullptr};
    QStringList m_seen;
    bool m_running{false};
};

} // namespace leolink
