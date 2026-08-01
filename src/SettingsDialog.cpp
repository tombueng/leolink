#include "SettingsDialog.h"

#include <QCheckBox>
#include <QComboBox>
#include <QDialogButtonBox>
#include <QFileDialog>
#include <QFormLayout>
#include <QGroupBox>
#include <QHBoxLayout>
#include <QHeaderView>
#include <QInputDialog>
#include <QLabel>
#include <QLineEdit>
#include <QListWidget>
#include <QMessageBox>
#include <QProgressDialog>
#include <QPushButton>
#include <QSpinBox>
#include <QTabWidget>
#include <QTableWidget>
#include <QVBoxLayout>

#include "CameraSettingsDialog.h"
#include "Discovery.h"
#include "Log.h"
#include "ReolinkClient.h"

namespace leolink {

SettingsDialog::SettingsDialog(const Config &config, QWidget *parent)
    : QDialog(parent), m_config(config),
      m_tester(new ReolinkClient(this)), m_discovery(new Discovery(this))
{
    setWindowTitle(tr("Cameras"));
    resize(820, 600);

    // Which cameras there are and where they hang, and nothing else. What each
    // one then does is in its own dialog, one button away in the list.
    auto *tabs = new QTabWidget(this);
    tabs->addTab(buildCameraTab(), tr("Cameras"));
    tabs->addTab(buildLayoutTab(), tr("Layout"));

    auto *buttons = new QDialogButtonBox(QDialogButtonBox::Save |
                                         QDialogButtonBox::Cancel, this);
    connect(buttons, &QDialogButtonBox::accepted, this, &SettingsDialog::onAccept);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);

    auto *root = new QVBoxLayout(this);
    root->addWidget(tabs, 1);
    root->addWidget(buttons);

    connect(m_tester, &ReolinkClient::testSucceeded, this, [this](const QString &s) {
        m_testButton->setEnabled(true);
        m_testResult->setText(QStringLiteral("✓ ") + s);
        m_testResult->setStyleSheet(QStringLiteral("color:#27ae60;"));
    });
    connect(m_tester, &ReolinkClient::testFailed, this, [this](const QString &e) {
        m_testButton->setEnabled(true);
        m_testResult->setText(QStringLiteral("✗ ") + e);
        m_testResult->setStyleSheet(QStringLiteral("color:#c0392b;"));
    });

    rebuildList();
    if (!m_config.cameras.isEmpty())
        m_list->setCurrentRow(0);
    refreshGridPreview();
}

// ── camera tab ──────────────────────────────────────────────────────────────

QWidget *SettingsDialog::buildCameraTab()
{
    auto *page = new QWidget(this);

    m_list = new QListWidget(page);
    m_list->setMinimumWidth(170);
    connect(m_list, &QListWidget::currentRowChanged,
            this, &SettingsDialog::onSelectionChanged);

    auto *addButton = new QPushButton(tr("Add"), page);
    auto *removeButton = new QPushButton(tr("Remove"), page);
    connect(addButton, &QPushButton::clicked, this, &SettingsDialog::onAdd);
    connect(removeButton, &QPushButton::clicked, this, &SettingsDialog::onRemove);

    m_scanButton = new QPushButton(tr("Scan network…"), page);
    m_scanButton->setToolTip(
        tr("Ask the network which ONVIF cameras are present. This sends one "
           "multicast probe; devices that stay quiet are never contacted."));
    connect(m_scanButton, &QPushButton::clicked, this, &SettingsDialog::onScan);

    auto *listButtons = new QHBoxLayout;
    listButtons->addWidget(addButton);
    listButtons->addWidget(removeButton);

    auto *left = new QVBoxLayout;
    left->addWidget(m_list, 1);
    left->addLayout(listButtons);
    left->addWidget(m_scanButton);

    m_name = new QLineEdit(page);
    m_host = new QLineEdit(page);
    m_host->setPlaceholderText(tr("192.168.1.10 or camera.lan"));
    m_user = new QLineEdit(page);
    m_password = new QLineEdit(page);
    m_password->setEchoMode(QLineEdit::Password);
    m_passwordCommand = new QLineEdit(page);
    m_passwordCommand->setPlaceholderText(tr("optional: pass show reolink/hall"));
    m_passwordCommand->setToolTip(
        tr("If set, this command runs and its output is used as the password. "
           "Keeps the secret out of the configuration file."));
    m_uid = new QLineEdit(page);
    m_uid->setPlaceholderText(tr("optional, for P2P access"));

    m_customUrl = new QLineEdit(page);
    m_customUrl->setPlaceholderText(QStringLiteral("rtsp://…"));
    m_customUrl->setToolTip(
        tr("Any address libmpv can open. Use this for cameras from other "
           "makers, an NVR stream, or a local file."));

    m_stream = new QComboBox(page);
    m_stream->addItem(tr("Sub stream (low bandwidth)"), QStringLiteral("sub"));
    m_stream->addItem(tr("Main stream (full resolution)"), QStringLiteral("main"));

    m_transport = new QComboBox(page);
    m_transport->addItem(tr("RTSP"), QStringLiteral("rtsp"));
    m_transport->addItem(tr("HTTP-FLV (lower latency)"), QStringLiteral("flv"));
    m_transport->addItem(tr("Baichuan (the camera's own protocol)"),
                         QStringLiteral("baichuan"));
    m_transport->addItem(tr("Custom URL"), QStringLiteral("custom"));
    m_transport->setToolTip(
        tr("RTSP suits most cameras and is what to try first.\n\n"
           "HTTP-FLV needs only port 80, which helps where RTSP is blocked.\n\n"
           "Baichuan is what Reolink's own app speaks. It is the answer for "
           "cameras that keep RTSP switched off — battery models do — and it "
           "does not use the camera's small pool of web sessions. Video only: "
           "sound still comes over RTSP."));

    m_https = new QCheckBox(tr("Use HTTPS for the control API"), page);
    m_enabled = new QCheckBox(tr("Show this camera"), page);

    auto *form = new QFormLayout;
    form->addRow(tr("Name"), m_name);
    form->addRow(tr("Host"), m_host);
    form->addRow(tr("User"), m_user);
    form->addRow(tr("Password"), m_password);
    form->addRow(tr("Password command"), m_passwordCommand);
    form->addRow(tr("UID"), m_uid);
    form->addRow(tr("Stream"), m_stream);
    form->addRow(tr("Transport"), m_transport);
    form->addRow(tr("Custom URL"), m_customUrl);

    // The field is only meaningful for the custom transport.
    auto syncCustom = [this] {
        const bool custom =
            m_transport->currentData().toString() == QLatin1String("custom");
        m_customUrl->setEnabled(custom);
    };
    connect(m_transport, &QComboBox::currentIndexChanged, this, syncCustom);
    syncCustom();
    form->addRow(QString(), m_https);
    form->addRow(QString(), m_enabled);

    m_testButton = new QPushButton(tr("Test connection"), page);
    connect(m_testButton, &QPushButton::clicked, this, &SettingsDialog::onTest);
    m_testResult = new QLabel(page);
    m_testResult->setWordWrap(true);

    auto *testRow = new QHBoxLayout;
    testRow->addWidget(m_testButton);
    testRow->addWidget(m_testResult, 1);

    // The way in that the list never had. Everything about a camera beyond
    // reaching it — where it looks, what happens when it sees something, what
    // the device itself is set to — is behind this one button.
    m_settingsButton = new QPushButton(tr("Settings for this camera…"), page);
    m_settingsButton->setToolTip(
        tr("Detection, reactions and recording in leolink, and the camera's "
           "own encoder, picture and schedules."));
    connect(m_settingsButton, &QPushButton::clicked,
            this, &SettingsDialog::onOpenCameraSettings);

    auto *settingsRow = new QHBoxLayout;
    settingsRow->addWidget(m_settingsButton);
    settingsRow->addStretch(1);

    auto *right = new QVBoxLayout;
    right->addLayout(form);
    right->addLayout(testRow);
    right->addSpacing(8);
    right->addLayout(settingsRow);
    right->addStretch(1);

    auto *columns = new QHBoxLayout(page);
    columns->addLayout(left);
    columns->addLayout(right, 1);
    return page;
}

// ── layout tab ──────────────────────────────────────────────────────────────

QWidget *SettingsDialog::buildLayoutTab()
{
    auto *page = new QWidget(this);

    m_gridColumns = new QSpinBox(page);
    m_gridColumns->setRange(0, 8);
    m_gridColumns->setSpecialValueText(tr("automatic"));
    m_gridColumns->setValue(m_config.gridColumns);
    connect(m_gridColumns, &QSpinBox::valueChanged, this, [this](int v) {
        m_config.gridColumns = v;
        refreshGridPreview();
    });

    m_gridRows = new QSpinBox(page);
    m_gridRows->setRange(0, 8);
    m_gridRows->setSpecialValueText(tr("automatic"));
    m_gridRows->setValue(m_config.gridRows);
    connect(m_gridRows, &QSpinBox::valueChanged, this, [this](int v) {
        m_config.gridRows = v;
        refreshGridPreview();
    });

    auto *gridForm = new QFormLayout;
    gridForm->addRow(tr("Columns"), m_gridColumns);
    gridForm->addRow(tr("Rows"), m_gridRows);

    auto *gridBox = new QGroupBox(tr("Grid size"), page);
    gridBox->setLayout(gridForm);

    // Per-camera placement. -1 keeps a camera in the automatic flow.
    auto makePos = [this, page](int min) {
        auto *box = new QSpinBox(page);
        box->setRange(min, 7);
        if (min < 0)
            box->setSpecialValueText(tr("automatic"));
        connect(box, &QSpinBox::valueChanged, this, [this] {
            if (!m_loading) {
                storeFromForm();
                refreshGridPreview();
            }
        });
        return box;
    };
    m_row = makePos(-1);
    m_col = makePos(-1);
    m_rowSpan = makePos(1);
    m_colSpan = makePos(1);
    m_rowSpan->setMinimum(1);
    m_colSpan->setMinimum(1);

    auto *placeForm = new QFormLayout;
    placeForm->addRow(tr("Row"), m_row);
    placeForm->addRow(tr("Column"), m_col);
    placeForm->addRow(tr("Row span"), m_rowSpan);
    placeForm->addRow(tr("Column span"), m_colSpan);

    auto *placeBox = new QGroupBox(tr("Position of the selected camera"), page);
    placeBox->setLayout(placeForm);

    m_gridPreview = new QTableWidget(page);
    m_gridPreview->horizontalHeader()->setVisible(false);
    m_gridPreview->verticalHeader()->setVisible(false);
    m_gridPreview->setEditTriggers(QAbstractItemView::NoEditTriggers);
    m_gridPreview->setSelectionMode(QAbstractItemView::NoSelection);
    m_gridPreview->setMinimumHeight(220);

    auto *hint = new QLabel(
        tr("Leave row and column on “automatic” to let cameras fill the grid "
           "in order. Spans let one camera cover several cells."),
        page);
    hint->setWordWrap(true);
    hint->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto *side = new QVBoxLayout;
    side->addWidget(gridBox);
    side->addWidget(placeBox);
    side->addWidget(hint);
    side->addStretch(1);

    auto *columns = new QHBoxLayout(page);
    columns->addLayout(side);
    columns->addWidget(m_gridPreview, 1);
    return page;
}

void SettingsDialog::refreshGridPreview()
{
    if (!m_gridPreview)
        return;

    const auto [cols, rows] = m_config.gridShape();
    m_gridPreview->clear();
    m_gridPreview->setRowCount(rows);
    m_gridPreview->setColumnCount(cols);

    for (int c = 0; c < cols; ++c)
        m_gridPreview->setColumnWidth(c, 90);
    for (int r = 0; r < rows; ++r)
        m_gridPreview->setRowHeight(r, 60);

    const QString selectedId =
        (m_current >= 0 && m_current < m_config.cameras.size())
            ? m_config.cameras.at(m_current).id
            : QString();

    for (const Placement &p : m_config.layout()) {
        QString label;
        for (const CameraConfig &c : m_config.cameras)
            if (c.id == p.cameraId)
                label = c.label();

        auto *item = new QTableWidgetItem(label);
        item->setTextAlignment(Qt::AlignCenter);
        if (p.cameraId == selectedId) {
            item->setBackground(QColor(0x2b, 0x6c, 0xb0));
            item->setForeground(Qt::white);
        }
        m_gridPreview->setItem(p.row, p.col, item);
        if (p.rowSpan > 1 || p.colSpan > 1)
            m_gridPreview->setSpan(p.row, p.col, p.rowSpan, p.colSpan);
    }
}

// ── events tab ──────────────────────────────────────────────────────────────


// ── window tab ──────────────────────────────────────────────────────────────


// ── camera list plumbing ────────────────────────────────────────────────────

void SettingsDialog::rebuildList()
{
    const int keep = m_list->currentRow();
    m_list->blockSignals(true);
    m_list->clear();
    for (const CameraConfig &c : m_config.cameras) {
        auto *item = new QListWidgetItem(c.label(), m_list);
        if (!c.enabled)
            item->setForeground(Qt::gray);
    }
    m_list->blockSignals(false);
    if (keep >= 0 && keep < m_list->count())
        m_list->setCurrentRow(keep);
}

void SettingsDialog::loadIntoForm(const CameraConfig &c)
{
    m_loading = true;
    m_name->setText(c.name);
    m_host->setText(c.host);
    m_user->setText(c.user);
    m_password->setText(c.password);
    m_passwordCommand->setText(c.passwordCommand);
    m_uid->setText(c.uid);
    // Selected by the value each entry carries, not by counting positions.
    // The old version hardcoded the indices, so adding the Baichuan entry in
    // the middle silently made every "custom" camera display as Baichuan —
    // and it would have written that back on the next save.
    const int stream = m_stream->findData(c.stream);
    m_stream->setCurrentIndex(stream >= 0 ? stream : 0);
    const int transport = m_transport->findData(c.transport);
    m_transport->setCurrentIndex(transport >= 0 ? transport : 0);
    m_customUrl->setText(c.customUrl);
    m_customUrl->setEnabled(c.transport == QLatin1String("custom"));
    m_https->setChecked(c.https);
    m_enabled->setChecked(c.enabled);

    m_row->setValue(c.row);
    m_col->setValue(c.col);
    m_rowSpan->setValue(c.rowSpan);
    m_colSpan->setValue(c.colSpan);

    m_testResult->clear();
    m_loading = false;
}

void SettingsDialog::storeFromForm()
{
    if (m_current < 0 || m_current >= m_config.cameras.size())
        return;

    CameraConfig &c = m_config.cameras[m_current];
    c.name = m_name->text().trimmed();
    c.host = m_host->text().trimmed();
    c.user = m_user->text().trimmed();
    c.password = m_password->text();
    c.passwordCommand = m_passwordCommand->text().trimmed();
    c.uid = m_uid->text().trimmed();
    c.stream = m_stream->currentData().toString();
    c.transport = m_transport->currentData().toString();
    c.customUrl = m_customUrl->text().trimmed();
    c.https = m_https->isChecked();
    c.enabled = m_enabled->isChecked();

    c.row = m_row->value();
    c.col = m_col->value();
    c.rowSpan = m_rowSpan->value();
    c.colSpan = m_colSpan->value();

    if (c.id.isEmpty())
        c.id = Config::newId();
}

void SettingsDialog::onSelectionChanged(int row)
{
    if (!m_loading)
        storeFromForm();
    m_current = row;
    if (row >= 0 && row < m_config.cameras.size())
        loadIntoForm(m_config.cameras.at(row));
    refreshGridPreview();
}

void SettingsDialog::onAdd()
{
    storeFromForm();

    CameraConfig c;
    c.id = Config::newId();
    c.name = tr("New camera");
    m_config.cameras.append(c);

    rebuildList();
    m_list->setCurrentRow(m_config.cameras.size() - 1);
    m_host->setFocus();
}

void SettingsDialog::onRemove()
{
    const int row = m_list->currentRow();
    if (row < 0 || row >= m_config.cameras.size())
        return;

    const QString name = m_config.cameras.at(row).label();
    if (QMessageBox::question(this, tr("Remove camera"),
                              tr("Remove “%1” from the list?").arg(name))
        != QMessageBox::Yes)
        return;

    m_config.cameras.removeAt(row);
    m_current = -1;
    rebuildList();
    if (!m_config.cameras.isEmpty())
        m_list->setCurrentRow(qMin(row, m_config.cameras.size() - 1));
    refreshGridPreview();
}

void SettingsDialog::onTest()
{
    storeFromForm();
    if (m_current < 0)
        return;

    const CameraConfig &c = m_config.cameras.at(m_current);
    if (c.host.isEmpty()) {
        m_testResult->setText(tr("Enter a host first."));
        m_testResult->setStyleSheet(QStringLiteral("color:#c0392b;"));
        return;
    }

    m_testButton->setEnabled(false);
    m_testResult->setStyleSheet(QString());
    m_testResult->setText(tr("Contacting %1…").arg(c.host));
    m_tester->setCamera(c);
    m_tester->testConnection();
}

void SettingsDialog::onScan()
{
    storeFromForm();

    auto *progress = new QProgressDialog(
        tr("Looking for cameras…"), tr("Stop"), 0, 0, this);
    progress->setWindowModality(Qt::WindowModal);
    progress->setMinimumDuration(0);
    // Shown outright. A progress dialog with no maximum never calls setValue(),
    // and without a call to setValue() it waits for minimumDuration to elapse
    // before appearing — which for a four second scan meant it never did.
    progress->show();

    auto *found = new QList<DiscoveredCamera>;

    connect(m_discovery, &Discovery::found, progress,
            [found, progress](const DiscoveredCamera &camera) {
                found->append(camera);
                progress->setLabelText(
                    tr("Found %n device(s)…", nullptr, found->size()));
            });

    connect(m_discovery, &Discovery::finished, this,
            [this, progress, found](int) {
                progress->close();
                progress->deleteLater();

                if (found->isEmpty()) {
                    QMessageBox::information(
                        this, tr("No cameras found"),
                        tr("No ONVIF device answered.\n\n"
                           "Cameras only reply if ONVIF is switched on, and the "
                           "probe does not cross routers or most VPNs. You can "
                           "still add a camera by typing its address."));
                    delete found;
                    return;
                }

                // Devices already in the list are still shown, marked. Hiding
                // them would leave the user wondering whether the camera on the
                // shelf was found at all; offering them unmarked invites a
                // duplicate entry.
                QStringList labels;
                QList<int> existingFor;
                for (const DiscoveredCamera &c : std::as_const(*found)) {
                    int already = -1;
                    for (int i = 0; i < m_config.cameras.size(); ++i) {
                        if (m_config.cameras.at(i).host.compare(
                                c.address, Qt::CaseInsensitive) == 0) {
                            already = i;
                            break;
                        }
                    }
                    existingFor.append(already);
                    labels << QStringLiteral("%1 — %2%3%4")
                                  .arg(c.address,
                                       c.name.isEmpty() ? tr("unnamed device") : c.name,
                                       c.looksReolink ? tr(" (Reolink)") : QString(),
                                       already >= 0 ? tr("  · already added")
                                                    : QString());
                }

                bool ok = false;
                const QString chosen = QInputDialog::getItem(
                    this, tr("Cameras found"),
                    tr("Add which one?"), labels, 0, false, &ok);
                if (ok && !chosen.isEmpty()) {
                    const int index = labels.indexOf(chosen);
                    if (index >= 0 && existingFor.at(index) >= 0) {
                        // Already known: take them to it rather than making a
                        // second entry for the same camera.
                        m_list->setCurrentRow(existingFor.at(index));
                        delete found;
                        return;
                    }
                    if (index >= 0) {
                        CameraConfig c;
                        c.id = Config::newId();
                        c.host = found->at(index).address;
                        c.name = found->at(index).name.isEmpty()
                                     ? c.host
                                     : found->at(index).name;
                        m_config.cameras.append(c);
                        rebuildList();
                        m_list->setCurrentRow(m_config.cameras.size() - 1);
                        m_password->setFocus();
                    }
                }
                delete found;
            },
            Qt::SingleShotConnection);

    connect(progress, &QProgressDialog::canceled,
            m_discovery, &Discovery::stop);

    m_discovery->start(4000);
}


void SettingsDialog::onAccept()
{
    storeFromForm();

    m_config.gridColumns = m_gridColumns->value();
    m_config.gridRows = m_gridRows->value();

    for (const CameraConfig &c : m_config.cameras) {
        if (c.host.isEmpty()) {
            QMessageBox::warning(this, tr("Incomplete camera"),
                                 tr("“%1” has no host address.").arg(c.label()));
            return;
        }
    }
    accept();
}

void SettingsDialog::onOpenCameraSettings()
{
    storeFromForm();
    if (m_current < 0 || m_current >= m_config.cameras.size())
        return;

    CameraSettingsDialog dialog(m_config.cameras.at(m_current), this);
    if (dialog.exec() == QDialog::Accepted) {
        // Only the leolink half comes back: what the dialog wrote into the
        // camera is already in the camera, and none of it lives here.
        m_config.cameras[m_current] = dialog.cameraConfig();
        loadIntoForm(m_config.cameras.at(m_current));
    }
}

} // namespace leolink
