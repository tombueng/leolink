// Reolink CGI API (port 80/443) — login, device info, snapshots.
#pragma once

#include <QDateTime>
#include <QJsonObject>
#include <QObject>
#include <QString>

#include "Config.h"

class QNetworkAccessManager;
class QNetworkReply;

namespace leolink {

/// Talks to /cgi-bin/api.cgi.
///
/// The protocol is a JSON array in, JSON array out. A successful entry has
/// `code == 0`; failures carry `error.rspCode`, and two of those matter:
///   -9   the firmware does not know this command
///   -26  the command exists but this hardware cannot do it (no PTZ, no speaker)
/// Both mean "hide the feature", never "retry".
///
/// See docs/protocol.md for the full command surface.
/// One recording held on the camera's SD card.
struct Recording {
    QString name;        ///< the camera's own file name, used to fetch it
    QDateTime start;
    QDateTime end;
    qint64 size{0};
    QString streamType;  ///< "main" or "sub"

    qint64 durationSeconds() const {
        return start.isValid() && end.isValid() ? start.secsTo(end) : 0;
    }
};

class ReolinkClient : public QObject {
    Q_OBJECT

public:
    explicit ReolinkClient(QObject *parent = nullptr);

    void setCamera(const CameraConfig &camera);
    const CameraConfig &camera() const { return m_camera; }

    /// Logs in and reports what the camera is. Used by the settings dialog's
    /// "Test" button, so it reports failures in human terms.
    void testConnection();

    void fetchDeviceInfo();
    void fetchSnapshot();

    /// Reads a configuration section together with the values the camera will
    /// accept. The camera answers action=1 with a `range` document listing
    /// every valid resolution, bitrate, frame rate and profile — which is why
    /// leolink never hardcodes those lists.
    void fetchSection(const QString &command, const QJsonObject &param = {});

    /// Writes a section back. Set* expects the same shape the matching Get*
    /// returned, so the pattern is read, edit, write.
    void applySection(const QString &command, const QJsonObject &param);

    /// Lists what is on the SD card between two times.
    ///
    /// Cameras with no card answer -17, which is reported as such rather than
    /// as a mysterious failure — it is the single most common reason this
    /// returns nothing.
    void searchRecordings(const QDateTime &from, const QDateTime &to,
                          const QString &streamType = QStringLiteral("main"),
                          int channel = 0);

    /// URL that streams a recording straight from the camera, for handing to a
    /// player. Requires a valid session, so call after any other request.
    QUrl playbackUrl(const Recording &recording) const;
    /// URL that downloads it as a file.
    QUrl downloadUrl(const Recording &recording) const;

    bool hasSession() const { return !m_token.isEmpty(); }

    static QString describeError(int rspCode);

signals:
    void testSucceeded(const QString &summary);
    void testFailed(const QString &reason);
    void deviceInfoReady(const QJsonObject &info);
    /// `value` is what is set now, `ranges` what may be set.
    void sectionReady(const QString &command, const QJsonObject &value,
                      const QJsonObject &ranges);
    void sectionApplied(const QString &command);
    void recordingsReady(const QList<Recording> &recordings);
    void snapshotReady(const QByteArray &jpeg);
    void failed(const QString &reason);

private:
    QUrl apiUrl(const QString &command, bool withToken = true) const;
    void post(const QString &command, const QJsonObject &param,
              const std::function<void(const QJsonObject &value)> &onOk,
              const std::function<void(const QString &error)> &onErr,
              int action = 0);
    void login(const std::function<void()> &then,
               const std::function<void(const QString &)> &onErr);

    QNetworkAccessManager *m_net;
    CameraConfig m_camera;
    QString m_token;
};

} // namespace leolink
