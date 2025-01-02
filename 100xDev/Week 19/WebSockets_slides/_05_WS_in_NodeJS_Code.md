# Ws in Node.js (Code)

*   Initialize an empty Node.js project

```bash
npm init -y
```

*   Add tsconfig to it

```bash
npx tsc --init
```

*   Update tsconfig

```javascript
"rootDir": "./src",
"outDir": "./dist",
```

*   Install ws

```bash
npm i ws @types/ws
```

#### 

[](#e469277eba204e569ac2882a5ca9d630 "Code using http library")Code using http library

```javascript
import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send('Hello! Message From Server!!');
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});
```

#### 

[](#53f34f6ba73347ebafbcff743d80de6f "Code using express")Code using express

```bash
npm install express @types/express
```

```javascript
import express from 'express'
import { WebSocketServer } from 'ws'

const app = express()
const httpServer = app.listen(8080)

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send('Hello! Message From Server!!');
});
```