const crypto = require('crypto');

function decryption(body) {
    const { encryptedData, privateKey, passphrase } = body;

    const decryptedData = crypto.privateDecrypt({
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
            passphrase: passphrase,
        },
        Buffer.from(encryptedData, "base64")
    )
    return decryptedData.toString("utf8");
}

module.exports = decryption;