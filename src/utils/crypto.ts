// const crypto = require('crypto');
const isEmpty = require('lodash/isEmpty');

// const algorithm = 'aes256';
// const secretKey = process.env.CRYPTO_SECRET

// export const encrypt = (text) => {
//     if(isEmpty(text)) {
//         return
//     }
//     let key = crypto.createHash('sha256').update(String(secretKey)).digest('base64').substr(0, 32);
//     let iv = crypto.randomBytes(16);
//     const cipher =  crypto.createCipheriv(algorithm, key, iv);
//     let encrypted = cipher.update(text);
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
//     return iv.toString('hex') + ':' + encrypted.toString('hex');
// };

// export const decrypt = (hash) => {
//     if(isEmpty(hash)) {
//         return
//     }
//     let textParts = hash.split(':');
//     let iv = Buffer.from(textParts.shift(), 'hex');
//     let key = crypto.createHash('sha256').update(String(secretKey)).digest('base64').substr(0, 32);
//     let encryptedText = Buffer.from(textParts.join(':'), 'hex');
//     let decipher = crypto.createDecipheriv(algorithm, key, iv);
//     let decrypted = decipher.update(encryptedText);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
//     return decrypted.toString();
// };

export const base64Encrypt = (text) => {
    if(isEmpty(text)) {
        return
    }
    let buff = new Buffer(text);
    let base64data = buff.toString('base64');
    return base64data
}
export const base64Decrypt = (text) => {
    if(isEmpty(text)) {
        return
    }
    let buff = new Buffer(text, 'base64');
    let res = buff.toString('ascii');

    return res
}