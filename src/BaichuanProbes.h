// The command-line diagnostics that talk Baichuan: --baichuan-test,
// --baichuan-video, --baichuan-p2p, --baichuan-api and --baichuan-firmware.
#pragma once

#include <QString>

/// Each logs in, does one thing, prints what happened and returns an exit
/// status. Kept apart from the protocol and the session they exercise, which
/// leolink itself uses and which these only call.
namespace leolink {

/// `--baichuan-test <host>`: logs in and prints what the camera says it is.
int runBaichuanProbe(const QString &host, const QString &user,
                     const QString &password);

/// Connects, logs in, asks for video and reports what the container actually
/// contains — block magics, sizes, codec — writing the elementary stream to
/// `outputPath` so it can be checked with a decoder.
int runBaichuanVideoProbe(const QString &host, const QString &user,
                          const QString &password, const QString &outputPath,
                          int seconds);

/// P2P lookup by camera UID via Reolink's rendezvous servers.
///
/// **Not verified against hardware** — written from the protocol description
/// because the author has no P2P-capable camera. It reports every step so a
/// tester can see exactly where it stops. See the handbook.
int runP2PProbe(const QString &uid, const QString &user,
                const QString &password);

/// `--baichuan-api <host> <command> [json param]`: logs in, translates one
/// command and prints the entry as JSON.
int runBaichuanApiProbe(const QString &host, const QString &user,
                        const QString &password, const QString &command,
                        const QString &param);

/// `--baichuan-firmware <host> <file.pak> [--yes]`: checks the package against
/// the camera and, given `install`, sends it and waits for the camera to come
/// back reporting the new build. 0 when it has, or when the checks passed and
/// nothing was asked to be installed.
int runBaichuanFirmware(const QString &host, const QString &user,
                        const QString &password, const QString &pakPath,
                        bool install);

} // namespace leolink
