# middlewares + Next

Ref - [https://nextjs.org/docs/app/building-your-application/routing/middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

Middleware allows you to run code before a request is completed.

Then, based on the incoming request, you can modify the response by

1.  rewriting

2.  redirecting

3.  modifying the request or response headers

4.  or responding directly.

#### 

[](#61f28cc2f9f14e09bcec862ca2efd30f "Use cases")Use cases

*   Authentication and Authorization: Ensure user identity and check session cookies before granting access to specific pages or API routes.

*   Logging and Analytics: Capture and analyze request data for insights before processing by the page or API.