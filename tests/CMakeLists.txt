# ── Tests ───────────────────────────────────────────────────────────────────
# Run with: ctest --test-dir build --output-on-failure
#
# No camera is needed. FakeCamera speaks Baichuan's server side on the loopback
# interface, and answers from captures of real cameras in fixtures/.

# The whole application but main(), built once and shared by every test.
list(TRANSFORM LEOLINK_SOURCES PREPEND "${PROJECT_SOURCE_DIR}/" OUTPUT_VARIABLE app_sources)
add_library(leolink_testable STATIC
    ${app_sources}
    FakeCamera.cpp            FakeCamera.h
    FakeWebServer.cpp         FakeWebServer.h
)
target_include_directories(leolink_testable PUBLIC ../src .)
target_link_libraries(leolink_testable PUBLIC
    Qt6::Widgets Qt6::Network Qt6::Xml Qt6::Svg Qt6::OpenGLWidgets Qt6::Test
    PkgConfig::MPV
)
if(Qt6Keychain_FOUND)
    target_link_libraries(leolink_testable PUBLIC qt6keychain)
    target_compile_definitions(leolink_testable PUBLIC LEOLINK_HAVE_KEYCHAIN)
endif()
target_compile_definitions(leolink_testable PUBLIC
    LEOLINK_FIXTURES="${CMAKE_CURRENT_SOURCE_DIR}/fixtures"
    LEOLINK_VERSION="${PROJECT_VERSION}"
    LEOLINK_APP_ID="${APP_ID}"
    LEOLINK_HELP_URL="https://tombueng.github.io/leolink/"
)
target_compile_options(leolink_testable PUBLIC -Wall -Wextra -Wpedantic)

foreach(name aes baichuanclient baichuanapi transport tsmuxer alarmmerge
             config log events discovery reolinkclient motionwatcher dialogs
             firmware relay)
    qt_add_executable(tst_${name} tst_${name}.cpp)
    target_link_libraries(tst_${name} PRIVATE leolink_testable)
    add_test(NAME ${name} COMMAND tst_${name})
    # Nothing here draws, but Qt Widgets still wants a display to start.
    set_tests_properties(${name} PROPERTIES
        ENVIRONMENT "QT_QPA_PLATFORM=offscreen"
        TIMEOUT 120)
endforeach()

# The program itself starts and answers. --version and --help leave through
# exit(), which once ran static destructors under a live Qt and crashed.
add_test(NAME version COMMAND leolink --version)
add_test(NAME help COMMAND leolink --help)
set_tests_properties(version PROPERTIES
    PASS_REGULAR_EXPRESSION "leolink ${PROJECT_VERSION}"
    ENVIRONMENT "QT_QPA_PLATFORM=offscreen")
set_tests_properties(help PROPERTIES
    PASS_REGULAR_EXPRESSION "--baichuan-api"
    ENVIRONMENT "QT_QPA_PLATFORM=offscreen")
