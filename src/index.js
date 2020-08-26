const cypheringMethods = require('./methods');

class CypheringWrapper {
    constructor() {}

    generatePublicAndPrivateKey(body) {
        return cypheringMethods.generatePublicNPrivateKeys(body);
    }

    encryption(body) {
        return cypheringMethods.encryption(body);
    }

    decryption(body) {
        return cypheringMethods.decryption(body);
    }
}