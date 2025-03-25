# Simple express project with vitest

Code - [https://github.com/100xdevs-cohort-2/week-24-testing/tree/main/4-express-with-vitest](https://github.com/100xdevs-cohort-2/week-24-testing/tree/main/4-express-with-vitest)

*   Init express app

```javascript
npm init -y
npx tsc --init
npm install express @types/express zod
```

*   Update tsconfig

```javascript
"rootDir": "./src",
"outDir": "./dist"
```

*   Write a simple `src/index.ts` file

```javascript

import express from "express";
import { z } from "zod";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
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

💡

We’re not doing an app.listen here. This is because we dont want the app to actually start when the tests are running. Usually you create a `bin.ts` file or `main.ts` file that imports app and actually listens on a port

*   Install vitest

```javascript
npm i -D vitest
```

*   Add a simple `test/index.test.ts` file

```javascript
import { expect, test } from 'vitest'

test('true === true', () => {
  expect(true).toBe(true)
})
```

*   Add a script to test in package.json

```javascript
"test": "vitest"
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F12b3de2d-8765-459c-ab86-9fafe6c8616e%2FScreenshot_2024-05-12_at_1.33.23_PM.png?table=block&id=9782eada-e595-47a7-8633-5f428fe15272&cache=v2)

*   Add supertest

```javascript
npm i supertest @types/supertest
```

*   Update test - Notice all we had to do was update the imports. `vitest` is highly compatible with the jest api

```javascript
import {describe, expect, test, it} from 'vitest';
import request from "supertest";
import { app } from "../index"

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
      const res = await request(app).post("/sum").send({
        a: 1,
        b: 2
      });
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
    });

    it("should return 411 if no inputs are provided", async () => {
      const res = await request(app).post("/sum").send({});
      expect(res.statusCode).toBe(411);
      expect(res.body.message).toBe("Incorrect inputs");
    });

});


describe("GET /sum", () => {
  it("should return the sum of two numbers", async () => {
      const res = await request(app)
        .get("/sum")
        .set({
          a: "1",
          b: "2"
        })
        .send();
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app)
      .get("/sum").send();
    expect(res.statusCode).toBe(411);
  });

});
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9e2a22d6-f612-4111-a1ca-abdeeb3853df%2FScreenshot_2024-05-12_at_1.41.34_PM.png?table=block&id=3ba4917b-643a-47c2-9bde-c6ede22f8c24&cache=v2)