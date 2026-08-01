cmake_minimum_required(VERSION 3.21)

project(leolink
    VERSION 0.1.1
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
    src/MotionDetector.cpp    src/MotionDetector.h
    src/AudioDetector.cpp     src/AudioDetector.h
    src/ZoneEditor.cpp        src/ZoneEditor.h
    src/PlaybackBrowser.cpp   src/PlaybackBrowser.h
    src/Baichuan.cpp          src/Baichuan.h
    src/BaichuanStream.cpp    src/BaichuanStream.h
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
# Reads the real ELF dependencies rather than a hand-written list that would
# drift the moment Qt bumps a soname.
set(CPACK_DEBIAN_PACKAGE_SHLIBDEPS ON)
# ffmpeg is run as a program, not linked, so shlibdeps cannot see it. Recording
# and both detectors need it; plain viewing does not, which is why it is a
# recommendation rather than a hard dependency — apt installs it by default
# either way.
set(CPACK_DEBIAN_PACKAGE_RECOMMENDS "ffmpeg")
set(CPACK_DEBIAN_PACKAGE_SUGGESTS "mpv")

set(CPACK_RPM_PACKAGE_LICENSE "MIT")
set(CPACK_RPM_PACKAGE_GROUP "Applications/Multimedia")
set(CPACK_RPM_PACKAGE_URL "${PROJECT_HOMEPAGE_URL}")
set(CPACK_RPM_PACKAGE_AUTOREQ ON)
set(CPACK_RPM_PACKAGE_REQUIRES_POST "ffmpeg")
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
