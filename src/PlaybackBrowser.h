// Browse and fetch what the camera has on its SD card.
#pragma once

#include <QDialog>
#include <QList>

#include "Config.h"
#include "ReolinkClient.h"

class QComboBox;
class QDateEdit;
class QLabel;
class QProgressBar;
class QPushButton;
class QTableWidget;
class QNetworkAccessManager;
class QNetworkReply;
class QFile;

namespace leolink {

/// Lists recordings held on the camera and fetches them.
///
/// **Untested against real hardware.** The development camera has no SD card
/// fitted, so the API answers -17 to every search and there was nothing to
/// verify the file listing or the download against. The commands and their
/// shapes come from the documented API — see docs/protocol.md — and the code
/// reports what the camera actually said rather than guessing, so a first run
/// with a card in should show plainly where reality differs.
class PlaybackBrowser : public QDialog {
    Q_OBJECT

public:
    PlaybackBrowser(const CameraConfig &camera, QWidget *parent = nullptr);

private slots:
    void onSearch();
    void onRecordingsReady(const QList<Recording> &recordings);
    void onFailed(const QString &reason);
    void onSelectionChanged();
    void onPlay();
    void onDownload();

private:
    CameraConfig m_camera;
    ReolinkClient *m_client;
    QNetworkAccessManager *m_net;
    QList<Recording> m_recordings;

    QDateEdit *m_from{nullptr};
    QDateEdit *m_to{nullptr};
    QComboBox *m_streamType{nullptr};
    QPushButton *m_searchButton{nullptr};
    QTableWidget *m_table{nullptr};
    QPushButton *m_playButton{nullptr};
    QPushButton *m_downloadButton{nullptr};
    QProgressBar *m_progress{nullptr};
    QLabel *m_status{nullptr};

    QNetworkReply *m_download{nullptr};
    QFile *m_target{nullptr};
};

} // namespace leolink
