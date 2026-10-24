// A web server on the loopback interface, for the parts of leolink that speak
// HTTP: the camera's API, ONVIF events, webhooks.
#pragma once

#include <functional>

#include <QByteArray>
#include <QHash>
#include <QList>
#include <QNetworkAccessManager>
#include <QObject>
#include <QString>
#include <QUrlQuery>

class QTcpServer;
class QTcpSocket;

/// Answers each request with whatever the test's handler says.
///
/// Runs on the thread that made it, inside the test's event loop, since the
/// clients it serves are asynchronous anyway. Every request is kept for the
/// test to look at afterwards.
class FakeWebServer : public QObject {
    Q_OBJECT

public:
    struct Request {
        QByteArray method;
        QString path;
        QUrlQuery query;
        QHash<QByteArray, QByteArray> headers;   ///< names lower-cased
        QByteArray body;
    };
    struct Response {
        int status{200};
        QByteArray body;
        QByteArray contentType{"application/json"};
        /// Held back this long first, as a long poll is.
        int delayMs{0};
    };
    using Handler = std::function<Response(const Request &)>;

    explicit FakeWebServer(Handler handler, QObject *parent = nullptr);

    quint16 port() const;
    QList<Request> requests() const { return m_requests; }
    void clearRequests() { m_requests.clear(); }

private:
    void serve(QTcpSocket *socket);

    QTcpServer *m_server;
    Handler m_handler;
    QList<Request> m_requests;
};

/// Sends every request to one local port, whatever host and port it named,
/// and over plain HTTP. A client under test is given this in place of its own
/// network manager.
class RedirectingNetwork : public QNetworkAccessManager {
public:
    explicit RedirectingNetwork(quint16 port, QObject *parent = nullptr)
        : QNetworkAccessManager(parent), m_port(port)
    {
    }

    /// Where each request was meant to go, before it was redirected.
    QList<QUrl> intended() const { return m_intended; }

protected:
    QNetworkReply *createRequest(Operation op, const QNetworkRequest &request,
                                 QIODevice *data) override;

private:
    quint16 m_port;
    QList<QUrl> m_intended;
};
