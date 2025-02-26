# What is RPC

RPC stands for `remote procedure call` . As the name suggests, it lets you call a function in on a different process/server/backend and get back a response from it.

### 

[](#a01646367ea84a42a1766eba68b7ca0f "Why remote procedure call?")Why remote procedure call?

This is how we’ve made our backends talk to each other until now.

We send out an `http request` , get back a response.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F74843098-776a-4f87-adc4-24e73d312cd9%2FScreenshot_2024-05-11_at_11.43.19_AM.png?table=block&id=ec3d9e27-07fd-4348-a06d-8c935a303bff&cache=v2)

There are a few flaws in this approach

1.  No types. You don’t know what is the shape of the data you will get back. You might be able to share types between 2 Node.js backends somehow, but if the other backend is in `Rust`, then you cant get back the types from it

2.  We use JSON to `serialize` and `deserialize` data

3.  We have to know what `axios` is , or what `fetch` is . We need to understand HTTP and how to call it

4.  Not language agnostic at all. We have to use a different library in Java, go, rust to send an http request to the server

Let’s try doing a quick HTTP request to [https://sum-server.100xdevs.com/todos](https://sum-server.100xdevs.com/todos) from a Node.js server

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F874ae641-5f13-4cd3-a423-e6770810ebda%2FScreenshot_2024-05-11_at_11.56.08_AM.png?table=block&id=979ad3b5-ae5b-43e8-a6ad-1398906ad1bb&cache=v2)