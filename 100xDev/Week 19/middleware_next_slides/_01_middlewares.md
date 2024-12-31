# What are middlewares?

Middlewares are code that runs before / after your request handler.

It’s commonly used for things like

1.  Analytics

2.  Authentication

3.  Redirecting the user

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9adbd0b7-0980-4d63-80c4-9988896ab045%2FScreenshot_2024-04-05_at_6.15.17_PM.png?table=block&id=3f0d279c-6882-4348-8b89-12d3e128c979&cache=v2)

Code

```javascript

import express from "express";

const app = express();

let requestCount = 0;

app.use(
  function middleware(req, res, next) {
    requestCount++;
    next()
  }
);

app.get("/", (req, res) => {
  res.send("Hello world");
})

app.get("/requestCount", (req, res) => {
  res.json({
    requestCount
  })
})

app.listen(3000);
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fa94ce3cf-184c-4933-9bac-765cff5e3863%2FScreenshot_2024-04-05_at_7.48.56_PM.png?table=block&id=ea504ff4-0f2a-48d0-ac2c-943f027a1541&cache=v2)

Code

```javascript

import express from "express";
import jwt from "jsonwebtoken";

const app = express();

//@ts-ignore
async function authMiddleware(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "secret");
  if (decoded) {
    next();
  } else {
    res.status(401).send("Unauthorised");
  }
}

app.get("/", authMiddleware, (req, res) => {
  res.send("You are logged in");
})

app.listen(3000);
```