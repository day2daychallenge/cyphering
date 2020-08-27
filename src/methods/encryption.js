const crypto = require('crypto');

function encryption(body) {
    const {
        data,
        publicKey
    } = body;

    var bufferData = new Buffer(data);

    const encryptedData = crypto.publicEncrypt({
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        },
        bufferData
    )

    return encryptedData.toString("base64");
}

module.exports = encryption;