# Client side code

`Websocket` is a browser API that you can access (very similar to fetch)

Will work in a `raw project` , `React project` and `Next project` (needs to be client side)

*   Create a React project

```javascript
npm create vite@latest
```

*   Create a websocket connection to the server

```javascript
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])

  return (
    <>
      hi there
    </>
  )
}

export default App
```

💡

Can you convert it to a custom hook called `useSocket` ?