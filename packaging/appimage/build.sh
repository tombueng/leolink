#!/bin/sh
# Turn an installed leolink into an AppImage that runs on any distribution.
#
#     sudo cmake --install build      # leolink in /usr, as a package would be
#     packaging/appimage/build.sh     # leaves leolink-x86_64.AppImage here
#
# The AppImage brings its own C library. Built on a current Ubuntu, an AppImage
# that used the host's glibc ran nowhere older than that Ubuntu, and building
# on an older one is no way out: its Qt is too old for leolink, and its mpv
# older than the one leolink is tested against. So quick-sharun gathers
# everything leolink loads, glibc and the loader included, with Mesa for the
# picture and PipeWire for the sound; it also runs leolink for a few seconds
# under strace to find what is only ever dlopen()ed, which is how mpv reaches
# its decoders and audio outputs.
#
# quick-sharun's own packer makes DwarFS images, which the AppImage catalog
# does not take, so the AppDir is packed by appimagetool as SquashFS.
#
# quick-sharun bundles only what is installed, so the build machine needs more
# than leolink does to build: the VA-API drivers, without which libva reaches
# for the host's own (from another Mesa, which crashes the process), PipeWire's
# modules and client configuration, the ALSA plugins, and Qt's Wayland plugin.
# The workflows list the packages. Besides those: wget, strace, xvfb-run,
# file, patchelf and rsvg-convert.

set -eu

root=$(cd "$(dirname "$0")/../.." && pwd)
out=$PWD
work=${WORK:-$PWD/appimage-work}
app_id=io.github.tombueng.leolink
arch=$(uname -m)

# quick-sharun is pinned: it decides what every AppImage user runs, and it
# changes often. appimagetool only packs the result.
quick_sharun=https://raw.githubusercontent.com/pkgforge-dev/Anylinux-AppImages/75237dbb2e50a7b1cd11c2c3711fb39718f49822/useful-tools/quick-sharun.sh
appimagetool=https://github.com/AppImage/appimagetool/releases/download/continuous/appimagetool-$arch.AppImage

rm -rf "$work"
mkdir -p "$work"
cd "$work"

# The catalog wants a PNG it can use as a thumbnail.
rsvg-convert -w 256 -h 256 "$root/resources/icons/leolink.svg" -o "$app_id.png"

wget -q "$quick_sharun" -O quick-sharun
wget -q "$appimagetool" -O appimagetool
chmod +x quick-sharun appimagetool

export APPDIR="$work/AppDir"
export DESKTOP=/usr/share/applications/$app_id.desktop
export ICON="$work/$app_id.png"
export DEPLOY_QT=1
export DEPLOY_OPENGL=1
export DEPLOY_PIPEWIRE=1
export DEPLOY_PULSE=1
export DEPLOY_GLIBC=1
./quick-sharun /usr/bin/leolink

# The bundled PipeWire client would read its configuration from the host's
# /usr/share/pipewire, which belongs to whatever PipeWire the host has: 1.6
# no longer ships the client-rt.conf that this one asks for, and without it
# the sound falls back from PipeWire to its PulseAudio interface.
echo 'PIPEWIRE_CONFIG_DIR=${SHARUN_DIR}/share/pipewire' >> "$APPDIR/.env"

# The metainfo, which quick-sharun does not look for. The translations need
# nothing: they are compiled into the binary.
mkdir -p "$APPDIR/share/metainfo"
cp /usr/share/metainfo/$app_id.metainfo.xml "$APPDIR/share/metainfo/"

ARCH=$arch ./appimagetool --appimage-extract-and-run --no-appstream \
    "$APPDIR" "$out/leolink-$arch.AppImage"
