# user-key-crypto

🔐 Simple, secure AES-256-GCM encryption and decryption with a user-defined secret key.

## Installation

```bash
npm install user-key-crypto
```

## Usage

```js
const { encrypt, decrypt } = require('user-key-crypto');

const secret = 'MySecretKey@123';
const originalData = 'Sensitive User Info';

const encrypted = encrypt(originalData, secret);
console.log('Encrypted:', encrypted);

const decrypted = decrypt(encrypted, secret);
console.log('Decrypted:', decrypted);
```

## Features

- AES-256-GCM encryption
- PBKDF2 key derivation
- Random salt, IV, and auth tag
- Stateless utility functions
- Fully error-handled

## License

MIT
