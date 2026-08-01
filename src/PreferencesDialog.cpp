#include "PreferencesDialog.h"

#include <QCheckBox>
#include <QComboBox>
#include <QDialogButtonBox>
#include <QFileDialog>
#include <QFormLayout>
#include <QGroupBox>
#include <QHBoxLayout>
#include <QLabel>
#include <QLineEdit>
#include <QPushButton>
#include <QScrollArea>
#include <QSpinBox>
#include <QTabWidget>
#include <QVBoxLayout>

#include "ActionEditor.h"
#include "DiagnosticsDialog.h"
#include "Log.h"

namespace leolink {

namespace {

/// Every page in a scroll area, for the same reason the camera dialog does it:
/// a word-wrapped label reports the width of its whole text as what it wants,
/// and a layout hands that straight on as the window's minimum width.
QWidget *scrolled(QWidget *page, QWidget *parent)
{
    auto *area = new QScrollArea(parent);
    area->setWidget(page);
    area->setWidgetResizable(true);
    area->setFrameShape(QFrame::NoFrame);
    return area;
}

QLabel *hint(const QString &text, QWidget *parent)
{
    auto *label = new QLabel(text, parent);
    label->setWordWrap(true);
    label->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
    return label;
}

} // namespace

PreferencesDialog::PreferencesDialog(const Config &config, QWidget *parent)
    : QDialog(parent), m_config(config)
{
    setWindowTitle(tr("Settings"));
    resize(560, 560);

    auto *tabs = new QTabWidget(this);
    tabs->addTab(scrolled(buildWindowTab(), this), tr("Window"));
    tabs->addTab(scrolled(buildAlertTab(), this), tr("On motion"));
    tabs->addTab(scrolled(buildActionTab(), this), tr("Reactions"));
    tabs->addTab(scrolled(buildRecordingTab(), this), tr("Recordings"));
    tabs->addTab(scrolled(buildVideoTab(), this), tr("Video"));
    tabs->addTab(scrolled(buildGeneralTab(), this), tr("General"));

    auto *buttons = new QDialogButtonBox(
        QDialogButtonBox::Ok | QDialogButtonBox::Cancel, this);
    connect(buttons, &QDialogButtonBox::accepted,
            this, &PreferencesDialog::onAccept);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);

    auto *layout = new QVBoxLayout(this);
    layout->addWidget(tabs, 1);
    layout->addWidget(buttons);
}

// ── window ──────────────────────────────────────────────────────────────────

QWidget *PreferencesDialog::buildWindowTab()
{
    auto *page = new QWidget;

    m_showMenuBar = new QCheckBox(tr("Show menu bar"), page);
    m_showMenuBar->setChecked(m_config.showMenuBar);
    m_showMenuBar->setToolTip(tr("Ctrl+M toggles this at any time."));
    m_showToolBar = new QCheckBox(tr("Show toolbar"), page);
    m_showToolBar->setChecked(m_config.showToolBar);
    m_showStatusBar = new QCheckBox(tr("Show status bar"), page);
    m_showStatusBar->setChecked(m_config.showStatusBar);
    m_frameless = new QCheckBox(tr("Hide window decoration"), page);
    m_frameless->setChecked(m_config.frameless);
    m_frameless->setToolTip(tr("For wall displays. Ctrl+Shift+D toggles it."));

    auto *chromeLayout = new QVBoxLayout;
    chromeLayout->addWidget(m_showMenuBar);
    chromeLayout->addWidget(m_showToolBar);
    chromeLayout->addWidget(m_showStatusBar);
    chromeLayout->addWidget(m_frameless);

    auto *chromeBox = new QGroupBox(tr("Appearance"), page);
    chromeBox->setLayout(chromeLayout);

    m_trayEnabled = new QCheckBox(tr("Show an icon in the notification area"), page);
    m_trayEnabled->setChecked(m_config.trayEnabled);
    m_closeToTray = new QCheckBox(
        tr("Closing the window hides it instead of quitting"), page);
    m_closeToTray->setChecked(m_config.closeToTray);
    m_minimizeToTray = new QCheckBox(
        tr("Minimising hides the window to the tray"), page);
    m_minimizeToTray->setChecked(m_config.minimizeToTray);

    // Both only mean anything while the tray icon exists.
    auto syncTray = [this] {
        const bool on = m_trayEnabled->isChecked();
        m_closeToTray->setEnabled(on);
        m_minimizeToTray->setEnabled(on);
    };
    connect(m_trayEnabled, &QCheckBox::toggled, this, syncTray);
    syncTray();

    auto *trayLayout = new QVBoxLayout;
    trayLayout->addWidget(m_trayEnabled);
    trayLayout->addWidget(m_closeToTray);
    trayLayout->addWidget(m_minimizeToTray);

    auto *trayBox = new QGroupBox(tr("Notification area"), page);
    trayBox->setLayout(trayLayout);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(chromeBox);
    layout->addWidget(trayBox);
    layout->addStretch(1);
    return page;
}

// ── what happens here when a camera sees something ──────────────────────────

QWidget *PreferencesDialog::buildAlertTab()
{
    auto *page = new QWidget;

    m_flashOnMotion = new QCheckBox(tr("Tint the tile red for a moment"), page);
    m_flashOnMotion->setChecked(m_config.flashOnMotion);
    m_flashOnMotion->setToolTip(
        tr("So a glance at a wall of cameras is enough to see which one it "
           "was."));

    m_flashMilliseconds = new QSpinBox(page);
    m_flashMilliseconds->setRange(100, 10000);
    m_flashMilliseconds->setSingleStep(100);
    m_flashMilliseconds->setSuffix(tr(" ms"));
    m_flashMilliseconds->setValue(m_config.flashMilliseconds);
    connect(m_flashOnMotion, &QCheckBox::toggled,
            m_flashMilliseconds, &QWidget::setEnabled);
    m_flashMilliseconds->setEnabled(m_config.flashOnMotion);

    m_soundOnMotion = new QCheckBox(tr("Play a sound"), page);
    m_soundOnMotion->setChecked(m_config.soundOnMotion);

    m_soundFile = new QLineEdit(page);
    m_soundFile->setText(m_config.soundFile);
    m_soundFile->setPlaceholderText(
        tr("Empty: the desktop's own notification sound"));

    auto *browse = new QPushButton(tr("Browse…"), page);
    connect(browse, &QPushButton::clicked, this, [this] {
        const QString file = QFileDialog::getOpenFileName(
            this, tr("Sound to play"), m_config.effectiveSoundFile(),
            tr("Sound files (*.wav *.mp3 *.ogg *.opus *.flac *.m4a);;"
               "All files (*)"));
        if (!file.isEmpty())
            m_soundFile->setText(file);
    });

    auto syncSound = [this, browse](bool on) {
        m_soundFile->setEnabled(on);
        browse->setEnabled(on);
    };
    connect(m_soundOnMotion, &QCheckBox::toggled, this, syncSound);
    syncSound(m_config.soundOnMotion);

    auto *soundRow = new QHBoxLayout;
    soundRow->addWidget(m_soundFile, 1);
    soundRow->addWidget(browse);

    auto *alertForm = new QFormLayout;
    alertForm->addRow(QString(), m_flashOnMotion);
    alertForm->addRow(tr("For"), m_flashMilliseconds);
    alertForm->addRow(QString(), m_soundOnMotion);
    alertForm->addRow(tr("Sound file"), soundRow);

    auto *alertBox = new QGroupBox(tr("On the screen"), page);
    alertBox->setLayout(alertForm);

    m_raiseOnMotion = new QCheckBox(
        tr("Bring the window up when motion is detected"), page);
    m_raiseOnMotion->setChecked(m_config.raiseOnMotion);

    m_raiseMode = new QComboBox(page);
    m_raiseMode->addItem(tr("Previous size"), QStringLiteral("restore"));
    m_raiseMode->addItem(tr("Full screen"), QStringLiteral("fullscreen"));
    m_raiseMode->setCurrentIndex(
        m_config.raiseMode == QLatin1String("fullscreen") ? 1 : 0);
    connect(m_raiseOnMotion, &QCheckBox::toggled,
            m_raiseMode, &QComboBox::setEnabled);
    m_raiseMode->setEnabled(m_config.raiseOnMotion);

    auto *raiseForm = new QFormLayout;
    raiseForm->addRow(QString(), m_raiseOnMotion);
    raiseForm->addRow(tr("Come back as"), m_raiseMode);

    auto *raiseBox = new QGroupBox(tr("The window"), page);
    raiseBox->setLayout(raiseForm);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(alertBox);
    layout->addWidget(raiseBox);
    layout->addWidget(hint(
        tr("Which cameras raise an event at all, and how, is set for each "
           "camera under Cameras ▸ Settings ▸ Detection by leolink."), page));
    layout->addStretch(1);
    return page;
}

// ── the house rule for reactions ────────────────────────────────────────────

QWidget *PreferencesDialog::buildActionTab()
{
    auto *page = new QWidget;

    m_actions = new ActionEditor(page);
    m_actions->setActions(m_config.actions);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(hint(
        tr("What leolink does when a camera reports something. A camera "
           "follows these unless its own dialog says otherwise — all of them "
           "or none, never half: settings that are partly inherited are the "
           "hardest kind to reason about when something does not fire."),
        page));
    layout->addWidget(m_actions);
    layout->addStretch(1);
    return page;
}

// ── where recordings land ───────────────────────────────────────────────────

QWidget *PreferencesDialog::buildRecordingTab()
{
    auto *page = new QWidget;

    m_recordDir = new QLineEdit(page);
    m_recordDir->setText(m_config.recordDir);
    m_recordDir->setPlaceholderText(m_config.effectiveRecordDir());

    auto *browse = new QPushButton(tr("Browse…"), page);
    connect(browse, &QPushButton::clicked, this, [this] {
        const QString dir = QFileDialog::getExistingDirectory(
            this, tr("Recordings folder"), m_config.effectiveRecordDir());
        if (!dir.isEmpty())
            m_recordDir->setText(dir);
    });

    auto *dirRow = new QHBoxLayout;
    dirRow->addWidget(m_recordDir, 1);
    dirRow->addWidget(browse);

    auto *form = new QFormLayout;
    form->addRow(tr("Recordings folder"), dirRow);

    auto *box = new QGroupBox(tr("Recordings and stills"), page);
    box->setLayout(form);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(box);
    layout->addWidget(hint(
        tr("Recordings are written as Matroska without re-encoding: the "
           "picture keeps the camera's original quality and the processor "
           "stays nearly idle.\n\n"
           "Whether a camera records at all is its own setting, under "
           "Cameras ▸ Settings ▸ Reactions."), page));
    layout->addStretch(1);
    return page;
}

// ── decoding ────────────────────────────────────────────────────────────────

QWidget *PreferencesDialog::buildVideoTab()
{
    auto *page = new QWidget;

    m_hwdec = new QComboBox(page);
    m_hwdec->addItem(tr("Hardware (recommended)"), QStringLiteral("hw"));
    m_hwdec->addItem(tr("Hardware, driver's choice"), QStringLiteral("auto"));
    m_hwdec->addItem(tr("Hardware, with frame copy"), QStringLiteral("copy"));
    m_hwdec->addItem(tr("Software only"), QStringLiteral("off"));
    m_hwdec->setToolTip(
        tr("“Recommended” names the decoder explicitly so that decoding and "
           "drawing stay on the same graphics API. Left to itself, mpv may "
           "decode through one API and draw through another, which on some "
           "cards turns the picture solid green.\n\n"
           "If the picture is broken, try the others in turn. “Software only” "
           "always works but costs a whole processor core at full "
           "resolution."));
    for (int i = 0; i < m_hwdec->count(); ++i)
        if (m_hwdec->itemData(i).toString() == m_config.hwdec)
            m_hwdec->setCurrentIndex(i);

    m_lowLatency = new QCheckBox(tr("Favour low latency over smoothness"), page);
    m_lowLatency->setChecked(m_config.lowLatency);
    m_lowLatency->setToolTip(
        tr("Keeps buffering to a minimum. Turn this off if a high-bitrate "
           "stream stutters over a busy network."));

    auto *form = new QFormLayout;
    form->addRow(tr("Decoding"), m_hwdec);
    form->addRow(QString(), m_lowLatency);

    auto *box = new QGroupBox(tr("Video"), page);
    box->setLayout(form);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(box);
    layout->addStretch(1);
    return page;
}

// ── language and logging ────────────────────────────────────────────────────

QWidget *PreferencesDialog::buildGeneralTab()
{
    auto *page = new QWidget;

    m_language = new QComboBox(page);
    m_language->addItem(tr("System language"), QStringLiteral("system"));
    // Each in its own language, so it can be found by someone who cannot read
    // the one currently on screen. Sorted by that name, which puts the Latin
    // scripts first and is at least predictable.
    struct Language { const char *name; const char *code; };
    static const Language languages[] = {
        {"Deutsch",             "de"},
        {"English",             "en"},
        {"Español",             "es"},
        {"Français",            "fr"},
        {"Italiano",            "it"},
        {"Português (Brasil)",  "pt_BR"},
        {"Türkçe",              "tr"},
        {"Русский",             "ru"},
        {"العربية",              "ar"},
        {"हिन्दी",                 "hi"},
        {"中文（简体）",          "zh_CN"},
        {"日本語",               "ja"},
    };
    for (const Language &language : languages)
        m_language->addItem(QString::fromUtf8(language.name),
                            QString::fromUtf8(language.code));
    for (int i = 0; i < m_language->count(); ++i)
        if (m_language->itemData(i).toString() == m_config.language)
            m_language->setCurrentIndex(i);

    auto *langForm = new QFormLayout;
    langForm->addRow(tr("Language"), m_language);
    langForm->addRow(QString(),
                     hint(tr("Takes effect after restarting leolink."), page));

    auto *langBox = new QGroupBox(tr("Language"), page);
    langBox->setLayout(langForm);

    m_debugLogging = new QCheckBox(tr("Detailed logging"), page);
    m_debugLogging->setChecked(m_config.debugLogging);
    m_debugLogging->setToolTip(
        tr("Records every request to the camera, every decoder decision and "
           "every reconnect, in ~/.local/share/leolink/leolink.log."));

    auto *openDiagnostics = new QPushButton(tr("Open diagnostics…"), page);
    connect(openDiagnostics, &QPushButton::clicked, this, [this] {
        // Applied straight away: the user came here to record something, and
        // having to press OK first would lose the very lines they wanted.
        Log::setDebugEnabled(m_debugLogging->isChecked());
        auto *dialog = new DiagnosticsDialog(this);
        dialog->setAttribute(Qt::WA_DeleteOnClose);
        connect(dialog, &DiagnosticsDialog::debugLoggingChanged,
                m_debugLogging, &QCheckBox::setChecked);
        dialog->show();
    });

    auto *logRow = new QHBoxLayout;
    logRow->addWidget(openDiagnostics);
    logRow->addStretch(1);

    auto *logLayout = new QVBoxLayout;
    logLayout->addWidget(m_debugLogging);
    logLayout->addWidget(hint(
        tr("Errors and warnings are always recorded. Detailed logging adds "
           "the conversation with the camera — switch it on when something is "
           "wrong, reproduce it, then send the report from Help ▸ "
           "Diagnostics. Passwords and tokens are removed before anything is "
           "written."), page));
    logLayout->addLayout(logRow);

    auto *logBox = new QGroupBox(tr("Diagnostics"), page);
    logBox->setLayout(logLayout);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(langBox);
    layout->addWidget(logBox);
    layout->addStretch(1);
    return page;
}

void PreferencesDialog::onAccept()
{
    m_config.showMenuBar = m_showMenuBar->isChecked();
    m_config.showToolBar = m_showToolBar->isChecked();
    m_config.showStatusBar = m_showStatusBar->isChecked();
    m_config.frameless = m_frameless->isChecked();
    m_config.trayEnabled = m_trayEnabled->isChecked();
    m_config.closeToTray = m_closeToTray->isChecked();
    m_config.minimizeToTray = m_minimizeToTray->isChecked();

    m_config.flashOnMotion = m_flashOnMotion->isChecked();
    m_config.flashMilliseconds = m_flashMilliseconds->value();
    m_config.soundOnMotion = m_soundOnMotion->isChecked();
    m_config.soundFile = m_soundFile->text();
    m_config.raiseOnMotion = m_raiseOnMotion->isChecked();
    m_config.raiseMode = m_raiseMode->currentData().toString();

    m_config.actions = m_actions->actions();
    m_config.recordDir = m_recordDir->text();

    m_config.hwdec = m_hwdec->currentData().toString();
    m_config.lowLatency = m_lowLatency->isChecked();

    m_config.language = m_language->currentData().toString();
    m_config.debugLogging = m_debugLogging->isChecked();
    Log::setDebugEnabled(m_config.debugLogging);

    accept();
}

} // namespace leolink
