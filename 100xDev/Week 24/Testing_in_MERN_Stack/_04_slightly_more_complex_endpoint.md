# Slightly more complex endpoint

Code - [https://github.com/100xdevs-cohort-2/week-24-testing/tree/main/3-express-with-zod](https://github.com/100xdevs-cohort-2/week-24-testing/tree/main/3-express-with-zod)

Lets add zod to add solid input validation and return erroneous status codes if the input is incorrect

*   Install zod

```javascript
npm install zod
```

*   Update `index.ts`

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

*   Update `sum.test.ts`

```javascript
import {describe, expect, test, it} from '@jest/globals';
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