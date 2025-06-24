# Better structure

Before we proceed, lets aggregate all the metric creation and cleanup logic in the same file.

*   Create a new middleware called `metrics/index.ts`

```javascript
import { NextFunction, Request, Response } from "express";
import { requestCounter } from "./requestCount";

export const metricsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();

    res.on('finish', function() {
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
}
```

*   Update the `metrics/requestCount.ts` to export the `requestCounter` and remove the cleanup logic from here

```javascript
import { NextFunction, Request, Response } from "express";
import client from "prom-client";

// Create a counter metric
export const requestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code']
});
```

*   Update `src/index.ts` to use the `metricsMiddleware`

```javascript
import { metricsMiddleware } from "./metrics";
app.use(metricsMiddleware);
```