// Checks on a firmware package before it goes anywhere near a camera.
#pragma once

#include <QByteArray>
#include <QString>

namespace leolink::firmware {

/// The largest file taken for a package: a boot loader, a kernel and a root
/// file system come to some megabytes, never anything like a hundred.
constexpr qsizetype kMaxPakBytes = 64 * 1024 * 1024;

/// What a Reolink package's name says about it.
///
/// Reolink names every package after the board it is for, then the build:
/// `IPC_566SD54MP.5112_2507081475.E1-Pro.4MP.WIFI7.PT.REOLINK.pak`. The
/// contents say neither — past a magic number and a partition table it is
/// compressed — so the name is the only thing that ties a file to a camera.
struct PakName {
    QString board;   ///< "IPC_566SD54MP", as GetDevInfo's hardVer has it
    int build{0};    ///< 5112
    QString date;    ///< "2507081475"
    bool valid() const { return !board.isEmpty() && build > 0; }
};

PakName parsePakName(const QString &fileName);

/// The build out of the version a camera reports, "v3.1.0.3149_2401092478" →
/// 3149, or 0.
int buildOf(const QString &firmVer);

/// Why `data`, called `fileName`, must not be sent to a camera reporting
/// `hardVer` and `firmVer`, or an empty string if nothing stands in the way.
///
/// The camera checks the image too, but a board mismatch caught there is one
/// caught after the flash has started, and these are Wi-Fi cameras on a shelf.
/// So a package goes only to the board its name gives, only when its build is
/// newer than the one installed, and only when it starts the way every
/// Reolink package does.
QString refusal(const QString &fileName, const QByteArray &data,
                const QString &hardVer, const QString &firmVer);

} // namespace leolink::firmware
