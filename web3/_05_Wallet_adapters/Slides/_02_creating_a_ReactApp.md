# Creating a react app

*   Initialize a react app

```javascript
npm create vite@latest
```

*   Clean up `App.jsx`

```javascript
import './App.css'

function App() {

  return (
    <>
      <div>
        hi there
       </div>
    </>
  )
}

export default App
```

*   Add dependencies

```javascript
npm install @solana/wallet-adapter-base \
    @solana/wallet-adapter-react \
    @solana/wallet-adapter-react-ui \
    @solana/wallet-adapter-wallets \
    @solana/web3.js 
```

*   Clean up css files

```javascript
index.css , App.css
```