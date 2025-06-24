# Adding raw metrics

#### 

[](#9dd635706501456e96d0eeebf10f241d "Lets build an express app that exports metrics")Lets build an express app that exports metrics

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5bafa676-ae1f-438a-8837-258f198e178e%2FScreenshot_2024-05-26_at_6.39.29_PM.png?table=block&id=05820985-c7c7-4f27-b398-31a958ea582d&cache=v2)

Let’s add some `hand made` metrics to an express app

*   Initialize a TS project

```javascript
npm init -y
npx tsc --init
```

*   Replace rootDir and outDir

```javascript
"rootDir": "./src",
"outDir": "./dist",
```

*   Add dependencies

```javascript
npm install express @types/express
```

*   Create `src/index.ts`

```javascript
import express from "express";

const app = express();

app.use(express.json());

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
```

*   Create a middleware that tracks the total time to handle a request (`middleware.ts`)

```javascript
import { NextFunction, Request, Response } from "express";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();
    next();
    const endTime = Date.now();
    console.log(`Request took ${endTime - startTime}ms`);
}
```

*   Add the middleware globally

```javascript
app.use(middleware);
```

*   Update package.json to add scripts

```javascript
"scripts": {
    "build": "tsc -b",
    "start": "npm run build && node dist/index.js"
},
```

*   Run the application

```javascript
npm run start
```

*   Try to send a request and notice the logs

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F0665cc8d-824f-48a0-9a6d-b58d884dc44a%2FScreenshot_2024-05-26_at_12.58.00_PM.png?table=block&id=9911d44c-f9b5-443b-bae6-b021f9a1c841&cache=v2)