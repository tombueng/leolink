// Reolink CGI API (port 80/443) — login, device info, snapshots.
#pragma once

#include <QDateTime>
#include <QMap>
#include <QJsonArray>
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
    ~ReolinkClient() override;

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

    /// Restarts the camera. It drops off the network for a minute or so and
    /// comes back by itself; there is no confirmation beyond the command being
    /// accepted, because the camera stops answering immediately afterwards.
    void reboot();

    /// Wi-Fi strength, 0…4. Cameras on Ethernet answer with an error, which is
    /// reported as such rather than as a strength of zero.
    void fetchWifiSignal();
    /// Link type, addresses, SSID — everything the network tab shows.
    void fetchNetworkInfo();

    /// Asks the camera which networks it can see. The camera does the scanning
    /// — this computer's own Wi-Fi is irrelevant, and often a different room.
    void scanWifi();
    /// Joins a network. The camera tests the credentials before committing, so
    /// a wrong password fails here rather than taking the camera off the air.
    void applyWifi(const QString &ssid, const QString &password);

    /// Makes the camera try its own e-mail or FTP settings and report back.
    /// Testing from here would prove nothing — the camera is the one that has
    /// to reach the server, and it may sit on a different network.
    void testEmail();
    void testFtp();

    /// CPU and memory load inside the camera. A device running hot drops
    /// frames and stops answering, and nothing else reveals that.
    void fetchPerformance();

    void checkFirmware();
    void upgradeFirmware();

    /// Erases the SD card. Irreversible.
    void formatStorage();

    /// Asks the camera which of a list of commands its firmware knows.
    ///
    /// Reolink firmware varies enormously between models and versions, and the
    /// only honest way to find out what a device supports is to ask it. This
    /// turns that into something a user can run and paste into a bug report —
    /// which is how support for hardware nobody here owns gets written.
    void probeCommands(const QStringList &commands);

    void fetchUsers();
    void addUser(const QString &name, const QString &password,
                 const QString &level);
    void deleteUser(const QString &name);
    void changePassword(const QString &name, const QString &password);

    bool hasSession() const { return !m_token.isEmpty(); }

    /// The camera's own code for the failure just reported. -9 and -26 mean
    /// "this model has not got that", which is not an error worth showing
    /// anyone; everything else is.
    int lastErrorCode() const { return m_lastErrorCode; }
    static bool meansUnsupported(int rspCode)
    {
        return rspCode == -9 || rspCode == -26;
    }

    static QString describeError(int rspCode);

signals:
    void testSucceeded(const QString &summary);
    void testFailed(const QString &reason);
    void deviceInfoReady(const QJsonObject &info);
    /// `value` is what is set now, `ranges` what may be set.
    void sectionReady(const QString &command, const QJsonObject &value,
                      const QJsonObject &ranges);
    void sectionApplied(const QString &command);
    void rebootAccepted();
    void wifiSignalReady(int strength);
    /// "Wifi", "LAN", "3G"/"4G" — whatever the camera calls its active link.
    void linkTypeReady(const QString &activeLink);
    /// Merged from GetLocalLink, GetWifi and GetNetPort.
    void networkInfoReady(const QJsonObject &info);
    /// Each entry has ssid, signal and encryption.
    void wifiNetworksReady(const QJsonArray &networks);
    void wifiApplied();
    void testSucceededWith(const QString &what);
    void performanceReady(const QJsonObject &info);
    /// A read-out that has its own place on screen could not be fetched.
    /// `what` names the panel — "performance", "users", "firmware" — so the
    /// reason lands where the user is looking rather than in a status line
    /// they have already looked away from. Without this a panel that failed
    /// simply sat at "Reading…" for ever, which reads as the program having
    /// hung.
    void readoutFailed(const QString &what, const QString &reason);
    void firmwareInfo(const QString &text, bool updateAvailable);
    /// command → what the camera said: empty for "supported", otherwise the
    /// reason it gave.
    void commandsProbed(const QMap<QString, QString> &results);
    void usersReady(const QJsonArray &users);
    void usersChanged();
    void storageFormatted();
    void recordingsReady(const QList<Recording> &recordings);
    void snapshotReady(const QByteArray &jpeg);
    void failed(const QString &reason);

private:
    QUrl apiUrl(const QString &command, bool withToken = true) const;
    void post(const QString &command, const QJsonObject &param,
              const std::function<void(const QJsonObject &value)> &onOk,
              const std::function<void(const QString &error)> &onErr,
              int action = 0, bool mayRetry = true);
    /// As post(), but hands the whole reply entry over rather than only its
    /// `value` — needed wherever the `range` document matters. Everything
    /// shares this one path so that logging, the retry when a session expires
    /// and the recorded error code apply everywhere.
    void postRaw(const QString &command, const QJsonObject &param,
                 const std::function<void(const QJsonObject &entry)> &onOk,
                 const std::function<void(const QString &error)> &onErr,
                 int action = 0, bool mayRetry = true);
    /// Actually puts a request on the wire. Only pump() calls this.
    void sendNow(const QString &command, const QJsonObject &param,
                 const std::function<void(const QJsonObject &entry)> &onOk,
                 const std::function<void(const QString &error)> &onErr,
                 int action, bool mayRetry);
    /// Hands the session back. Cameras allow only a handful at once, and one
    /// that is merely dropped stays occupied until its lease runs out.
    void releaseSession();
    void login(const std::function<void()> &then,
               const std::function<void(const QString &)> &onErr);

    QNetworkAccessManager *m_net;
    CameraConfig m_camera;
    QString m_token;
    int m_lastErrorCode{0};

    /// Requests that arrived while a login was still in flight. A camera hands
    /// out a session per Login, so exactly one may ever be outstanding.
    struct PendingLogin {
        std::function<void()> then;
        std::function<void(const QString &)> onError;
    };
    QList<PendingLogin> m_waiting;
    bool m_loggingIn{false};

    /// Requests waiting for a slot, and how many are on the wire.
    ///
    /// The settings dialog asks for twenty-odd sections at once. On its own
    /// the camera copes with that; with a second leolink also talking to it,
    /// it starts answering "please login first" to a valid token and the whole
    /// dialog comes up empty. Measured, all four combinations:
    ///
    ///     second instance   unthrottled   throttled
    ///     running           storms of -6  none
    ///     not running       none          none
    ///
    /// So the second instance is what breaks it and this is what survives it.
    /// Trickling a few at a time costs nothing noticeable — the dialog fills in
    /// a fraction of a second either way — and being gentle with a small
    /// embedded device is not a bad default in any case.
    QList<std::function<void()>> m_queue;
    int m_inFlight{0};
    static constexpr int kMaxInFlight = 4;
    void pump();
};

} // namespace leolink
