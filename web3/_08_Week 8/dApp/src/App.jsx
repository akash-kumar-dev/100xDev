import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import './App.css'
import { RequestAirdrop } from './RequestAirdrop';
import { ShowBalance } from './ShowBalance';
import { SendTokens } from './senToken';
import { SignMessage } from './SignMessage';

function App() {

  return (
     <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div>
                      <div style={{display: "flex", justifyContent: "space-between"}}>
                        <WalletMultiButton />
                        <WalletDisconnectButton />
                      </div>
                      <div>
                        <RequestAirdrop />
                      </div>
                      <div>
                        <ShowBalance />
                      </div>
                      <div>
                        <SendTokens />
                      </div>
                      <div>
                        <SignMessage />
                      </div>
                    </div>
                </WalletModalProvider>
            </WalletProvider>
      </ConnectionProvider>
  )
}

export default App
