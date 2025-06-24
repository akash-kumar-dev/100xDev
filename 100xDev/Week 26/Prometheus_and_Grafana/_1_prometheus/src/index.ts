import express from "express";
import { requestCount } from "./monitoring/requestCount";
// import { middleware } from "./middleware";
import client from "prom-client";
import { activeRequestsMiddleware } from "./monitoring/activeRequests";
import { httpRequestDurationMiddleware } from "./monitoring/requestTime";

const app = express();

app.use(express.json());
// app.use(middleware);
app.use(requestCount);
app.use(activeRequestsMiddleware);
app.use(httpRequestDurationMiddleware)


app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})

app.get("/user", (req, res) => {
    res.send({
        name: "John Doe",
        age: 25,
    });
});

app.post("/user", (req, res) => {
    const user = req.body;
    res.send({
        ...user,
        id: 1,
    });
});

app.listen(3000);