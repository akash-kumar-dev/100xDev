# Some common RPC protocols

### 

[](#4d52bd6d89654b019b34817f38a90c13 "JSON RPC")JSON RPC

Used by solana/eth when talking to the blockchain.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9807a295-edcb-45e4-8757-146601deb873%2FScreenshot_2024-05-11_at_12.16.33_PM.png?table=block&id=a7e1ed8f-33b7-4887-bca5-66f190e4e74b&cache=v2)

#### 

[](#5d0db1216df042cba0296ac1658abec8 "Creating a JSON RPC Server")Creating a JSON RPC Server

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Define a sample method
function add(a, b) {
    return a + b;
}

// Handle JSON-RPC requests
app.post('/rpc', (req, res) => {
    const { jsonrpc, method, params, id } = req.body;

    if (jsonrpc !== '2.0' || !method || !Array.isArray(params)) {
        res.status(400).json({ jsonrpc: '2.0', error: { code: -32600, message: 'Invalid Request' }, id });
        return;
    }

    // Execute the method
    let result;
    switch (method) {
        case 'add':
            result = add(params[0], params[1]);
            break;
        default:
            res.status(404).json({ jsonrpc: '2.0', error: { code: -32601, message: 'Method not found' }, id });
            return;
    }

    // Send back the response
    res.json({ jsonrpc: '2.0', result, id });
});

// Start the server
app.listen(port, () => {
    console.log(`JSON-RPC server listening at http://localhost:${port}`);
});
```

Try hitting the server with the following body

```javascript
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "add",
  "params": [
    1, 2
  ]
}
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fdf44600c-9b97-4d99-9fde-39df430b70f2%2FScreenshot_2024-05-11_at_3.09.17_PM.png?table=block&id=9617e4e4-332b-47e5-89ae-20df58905f22&cache=v2)

### 

[](#a2475158af5b46c69ec9b7bf230c9412 "GRPC")GRPC

gRPC is an open-source remote procedure call (RPC) framework developed by Google. It allows you to define services and messages using Protocol Buffers, a language-agnostic data serialization format, and then generate client and server code in various programming languages

### 

[](#6348230b046c478f99bf74a07398da34 "TRPC")TRPC

tRPC gives u types on the frontend and backend if u have a full stack app in js.

We have a video from cohort 1 on it. Not used too much