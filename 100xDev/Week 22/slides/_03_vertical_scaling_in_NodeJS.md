# Implementing horizontal scaling in Node.js project

You can start multiple node projects then? If there are 8 cores, then just start 8 projects?

```javascript
node index.js
node index.js
node index.js
node index.js
node index.js
node index.js
node index.js
node index.js
```

This, ofcourse has a lot of problems

1.  Just ugly to do this, keep track of the processes that are up and down

2.  Processes will have port conflicts, you’ll have to run each process on a saparate port

This is where the `cluster module` comes into the picture

```javascript
import express from "express";
import cluster from "cluster";
import os from "os";

const totalCPUs = os.cpus().length;

const port = 3000;

if (cluster.isPrimary) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  const app = express();
  console.log(`Worker ${process.pid} started`);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/api/:n", function (req, res) {
    let n = parseInt(req.params.n);
    let count = 0;

    if (n > 5000000000) n = 5000000000;

    for (let i = 0; i <= n; i++) {
      count += i;
    }

    res.send(`Final count is ${count} ${process.pid}`);
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}
```

Notice different pids in different devices

Browser

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd89c4d68-ccd0-4d13-9b49-fe0bfc355541%2FScreenshot_2024-04-27_at_9.27.51_AM.png?table=block&id=8fcc50be-8e7f-467e-b565-63a48d9f63e6&cache=v2)

Postman

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F18d1a288-7b10-4d31-a141-589970f61f03%2FScreenshot_2024-04-27_at_9.27.54_AM.png?table=block&id=58a5e4e7-cd6b-4e2e-b138-f171db693a4a&cache=v2)

Curl

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F233adae1-92b1-4593-ab17-33d3372a3b6f%2FScreenshot_2024-04-27_at_9.28.01_AM.png?table=block&id=2cb33d8a-5370-493e-b248-eb8e3acbca90&cache=v2)

💡

Try to figure out why there is `stickiness` in the browser. Why the request from the same browser goes to the same pid