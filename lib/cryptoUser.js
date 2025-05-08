const crypto = require('crypto');

const config = {
  algorithm: 'aes-256-gcm',
  keyLength: 32,
  ivLength: 12,
  saltLength: 16,
  tagLength: 16,
  iterations: 100_000,
  digest: 'sha256',
};

function deriveKey(password, salt) {
  if (typeof password !== 'string') throw new Error('Secret must be a string');
  return crypto.pbkdf2Sync(password, salt, config.iterations, config.keyLength, config.digest);
}

function encrypt(data, secret) {
  if (typeof data !== 'string') throw new Error('Data must be a string');
  if (typeof secret !== 'string') throw new Error('Secret must be a string');

  const salt = crypto.randomBytes(config.saltLength);
  const iv = crypto.randomBytes(config.ivLength);
  const key = deriveKey(secret, salt);

  const cipher = crypto.createCipheriv(config.algorithm, key, iv);
  const encrypted = Buffer.concat([cipher.update(data, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();

  const payload = Buffer.concat([salt, iv, tag, encrypted]);

  return payload.toString('base64');
}

function decrypt(encryptedData, secret) {
  if (typeof encryptedData !== 'string') throw new Error('Encrypted data must be a string');
  if (typeof secret !== 'string') throw new Error('Secret must be a string');

  const data = Buffer.from(encryptedData, 'base64');
  const { saltLength, ivLength, tagLength } = config;

  if (data.length < saltLength + ivLength + tagLength) {
    throw new Error('Invalid encrypted payload');
  }

  const salt = data.slice(0, saltLength);
  const iv = data.slice(saltLength, saltLength + ivLength);
  const tag = data.slice(saltLength + ivLength, saltLength + ivLength + tagLength);
  const encrypted = data.slice(saltLength + ivLength + tagLength);

  const key = deriveKey(secret, salt);
  const decipher = crypto.createDecipheriv(config.algorithm, key, iv);
  decipher.setAuthTag(tag);

  try {
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return decrypted.toString('utf8');
  } catch {
    throw new Error('Failed to decrypt. Possibly wrong password or corrupted data.');
  }
}

module.exports = { encrypt, decrypt };
