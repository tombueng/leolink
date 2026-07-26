#include "EventLog.h"

#include <QDir>
#include <QFile>
#include <QFileInfo>
#include <QJsonDocument>
#include <QJsonObject>
#include <QSaveFile>
#include <QStandardPaths>
#include <QTextStream>

namespace leolink {

namespace {

QJsonObject toJson(const EventEntry &e)
{
    QJsonObject o;
    o[QStringLiteral("time")] = e.time.toString(Qt::ISODate);
    o[QStringLiteral("cameraId")] = e.cameraId;
    o[QStringLiteral("cameraName")] = e.cameraName;
    o[QStringLiteral("type")] = e.type;
    o[QStringLiteral("message")] = e.message;
    o[QStringLiteral("videoPath")] = e.videoPath;
    o[QStringLiteral("imagePath")] = e.imagePath;
    return o;
}

EventEntry fromJson(const QJsonObject &o)
{
    EventEntry e;
    e.time = QDateTime::fromString(o.value(QStringLiteral("time")).toString(),
                                   Qt::ISODate);
    e.cameraId = o.value(QStringLiteral("cameraId")).toString();
    e.cameraName = o.value(QStringLiteral("cameraName")).toString();
    e.type = o.value(QStringLiteral("type")).toString();
    e.message = o.value(QStringLiteral("message")).toString();
    e.videoPath = o.value(QStringLiteral("videoPath")).toString();
    e.imagePath = o.value(QStringLiteral("imagePath")).toString();
    return e;
}

} // namespace

EventLog::EventLog(QObject *parent) : QObject(parent) {}

QString EventLog::path()
{
    const QString dir =
        QStandardPaths::writableLocation(QStandardPaths::AppDataLocation);
    return dir + QStringLiteral("/events.jsonl");
}

void EventLog::append(const EventEntry &entry)
{
    const QString file = path();
    QDir().mkpath(QFileInfo(file).absolutePath());

    QFile out(file);
    if (!out.open(QIODevice::Append | QIODevice::Text))
        return;
    out.write(QJsonDocument(toJson(entry)).toJson(QJsonDocument::Compact));
    out.write("\n");
    out.close();

    emit appended(entry);
}

QList<EventEntry> EventLog::read(const QString &cameraId, int limit) const
{
    QList<EventEntry> entries;

    QFile in(path());
    if (!in.open(QIODevice::ReadOnly | QIODevice::Text))
        return entries;

    QTextStream stream(&in);
    while (!stream.atEnd()) {
        const QString line = stream.readLine().trimmed();
        if (line.isEmpty())
            continue;
        const QJsonDocument doc = QJsonDocument::fromJson(line.toUtf8());
        if (!doc.isObject())
            continue;   // a partially written last line is not fatal
        const EventEntry e = fromJson(doc.object());
        if (cameraId.isEmpty() || e.cameraId == cameraId)
            entries.append(e);
    }

    // Newest first, and only as many as asked for.
    std::reverse(entries.begin(), entries.end());
    if (limit > 0 && entries.size() > limit)
        entries = entries.mid(0, limit);
    return entries;
}

int EventLog::prune(int days)
{
    if (days <= 0)
        return 0;

    const QDateTime cutoff = QDateTime::currentDateTime().addDays(-days);
    QFile in(path());
    if (!in.open(QIODevice::ReadOnly | QIODevice::Text))
        return 0;

    QStringList keep;
    int removed = 0;
    QTextStream stream(&in);
    while (!stream.atEnd()) {
        const QString line = stream.readLine();
        const QJsonDocument doc = QJsonDocument::fromJson(line.trimmed().toUtf8());
        if (!doc.isObject())
            continue;
        if (fromJson(doc.object()).time >= cutoff)
            keep.append(line);
        else
            ++removed;
    }
    in.close();

    if (removed == 0)
        return 0;

    QSaveFile out(path());
    if (!out.open(QIODevice::WriteOnly | QIODevice::Text))
        return 0;
    for (const QString &line : std::as_const(keep)) {
        out.write(line.toUtf8());
        out.write("\n");
    }
    out.commit();
    return removed;
}

void EventLog::clear()
{
    QFile::remove(path());
}

} // namespace leolink
