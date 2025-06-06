# Add the solana wallet adapter

Ref - [https://github.com/anza-xyz/wallet-adapter/blob/master/APP.md](https://github.com/anza-xyz/wallet-adapter/blob/master/APP.md)

*   Install the wallet adapter dependencies

```javascript
npm install @solana/wallet-adapter-base \
    @solana/wallet-adapter-react \
    @solana/wallet-adapter-react-ui \
    @solana/wallet-adapter-wallets \
    @solana/web3.js 
```

*   Add the new set of imports to `App.jsx`

```javascript
// wallet adapter imports
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
```

*   Create a topbar, wrap the `TokenLaunchpad` component inside the wallet adapter providers

```javascript

function App() {
  return (
    <div>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 20
              }}>
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <TokenLaunchpad></TokenLaunchpad>
            </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}
```

Final code - [https://github.com/100xdevs-cohort-3/week-6-web3-token-launchpad/blob/main/2-token-launchpad-with-adapter/src/App.jsx](https://github.com/100xdevs-cohort-3/week-6-web3-token-launchpad/blob/main/2-token-launchpad-with-adapter/src/App.jsx)