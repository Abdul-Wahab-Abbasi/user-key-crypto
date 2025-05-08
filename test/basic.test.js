const { encrypt, decrypt } = require('../index');

const secret = 'testKey';
const message = 'Hello World';

const enc = encrypt(message, secret);
const dec = decrypt(enc, secret);

console.assert(dec === message, 'Decryption failed');
