# Histograms

Histograms let you store data in various buckets in a `cumulative` fashion

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F39db1b5d-efc6-4d2f-8dcb-42cdaccd19ae%2FScreenshot_2024-05-26_at_6.44.09_PM.png?table=block&id=ef761049-7b31-4193-ae88-76bd58a5782a&cache=v2)

*   Add `metrics/requestCount.ts`

```javascript
import client from "prom-client";

export const httpRequestDurationMicroseconds = new client.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000] // Define your own buckets here
});
```

💡

Buckets here represent the `key points` you want to measure in your app. How many people had request handled in 0.1ms, 5ms, 15ms … This is because prometheus is not a DB, it just exposes all the metrics on an endpoint. That endpoint cant server all the data, and hence prometheus doesnt store the exact values, but how many requests were less than 0.1, 5, 15 …

*   Update `metrics/index.ts`

```javascript
import { NextFunction, Request, Response } from "express";
import { requestCounter } from "./requestCount";
import { activeRequestsGauge } from "./activeRequests";
import { httpRequestDurationMicroseconds } from "./requestTime";

export const metricsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();
    activeRequestsGauge.inc();

    res.on('finish', function() {
        const endTime = Date.now();
        const duration = endTime - startTime;
    
        // Increment request counter
        requestCounter.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status_code: res.statusCode
        });

        httpRequestDurationMicroseconds.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            code: res.statusCode
        }, duration);

        activeRequestsGauge.dec();
    });
    next();
}
```

*   Go to the metrics endpoint

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9e255e2d-1231-4383-b30f-8752dffb8e2c%2FScreenshot_2024-05-26_at_2.35.31_PM.png?table=block&id=6d931234-49cd-4e72-98c0-2b454fee0cd4&cache=v2)

It says

1.  There were 0 to `/user` requests that were handled in less than 0.1ms

2.  There were 0 to `/user` requests that were handled in less than 5ms

3.  There were 0 to `/user` requests that were handled in less than 15ms

4.  There were 0 to `/user` requests that were handled in less than 50ms

5.  There were 0 to `/user` requests that were handled in less than 100ms

6.  There were 0 to `/user` requests that were handled in less than 500ms

7.  There were 0 to `/user` requests that were handled in less than 1000ms

8.  There were 1 to `/user` requests that were handled in less than 3000ms

9.  There were 1 to `/user` requests that were handled in less than 5000ms

As you can see, this is cumulative.

Number of requests being handled in less than 5000ms = Number of requests being handled in less than 3000ms + Number of requests that took between 3000-5000ms