#include "FakeWebServer.h"

#include <QNetworkRequest>
#include <QPointer>
#include <QTcpServer>
#include <QTcpSocket>
#include <QTimer>

FakeWebServer::FakeWebServer(Handler handler, QObject *parent)
    : QObject(parent), m_server(new QTcpServer(this)), m_handler(std::move(handler))
{
    m_server->listen(QHostAddress::LocalHost, 0);
    connect(m_server, &QTcpServer::newConnection, this, [this] {
        while (QTcpSocket *socket = m_server->nextPendingConnection())
            serve(socket);
    });
}

quint16 FakeWebServer::port() const
{
    return m_server->serverPort();
}

void FakeWebServer::serve(QTcpSocket *socket)
{
    auto *buffer = new QByteArray;
    connect(socket, &QTcpSocket::disconnected, socket, [socket, buffer] {
        delete buffer;
        socket->deleteLater();
    });
    connect(socket, &QTcpSocket::readyRead, this, [this, socket, buffer] {
        *buffer += socket->readAll();
        const int end = buffer->indexOf("\r\n\r\n");
        if (end < 0)
            return;

        Request request;
        const QList<QByteArray> lines = buffer->left(end).split('\n');
        const QList<QByteArray> first = lines.value(0).trimmed().split(' ');
        request.method = first.value(0);
        const QUrl target(QString::fromLatin1(first.value(1)));
        request.path = target.path();
        request.query = QUrlQuery(target);
        for (int i = 1; i < lines.size(); ++i) {
            const int colon = lines.at(i).indexOf(':');
            if (colon > 0)
                request.headers.insert(lines.at(i).left(colon).trimmed().toLower(),
                                       lines.at(i).mid(colon + 1).trimmed());
        }
        const int length = request.headers.value("content-length").toInt();
        if (buffer->size() < end + 4 + length)
            return;   // the body is still on its way
        request.body = buffer->mid(end + 4, length);
        buffer->clear();

        m_requests.append(request);
        const Response response = m_handler(request);
        const QByteArray reply =
            "HTTP/1.1 " + QByteArray::number(response.status) + " Status\r\n"
            "Content-Type: " + response.contentType + "\r\n"
            "Content-Length: " + QByteArray::number(response.body.size()) + "\r\n"
            "Connection: close\r\n\r\n" + response.body;
        QPointer<QTcpSocket> guard(socket);
        QTimer::singleShot(response.delayMs, this, [guard, reply] {
            if (!guard)
                return;
            guard->write(reply);
            guard->disconnectFromHost();
        });
    });
}

QNetworkReply *RedirectingNetwork::createRequest(Operation op, const QNetworkRequest &request,
                                                 QIODevice *data)
{
    m_intended.append(request.url());
    QNetworkRequest local(request);
    QUrl url = request.url();
    url.setScheme(QStringLiteral("http"));
    url.setHost(QStringLiteral("127.0.0.1"));
    url.setPort(m_port);
    local.setUrl(url);
    return QNetworkAccessManager::createRequest(op, local, data);
}
