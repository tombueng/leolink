// The cipher under Baichuan's AES sessions, against NIST's published vectors.

#include <QTest>

#include "Aes128.h"
#include "Baichuan.h"

using leolink::Aes128Cfb;
using leolink::BaichuanClient;

class TestAes : public QObject {
    Q_OBJECT

private slots:
    /// FIPS-197 appendix C.1: one block through the forward cipher.
    void fips197Block()
    {
        const Aes128Cfb aes(QByteArray::fromHex("000102030405060708090a0b0c0d0e0f"));
        QVERIFY(aes.isValid());
        const QByteArray in = QByteArray::fromHex("00112233445566778899aabbccddeeff");
        unsigned char out[16];
        aes.encryptBlock(reinterpret_cast<const unsigned char *>(in.constData()), out);
        QCOMPARE(QByteArray(reinterpret_cast<const char *>(out), 16).toHex(),
                 QByteArray("69c4e0d86a7b0430d8cdb78070b4c55a"));
    }

    /// NIST SP 800-38A F.3.13 and F.3.14: CFB128-AES128, four blocks.
    void sp80038aCfb128()
    {
        const Aes128Cfb aes(QByteArray::fromHex("2b7e151628aed2a6abf7158809cf4f3c"));
        const QByteArray iv = QByteArray::fromHex("000102030405060708090a0b0c0d0e0f");
        const QByteArray plain = QByteArray::fromHex(
            "6bc1bee22e409f96e93d7e117393172a" "ae2d8a571e03ac9c9eb76fac45af8e51"
            "30c81c46a35ce411e5fbc1191a0a52ef" "f69f2445df4f9b17ad2b417be66c3710");
        const QByteArray cipher = QByteArray::fromHex(
            "3b3fd92eb72dad20333449f8e83cfb4a" "c8a64537a0b3a93fcde3cdad9f1ce58b"
            "26751f67a3cbb140b1808cf187a4f4df" "c04b05357c5d1c0eeac4c66f9ff7f2e6");
        QCOMPARE(aes.encrypt(plain, iv).toHex(), cipher.toHex());
        QCOMPARE(aes.decrypt(cipher, iv).toHex(), plain.toHex());
    }

    /// Baichuan bodies are any length, so the last block is usually partial.
    void partialBlocks()
    {
        const Aes128Cfb aes(QByteArray("0123456789ABCDEF"));
        const QByteArray iv("0123456789abcdef");
        for (int length : {0, 1, 15, 16, 17, 37, 1000}) {
            const QByteArray plain(length, 'x');
            const QByteArray sealed = aes.encrypt(plain, iv);
            QCOMPARE(sealed.size(), length);
            QCOMPARE(aes.decrypt(sealed, iv), plain);
            // The first part of a longer message is the shorter one's
            // ciphertext: each message starts the keystream afresh.
            if (length > 16)
                QCOMPARE(sealed.left(16), aes.encrypt(plain.left(16), iv));
        }
    }

    void rejectsWrongKeyLength()
    {
        QVERIFY(!Aes128Cfb(QByteArray(15, 'k')).isValid());
        QVERIFY(!Aes128Cfb(QByteArray(32, 'k')).isValid());
    }

    void xorIsItsOwnInverse()
    {
        const QByteArray plain("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>");
        for (quint8 offset : {quint8(0), quint8(3), quint8(255)}) {
            const QByteArray sealed = BaichuanClient::xorCrypt(plain, offset);
            QVERIFY(sealed != plain);
            QCOMPARE(BaichuanClient::xorCrypt(sealed, offset), plain);
        }
    }

    /// 31 characters, upper case: the 32-byte field keeps a NUL at the end.
    void md5Truncated()
    {
        QCOMPARE(BaichuanClient::md5Trunc(QStringLiteral("admin")),
                 QStringLiteral("21232F297A57A5A743894A0E4A801FC"));
    }
};

QTEST_GUILESS_MAIN(TestAes)
#include "tst_aes.moc"
