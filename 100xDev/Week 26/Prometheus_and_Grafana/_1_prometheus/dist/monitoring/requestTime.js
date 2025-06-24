"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRequestDurationMiddleware = exports.httpRequestDurationMicroseconds = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
exports.httpRequestDurationMicroseconds = new prom_client_1.default.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.05, 0.1, 0.4, 0.8, 1, 5, 10]
});
// @ts-ignore
const httpRequestDurationMiddleware = (req, res, next) => {
    const startTime = Date.now();
    res.on("finish", () => {
        const endTime = Date.now();
        exports.httpRequestDurationMicroseconds.observe({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            code: res.statusCode
        }, endTime - startTime);
    });
    next();
};
exports.httpRequestDurationMiddleware = httpRequestDurationMiddleware;
