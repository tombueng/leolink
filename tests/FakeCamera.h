// A camera on the loopback interface that speaks Baichuan's side of things.
#pragma once

#include <atomic>

#include <QHash>
#include <QList>
#include <QMutex>
#include <QSet>
#include <QString>
#include <QThread>

/// Enough of a Reolink camera's port 9000 to log in to and to configure.
///
/// It runs the camera's half of the four-message login, encrypts the way the
/// firmware does, and answers settings messages from a set of documents —
/// captures of real cameras, in the tests. A set replaces the document its
/// get answers with, which is what the hardware does, so a write can be read
/// back. Everything the client sends is recorded, decrypted, for the test to
/// look at afterwards.
///
/// Blocking, on a thread of its own, because BaichuanClient is blocking too.
class FakeCamera : public QThread {
public:
    struct Request {
        quint32 msg{0};
        QString extension;
        QString body;
    };

    FakeCamera(QString user, QString password);
    ~FakeCamera() override;

    /// Listening once this returns.
    void begin();
    quint16 port() const { return m_port; }

    // ── how it behaves; set before the client connects ──────────────────────

    /// Grant AES when asked for it. Off, it grants XOR, as an E1 can.
    bool grantAes{true};
    /// Answer a login that asks for XOR. An E1 Pro on 3.1.0.3149 does not, and
    /// leaves the client waiting.
    bool answerXorRequest{true};
    /// Send an unrelated message (an alarm, as cameras do) ahead of every
    /// reply, which the client must step over.
    bool chatter{false};
    /// Status for these messages instead of an answer, as a camera without the
    /// feature replies 400.
    QHash<quint32, int> statusFor;
    /// Close the connection when this message arrives, once, without answering:
    /// a session the camera dropped.
    std::atomic<int> dropOn{-1};
    /// Refuse the firmware piece with this index, counting from 0, with 400.
    int refusePiece{-1};
    /// Refuse the upload's announcement, the file's name and size, with 400.
    bool refuseAnnouncement{false};
    /// Hang up on everything, at once, as a camera restarting does.
    std::atomic<bool> silent{false};

    /// What it answers each get with, by message number.
    void setDocument(quint32 msg, const QString &xml);
    QString document(quint32 msg) const;
    /// The captures for one model, one file per message: `<msg>.xml`.
    void loadDocuments(const QString &directory);

    // ── what happened ───────────────────────────────────────────────────────

    QList<Request> requests() const;
    void clearRequests();
    /// The encryption the first login asked for: 0xDC12 for AES.
    quint16 askedFor() const { return m_askedFor; }
    /// Whether the second login arrived under XOR, as the firmware insists.
    bool loginWasXor() const { return m_loginWasXor; }
    int connections() const { return m_connections; }
    /// A firmware upload as it arrived: the announcement's body, the pieces'
    /// raw bytes joined up, and the handle each message of it carried.
    QString uploadAnnouncement() const;
    QByteArray uploaded() const;
    QList<quint16> uploadHandles() const;
    /// The largest single message the client sent, header included.
    int largestMessage() const { return m_largestMessage; }

protected:
    void run() override;

private:
    void serve(class QTcpSocket &socket);

    QString m_user;
    QString m_password;
    std::atomic<quint16> m_port{0};
    std::atomic<bool> m_stop{false};
    std::atomic<quint16> m_askedFor{0};
    std::atomic<bool> m_loginWasXor{false};
    std::atomic<int> m_connections{0};

    mutable QMutex m_lock;
    QHash<quint32, QString> m_documents;
    QList<Request> m_requests;
    QString m_uploadAnnouncement;
    QByteArray m_uploaded;
    QList<quint16> m_uploadHandles;
    std::atomic<int> m_largestMessage{0};
};
