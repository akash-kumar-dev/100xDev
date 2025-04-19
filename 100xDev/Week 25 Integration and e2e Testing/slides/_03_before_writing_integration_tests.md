# Pre-requisites of writing integration tests

Before we write an integration test, we should write the code that

1.  Brings up the external services

2.  Seeds data in there

3.  Brings down the service when the test suite succeeds/fails

### 

[](#5d1a0fe5a2734d18ae6926b5639edc79 "Express + prisma app")Express + prisma app

*   Initialize project

```javascript
npm init -y
npx tsc --init
```

*   Update rootDir and outDir

```javascript
"rootDir": "src",
"outDir": "dist"
```

*   Install dependencies

```javascript
npm i express @types/express prisma
```

*   Initialize prisma

```javascript
npx prisma init
```

*   Update schema

```javascript

model Request {
  id          Int     @id @default(autoincrement())
  a           Int
  b           Int
  answer      Int
  type        Type
}

enum Type {
  ADD
  MUL
}
```

*   Generate the `prisma client`

```javascript
npx prisma generate
```

*   Add a `db.ts` file to export the prisma client

```javascript
import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();
```

*   Write the express logic (index.ts)

```javascript
import express from "express";
import { prismaClient } from "./db";

export const app = express();

app.use(express.json());

app.post("/sum", async (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    
    if (a > 1000000 || b > 1000000) {
        return res.status(422).json({
            message: "Sorry we dont support big numbers"
        })
    }
    const result = a + b;

    const request = await prismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer: result,
            type: "ADD"
        }
    })
    
    res.json({ answer: result, id: request.id });
})
```

*   Create `bin.ts` to listen on a port while starting the server

```javascript
import { app } from "./index";

app.listen(3000);
```

*   Try running the app locally

```javascript
tsc -b
node dist/bin.js
```

You will notice the request fails because we’ve not yet started the DB locally