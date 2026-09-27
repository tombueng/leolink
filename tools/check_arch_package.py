#!/usr/bin/env python3
"""Check the Arch packaging against the project, and against the released file.

Three things have to agree and have no way of noticing when they stop:

* the version in CMakeLists.txt and the `pkgver` in the PKGBUILD,
* the PKGBUILD and the `.SRCINFO` beside it, which is a copy of its metadata
  that the AUR reads instead of the script and that nothing regenerates by
  itself,
* the `sha256sums` in the PKGBUILD and the tarball GitHub serves for that tag.

All three had drifted by 0.2.0: the checksum was still 0.1.1's, so every AUR
build failed verification, and the `.SRCINFO` still described 0.1.1 entirely.
Both were found by somebody building the package rather than by us.

    python3 tools/check_arch_package.py                 # metadata only
    python3 tools/check_arch_package.py --download      # and the released tarball
    python3 tools/check_arch_package.py --write-srcinfo # regenerate .SRCINFO

The download is skipped silently when there is no network and when the tag has
not been pushed yet — before a release there is nothing to compare against, and
a check that cannot run is not a failure.
"""

from __future__ import annotations

import argparse
import hashlib
import re
import subprocess
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PKGBUILD = ROOT / "packaging/arch/PKGBUILD"
SRCINFO = ROOT / "packaging/arch/.SRCINFO"
CMAKELISTS = ROOT / "CMakeLists.txt"

# Everything the .SRCINFO repeats from the PKGBUILD. Arrays are compared in
# order, because the AUR shows them in the order they are given.
# In makepkg's own order, so that a .SRCINFO written here and one written by
# makepkg --printsrcinfo on an Arch machine are the same file.
FIELDS = ["pkgdesc", "pkgver", "pkgrel", "url", "arch", "license", "makedepends",
          "depends", "optdepends", "source", "sha256sums"]
ARRAYS = {"license", "arch", "makedepends", "depends", "optdepends", "source",
          "sha256sums"}


def from_pkgbuild() -> dict[str, list[str]]:
    """Read the PKGBUILD by running it, which is the only way to read bash.

    Sourced rather than parsed: the values interpolate $pkgname and $pkgver, and
    a regular expression that got that right would be a bash implementation.
    """
    script = ["set -e", f'source "{PKGBUILD}"']
    for field in FIELDS:
        # One field per line, prefixed, so arrays and empty values both survive.
        script.append(f'for v in "${{{field}[@]}}"; do printf "{field}\\t%s\\n" "$v"; done')
    out = subprocess.run(["bash", "-c", "\n".join(script)],
                         capture_output=True, text=True, check=True).stdout

    values: dict[str, list[str]] = {field: [] for field in FIELDS}
    for line in out.splitlines():
        field, _, value = line.partition("\t")
        if field in values:
            values[field].append(value)
    return values


def from_srcinfo() -> dict[str, list[str]]:
    values: dict[str, list[str]] = {field: [] for field in FIELDS}
    for line in SRCINFO.read_text().splitlines():
        key, _, value = line.partition("=")
        key, value = key.strip(), value.strip()
        if key in values:
            values[key].append(value)
    return values


def as_srcinfo(pkgbuild: dict[str, list[str]]) -> str:
    """The same metadata in the form the AUR reads.

    makepkg --printsrcinfo does this on an Arch machine; this project is
    maintained on one that has no makepkg, which is how .SRCINFO came to sit at
    0.1.1 for a whole release.
    """
    lines = ["pkgbase = leolink"]
    for field in FIELDS:
        for value in pkgbuild[field]:
            lines.append(f"\t{field} = {value}")
    lines += ["", "pkgname = leolink", ""]
    return "\n".join(lines)


def project_version() -> str:
    text = CMAKELISTS.read_text()
    match = re.search(r"^\s*VERSION\s+(\d+\.\d+\.\d+)", text, re.MULTILINE)
    if not match:
        raise SystemExit("error: no VERSION in CMakeLists.txt")
    return match.group(1)


def released_tarball_sha256(url: str) -> str | None:
    try:
        with urllib.request.urlopen(url, timeout=60) as response:
            digest = hashlib.sha256()
            for block in iter(lambda: response.read(1 << 16), b""):
                digest.update(block)
            return digest.hexdigest()
    except urllib.error.HTTPError as error:
        if error.code == 404:
            print(f"note: {url} is not there yet — tag not pushed, skipping")
            return None
        print(f"note: could not fetch the tarball ({error}) — skipping")
        return None
    except OSError as error:
        print(f"note: could not fetch the tarball ({error}) — skipping")
        return None


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--download", action="store_true",
                        help="also check sha256sums against the released tarball")
    parser.add_argument("--write-srcinfo", action="store_true",
                        help="rewrite .SRCINFO from the PKGBUILD, as makepkg "
                             "--printsrcinfo would on an Arch machine")
    args = parser.parse_args()

    pkgbuild = from_pkgbuild()
    if args.write_srcinfo:
        SRCINFO.write_text(as_srcinfo(pkgbuild))
        print(f"wrote {SRCINFO.relative_to(ROOT)}")

    srcinfo = from_srcinfo()
    problems: list[str] = []

    version = project_version()
    if pkgbuild["pkgver"] != [version]:
        problems.append(f"PKGBUILD pkgver is {pkgbuild['pkgver']}, "
                        f"the project is {version}")

    for field in FIELDS:
        if pkgbuild[field] != srcinfo[field]:
            problems.append(f".SRCINFO {field} says {srcinfo[field] or '(nothing)'}, "
                            f"the PKGBUILD says {pkgbuild[field] or '(nothing)'}")

    print(f"PKGBUILD: leolink {'.'.join(pkgbuild['pkgver'])}-"
          f"{''.join(pkgbuild['pkgrel'])}, {len(pkgbuild['depends'])} dependencies")

    if args.download and pkgbuild["source"] and pkgbuild["sha256sums"]:
        url = pkgbuild["source"][0].split("::", 1)[-1]
        actual = released_tarball_sha256(url)
        if actual is not None:
            declared = pkgbuild["sha256sums"][0]
            print(f"tarball : {url}\n          {actual}")
            if declared == "SKIP":
                print("          (not checked: sha256sums is SKIP)")
            elif actual != declared:
                problems.append(f"sha256sums says {declared}, the tarball is {actual}")

    if problems:
        print("\nthe Arch packaging does not match:")
        for problem in problems:
            print(f"   {problem}")
        print("\nUpdate packaging/arch/PKGBUILD, then regenerate .SRCINFO with\n"
              "   makepkg --printsrcinfo > .SRCINFO")
        return 1

    print("ARCH PACKAGING OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
