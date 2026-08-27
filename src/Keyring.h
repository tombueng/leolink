// Camera passwords in the desktop's own secret store, rather than in the file.
#pragma once

#include <QString>

namespace leolink {

/// The system keyring — Secret Service on Linux, which is what GNOME Keyring
/// and KWallet both answer to.
///
/// Optional at build time: without qtkeychain the functions below compile to
/// "not available", the setting is not offered, and nothing else changes. That
/// is deliberate. leolink is meant to come up on a wall display with nobody
/// sitting at it, and a keyring is usually locked until somebody logs in — so
/// the file, mode 600, stays the default and stays supported.
///
/// Every call blocks until the keyring answers or the wait runs out. That
/// matches what it replaces: CameraConfig::secret() already runs a password
/// command synchronously, for the same reason — it is wanted once, when a
/// stream starts, and an answer that arrives later is of no use to the caller.
namespace Keyring {

/// Whether this build can talk to a keyring at all.
bool compiledIn();
/// Whether one actually answers. Costs a round trip, so ask once and remember.
bool available();

/// The stored secret, or empty. `error` is filled in only when something went
/// wrong — an entry that is simply not there leaves it empty.
QString read(const QString &key, QString *error = nullptr);
bool write(const QString &key, const QString &secret, QString *error = nullptr);
/// Removing an entry that was never there counts as success.
bool remove(const QString &key, QString *error = nullptr);

/// What a camera's entry is called. The id rather than the name, so renaming a
/// camera does not lose its password.
QString keyForCamera(const QString &cameraId);

} // namespace Keyring
} // namespace leolink
