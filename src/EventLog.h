// Persistent record of what the cameras saw.
#pragma once

#include <QDateTime>
#include <QList>
#include <QObject>
#include <QString>

namespace leolink {

/// One thing that happened, with whatever media was captured alongside it.
struct EventEntry {
    QDateTime time;
    QString cameraId;
    QString cameraName;
    QString type;          ///< "motion", "recording", "error" …
    QString message;
    QString videoPath;     ///< recording started for this event, if any
    QString imagePath;     ///< still captured at the moment of the event
};

/// Append-only event log, stored as JSON Lines.
///
/// One JSON object per line rather than one big array: appending never has to
/// rewrite the file, and a truncated final line costs one event instead of the
/// whole history.
///
/// Lives in ~/.local/share/leolink/events.jsonl.
class EventLog : public QObject {
    Q_OBJECT

public:
    explicit EventLog(QObject *parent = nullptr);

    static QString path();

    void append(const EventEntry &entry);

    /// Newest first. `cameraId` empty means every camera.
    QList<EventEntry> read(const QString &cameraId = QString(),
                           int limit = 2000) const;

    /// Drops entries older than `days`. Returns how many were removed.
    int prune(int days);

    void clear();

signals:
    void appended(const EventEntry &entry);
};

} // namespace leolink
