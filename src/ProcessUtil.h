// Shared handling for the ffmpeg helpers leolink starts.
#pragma once

#include <csignal>

#include <QProcess>

#ifdef Q_OS_LINUX
#include <sys/prctl.h>
#endif

namespace leolink {

/// Ties a child process's life to this one.
///
/// leolink runs ffmpeg for recording and for both detectors. Qt does not kill
/// child processes when the parent goes away, so a crash — or a plain `kill` —
/// used to leave them running. Each orphan keeps holding an RTSP session, and
/// these cameras allow only a handful: after a few restarts the picture starts
/// stalling and breaking into green blocks, with nothing in the application to
/// suggest why.
///
/// PR_SET_PDEATHSIG has the kernel send SIGKILL to the child the moment the
/// parent dies, whatever the parent died of. Linux only; elsewhere the ordinary
/// destructors remain the only cleanup, which is correct for a clean exit.
inline void dieWithParent(QProcess *process)
{
#ifdef Q_OS_LINUX
    process->setChildProcessModifier([] {
        ::prctl(PR_SET_PDEATHSIG, SIGKILL);
        // Between fork and prctl the parent may already have gone; that window
        // would leave exactly the orphan this is meant to prevent.
        if (::getppid() == 1)
            ::raise(SIGKILL);
    });
#else
    Q_UNUSED(process)
#endif
}

} // namespace leolink
