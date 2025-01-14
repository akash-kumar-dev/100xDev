# Why OpenAPI Spec

When you create backend, it’s very hard for other people to know the exact `shape` of your routes

Wouldn’t it be nice if you could describe, in a single file the `shape` of your routes?

For example - [https://sum-server.100xdevs.com/todo?id=1](https://sum-server.100xdevs.com/todo?id=1)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F0439d578-3788-4df5-963d-88ba4c7252c8%2FScreenshot_2024-04-17_at_3.15.02_AM.png?table=block&id=f7bb9024-702b-4c33-a689-43ce1105c204&cache=v2)

If you have this single long file that lists all your routes, you could

1.  Auto generate documentation pages (Ref [https://binance-docs.github.io/apidocs/spot/en/#query-current-order-count-usage-trade](https://binance-docs.github.io/apidocs/spot/en/#query-current-order-count-usage-trade))

2.  Auto generate `clients` in various languages (Java, JS, Go…)

3.  Let the world look at your API routes shape without actually opening your code

4.  Let AIs know how to `hit` your APIs in a single file, without sharing your code with the AI

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7c3cb9aa-b834-40be-bb89-08ed894839c8%2F1_GEH8tFwJuQWfB2o_N5xtVw.png?table=block&id=6cc8c4f3-dbbd-48de-9715-fb1681ecaae4&cache=v2)