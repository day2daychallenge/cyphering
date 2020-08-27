const crypto = require('crypto');

function decryption(body) {
    const {
        encryptedData,
        privateKey,
        passphrase
    } = body;

    var bufferData = Buffer.from(encryptedData, "base64");

    const decryptedData = crypto.privateDecrypt({
        key: privateKey,
        oaepHash: "sha256",
        passphrase: passphrase,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
    }, bufferData);

    return decryptedData.toString("utf8")
}

module.exports = decryption;