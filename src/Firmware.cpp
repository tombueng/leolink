#include "Firmware.h"

#include <QCoreApplication>
#include <QFileInfo>
#include <QRegularExpression>

namespace leolink::firmware {

namespace {

/// The first four bytes of every package seen: E1 and E1 Pro, 2025.
constexpr char kPakMagic[4] = {'\x13', '\x59', '\x72', '\x32'};

/// A package is some megabytes, never a few kilobytes. The upper limit is
/// kMaxPakBytes, in the header, which the dialog reads no more than.
constexpr qsizetype kMinPakBytes = 1 * 1024 * 1024;

QString tr(const char *text)
{
    return QCoreApplication::translate("leolink::firmware", text);
}

} // namespace

PakName parsePakName(const QString &fileName)
{
    static const QRegularExpression re(
        QStringLiteral("^([A-Za-z0-9_]+)\\.(\\d+)_(\\d+)\\..*\\.pak$"),
        QRegularExpression::CaseInsensitiveOption);
    const auto m = re.match(QFileInfo(fileName).fileName());
    if (!m.hasMatch())
        return {};
    return {m.captured(1), m.captured(2).toInt(), m.captured(3)};
}

int buildOf(const QString &firmVer)
{
    static const QRegularExpression re(QStringLiteral("^v?\\d+\\.\\d+\\.\\d+\\.(\\d+)"));
    const auto m = re.match(firmVer.trimmed());
    return m.hasMatch() ? m.captured(1).toInt() : 0;
}

QString refusal(const QString &fileName, const QByteArray &data,
                const QString &hardVer, const QString &firmVer)
{
    const PakName pak = parsePakName(fileName);
    if (!pak.valid())
        return tr("This is not named like a Reolink firmware package "
                  "(board.build_date…pak). Use the .pak from inside the zip "
                  "Reolink's download centre gives.");
    if (data.size() < kMinPakBytes || data.size() > kMaxPakBytes ||
        !data.startsWith(QByteArray::fromRawData(kPakMagic, 4)))
        return tr("This file does not look like a Reolink firmware package.");
    if (hardVer.isEmpty())
        return tr("The camera has not said which board it has, so no package "
                  "can be checked against it.");
    if (pak.board.compare(hardVer, Qt::CaseInsensitive) != 0)
        return tr("This package is for %1, and the camera is %2. Installing "
                  "firmware for another board can leave a camera that no "
                  "longer starts.").arg(pak.board, hardVer);
    const int installed = buildOf(firmVer);
    if (installed > 0 && pak.build == installed)
        return tr("Build %1 is already installed.").arg(pak.build);
    if (installed > 0 && pak.build < installed)
        return tr("Build %1 is older than the installed %2. leolink only "
                  "installs newer firmware.").arg(pak.build).arg(installed);
    return {};
}

} // namespace leolink::firmware
