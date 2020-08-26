const cypheringMethods = require('./src/methods');

class CypheringWrapper {
    constructor() {}

    generatePublicAndPrivateKey() {
        return cypheringMethods.generatePublicNPrivateKeys(body);
    }

}