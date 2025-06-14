# Hashing vs encryption

### 

[](#f392b9158f6a41f2886bc40e5638d36b "Hashing")Hashing

Hashing is a process of converting data (like a file or a message) into a fixed-size string of characters, which typically appears random.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F0c8b4e60-b0dd-4807-914b-2604bbce3649%2FScreenshot_2024-08-09_at_12.11.24_PM.png?table=block&id=c52d28a7-dfd8-4cbe-96bd-d8271ea90097&cache=v2)

Common hashing algorithms - SHA-256, MD5

### 

[](#4f0872caffe04497868ce4a5e06f0b6a "Encryption")Encryption

Encryption is the process of converting plaintext data into an unreadable format, called ciphertext, using a specific algorithm and a key. The data can be decrypted back to its original form only with the appropriate key.

**Key Characteristics:**

*   **Reversible**: With the correct key, the ciphertext can be decrypted back to plaintext.

*   **Key-dependent**: The security of encryption relies on the secrecy of the key.

*   **Two main types**:

*   **Symmetric encryption**: The same key is used for both encryption and decryption.
*   **Asymmetric encryption**: Different keys are used for encryption (public key) and decryption (private key).

### 

[](#11a356b36b8c4a078035f72ff224358d "Symetric encryption")Symetric encryption

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2d9f7548-8b80-4195-9716-d269f0ebfbad%2FScreenshot_2024-08-09_at_12.13.24_PM.png?table=block&id=349525cd-683a-4e53-879c-ef62423bcf20&cache=v2)

Code

```javascript
const crypto = require('crypto');

// Generate a random encryption key
const key = crypto.randomBytes(32); // 32 bytes = 256 bits
const iv = crypto.randomBytes(16); // Initialization vector (IV)

// Function to encrypt text
function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Function to decrypt text
function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Example usage
const textToEncrypt = 'Hello, World!';
const encryptedText = encrypt(textToEncrypt);
const decryptedText = decrypt(encryptedText);

console.log('Original Text:', textToEncrypt);
console.log('Encrypted Text:', encryptedText);
console.log('Decrypted Text:', decryptedText);
```

### 

[](#8cb2d5bd6f6b4c1d8c9b31e61afc0d2e "Asymetric encryption")Asymetric encryption

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fade1a925-bd4e-4041-9cfb-f5c55a5ac0f9%2FScreenshot_2024-08-09_at_12.22.03_PM.png?table=block&id=a002746e-2534-47f2-8409-8973252ca08e&cache=v2)