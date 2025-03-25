# Adding a database

There are two approaches to take when you add external services to your backend.

You can

1.  Mock out the external service calls (unit tests).

2.  Start the external services when the tests are running and stop them after the tests end (integration/end to end tests)

*   Add prisma to your codebase

```javascript
npm i prisma
npx prisma init
```

*   Add a basic schema in `schema.prisma`

```javascript
model Sum {
  id          Int @id   @default(autoincrement())
  a           Int
  b           Int
  result      Int
}
```

*   Generate the client (notice we don’t need to migrate since we wont actually need a DB)

```javascript
npx prisma generate
```

*   Create `src/db.ts` which exports the prisma client. This is needed because we will be mocking this file out eventually

```javascript
import { PrismaClient } from "@prisma/client";
export const prismaClient = new PrismaClient();
```

*   Update `src/index.ts` to store the requests in the db

```javascript
import express from "express";
import { z } from "zod";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    await prismaClient.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })

    res.json({
        answer
    })
});

app.get("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        answer
    })
});
```

*   Notice how the tests begin to error out now

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F12f30fc8-4a3a-4992-8c16-19ddb4f619bf%2FScreenshot_2024-05-12_at_1.54.49_PM.png?table=block&id=bc765990-084a-46ca-8816-98c27e8dc460&cache=v2)