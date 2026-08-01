#include "CameraSettingsDialog.h"

#include <cstdio>

#include <QApplication>
#include <QPlainTextEdit>
#include <QScrollArea>
#include <QTimeEdit>
#include <QCheckBox>
#include <QClipboard>
#include <QComboBox>
#include <QDialogButtonBox>
#include <QFormLayout>
#include <QGroupBox>
#include <QHBoxLayout>
#include <QJsonArray>
#include <QIcon>
#include <QLabel>
#include <QHeaderView>
#include <QInputDialog>
#include <QLineEdit>
#include <QTableWidget>
#include <QMessageBox>
#include <QPushButton>
#include <QListWidget>
#include <QSlider>
#include <QSpinBox>
#include <QStackedWidget>
#include <QVBoxLayout>

#include "ActionEditor.h"
#include "Log.h"
#include "ReolinkClient.h"
#include "SchedulePicker.h"
#include "SectionEditor.h"
#include "SignalIndicator.h"
#include "ZoneEditor.h"

namespace leolink {

namespace {

/// Which weekday the camera's 168-character schedule starts on, in Qt's
/// numbering (1 = Monday).
///
/// Not verified against the hardware: a schedule cannot be read back in a form
/// that reveals the order, and the camera's own web interface has no schedule
/// screen to compare against. Monday is the ISO convention and what Reolink's
/// published examples use. If recordings turn out a day out, this is the line
/// to change — which is why it is one line.
constexpr int kScheduleFirstDay = 1;

/// Fills a combo box from a JSON array of allowed values, selecting `current`.
void fillFromArray(QComboBox *box, const QJsonArray &values,
                   const QJsonValue &current)
{
    box->clear();
    for (const QJsonValue &v : values) {
        const QString text = v.isDouble() ? QString::number(v.toInt()) : v.toString();
        box->addItem(text, v.toVariant());
    }
    const QString want = current.isDouble() ? QString::number(current.toInt())
                                            : current.toString();
    const int index = box->findText(want);
    if (index >= 0)
        box->setCurrentIndex(index);
    box->setEnabled(box->count() > 0);
}

QSlider *makeSlider(QWidget *parent)
{
    auto *slider = new QSlider(Qt::Horizontal, parent);
    slider->setRange(0, 255);
    slider->setEnabled(false);   // enabled once the camera has answered
    return slider;
}

} // namespace

CameraSettingsDialog::CameraSettingsDialog(const CameraConfig &camera,
                                           QWidget *parent)
    : QDialog(parent), m_camera(camera), m_client(new ReolinkClient(this))
{
    setWindowTitle(camera.label());
    resize(760, 560);

    m_zones = camera.motionZones;

    m_nav = new QListWidget(this);
    m_nav->setFixedWidth(190);
    // Nothing but a list of names: a frame and alternating rows would make it
    // look like data rather than navigation.
    m_nav->setFrameShape(QFrame::NoFrame);
    m_nav->setStyleSheet(QStringLiteral(
        "QListWidget { background: transparent; }"
        "QListWidget::item { padding: 4px 8px; }"));
    m_stack = new QStackedWidget(this);
    connect(m_nav, &QListWidget::currentRowChanged, this, [this](int row) {
        if (row < 0)
            return;
        const QVariant page = m_nav->item(row)->data(Qt::UserRole);
        if (page.isValid())
            m_stack->setCurrentIndex(page.toInt());
    });

    beginSection(tr("In leolink"));
    buildWatchTab();
    buildRecordTab();
    buildReactionTab();
    buildPlaybackTab();

    beginSection(tr("In the camera"));
    buildEncoderTab();
    buildPictureTab();
    buildOverlayTab();
    buildDetectionTab();
    buildRecordingTab();
    buildAlertTab();
    buildTimeTab();
    buildUserTab();
    buildNetworkTab();
    buildMobileTab();
    buildMaintenanceTab();

    m_status = new QLabel(tr("Reading settings from %1…").arg(camera.host), this);
    m_status->setWordWrap(true);

    m_retryButton = new QPushButton(tr("Try again"), this);
    m_retryButton->hide();
    connect(m_retryButton, &QPushButton::clicked, this, [this] {
        m_retryButton->hide();
        m_status->setStyleSheet(QString());
        m_status->setText(tr("Reading settings from %1…").arg(m_camera.host));
        queryCamera();
    });

    auto *buttons = new QDialogButtonBox(QDialogButtonBox::Close, this);
    m_applyButton = buttons->addButton(tr("Apply to camera"),
                                       QDialogButtonBox::ApplyRole);
    m_applyButton->setEnabled(false);
    connect(m_applyButton, &QPushButton::clicked, this,
            &CameraSettingsDialog::onApply);
    // Closing keeps the leolink half, so it is an accept, not a reject.
    connect(buttons, &QDialogButtonBox::rejected,
            this, &CameraSettingsDialog::onDone);

    auto *panes = new QHBoxLayout;
    panes->addWidget(m_nav);
    panes->addWidget(m_stack, 1);

    auto *statusRow = new QHBoxLayout;
    statusRow->addWidget(m_status, 1);
    statusRow->addWidget(m_retryButton);

    auto *root = new QVBoxLayout(this);
    root->addLayout(panes, 1);
    root->addLayout(statusRow);
    root->addWidget(buttons);

    connect(m_client, &ReolinkClient::sectionReady,
            this, &CameraSettingsDialog::onSectionReady);
    connect(m_client, &ReolinkClient::sectionApplied,
            this, &CameraSettingsDialog::onSectionApplied);
    connect(m_client, &ReolinkClient::failed,
            this, &CameraSettingsDialog::onFailed);
    connect(m_client, &ReolinkClient::rebootAccepted, this, [this] {
        m_status->setStyleSheet(QStringLiteral("color:#27ae60;"));
        m_status->setText(
            tr("Restarting. The camera will be back in about a minute."));
        // Left disabled: pressing it again while the camera is down would only
        // produce a connection error.
    });

    connect(m_client, &ReolinkClient::wifiSignalReady, this, [this](int strength) {
        m_signal->setStrength(strength);
    });
    connect(m_client, &ReolinkClient::networkInfoReady,
            this, &CameraSettingsDialog::onNetworkInfo);
    connect(m_client, &ReolinkClient::wifiNetworksReady,
            this, &CameraSettingsDialog::onWifiNetworks);
    connect(m_client, &ReolinkClient::wifiApplied, this, [this] {
        m_wifiJoinButton->setEnabled(true);
        m_status->setStyleSheet(QStringLiteral("color:#27ae60;"));
        m_status->setText(
            tr("Saved. The camera is reconnecting and will be back shortly."));
    });

    connect(m_client, &ReolinkClient::testSucceededWith, this,
            [this](const QString &what) {
                m_status->setStyleSheet(QStringLiteral("color:#27ae60;"));
                m_status->setText(tr("%1: the camera reported success.").arg(what));
            });
    connect(m_client, &ReolinkClient::performanceReady, this,
            [this](const QJsonObject &info) {
                const int cpu = info.value(QStringLiteral("cpuUsed")).toInt();
                const int codec = info.value(QStringLiteral("codecRate")).toInt();
                const int net = info.value(QStringLiteral("netThroughput")).toInt();
                QStringList rows;
                rows << tr("Processor load %1 %").arg(cpu);
                // codecRate is a rate, not a percentage. Calling it one
                // produced "encoder load 3191 %", which is the sort of number
                // that tells you the label is wrong rather than the camera.
                if (codec > 0)
                    rows << tr("Encoder output %1 kbit/s").arg(codec);
                if (net > 0)
                    rows << tr("Network throughput %1 kbit/s").arg(net);
                if (cpu >= 90)
                    rows << tr("The camera is at its limit. Lowering the "
                               "resolution or frame rate will steady it.");
                m_performance->setText(rows.join(QStringLiteral("\n")));
            });
    connect(m_client, &ReolinkClient::firmwareInfo, this,
            [this](const QString &text, bool available) {
                m_firmware->setStyleSheet(QString());
                m_firmware->setText(text);
                m_upgradeButton->setEnabled(available);
                m_checkFirmwareButton->setEnabled(true);
            });
    connect(m_client, &ReolinkClient::usersReady, this,
            [this](const QJsonArray &users) {
                m_userTable->setRowCount(users.size());
                for (int row = 0; row < users.size(); ++row) {
                    const QJsonObject user = users.at(row).toObject();
                    m_userTable->setItem(row, 0, new QTableWidgetItem(
                        user.value(QStringLiteral("userName")).toString()));
                    const QString level = user.value(QStringLiteral("level")).toString();
                    m_userTable->setItem(row, 1, new QTableWidgetItem(
                        level == QLatin1String("admin") ? tr("Administrator")
                                                        : tr("Viewer")));
                }
            });
    connect(m_client, &ReolinkClient::readoutFailed, this,
            [this](const QString &what, const QString &reason) {
                // Each panel gets its own answer. A label left reading "Asking
                // Reolink…" for ever is indistinguishable from a program that
                // has stopped responding, and that is what this was.
                const QString style = QStringLiteral("color:#c0392b;");
                if (what == QLatin1String("firmware")) {
                    m_firmware->setText(reason);
                    m_firmware->setStyleSheet(style);
                    m_checkFirmwareButton->setEnabled(true);
                } else if (what == QLatin1String("performance")) {
                    m_performance->setText(reason);
                    m_performance->setStyleSheet(style);
                } else if (what == QLatin1String("users")) {
                    m_userStatus->setText(reason);
                    m_userStatus->setStyleSheet(style);
                }
            });
    connect(m_client, &ReolinkClient::commandsProbed,
            this, &CameraSettingsDialog::onCapabilities);
    connect(m_client, &ReolinkClient::usersChanged, this, [this] {
        m_status->setStyleSheet(QStringLiteral("color:#27ae60;"));
        m_status->setText(tr("Done."));
        m_client->fetchUsers();
    });
    connect(m_client, &ReolinkClient::storageFormatted, this, [this] {
        m_status->setStyleSheet(QStringLiteral("color:#27ae60;"));
        m_status->setText(tr("The card has been formatted."));
    });

    m_client->setCamera(camera);
    m_nav->setCurrentRow(1);   // the first real page, not the heading above it
    queryCamera();
}

void CameraSettingsDialog::queryCamera()
{
    m_client->fetchNetworkInfo();
    m_client->fetchPerformance();
    m_client->fetchUsers();
    m_client->fetchWifiSignal();

    QJsonObject channel;
    channel[QStringLiteral("channel")] = 0;
    m_client->fetchSection(QStringLiteral("GetEnc"), channel);
    m_client->fetchSection(QStringLiteral("GetImage"), channel);

    // Everything the generated sections need. Commands this firmware does not
    // know answer -9 and the section simply stays empty, which is the point of
    // asking rather than assuming.
    for (auto it = m_sectionParams.cbegin(); it != m_sectionParams.cend(); ++it)
        m_client->fetchSection(it.key(), it.value());

    // The alarm section needs its type named, and its reply is handled by hand
    // rather than by a generated form.
    QJsonObject alarmParam;
    alarmParam[QStringLiteral("channel")] = 0;
    alarmParam[QStringLiteral("type")] = QStringLiteral("md");
    m_client->fetchSection(QStringLiteral("GetAlarm"), alarmParam);
    m_client->fetchSection(QStringLiteral("GetMdAlarm"), alarmParam);
    m_client->fetchSection(QStringLiteral("GetMask"), channel);
}

void CameraSettingsDialog::onDone()
{
    storeLeolinkSettings();
    accept();
}

void CameraSettingsDialog::storeLeolinkSettings()
{
    m_camera.motionSource = m_motionSource->currentData().toString();
    m_camera.motionZones = m_zones;
    m_camera.motionSensitivity = m_sensitivity->value();
    m_camera.motionMinArea = m_minArea->value();
    m_camera.audioDetection = m_audioDetection->isChecked();
    m_camera.audioThresholdDb = m_audioThreshold->value();
    m_camera.audioHoldSeconds = m_audioHold->value();
    m_camera.recordOnMotion = m_recordOnMotion->isChecked();
    m_camera.recordTrailingSeconds = m_recordTrailing->value();
    m_camera.recordPreSeconds = m_recordPre->value();
    m_camera.continuousRecording = m_continuous->isChecked();
    m_camera.continuousRetentionHours = m_retentionHours->value();
    m_camera.continuousSegmentMinutes = m_segmentMinutes->value();
    m_camera.useGlobalActions = m_actionScope->currentData().toBool();
    m_camera.actions = m_actions->actions();
    m_camera.muted = m_muted->isChecked();
    m_camera.volume = m_volume->value();
}

void CameraSettingsDialog::onEditMotionZones()
{
    ZoneEditor editor(m_camera, m_zones, this);
    if (editor.exec() == QDialog::Accepted)
        m_zones = editor.mask();
}

// ── the leolink half ────────────────────────────────────────────────────────

void CameraSettingsDialog::buildWatchTab()
{
    auto *page = new QWidget;

    m_motionSource = new QComboBox(page);
    m_motionSource->addItem(tr("The camera reports it (ONVIF)"),
                            QStringLiteral("camera"));
    m_motionSource->addItem(tr("leolink watches the picture"),
                            QStringLiteral("local"));
    m_motionSource->addItem(tr("Either of the two"), QStringLiteral("both"));
    m_motionSource->addItem(tr("Do not watch"), QStringLiteral("off"));
    for (int i = 0; i < m_motionSource->count(); ++i)
        if (m_motionSource->itemData(i).toString() == m_camera.motionSource)
            m_motionSource->setCurrentIndex(i);

    // The sentence the two "Detection" pages never had between them. Which
    // detector actually fires is the one thing nobody could work out from the
    // old dialog, because the two halves lived in different windows.
    auto *chain = new QLabel(
        tr("<b>The camera reports it:</b> the camera's own detector decides, "
           "and sends an ONVIF event. What it watches and how readily it "
           "triggers is set under “Detection” further down, in the camera "
           "itself.<br><br>"
           "<b>leolink watches the picture:</b> this computer opens a second "
           "sub-stream connection and analyses the picture. Works with any "
           "camera, including ones that report nothing — and the camera's own "
           "detector then plays no part."), page);
    chain->setWordWrap(true);
    chain->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    m_zonesButton = new QPushButton(tr("Choose what is watched…"), page);
    connect(m_zonesButton, &QPushButton::clicked,
            this, &CameraSettingsDialog::onEditMotionZones);

    m_sensitivity = new QSpinBox(page);
    m_sensitivity->setRange(1, 10);
    m_sensitivity->setValue(m_camera.motionSensitivity);
    m_sensitivity->setToolTip(
        tr("How much a spot in the picture must change to count. Higher "
           "notices more, including shadows and rain."));

    m_minArea = new QSpinBox(page);
    m_minArea->setRange(1, 500);
    m_minArea->setSuffix(tr(" ‰"));
    m_minArea->setValue(m_camera.motionMinArea);
    m_minArea->setToolTip(
        tr("How much of the watched area must change before it counts as "
           "motion. 20‰ is two percent of the picture — roughly a person at "
           "middle distance."));

    auto *sourceForm = new QFormLayout;
    sourceForm->addRow(tr("Motion comes from"), m_motionSource);
    sourceForm->addRow(QString(), chain);

    auto *sourceBox = new QGroupBox(tr("How leolink learns of motion"), page);
    sourceBox->setLayout(sourceForm);

    auto *localForm = new QFormLayout;
    localForm->addRow(QString(), m_zonesButton);
    localForm->addRow(tr("Sensitivity"), m_sensitivity);
    localForm->addRow(tr("Minimum area"), m_minArea);

    auto *localBox = new QGroupBox(tr("When leolink watches the picture"), page);
    localBox->setLayout(localForm);

    // Only meaningful when the picture is analysed here.
    auto syncLocal = [this, localBox] {
        const QString source = m_motionSource->currentData().toString();
        localBox->setEnabled(source == QLatin1String("local") ||
                             source == QLatin1String("both"));
    };
    connect(m_motionSource, &QComboBox::currentIndexChanged, this, syncLocal);

    m_audioDetection = new QCheckBox(tr("Raise an event on sound"), page);
    m_audioDetection->setChecked(m_camera.audioDetection);
    m_audioDetection->setToolTip(
        tr("Needs a camera with a microphone. Opens another connection to the "
           "sub stream."));

    m_audioThreshold = new QSpinBox(page);
    m_audioThreshold->setRange(-90, 0);
    m_audioThreshold->setSuffix(tr(" dB"));
    m_audioThreshold->setValue(static_cast<int>(m_camera.audioThresholdDb));
    m_audioThreshold->setToolTip(
        tr("-60 dB is close to silence, -20 dB a raised voice nearby."));

    m_audioHold = new QSpinBox(page);
    m_audioHold->setRange(0, 120);
    m_audioHold->setSuffix(tr(" s"));
    m_audioHold->setValue(m_camera.audioHoldSeconds);
    m_audioHold->setToolTip(
        tr("Keeps the event up after the noise stops, so one bark is not "
           "reported four times."));

    auto syncAudio = [this](bool on) {
        m_audioThreshold->setEnabled(on);
        m_audioHold->setEnabled(on);
    };
    connect(m_audioDetection, &QCheckBox::toggled, this, syncAudio);

    auto *soundForm = new QFormLayout;
    soundForm->addRow(QString(), m_audioDetection);
    soundForm->addRow(tr("Sound above"), m_audioThreshold);
    soundForm->addRow(tr("Hold for"), m_audioHold);

    auto *soundBox = new QGroupBox(tr("Sound"), page);
    soundBox->setLayout(soundForm);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(sourceBox);
    layout->addWidget(localBox);
    layout->addWidget(soundBox);
    layout->addStretch(1);

    syncLocal();
    syncAudio(m_camera.audioDetection);
    addPage(page, tr("Detection by leolink"));
}

void CameraSettingsDialog::buildRecordTab()
{
    auto *page = new QWidget;

    // ── on an event ─────────────────────────────────────────────────────────
    m_recordOnMotion = new QCheckBox(tr("Record while motion lasts"), page);
    m_recordOnMotion->setChecked(m_camera.recordOnMotion);
    m_recordOnMotion->setToolTip(
        tr("Records on this computer from the live stream, so it works even "
           "when the camera has no SD card fitted."));

    m_recordPre = new QSpinBox(page);
    m_recordPre->setRange(0, 300);
    m_recordPre->setSuffix(tr(" s"));
    m_recordPre->setSpecialValueText(tr("nothing"));
    m_recordPre->setValue(m_camera.recordPreSeconds);
    m_recordPre->setToolTip(
        tr("The seconds leading up to the trigger — usually the part that "
           "shows how someone got there. The past cannot be recorded after "
           "the fact, so anything above zero keeps the stream running into a "
           "buffer: one more connection to the camera, and a little disk."));

    m_recordTrailing = new QSpinBox(page);
    m_recordTrailing->setRange(0, 600);
    m_recordTrailing->setSuffix(tr(" s"));
    m_recordTrailing->setValue(m_camera.recordTrailingSeconds);
    m_recordTrailing->setToolTip(
        tr("So an event does not stop mid-scene. Motion that resumes within "
           "this time continues the same file instead of starting a second."));

    auto syncMotion = [this](bool on) {
        m_recordPre->setEnabled(on);
        m_recordTrailing->setEnabled(on);
    };
    connect(m_recordOnMotion, &QCheckBox::toggled, this, syncMotion);
    syncMotion(m_camera.recordOnMotion);

    auto *recordForm = new QFormLayout;
    recordForm->addRow(QString(), m_recordOnMotion);
    recordForm->addRow(tr("Include before"), m_recordPre);
    recordForm->addRow(tr("Keep recording after"), m_recordTrailing);

    auto *recordBox = new QGroupBox(tr("When something happens"), page);
    recordBox->setLayout(recordForm);

    // ── round the clock ─────────────────────────────────────────────────────
    m_continuous = new QCheckBox(tr("Record without stopping"), page);
    m_continuous->setChecked(m_camera.continuousRecording);

    m_retentionHours = new QSpinBox(page);
    m_retentionHours->setRange(1, 720);
    m_retentionHours->setSuffix(tr(" h"));
    m_retentionHours->setValue(m_camera.continuousRetentionHours);
    m_retentionHours->setToolTip(
        tr("How far back the archive reaches. Once it is this old, a file is "
           "deleted to make room for the newest one."));

    m_segmentMinutes = new QSpinBox(page);
    m_segmentMinutes->setRange(1, 60);
    m_segmentMinutes->setSuffix(tr(" min"));
    m_segmentMinutes->setValue(m_camera.continuousSegmentMinutes);
    m_segmentMinutes->setToolTip(
        tr("The archive is a run of files, not one — a file cannot be trimmed "
           "at the front, so keeping a day in one of them would mean "
           "rewriting it every minute. Shorter files find a moment more "
           "precisely; longer ones are fewer to scroll past."));

    m_archiveEstimate = new QLabel(page);
    m_archiveEstimate->setWordWrap(true);
    m_archiveEstimate->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto syncContinuous = [this](bool on) {
        m_retentionHours->setEnabled(on);
        m_segmentMinutes->setEnabled(on);
        refreshArchiveEstimate();
    };
    connect(m_continuous, &QCheckBox::toggled, this, syncContinuous);
    connect(m_retentionHours, &QSpinBox::valueChanged,
            this, &CameraSettingsDialog::refreshArchiveEstimate);
    syncContinuous(m_camera.continuousRecording);

    auto *alwaysForm = new QFormLayout;
    alwaysForm->addRow(QString(), m_continuous);
    alwaysForm->addRow(tr("Keep the last"), m_retentionHours);
    alwaysForm->addRow(tr("One file per"), m_segmentMinutes);
    alwaysForm->addRow(QString(), m_archiveEstimate);

    auto *alwaysBox = new QGroupBox(tr("Round the clock"), page);
    alwaysBox->setLayout(alwaysForm);

    auto *sharedNote = new QLabel(
        tr("With both switched on, one buffer serves both: the recording of "
           "an event is cut out of the archive, so nothing extra is opened to "
           "the camera.\n\n"
           "Where the files go is the same for every camera and is set under "
           "Settings ▸ Recordings."), page);
    sharedNote->setWordWrap(true);
    sharedNote->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(recordBox);
    layout->addWidget(alwaysBox);
    layout->addWidget(sharedNote);
    layout->addStretch(1);
    addPage(page, tr("Recording"));
}

void CameraSettingsDialog::refreshArchiveEstimate()
{
    if (!m_archiveEstimate)
        return;
    if (!m_continuous->isChecked()) {
        m_archiveEstimate->clear();
        return;
    }

    // From the bit rate the camera says it is sending on the stream leolink
    // actually opens. Guessing would be worse than saying nothing, so a
    // camera that has not answered yet gets the honest version.
    const QJsonObject stream =
        m_encValue.value(m_camera.stream == QLatin1String("main")
                             ? QStringLiteral("mainStream")
                             : QStringLiteral("subStream")).toObject();
    const int kbit = stream.value(QStringLiteral("bitRate")).toInt();
    const int hours = m_retentionHours->value();
    if (kbit <= 0) {
        m_archiveEstimate->setText(
            tr("%1 hours of video. How much disk that is depends on the bit "
               "rate, which this camera has not reported yet.").arg(hours));
        return;
    }

    const double gigabytes = double(kbit) * 1000.0 / 8.0 * 3600.0 * hours /
                             (1024.0 * 1024.0 * 1024.0);
    m_archiveEstimate->setText(
        tr("About %1 GB at the %2 kbit/s this stream is set to. Make sure the "
           "recordings folder has that much to spare.")
            .arg(gigabytes, 0, 'f', gigabytes < 10 ? 1 : 0)
            .arg(kbit));
}

void CameraSettingsDialog::buildReactionTab()
{
    auto *page = new QWidget;

    m_actionScope = new QComboBox(page);
    m_actionScope->addItem(tr("Follow the defaults under Settings"), true);
    m_actionScope->addItem(tr("Use this camera's own"), false);
    m_actionScope->setCurrentIndex(m_camera.useGlobalActions ? 0 : 1);

    m_actions = new ActionEditor(page);
    m_actions->setActions(m_camera.actions);

    auto syncScope = [this] {
        m_actions->setEnabled(!m_actionScope->currentData().toBool());
    };
    connect(m_actionScope, &QComboBox::currentIndexChanged, this, syncScope);
    syncScope();

    auto *scopeForm = new QFormLayout;
    scopeForm->addRow(tr("Reactions"), m_actionScope);

    auto *actionBox = new QGroupBox(tr("What happens on an event"), page);
    auto *actionLayout = new QVBoxLayout(actionBox);
    actionLayout->addLayout(scopeForm);
    actionLayout->addWidget(m_actions);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(actionBox);
    layout->addStretch(1);
    addPage(page, tr("Reactions"));
}

void CameraSettingsDialog::buildPlaybackTab()
{
    auto *page = new QWidget;

    m_muted = new QCheckBox(tr("Muted"), page);
    m_muted->setChecked(m_camera.muted);

    m_volume = new QSpinBox(page);
    m_volume->setRange(0, 100);
    m_volume->setSuffix(QStringLiteral(" %"));
    m_volume->setValue(m_camera.volume);

    connect(m_muted, &QCheckBox::toggled, this, [this](bool on) {
        m_volume->setEnabled(!on);
    });
    m_volume->setEnabled(!m_camera.muted);

    auto *form = new QFormLayout;
    form->addRow(QString(), m_muted);
    form->addRow(tr("Volume"), m_volume);

    auto *box = new QGroupBox(tr("Sound in leolink"), page);
    box->setLayout(form);

    auto *note = new QLabel(
        tr("The same two controls sit on the camera's own tile, where they are "
           "quicker to reach. Cameras start muted: opening a wall of them "
           "should not fill the room with sound from every one at once."), page);
    note->setWordWrap(true);
    note->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(box);
    layout->addWidget(note);
    layout->addStretch(1);
    addPage(page, tr("Playback"));
}

// ── layout ──────────────────────────────────────────────────────────────────

void CameraSettingsDialog::buildEncoderTab()
{
    auto *page = new QWidget(this);

    auto streamGroup = [this, page](const QString &title, StreamControls &c) {
        c.size = new QComboBox(page);
        c.frameRate = new QComboBox(page);
        c.bitRate = new QComboBox(page);
        c.profile = new QComboBox(page);
        for (QComboBox *box : {c.size, c.frameRate, c.bitRate, c.profile})
            box->setEnabled(false);

        c.bitRate->setToolTip(
            tr("Higher means better picture and more network traffic. The "
               "camera only offers the rates it can actually sustain."));

        auto *form = new QFormLayout;
        form->addRow(tr("Resolution"), c.size);
        form->addRow(tr("Frame rate"), c.frameRate);
        form->addRow(tr("Bit rate (kbit/s)"), c.bitRate);
        form->addRow(tr("H.264 profile"), c.profile);

        auto *box = new QGroupBox(title, page);
        box->setLayout(form);
        return box;
    };

    auto *note = new QLabel(
        tr("These change the camera itself, so every client sees the result. "
           "The choices come from the camera and differ per model."),
        page);
    note->setWordWrap(true);
    note->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    // Sound is part of the encoder settings, and it was missing here.
    //
    // A Duo 2 arrived with audio switched off: the stream carried an AAC track
    // that was digital silence — measured at -91 dB mean *and* peak, every
    // sample in the same bucket. Nothing in leolink could turn it on, so the
    // only symptom was "no sound, whatever I do", with a perfectly healthy
    // audio track to look at.
    m_encAudio = new QCheckBox(tr("Send sound"), page);
    m_encAudio->setEnabled(false);   // until the camera has answered
    m_encAudio->setToolTip(
        tr("The camera's microphone. With this off it still puts an audio track "
           "in the stream — an entirely silent one, which is much harder to "
           "recognise than no track at all."));
    connect(m_encAudio, &QCheckBox::toggled, this,
            [this] { m_applyButton->setEnabled(true); });

    auto *audioBox = new QGroupBox(tr("Sound"), page);
    auto *audioLayout = new QVBoxLayout(audioBox);
    audioLayout->addWidget(m_encAudio);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(streamGroup(tr("Main stream"), m_main));
    layout->addWidget(streamGroup(tr("Sub stream"), m_sub));
    layout->addWidget(audioBox);
    layout->addWidget(note);
    layout->addStretch(1);

    addPage(page, tr("Video"));
}

void CameraSettingsDialog::buildPictureTab()
{
    auto *page = new QWidget(this);

    m_bright = makeSlider(page);
    m_contrast = makeSlider(page);
    m_saturation = makeSlider(page);
    m_sharpen = makeSlider(page);
    m_hue = makeSlider(page);

    auto *form = new QFormLayout;
    form->addRow(tr("Brightness"), m_bright);
    form->addRow(tr("Contrast"), m_contrast);
    form->addRow(tr("Saturation"), m_saturation);
    form->addRow(tr("Sharpness"), m_sharpen);
    form->addRow(tr("Hue"), m_hue);

    auto *box = new QGroupBox(tr("Picture"), page);
    box->setLayout(form);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(box);

    // Day/night, orientation and flicker come from a different command than the
    // sliders above, but they belong on the same screen — nobody thinks of
    // "is it upside down" as a separate topic from "is it too dark".
    layout->addWidget(addSection(page, QStringLiteral("GetIsp"),
                                 tr("Exposure and orientation"),
                                 {
                                     {QStringLiteral("dayNight"), tr("Day / night"),
                                      tr("“Auto” switches to infrared as the light "
                                         "goes. Forcing colour at night gives a "
                                         "picture too dark to use; forcing black "
                                         "and white by day loses colour for "
                                         "nothing."),
                                      {{QStringLiteral("Auto"), tr("Automatic")},
                                       {QStringLiteral("Color"), tr("Always colour")},
                                       {QStringLiteral("Black&White"), tr("Always black and white")}}},
                                     {QStringLiteral("antiFlicker"), tr("Anti-flicker"),
                                      tr("Match your mains frequency — 50 Hz in "
                                         "Europe — or indoor lighting will beat "
                                         "against the shutter and the picture will "
                                         "pulse."), {}},
                                     {QStringLiteral("exposure"), tr("Exposure"), {}, {}},
                                     {QStringLiteral("mirror"), tr("Mirror"), {}, {}},
                                     {QStringLiteral("flip"), tr("Flip"),
                                      tr("For a camera mounted upside down."), {}},
                                     {QStringLiteral("backLight"), tr("Backlight compensation"),
                                      tr("Helps when the subject stands against a "
                                         "bright window or sky."), {}},
                                     {QStringLiteral("nr3d"), tr("Noise reduction"),
                                      tr("Cleans up a dark picture, at the cost of "
                                         "smearing anything that moves."), {}},
                                     {QStringLiteral("rotation"), tr("Rotation"), {}, {}},
                                     {QStringLiteral("drc"), tr("Dynamic contrast"), {}, {}},
                                 }));

    layout->addWidget(addSection(page, QStringLiteral("GetIrLights"),
                                 tr("Infrared illumination"),
                                 {
                                     {QStringLiteral("state"), tr("Infrared lamps"),
                                      tr("“Auto” turns them on when it gets dark. "
                                         "Switch them off if the camera looks "
                                         "through glass — the reflection blinds "
                                         "it."),
                                      {{QStringLiteral("Auto"), tr("Automatic")},
                                       {QStringLiteral("On"), tr("Always on")},
                                       {QStringLiteral("Off"), tr("Always off")}}},
                                 }));

    layout->addStretch(1);

    addPage(page, tr("Picture"));
}

void CameraSettingsDialog::buildUserTab()
{
    auto *page = new QWidget(this);

    m_userTable = new QTableWidget(page);
    m_userTable->setColumnCount(2);
    m_userTable->setHorizontalHeaderLabels({tr("User"), tr("Rights")});
    m_userTable->setSelectionBehavior(QAbstractItemView::SelectRows);
    m_userTable->setSelectionMode(QAbstractItemView::SingleSelection);
    m_userTable->setEditTriggers(QAbstractItemView::NoEditTriggers);
    m_userTable->verticalHeader()->setVisible(false);
    m_userTable->horizontalHeader()->setStretchLastSection(true);

    auto *addButton = new QPushButton(tr("Add…"), page);
    auto *passwordButton = new QPushButton(tr("Change password…"), page);
    auto *deleteButton = new QPushButton(tr("Delete"), page);
    connect(addButton, &QPushButton::clicked, this, &CameraSettingsDialog::onAddUser);
    connect(passwordButton, &QPushButton::clicked,
            this, &CameraSettingsDialog::onChangePassword);
    connect(deleteButton, &QPushButton::clicked,
            this, &CameraSettingsDialog::onDeleteUser);

    auto *buttonRow = new QHBoxLayout;
    buttonRow->addWidget(addButton);
    buttonRow->addWidget(passwordButton);
    buttonRow->addWidget(deleteButton);
    buttonRow->addStretch(1);

    auto *note = new QLabel(
        tr("These are accounts on the camera, not in leolink. A viewer account "
           "can watch but not change anything — worth using for anything that "
           "only needs to see the picture, so a stored password cannot be "
           "turned against the camera's settings."),
        page);
    note->setWordWrap(true);
    note->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    m_userStatus = new QLabel(page);
    m_userStatus->setWordWrap(true);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(m_userTable, 1);
    layout->addWidget(m_userStatus);
    layout->addLayout(buttonRow);
    layout->addWidget(note);

    addPage(page, tr("Users"));
}

void CameraSettingsDialog::onAddUser()
{
    bool ok = false;
    const QString name = QInputDialog::getText(
        this, tr("New user"), tr("User name"), QLineEdit::Normal, QString(), &ok);
    if (!ok || name.trimmed().isEmpty())
        return;

    const QString password = QInputDialog::getText(
        this, tr("New user"), tr("Password for %1").arg(name),
        QLineEdit::Password, QString(), &ok);
    if (!ok || password.isEmpty())
        return;

    const QStringList levels{tr("Viewer"), tr("Administrator")};
    const QString level = QInputDialog::getItem(
        this, tr("New user"), tr("Rights"), levels, 0, false, &ok);
    if (!ok)
        return;

    m_status->setStyleSheet(QString());
    m_status->setText(tr("Creating %1…").arg(name));
    m_client->addUser(name.trimmed(), password,
                      level == levels.at(1) ? QStringLiteral("admin")
                                            : QStringLiteral("guest"));
}

void CameraSettingsDialog::onChangePassword()
{
    const int row = m_userTable->currentRow();
    if (row < 0)
        return;
    const QString name = m_userTable->item(row, 0)->text();

    bool ok = false;
    const QString password = QInputDialog::getText(
        this, tr("Change password"), tr("New password for %1").arg(name),
        QLineEdit::Password, QString(), &ok);
    if (!ok || password.isEmpty())
        return;

    // Changing the account leolink itself uses would lock it out at the next
    // reconnect, and the camera gives no warning about that.
    if (name == m_camera.user) {
        QMessageBox::information(
            this, tr("This is the account leolink uses"),
            tr("Change it here and leolink will be locked out until the new "
               "password is entered under Cameras as well."));
    }

    m_status->setText(tr("Changing the password for %1…").arg(name));
    m_client->changePassword(name, password);
}

void CameraSettingsDialog::onDeleteUser()
{
    const int row = m_userTable->currentRow();
    if (row < 0)
        return;
    const QString name = m_userTable->item(row, 0)->text();

    if (name == m_camera.user) {
        QMessageBox::warning(
            this, tr("Cannot delete this account"),
            tr("leolink is signed in as “%1”. Deleting it would cut the "
               "connection to this camera immediately.").arg(name));
        return;
    }

    if (QMessageBox::question(this, tr("Delete user"),
                              tr("Delete “%1” from the camera?").arg(name))
        != QMessageBox::Yes)
        return;

    m_status->setText(tr("Deleting %1…").arg(name));
    m_client->deleteUser(name);
}

void CameraSettingsDialog::onFormatStorage()
{
    QMessageBox confirm(this);
    confirm.setWindowTitle(tr("Format the SD card"));
    confirm.setIcon(QMessageBox::Critical);
    confirm.setText(tr("<b>Erase everything on the card in %1?</b>")
                        .arg(m_camera.label()));
    confirm.setInformativeText(
        tr("Every recording on the card is deleted. This cannot be undone, and "
           "nothing that has not already been downloaded can be recovered."));
    QAbstractButton *go =
        confirm.addButton(tr("Erase"), QMessageBox::DestructiveRole);
    confirm.addButton(QMessageBox::Cancel);
    confirm.setDefaultButton(QMessageBox::Cancel);
    confirm.exec();
    if (confirm.clickedButton() != go)
        return;

    m_status->setText(tr("Formatting…"));
    m_client->formatStorage();
}

void CameraSettingsDialog::buildNetworkTab()
{
    auto *page = new QWidget(this);

    m_signal = new SignalIndicator(page);
    auto *signalRow = new QHBoxLayout;
    signalRow->addWidget(new QLabel(tr("Wi-Fi signal"), page));
    signalRow->addWidget(m_signal);
    signalRow->addStretch(1);

    m_networkInfo = new QLabel(tr("Reading…"), page);
    m_networkInfo->setTextInteractionFlags(Qt::TextSelectableByMouse);
    m_networkInfo->setWordWrap(true);

    auto *box = new QGroupBox(tr("Connection"), page);
    auto *boxLayout = new QVBoxLayout(box);
    boxLayout->addLayout(signalRow);
    boxLayout->addWidget(m_networkInfo);

    // ── joining a network ───────────────────────────────────────────────────
    m_wifiNetworks = new QComboBox(page);
    m_wifiNetworks->setEditable(true);   // hidden networks have to be typed
    m_wifiNetworks->setMinimumWidth(220);

    m_wifiPassword = new QLineEdit(page);
    m_wifiPassword->setEchoMode(QLineEdit::Password);

    m_wifiScanButton = new QPushButton(tr("Scan"), page);
    connect(m_wifiScanButton, &QPushButton::clicked,
            this, &CameraSettingsDialog::onScanWifi);

    m_wifiJoinButton = new QPushButton(tr("Join network"), page);
    connect(m_wifiJoinButton, &QPushButton::clicked,
            this, &CameraSettingsDialog::onJoinWifi);

    auto *networkRow = new QHBoxLayout;
    networkRow->addWidget(m_wifiNetworks, 1);
    networkRow->addWidget(m_wifiScanButton);

    m_wifiHint = new QLabel(page);
    m_wifiHint->setWordWrap(true);
    m_wifiHint->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
    m_wifiHint->hide();   // nothing to say until a scan has happened

    auto *wifiForm = new QFormLayout;
    wifiForm->addRow(tr("Network"), networkRow);
    wifiForm->addRow(QString(), m_wifiHint);
    wifiForm->addRow(tr("Password"), m_wifiPassword);
    wifiForm->addRow(QString(), m_wifiJoinButton);

    auto *wifiBox = new QGroupBox(tr("Wi-Fi"), page);
    wifiBox->setLayout(wifiForm);

    // The camera does the scanning, not this computer: it may well be in a
    // different room, and what it can hear is the only thing that matters.
    auto *wifiNote = new QLabel(
        tr("The camera scans, not this computer — what it can reach is what "
           "counts. The password is tried before it is saved, so a typo is "
           "refused rather than leaving the camera on no network at all."),
        page);
    wifiNote->setWordWrap(true);
    wifiNote->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto *note = new QLabel(
        tr("Addresses and ports are read here but changed in the camera's own "
           "web interface. Getting one wrong takes the camera off the network "
           "entirely, and the only way back is the reset pin — a warning "
           "dialog is no substitute for the manufacturer's own screen there."),
        page);
    note->setWordWrap(true);
    note->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(box);
    layout->addWidget(wifiBox);
    layout->addWidget(wifiNote);
    layout->addWidget(note);
    layout->addStretch(1);

    addPage(page, tr("Network"));
}

namespace {

/// Cameras report Wi-Fi strength on whichever scale their firmware uses. Every
/// Reolink seen so far answers 0…4, matching the bars in its own app, but
/// percentages and dBm both exist in this class of device. Deciding from the
/// values actually received beats assuming, because bars drawn on the wrong
/// scale are worse than no bars at all: they look authoritative and are not.
int barsFromSignal(int raw, int observedMax)
{
    if (raw < 0) {                       // dBm, as reported by some firmware
        if (raw >= -55) return 4;
        if (raw >= -65) return 3;
        if (raw >= -75) return 2;
        return 1;
    }
    if (observedMax > 4) {               // percentage
        if (raw >= 75) return 4;
        if (raw >= 50) return 3;
        if (raw >= 25) return 2;
        return raw > 0 ? 1 : 0;
    }
    return qBound(0, raw, 4);
}

QString describeBars(int bars)
{
    switch (bars) {
    case 4: return CameraSettingsDialog::tr("strong");
    case 3: return CameraSettingsDialog::tr("good");
    case 2: return CameraSettingsDialog::tr("fair");
    case 1: return CameraSettingsDialog::tr("weak");
    default: return CameraSettingsDialog::tr("unknown");
    }
}

} // namespace

void CameraSettingsDialog::onWifiNetworks(const QJsonArray &networks)
{
    m_wifiScanButton->setEnabled(true);
    m_wifiNetworks->clear();

    // A mesh advertises one name from every node, so a scan returns the same
    // SSID several times with different strengths. Listing each of them invites
    // a choice that cannot be made: the camera joins a *network*, and which
    // node it associates with is negotiated between the two of them. So the
    // entries are merged, the best signal wins, and how many nodes were heard
    // is stated plainly rather than implied by duplicate rows.
    struct Seen {
        int best{-1000};
        int accessPoints{0};
        QString encryption;
    };
    QMap<QString, Seen> found;
    int observedMax = 0;

    for (const QJsonValue &value : networks) {
        const QJsonObject network = value.toObject();
        const QString ssid = network.value(QStringLiteral("ssid")).toString();
        if (ssid.isEmpty())
            continue;   // hidden network: nothing to offer, it must be typed
        const int strength = network.value(QStringLiteral("signal")).toInt();
        observedMax = qMax(observedMax, strength);

        Seen &entry = found[ssid];
        ++entry.accessPoints;
        if (strength > entry.best) {
            entry.best = strength;
            entry.encryption = network.value(QStringLiteral("encrypt")).toString();
        }
    }

    QList<QString> names = found.keys();
    std::sort(names.begin(), names.end(),
              [&found](const QString &a, const QString &b) {
                  if (found[a].best != found[b].best)
                      return found[a].best > found[b].best;   // strongest first
                  return a.localeAwareCompare(b) < 0;
              });

    bool anyMesh = false;
    for (const QString &ssid : std::as_const(names)) {
        const Seen &entry = found.value(ssid);
        const int bars = barsFromSignal(entry.best, observedMax);
        QString text = bars > 0
                           ? tr("%1 — %2 (%3/4)").arg(ssid, describeBars(bars))
                                 .arg(bars)
                           : ssid;
        if (entry.accessPoints > 1) {
            anyMesh = true;
            text += tr(", %n access point(s)", nullptr, entry.accessPoints);
        }
        m_wifiNetworks->addItem(text, ssid);

        QStringList tip;
        tip << tr("Signal as the camera hears it: %1 of 4").arg(bars);
        if (!entry.encryption.isEmpty())
            tip << tr("Encryption: %1").arg(entry.encryption);
        if (entry.accessPoints > 1) {
            tip << tr("Heard from %n access point(s) — one network, several "
                      "nodes. The strongest is what is shown.",
                      nullptr, entry.accessPoints);
        }
        m_wifiNetworks->setItemData(m_wifiNetworks->count() - 1,
                                    tip.join(QStringLiteral("\n")),
                                    Qt::ToolTipRole);
    }

    if (anyMesh) {
        // The honest answer to "which node is strongest": you do not choose it
        // here, and no client can. What you can do is move the camera and watch
        // the signal on the Connection panel above settle.
        m_wifiHint->setText(
            tr("Some names were heard from several access points — that is a "
               "mesh. The camera joins the name, not a particular node; the "
               "mesh decides which one it talks to and hands it over as needed. "
               "To find the best spot, move the camera and watch “Wi-Fi signal” "
               "above: that is the link it actually has."));
        m_wifiHint->show();
    } else {
        m_wifiHint->hide();
    }

    m_status->setText(tr("%n network(s) found, strongest first.", nullptr,
                         int(names.size())));
}

void CameraSettingsDialog::onScanWifi()
{
    m_wifiScanButton->setEnabled(false);
    m_wifiNetworks->clear();
    m_wifiNetworks->addItem(tr("scanning…"));
    m_wifiHint->hide();
    m_status->setStyleSheet(QString());
    m_status->setText(tr("The camera is scanning for networks…"));
    m_client->scanWifi();
}

void CameraSettingsDialog::onJoinWifi()
{
    const QString ssid = m_wifiNetworks->currentText();
    if (ssid.isEmpty())
        return;

    QMessageBox confirm(this);
    confirm.setWindowTitle(tr("Change the camera's network"));
    confirm.setIcon(QMessageBox::Warning);
    confirm.setText(tr("<b>Move %1 to “%2”?</b>").arg(m_camera.label(), ssid));
    confirm.setInformativeText(
        tr("The camera tests the password first and refuses if it is wrong, so "
           "this is safer than it sounds.\n\n"
           "It will still disappear for a minute while it reconnects, and if "
           "the new network hands out a different address you will have to "
           "update it here afterwards."));
    QAbstractButton *go =
        confirm.addButton(tr("Join"), QMessageBox::DestructiveRole);
    confirm.addButton(QMessageBox::Cancel);
    confirm.setDefaultButton(QMessageBox::Cancel);
    confirm.exec();
    if (confirm.clickedButton() != go)
        return;

    m_wifiJoinButton->setEnabled(false);
    m_status->setText(tr("Testing the password on the camera…"));
    m_client->applyWifi(ssid, m_wifiPassword->text());
}

void CameraSettingsDialog::onNetworkInfo(const QJsonObject &info)
{
    const QJsonObject link = info.value(QStringLiteral("LocalLink")).toObject();
    const QJsonObject wifi = info.value(QStringLiteral("Wifi")).toObject();
    const QJsonObject ports = info.value(QStringLiteral("NetPort")).toObject();
    const QJsonObject dns = link.value(QStringLiteral("dns")).toObject();
    const QJsonObject stat = link.value(QStringLiteral("static")).toObject();

    QStringList rows;
    auto add = [&rows](const QString &label, const QString &value) {
        if (!value.isEmpty())
            rows << QStringLiteral("<b>%1</b> %2").arg(label, value);
    };

    add(tr("Link"), link.value(QStringLiteral("activeLink")).toString());
    add(tr("Address"), stat.value(QStringLiteral("ip")).toString());
    add(tr("Netmask"), stat.value(QStringLiteral("mask")).toString());
    add(tr("Gateway"), stat.value(QStringLiteral("gateway")).toString());
    add(tr("MAC"), link.value(QStringLiteral("mac")).toString());
    add(tr("DNS"), dns.value(QStringLiteral("dns1")).toString());
    add(tr("Network name"), wifi.value(QStringLiteral("ssid")).toString());

    QStringList open;
    const QList<QPair<QString, QString>> portMap{
        {QStringLiteral("httpPort"), QStringLiteral("HTTP")},
        {QStringLiteral("httpsPort"), QStringLiteral("HTTPS")},
        {QStringLiteral("rtspPort"), QStringLiteral("RTSP")},
        {QStringLiteral("rtmpPort"), QStringLiteral("RTMP")},
        {QStringLiteral("onvifPort"), QStringLiteral("ONVIF")},
        {QStringLiteral("mediaPort"), QStringLiteral("Baichuan")},
    };
    for (const auto &[key, name] : portMap) {
        const int port = ports.value(key).toInt();
        // The camera reports every port but also whether it is switched on;
        // listing a disabled one would be misleading.
        const QString enableKey = key.left(key.size() - 4) + QStringLiteral("Enable");
        const bool on = !ports.contains(enableKey) ||
                        ports.value(enableKey).toInt() != 0;
        if (port > 0 && on)
            open << QStringLiteral("%1 %2").arg(name).arg(port);
    }
    add(tr("Ports"), open.join(QStringLiteral(", ")));

    m_networkInfo->setText(rows.isEmpty() ? tr("The camera reported nothing.")
                                          : rows.join(QStringLiteral("<br>")));
}

void CameraSettingsDialog::buildMaintenanceTab()
{
    auto *page = new QWidget(this);

    m_rebootButton = new QPushButton(tr("Restart the camera"), page);
    m_rebootButton->setIcon(QIcon::fromTheme(QStringLiteral("system-reboot")));
    connect(m_rebootButton, &QPushButton::clicked,
            this, &CameraSettingsDialog::onReboot);

    auto *explanation = new QLabel(
        tr("The camera goes off the network for a minute or so and comes back "
           "on its own. Recordings on its SD card are not affected, and "
           "settings are kept.\n\n"
           "Worth trying when a camera has stopped answering, is refusing new "
           "connections, or has drifted out of step after a firmware update."),
        page);
    explanation->setWordWrap(true);

    auto *box = new QGroupBox(tr("Restart"), page);
    auto *boxLayout = new QVBoxLayout(box);
    boxLayout->addWidget(explanation);
    boxLayout->addWidget(m_rebootButton, 0, Qt::AlignLeft);

    // Factory reset is deliberately absent. Formatting a card destroys
    // recordings, which is bad enough to warrant the confirmation below; a
    // factory reset also wipes the network settings, and a camera that has
    // forgotten its Wi-Fi has to be fetched down off the wall. That belongs in
    // the manufacturer's own interface, where the warning is theirs.
    auto *note = new QLabel(
        tr("Factory reset is not offered here. It clears the network settings "
           "too, and a camera that has forgotten its Wi-Fi has to be taken "
           "down and reached by cable — use the camera's own web interface if "
           "you really want that."),
        page);
    note->setWordWrap(true);
    note->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    // ── condition ───────────────────────────────────────────────────────────
    m_performance = new QLabel(tr("Reading…"), page);
    m_performance->setWordWrap(true);
    auto *conditionBox = new QGroupBox(tr("Condition"), page);
    auto *conditionLayout = new QVBoxLayout(conditionBox);
    conditionLayout->addWidget(m_performance);

    // ── firmware ────────────────────────────────────────────────────────────
    m_firmware = new QLabel(tr("Not checked."), page);
    m_firmware->setWordWrap(true);

    m_checkFirmwareButton = new QPushButton(tr("Check for updates"), page);
    m_checkFirmwareButton->setToolTip(
        tr("The camera asks Reolink, not this computer — so it needs a way out "
           "to the internet of its own."));
    connect(m_checkFirmwareButton, &QPushButton::clicked, this, [this] {
        m_firmware->setStyleSheet(QString());
        m_firmware->setText(tr("Asking Reolink…"));
        m_checkFirmwareButton->setEnabled(false);
        m_client->checkFirmware();
    });

    m_upgradeButton = new QPushButton(tr("Install update"), page);
    m_upgradeButton->setEnabled(false);
    connect(m_upgradeButton, &QPushButton::clicked, this, [this] {
        QMessageBox confirm(this);
        confirm.setWindowTitle(tr("Install firmware"));
        confirm.setIcon(QMessageBox::Warning);
        confirm.setText(tr("<b>Update the firmware on %1?</b>").arg(m_camera.label()));
        confirm.setInformativeText(
            tr("The camera downloads the update itself and restarts. It will be "
               "unreachable for several minutes.\n\n"
               "Do not cut its power during the update — a camera interrupted "
               "mid-flash usually needs sending back."));
        QAbstractButton *go =
            confirm.addButton(tr("Install"), QMessageBox::DestructiveRole);
        confirm.addButton(QMessageBox::Cancel);
        confirm.setDefaultButton(QMessageBox::Cancel);
        confirm.exec();
        if (confirm.clickedButton() == go) {
            m_upgradeButton->setEnabled(false);
            m_client->upgradeFirmware();
        }
    });

    auto *firmwareRow = new QHBoxLayout;
    firmwareRow->addWidget(m_checkFirmwareButton);
    firmwareRow->addWidget(m_upgradeButton);
    firmwareRow->addStretch(1);

    auto *firmwareBox = new QGroupBox(tr("Firmware"), page);
    auto *firmwareLayout = new QVBoxLayout(firmwareBox);
    firmwareLayout->addWidget(m_firmware);
    firmwareLayout->addLayout(firmwareRow);

    // ── storage ─────────────────────────────────────────────────────────────
    auto *formatButton = new QPushButton(tr("Format the SD card"), page);
    connect(formatButton, &QPushButton::clicked,
            this, &CameraSettingsDialog::onFormatStorage);

    auto *storageBox = new QGroupBox(tr("Storage"), page);
    auto *storageLayout = new QVBoxLayout(storageBox);
    auto *storageNote = new QLabel(
        tr("Formatting erases every recording on the card. There is no undo "
           "and no confirmation from the camera afterwards."),
        page);
    storageNote->setWordWrap(true);
    storageLayout->addWidget(storageNote);
    storageLayout->addWidget(formatButton, 0, Qt::AlignLeft);

    // ── what this firmware actually has ─────────────────────────────────────
    // A plain text box rather than a label: the answer is forty-odd command
    // names, and as a wrapped label it decided the whole dialog should be
    // sixteen hundred pixels wide.
    m_capabilities = new QPlainTextEdit(page);
    m_capabilities->setReadOnly(true);
    m_capabilities->setPlainText(tr("Not checked."));
    m_capabilities->setMinimumHeight(90);
    m_capabilities->setMaximumHeight(160);

    auto *probeButton = new QPushButton(tr("Ask the camera"), page);
    connect(probeButton, &QPushButton::clicked, this,
            &CameraSettingsDialog::onProbeCapabilities);

    auto *copyCapabilities = new QPushButton(tr("Copy the list"), page);
    connect(copyCapabilities, &QPushButton::clicked, this, [this] {
        QApplication::clipboard()->setText(m_capabilityReport);
        m_status->setText(tr("Copied."));
    });

    auto *capabilityRow = new QHBoxLayout;
    capabilityRow->addWidget(probeButton);
    capabilityRow->addWidget(copyCapabilities);
    capabilityRow->addStretch(1);

    auto *capabilityBox = new QGroupBox(tr("What this camera supports"), page);
    auto *capabilityLayout = new QVBoxLayout(capabilityBox);
    capabilityLayout->addWidget(new QLabel(
        tr("Reolink firmware differs enormously between models, and the only "
           "reliable way to know what a camera can do is to ask it. If "
           "something is missing from leolink that your camera clearly has, "
           "this list in a bug report is what makes it possible to add."),
        capabilityBox));
    capabilityLayout->addLayout(capabilityRow);
    capabilityLayout->addWidget(m_capabilities);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(box);
    layout->addWidget(conditionBox);
    layout->addWidget(firmwareBox);
    layout->addWidget(storageBox);
    layout->addWidget(capabilityBox);
    layout->addWidget(note);
    layout->addStretch(1);

    addPage(page, tr("Maintenance"));
}

void CameraSettingsDialog::onProbeCapabilities()
{
    // Everything leolink knows how to ask for, plus the commands it would like
    // to support and cannot test — the mobile-data ones especially.
    static const QStringList kCommands{
        QStringLiteral("GetEnc"),        QStringLiteral("GetImage"),
        QStringLiteral("GetIsp"),        QStringLiteral("GetOsd"),
        QStringLiteral("GetMask"),       QStringLiteral("GetCrop"),
        QStringLiteral("GetAlarm"),      QStringLiteral("GetMdAlarm"),
        QStringLiteral("GetAiCfg"),      QStringLiteral("GetAiAlarm"),
        QStringLiteral("GetAudioAlarm"), QStringLiteral("GetBuzzerAlarmV20"),
        QStringLiteral("GetRec"),        QStringLiteral("GetRecV20"),
        QStringLiteral("GetEmail"),      QStringLiteral("GetEmailV20"),
        QStringLiteral("GetFtp"),        QStringLiteral("GetFtpV20"),
        QStringLiteral("GetPush"),       QStringLiteral("GetPushV20"),
        QStringLiteral("GetNetPort"),    QStringLiteral("GetLocalLink"),
        QStringLiteral("GetWifi"),       QStringLiteral("GetDdns"),
        QStringLiteral("GetP2p"),        QStringLiteral("GetUpnp"),
        QStringLiteral("GetNtp"),        QStringLiteral("GetTime"),
        QStringLiteral("GetPtzPreset"),  QStringLiteral("GetAutoFocus"),
        QStringLiteral("GetZoomFocus"),  QStringLiteral("GetIrLights"),
        QStringLiteral("GetPowerLed"),   QStringLiteral("GetWhiteLed"),
        QStringLiteral("GetHddInfo"),    QStringLiteral("GetPerformance"),
        QStringLiteral("GetSim"),        QStringLiteral("GetSimModuleInfo"),
        QStringLiteral("GetLteInfo"),    QStringLiteral("GetBatteryInfo"),
        QStringLiteral("GetChannelstatus"),
    };

    m_capabilities->setPlainText(tr("Asking about %n command(s)…", nullptr,
                                    int(kCommands.size())));
    m_client->probeCommands(kCommands);
}

void CameraSettingsDialog::onCapabilities(const QMap<QString, QString> &results)
{
    QStringList supported;
    QStringList missing;
    for (auto it = results.cbegin(); it != results.cend(); ++it) {
        if (it.value().isEmpty())
            supported.append(it.key());
        else
            missing.append(it.key());
    }

    m_capabilities->setPlainText(
        tr("Supported (%1):\n%2\n\nNot supported (%3):\n%4")
            .arg(supported.size())
            .arg(supported.join(QStringLiteral(", ")))
            .arg(missing.size())
            .arg(missing.join(QStringLiteral(", "))));

    // The copyable form carries the reason each one failed, which distinguishes
    // "this firmware has no such command" from "this hardware cannot do it".
    QStringList lines;
    lines << QStringLiteral("leolink capability probe")
          << QStringLiteral("camera: %1").arg(m_camera.label())
          << QString();
    for (auto it = results.cbegin(); it != results.cend(); ++it) {
        lines << QStringLiteral("  %1 %2")
                     .arg(it.key().leftJustified(22),
                          it.value().isEmpty() ? QStringLiteral("supported")
                                               : it.value());
    }
    m_capabilityReport = lines.join(QLatin1Char('\n'));
}

void CameraSettingsDialog::onReboot()
{
    QMessageBox confirm(this);
    confirm.setWindowTitle(tr("Restart the camera"));
    confirm.setIcon(QMessageBox::Warning);
    confirm.setText(tr("<b>Restart %1?</b>").arg(m_camera.label()));
    confirm.setInformativeText(
        tr("The picture will be gone for about a minute. Anything being "
           "recorded right now will stop."));
    QAbstractButton *go =
        confirm.addButton(tr("Restart"), QMessageBox::DestructiveRole);
    confirm.addButton(QMessageBox::Cancel);
    confirm.setDefaultButton(QMessageBox::Cancel);
    confirm.exec();
    if (confirm.clickedButton() != go)
        return;

    m_rebootButton->setEnabled(false);
    m_status->setStyleSheet(QString());
    m_status->setText(tr("Asking %1 to restart…").arg(m_camera.host));
    m_client->reboot();
}

void CameraSettingsDialog::beginSection(const QString &title)
{
    auto *heading = new QListWidgetItem(title, m_nav);
    heading->setFlags(Qt::NoItemFlags);   // a label, not a destination
    QFont font = heading->font();
    font.setBold(true);
    font.setPointSizeF(font.pointSizeF() * 0.85);
    heading->setFont(font);
    heading->setForeground(palette().color(QPalette::Disabled, QPalette::Text));
    // Air above every heading but the first, so the halves read as halves.
    if (m_nav->count() > 1)
        heading->setSizeHint(QSize(0, 34));
}

void CameraSettingsDialog::addPage(QWidget *page, const QString &title)
{
    // Inside a scroll area, every one of them.
    //
    // Two problems, one cause. A word-wrapped QLabel reports the width of its
    // whole text as what it would like, and a layout hands that straight on as
    // the dialog's minimum — so the window opened 1663 pixels wide and could
    // not be dragged narrower, because its minimum size was its preferred size.
    // A scroll area has a small minimum of its own and resizes its contents to
    // the viewport, which makes the labels wrap to whatever width the user
    // chooses instead of choosing it for them.
    auto *area = new QScrollArea(this);
    area->setWidget(page);
    area->setWidgetResizable(true);
    area->setFrameShape(QFrame::NoFrame);

    auto *entry = new QListWidgetItem(title, m_nav);
    entry->setData(Qt::UserRole, m_stack->addWidget(area));
}

SectionEditor *CameraSettingsDialog::addSection(QWidget *page,
                                                const QString &command,
                                                const QString &title,
                                                const QList<FieldSpec> &fields,
                                                bool perChannel)
{
    auto *editor = new SectionEditor(title, fields, page);
    m_sections.insert(command, editor);

    QJsonObject param;
    if (perChannel)
        param[QStringLiteral("channel")] = 0;
    m_sectionParams.insert(command, param);

    // GetIsp → "Isp": usually the reply wraps the section under the command
    // name minus its verb. Usually. A Duo 2 answers GetAudioAlarmV20 with
    // "Audio" and GetAiCfg with "AiDetectType", so the name is only a guess
    // until the camera has answered — onSectionReady() replaces it with the key
    // the reply actually used, and that is what the Set is built from.
    QString wrapper = command.mid(3);
    if (wrapper.endsWith(QLatin1String("V20")))
        wrapper.chop(3);
    m_sectionWrappers.insert(command, wrapper);

    connect(editor, &SectionEditor::edited, this,
            [this] { m_applyButton->setEnabled(true); });
    return editor;
}

void CameraSettingsDialog::buildPictureSections()
{
    // Appended to the picture page, next to the brightness sliders.
}

void CameraSettingsDialog::buildOverlayTab()
{
    auto *page = new QWidget(this);
    auto *layout = new QVBoxLayout(page);

    layout->addWidget(addSection(page, QStringLiteral("GetOsd"),
                                 tr("On-screen text"),
                                 {
                                     {QStringLiteral("bgcolor"), tr("Background"),
                                      tr("Draws a box behind the text so it stays "
                                         "readable over a bright scene."), {}},
                                     {QStringLiteral("watermark"), tr("Watermark"),
                                      tr("Embeds a mark in the recording itself."), {}},
                                 }));

    // ── privacy areas ───────────────────────────────────────────────────────
    m_maskButton = new QPushButton(tr("Privacy areas…"), page);
    m_maskButton->setEnabled(false);   // until the camera says it has them
    m_maskButton->setToolTip(
        tr("Parts of the view the camera blanks before anything leaves it."));
    connect(m_maskButton, &QPushButton::clicked,
            this, &CameraSettingsDialog::onEditPrivacyMask);

    m_maskSummary = new QLabel(page);
    m_maskSummary->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto *maskRow = new QHBoxLayout;
    maskRow->addWidget(m_maskButton);
    maskRow->addWidget(m_maskSummary, 1);

    auto *maskBox = new QGroupBox(tr("Privacy"), page);
    auto *maskLayout = new QVBoxLayout(maskBox);
    maskLayout->addLayout(maskRow);
    maskLayout->addWidget(new QLabel(
        tr("Blanked in the camera itself, so the covered part is missing from "
           "every viewer and every recording — a neighbour's window, or a desk "
           "that should not be on film."),
        maskBox));
    layout->addWidget(maskBox);

    auto *note = new QLabel(
        tr("The camera burns this into the picture, so it appears in every "
           "recording and every client — not only here."),
        page);
    note->setWordWrap(true);
    note->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
    layout->addWidget(note);
    layout->addStretch(1);

    addPage(page, tr("Overlay"));
}

void CameraSettingsDialog::buildDetectionTab()
{
    auto *page = new QWidget(this);
    auto *layout = new QVBoxLayout(page);

    layout->addWidget(addSection(page, QStringLiteral("GetMdAlarm"),
                                 tr("Motion detection in the camera"),
                                 {
                                     {QStringLiteral("sensitivity"), tr("Sensitivity"),
                                      tr("Higher notices more, including shadows "
                                         "and headlights."), {}},
                                     {QStringLiteral("enable"), tr("Switched on"), {}, {}},
                                 }));

    // ── the parts a generated form cannot express ───────────────────────────
    // Three different things, which looked like one because they all say
    // "when" or "where". Separated and each labelled with what it decides.
    m_areaButton = new QPushButton(tr("Choose the area…"), page);
    m_areaButton->setToolTip(
        tr("Which parts of the picture the camera watches. Everything outside "
           "the area is ignored — a road at the edge of view, a tree in the "
           "wind, a neighbour's door."));
    connect(m_areaButton, &QPushButton::clicked,
            this, &CameraSettingsDialog::onEditDetectionArea);

    auto *areaBox = new QGroupBox(tr("Where it looks"), page);
    auto *areaLayout = new QVBoxLayout(areaBox);
    areaLayout->addWidget(m_areaButton, 0, Qt::AlignLeft);

    m_detectionScheduleButton = new QPushButton(tr("Choose the hours…"), page);
    connect(m_detectionScheduleButton, &QPushButton::clicked,
            this, &CameraSettingsDialog::onEditDetectionSchedule);

    auto *scheduleNote = new QLabel(
        tr("A week of hours: in the ones you tick, the camera reports motion; "
           "in the rest it stays quiet. Nothing to do with how sensitive it is "
           "— that is set below."),
        page);
    scheduleNote->setWordWrap(true);
    scheduleNote->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto *scheduleBox = new QGroupBox(tr("When it reports at all"), page);
    auto *scheduleLayout = new QVBoxLayout(scheduleBox);
    scheduleLayout->addWidget(scheduleNote);
    scheduleLayout->addWidget(m_detectionScheduleButton, 0, Qt::AlignLeft);

    m_sensitivityTable = new QTableWidget(0, 3, page);
    m_sensitivityTable->setHorizontalHeaderLabels(
        {tr("From"), tr("To"), tr("Sensitivity")});
    m_sensitivityTable->horizontalHeader()->setStretchLastSection(true);
    m_sensitivityTable->verticalHeader()->setVisible(false);
    connect(m_sensitivityTable, &QTableWidget::cellChanged, this,
            [this](int, int) {
                if (m_loadingAlarm)
                    return;
                m_alarmDirty = true;
                m_applyButton->setEnabled(true);
            });

    auto *sensNote = new QLabel(
        tr("Within a day the camera can be more or less easily triggered. This "
           "is how you stop headlights at night setting everything off without "
           "making it deaf by day. The camera fixes how many periods there are; "
           "their times and sensitivities are yours."),
        page);
    sensNote->setWordWrap(true);
    sensNote->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto *sensBox = new QGroupBox(tr("How readily it triggers"), page);
    auto *sensLayout = new QVBoxLayout(sensBox);
    sensLayout->addWidget(sensNote);
    sensLayout->addWidget(m_sensitivityTable);

    // A Duo 2 answers with {dog_cat, face, people, vehicle}; a model with
    // fewer talents simply reports fewer of them, and the form follows.
    layout->addWidget(addSection(page, QStringLiteral("GetAiCfg"),
                                 tr("What it recognises"),
                                 {
                                     {QStringLiteral("people"), tr("People"), {}, {}},
                                     {QStringLiteral("vehicle"), tr("Vehicles"), {}, {}},
                                     {QStringLiteral("dog_cat"), tr("Animals"), {}, {}},
                                     {QStringLiteral("face"), tr("Faces"), {}, {}},
                                 }));

    m_alarmBox = new QGroupBox(tr("Camera-side detection"), page);
    auto *alarmLayout = new QVBoxLayout(m_alarmBox);
    alarmLayout->addWidget(areaBox);
    alarmLayout->addWidget(scheduleBox);
    alarmLayout->addWidget(sensBox);
    m_alarmBox->setEnabled(false);   // until the camera has answered
    layout->addWidget(m_alarmBox);

    auto *note = new QLabel(
        tr("This is the camera's own detection, the one it reports over ONVIF. "
           "leolink's own analysis of the picture is set separately, under "
           "Cameras → Events."),
        page);
    note->setWordWrap(true);
    note->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
    layout->addWidget(note);
    layout->addStretch(1);

    addPage(page, tr("Detection"));
}

void CameraSettingsDialog::onAlarmReady(const QJsonObject &alarm)
{
    m_alarm = alarm;
    m_alarmBox->setEnabled(true);

    const QJsonObject scope = alarm.value(QStringLiteral("scope")).toObject();
    m_areaButton->setEnabled(scope.contains(QStringLiteral("table")));
    m_detectionScheduleButton->setEnabled(
        alarm.contains(QStringLiteral("schedule")));

    // Two shapes again. Newer firmware carries both an old `sens` array and a
    // `newSens.sens` one with an enable flag per band, and says which it obeys
    // through `useNewSens`. Editing the one it ignores would look like the
    // setting had no effect.
    m_usesNewSens = alarm.value(QStringLiteral("useNewSens")).toInt() != 0 &&
                    alarm.contains(QStringLiteral("newSens"));

    // Sensitivity bands, exactly as many as the camera reports — models differ,
    // and inventing a fifth row would be rejected on write.
    m_loadingAlarm = true;
    const QJsonArray bands =
        m_usesNewSens
            ? alarm.value(QStringLiteral("newSens")).toObject()
                   .value(QStringLiteral("sens")).toArray()
            : alarm.value(QStringLiteral("sens")).toArray();
    m_sensitivityTable->setRowCount(bands.size());
    for (int row = 0; row < bands.size(); ++row) {
        const QJsonObject band = bands.at(row).toObject();
        auto time = [](int hour, int minute) {
            return QStringLiteral("%1:%2")
                .arg(hour, 2, 10, QLatin1Char('0'))
                .arg(minute, 2, 10, QLatin1Char('0'));
        };
        // Editable, because the camera's own range document says they are:
        // beginHour, beginMin, endHour and endMin all come with min and max.
        // They were locked here on an assumption, and the assumption was wrong.
        Q_UNUSED(time);
        auto *from = new QTimeEdit(
            QTime(band.value(QStringLiteral("beginHour")).toInt(),
                  band.value(QStringLiteral("beginMin")).toInt()),
            m_sensitivityTable);
        auto *to = new QTimeEdit(
            QTime(band.value(QStringLiteral("endHour")).toInt(),
                  band.value(QStringLiteral("endMin")).toInt()),
            m_sensitivityTable);
        for (QTimeEdit *edit : {from, to}) {
            edit->setDisplayFormat(QStringLiteral("HH:mm"));
            edit->setFrame(false);
            connect(edit, &QTimeEdit::timeChanged, this, [this] {
                if (m_loadingAlarm)
                    return;
                m_alarmDirty = true;
                m_applyButton->setEnabled(true);
            });
        }
        m_sensitivityTable->setCellWidget(row, 0, from);
        m_sensitivityTable->setCellWidget(row, 1, to);
        m_sensitivityTable->setItem(
            row, 2,
            new QTableWidgetItem(QString::number(
                band.value(QStringLiteral("sensitivity")).toInt())));
    }
    m_loadingAlarm = false;
}

void CameraSettingsDialog::onEditDetectionArea()
{
    QJsonObject scope = m_alarm.value(QStringLiteral("scope")).toObject();
    const int columns = scope.value(QStringLiteral("cols")).toInt(80);
    const int rows = scope.value(QStringLiteral("rows")).toInt(45);

    ZoneEditor editor(
        m_camera, scope.value(QStringLiteral("table")).toString(), this,
        columns, rows,
        tr("%1 — the camera's detection area").arg(m_camera.label()),
        tr("Drag over the picture to choose what the camera watches. Darkened "
           "areas are ignored. This is the camera's own grid, %1 by %2, so it "
           "is finer than leolink's own.")
            .arg(columns).arg(rows));
    if (editor.exec() != QDialog::Accepted)
        return;

    scope[QStringLiteral("table")] = editor.mask();
    m_alarm[QStringLiteral("scope")] = scope;
    m_alarmDirty = true;
    m_applyButton->setEnabled(true);
}

void CameraSettingsDialog::onEditDetectionSchedule()
{
    QJsonObject schedule = m_alarm.value(QStringLiteral("schedule")).toObject();
    if (editSchedule(schedule,
                     tr("%1 — when to watch").arg(m_camera.label()),
                     tr("Hours in which the camera raises motion events. "
                        "Outside them it still sees, but says nothing."))) {
        m_alarm[QStringLiteral("schedule")] = schedule;
        m_alarmDirty = true;
        m_applyButton->setEnabled(true);
    }
}

QString CameraSettingsDialog::describeAlarmType(const QString &key)
{
    // The camera's own names for what it can tell apart.
    if (key == QLatin1String("MD"))         return tr("Any movement");
    if (key == QLatin1String("TIMING"))     return tr("Continuous");
    if (key == QLatin1String("AI_PEOPLE"))  return tr("People");
    if (key == QLatin1String("AI_VEHICLE")) return tr("Vehicles");
    if (key == QLatin1String("AI_DOG_CAT")) return tr("Animals");
    if (key == QLatin1String("AI_FACE"))    return tr("Faces");
    return key;
}

bool CameraSettingsDialog::editSchedule(QJsonObject &schedule,
                                        const QString &title,
                                        const QString &explanation)
{
    // Two shapes, again. Older firmware keeps one week of hours; a Duo 2 keeps
    // one per kind of thing it can recognise — movement, people, vehicles,
    // animals — so "when to watch" is a question that needs asking once per
    // type. Rather than invent a screen full of grids, the type is chosen
    // first and the same editor used for each.
    const QJsonValue table = schedule.value(QStringLiteral("table"));

    if (table.isObject()) {
        const QJsonObject byType = table.toObject();
        QStringList keys = byType.keys();
        if (keys.isEmpty())
            return false;

        QStringList labels;
        for (const QString &key : std::as_const(keys))
            labels << describeAlarmType(key);

        bool ok = false;
        const QString chosen = QInputDialog::getItem(
            this, title,
            tr("This camera keeps a separate week for each kind of event. "
               "Which one?"),
            labels, 0, false, &ok);
        if (!ok)
            return false;
        const int index = labels.indexOf(chosen);
        if (index < 0)
            return false;
        const QString key = keys.at(index);

        QString week = byType.value(key).toString();
        if (week.size() != ScheduleGrid::kCells)
            week = QString(ScheduleGrid::kCells, QLatin1Char('1'));

        ScheduleDialog dialog(QStringLiteral("%1 — %2").arg(title, chosen),
                              explanation, week, kScheduleFirstDay, this);
        if (dialog.exec() != QDialog::Accepted)
            return false;

        QJsonObject updated = byType;
        updated[key] = dialog.table();
        schedule[QStringLiteral("table")] = updated;
        return true;
    }

    QString week = table.toString();
    if (week.size() != ScheduleGrid::kCells)
        week = QString(ScheduleGrid::kCells, QLatin1Char('1'));

    ScheduleDialog dialog(title, explanation, week, kScheduleFirstDay, this);
    if (dialog.exec() != QDialog::Accepted)
        return false;
    schedule[QStringLiteral("table")] = dialog.table();
    return true;
}

void CameraSettingsDialog::buildMobileTab()
{
    auto *page = new QWidget(this);
    auto *layout = new QVBoxLayout(page);

    // Every one of these is asked for, and whichever the camera knows produces
    // a form. The rest answer -9 and their section stays empty and hidden —
    // which is the whole reason the forms are generated from the camera's own
    // range document rather than written out by hand. It also means this tab
    // costs nothing on the overwhelming majority of cameras, which have no
    // modem at all.
    layout->addWidget(addSection(page, QStringLiteral("GetSim"),
                                 tr("SIM card"),
                                 {
                                     {QStringLiteral("pin"), tr("PIN"),
                                      tr("Only needed if the card asks for one. "
                                         "Three wrong tries lock the card and it "
                                         "then needs a PUK, which only your "
                                         "operator has."), {}},
                                     {QStringLiteral("apn"), tr("Access point (APN)"), {}, {}},
                                     {QStringLiteral("userName"), tr("User"), {}, {}},
                                     {QStringLiteral("password"), tr("Password"), {}, {}},
                                     {QStringLiteral("authType"), tr("Authentication"), {}, {}},
                                     {QStringLiteral("enable"), tr("Use mobile data"), {}, {}},
                                 }, false));

    layout->addWidget(addSection(page, QStringLiteral("GetSimModuleInfo"),
                                 tr("Modem"),
                                 {
                                     {QStringLiteral("simState"), tr("Card"), {}, {}},
                                     {QStringLiteral("operatorName"), tr("Network"), {}, {}},
                                     {QStringLiteral("netType"), tr("Type"), {}, {}},
                                     {QStringLiteral("signal"), tr("Signal"), {}, {}},
                                     {QStringLiteral("imei"), tr("IMEI"), {}, {}},
                                     {QStringLiteral("iccid"), tr("Card number"), {}, {}},
                                 }, false));

    layout->addWidget(addSection(page, QStringLiteral("GetLteInfo"),
                                 tr("Mobile connection"),
                                 {
                                     {QStringLiteral("dataUsage"), tr("Data used"), {}, {}},
                                     {QStringLiteral("dataLimit"), tr("Monthly limit"), {}, {}},
                                     {QStringLiteral("enable"), tr("Switched on"), {}, {}},
                                 }, false));

    // Said plainly rather than hidden in a manual. Shipping this untested is
    // the right call — an LTE owner can use it and tell us what happened — but
    // pretending it is proven would not be.
    auto *warning = new QLabel(
        tr("<b>Not tested on real hardware.</b> Nobody involved in leolink owns "
           "a camera with a modem, so this was written from the protocol alone. "
           "It cannot damage anything — a command the camera does not know is "
           "simply refused — but it may equally show nothing at all.\n\n"
           "If your camera has a SIM, “What this camera supports” under "
           "Maintenance lists the commands its firmware actually has. That "
           "list, in a bug report, is what would let this be finished properly."),
        page);
    warning->setWordWrap(true);
    warning->setTextFormat(Qt::RichText);
    layout->addWidget(warning);
    layout->addStretch(1);

    addPage(page, tr("Mobile data"));
}

void CameraSettingsDialog::onMaskReady(const QJsonObject &mask,
                                       const QJsonObject &range)
{
    m_mask = mask;
    m_maskMaximum = range.value(QStringLiteral("maxAreas")).toInt(4);
    m_maskButton->setEnabled(true);
    refreshMaskSummary();
}

void CameraSettingsDialog::refreshMaskSummary()
{
    const int count = int(m_mask.value(QStringLiteral("area")).toArray().size());
    const bool on = m_mask.value(QStringLiteral("enable")).toInt() != 0;
    if (count == 0)
        m_maskSummary->setText(tr("nothing blanked"));
    else if (on)
        m_maskSummary->setText(tr("%n area(s) blanked", nullptr, count));
    else
        m_maskSummary->setText(tr("%n area(s), switched off", nullptr, count));
}

void CameraSettingsDialog::onEditPrivacyMask()
{
    // The camera stores each area as a rectangle in pixels, together with the
    // picture size those pixels refer to. Working in fractions here and
    // converting at the edges means a mask survives a change of resolution
    // instead of ending up somewhere else in the frame.
    QSize reference = mainStreamSize();

    QList<QRectF> areas;
    for (const QJsonValue &value : m_mask.value(QStringLiteral("area")).toArray()) {
        const QJsonObject entry = value.toObject();
        const QJsonObject block = entry.value(QStringLiteral("block")).toObject();
        const QJsonObject screen = entry.value(QStringLiteral("screen")).toObject();
        const double screenWidth =
            screen.value(QStringLiteral("width")).toDouble(reference.width());
        const double screenHeight =
            screen.value(QStringLiteral("height")).toDouble(reference.height());
        if (screenWidth <= 0 || screenHeight <= 0)
            continue;
        const double w = block.value(QStringLiteral("width")).toDouble();
        const double h = block.value(QStringLiteral("height")).toDouble();
        if (w <= 0 || h <= 0)
            continue;   // the camera fills an empty slot with zeroes
        areas.append(QRectF(block.value(QStringLiteral("x")).toDouble() / screenWidth,
                            block.value(QStringLiteral("y")).toDouble() / screenHeight,
                            w / screenWidth, h / screenHeight));
    }

    MaskEditor editor(m_camera, areas, m_maskMaximum, this);
    if (editor.exec() != QDialog::Accepted)
        return;

    QJsonArray out;
    for (const QRectF &area : editor.areas()) {
        QJsonObject block;
        block[QStringLiteral("x")] = qRound(area.x() * reference.width());
        block[QStringLiteral("y")] = qRound(area.y() * reference.height());
        block[QStringLiteral("width")] = qRound(area.width() * reference.width());
        block[QStringLiteral("height")] = qRound(area.height() * reference.height());
        QJsonObject screen;
        screen[QStringLiteral("width")] = reference.width();
        screen[QStringLiteral("height")] = reference.height();
        QJsonObject entry;
        entry[QStringLiteral("block")] = block;
        entry[QStringLiteral("screen")] = screen;
        out.append(entry);
    }
    m_mask[QStringLiteral("area")] = out;
    // Switching the feature on with the first area saves a second step that
    // would otherwise leave the areas drawn but doing nothing.
    m_mask[QStringLiteral("enable")] = out.isEmpty() ? 0 : 1;
    m_maskDirty = true;
    refreshMaskSummary();
    m_applyButton->setEnabled(true);
}

QSize CameraSettingsDialog::mainStreamSize() const
{
    // "2560*1440" as the encoder reports it. Falls back to a common size when
    // the encoder has not answered yet — the mask is stored in fractions, so a
    // wrong guess here shifts nothing the user drew.
    const QString size = m_encValue.value(QStringLiteral("mainStream"))
                             .toObject()
                             .value(QStringLiteral("size"))
                             .toString();
    const QStringList parts = size.split(QLatin1Char('*'));
    if (parts.size() == 2) {
        const int width = parts.at(0).toInt();
        const int height = parts.at(1).toInt();
        if (width > 0 && height > 0)
            return QSize(width, height);
    }
    return QSize(1920, 1080);
}

void CameraSettingsDialog::onEditRecordingSchedule()
{
    QJsonObject schedule = m_recording.value(QStringLiteral("schedule")).toObject();
    if (editSchedule(schedule,
                     tr("%1 — when to record").arg(m_camera.label()),
                     tr("Hours in which the camera records to its own card. "
                        "This needs a card fitted; recording to this computer "
                        "is set under Cameras → Events and works without one."))) {
        m_recording[QStringLiteral("schedule")] = schedule;
        m_recordingDirty = true;
        m_applyButton->setEnabled(true);
    }
}

QJsonObject CameraSettingsDialog::collectAlarm() const
{
    QJsonObject alarm = m_alarm;

    // The camera reads back `enable` as a bit field — this one answers 1602 —
    // but refuses anything but 0 or 1 on write, with a bare "param error". So
    // even writing back exactly what was read is rejected, which is how this
    // was found: a round trip that changed nothing still failed.
    //
    // Measured on an RLC-410W: with enable normalised to 1, every shape of
    // SetAlarm was accepted; with 1602, none was. Reading it back afterwards
    // gives 1602 again, so the camera rebuilds the field itself and nothing is
    // lost by sending the plain flag.
    const int enable = alarm.value(QStringLiteral("enable")).toInt();
    alarm[QStringLiteral("enable")] = enable != 0 ? 1 : 0;

    // Nulls come back in places the camera will not take them — `recChannel`
    // is null on a model with no recording channels. Dropping them is safe:
    // the camera fills in its own defaults for anything absent.
    QJsonObject action = alarm.value(QStringLiteral("action")).toObject();
    for (const QString &key : action.keys()) {
        if (action.value(key).isNull())
            action.remove(key);
    }
    if (!action.isEmpty())
        alarm[QStringLiteral("action")] = action;
    else
        alarm.remove(QStringLiteral("action"));

    QJsonObject newSens = alarm.value(QStringLiteral("newSens")).toObject();
    QJsonArray bands = m_usesNewSens
                           ? newSens.value(QStringLiteral("sens")).toArray()
                           : alarm.value(QStringLiteral("sens")).toArray();
    for (int row = 0; row < m_sensitivityTable->rowCount() &&
                      row < bands.size(); ++row) {
        QJsonObject band = bands.at(row).toObject();

        if (auto *from = qobject_cast<QTimeEdit *>(
                m_sensitivityTable->cellWidget(row, 0))) {
            band[QStringLiteral("beginHour")] = from->time().hour();
            band[QStringLiteral("beginMin")] = from->time().minute();
        }
        if (auto *to = qobject_cast<QTimeEdit *>(
                m_sensitivityTable->cellWidget(row, 1))) {
            band[QStringLiteral("endHour")] = to->time().hour();
            band[QStringLiteral("endMin")] = to->time().minute();
        }
        if (QTableWidgetItem *item = m_sensitivityTable->item(row, 2))
            band[QStringLiteral("sensitivity")] = item->text().toInt();

        bands[row] = band;
    }
    if (m_usesNewSens) {
        newSens[QStringLiteral("sens")] = bands;
        alarm[QStringLiteral("newSens")] = newSens;
    } else {
        alarm[QStringLiteral("sens")] = bands;
    }
    return alarm;
}

void CameraSettingsDialog::buildRecordingTab()
{
    auto *page = new QWidget(this);
    auto *layout = new QVBoxLayout(page);

    // Older firmware: GetRec. Newer: GetRecV20. Both are asked for; the one
    // this camera does not have answers -9 and stays hidden.
    layout->addWidget(addSection(page, QStringLiteral("GetRecV20"),
                                 tr("Recording to the camera's card"),
                                 {
                                     {QStringLiteral("overwrite"), tr("Overwrite when full"), {}, {}},
                                     {QStringLiteral("preRec"), tr("Record before the event"), {}, {}},
                                     {QStringLiteral("postRec"), tr("Keep recording after"), {}, {}},
                                     {QStringLiteral("packTime"), tr("File length"), {}, {}},
                                     {QStringLiteral("enable"), tr("Switched on"), {}, {}},
                                 }));

    layout->addWidget(addSection(page, QStringLiteral("GetRec"),
                                 tr("Recording to the camera's card"),
                                 {
                                     {QStringLiteral("overwrite"), tr("Overwrite when full"),
                                      tr("Off means recording simply stops once the "
                                         "card fills up."), {}},
                                     {QStringLiteral("preRec"), tr("Record before the event"),
                                      tr("Keeps the seconds leading up to a trigger, "
                                         "which is usually the interesting part."), {}},
                                     {QStringLiteral("postRec"), tr("Keep recording after"), {}, {}},
                                     {QStringLiteral("packTime"), tr("File length"), {}, {}},
                                 }));

    m_recordScheduleButton = new QPushButton(tr("When to record…"), page);
    m_recordScheduleButton->setEnabled(false);   // until the camera answers
    m_recordScheduleButton->setToolTip(
        tr("Hours of the week the camera records to its card by itself."));
    connect(m_recordScheduleButton, &QPushButton::clicked,
            this, &CameraSettingsDialog::onEditRecordingSchedule);

    auto *scheduleRow = new QHBoxLayout;
    scheduleRow->addWidget(m_recordScheduleButton);
    scheduleRow->addStretch(1);
    layout->addLayout(scheduleRow);

    auto *note = new QLabel(
        tr("These govern what the camera writes to its own SD card. Recording "
           "to this computer is set under Cameras → Events and needs no card."),
        page);
    note->setWordWrap(true);
    note->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
    layout->addWidget(note);
    layout->addStretch(1);

    addPage(page, tr("Recording"));
}

void CameraSettingsDialog::buildAlertTab()
{
    auto *page = new QWidget(this);
    auto *layout = new QVBoxLayout(page);

    layout->addWidget(addSection(page, QStringLiteral("GetEmailV20"), tr("E-mail"),
                                 {
                                     {QStringLiteral("smtpServer"), tr("Server"), {}, {}},
                                     {QStringLiteral("smtpPort"), tr("Port"), {}, {}},
                                     {QStringLiteral("userName"), tr("User"), {}, {}},
                                     {QStringLiteral("password"), tr("Password"), {}, {}},
                                     {QStringLiteral("ssl"), tr("Encrypted"), {}, {}},
                                     {QStringLiteral("interval"), tr("Not more often than"), {}, {}},
                                     {QStringLiteral("attachment"), tr("Attach"), {}, {}},
                                     {QStringLiteral("enable"), tr("Switched on"), {}, {}},
                                 }, false));

    layout->addWidget(addSection(page, QStringLiteral("GetFtpV20"), tr("FTP upload"),
                                 {
                                     {QStringLiteral("server"), tr("Server"), {}, {}},
                                     {QStringLiteral("port"), tr("Port"), {}, {}},
                                     {QStringLiteral("userName"), tr("User"), {}, {}},
                                     {QStringLiteral("password"), tr("Password"), {}, {}},
                                     {QStringLiteral("remoteDir"), tr("Folder"), {}, {}},
                                     {QStringLiteral("enable"), tr("Switched on"), {}, {}},
                                 }, false));

    layout->addWidget(addSection(page, QStringLiteral("GetPushV20"),
                                 tr("Push notifications"),
                                 {
                                     {QStringLiteral("enable"), tr("Switched on"), {}, {}},
                                 }, false));

    layout->addWidget(addSection(page, QStringLiteral("GetEmail"), tr("E-mail"),
                                 {
                                     {QStringLiteral("smtpServer"), tr("Server"), {}, {}},
                                     {QStringLiteral("smtpPort"), tr("Port"), {}, {}},
                                     {QStringLiteral("userName"), tr("User"), {}, {}},
                                     {QStringLiteral("password"), tr("Password"), {}, {}},
                                     {QStringLiteral("addr1"), tr("Send to"), {}, {}},
                                     {QStringLiteral("ssl"), tr("Encrypted"), {}, {}},
                                     {QStringLiteral("interval"), tr("Not more often than"), {}, {}},
                                     {QStringLiteral("attachment"), tr("Attach"), {}, {}},
                                 }, false));

    // ── siren ───────────────────────────────────────────────────────────────
    // Appears only on cameras that have one; the rest answer -26 and the
    // section stays hidden. There is deliberately no button to sound it: a
    // siren is loud, it is usually mounted outside somebody's bedroom window,
    // and a control that fires it is not something to add without being asked.
    layout->addWidget(addSection(page, QStringLiteral("GetAudioAlarm"),
                                 tr("Siren"),
                                 {
                                     {QStringLiteral("enable"), tr("Sound on an alarm"), {}, {}},
                                     {QStringLiteral("schedule"), tr("Times"), {}, {}},
                                     {QStringLiteral("alarmMode"), tr("Mode"), {}, {}},
                                 }));
    layout->addWidget(addSection(page, QStringLiteral("GetAudioAlarmV20"),
                                 tr("Siren"),
                                 {
                                     {QStringLiteral("enable"), tr("Sound on an alarm"), {}, {}},
                                 }));
    layout->addWidget(addSection(page, QStringLiteral("GetWhiteLed"),
                                 tr("Spotlight"),
                                 {
                                     {QStringLiteral("state"), tr("On"), {}, {}},
                                     {QStringLiteral("mode"), tr("Mode"), {}, {}},
                                     {QStringLiteral("bright"), tr("Brightness"), {}, {}},
                                 }));

    layout->addWidget(addSection(page, QStringLiteral("GetFtp"), tr("FTP upload"),
                                 {
                                     {QStringLiteral("server"), tr("Server"), {}, {}},
                                     {QStringLiteral("port"), tr("Port"), {}, {}},
                                     {QStringLiteral("userName"), tr("User"), {}, {}},
                                     {QStringLiteral("password"), tr("Password"), {}, {}},
                                     {QStringLiteral("remoteDir"), tr("Directory"), {}, {}},
                                     {QStringLiteral("mode"), tr("Mode"), {}, {}},
                                 }, false));

    layout->addWidget(addSection(page, QStringLiteral("GetPush"),
                                 tr("Push notification"),
                                 {
                                     {QStringLiteral("schedule"), tr("Schedule"), {}, {}},
                                 }, false));

    // Testing from the camera, not from here: it is the camera that has to
    // reach the mail or FTP server, and it may be on a different network with
    // different rules.
    auto *testEmail = new QPushButton(tr("Send a test e-mail"), page);
    connect(testEmail, &QPushButton::clicked, this, [this] {
        m_status->setStyleSheet(QString());
        m_status->setText(tr("Asking the camera to send a test e-mail…"));
        m_client->testEmail();
    });
    auto *testFtp = new QPushButton(tr("Test the FTP upload"), page);
    connect(testFtp, &QPushButton::clicked, this, [this] {
        m_status->setStyleSheet(QString());
        m_status->setText(tr("Asking the camera to try the FTP server…"));
        m_client->testFtp();
    });

    auto *testRow = new QHBoxLayout;
    testRow->addWidget(testEmail);
    testRow->addWidget(testFtp);
    testRow->addStretch(1);
    layout->addLayout(testRow);

    auto *note = new QLabel(
        tr("Sent by the camera itself, so they keep working when this computer "
           "is switched off. leolink's own reactions — commands, webhooks, "
           "MQTT — are under Cameras → Events."),
        page);
    note->setWordWrap(true);
    note->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
    layout->addWidget(note);
    layout->addStretch(1);

    addPage(page, tr("Alerts"));
}

void CameraSettingsDialog::buildTimeTab()
{
    auto *page = new QWidget(this);
    auto *layout = new QVBoxLayout(page);

    layout->addWidget(addSection(page, QStringLiteral("GetNtp"), tr("Time server"),
                                 {
                                     {QStringLiteral("enable"), tr("Synchronise the clock"), {}, {}},
                                     {QStringLiteral("server"), tr("Server"), {}, {}},
                                     {QStringLiteral("port"), tr("Port"), {}, {}},
                                     {QStringLiteral("interval"), tr("Every"), {}, {}},
                                 }, false));

    layout->addWidget(addSection(page, QStringLiteral("GetAutoMaint"),
                                 tr("Scheduled restart"),
                                 {
                                     {QStringLiteral("enable"), tr("Restart regularly"),
                                      tr("Some cameras become unreliable after weeks "
                                         "of uptime; a weekly restart is a cheap "
                                         "cure."), {}},
                                     {QStringLiteral("weekDay"), tr("Day"), {}, {}},
                                     {QStringLiteral("hour"), tr("Hour"), {}, {}},
                                     {QStringLiteral("min"), tr("Minute"), {}, {}},
                                 }, false));

    auto *note = new QLabel(
        tr("A camera with the wrong clock stamps its recordings wrongly, which "
           "is worth more than it sounds when you need to find one."),
        page);
    note->setWordWrap(true);
    note->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
    layout->addWidget(note);
    layout->addStretch(1);

    addPage(page, tr("Time"));
}

// ── camera replies ──────────────────────────────────────────────────────────

void CameraSettingsDialog::populateStream(const QString &which,
                                          const QJsonObject &value,
                                          const QJsonObject &range)
{
    StreamControls &c = (which == QLatin1String("mainStream")) ? m_main : m_sub;
    const QJsonObject current = value.value(which).toObject();
    const QJsonObject allowed = range.value(which).toObject();

    fillFromArray(c.frameRate, allowed.value(QStringLiteral("frameRate")).toArray(),
                  current.value(QStringLiteral("frameRate")));
    fillFromArray(c.bitRate, allowed.value(QStringLiteral("bitRate")).toArray(),
                  current.value(QStringLiteral("bitRate")));
    fillFromArray(c.profile, allowed.value(QStringLiteral("profile")).toArray(),
                  current.value(QStringLiteral("profile")));

    // Resolution is not a list inside one entry: the camera returns a separate
    // range entry per supported resolution, each with its own rates. The sizes
    // are therefore gathered across entries by the caller.
    c.size->setEnabled(c.size->count() > 0);
}

void CameraSettingsDialog::onSectionReady(const QString &command,
                                          const QJsonObject &value,
                                          const QJsonObject &ranges)
{
    if (command == QLatin1String("GetMask")) {
        onMaskReady(value.value(QStringLiteral("Mask")).toObject(),
                    ranges.value(QStringLiteral("Mask")).toObject());
        return;
    }
    // Two spellings of the same section. Older firmware has GetAlarm and
    // answers -9 to GetMdAlarm; a Duo 2 on 2024 firmware does the reverse.
    // Whichever answers is the one this camera uses, and the write goes back
    // under the same name.
    if (command == QLatin1String("GetAlarm") ||
        command == QLatin1String("GetMdAlarm")) {
        const QString key = command == QLatin1String("GetAlarm")
                                ? QStringLiteral("Alarm")
                                : QStringLiteral("MdAlarm");
        m_alarmCommand = command;
        onAlarmReady(value.value(key).toObject());
        return;
    }
    if (command == QLatin1String("GetRec") ||
        command == QLatin1String("GetRecV20")) {
        // Kept whole for the schedule; the plain fields are also shown by the
        // generated section of the same name, and both write back the same
        // structure — see onApply, which merges them.
        m_recording = value.value(QStringLiteral("Rec")).toObject();
        m_recordScheduleButton->setEnabled(
            m_recording.contains(QStringLiteral("schedule")));
    }
    if (command == QLatin1String("GetEnc")) {
        m_encValue = value.value(QStringLiteral("Enc")).toObject();
        m_encRange = ranges;
        // The archive estimate needs the bit rate, which only arrives here.
        refreshArchiveEstimate();

        // Only where the camera has a microphone to switch.
        if (m_encValue.contains(QStringLiteral("audio"))) {
            m_encAudio->setEnabled(true);
            const QSignalBlocker block(m_encAudio);
            m_encAudio->setChecked(
                m_encValue.value(QStringLiteral("audio")).toInt() != 0);
        }

        // The range document is an array: one entry per supported resolution,
        // each carrying the rates valid at that resolution. Collect the sizes
        // first, then fill the rest from the entry that matches what is set.
        const QJsonArray entries = ranges.value(QStringLiteral("Enc")).toArray();
        const QString currentMain = m_encValue.value(QStringLiteral("mainStream"))
                                        .toObject()
                                        .value(QStringLiteral("size"))
                                        .toString();

        m_main.size->clear();
        int matching = 0;
        for (int i = 0; i < entries.size(); ++i) {
            const QJsonObject main =
                entries.at(i).toObject().value(QStringLiteral("mainStream")).toObject();
            const QString size = main.value(QStringLiteral("size")).toString();
            if (size.isEmpty() || m_main.size->findText(size) >= 0)
                continue;
            m_main.size->addItem(size, i);
            if (size == currentMain)
                matching = i;
        }
        const int index = m_main.size->findText(currentMain);
        if (index >= 0)
            m_main.size->setCurrentIndex(index);

        const QJsonObject entry = entries.isEmpty()
                                      ? QJsonObject{}
                                      : entries.at(matching).toObject();
        populateStream(QStringLiteral("mainStream"), m_encValue, entry);
        populateStream(QStringLiteral("subStream"), m_encValue, entry);

        // Sub-stream resolution is fixed per entry on the models seen so far.
        const QString subSize = m_encValue.value(QStringLiteral("subStream"))
                                    .toObject()
                                    .value(QStringLiteral("size"))
                                    .toString();
        m_sub.size->clear();
        m_sub.size->addItem(subSize);
        m_sub.size->setEnabled(false);

        // Changing resolution changes which rates are valid, so refill.
        connect(m_main.size, &QComboBox::currentIndexChanged, this,
                [this, entries](int i) {
                    if (i < 0 || i >= m_main.size->count())
                        return;
                    const int entryIndex = m_main.size->itemData(i).toInt();
                    if (entryIndex < entries.size()) {
                        populateStream(QStringLiteral("mainStream"), m_encValue,
                                       entries.at(entryIndex).toObject());
                    }
                });

        m_applyButton->setEnabled(true);
        m_status->setText(tr("Ready."));
        return;
    }

    if (SectionEditor *editor = m_sections.value(command)) {
        // Whatever the camera called it. The reply holds exactly one section,
        // and reading its name from the reply is the only way to be right on
        // every firmware: a Duo 2 answers GetAudioAlarmV20 with "Audio" and
        // GetAiCfg with "AiDetectType", neither of which can be derived from
        // the command. The name is also what the matching Set is built from,
        // so guessing it wrong would write to a section that does not exist.
        QString wrapper = m_sectionWrappers.value(command);
        if (value.size() == 1 && !value.contains(wrapper)) {
            const QString actual = value.keys().first();
            LEO_DEBUG(Api, m_camera.label(),
                      QStringLiteral("%1 wraps its section in \"%2\", not "
                                     "\"%3\"").arg(command, actual, wrapper));
            wrapper = actual;
            m_sectionWrappers.insert(command, actual);
        }
        editor->populate(value.value(wrapper).toObject(),
                         ranges.value(wrapper).toObject());
        return;
    }

    if (command == QLatin1String("GetImage")) {
        m_imageValue = value.value(QStringLiteral("Image")).toObject();
        auto set = [this](QSlider *slider, const char *key) {
            if (!m_imageValue.contains(QLatin1String(key)))
                return;   // not every model exposes every knob
            slider->setValue(m_imageValue.value(QLatin1String(key)).toInt());
            slider->setEnabled(true);
        };
        set(m_bright, "bright");
        set(m_contrast, "contrast");
        set(m_saturation, "saturation");
        set(m_sharpen, "sharpen");
        set(m_hue, "hue");
    }
}

// ── writing back ────────────────────────────────────────────────────────────

QJsonObject CameraSettingsDialog::collectEncoder() const
{
    // Start from what the camera gave us and change only the four fields the
    // dialog shows. Set* replaces the whole structure, so anything invented
    // here would silently overwrite settings never presented to the user.
    QJsonObject enc = m_encValue;

    auto apply = [](QJsonObject &stream, const StreamControls &c) {
        if (c.size->isEnabled() && !c.size->currentText().isEmpty())
            stream[QStringLiteral("size")] = c.size->currentText();
        if (c.frameRate->isEnabled())
            stream[QStringLiteral("frameRate")] = c.frameRate->currentData().toInt();
        if (c.bitRate->isEnabled())
            stream[QStringLiteral("bitRate")] = c.bitRate->currentData().toInt();
        if (c.profile->isEnabled())
            stream[QStringLiteral("profile")] = c.profile->currentText();
    };

    QJsonObject main = enc.value(QStringLiteral("mainStream")).toObject();
    QJsonObject sub = enc.value(QStringLiteral("subStream")).toObject();
    apply(main, m_main);
    apply(sub, m_sub);
    enc[QStringLiteral("mainStream")] = main;
    enc[QStringLiteral("subStream")] = sub;

    if (m_encAudio->isEnabled()) {
        // Reported as 0/1 rather than true/false by every model seen.
        enc[QStringLiteral("audio")] = m_encAudio->isChecked() ? 1 : 0;
    }

    QJsonObject param;
    param[QStringLiteral("Enc")] = enc;
    return param;
}

QJsonObject CameraSettingsDialog::collectImage() const
{
    QJsonObject image = m_imageValue;
    auto take = [&image](QSlider *slider, const char *key) {
        if (slider->isEnabled())
            image[QLatin1String(key)] = slider->value();
    };
    take(m_bright, "bright");
    take(m_contrast, "contrast");
    take(m_saturation, "saturation");
    take(m_sharpen, "sharpen");
    take(m_hue, "hue");

    QJsonObject param;
    param[QStringLiteral("Image")] = image;
    return param;
}

void CameraSettingsDialog::onApply()
{
    // An earlier version warned here when the bitrate looked low for the
    // resolution. It was wrong: that guess came from measurements taken while
    // the camera was still restarting its encoder, and 1024 kbit/s at
    // 2560x1440 in fact runs perfectly well once the decoder is told to be
    // tolerant of damaged frames. Guessing at the camera's limits and nagging
    // about them is worse than saying nothing.
    m_applyButton->setEnabled(false);
    m_status->setText(tr("Writing to the camera…"));
    m_pending = 0;

    if (!m_encValue.isEmpty()) {
        ++m_pending;
        m_client->applySection(QStringLiteral("SetEnc"), collectEncoder());
    }
    if (!m_imageValue.isEmpty()) {
        ++m_pending;
        m_client->applySection(QStringLiteral("SetImage"), collectImage());
    }

    for (auto it = m_sections.cbegin(); it != m_sections.cend(); ++it) {
        SectionEditor *editor = it.value();
        if (!editor->hasAnything())
            continue;   // the camera never offered this section
        const QString wrapper = m_sectionWrappers.value(it.key());
        QJsonObject section = editor->collect();

        // The recording section is edited in two places: the generated form for
        // the plain fields, and the schedule screen for the week of hours. The
        // form starts from what the camera sent and so would carry the old
        // schedule back; merging the edited one in keeps both.
        if ((it.key() == QLatin1String("GetRec") ||
             it.key() == QLatin1String("GetRecV20")) && m_recordingDirty) {
            section[QStringLiteral("schedule")] =
                m_recording.value(QStringLiteral("schedule"));
        }

        QJsonObject param;
        param[wrapper] = section;
        ++m_pending;
        // GetIsp → SetIsp; the API is symmetrical throughout.
        m_client->applySection(QStringLiteral("Set") + it.key().mid(3), param);
    }

    if (m_maskDirty && !m_mask.isEmpty()) {
        QJsonObject param;
        param[QStringLiteral("Mask")] = m_mask;
        ++m_pending;
        m_client->applySection(QStringLiteral("SetMask"), param);
    }

    // The alarm section has no generated form of its own. Written only when
    // something in it was actually changed: it carries fields this dialog does
    // not show, and handing them all back on every Apply is a good way to
    // overwrite a setting nobody touched.
    if (m_alarmDirty && !m_alarm.isEmpty()) {
        const bool isMd = m_alarmCommand == QLatin1String("GetMdAlarm");
        QJsonObject param;
        param[isMd ? QStringLiteral("MdAlarm") : QStringLiteral("Alarm")] =
            collectAlarm();
        ++m_pending;
        m_client->applySection(isMd ? QStringLiteral("SetMdAlarm")
                                    : QStringLiteral("SetAlarm"),
                               param);
    }
    if (m_pending == 0) {
        m_status->setText(tr("Nothing to write."));
        m_applyButton->setEnabled(true);
    }
}

void CameraSettingsDialog::onSectionApplied(const QString &command)
{
    // Changing the encoder makes the camera drop and rebuild its stream. Say
    // so, rather than leaving the viewer to discover it via the watchdog nine
    // seconds later.
    if (command == QLatin1String("SetEnc"))
        emit streamReconfigured();

    if (--m_pending > 0)
        return;
    m_applyButton->setEnabled(true);
    m_status->setText(
        tr("Saved. Changing the encoder restarts the stream, so the picture "
           "may drop out for a moment."));
}

void CameraSettingsDialog::reportForTesting() const
{
    std::fprintf(stderr, "size            %dx%d\n", width(), height());
    std::fprintf(stderr, "minimum         %dx%d\n",
                 minimumSizeHint().width(), minimumSizeHint().height());
    std::fprintf(stderr, "pages           %d\n", m_stack->count());
    std::fprintf(stderr, "users           %d row(s)\n", m_userTable->rowCount());
    std::fprintf(stderr, "user status     %s\n",
                 qPrintable(m_userStatus->text()));
    std::fprintf(stderr, "sensitivity     %d row(s)\n",
                 m_sensitivityTable->rowCount());
    std::fprintf(stderr, "firmware        %s\n", qPrintable(m_firmware->text()));
    std::fprintf(stderr, "condition       %s\n",
                 qPrintable(m_performance->text().replace('\n', ' ')));
    std::fprintf(stderr, "status          %s\n", qPrintable(m_status->text()));
    for (int i = 0; i < m_nav->count(); ++i) {
        const QVariant page = m_nav->item(i)->data(Qt::UserRole);
        if (!page.isValid()) {
            std::fprintf(stderr, "  ── %s\n", qPrintable(m_nav->item(i)->text()));
            continue;
        }
        QWidget *widget = m_stack->widget(page.toInt());
        std::fprintf(stderr, "  page %-22s hint %dx%d\n",
                     qPrintable(m_nav->item(i)->text()),
                     widget->sizeHint().width(), widget->sizeHint().height());
    }
}

void CameraSettingsDialog::onFailed(const QString &reason)
{
    // "This firmware does not know that command" is not a fault. It is how the
    // dialog discovers what a camera has, and every section that gets it simply
    // does not appear. Showing it in red at the foot of the window made a
    // perfectly healthy camera look broken.
    if (ReolinkClient::meansUnsupported(m_client->lastErrorCode())) {
        LEO_DEBUG(Api, m_camera.label(),
                  QStringLiteral("Section not available on this model: %1")
                      .arg(reason));
        return;
    }

    m_pending = 0;

    // Every button that was disabled while waiting comes back. A disabled
    // control with no explanation is the same as a frozen program from where
    // the user is sitting, and this dialog disables several of them the moment
    // it asks the camera anything.
    m_applyButton->setEnabled(true);
    if (m_rebootButton)
        m_rebootButton->setEnabled(true);
    if (m_wifiScanButton)
        m_wifiScanButton->setEnabled(true);
    if (m_wifiJoinButton)
        m_wifiJoinButton->setEnabled(true);
    if (m_checkFirmwareButton)
        m_checkFirmwareButton->setEnabled(true);

    m_status->setText(reason);
    m_status->setStyleSheet(QStringLiteral("color:#c0392b;"));
    // The camera half needs the camera; the leolink half does not, and stays
    // usable. Without the button the only way to try a camera that has come
    // back is to close the window and open it again.
    if (m_retryButton)
        m_retryButton->show();
}

} // namespace leolink
