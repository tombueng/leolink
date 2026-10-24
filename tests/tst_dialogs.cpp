// The two dialogs everything starts from: the camera list, where cameras are
// added, and a camera's own settings — driven the way a person would.

#include <QApplication>
#include <QCheckBox>
#include <QComboBox>
#include <QDialogButtonBox>
#include <QDomDocument>
#include <QJsonArray>
#include <QJsonDocument>
#include <QLabel>
#include <QLineEdit>
#include <QListWidget>
#include <QMessageBox>
#include <QPushButton>
#include <QSignalSpy>
#include <QSlider>
#include <QSpinBox>
#include <QStandardPaths>
#include <QTemporaryDir>
#include <QTest>
#include <QTimer>

#include "CameraSettingsDialog.h"
#include "Config.h"
#include "FakeCamera.h"
#include "FakeWebServer.h"
#include "ReolinkClient.h"
#include "SectionEditor.h"
#include "SettingsDialog.h"

using namespace leolink;

namespace {

const QString kPassword = QStringLiteral("not-a-real-password");

QPushButton *button(QWidget *in, const QString &text)
{
    for (QPushButton *b : in->findChildren<QPushButton *>())
        if (b->text().remove(QLatin1Char('&')) == text)
            return b;
    return nullptr;
}

QLineEdit *field(QWidget *in, const QString &placeholder)
{
    for (QLineEdit *e : in->findChildren<QLineEdit *>())
        if (e->placeholderText() == placeholder)
            return e;
    return nullptr;
}

/// Answers the next message box with `answer`, as a person would.
void answerNextMessageBox(QMessageBox::StandardButton answer)
{
    QTimer::singleShot(0, [answer] {
        for (int i = 0; i < 100; ++i) {
            if (auto *box = qobject_cast<QMessageBox *>(QApplication::activeModalWidget())) {
                box->button(answer)->click();
                return;
            }
            QTest::qWait(20);
        }
    });
}

QString canonical(const QString &xml)
{
    QDomDocument doc;
    doc.setContent(xml);
    return doc.toString(-1);
}

/// An HTTP API that knows one camera, the E1 Zoom of the fixtures.
FakeWebServer::Response httpCamera(const FakeWebServer::Request &request)
{
    const QJsonObject entry = QJsonDocument::fromJson(request.body).array().first().toObject();
    const QString cmd = entry.value(QStringLiteral("cmd")).toString();
    QJsonObject reply;
    if (cmd == QLatin1String("Login")) {
        reply = {{QStringLiteral("cmd"), cmd}, {QStringLiteral("code"), 0},
                 {QStringLiteral("value"),
                  QJsonObject{{QStringLiteral("Token"), QJsonObject{{QStringLiteral("name"), QStringLiteral("t")}}}}}};
    } else {
        QFile f(QStringLiteral(LEOLINK_FIXTURES "/e1zoom/http/") + cmd + QStringLiteral(".json"));
        reply = f.open(QIODevice::ReadOnly) ? QJsonDocument::fromJson(f.readAll()).object()
                                            : QJsonObject{{QStringLiteral("cmd"), cmd}, {QStringLiteral("code"), 1}};
    }
    FakeWebServer::Response r;
    r.body = QJsonDocument(QJsonArray{reply}).toJson();
    return r;
}

} // namespace

class TestDialogs : public QObject {
    Q_OBJECT

private slots:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        qputenv("LEOLINK_CONFIG", m_dir.filePath(QStringLiteral("config.json")).toUtf8());
    }

    // ── the camera list ─────────────────────────────────────────────────────

    /// Add, fill in, save, and it is in the file the next start reads.
    void addACamera()
    {
        SettingsDialog dialog{Config{}};
        dialog.show();
        QVERIFY(QTest::qWaitForWindowExposed(&dialog));
        button(&dialog, QStringLiteral("Add"))->click();

        QLineEdit *host = field(&dialog, QStringLiteral("192.168.1.10 or camera.lan"));
        QVERIFY(host);
        host->setText(QStringLiteral("192.0.2.10"));
        auto *list = dialog.findChild<QListWidget *>();
        QCOMPARE(list->count(), 1);

        dialog.findChild<QDialogButtonBox *>()->button(QDialogButtonBox::Save)->click();
        QCOMPARE(dialog.QDialog::result(), int(QDialog::Accepted));
        const Config result = dialog.SettingsDialog::result();
        QCOMPARE(result.cameras.size(), 1);
        const CameraConfig &c = result.cameras.first();
        QCOMPARE(c.host, QStringLiteral("192.0.2.10"));
        QVERIFY(!c.id.isEmpty());
        // New cameras find their own way to the picture; old ones keep theirs.
        QCOMPARE(c.transport, QStringLiteral("auto"));

        QVERIFY(result.save());
        QCOMPARE(Config::load().cameras.first().host, QStringLiteral("192.0.2.10"));
    }

    void cameraWithoutAnAddressIsNotSaved()
    {
        SettingsDialog dialog{Config{}};
        dialog.show();
        button(&dialog, QStringLiteral("Add"))->click();
        answerNextMessageBox(QMessageBox::Ok);
        dialog.findChild<QDialogButtonBox *>()->button(QDialogButtonBox::Save)->click();
        QVERIFY(dialog.QDialog::result() != int(QDialog::Accepted));
    }

    void removeACamera()
    {
        Config config;
        for (const char *host : {"192.0.2.10", "192.0.2.11"}) {
            CameraConfig c;
            c.id = Config::newId();
            c.host = QLatin1String(host);
            config.cameras.append(c);
        }
        SettingsDialog dialog{config};
        dialog.show();
        auto *list = dialog.findChild<QListWidget *>();
        list->setCurrentRow(0);
        answerNextMessageBox(QMessageBox::Yes);
        button(&dialog, QStringLiteral("Remove"))->click();
        QCOMPARE(list->count(), 1);
        dialog.findChild<QDialogButtonBox *>()->button(QDialogButtonBox::Save)->click();
        QCOMPARE(dialog.SettingsDialog::result().cameras.size(), 1);
        QCOMPARE(dialog.SettingsDialog::result().cameras.first().host, QStringLiteral("192.0.2.11"));
    }

    /// The Test button, against a camera that answers.
    void testACamera()
    {
        FakeWebServer server(httpCamera);
        Config config;
        CameraConfig c;
        c.id = Config::newId();
        c.host = QStringLiteral("192.0.2.10");
        c.password = kPassword;
        config.cameras.append(c);
        SettingsDialog dialog{config};
        dialog.show();
        for (ReolinkClient *client : dialog.findChildren<ReolinkClient *>())
            client->setNetwork(new RedirectingNetwork(server.port(), client));
        button(&dialog, QStringLiteral("Test connection"))->click();
        QTRY_VERIFY_WITH_TIMEOUT(
            [&dialog] {
                for (QLabel *l : dialog.findChildren<QLabel *>())
                    if (l->text().startsWith(QStringLiteral("✓")) && l->text().contains(QLatin1String("E1 Zoom")))
                        return true;
                return false;
            }(),
            5000);
    }

    // ── a camera's own settings, over Baichuan ──────────────────────────────

    /// An E1 Pro, which has no web server: the dialog opens on what the camera
    /// is, and fills its pages from Baichuan.
    void cameraSettingsOverBaichuan()
    {
        FakeCamera camera(QStringLiteral("admin"), kPassword);
        camera.loadDocuments(QStringLiteral(LEOLINK_FIXTURES "/e1pro"));
        camera.begin();

        CameraSettingsDialog dialog(e1Pro(camera.port()));
        dialog.show();
        QTRY_VERIFY_WITH_TIMEOUT(hasLabel(dialog, QStringLiteral("v3.1.0.3149_2401092478")), 15000);
        QVERIFY(hasLabel(dialog, QStringLiteral("E1 Pro")));

        // The pages, filled from the camera: the picture, its processing, the
        // on-screen text, recognition, recording and the alerts.
        QTRY_COMPARE_WITH_TIMEOUT(brightness(dialog)->value(), 128, 15000);
        QTRY_VERIFY_WITH_TIMEOUT(editorWith(dialog, QStringLiteral("antiFlicker")), 15000);
        QTRY_VERIFY_WITH_TIMEOUT(editorWith(dialog, QStringLiteral("osdChannel")), 15000);
        QTRY_VERIFY_WITH_TIMEOUT(editorWith(dialog, QStringLiteral("people")), 15000);
        QTRY_VERIFY_WITH_TIMEOUT(editorWith(dialog, QStringLiteral("postRec")), 15000);
        QCOMPARE(editorWith(dialog, QStringLiteral("osdChannel"))->collect().value(QStringLiteral("osdChannel"))
                     .toObject().value(QStringLiteral("name")).toString(),
                 QStringLiteral("Camera 3"));
        QVERIFY(!hasLabel(dialog, QStringLiteral("Cannot reach")));
    }

    /// Apply with nothing changed: the camera ends up exactly as it was.
    void applyingNothingChangesNothing()
    {
        FakeCamera camera(QStringLiteral("admin"), kPassword);
        camera.loadDocuments(QStringLiteral(LEOLINK_FIXTURES "/doorbell"));
        camera.begin();
        QMap<quint32, QString> before;
        for (quint32 msg = 0; msg < 400; ++msg)
            if (!camera.document(msg).isEmpty())
                before.insert(msg, canonical(camera.document(msg)));

        CameraSettingsDialog dialog(e1Pro(camera.port()));
        dialog.show();
        waitUntilLoaded(dialog);
        if (QTest::currentTestFailed())
            return;
        camera.clearRequests();
        QPushButton *apply = button(&dialog, QStringLiteral("Apply to camera"));
        QVERIFY(apply);
        if (apply->isEnabled())
            apply->click();
        QTest::qWait(2000);

        for (auto it = before.constBegin(); it != before.constEnd(); ++it)
            QCOMPARE(canonical(camera.document(it.key())), it.value());
    }

    /// One field changed reaches the camera, and nothing else does.
    void applyingAnEditWritesIt()
    {
        FakeCamera camera(QStringLiteral("admin"), kPassword);
        camera.loadDocuments(QStringLiteral(LEOLINK_FIXTURES "/doorbell"));
        camera.begin();

        CameraSettingsDialog dialog(e1Pro(camera.port()));
        dialog.show();
        waitUntilLoaded(dialog);
        if (QTest::currentTestFailed())
            return;
        const QString encoder = canonical(camera.document(56));
        const QString osd = canonical(camera.document(44));

        brightness(dialog)->setValue(200);
        // The form shows its own labels; the entry wanted is the one that
        // reads back as the API's "50HZ".
        SectionEditor *isp = editorWith(dialog, QStringLiteral("antiFlicker"));
        bool chosen = false;
        for (QComboBox *box : isp->findChildren<QComboBox *>()) {
            const int was = box->currentIndex();
            for (int i = 0; i < box->count() && !chosen; ++i) {
                box->setCurrentIndex(i);
                chosen = isp->collect().value(QStringLiteral("antiFlicker")).toString() == QLatin1String("50HZ");
            }
            if (chosen)
                break;
            box->setCurrentIndex(was);
        }
        QVERIFY(chosen);

        camera.clearRequests();
        button(&dialog, QStringLiteral("Apply to camera"))->click();
        QTRY_VERIFY_WITH_TIMEOUT(camera.document(26).contains(QLatin1String("<bright>200</bright>")), 10000);
        QTest::qWait(1500);
        QTRY_VERIFY_WITH_TIMEOUT(camera.document(26).contains(QLatin1String("<mode>50hz</mode>")), 10000);
        QCOMPARE(canonical(camera.document(56)), encoder);
        QCOMPARE(canonical(camera.document(44)), osd);
    }

private:
    QTemporaryDir m_dir;

    static CameraConfig e1Pro(quint16 port)
    {
        CameraConfig c;
        c.id = QStringLiteral("e1pro");
        c.name = QStringLiteral("Living room");
        c.host = QStringLiteral("127.0.0.1");
        c.password = kPassword;
        c.baichuanPort = port;
        c.caps.known = true;
        c.caps.rtsp = true;
        c.caps.onvif = true;
        c.caps.baichuan = true;
        return c;
    }

    /// The Picture page's first slider. The page is built by hand, not from
    /// a generated form, so it is found by what it is.
    static QSlider *brightness(const QWidget &in)
    {
        const QList<QSlider *> sliders = in.findChildren<QSlider *>();
        return sliders.isEmpty() ? nullptr : sliders.first();
    }

    /// Everything the camera has, filled in.
    static void waitUntilLoaded(const QWidget &in)
    {
        QTRY_VERIFY_WITH_TIMEOUT(brightness(in) && brightness(in)->value() == 128, 15000);
        QTRY_VERIFY_WITH_TIMEOUT(editorWith(in, QStringLiteral("antiFlicker")), 15000);
        QTRY_VERIFY_WITH_TIMEOUT(editorWith(in, QStringLiteral("osdChannel")), 15000);
        QTest::qWait(1000);   // the last of the sections
    }

    static bool hasLabel(const QWidget &in, const QString &text)
    {
        for (QLabel *l : in.findChildren<QLabel *>())
            if (l->text().contains(text))
                return true;
        return false;
    }

    static SectionEditor *editorWith(const QWidget &in, const QString &key)
    {
        for (SectionEditor *e : in.findChildren<SectionEditor *>())
            if (e->hasAnything() && e->collect().contains(key))
                return e;
        return nullptr;
    }
};

QTEST_MAIN(TestDialogs)
#include "tst_dialogs.moc"
