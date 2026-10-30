#include "HandbookWindow.h"

#include <QDesktopServices>
#include <QFile>
#include <QHBoxLayout>
#include <QSet>
#include <QTextBlock>
#include <QTextCursor>
#include <QToolButton>
#include <QVBoxLayout>

namespace leolink {

namespace {

/// Where the pages live among the program's resources.
const QString kRoot = QStringLiteral("/handbook/");

/// The anchor GitHub, and the website, give a heading: lower case, spaces as
/// hyphens, everything but letters, digits, hyphens and underscores dropped.
QString slug(const QString &heading)
{
    QString out;
    for (const QChar ch : heading.trimmed().toLower()) {
        if (ch.isLetterOrNumber() || ch == QLatin1Char('-') || ch == QLatin1Char('_'))
            out += ch;
        else if (ch == QLatin1Char(' '))
            out += QLatin1Char('-');
    }
    return out;
}

/// A page without the Jekyll header the website needs: a block between two
/// lines of "---" at the very top.
QString withoutHeader(QString text)
{
    if (!text.startsWith(QLatin1String("---\n")))
        return text;
    const int end = text.indexOf(QLatin1String("\n---\n"), 3);
    return end < 0 ? text : text.mid(end + 5);
}

bool isPage(const QUrl &url)
{
    return url.scheme() == QLatin1String("qrc") && url.path().startsWith(kRoot)
           && url.path().endsWith(QLatin1String(".md"))
           && QFile::exists(QLatin1Char(':') + url.path());
}

} // namespace

QVariant HandbookBrowser::loadResource(int type, const QUrl &name)
{
    if (!isPage(name))
        return QTextBrowser::loadResource(type, name);
    QFile file(QLatin1Char(':') + name.path());
    if (!file.open(QIODevice::ReadOnly))
        return {};
    return withoutHeader(QString::fromUtf8(file.readAll()));
}

void HandbookBrowser::doSetSource(const QUrl &name, QTextDocument::ResourceType type)
{
    QTextBrowser::doSetSource(name, type);
    // A newly loaded page has no anchors until its headings are named, which
    // the load could not wait for; so they are named now, and the scroll to
    // the anchor done again. Within a page they are there already.
    QUrl page = name;
    page.setFragment({});
    if (page == m_named)
        return;
    m_named = page;
    nameHeadings();
    if (!name.fragment().isEmpty())
        scrollToAnchor(name.fragment());
}

void HandbookBrowser::nameHeadings()
{
    QSet<QString> seen;
    for (QTextBlock block = document()->begin(); block.isValid(); block = block.next()) {
        if (block.blockFormat().headingLevel() == 0 || block.text().isEmpty())
            continue;
        // A second heading with the same text is "-1", as on GitHub.
        const QString base = slug(block.text());
        QString name = base;
        for (int n = 1; seen.contains(name); ++n)
            name = base + QLatin1Char('-') + QString::number(n);
        seen.insert(name);

        QTextCursor cursor(block);
        cursor.movePosition(QTextCursor::NextCharacter, QTextCursor::KeepAnchor);
        QTextCharFormat format;
        format.setAnchor(true);
        format.setAnchorNames({name});
        cursor.mergeCharFormat(format);
    }
}

HandbookWindow::HandbookWindow(QWidget *parent)
    : QWidget(parent, Qt::Window)
{
    setWindowTitle(tr("leolink handbook"));
    resize(820, 900);

    m_browser = new HandbookBrowser(this);
    // Links are followed here rather than by the browser: a page of the
    // handbook opens in it, the web in the web browser, and anything else in
    // the repository, the licence for one, on GitHub at this build's tag.
    m_browser->setOpenLinks(false);
    connect(m_browser, &QTextBrowser::anchorClicked, this, &HandbookWindow::follow);

    auto button = [this](const QString &icon, const QString &text) {
        auto *b = new QToolButton(this);
        b->setIcon(QIcon::fromTheme(icon));
        b->setText(text);
        b->setToolTip(text);
        b->setToolButtonStyle(Qt::ToolButtonTextBesideIcon);
        b->setAutoRaise(true);
        return b;
    };
    m_back = button(QStringLiteral("go-previous"), tr("Back"));
    m_forward = button(QStringLiteral("go-next"), tr("Forward"));
    QToolButton *contents = button(QStringLiteral("go-home"), tr("Contents"));
    QToolButton *protocol = button(QStringLiteral("network-wired"), tr("Protocol notes"));
    QToolButton *web = button(QStringLiteral("internet-web-browser"), tr("View on the web"));
    web->setToolTip(tr("This page on GitHub, as it was for leolink %1")
                        .arg(QStringLiteral(LEOLINK_VERSION)));

    m_back->setEnabled(false);
    m_forward->setEnabled(false);
    connect(m_back, &QToolButton::clicked, m_browser, &QTextBrowser::backward);
    connect(m_forward, &QToolButton::clicked, m_browser, &QTextBrowser::forward);
    connect(m_browser, &QTextBrowser::backwardAvailable, m_back, &QWidget::setEnabled);
    connect(m_browser, &QTextBrowser::forwardAvailable, m_forward, &QWidget::setEnabled);
    connect(contents, &QToolButton::clicked, this, [this] { open(QStringLiteral("index.md")); });
    connect(protocol, &QToolButton::clicked, this,
            [this] { open(QStringLiteral("protocol.md")); });
    connect(web, &QToolButton::clicked, this, [this] {
        QUrl page = m_browser->source();
        const QString anchor = page.fragment();
        page.setFragment({});
        QUrl url = webUrl(QStringLiteral("docs/") + page.path().mid(kRoot.size()));
        url.setFragment(anchor);
        QDesktopServices::openUrl(url);
    });

    auto *bar = new QHBoxLayout;
    bar->setContentsMargins(4, 4, 4, 0);
    bar->addWidget(m_back);
    bar->addWidget(m_forward);
    bar->addWidget(contents);
    bar->addWidget(protocol);
    bar->addStretch();
    bar->addWidget(web);

    auto *layout = new QVBoxLayout(this);
    layout->setContentsMargins(0, 0, 0, 0);
    layout->setSpacing(4);
    layout->addLayout(bar);
    layout->addWidget(m_browser);
}

void HandbookWindow::open(const QString &page)
{
    m_browser->setSource(QUrl(QStringLiteral("qrc:") + kRoot + page),
                         QTextDocument::MarkdownResource);
    show();
    raise();
    activateWindow();
}

QUrl HandbookWindow::webUrl(const QString &path)
{
    return QUrl(QStringLiteral("https://github.com/tombueng/leolink/blob/v"
                               LEOLINK_VERSION "/")
                + path);
}

void HandbookWindow::follow(const QUrl &link)
{
    if (!link.scheme().isEmpty() && link.scheme() != QLatin1String("qrc")) {
        QDesktopServices::openUrl(link);
        return;
    }
    const QUrl target = m_browser->source().resolved(link);
    if (isPage(target)) {
        m_browser->setSource(target, QTextDocument::MarkdownResource);
        return;
    }
    // Somewhere else in the repository: ../LICENSE from a page in docs/.
    QString path = target.path();
    if (path.startsWith(kRoot))
        path = QStringLiteral("docs/") + path.mid(kRoot.size());
    else if (path.startsWith(QLatin1Char('/')))
        path = path.mid(1);
    QUrl url = webUrl(path);
    url.setFragment(target.fragment());
    QDesktopServices::openUrl(url);
}

} // namespace leolink
