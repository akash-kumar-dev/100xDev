import { useState } from 'react'
import './App.css'
import { http, createConfig, WagmiProvider, useConnect, useAccount, useBalance } from 'wagmi'
import { mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const projectId = '<WALLETCONNECT_PROJECT_ID>'

const queryClient = new QueryClient()

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
  },
})


function App() {
  const [count, setCount] = useState(0)

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        < WalletOptions />
        <MyAddress />
        <ETHSend />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

function MyAddress() {
  const { address } = useAccount();
  const balance = useBalance({ address: address });
  return <div>Address: {address} <br /> Balance: {balance.data?.formatted} {balance.data?.symbol}</div>;
}

function ETHSend() {
  return <div>
    <input type="text"></input>
    <button>Send</button>
  </div>
}

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}

export default App
