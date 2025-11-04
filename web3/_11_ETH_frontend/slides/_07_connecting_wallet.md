Connecting to the wallet
========================

Ref - [https://wagmi.sh/react/guides/connect-wallet](https://wagmi.sh/react/guides/connect-wallet)

- Initialise a react app
    ```
    npm create vite@latest
    ```

- Create a simple component to send ETH to an address

```jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <input type="text"></input>
      <button>Send</button>
    </div>
  )
}

export default App

```

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F83d10417-4e21-43da-be21-7b1e56c61f86%2FScreenshot_2024-10-18_at_1.54.43_PM.png?table=block&id=1237dfd1-0735-8065-a84b-ccf65ba5ff1e&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=770&userId=&cache=v2)

- Add wagmi and other dependencies

    ```
    npm add wagmi viem@2.x @tanstack/react-query
    ```

- Create a `config.ts` file

```JSX
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})

```

- Wrap the app inside the providers

```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/** ... */}
      </QueryClientProvider>
    </WagmiProvider>
  )
}

```

- Create a `WalletOptions` component

```jsx
import * as React from 'react'
import { Connector, useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()
  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ))
}

```

- Render wallet options

```jsx
function App() {
    // 3. Wrap app with Wagmi and React Query context.
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <WalletOptions />
            </QueryClientProvider>
        </WagmiProvider>
    )
}
```

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe2192808-ae88-4171-838a-c99e276c08b2%2FScreenshot_2024-10-18_at_4.34.33_PM.png?table=block&id=1237dfd1-0735-80b6-bc1e-d402d8dca3ab&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1420&userId=&cache=v2)
