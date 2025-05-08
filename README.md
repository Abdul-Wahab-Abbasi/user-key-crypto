# user-key-crypto 🔐

A simple and secure Node.js library to encrypt and decrypt data using **user-defined secret keys**. Perfect for applications where **privacy and user-level encryption** is critical.

## 🚀 Installation

```bash
npm install user-key-crypto
```

## 📦 Usage

```js
const UserCrypto = require('user-key-crypto');

const uc = new UserCrypto('mySecretKey##45');

const encrypted = uc.encrypt('Secret Info');
console.log('Encrypted:', encrypted);

const decrypted = uc.decrypt(encrypted);
console.log('Decrypted:', decrypted);
```
## ⚠️ Error Handling

```js
try {
  const uc = new UserCrypto();
} catch (err) {
  console.error(err.message); // Secret key is required
}
```
## 🧪 Run Tests

```bash
npm test
```

## Features

- AES-256-GCM encryption
- PBKDF2 key derivation
- Random salt, IV, and auth tag
- Stateless utility functions
- Fully error-handled

## 🔒 Use Cases

- End-to-end encrypted messaging
- User-level encryption in databases
- Secure configuration handling

## 🛠️ Tech Used

- crypto (Native Node.js)

## License

MIT

## 👨‍💻 Author

[Abdul Wahab](https://github.com/Abdul-Wahab-Abbasi) • [LinkedIn](www.linkedin.com/in/web-crafter)
