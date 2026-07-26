#include "EventLogDialog.h"

#include <QComboBox>
#include <QDesktopServices>
#include <QDialogButtonBox>
#include <QFileInfo>
#include <QHBoxLayout>
#include <QHeaderView>
#include <QLabel>
#include <QMessageBox>
#include <QPixmap>
#include <QPushButton>
#include <QTableWidget>
#include <QUrl>
#include <QVBoxLayout>

namespace leolink {

EventLogDialog::EventLogDialog(const Config &config, EventLog *log,
                               QWidget *parent)
    : QDialog(parent), m_config(config), m_log(log)
{
    setWindowTitle(tr("Event log"));
    resize(900, 560);

    // ── filters ─────────────────────────────────────────────────────────────
    m_cameraFilter = new QComboBox(this);
    m_cameraFilter->addItem(tr("All cameras"), QString());
    for (const CameraConfig &c : m_config.cameras)
        m_cameraFilter->addItem(c.label(), c.id);
    connect(m_cameraFilter, &QComboBox::currentIndexChanged,
            this, &EventLogDialog::reload);

    m_typeFilter = new QComboBox(this);
    m_typeFilter->addItem(tr("All events"), QString());
    m_typeFilter->addItem(tr("Motion"), QStringLiteral("motion"));
    m_typeFilter->addItem(tr("With recording"), QStringLiteral("__video"));
    connect(m_typeFilter, &QComboBox::currentIndexChanged,
            this, &EventLogDialog::reload);

    auto *filters = new QHBoxLayout;
    filters->addWidget(new QLabel(tr("Camera:"), this));
    filters->addWidget(m_cameraFilter);
    filters->addSpacing(12);
    filters->addWidget(new QLabel(tr("Show:"), this));
    filters->addWidget(m_typeFilter);
    filters->addStretch(1);

    auto *refresh = new QPushButton(tr("Refresh"), this);
    connect(refresh, &QPushButton::clicked, this, &EventLogDialog::reload);
    filters->addWidget(refresh);

    // ── table ───────────────────────────────────────────────────────────────
    m_table = new QTableWidget(this);
    m_table->setColumnCount(4);
    m_table->setHorizontalHeaderLabels(
        {tr("When"), tr("Camera"), tr("Event"), tr("Media")});
    m_table->setSelectionBehavior(QAbstractItemView::SelectRows);
    m_table->setSelectionMode(QAbstractItemView::SingleSelection);
    m_table->setEditTriggers(QAbstractItemView::NoEditTriggers);
    m_table->verticalHeader()->setVisible(false);
    m_table->horizontalHeader()->setSectionResizeMode(0, QHeaderView::ResizeToContents);
    m_table->horizontalHeader()->setSectionResizeMode(1, QHeaderView::ResizeToContents);
    m_table->horizontalHeader()->setSectionResizeMode(2, QHeaderView::Stretch);
    m_table->horizontalHeader()->setSectionResizeMode(3, QHeaderView::ResizeToContents);
    connect(m_table, &QTableWidget::currentCellChanged, this,
            [this](int row, int, int, int) { onRowSelected(row); });
    connect(m_table, &QTableWidget::cellDoubleClicked, this,
            [this](int, int) { openSelectedMedia(); });

    // ── preview pane ────────────────────────────────────────────────────────
    m_preview = new QLabel(this);
    m_preview->setMinimumWidth(260);
    m_preview->setAlignment(Qt::AlignCenter);
    m_preview->setStyleSheet(
        QStringLiteral("QLabel { background:#101214; border-radius:4px; }"));
    m_preview->setText(tr("no preview"));

    m_details = new QLabel(this);
    m_details->setWordWrap(true);
    m_details->setTextInteractionFlags(Qt::TextSelectableByMouse);

    m_openButton = new QPushButton(tr("Open recording"), this);
    m_openButton->setEnabled(false);
    connect(m_openButton, &QPushButton::clicked,
            this, &EventLogDialog::openSelectedMedia);

    auto *side = new QVBoxLayout;
    side->addWidget(m_preview, 1);
    side->addWidget(m_details);
    side->addWidget(m_openButton);

    auto *middle = new QHBoxLayout;
    middle->addWidget(m_table, 3);
    middle->addLayout(side, 2);

    auto *buttons = new QDialogButtonBox(QDialogButtonBox::Close, this);
    auto *clearButton =
        buttons->addButton(tr("Clear log…"), QDialogButtonBox::DestructiveRole);
    connect(clearButton, &QPushButton::clicked, this, &EventLogDialog::onClear);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);

    auto *root = new QVBoxLayout(this);
    root->addLayout(filters);
    root->addLayout(middle, 1);
    root->addWidget(buttons);

    reload();
}

void EventLogDialog::reload()
{
    const QString cameraId = m_cameraFilter->currentData().toString();
    const QString type = m_typeFilter->currentData().toString();

    m_entries = m_log->read(cameraId);
    if (!type.isEmpty()) {
        QList<EventEntry> filtered;
        for (const EventEntry &e : std::as_const(m_entries)) {
            const bool keep = (type == QLatin1String("__video"))
                                  ? !e.videoPath.isEmpty()
                                  : e.type == type;
            if (keep)
                filtered.append(e);
        }
        m_entries = filtered;
    }

    m_table->setRowCount(m_entries.size());
    for (int row = 0; row < m_entries.size(); ++row) {
        const EventEntry &e = m_entries.at(row);
        m_table->setItem(row, 0, new QTableWidgetItem(
                                     e.time.toString(QStringLiteral("yyyy-MM-dd HH:mm:ss"))));
        m_table->setItem(row, 1, new QTableWidgetItem(e.cameraName));
        m_table->setItem(row, 2, new QTableWidgetItem(
                                     e.message.isEmpty() ? e.type : e.message));

        QString media;
        if (!e.videoPath.isEmpty())
            media += tr("video");
        if (!e.imagePath.isEmpty())
            media += media.isEmpty() ? tr("image") : tr(" + image");
        m_table->setItem(row, 3, new QTableWidgetItem(media));
    }

    if (m_entries.isEmpty()) {
        m_preview->setText(tr("no events recorded yet"));
        m_details->clear();
        m_openButton->setEnabled(false);
    } else {
        m_table->selectRow(0);
    }
}

void EventLogDialog::onRowSelected(int row)
{
    if (row < 0 || row >= m_entries.size()) {
        m_openButton->setEnabled(false);
        return;
    }
    const EventEntry &e = m_entries.at(row);

    // Prefer the still; a video frame would need decoding to show here.
    if (!e.imagePath.isEmpty() && QFileInfo::exists(e.imagePath)) {
        QPixmap pix(e.imagePath);
        m_preview->setPixmap(pix.scaled(m_preview->size(), Qt::KeepAspectRatio,
                                        Qt::SmoothTransformation));
    } else {
        m_preview->setText(e.videoPath.isEmpty() ? tr("no preview")
                                                 : tr("recording only"));
    }

    QStringList lines;
    lines << tr("<b>%1</b>").arg(e.cameraName)
          << e.time.toString(Qt::TextDate);
    if (!e.videoPath.isEmpty()) {
        const bool exists = QFileInfo::exists(e.videoPath);
        lines << tr("Recording: %1%2")
                     .arg(QFileInfo(e.videoPath).fileName(),
                          exists ? QString() : tr(" (file missing)"));
    }
    if (!e.imagePath.isEmpty())
        lines << tr("Image: %1").arg(QFileInfo(e.imagePath).fileName());
    m_details->setText(lines.join(QStringLiteral("<br>")));

    m_openButton->setEnabled(
        (!e.videoPath.isEmpty() && QFileInfo::exists(e.videoPath)) ||
        (!e.imagePath.isEmpty() && QFileInfo::exists(e.imagePath)));
    m_openButton->setText(e.videoPath.isEmpty() ? tr("Open image")
                                                : tr("Open recording"));
}

void EventLogDialog::openSelectedMedia()
{
    const int row = m_table->currentRow();
    if (row < 0 || row >= m_entries.size())
        return;
    const EventEntry &e = m_entries.at(row);

    const QString target = !e.videoPath.isEmpty() && QFileInfo::exists(e.videoPath)
                               ? e.videoPath
                               : e.imagePath;
    if (target.isEmpty() || !QFileInfo::exists(target)) {
        QMessageBox::information(this, tr("Nothing to open"),
                                 tr("The file for this event is no longer there."));
        return;
    }
    QDesktopServices::openUrl(QUrl::fromLocalFile(target));
}

void EventLogDialog::onClear()
{
    if (QMessageBox::question(
            this, tr("Clear event log"),
            tr("Delete the whole event history?\n\n"
               "Recorded videos and images stay on disk — only the log is cleared."))
        != QMessageBox::Yes)
        return;
    m_log->clear();
    reload();
}

} // namespace leolink
