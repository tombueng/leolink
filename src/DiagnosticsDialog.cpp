#include "DiagnosticsDialog.h"

#include <QApplication>
#include <QCheckBox>
#include <QClipboard>
#include <QComboBox>
#include <QDesktopServices>
#include <QDialogButtonBox>
#include <QDir>
#include <QFile>
#include <QFileDialog>
#include <QFileInfo>
#include <QFontDatabase>
#include <QHBoxLayout>
#include <QLabel>
#include <QLineEdit>
#include <QMessageBox>
#include <QPlainTextEdit>
#include <QPushButton>
#include <QScrollBar>
#include <QTextStream>
#include <QUrl>
#include <QVBoxLayout>

namespace leolink {

namespace {

/// Every category, in the order they appear in the enum.
const QList<Log::Category> kCategories{
    Log::Category::App,     Log::Category::Api,      Log::Category::Stream,
    Log::Category::Onvif,   Log::Category::Motion,   Log::Category::Record,
    Log::Category::Event,   Log::Category::Network,  Log::Category::Baichuan,
    Log::Category::Ui,      Log::Category::Qt,
};

/// The tail of a log file. Reports carry the file rather than only what is in
/// memory, because the useful part is often from before the window was opened —
/// including the previous run, if the crash was the reason for opening it.
QStringList tail(const QString &path, int lines)
{
    QFile file(path);
    if (!file.open(QIODevice::ReadOnly | QIODevice::Text))
        return {};
    QStringList all;
    QTextStream stream(&file);
    while (!stream.atEnd()) {
        all.append(stream.readLine());
        if (all.size() > lines * 2)          // trim occasionally, not per line
            all = all.mid(all.size() - lines);
    }
    return all.size() > lines ? all.mid(all.size() - lines) : all;
}

} // namespace

DiagnosticsDialog::DiagnosticsDialog(QWidget *parent) : QDialog(parent)
{
    setWindowTitle(tr("Diagnostics"));
    resize(900, 620);

    // ── filters ─────────────────────────────────────────────────────────────
    m_level = new QComboBox(this);
    m_level->addItem(tr("Errors only"), int(Log::Level::Error));
    m_level->addItem(tr("Warnings and errors"), int(Log::Level::Warning));
    m_level->addItem(tr("Normal activity"), int(Log::Level::Info));
    m_level->addItem(tr("Everything"), int(Log::Level::Debug));
    m_level->setCurrentIndex(2);

    m_category = new QComboBox(this);
    m_category->addItem(tr("All areas"), QString());
    for (Log::Category category : kCategories) {
        m_category->addItem(Log::categoryLabel(category),
                            Log::categoryName(category));
    }

    m_search = new QLineEdit(this);
    m_search->setPlaceholderText(tr("Search…"));
    m_search->setClearButtonEnabled(true);

    auto *filters = new QHBoxLayout;
    filters->addWidget(new QLabel(tr("Show"), this));
    filters->addWidget(m_level);
    filters->addWidget(m_category);
    filters->addWidget(m_search, 1);

    // ── the log itself ──────────────────────────────────────────────────────
    m_view = new QPlainTextEdit(this);
    m_view->setReadOnly(true);
    m_view->setLineWrapMode(QPlainTextEdit::NoWrap);
    m_view->setMaximumBlockCount(20000);
    m_view->setFont(QFontDatabase::systemFont(QFontDatabase::FixedFont));

    m_debug = new QCheckBox(tr("Detailed logging"), this);
    m_debug->setChecked(Log::debugEnabled());
    m_debug->setToolTip(
        tr("Records every request to the camera, every decoder decision and "
           "every reconnect. Leave it off for everyday use — switch it on when "
           "something is wrong, reproduce the problem, then send the report."));
    connect(m_debug, &QCheckBox::toggled, this, [this](bool on) {
        Log::setDebugEnabled(on);
        emit debugLoggingChanged(on);
    });

    m_follow = new QCheckBox(tr("Follow new lines"), this);
    m_follow->setChecked(true);

    m_summary = new QLabel(this);
    m_summary->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto *options = new QHBoxLayout;
    options->addWidget(m_debug);
    options->addWidget(m_follow);
    options->addStretch(1);
    options->addWidget(m_summary);

    // ── what to do with it ──────────────────────────────────────────────────
    auto *buttons = new QDialogButtonBox(this);

    auto *copy = buttons->addButton(tr("Copy report"), QDialogButtonBox::ActionRole);
    copy->setToolTip(tr("System details and the log, ready to paste into a "
                        "bug report."));
    connect(copy, &QPushButton::clicked, this, [this] {
        QApplication::clipboard()->setText(buildReport());
        m_summary->setText(tr("Report copied."));
    });

    auto *save = buttons->addButton(tr("Save report…"), QDialogButtonBox::ActionRole);
    connect(save, &QPushButton::clicked, this, [this] {
        const QString path = QFileDialog::getSaveFileName(
            this, tr("Save report"),
            QDir::homePath() + QStringLiteral("/leolink-report.txt"),
            tr("Text files (*.txt)"));
        if (path.isEmpty())
            return;
        QFile file(path);
        if (!file.open(QIODevice::WriteOnly | QIODevice::Text)) {
            QMessageBox::warning(this, tr("Save report"),
                                 tr("Could not write %1.").arg(path));
            return;
        }
        QTextStream(&file) << buildReport();
        m_summary->setText(tr("Saved to %1").arg(QFileInfo(path).fileName()));
    });

    auto *openFolder =
        buttons->addButton(tr("Open log folder"), QDialogButtonBox::ActionRole);
    connect(openFolder, &QPushButton::clicked, this, [] {
        QDesktopServices::openUrl(
            QUrl::fromLocalFile(QFileInfo(Log::logPath()).absolutePath()));
    });

    buttons->addButton(QDialogButtonBox::Close);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);

    // ── the promise that makes sharing safe ─────────────────────────────────
    auto *privacy = new QLabel(
        tr("Passwords, session tokens and internet addresses are removed before "
           "anything is written, so this can be shared as it is. Addresses "
           "inside your own network are kept — they are usually the first clue."),
        this);
    privacy->setWordWrap(true);
    privacy->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto *layout = new QVBoxLayout(this);
    layout->addLayout(filters);
    layout->addWidget(m_view, 1);
    layout->addLayout(options);
    layout->addWidget(privacy);
    layout->addWidget(buttons);

    connect(m_level, &QComboBox::currentIndexChanged, this,
            &DiagnosticsDialog::refresh);
    connect(m_category, &QComboBox::currentIndexChanged, this,
            &DiagnosticsDialog::refresh);
    connect(m_search, &QLineEdit::textChanged, this,
            &DiagnosticsDialog::refresh);

    // Queued: lines arrive from detection and protocol threads as well as this
    // one, and a widget may only be touched from the GUI thread.
    connect(&Log::instance(), &Log::lineWritten, this,
            &DiagnosticsDialog::appendIfWanted, Qt::QueuedConnection);

    refresh();
}

bool DiagnosticsDialog::passesFilter(const QString &line) const
{
    // Lines are fixed-width by construction: timestamp, level, category. That
    // makes filtering a matter of looking at the right columns rather than
    // parsing anything.
    const auto wanted = Log::Level(m_level->currentData().toInt());
    const QString levelText = line.mid(24, 5);
    Log::Level level = Log::Level::Info;
    if (levelText.startsWith(QLatin1String("ERROR")))      level = Log::Level::Error;
    else if (levelText.startsWith(QLatin1String("WARN")))  level = Log::Level::Warning;
    else if (levelText.startsWith(QLatin1String("DEBUG"))) level = Log::Level::Debug;
    if (int(level) > int(wanted))
        return false;

    const QString category = m_category->currentData().toString();
    if (!category.isEmpty() && !line.mid(30, 8).startsWith(category))
        return false;

    const QString search = m_search->text();
    return search.isEmpty() || line.contains(search, Qt::CaseInsensitive);
}

void DiagnosticsDialog::refresh()
{
    const QStringList lines = Log::instance().recent();
    QStringList shown;
    for (const QString &line : lines) {
        if (passesFilter(line))
            shown.append(line);
    }
    m_view->setPlainText(shown.join('\n'));
    m_view->verticalScrollBar()->setValue(m_view->verticalScrollBar()->maximum());
    m_summary->setText(tr("%1 of %2 lines").arg(shown.size()).arg(lines.size()));
}

void DiagnosticsDialog::appendIfWanted(const QString &line)
{
    if (!passesFilter(line))
        return;
    m_view->appendPlainText(line);
    if (m_follow->isChecked()) {
        m_view->verticalScrollBar()->setValue(
            m_view->verticalScrollBar()->maximum());
    }
}

QString DiagnosticsDialog::buildReport() const
{
    QStringList parts;
    parts << Log::report();

    // The file, not the filtered view: whoever reads this needs the lines the
    // user did not think to look at.
    const QStringList previous = tail(Log::previousLogPath(), 200);
    if (!previous.isEmpty()) {
        parts << QString()
              << QStringLiteral("── End of the previous session ──")
              << previous.join('\n');
    }

    parts << QString() << QStringLiteral("── Log ──")
          << tail(Log::logPath(), 2000).join('\n');
    return parts.join('\n') + '\n';
}

} // namespace leolink
