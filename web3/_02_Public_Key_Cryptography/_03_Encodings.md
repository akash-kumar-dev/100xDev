# Encodings

Bytes are cool but highly unreadable. Imagine telling someone

```javascript
Hey, my name is 00101011101010101020
```

It’s easier to `encode` data so it is more `human readable` . Some common encodings include -

1.  Ascii

2.  Hex

3.  Base64

4.  Base58

### 

[](#2efdced305934f4ea98c57acc27e0ae1 "Ascii")Ascii

`1 character = 7 bits`

Every byte corresponds to a `text` on the `computer` . Here is a complete list - [https://www.w3schools.com/charsets/ref\_html\_ascii.asp#:~:text=The ASCII Character Set&text=ASCII is a 7-bit,are all based on ASCII](https://www.w3schools.com/charsets/ref_html_ascii.asp#:~:text=The%20ASCII%20Character%20Set&text=ASCII%20is%20a%207%2Dbit,are%20all%20based%20on%20ASCII).

Bytes to Ascii

```javascript
function bytesToAscii(byteArray) {
  return byteArray.map(byte => String.fromCharCode(byte)).join('');
}

// Example usage:
const bytes = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
const asciiString = bytesToAscii(bytes);
console.log(asciiString); // Output: "Hello"
```

Ascii to bytes

```javascript
function asciiToBytes(asciiString) {
  const byteArray = [];
  for (let i = 0; i < asciiString.length; i++) {
    byteArray.push(asciiString.charCodeAt(i));
  }
  return byteArray;
}

// Example usage:
const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log(byteArray); // Output: [72, 101, 108, 108, 111]
```

UInt8Array to ascii

```javascript
function bytesToAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}

// Example usage:
const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const asciiString = bytesToAscii(bytes);
console.log(asciiString); // Output: "Hello"
```
Ascii to UInt8Array

```javascript
function asciiToBytes(asciiString) {
  return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

// Example usage:
const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log(byteArray); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F08f0bab8-c22d-4c46-87b5-f59f0d685adc%2FScreenshot_2024-08-09_at_7.18.14_PM.png?table=block&id=26866964-c474-44e5-86c9-5e4668a31c95&cache=v2)

### 

[](#3a4c30ca5b6447898b637e5afafa3c63 "Hex")Hex

`1 character = 4 bits`

A single hex character can be any of the 16 possible values: `0-9` and `A-F`.

Array to hex

```javascript
function arrayToHex(byteArray) {
  let hexString = '';
  for (let i = 0; i < byteArray.length; i++) {
    hexString += byteArray[i].toString(16).padStart(2, '0');
  }
  return hexString;
}

// Example usage:
const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const hexString = arrayToHex(byteArray);
console.log(hexString); // Output: "48656c6c6f"
```
Hex to array

```javascript
function hexToArray(hexString) {
  const byteArray = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < byteArray.length; i++) {
    byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
  }
  return byteArray;
}

// Example usage:
const hex = "48656c6c6f";
const byteArrayFromHex = hexToArray(hex);
console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
```

Ref - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F14c95ab8-cd0a-4fd3-b611-77eb5d08187a%2FScreenshot_2024-08-09_at_7.20.56_PM.png?table=block&id=13360943-a15a-4eb3-ae6d-27c2fd96778e&cache=v2)

### 

[](#b18ea64f53a1463e81bfc2df24868de2 "Base64")Base64

`1 character = 6 bits`

Base64 encoding uses 64 different characters (`A-Z`, `a-z`, `0-9`, `+`, `/`), which means each character can represent one of 64 possible values.

[https://www.base64encode.org/](https://www.base64encode.org/)

[https://www.base64decode.org/](https://www.base64decode.org/)

Encode

```javascript
const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);
```

### 

[](#0670d754530b4b8e88d7016c4f3ac80a "Base58")Base58

It is similar to Base64 but uses a different set of characters to avoid visually similar characters and to make the encoded output more user-friendly

Base58 uses 58 different characters:

*   Uppercase letters: `A-Z` (excluding `I` and `O`)

*   Lowercase letters: `a-z` (excluding `l`)

*   Numbers: `1-9` (excluding `0`)

*   `+` , `/`

Encode

```javascript
const bs58 = require('bs58');

function uint8ArrayToBase58(uint8Array) {
  return bs58.encode(uint8Array);
}

// Example usage:
const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String); // Output: Base58 encoded string
```
Decode

```javascript
const bs58 = require('bs58');

function base58ToUint8Array(base58String) {
  return bs58.decode(base58String);
}

// Example usage:
const base58 = base58String; // Use the previously encoded Base58 string
const byteArrayFromBase58 = base58ToUint8Array(base58);
console.log(byteArrayFromBase58); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
```

### 

[](#db69ea156c7f48eca2b0fb6d5c219929 "Ascii vs UTF-8")Ascii vs UTF-8

*   ASCII uses a 7-bit encoding scheme.

*   UTF-8 uses 1 to 4 bytes to encode each character.

[https://www.fileformat.info/info/charset/UTF-8/list.htm](https://www.fileformat.info/info/charset/UTF-8/list.htm)