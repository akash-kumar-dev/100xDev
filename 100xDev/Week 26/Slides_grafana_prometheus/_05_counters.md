# Counters

Let’s add logic to count the number of requests (throughput) of our application.

*   Install prom-client

```javascript
npm install prom-client
```

*   Create a new `metrics/requestCount.ts` file

```javascript
import { NextFunction, Request, Response } from "express";
import client from "prom-client";

// Create a counter metric
const requestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code']
});

export const requestCountMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();

    res.on('finish', () => {
        const endTime = Date.now();
        console.log(`Request took ${endTime - startTime}ms`);

        // Increment request counter
        requestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode
        });
    });

    next();
};
```

*   Add the middleware to `src/index.ts`

*   Add a `/metrics` endpoint to `src/index.ts`

```javascript
import client from "prom-client";

app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})
```

*   Start the app

```javascript
npm run start
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F135f80dd-4c79-4206-8e55-822fee5e9ba7%2FScreenshot_2024-05-26_at_1.44.36_PM.png?table=block&id=faf5ff90-05e2-4095-ba51-f61693e7f817&cache=v2)