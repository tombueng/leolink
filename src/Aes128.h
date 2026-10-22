// AES-128 in CFB-128 mode — what Baichuan uses once a camera grants AES.
#pragma once

#include <array>

#include <QByteArray>

namespace leolink {

/// AES-128, CFB mode with a full 128-bit feedback segment.
///
/// Newer firmware will not talk XOR at all: an E1 Pro on 3.1.0.3149 leaves a
/// login that asks for it unanswered, and only replies to one asking for AES.
/// Qt has no AES of its own, and linking OpenSSL for sixteen bytes of key would
/// put a new library in every package's dependencies. CFB needs only the
/// cipher's forward direction — decrypting is the same keystream applied again —
/// so the whole of it is the key schedule and one encryption round function.
///
/// Every Baichuan message starts a fresh keystream from the same fixed IV, so
/// there is no state to carry between calls. Checked against the FIPS-197
/// example vector and against real hardware.
class Aes128Cfb {
public:
    /// `key` must be 16 bytes. Anything else leaves the cipher unusable,
    /// which isValid() reports.
    explicit Aes128Cfb(const QByteArray &key);

    bool isValid() const { return m_valid; }

    QByteArray encrypt(const QByteArray &data, const QByteArray &iv) const;
    QByteArray decrypt(const QByteArray &data, const QByteArray &iv) const;

    /// One block through the forward cipher. Public for the known-answer check.
    void encryptBlock(const unsigned char in[16], unsigned char out[16]) const;

private:
    QByteArray run(const QByteArray &data, const QByteArray &iv, bool encrypting) const;

    std::array<unsigned char, 176> m_roundKeys{};
    bool m_valid{false};
};

} // namespace leolink
