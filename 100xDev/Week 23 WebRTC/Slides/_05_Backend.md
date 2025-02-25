# Backend

*   Create an empty TS project, add ws to it

```javascript
npm init -y
npx tsc --init
npm install ws @types/ws
```

*   Change rootDir and outDir in tsconfig

```javascript
"rootDir": "./src",
"outDir": "./dist",
```

*   Create a simple websocket server

```javascript
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let senderSocket: null | WebSocket = null;
let receiverSocket: null | WebSocket = null;

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data: any) {
    const message = JSON.parse(data);
    
  });

  ws.send('something');
});
```

*   Try running the server

```javascript
tsc -b
node dist/index.js
```

*   Add message handlers

```javascript
import { WebSocket, WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let senderSocket: null | WebSocket = null;
let receiverSocket: null | WebSocket = null;

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data: any) {
    const message = JSON.parse(data);
    if (message.type === 'sender') {
      senderSocket = ws;
    } else if (message.type === 'receiver') {
      receiverSocket = ws;
    } else if (message.type === 'createOffer') {
      if (ws !== senderSocket) {
        return;
      }
      receiverSocket?.send(JSON.stringify({ type: 'createOffer', sdp: message.sdp }));
    } else if (message.type === 'createAnswer') {
        if (ws !== receiverSocket) {
          return;
        }
        senderSocket?.send(JSON.stringify({ type: 'createAnswer', sdp: message.sdp }));
    } else if (message.type === 'iceCandidate') {
      if (ws === senderSocket) {
        receiverSocket?.send(JSON.stringify({ type: 'iceCandidate', candidate: message.candidate }));
      } else if (ws === receiverSocket) {
        senderSocket?.send(JSON.stringify({ type: 'iceCandidate', candidate: message.candidate }));
      }
    }
  });
});
```

That is all that you need for a simple one way communication b/w two tabs

To have both the sides be able to send each other media, and support multiple rooms, see [https://github.com/hkirat/omegle/](https://github.com/hkirat/omegle/)