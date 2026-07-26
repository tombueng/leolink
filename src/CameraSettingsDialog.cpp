#include "CameraSettingsDialog.h"

#include <QComboBox>
#include <QDialogButtonBox>
#include <QFormLayout>
#include <QGroupBox>
#include <QHBoxLayout>
#include <QJsonArray>
#include <QLabel>
#include <QPushButton>
#include <QSlider>
#include <QTabWidget>
#include <QVBoxLayout>

#include "ReolinkClient.h"

namespace leolink {

namespace {

/// Fills a combo box from a JSON array of allowed values, selecting `current`.
void fillFromArray(QComboBox *box, const QJsonArray &values,
                   const QJsonValue &current)
{
    box->clear();
    for (const QJsonValue &v : values) {
        const QString text = v.isDouble() ? QString::number(v.toInt()) : v.toString();
        box->addItem(text, v.toVariant());
    }
    const QString want = current.isDouble() ? QString::number(current.toInt())
                                            : current.toString();
    const int index = box->findText(want);
    if (index >= 0)
        box->setCurrentIndex(index);
    box->setEnabled(box->count() > 0);
}

QSlider *makeSlider(QWidget *parent)
{
    auto *slider = new QSlider(Qt::Horizontal, parent);
    slider->setRange(0, 255);
    slider->setEnabled(false);   // enabled once the camera has answered
    return slider;
}

} // namespace

CameraSettingsDialog::CameraSettingsDialog(const CameraConfig &camera,
                                           QWidget *parent)
    : QDialog(parent), m_camera(camera), m_client(new ReolinkClient(this))
{
    setWindowTitle(tr("%1 — camera settings").arg(camera.label()));
    resize(560, 520);

    m_tabs = new QTabWidget(this);
    buildEncoderTab();
    buildPictureTab();

    m_status = new QLabel(tr("Reading settings from %1…").arg(camera.host), this);
    m_status->setWordWrap(true);

    auto *buttons = new QDialogButtonBox(QDialogButtonBox::Close, this);
    m_applyButton = buttons->addButton(tr("Apply to camera"),
                                       QDialogButtonBox::ApplyRole);
    m_applyButton->setEnabled(false);
    connect(m_applyButton, &QPushButton::clicked, this,
            &CameraSettingsDialog::onApply);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);

    auto *root = new QVBoxLayout(this);
    root->addWidget(m_tabs, 1);
    root->addWidget(m_status);
    root->addWidget(buttons);

    connect(m_client, &ReolinkClient::sectionReady,
            this, &CameraSettingsDialog::onSectionReady);
    connect(m_client, &ReolinkClient::sectionApplied,
            this, &CameraSettingsDialog::onSectionApplied);
    connect(m_client, &ReolinkClient::failed,
            this, &CameraSettingsDialog::onFailed);

    m_client->setCamera(camera);

    QJsonObject channel;
    channel[QStringLiteral("channel")] = 0;
    m_client->fetchSection(QStringLiteral("GetEnc"), channel);
    m_client->fetchSection(QStringLiteral("GetImage"), channel);
}

// ── layout ──────────────────────────────────────────────────────────────────

void CameraSettingsDialog::buildEncoderTab()
{
    auto *page = new QWidget(this);

    auto streamGroup = [this, page](const QString &title, StreamControls &c) {
        c.size = new QComboBox(page);
        c.frameRate = new QComboBox(page);
        c.bitRate = new QComboBox(page);
        c.profile = new QComboBox(page);
        for (QComboBox *box : {c.size, c.frameRate, c.bitRate, c.profile})
            box->setEnabled(false);

        c.bitRate->setToolTip(
            tr("Higher means better picture and more network traffic. The "
               "camera only offers the rates it can actually sustain."));

        auto *form = new QFormLayout;
        form->addRow(tr("Resolution"), c.size);
        form->addRow(tr("Frame rate"), c.frameRate);
        form->addRow(tr("Bit rate (kbit/s)"), c.bitRate);
        form->addRow(tr("H.264 profile"), c.profile);

        auto *box = new QGroupBox(title, page);
        box->setLayout(form);
        return box;
    };

    auto *note = new QLabel(
        tr("These change the camera itself, so every client sees the result. "
           "The choices come from the camera and differ per model."),
        page);
    note->setWordWrap(true);
    note->setStyleSheet(QStringLiteral("color:#7f8c8d;"));

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(streamGroup(tr("Main stream"), m_main));
    layout->addWidget(streamGroup(tr("Sub stream"), m_sub));
    layout->addWidget(note);
    layout->addStretch(1);

    m_tabs->addTab(page, tr("Video"));
}

void CameraSettingsDialog::buildPictureTab()
{
    auto *page = new QWidget(this);

    m_bright = makeSlider(page);
    m_contrast = makeSlider(page);
    m_saturation = makeSlider(page);
    m_sharpen = makeSlider(page);
    m_hue = makeSlider(page);

    auto *form = new QFormLayout;
    form->addRow(tr("Brightness"), m_bright);
    form->addRow(tr("Contrast"), m_contrast);
    form->addRow(tr("Saturation"), m_saturation);
    form->addRow(tr("Sharpness"), m_sharpen);
    form->addRow(tr("Hue"), m_hue);

    auto *box = new QGroupBox(tr("Picture"), page);
    box->setLayout(form);

    auto *layout = new QVBoxLayout(page);
    layout->addWidget(box);
    layout->addStretch(1);

    m_tabs->addTab(page, tr("Picture"));
}

// ── camera replies ──────────────────────────────────────────────────────────

void CameraSettingsDialog::populateStream(const QString &which,
                                          const QJsonObject &value,
                                          const QJsonObject &range)
{
    StreamControls &c = (which == QLatin1String("mainStream")) ? m_main : m_sub;
    const QJsonObject current = value.value(which).toObject();
    const QJsonObject allowed = range.value(which).toObject();

    fillFromArray(c.frameRate, allowed.value(QStringLiteral("frameRate")).toArray(),
                  current.value(QStringLiteral("frameRate")));
    fillFromArray(c.bitRate, allowed.value(QStringLiteral("bitRate")).toArray(),
                  current.value(QStringLiteral("bitRate")));
    fillFromArray(c.profile, allowed.value(QStringLiteral("profile")).toArray(),
                  current.value(QStringLiteral("profile")));

    // Resolution is not a list inside one entry: the camera returns a separate
    // range entry per supported resolution, each with its own rates. The sizes
    // are therefore gathered across entries by the caller.
    c.size->setEnabled(c.size->count() > 0);
}

void CameraSettingsDialog::onSectionReady(const QString &command,
                                          const QJsonObject &value,
                                          const QJsonObject &ranges)
{
    if (command == QLatin1String("GetEnc")) {
        m_encValue = value.value(QStringLiteral("Enc")).toObject();
        m_encRange = ranges;

        // The range document is an array: one entry per supported resolution,
        // each carrying the rates valid at that resolution. Collect the sizes
        // first, then fill the rest from the entry that matches what is set.
        const QJsonArray entries = ranges.value(QStringLiteral("Enc")).toArray();
        const QString currentMain = m_encValue.value(QStringLiteral("mainStream"))
                                        .toObject()
                                        .value(QStringLiteral("size"))
                                        .toString();

        m_main.size->clear();
        int matching = 0;
        for (int i = 0; i < entries.size(); ++i) {
            const QJsonObject main =
                entries.at(i).toObject().value(QStringLiteral("mainStream")).toObject();
            const QString size = main.value(QStringLiteral("size")).toString();
            if (size.isEmpty() || m_main.size->findText(size) >= 0)
                continue;
            m_main.size->addItem(size, i);
            if (size == currentMain)
                matching = i;
        }
        const int index = m_main.size->findText(currentMain);
        if (index >= 0)
            m_main.size->setCurrentIndex(index);

        const QJsonObject entry = entries.isEmpty()
                                      ? QJsonObject{}
                                      : entries.at(matching).toObject();
        populateStream(QStringLiteral("mainStream"), m_encValue, entry);
        populateStream(QStringLiteral("subStream"), m_encValue, entry);

        // Sub-stream resolution is fixed per entry on the models seen so far.
        const QString subSize = m_encValue.value(QStringLiteral("subStream"))
                                    .toObject()
                                    .value(QStringLiteral("size"))
                                    .toString();
        m_sub.size->clear();
        m_sub.size->addItem(subSize);
        m_sub.size->setEnabled(false);

        // Changing resolution changes which rates are valid, so refill.
        connect(m_main.size, &QComboBox::currentIndexChanged, this,
                [this, entries](int i) {
                    if (i < 0 || i >= m_main.size->count())
                        return;
                    const int entryIndex = m_main.size->itemData(i).toInt();
                    if (entryIndex < entries.size()) {
                        populateStream(QStringLiteral("mainStream"), m_encValue,
                                       entries.at(entryIndex).toObject());
                    }
                });

        m_applyButton->setEnabled(true);
        m_status->setText(tr("Ready."));
        return;
    }

    if (command == QLatin1String("GetImage")) {
        m_imageValue = value.value(QStringLiteral("Image")).toObject();
        auto set = [this](QSlider *slider, const char *key) {
            if (!m_imageValue.contains(QLatin1String(key)))
                return;   // not every model exposes every knob
            slider->setValue(m_imageValue.value(QLatin1String(key)).toInt());
            slider->setEnabled(true);
        };
        set(m_bright, "bright");
        set(m_contrast, "contrast");
        set(m_saturation, "saturation");
        set(m_sharpen, "sharpen");
        set(m_hue, "hue");
    }
}

// ── writing back ────────────────────────────────────────────────────────────

QJsonObject CameraSettingsDialog::collectEncoder() const
{
    // Start from what the camera gave us and change only the four fields the
    // dialog shows. Set* replaces the whole structure, so anything invented
    // here would silently overwrite settings never presented to the user.
    QJsonObject enc = m_encValue;

    auto apply = [](QJsonObject &stream, const StreamControls &c) {
        if (c.size->isEnabled() && !c.size->currentText().isEmpty())
            stream[QStringLiteral("size")] = c.size->currentText();
        if (c.frameRate->isEnabled())
            stream[QStringLiteral("frameRate")] = c.frameRate->currentData().toInt();
        if (c.bitRate->isEnabled())
            stream[QStringLiteral("bitRate")] = c.bitRate->currentData().toInt();
        if (c.profile->isEnabled())
            stream[QStringLiteral("profile")] = c.profile->currentText();
    };

    QJsonObject main = enc.value(QStringLiteral("mainStream")).toObject();
    QJsonObject sub = enc.value(QStringLiteral("subStream")).toObject();
    apply(main, m_main);
    apply(sub, m_sub);
    enc[QStringLiteral("mainStream")] = main;
    enc[QStringLiteral("subStream")] = sub;

    QJsonObject param;
    param[QStringLiteral("Enc")] = enc;
    return param;
}

QJsonObject CameraSettingsDialog::collectImage() const
{
    QJsonObject image = m_imageValue;
    auto take = [&image](QSlider *slider, const char *key) {
        if (slider->isEnabled())
            image[QLatin1String(key)] = slider->value();
    };
    take(m_bright, "bright");
    take(m_contrast, "contrast");
    take(m_saturation, "saturation");
    take(m_sharpen, "sharpen");
    take(m_hue, "hue");

    QJsonObject param;
    param[QStringLiteral("Image")] = image;
    return param;
}

void CameraSettingsDialog::onApply()
{
    m_applyButton->setEnabled(false);
    m_status->setText(tr("Writing to the camera…"));
    m_pending = 0;

    if (!m_encValue.isEmpty()) {
        ++m_pending;
        m_client->applySection(QStringLiteral("SetEnc"), collectEncoder());
    }
    if (!m_imageValue.isEmpty()) {
        ++m_pending;
        m_client->applySection(QStringLiteral("SetImage"), collectImage());
    }
    if (m_pending == 0) {
        m_status->setText(tr("Nothing to write."));
        m_applyButton->setEnabled(true);
    }
}

void CameraSettingsDialog::onSectionApplied(const QString &)
{
    if (--m_pending > 0)
        return;
    m_applyButton->setEnabled(true);
    m_status->setText(
        tr("Saved. Changing the encoder restarts the stream, so the picture "
           "may drop out for a moment."));
}

void CameraSettingsDialog::onFailed(const QString &reason)
{
    m_pending = 0;
    m_applyButton->setEnabled(true);
    m_status->setText(reason);
    m_status->setStyleSheet(QStringLiteral("color:#c0392b;"));
}

} // namespace leolink
