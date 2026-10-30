// The handbook, shipped with the program and shown in a window of its own.
#pragma once

#include <QTextBrowser>
#include <QWidget>

class QToolButton;

namespace leolink {

/// Shows docs/*.md from the program's own resources, so the handbook describes
/// the build that is installed, and needs no internet to read.
///
/// The pages are the same Markdown the website is made from. Two things there
/// are the website's and not Markdown's, and are put right on loading: the
/// Jekyll header at the top of a page, and the anchors GitHub gives every
/// heading, which links within the pages rely on.
class HandbookBrowser : public QTextBrowser {
    Q_OBJECT

public:
    using QTextBrowser::QTextBrowser;

    QVariant loadResource(int type, const QUrl &name) override;

protected:
    void doSetSource(const QUrl &name, QTextDocument::ResourceType type) override;

private:
    void nameHeadings();

    /// The page whose headings have been named.
    QUrl m_named;
};

class HandbookWindow : public QWidget {
    Q_OBJECT

public:
    explicit HandbookWindow(QWidget *parent = nullptr);

    /// Opens `page` ("index.md", "protocol.md", optionally with "#anchor").
    void open(const QString &page);

    /// The same page on GitHub, at this build's release tag.
    static QUrl webUrl(const QString &path);

private:
    void follow(const QUrl &link);

    HandbookBrowser *m_browser{nullptr};
    QToolButton *m_back{nullptr};
    QToolButton *m_forward{nullptr};
};

} // namespace leolink
