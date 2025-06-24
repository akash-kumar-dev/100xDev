# Adding prometheus as a source

*   Create a connection

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F676ba9f1-45f3-4545-8b61-1033fe2c2978%2FScreenshot_2024-05-26_at_4.22.13_PM.png?table=block&id=42d27185-1481-47e6-8166-13104bce82e4&cache=v2)

*   Source URL

```javascript
http://prometheus:9090
```

### 

[](#893918a3fce944688fd75deb21b0b4b8 "Assignment")Assignment

Try building a dashboard that has

1.  Total number of requests to `/metrics` endpoint

2.  Number of http requests to the `/metrics` endpoint per second

3.  Total number of requests to the `/user` endpoint

4.  Number of http request to the `/user` endpoint per second

5.  A gauge that lets you see the current active requests

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb4649a9c-45a3-421f-9088-d38945f1c3e9%2FScreenshot_2024-05-26_at_5.38.00_PM.png?table=block&id=75513fe0-0f42-468b-9dc7-a9abf88dd109&cache=v2)