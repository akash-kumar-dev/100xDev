# RPC, JSON-RPC

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F81545c96-e973-4e37-b275-4bbbb5a7aaa2%2FScreenshot_2024-08-16_at_3.45.25_PM.png?table=block&id=288e18a7-7d01-405a-8f9a-8cea78402d2b&cache=v2)

JSON-RPC is a remote procedure call (RPC) protocol encoded in JSON (JavaScript Object Notation). It allows for communication between a client and a server over a network. JSON-RPC enables a client to invoke methods on a server and receive responses, similar to traditional RPC protocols but using JSON for data formatting.

As a user, you interact with the blockchain for two purposes -

1.  To send a `transction`

2.  To fetch some details from the blockchain (balances etc)

In both of these, the way to interact with the blockchain is using JSON-RPC

JSON RPC Spec - [https://www.jsonrpc.org/specification](https://www.jsonrpc.org/specification)

💡

There are other ways to do RPC’s like GRPC, TRPC