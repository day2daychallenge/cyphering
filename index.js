const cypheringMethods = require('./src/methods');

class CypheringWrapper {
    constructor() {}

    generatePublicAndPrivateKey(body) {
        return cypheringMethods.generatePublicNPrivateKeys(body);
    }

}