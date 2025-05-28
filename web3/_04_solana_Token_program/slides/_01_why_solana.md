# Why solana?

Until now, we’ve gone through the following -

1.  What are blockchains, how do they work under the hood

2.  Public and Private keys, how you can use them to `sign` transactions that miners use to `verify` and credit/debit balances

In today’s class, we’ll understand about one of the biggest use-case that blockchains like Solana/ETH solve for - Programs/Smart contracts.

#### 

[](#d5c8ed98374d4f258acb4e4228214c58 "Programs/Smart contracts")Programs/Smart contracts

ETH was one of the first blockchains to introduce the `concept` of decentralized `state` / `programs`. These are popularly known as `smart contracts` on the ETH blockchain.

Here is a simple ETH smart contract

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint public count;

    // Constructor to initialize count
    constructor() {
        count = 0;
    }

    // Function to increment the count
    function increment() public {
        count += 1;
    }

    // Function to decrement the count
    function decrement() public {
        require(count > 0, "Count cannot be negative");
        count -= 1;
    }
    
    // Function to get the current count
    function getCount() public view returns (uint) {
        return count;
    }
}
```
Here is a simple Node.js HTTP server that does something similar

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize count
let count = 0;

// Route to increment the count
app.post('/increment', (req, res) => {
  count += 1;
  res.json({ count });
});

// Route to decrement the count
app.post('/decrement', (req, res) => {
  if (count > 0) {
    count -= 1;
    res.json({ count });
  } else {
    res.status(400).json({ error: 'Count cannot be negative' });
  }
});

// Route to get the current count
app.get('/count', (req, res) => {
  res.json({ count });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

HTTP Servers are deployed on cloud providers like `GCP, Azure`

Smart contracts/programs are deployed on the `blockchain`

The way solana programs work is significantly different from other blockchains. Lets understand how.