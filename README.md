# Cyphering

plug and play cyphering system for Javascript

## Note

This library was developed to make it easy for developer to create public and private key and store it easily. I tried to make it easy for developer to encrypt or decrypt a message.

## Usage

In order to generate public key and private key or encrypt and decrypt a message, please follow below steps:

At the root of your project, do:

```
npm install cyphering  --save
```

Then in your project:

```
const Cyphering = require('cyphering);
```

## Methods

All the methods return promise.

#### Generate Public and Private keys Method:

This functionality is used for generating public and private key. The output of this function will be json parameter which is contain your `public and private key`. Please don't forget to store your `passPhrase` since you need it for decryption process.

###### Function:
```
Cyphering.generatePublicAndPrivateKey(params)
```
###### Input:
```
params: {
    "passphrase": "string"
}
````
###### Output:
```
{
    "publicKey": "string",
    "privateKey": "string"
}
````

#### Encryption Method:
This function is used to encrypt your 'data' by using a `public key`.  The output of this function is `encryptedData`.

###### Function:
```
Cyphering.encryption(params)
```
###### Input:
```
params: {
    "data": "string",
    "publicKey": "string"
}
````
###### Output:
```
{
    "encryptedData": "string"
}
````
#### Decryption Method:
This function is used to decrypt the encrypted data. You need to provide your `encrypted data`, `private key` and `passPhrase` to decrypt the data. The output of this function will be `decryptedData`. 

###### Function:
```
Cyphering.decryption(params)
```
###### Input:
```
params: {
    "encryptedData": "string",
    "privateKey": "string",
    "passphrase": "string"
}
````
###### Output:
```
{
    "decryptedData": "string"    
}
````


### Error codes
The error codes are the standard error codes as returned by crypto library.