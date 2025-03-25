# Deep mocking

Another way to `mock` variables is to let `vitest` figure out the types and mock out all the attributes of the object being mocked.

For example, the `prismaClient` object has a lot of functions -

```javascript
console.log(Object.keys(prismaClient))
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8253ea0c-2b58-428b-9c7b-60d3fc5dddd6%2FScreenshot_2024-05-12_at_2.33.03_PM.png?table=block&id=69943758-2be0-4680-98c4-69d2979022af&cache=v2)

What if we could mock out all these keys in a single function call?

### 

[](#5852976ad4c94f1cbb06e7e2a35a88f0 "Deep mocking")Deep mocking

*   Install vitest-mock-extended

```javascript
npm i -D vitest-mock-extended 
```

*   Create `__mocks__/db.ts`

```javascript
import { PrismaClient } from '@prisma/client'
import { beforeEach } from 'vitest'
import { mockDeep, mockReset } from 'vitest-mock-extended'

export const prismaClient = mockDeep<PrismaClient>()
```

*   Remove the `mock` we added in `index.test.ts` , simply add a `vi.mock("../db")`

```javascript
// vi.mock('../db', () => ({
//   prismaClient: { sum: { create: vi.fn() }}
// }));
vi.mock('../db');
```

*   Try running the tests

```javascript
npm run test
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fbb7b86d7-eae2-4825-83e0-44db90a93d50%2FScreenshot_2024-05-12_at_2.40.48_PM.png?table=block&id=78ced1f5-5bd4-42a9-ba18-89fe124034cb&cache=v2)

### 

[](#23e3bba2ba8b46c0a0cddd46951d46d2 "Problem")Problem

What if we are using the return value from the database call?

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

    const response = await prismaClient.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })

    res.json({
        answer,
        id: response.id
    })
});

app.get("/sum", async (req, res) => {
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

    const response = await prismaClient.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })

    res.json({
        answer,
        id: response.id
    })
});
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7d1d2221-e7d2-48a3-96f2-b83e2ab869e5%2FScreenshot_2024-05-12_at_2.49.51_PM.png?table=block&id=460e1486-b524-4066-996f-48eaba82f533&cache=v2)