# Websockets

WebSockets provide a way to establish a persistent, full-duplex communication channel over a single TCP connection between the client (typically a web browser) and the server.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9542e210-145e-44b7-b58d-bc4cd859da32%2FScreenshot_2024-04-06_at_4.38.37_PM.png?table=block&id=fac06f62-9d69-4d4d-8da8-8a9b9fda43d7&cache=v2)

#### 

[](#61eda1d81720443a96956394c7c20f92 "Use Cases for WebSockets:")**Use Cases for WebSockets:**

*   **Real-Time Applications**: Chat applications, live sports updates, real-time gaming, and any application requiring instant updates can benefit from WebSockets.

*   **Live Feeds**: Financial tickers, news feeds, and social media updates are examples where WebSockets can be used to push live data to users.

*   **Interactive Services**: Collaborative editing tools, live customer support chat, and interactive webinars can use WebSockets to enhance user interactio

Good example - [https://www.binance.com/en/trade/SOL\_USDT?type=spot](https://www.binance.com/en/trade/SOL_USDT?type=spot)

#### 

[](#9b6789854eb644849547e8c849d444e8 "Why not use HTTP/REST? Why do you need ws?")Why not use HTTP/REST? Why do you need ws?

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F337fdfd4-982f-4476-b225-c9b705344a54%2FScreenshot_2024-04-06_at_4.43.39_PM.png?table=block&id=c1b393de-60bc-4c09-8143-ae3d34e240ad&cache=v2)

1.  Network Handshake happens for every request

2.  No way to push server side events (You can use polling but not the best approach)

💡

Leetcode uses polling when you submit a problem

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5fada07d-ef88-4927-b5f0-a3daa52fbc6b%2FScreenshot_2024-04-06_at_4.55.10_PM.png?table=block&id=f3dea888-ab96-4813-9e71-c31bd9979955&cache=v2)