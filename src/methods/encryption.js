const crypto = require('crypto');

function encryption(body) {
    const {
        data,
        publicKey
    } = body;

    const encryptedData = crypto.publicEncrypt({
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        },
        Buffer.from(data)
    )

    return {
        "encryptedData": encryptedData.toString("base64")
    };
}

module.exports = encryption;