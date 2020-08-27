# Cyphering

plug and play cyphering system for Javascript

## Note

This library was developed to make it easy for developer to create public and private key and store it easily. It is also easy to use utility to encrypt or decrypt your message message. My main objective was solve common issues which developer might face for working with `crypto` package. You can save the public key and private key or encrypt or decrypt your data by using this package. 

## Usage

In order to generate public key and private key or encrypt and decrypt a message, please follow below steps:

At the root of your project, do:

```javascript
npm install cyphering  --save
```

Then in your project:

```javascript
const Cyphering = require('cyphering');
```

## Methods

All the methods return promise.

#### Generate Public and Private keys Method:

This functionality is used for generating public and private key. it works Async. The output of this function will be json parameter which is contain your `public key and private key`. Please don't forget to store your `passPhrase` since you need it for decryption process.

###### Function:
```javascript
Cyphering.generatePublicAndPrivateKey(params)
```
###### Input:
```javascript
params: {
    "passphrase": "string"
}
````
###### Output:
```javascript
{
    "publicKey": "string",
    "privateKey": "string"
}
````

#### Encryption Method:
This function is used to encrypt your 'data' by using a `public key`.  The output of this function is `encryptedData`.

###### Function:
```javascript
Cyphering.encryption(params)
```
###### Input:
```javascript
params: {
    "data": "string",
    "publicKey": "string"
}
````
###### Output:
```javascript
    "encryptedData": "string"
````
#### Decryption Method:
This function is used to decrypt the encrypted data. You need to provide your `encrypted data`, `private key` and `passPhrase` to decrypt the data. The output of this function will be `decryptedData`. 

###### Function:
```
Cyphering.decryption(params)
```
###### Input:
```javascript
params: {
    "encryptedData": "string",
    "privateKey": "string",
    "passphrase": "string"
}
````
###### Output:
```javascript
    "decryptedData": "string"    
````


### Error codes
The error codes are the standard error codes as returned by crypto library.

### Example

```javascript
const Cyphering = require('cyphering');

async function test() {

    try {
        const passphrase = "my passphrase";

        let params = {
            passphrase
        };

        const keys = await Cyphering.generatePublicAndPrivateKey(params);

        let data = "I love to play xbox.";

        let encryptParams = {
            data: data,
            publicKey: keys.publicKey
        }

        const encryptedData = Cyphering.encryption(encryptParams);

        let decryptParams = {
            encryptedData: encryptedData,
            privateKey: keys.privateKey,
            passphrase: passphrase
        };

        const decryptedData = Cyphering.decryption(decryptParams);

        console.log('Your initial message was: ' + data);
        console.log('Your encrypted message was: ' + encryptedData);
        console.log('Your decrypted message is: ' + decryptedData);
    } catch (err) {
        console.log(err);
    }
}

test();


```