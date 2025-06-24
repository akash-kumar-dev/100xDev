import client from "prom-client";

export const activeRequestsGauge = new client.Gauge({
    name: 'active_requests',
    help: 'Number of active requests',
    labelNames: ['method', 'route']
});

// @ts-ignore
export const activeRequestsMiddleware = (req, res, next) => {
    activeRequestsGauge.inc({
        method: req.method,
        route: req.route ? req.route.path : req.path
    });

    res.on('finish', () => {
        activeRequestsGauge.dec({
            method: req.method,
            route: req.route ? req.route.path : req.path
        });
    });

    next();
}