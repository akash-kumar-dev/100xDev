# Hookifying viem

Can you try converting the `getBalance` function into a hook that refreshes every few seconds and gets the latest balance?

```js
import { createPublicClient, http } from 'viem';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query';
import { mainnet } from 'viem/chains';

async function getBalance() {
  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });
  const balance = await client.getBalance({
    address: "0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD",
  });
  return balance.toString();
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}

function Todos() {
  // Queries
  const query = useQuery({
    queryKey: ['balance'],
    queryFn: getBalance,
    refetchInterval: 10 * 1000,
  });

  return <div>Balance: {query.data}</div>;
}

export default App;
```

![](/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F337ac263-36a7-4a85-8389-96dec96d6647%2FScreenshot_2024-10-18_at_4.27.15_PM.png?table=block&id=1237dfd1-0735-80d9-8010-c89723bf33b3&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1420&userId=&cache=v2)