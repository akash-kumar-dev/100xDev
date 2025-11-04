import { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "@tanstack/react-query";
import './App.css'

const queryClient = new QueryClient()

async function getter() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const response = await data.json();
  return response;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

function Todos() {
  const queryClient = useQueryClient()

  const query = useQuery({ queryKey: ['todos'], queryFn: getter })

  if (query.isError) return <div>Error while fetching</div>
  
  if (query.isLoading) return <div>Loading...</div>

  return (
    <div>
      <ul>{query.data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
    </div>
  )
}


export default App
