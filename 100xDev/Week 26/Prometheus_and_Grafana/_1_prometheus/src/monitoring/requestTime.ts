import client from 'prom-client';

export const httpRequestDurationMicroseconds = new client.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.05, 0.1, 0.4, 0.8, 1, 5, 10]
});

// @ts-ignore
export const httpRequestDurationMiddleware = (req, res, next) => {
    const startTime = Date.now();

    res.on("finish", () => {
        const endTime = Date.now();
        httpRequestDurationMicroseconds.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            code: res.statusCode
        }, endTime - startTime);
    });

    next();
}