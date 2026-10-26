// The one way leolink reads a value out of a camera's XML, whichever protocol
// the XML came over.

#include <QTest>

#include "XmlText.h"

namespace xml = leolink::xml;

class TestXmlText : public QObject {
    Q_OBJECT

private slots:
    /// Baichuan's plain elements and ONVIF's prefixed ones with attributes.
    void findsTheElement()
    {
        QCOMPARE(xml::text(QStringLiteral("<body><nonce> abc </nonce></body>"),
                           QStringLiteral("nonce")),
                 QStringLiteral("abc"));
        QCOMPARE(xml::text(QStringLiteral("<wsa5:Address>http://cam/</wsa5:Address>"),
                           QStringLiteral("Address")),
                 QStringLiteral("http://cam/"));
        QCOMPARE(xml::text(QStringLiteral("<wsnt:Topic Dialect=\"x\">tns1:Motion</wsnt:Topic>"),
                           QStringLiteral("Topic")),
                 QStringLiteral("tns1:Motion"));
    }

    /// A longer name is another element: channelId is not channelIdList.
    void wholeNamesOnly()
    {
        const QString doc = QStringLiteral("<channelIdList>1,2</channelIdList><channelId>3</channelId>");
        QCOMPARE(xml::text(doc, QStringLiteral("channelId")), QStringLiteral("3"));
    }

    /// Missing and empty are told apart: null for none, empty for nothing in it.
    void missingIsNull()
    {
        QVERIFY(xml::inner(QStringLiteral("<a>1</a>"), QStringLiteral("b")).isNull());
        const QString empty = xml::inner(QStringLiteral("<b></b>"), QStringLiteral("b"));
        QVERIFY(!empty.isNull());
        QVERIFY(empty.isEmpty());
    }

    void allOfThem()
    {
        const QString doc = QStringLiteral(
            "<AlarmEventList><AlarmEvent version=\"1.1\"><channelId>0</channelId></AlarmEvent>"
            "<AlarmEvent><channelId>1</channelId></AlarmEvent></AlarmEventList>");
        const QStringList events = xml::all(doc, QStringLiteral("AlarmEvent"));
        QCOMPARE(events.size(), 2);
        QCOMPARE(xml::text(events.at(1), QStringLiteral("channelId")), QStringLiteral("1"));
    }
};

QTEST_GUILESS_MAIN(TestXmlText)
#include "tst_xmltext.moc"
