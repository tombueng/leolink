#include "PlaybackBrowser.h"

#include <QComboBox>
#include <QDateEdit>
#include <QDialogButtonBox>
#include <QFile>
#include <QFileDialog>
#include <QHBoxLayout>
#include <QHeaderView>
#include <QLabel>
#include <QLocale>
#include <QMessageBox>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QProcess>
#include <QProgressBar>
#include <QPushButton>
#include <QStandardPaths>
#include <QTableWidget>
#include <QVBoxLayout>

namespace leolink {

PlaybackBrowser::PlaybackBrowser(const CameraConfig &camera, QWidget *parent)
    : QDialog(parent), m_camera(camera), m_client(new ReolinkClient(this)),
      m_net(new QNetworkAccessManager(this))
{
    setWindowTitle(tr("%1 — recordings on the camera").arg(camera.label()));
    resize(860, 560);

    // ── search controls ─────────────────────────────────────────────────────
    m_from = new QDateEdit(QDate::currentDate().addDays(-1), this);
    m_from->setCalendarPopup(true);
    m_to = new QDateEdit(QDate::currentDate(), this);
    m_to->setCalendarPopup(true);

    m_streamType = new QComboBox(this);
    m_streamType->addItem(tr("Main stream"), QStringLiteral("main"));
    m_streamType->addItem(tr("Sub stream"), QStringLiteral("sub"));

    m_searchButton = new QPushButton(tr("Search"), this);
    connect(m_searchButton, &QPushButton::clicked, this, &PlaybackBrowser::onSearch);

    auto *controls = new QHBoxLayout;
    controls->addWidget(new QLabel(tr("From"), this));
    controls->addWidget(m_from);
    controls->addWidget(new QLabel(tr("to"), this));
    controls->addWidget(m_to);
    controls->addSpacing(12);
    controls->addWidget(m_streamType);
    controls->addStretch(1);
    controls->addWidget(m_searchButton);

    // ── results ─────────────────────────────────────────────────────────────
    m_table = new QTableWidget(this);
    m_table->setColumnCount(4);
    m_table->setHorizontalHeaderLabels(
        {tr("Start"), tr("Length"), tr("Size"), tr("File")});
    m_table->setSelectionBehavior(QAbstractItemView::SelectRows);
    m_table->setSelectionMode(QAbstractItemView::SingleSelection);
    m_table->setEditTriggers(QAbstractItemView::NoEditTriggers);
    m_table->verticalHeader()->setVisible(false);
    m_table->horizontalHeader()->setSectionResizeMode(3, QHeaderView::Stretch);
    connect(m_table, &QTableWidget::itemSelectionChanged,
            this, &PlaybackBrowser::onSelectionChanged);
    connect(m_table, &QTableWidget::cellDoubleClicked, this,
            [this](int, int) { onPlay(); });

    m_playButton = new QPushButton(tr("Play"), this);
    m_downloadButton = new QPushButton(tr("Download…"), this);
    m_playButton->setEnabled(false);
    m_downloadButton->setEnabled(false);
    connect(m_playButton, &QPushButton::clicked, this, &PlaybackBrowser::onPlay);
    connect(m_downloadButton, &QPushButton::clicked,
            this, &PlaybackBrowser::onDownload);

    m_progress = new QProgressBar(this);
    m_progress->setVisible(false);

    m_status = new QLabel(
        tr("Pick a period and press Search. Recordings only exist if the "
           "camera has an SD card fitted."),
        this);
    m_status->setWordWrap(true);
    m_status->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto *actions = new QHBoxLayout;
    actions->addWidget(m_playButton);
    actions->addWidget(m_downloadButton);
    actions->addWidget(m_progress, 1);

    auto *buttons = new QDialogButtonBox(QDialogButtonBox::Close, this);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);

    auto *layout = new QVBoxLayout(this);
    layout->addLayout(controls);
    layout->addWidget(m_table, 1);
    layout->addLayout(actions);
    layout->addWidget(m_status);
    layout->addWidget(buttons);

    connect(m_client, &ReolinkClient::recordingsReady,
            this, &PlaybackBrowser::onRecordingsReady);
    connect(m_client, &ReolinkClient::failed, this, &PlaybackBrowser::onFailed);
    m_client->setCamera(camera);
}

void PlaybackBrowser::onSearch()
{
    m_searchButton->setEnabled(false);
    m_status->setStyleSheet(QStringLiteral("color:#7f8c8d;"));
    m_status->setText(tr("Asking %1…").arg(m_camera.host));
    m_table->setRowCount(0);
    m_recordings.clear();

    // Whole days: a recording that started before midnight should still turn
    // up when someone searches "yesterday".
    const QDateTime from(m_from->date(), QTime(0, 0, 0));
    const QDateTime to(m_to->date(), QTime(23, 59, 59));
    m_client->searchRecordings(from, to, m_streamType->currentData().toString());
}

void PlaybackBrowser::onRecordingsReady(const QList<Recording> &recordings)
{
    m_searchButton->setEnabled(true);
    m_recordings = recordings;
    m_table->setRowCount(recordings.size());

    for (int row = 0; row < recordings.size(); ++row) {
        const Recording &r = recordings.at(row);
        m_table->setItem(row, 0, new QTableWidgetItem(
                                     r.start.toString(QStringLiteral("yyyy-MM-dd HH:mm:ss"))));

        const qint64 seconds = r.durationSeconds();
        m_table->setItem(row, 1, new QTableWidgetItem(
                                     seconds > 0
                                         ? QStringLiteral("%1:%2")
                                               .arg(seconds / 60)
                                               .arg(seconds % 60, 2, 10, QLatin1Char('0'))
                                         : QStringLiteral("–")));

        m_table->setItem(row, 2, new QTableWidgetItem(
                                     r.size > 0
                                         ? QLocale().formattedDataSize(r.size)
                                         : QStringLiteral("–")));
        m_table->setItem(row, 3, new QTableWidgetItem(r.name));
    }

    if (recordings.isEmpty()) {
        m_status->setText(
            tr("Nothing found in that period. Either nothing was recorded, or "
               "the camera has no SD card."));
    } else {
        m_status->setText(tr("%n recording(s) found.", nullptr, recordings.size()));
        m_table->selectRow(0);
    }
}

void PlaybackBrowser::onFailed(const QString &reason)
{
    m_searchButton->setEnabled(true);
    m_status->setStyleSheet(QStringLiteral("color:#c0392b;"));
    m_status->setText(reason);
}

void PlaybackBrowser::onSelectionChanged()
{
    const bool has = m_table->currentRow() >= 0 &&
                     m_table->currentRow() < m_recordings.size();
    m_playButton->setEnabled(has);
    m_downloadButton->setEnabled(has && !m_download);
}

void PlaybackBrowser::onPlay()
{
    const int row = m_table->currentRow();
    if (row < 0 || row >= m_recordings.size())
        return;

    const QUrl url = m_client->playbackUrl(m_recordings.at(row));
    if (!m_client->hasSession()) {
        m_status->setText(tr("No session with the camera — search first."));
        return;
    }

    // Handed to an external player rather than shown in a tile: a recording is
    // a file with a timeline, and a viewer built for live pictures has no
    // scrubbing, no pause and no seeking to offer it.
    const QString player = QStandardPaths::findExecutable(QStringLiteral("mpv"));
    if (player.isEmpty()) {
        QMessageBox::information(
            this, tr("No player"),
            tr("mpv was not found. The recording is at:\n\n%1")
                .arg(url.toString()));
        return;
    }
    QProcess::startDetached(player, {url.toString()});
}

void PlaybackBrowser::onDownload()
{
    const int row = m_table->currentRow();
    if (row < 0 || row >= m_recordings.size() || m_download)
        return;

    const Recording &recording = m_recordings.at(row);
    const QString suggested =
        QStandardPaths::writableLocation(QStandardPaths::MoviesLocation) +
        QLatin1Char('/') + QFileInfo(recording.name).fileName();

    const QString target = QFileDialog::getSaveFileName(
        this, tr("Save recording"), suggested);
    if (target.isEmpty())
        return;

    m_target = new QFile(target, this);
    if (!m_target->open(QIODevice::WriteOnly)) {
        m_status->setText(tr("Cannot write to %1.").arg(target));
        delete m_target;
        m_target = nullptr;
        return;
    }

    m_download = m_net->get(QNetworkRequest(m_client->downloadUrl(recording)));
    m_downloadButton->setEnabled(false);
    m_progress->setVisible(true);
    m_progress->setValue(0);

    // Written as it arrives rather than buffered: these files run to hundreds
    // of megabytes and there is no reason to hold one in memory.
    connect(m_download, &QNetworkReply::readyRead, this, [this] {
        if (m_target)
            m_target->write(m_download->readAll());
    });
    connect(m_download, &QNetworkReply::downloadProgress, this,
            [this](qint64 received, qint64 total) {
                if (total > 0) {
                    m_progress->setMaximum(100);
                    m_progress->setValue(int(received * 100 / total));
                } else {
                    m_progress->setMaximum(0);   // camera sent no length
                }
            });
    connect(m_download, &QNetworkReply::finished, this, [this, target] {
        const bool ok = m_download->error() == QNetworkReply::NoError;
        const QString error = m_download->errorString();
        if (m_target) {
            m_target->write(m_download->readAll());
            m_target->close();
            delete m_target;
            m_target = nullptr;
        }
        m_download->deleteLater();
        m_download = nullptr;
        m_progress->setVisible(false);
        m_downloadButton->setEnabled(true);

        if (ok) {
            m_status->setStyleSheet(QStringLiteral("color:#27ae60;"));
            m_status->setText(tr("Saved to %1").arg(target));
        } else {
            m_status->setStyleSheet(QStringLiteral("color:#c0392b;"));
            m_status->setText(tr("Download failed: %1").arg(error));
        }
    });
}

} // namespace leolink
