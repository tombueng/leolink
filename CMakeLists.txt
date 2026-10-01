cmake_minimum_required(VERSION 3.21)

project(leolink
    VERSION 0.2.3
    DESCRIPTION "Native Linux client for Reolink cameras"
    HOMEPAGE_URL "https://github.com/tombueng/leolink"
    LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

set(APP_ID "io.github.tombueng.leolink" CACHE STRING "Reverse-DNS application id")

include(GNUInstallDirs)

# ── Dependencies ────────────────────────────────────────────────────────────
# Widgets  – UI.  Network – CGI/ONVIF over HTTP.  Xml – ONVIF SOAP replies.
# Svg      – the application icon is vector art, rendered at any size.
# LinguistTools supplies qt_add_translations (lupdate/lrelease at build time).
find_package(Qt6 6.4 REQUIRED COMPONENTS Widgets Network Xml Svg OpenGLWidgets LinguistTools)

# libmpv does the heavy lifting: RTSP, hardware decoding, audio, volume.
# Reimplementing that on top of raw FFmpeg would buy us nothing.
find_package(PkgConfig REQUIRED)
pkg_check_modules(MPV REQUIRED IMPORTED_TARGET mpv)

qt_standard_project_setup()

# ── Application ─────────────────────────────────────────────────────────────
qt_add_executable(leolink
    src/main.cpp
    src/MainWindow.cpp        src/MainWindow.h
    src/VideoTile.cpp         src/VideoTile.h
    src/Config.cpp            src/Config.h
    src/ReolinkClient.cpp     src/ReolinkClient.h
    src/MotionWatcher.cpp     src/MotionWatcher.h
    src/SettingsDialog.cpp    src/SettingsDialog.h
    src/PreferencesDialog.cpp src/PreferencesDialog.h
    src/ActionEditor.cpp      src/ActionEditor.h
    src/CameraSettingsDialog.cpp src/CameraSettingsDialog.h
    src/EventLog.cpp          src/EventLog.h
    src/EventLogDialog.cpp    src/EventLogDialog.h
    src/Discovery.cpp         src/Discovery.h
    src/Spinner.cpp           src/Spinner.h
    src/SignalIndicator.cpp   src/SignalIndicator.h
    src/MpvWidget.cpp         src/MpvWidget.h
    src/SectionEditor.cpp     src/SectionEditor.h
    src/EventActions.cpp      src/EventActions.h
    src/MqttPublisher.cpp     src/MqttPublisher.h
    src/SoundPlayer.cpp       src/SoundPlayer.h
    src/Recorder.cpp          src/Recorder.h
    src/SegmentBuffer.cpp     src/SegmentBuffer.h
    src/MotionDetector.cpp    src/MotionDetector.h
    src/AudioDetector.cpp     src/AudioDetector.h
    src/ZoneEditor.cpp        src/ZoneEditor.h
    src/PlaybackBrowser.cpp   src/PlaybackBrowser.h
    src/Baichuan.cpp          src/Baichuan.h
    src/BaichuanStream.cpp    src/BaichuanStream.h
    src/Keyring.cpp           src/Keyring.h
    src/TsMuxer.cpp           src/TsMuxer.h
    src/Log.cpp               src/Log.h
    src/DiagnosticsDialog.cpp src/DiagnosticsDialog.h
    src/SchedulePicker.cpp    src/SchedulePicker.h
    src/TalkSession.cpp       src/TalkSession.h
)

target_compile_definitions(leolink PRIVATE
    LEOLINK_VERSION="${PROJECT_VERSION}"
    LEOLINK_APP_ID="${APP_ID}"
    LEOLINK_HELP_URL="https://tombueng.github.io/leolink/"
)

target_link_libraries(leolink PRIVATE
    Qt6::Widgets Qt6::Network Qt6::Xml Qt6::Svg Qt6::OpenGLWidgets
    PkgConfig::MPV
)

qt_add_resources(leolink "assets"
    PREFIX "/"
    BASE resources
    FILES resources/icons/leolink.svg
)

# ── Translations ────────────────────────────────────────────────────────────
# Compiled into the binary, so a single executable carries every language and
# nothing has to be found on disk at run time.
# ── optional: the system keyring ─────────────────────────────────────────────
# qtkeychain talks to Secret Service, which is what GNOME Keyring and KWallet
# both answer to. Optional on purpose: without it the setting is simply not
# offered, and a build on a machine that has no such library is unaffected.
find_package(Qt6Keychain QUIET)
if(Qt6Keychain_FOUND)
    target_link_libraries(leolink PRIVATE qt6keychain)
    target_compile_definitions(leolink PRIVATE LEOLINK_HAVE_KEYCHAIN)
    message(STATUS "qtkeychain found — passwords may be kept in the system keyring")
else()
    message(STATUS "qtkeychain not found — passwords in the configuration file only")
endif()

qt_add_translations(leolink
    TS_FILES
        translations/leolink_en.ts
        translations/leolink_de.ts
        translations/leolink_ar.ts
        translations/leolink_es.ts
        translations/leolink_fr.ts
        translations/leolink_hi.ts
        translations/leolink_it.ts
        translations/leolink_ja.ts
        translations/leolink_pt_BR.ts
        translations/leolink_ru.ts
        translations/leolink_tr.ts
        translations/leolink_zh_CN.ts
    RESOURCE_PREFIX "/i18n"
    LUPDATE_OPTIONS -no-obsolete
)

target_compile_options(leolink PRIVATE
    -Wall -Wextra -Wpedantic
    $<$<CONFIG:Release>:-O2>
)

# ── Installation ────────────────────────────────────────────────────────────
install(TARGETS leolink RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR})

install(FILES resources/icons/leolink.svg
        DESTINATION ${CMAKE_INSTALL_DATADIR}/icons/hicolor/scalable/apps
        RENAME ${APP_ID}.svg)

# Generated so the reverse-DNS id stays in one place (APP_ID above).
configure_file(packaging/leolink.desktop.in  ${APP_ID}.desktop  @ONLY)
configure_file(packaging/leolink.metainfo.xml.in ${APP_ID}.metainfo.xml @ONLY)

install(FILES ${CMAKE_CURRENT_BINARY_DIR}/${APP_ID}.desktop
        DESTINATION ${CMAKE_INSTALL_DATADIR}/applications)

# AppStream metadata — without this the app shows up in no software centre.
install(FILES ${CMAKE_CURRENT_BINARY_DIR}/${APP_ID}.metainfo.xml
        DESTINATION ${CMAKE_INSTALL_DATADIR}/metainfo)

install(FILES README.md LICENSE
        DESTINATION ${CMAKE_INSTALL_DOCDIR})

# ── Validation ──────────────────────────────────────────────────────────────
# Catches malformed metadata at build time rather than at store-submission time.
find_program(DESKTOP_FILE_VALIDATE desktop-file-validate)
find_program(APPSTREAMCLI appstreamcli)

add_custom_target(validate-metadata
    COMMAND ${CMAKE_COMMAND} -E echo "Validating desktop entry and AppStream data"
    COMMAND $<IF:$<BOOL:${DESKTOP_FILE_VALIDATE}>,${DESKTOP_FILE_VALIDATE},true>
            ${CMAKE_CURRENT_BINARY_DIR}/${APP_ID}.desktop
    COMMAND $<IF:$<BOOL:${APPSTREAMCLI}>,${APPSTREAMCLI},true> validate --no-net
            ${CMAKE_CURRENT_BINARY_DIR}/${APP_ID}.metainfo.xml
    VERBATIM)

# ── Packaging (CPack → .deb, .rpm) ──────────────────────────────────────────
set(CPACK_PACKAGE_NAME "leolink")
set(CPACK_PACKAGE_VENDOR "leolink contributors")
set(CPACK_PACKAGE_CONTACT "https://github.com/tombueng/leolink/issues")
set(CPACK_PACKAGE_DESCRIPTION_SUMMARY "${PROJECT_DESCRIPTION}")
set(CPACK_PACKAGE_HOMEPAGE_URL "${PROJECT_HOMEPAGE_URL}")
set(CPACK_RESOURCE_FILE_LICENSE "${CMAKE_CURRENT_SOURCE_DIR}/LICENSE")

# Shared Qt/mpv rather than static: distributions expect it, security fixes
# arrive through the system, and the Flatpak and AppImage cover the bundled
# case for anyone who wants a single self-contained artefact.
set(CPACK_GENERATOR "DEB;RPM")

set(CPACK_DEBIAN_PACKAGE_SECTION "video")
set(CPACK_DEBIAN_PACKAGE_PRIORITY "optional")

# ── what the .deb depends on ────────────────────────────────────────────────
# Written out rather than read off the build machine, because dpkg-shlibdeps
# answers with the name each library has *there*. The release is built on
# Ubuntu 24.04, which is mid-way through the 64-bit time_t transition, so it
# named libqt6gui6t64 and four others that do not exist on 25.10 or later,
# where the transition is over and the plain names are back. The result
# unpacked and even ran, but could not be configured on a current Ubuntu at
# all.
#
# Both names are given as alternatives, so apt takes whichever its release
# has; every version is the 6.4 this project requires, which is also what
# keeps Ubuntu 22.04's pre-transition Qt 6.2 packages from matching.
#
# The cost of a hand-written list is that it has to be revisited when Qt moves.
# tools/check_deb_depends.py is what notices: it maps the libraries the binary
# actually loads back to their packages and fails if one of them is not covered
# here.
set(CPACK_DEBIAN_PACKAGE_SHLIBDEPS OFF)
set(leolink_deb_depends
    "libc6 (>= 2.34)"
    "libgcc-s1 (>= 3.0)"
    "libstdc++6 (>= 5)"
    "libmpv2 (>= 0.29)"
    # Still t64 on 26.04, where it also provides the plain name.
    "libqt6core6t64 (>= 6.4.0) | libqt6core6 (>= 6.4.0)"
    "libqt6gui6 (>= 6.4.0) | libqt6gui6t64 (>= 6.4.0)"
    "libqt6network6 (>= 6.4.0) | libqt6network6t64 (>= 6.4.0)"
    "libqt6widgets6 (>= 6.4.0) | libqt6widgets6t64 (>= 6.4.0)"
    "libqt6openglwidgets6 (>= 6.4.0) | libqt6openglwidgets6t64 (>= 6.4.0)"
    # The application and tray icons are vector art, and so are the menu icons
    # every desktop theme ships, so the SVG icon engine is not optional — but
    # it is a plugin, loaded by name at run time, which means nothing links it
    # and no automatic dependency could ever have found it. Split out of
    # libqt6svg6 in 26.04; inside it before that, hence the alternative and
    # this order.
    "qt6-svg-plugins (>= 6.4.0) | libqt6svg6 (>= 6.4.0)"
)
# Linked only where it was found, so the dependency belongs to that build and
# not to the list.
if(Qt6Keychain_FOUND)
    list(APPEND leolink_deb_depends "libqt6keychain1 (>= 0.13.2)")
endif()
list(JOIN leolink_deb_depends ", " CPACK_DEBIAN_PACKAGE_DEPENDS)

# ffmpeg is run as a program, not linked, so shlibdeps could not have seen it
# either. Recording and both detectors need it; plain viewing does not, which is
# why it is a recommendation rather than a hard dependency — apt installs it by
# default either way.
set(CPACK_DEBIAN_PACKAGE_RECOMMENDS "ffmpeg")
set(CPACK_DEBIAN_PACKAGE_SUGGESTS "mpv")

set(CPACK_RPM_PACKAGE_LICENSE "MIT")
set(CPACK_RPM_PACKAGE_GROUP "Applications/Multimedia")
set(CPACK_RPM_PACKAGE_URL "${PROJECT_HOMEPAGE_URL}")
set(CPACK_RPM_PACKAGE_AUTOREQ ON)
set(CPACK_RPM_PACKAGE_REQUIRES_POST "ffmpeg")
# The same plugin the .deb asks for, and invisible to the automatic requirements
# for the same reason. Named by soname rather than by package, which is what
# makes the rest of this file's requirements portable between RPM distributions:
# the package that ships libQt6Svg is the one that ships its plugins.
if(CMAKE_SIZEOF_VOID_P EQUAL 8)
    set(CPACK_RPM_PACKAGE_REQUIRES "libQt6Svg.so.6()(64bit)")
else()
    set(CPACK_RPM_PACKAGE_REQUIRES "libQt6Svg.so.6")
endif()
# These directories belong to filesystem and hicolor-icon-theme; claiming them
# would make the package conflict with half the distribution.
set(CPACK_RPM_EXCLUDE_FROM_AUTO_FILELIST_ADDITION
    /usr/share/applications
    /usr/share/icons
    /usr/share/icons/hicolor
    /usr/share/icons/hicolor/scalable
    /usr/share/icons/hicolor/scalable/apps
    /usr/share/metainfo)

include(CPack)
