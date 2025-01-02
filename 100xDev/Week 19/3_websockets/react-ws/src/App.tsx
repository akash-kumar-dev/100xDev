import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('Connected to WebSocket server');
      setSocket(socket);
    };
    socket.onmessage = (message) => {
      console.log('Received message from server:', message.data);
      setLatestMessage(message.data);
    }
    
    return () => {
      socket.close();
    };
  }, [])

  if (!socket) {
    return <div>Connecting to socket server</div>;
  }

  return (
    <>
    <input type="text" onChange={(e) => setMessages(e.target.value)} />
    <button onClick={() => socket.send(messages)}>Send message</button>

    {latestMessage}
    </>
  )
}

export default App
