# Creating a web based wallet

**Pre-requisites - React**

Let’s try to create a web based wallet similar to [https://wallet-kosh.vercel.app/](https://wallet-kosh.vercel.app/)

[https://github.com/keshav-exe/projekt-kosh/](https://github.com/keshav-exe/projekt-kosh/)

*   Initialize an empty React Project

```javascript
 npm create vite@latest
```

*   Install dependencies

```javascript
npm install
```

*   Add node-pollyfills

```javascript
npm install vite-plugin-node-polyfills
```

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
})
```

*   Clean up App.jsx

```javascript
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    </>
  )
}

export default App
```

*   Create a mnemonics state variable

```javascript
  const [mnemonic, setMnemonic] = useState("");
```

*   Add a button that lets the user generate a fresh mnemonic phrase. Ref - [https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-9](https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-9)

```javascript
npm install bip39
```

```javascript
import { generateMnemonic } from "bip39";

<button onClick={async function() {
  const mn = await generateMnemonic();
  setMnemonic(mn)
}}>
  Create Seed Phrase
</button>
```

Reference - [https://github.com/hujiulong/web-bip39](https://github.com/hujiulong/web-bip39)

*   Display the `mnemonic` in an input box

```javascript
<input type="text" value={mnemonic}></input>
```

*   Add a `SolanaWallet` component

Ref - [https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-9](https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-9)

```javascript
import { useState } from "react"
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"

export function SolanaWallet({ mnemonic }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);

    return <div>
        <button onClick={function() {
            const seed = mnemonicToSeed(mnemonic);
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);
            setCurrentIndex(currentIndex + 1);
            setPublicKeys([...publicKeys, keypair.publicKey]);
        }}>
            Add wallet
        </button>
        {publicKeys.map(p => <div>
            {p.toBase58()}
        </div>)}
    </div>
}
```

*   Create ETH wallet Ref - [https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-10](https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-10)

```javascript
import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

export const EthWallet = ({mnemonic}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);

    return (
        <div>
            <button onClick={async function() {
                const seed = await mnemonicToSeed(mnemonic);
                const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
                 const hdNode = HDNodeWallet.fromSeed(seed);
                 const child = hdNode.derivePath(derivationPath);
                 const privateKey = child.privateKey;
                 const wallet = new Wallet(privateKey);
                 setCurrentIndex(currentIndex + 1);
                setAddresses([...addresses, wallet.address]);
            }}>
                Add ETH wallet
            </button>

            {addresses.map(p => <div>
                Eth - {p}
            </div>)}
        </div>
    )
}
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb2bad12d-bee5-43bb-8348-fb91cb443cad%2FScreenshot_2024-08-16_at_6.57.01_PM.png?table=block&id=bc185bc2-a158-4c38-a289-f68833f6b944&cache=v2)

### 

[](#17ee8d415b34472c93a8f857eb5da4c3 "Assignment")Assignment

Can you add logic to show the ETH/SOL balances for these accounts?