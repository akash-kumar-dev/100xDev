# Intro to hashing

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe9035230-97ff-47a2-95c2-cb1ae8bd2895%2FScreenshot_2024-08-02_at_6.14.04_PM.png?table=block&id=274b6046-88ae-42fe-b728-8aafc0f523a1&cache=v2)

**Hashing** is a process that transforms input data (of any size) into a fixed-size string of characters.

Hash functions have several important properties:

1.  **Deterministic**: The same input will always produce the same output.

2.  **Fast computation**: The hash value can be quickly computed for any given data.

3.  **Pre-image resistance**: It should be computationally infeasible to reverse the hash function (i.e., find the original input given its hash output).

4.  **Small changes in input produce large changes in output**: Even a tiny change in the input should drastically change the hash output.

5.  **Collision resistance**: It should be computationally infeasible to find two different inputs that produce the same hash output.

### 

[](#f7fabb587b574dac87e8a0700666eef9 "Is this a hashing algorithm?")Is this a hashing algorithm?

What if I try “hashing” a string by increasing each alphabet’s value by one. Do you think this follows all the rules we’ve written above?

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5da1a6d2-5866-40a5-809e-266576024eaf%2FScreenshot_2024-08-02_at_6.23.53_PM.png?table=block&id=a4f5c83c-006e-4046-864f-9ffe4504b44b&cache=v2)

### 

[](#a50be7800e6d4bdc8b511621da9c6a72 "SHA-256")SHA-256

Lets try out a famous hash function, SHA-256 here - [https://emn178.github.io/online-tools/sha256.html](https://emn178.github.io/online-tools/sha256.html)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F07a6da45-5fd8-4ef9-9e8f-c7291edfeeab%2FScreenshot_2024-08-02_at_6.18.42_PM.png?table=block&id=1ffa4d75-2294-4d5f-924b-83148ae88dc6&cache=v2)

#### 

[](#f5b1c8dde9b54eadb7001fd046b3073c "Node.js code for generating SHA-256 ")Node.js code for generating SHA-256

```javascript
const crypto = require('crypto');

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F05fae0f9-a8af-4e8e-b557-d599dedbbb31%2FScreenshot_2024-08-02_at_6.21.25_PM.png?table=block&id=0b8feeb0-1a7b-4a91-8b0a-4d1135976db4&cache=v2)