#include "Keyring.h"

#include "Log.h"

#ifdef LEOLINK_HAVE_KEYCHAIN
#include <qt6keychain/keychain.h>

#include <QEventLoop>
#include <QTimer>
#endif

namespace leolink {

namespace {

#ifdef LEOLINK_HAVE_KEYCHAIN
/// What the entries are filed under in the keyring.
const QString kService = QStringLiteral("leolink");

/// Long enough for a keyring that has to ask the user to unlock, short enough
/// that a broken one does not hold a stream start for ever.
constexpr int kTimeoutMs = 20000;

/// Runs one job and waits for it. Returns false if it failed or timed out.
template <typename Job>
bool runJob(Job &job, QString *error)
{
    QEventLoop loop;
    bool timedOut = false;

    QObject::connect(&job, &QKeychain::Job::finished, &loop, &QEventLoop::quit);
    QTimer::singleShot(kTimeoutMs, &loop, [&loop, &timedOut] {
        timedOut = true;
        loop.quit();
    });

    job.setAutoDelete(false);
    job.start();
    loop.exec();

    if (timedOut) {
        if (error)
            *error = QObject::tr("The keyring did not answer.");
        return false;
    }
    if (job.error() != QKeychain::NoError) {
        if (error)
            *error = job.errorString();
        return false;
    }
    return true;
}
#endif

} // namespace

namespace Keyring {

bool compiledIn()
{
#ifdef LEOLINK_HAVE_KEYCHAIN
    return true;
#else
    return false;
#endif
}

bool available()
{
#ifdef LEOLINK_HAVE_KEYCHAIN
    // Asked by reading an entry that is not expected to exist. A keyring that
    // is there answers "no such entry"; one that is not there, or is locked
    // with nobody to unlock it, says so differently — and that difference is
    // the whole question.
    QKeychain::ReadPasswordJob job(kService);
    job.setAutoDelete(false);
    job.setKey(QStringLiteral("leolink-probe"));

    QEventLoop loop;
    QObject::connect(&job, &QKeychain::Job::finished, &loop, &QEventLoop::quit);
    QTimer::singleShot(kTimeoutMs, &loop, &QEventLoop::quit);
    job.start();
    loop.exec();

    const bool ok = job.error() == QKeychain::NoError ||
                    job.error() == QKeychain::EntryNotFound;
    if (!ok) {
        LEO_DEBUG(App, QString(),
                  QStringLiteral("No keyring available: %1").arg(job.errorString()));
    }
    return ok;
#else
    return false;
#endif
}

QString read(const QString &key, QString *error)
{
#ifdef LEOLINK_HAVE_KEYCHAIN
    QKeychain::ReadPasswordJob job(kService);
    job.setKey(key);
    if (!runJob(job, error)) {
        // An entry that is not there is not a failure to report: a camera that
        // has never had a password saved is an ordinary state.
        if (job.error() == QKeychain::EntryNotFound && error)
            error->clear();
        return {};
    }
    return job.textData();
#else
    Q_UNUSED(key);
    if (error)
        *error = QObject::tr("This build has no keyring support.");
    return {};
#endif
}

bool write(const QString &key, const QString &secret, QString *error)
{
#ifdef LEOLINK_HAVE_KEYCHAIN
    QKeychain::WritePasswordJob job(kService);
    job.setKey(key);
    job.setTextData(secret);
    return runJob(job, error);
#else
    Q_UNUSED(key);
    Q_UNUSED(secret);
    if (error)
        *error = QObject::tr("This build has no keyring support.");
    return false;
#endif
}

bool remove(const QString &key, QString *error)
{
#ifdef LEOLINK_HAVE_KEYCHAIN
    QKeychain::DeletePasswordJob job(kService);
    job.setKey(key);
    if (runJob(job, error))
        return true;
    if (job.error() == QKeychain::EntryNotFound) {
        if (error)
            error->clear();
        return true;
    }
    return false;
#else
    Q_UNUSED(key);
    if (error)
        *error = QObject::tr("This build has no keyring support.");
    return false;
#endif
}

QString keyForCamera(const QString &cameraId)
{
    return QStringLiteral("camera/%1").arg(cameraId);
}

} // namespace Keyring
} // namespace leolink
