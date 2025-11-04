# TanStack, Viem, Wagmi

### TanStack Query

Ref - [https://tanstack.com/query/v5/docs/framework/react/overview](https://tanstack.com/query/v5/docs/framework/react/overview)

![TanStack Query Screenshot](https://prod-files-secure.s3.us-west-2.amazonaws.com/085e8ad8-528e-47d7-8922-a23dc4016453/125987c9-ac60-4926-969c-0a4831c77eeb/Screenshot_2024-10-18_at_2.02.21_PM.png)

- Initialise a React project:
  ```bash
  npm create vite@latest
    ````

* Install TanStack Query:

  ```bash
  npm i @tanstack/react-query
  ```

* Create a fetch function that gets some data:

  ```js
  async function getter() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const response = await data.json();
    return response;
  }
  ```

* Initialise a new `queryClient`:

  ```js
  const queryClient = new QueryClient();
  ```

* Wrap your app inside a `QueryClientProvider`:

  ```jsx
  function App() {
    return (
      // Provide the client to your App
      <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider>
    );
  }
  ```

* Define the `Todos` component:

  ```jsx
  function Todos() {
    // Access the client
    const queryClient = useQueryClient();

    // Queries
    const query = useQuery({ queryKey: ['todos'], queryFn: getTodos });

    return (
      <div>
        <ul>
          {query.data?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  ```

---

### Why TanStack?

1. Caching
2. Automatic refreshes
3. Invalidating old states

Try adding a `refreshInterval` to the query:

```js
const query = useQuery({
  queryKey: ['todos'],
  queryFn: getter,
  refetchInterval: 10 * 1000
});
```

Notice that every 10s we send out a request to the backend.

![Refetch Example](https://prod-files-secure.s3.us-west-2.amazonaws.com/085e8ad8-528e-47d7-8922-a23dc4016453/4890a486-6f68-4f9b-8e80-8db883280136/Screenshot_2024-10-18_at_3.43.04_PM.png)

---

### Viem

![Viem Screenshot](https://prod-files-secure.s3.us-west-2.amazonaws.com/085e8ad8-528e-47d7-8922-a23dc4016453/b6a6239a-d946-4738-90e3-304d6db0b181/Screenshot_2024-10-18_at_3.02.14_PM.png)

* Install viem:

  ```bash
  npm install viem
  ```

* Create a public client:

  ```js
  import { createPublicClient, http } from 'viem';
  import { mainnet } from 'viem/chains';

  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });
  ```

* Get the current block number:

  ```js
  const blockNumber = await client.getBlockNumber();
  ```

* Get the balance of an address:

  ```js
  const balance = await client.getBalance({
    address: "0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD",
  });
  console.log(balance);
  ```

