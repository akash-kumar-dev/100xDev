# Example in express (Backend)

1.  Initialize an empty TS project

```javascript
npm init -y
npx tsc --init
```

1.  Update rootDir and outDir

```javascript
"roodDir": "./src"
"outDir": "./dist"
```

1.  Add required libraries

```javascript
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";
```

1.  Initialize express app, add middlewares

```javascript
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));
```

1.  Add a dummy signin endpoint

```javascript
app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // do db validations, fetch id of user from db
    const token = jwt.sign({
        id: 1
    }, JWT_SECRET);
    res.cookie("token", token);
    res.send("Logged in!");
});
```

1.  Add a protected backend route

```javascript
app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    // Get email of the user from the database
    res.send({
        userId: decoded.id
    })
});
```

1.  Add a logout route

```javascript

app.post("/logout", (req, res) => {
    res.cookie("token", "ads");
    res.json({
        message: "Logged out!"
    })
});
```

1.  Listen on port 3000

```javascript

app.listen(3000);
```

Code - [https://github.com/100xdevs-cohort-2/week-16-auth-1](https://github.com/100xdevs-cohort-2/week-16-auth-1)