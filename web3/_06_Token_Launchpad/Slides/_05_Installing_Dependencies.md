# Installing dependencies

### 

[](#228ddd6ba9a04a5fa721ca0811a3f3a6 "Adding functionality to create tokens")Adding functionality to create tokens

*   Install dependencies

```javascript
npm install @solana/spl-token @solana/web3.js
```

*   Add polyfills to ensure a few `node apis` are available in the browser

```javascript
npm install --save-dev vite-plugin-node-polyfills
```

*   Add the plugin to your `vite.config.ts` file.

```javascript
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills(),
  ],
})
```

*   Add `onclick` handler in `TokenLaunchpad.jsx`

```javascript

export function TokenLaunchpad() {

    function createToken() {
        const name = document.getElementById('name').value;
        const symbol = document.getElementById('symbol').value;
        const image = document.getElementById('image').value;
        const initialSupply = document.getElementById('initialSupply').value;
    }

    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input className='inputText' type='text' placeholder='Name'></input> <br />
        <input className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button onClick={createToken} className='btn'>Create a token</button>
    </div>
}
```

### 

[](#3927820a5bca449c9a40bc9ae49eea12 "Wallet adapter vs local wallet")Wallet adapter vs local wallet

💡

Do you think we should use the `createMint` function to create the token mint? Like we did here - [https://www.notion.so/Equivalent-code-in-JS-afed3cf599d64ee5bae4cc05a7b9f346](https://www.notion.so/Equivalent-code-in-JS-afed3cf599d64ee5bae4cc05a7b9f346) ?

```javascript
const { createMint } = require('@solana/spl-token');
const mint = await createMint(
        connection,
        payer,
        mintAuthority,
        null,
        6,
        TOKEN_PROGRAM_ID
);
```

Since we want an `end user` to create their own token, pay for gas for creating that token, we need to ask `THEIR WALLET` for approval to create a token. We `CANT` create our own `KeyPair` and create a token using it.