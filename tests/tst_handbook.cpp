// The handbook ships with the program: every page is there, reads as a page,
// and every link in it leads somewhere.
#include <QDir>
#include <QFile>
#include <QSet>
#include <QTextBlock>
#include <QTextFragment>
#include <QtTest>

#include "HandbookWindow.h"

using leolink::HandbookBrowser;

namespace {

const QStringList kPages{QStringLiteral("index.md"), QStringLiteral("protocol.md")};

QUrl pageUrl(const QString &page)
{
    return QUrl(QStringLiteral("qrc:/handbook/") + page);
}

/// The anchors a loaded page offers, and the links it holds.
void scan(const QTextDocument *doc, QSet<QString> *anchors, QStringList *links)
{
    for (QTextBlock block = doc->begin(); block.isValid(); block = block.next()) {
        for (auto it = block.begin(); !it.atEnd(); ++it) {
            const QTextCharFormat format = it.fragment().charFormat();
            if (anchors)
                for (const QString &name : format.anchorNames())
                    anchors->insert(name);
            if (links && format.isAnchor() && !format.anchorHref().isEmpty())
                links->append(format.anchorHref());
        }
    }
}

QString repositoryRoot()
{
    return QDir(QStringLiteral(LEOLINK_FIXTURES "/../..")).canonicalPath();
}

} // namespace

class TestHandbook : public QObject {
    Q_OBJECT

private slots:
    void pagesAreShipped()
    {
        for (const QString &page : kPages)
            QVERIFY2(QFile::exists(QStringLiteral(":/handbook/") + page), qPrintable(page));
    }

    /// The website's Jekyll header is not part of what the window shows.
    void headerIsGone()
    {
        HandbookBrowser browser;
        browser.setSource(pageUrl(QStringLiteral("index.md")), QTextDocument::MarkdownResource);
        const QString text = browser.toPlainText();
        QVERIFY(!text.startsWith(QLatin1String("---")));
        QVERIFY(!text.contains(QLatin1String("title: leolink handbook")));
        QVERIFY(text.contains(QLatin1String("leolink handbook")));
    }

    /// Headings carry the anchors GitHub gives them, so links into a page work
    /// the same in the window as on the website.
    void headingsHaveTheirAnchors()
    {
        HandbookBrowser browser;
        browser.setSource(pageUrl(QStringLiteral("index.md")), QTextDocument::MarkdownResource);
        QSet<QString> anchors;
        scan(browser.document(), &anchors, nullptr);
        QVERIFY2(anchors.contains(QStringLiteral("where-passwords-are-kept")),
                 qPrintable(QStringList(anchors.values()).join(QLatin1Char(' '))));
    }

    /// A link to another page, to a heading, or to a file in the repository
    /// leads to something that exists. The web is not checked from here.
    void everyLinkLeadsSomewhere()
    {
        for (const QString &page : kPages) {
            HandbookBrowser browser;
            browser.setSource(pageUrl(page), QTextDocument::MarkdownResource);
            QStringList links;
            scan(browser.document(), nullptr, &links);
            QVERIFY2(!links.isEmpty(), qPrintable(page));

            for (const QString &href : std::as_const(links)) {
                const QUrl link(href);
                if (link.scheme() == QLatin1String("http") || link.scheme() == QLatin1String("https")
                    || link.scheme() == QLatin1String("mailto"))
                    continue;
                const QUrl target = browser.source().resolved(link);
                const QString where = page + QLatin1String(" → ") + href;
                const QString path = target.path();
                if (path.startsWith(QLatin1String("/handbook/"))) {
                    QVERIFY2(QFile::exists(QLatin1Char(':') + path), qPrintable(where));
                    if (target.fragment().isEmpty())
                        continue;
                    HandbookBrowser other;
                    QUrl targetPage = target;
                    targetPage.setFragment({});
                    other.setSource(targetPage, QTextDocument::MarkdownResource);
                    QSet<QString> anchors;
                    scan(other.document(), &anchors, nullptr);
                    QVERIFY2(anchors.contains(target.fragment()), qPrintable(where));
                } else {
                    // Outside docs/, opened on GitHub: it has to be in the
                    // repository for that to work.
                    QVERIFY2(QFile::exists(repositoryRoot() + path), qPrintable(where));
                }
            }
        }
    }
};

QTEST_MAIN(TestHandbook)
#include "tst_handbook.moc"
