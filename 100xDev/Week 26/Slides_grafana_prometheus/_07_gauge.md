# Gauge

Lets add a gauge metric to our app

*   Create `metrics/activeRequests.ts` , export a `Gauge` from it

```javascript
import client from "prom-client";

export const activeRequestsGauge = new client.Gauge({
    name: 'active_requests',
    help: 'Number of active requests'
});
```

*   Import it and update `metrics/index.ts`

```javascript
import { NextFunction, Request, Response } from "express";
import { requestCounter } from "./requestCount";
import { activeRequestsGauge } from "./activeRequests";

export const cleanupMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();
    activeRequestsGauge.inc();

    res.on('finish', function() {
        const endTime = Date.now();
        console.log(`Request took ${endTime - startTime}ms`);
        
        requestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode
        });
        activeRequestsGauge.dec();
    });
}
```

*   Add an artificial delay to the get endpoint

```javascript
app.get("/user", async (req, res) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    res.send({
        name: "John Doe",
        age: 25,
    });
});
```

*   Hit the `/user` endpoint a few times

*   Check the metrics

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ff5267128-f329-4bd8-b673-3907e41f9cab%2FScreenshot_2024-05-26_at_1.51.32_PM.png?table=block&id=cdf6d1e7-87d1-4d06-b7f3-bb2daf935c38&cache=v2)