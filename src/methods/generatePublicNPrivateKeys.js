const crypto = require('crypto');

async function generatePublicNPrivateKeys(body) {
  const { passphrase } = body;
  
  return new Promise((resolve, reject) => {
    const keysOptions = {
      'modulusLength': 4096,
      'publicKeyEncoding': {
        'type': 'spki',
        'format': 'pem',
      },
      'privateKeyEncoding': {
        'type': 'pkcs8',
        'format': 'pem',
        'cipher': 'aes-256-cbc',
        'passphrase': passphrase
      }
    };

    let process = (err, publicKey, privateKey) => {
      if (err) {
        reject(err);
      } else {
        let keys = {
          publicKey,
          privateKey
        };
        resolve(keys);
      }
    }

    crypto.generateKeyPair('rsa', keysOptions, process);
  });
}


module.exports = generatePublicNPrivateKeys;