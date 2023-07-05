import fs from 'fs';
import crypto from 'crypto-js';

const encryptedConfig = fs.readFileSync('../config.encrypted', 'utf8');

const decryptedBytes = crypto.AES.decrypt(encryptedConfig, 'key');
const decryptedConfig = decryptedBytes.toString(crypto.enc.Utf8);

const config = JSON.parse(decryptedConfig);

export default config;