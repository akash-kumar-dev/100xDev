# Talking to redis via Node.js

There are various `clients` that exist that let you talk to `redis` via Node.js

[https://www.npmjs.com/package/redis](https://www.npmjs.com/package/redis)

Let’s initialize a simple Node.js express server that takes a `problem submission` (very similar to leetcode) as input and sends it to the queue

Let’s also create a `worker` service that picks up a problem, waits for 2 seconds and then proceeds to pick the next one

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ffe4355d5-b9ca-4671-8a72-825123f9c124%2FScreenshot_2024-04-07_at_4.39.59_PM.png?table=block&id=97d9f40d-e54f-4a18-b749-539397806a4e&cache=v2)

### 

[](#a6c1e58f3811483ab2f86597d50f10da "Code")Code

*   Create an empty Node.js project

*   Initialize 2 folders inside it

*   express-server
*   worker

*   Initialize an empty Node.js typescript project in both of them

```javascript
npm init -y
npx tsc --init
```

*   Install dependencies in `express-server`

```javascript
npm i express @types/express redis
```

*   Install dependencies in `worker`

```javascript
npm i redis
```

*   Create `index.ts` in `express-server`

```javascript
import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));

app.post("/submit", async (req, res) => {
    const problemId = req.body.problemId;
    const code = req.body.code;
    const language = req.body.language;

    try {
        await client.lPush("problems", JSON.stringify({ code, language, problemId }));
        // Store in the database
        res.status(200).send("Submission received and stored.");
    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to store submission.");
    }
});

async function startServer() {
    try {
        await client.connect();
        console.log("Connected to Redis");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}

startServer();
```

*   Create `index.ts` in worker

```javascript
import { createClient } from "redis";
const client = createClient();

async function processSubmission(submission: string) {
    const { problemId, code, language } = JSON.parse(submission);

    console.log(`Processing submission for problemId ${problemId}...`);
    console.log(`Code: ${code}`);
    console.log(`Language: ${language}`);
    // Here you would add your actual processing logic

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Finished processing submission for problemId ${problemId}.`);
}

async function startWorker() {

    try {
        await client.connect();
        console.log("Worker connected to Redis.");

        // Main loop
        while (true) {
            try {
                const submission = await client.brPop("problems", 0);
                // @ts-ignore
                await processSubmission(submission.element);
            } catch (error) {
                console.error("Error processing submission:", error);
                // Implement your error handling logic here. For example, you might want to push
                // the submission back onto the queue or log the error to a file.
            }
        }
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}

startWorker();
```

💡

Can u figure out why I had to add a `ts-ignore` ? Why is the type of `submission` string?