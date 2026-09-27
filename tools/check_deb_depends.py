#!/usr/bin/env python3
"""Check that the .deb asks for everything the program actually loads.

CMakeLists.txt writes the Debian dependencies out by hand instead of letting
dpkg-shlibdeps read them off the build machine, because shlibdeps answers with
the package name each library has *there* — and on Ubuntu 24.04, where the
release is built, five of the Qt packages still carry the 64-bit time_t
transition's `t64` suffix that 25.10 and later have dropped. A package built on
24.04 therefore could not be configured on a current Ubuntu at all.

What a hand-written list loses is the guarantee that it is complete. This puts
that back: every library the binary links, and the icon engine it loads by name
at run time, is mapped to the package that owns it here, and anything not
covered by the list is an error.

Deliberately not checked: the version each dependency is pinned at. Those are
the minimum Qt this project builds against (6.4), not what happens to be
installed on the machine running this — comparing the two would fail on every
distribution newer than the one the release targets.

    python3 tools/check_deb_depends.py build/leolink-0.2.0-Linux.deb build/leolink

Needs dpkg, and says so and stops rather than failing, anywhere else.
"""

from __future__ import annotations

import re
import shutil
import subprocess
import sys
from pathlib import Path

# Qt's packages gained a `t64` suffix in the time_t transition and are losing it
# again, so a name here and a name on the machine may differ by exactly that.
T64 = re.compile(r"t64$")

# Loaded by name rather than linked: QIcon renders the application icon, the
# tray icon and every themed menu icon through this, and a package that forgets
# it simply has no icons. The one dependency no tool could derive from the ELF
# header, and therefore the one most worth checking by hand.
RUNTIME_PLUGINS = ["qt6/plugins/iconengines/libqsvgicon.so"]


def run(*cmd: str) -> str:
    return subprocess.run(cmd, capture_output=True, text=True, check=True).stdout


def declared(deb: Path) -> list[list[str]]:
    """The Depends field, as a list of alternative groups of package names."""
    field = run("dpkg-deb", "-f", str(deb), "Depends").strip()
    groups = []
    for clause in field.split(","):
        names = []
        for alternative in clause.split("|"):
            name = alternative.strip().split(" ", 1)[0]
            if name:
                names.append(name)
        if names:
            groups.append(names)
    return groups


def linked_libraries(binary: Path) -> list[str]:
    """Absolute paths of the libraries the binary names for itself.

    Its own NEEDED entries, not everything ldd reaches: a package declares what
    it links against and leaves each of those to declare its own, which is why
    this list is ten libraries and not the three hundred underneath them.
    """
    sonames = [line.split()[-1]
               for line in run("objdump", "-p", str(binary)).splitlines()
               if "NEEDED" in line.split()]

    # ldd is only the address book here: soname to the file it resolved to.
    resolved = {}
    for line in run("ldd", str(binary)).splitlines():
        if "=>" not in line:
            continue
        soname, path = (part.strip() for part in line.split("=>", 1))
        path = path.split(" ")[0]
        if path.startswith("/"):
            resolved[soname.split(" ")[0]] = path

    return [resolved[soname] for soname in sonames if soname in resolved]


def owner(path: str) -> str | None:
    """The package that ships a file, or None if nothing does."""
    try:
        out = run("dpkg-query", "-S", path)
    except subprocess.CalledProcessError:
        return None
    # "libqt6core6t64:amd64: /usr/lib/…" — first field, architecture dropped.
    return out.split(":", 1)[0].strip() or None


def plugin_paths(name: str) -> list[str]:
    """Where a Qt plugin could be, on whichever architecture this is."""
    roots = ["/usr/lib/x86_64-linux-gnu", "/usr/lib/aarch64-linux-gnu", "/usr/lib"]
    return [f"{root}/{name}" for root in roots]


def covered(package: str, groups: list[list[str]]) -> bool:
    """Is this package, by either of its two possible names, in the list?"""
    wanted = {package, T64.sub("", package), package + "t64"}
    return any(wanted & set(group) for group in groups)


def main(argv: list[str]) -> int:
    if len(argv) != 3:
        print(__doc__)
        return 2
    deb, binary = Path(argv[1]), Path(argv[2])

    for tool in ("dpkg-deb", "dpkg-query", "ldd"):
        if not shutil.which(tool):
            print(f"note: {tool} not found — this check needs dpkg, skipping")
            return 0
    for path in (deb, binary):
        if not path.exists():
            print(f"error: {path} does not exist")
            return 2

    groups = declared(deb)
    print(f"{deb.name} depends on {len(groups)} package(s):")
    for group in groups:
        print(f"   {' | '.join(group)}")

    missing: list[tuple[str, str]] = []
    checked = 0

    for library in linked_libraries(binary):
        package = owner(library)
        if package is None:
            # A library built here rather than installed — nothing to check it
            # against, and nothing a package could ask for either.
            continue
        checked += 1
        if not covered(package, groups):
            missing.append((package, library))

    for plugin in RUNTIME_PLUGINS:
        package = next(
            (p for p in (owner(path) for path in plugin_paths(plugin)) if p), None)
        if package is None:
            print(f"note: {plugin} is not installed here — cannot check it")
            continue
        checked += 1
        if not covered(package, groups):
            missing.append((package, plugin))

    print(f"\nchecked {checked} library / plugin package(s) against the list")

    if missing:
        print("\nnot covered by CPACK_DEBIAN_PACKAGE_DEPENDS in CMakeLists.txt:")
        for package, why in missing:
            print(f"   {package:<28} (needed for {why})")
        print("\nAdd it there, with both the plain and the t64 name as "
              "alternatives if Qt ships one.")
        return 1

    print("DEPENDENCIES OK")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
