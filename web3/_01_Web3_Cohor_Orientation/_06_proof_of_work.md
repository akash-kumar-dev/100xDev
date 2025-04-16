# Intro to Proof of work

### 

[](#00cf923aa3d5462192fe6c1b6a8947e8 "Assignment #1")Assignment #1

What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with `00000` . **How will you do it?**

**A: You will have to brute force until you find a value that starts with** `**00000**`

Node.js code

```javascript
const crypto = require('crypto');

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2817234a-38f0-41af-ac15-10b70e35c22d%2FScreenshot_2024-08-02_at_6.46.38_PM.png?table=block&id=61cec550-246c-4038-8f1b-66940ab97d65&cache=v2)

#### 

[](#69195444f6eb4d4e944d0cfde2fb5c97 "Assignment #2")Assignment #2

What if I ask you that the `input string` should start with `100xdevs` ? How would the code change?

Node.js code

```javascript
const crypto = require('crypto');

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = "100xdevs" + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F88c8e880-b192-4d58-be41-50808d1c289b%2FScreenshot_2024-08-02_at_6.45.46_PM.png?table=block&id=20d042c9-4076-4fb4-869e-0c96ae71e775&cache=v2)

#### 

[](#faed0241fb72432bbc703c433c3553c0 "Assignment #3")Assignment #3

What if I ask you to `find` a nonce for the following input -

```javascript
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
```

Node.js code

```javascript
const crypto = require('crypto');

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
` + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3205ae1c-77d2-4045-8158-4716d4c813f1%2FScreenshot_2024-08-02_at_6.52.16_PM.png?table=block&id=5e5ad05c-def1-49a9-9b19-b94efda67b34&cache=v2)

#### 

[](#658946a67fb544e4adba4e9ab9bd05f5 "Assignment #4")Assignment #4

Lets explore [https://andersbrownworth.com/blockchain/](https://andersbrownworth.com/blockchain/)