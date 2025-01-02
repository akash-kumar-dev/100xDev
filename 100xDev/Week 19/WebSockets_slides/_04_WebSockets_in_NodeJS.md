# Websockets in Node.js

There are various libraries that let you create a ws server (similar to how `express` lets you create an HTTP server)

1.  [https://www.npmjs.com/package/websocket](https://www.npmjs.com/package/websocket)

2.  [https://github.com/websockets/ws](https://github.com/websockets/ws)

3.  [https://socket.io/](https://socket.io/)

We’ll be using the `ws` library today.

💡

Problems with [socket.io](http://socket.io) - Even though socket.io is great (it gives you constructs like `rooms` to make the API much cleaner), it’s harder to support multiple platforms in it (Android, IOS, Rust) There are implementations in most platforms but not very up to date [https://socket.io/blog/native-socket-io-and-android/](https://socket.io/blog/native-socket-io-and-android/) [https://github.com/1c3t3a/rust-socketio](https://github.com/1c3t3a/rust-socketio)