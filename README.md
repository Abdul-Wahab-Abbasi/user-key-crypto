# user-key-crypto 🔐

A simple and secure Node.js library to encrypt and decrypt data using **user-defined secret keys**. Perfect for applications where **privacy and user-level encryption** is critical.

## 🚀 Installation

```bash
npm install user-key-crypto
```

## 📦 Usage

```js
const { setSecretKey, encrypt, decrypt } = require('user-key-crypto');

// Set your user-defined secret key
setSecretKey('mySecretKey##45');

// Encrypt and decrypt
const encrypted = encrypt('Secret Info');
console.log('Encrypted:', encrypted);

const decrypted = decrypt(encrypted);
console.log('Decrypted:', decrypted);
```
## ⚠️ Error Handling

```js
const { setSecretKey, encrypt } = require('user-key-crypto');

try {
  const encrypted = encrypt('data'); // Throws error if key is not set
} catch (err) {
  console.error(err.message); // Secret key not set
}
```
## 🧪 Run Tests

```bash
npm test
```

## ✨ Features

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

## 📄 License

MIT

## 👨‍💻 Author

[Abdul Wahab](https://github.com/Abdul-Wahab-Abbasi) • [LinkedIn](https://linkedin.com/in/web-crafter)
