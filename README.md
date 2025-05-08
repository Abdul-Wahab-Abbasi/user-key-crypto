# user-key-crypto 🔐

A simple and secure Node.js library to encrypt and decrypt data using **user-defined secret keys**. Perfect for applications where **privacy and user-level encryption** is critical.

## 🚀 Installation

```bash
npm install user-key-crypto
```

## 📦 Usage

```js
const { encrypt, decrypt } = require('user-key-crypto');

// Encrypt and decrypt
const encrypted = encrypt('Secret Info','mySecretKey##45');
console.log('Encrypted:', encrypted);

const decrypted = decrypt(encrypted,'mySecretKey##45');
console.log('Decrypted:', decrypted);
```
## ⚠️ Error Handling

```js
const { encrypt } = require('user-key-crypto');

try {
  const encrypted = encrypt('data',688); // Throws error if key is not string
} catch (err) {
  console.error(err.message); // Secret must be a string
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
