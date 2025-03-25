# Testing an express app

Code - [https://github.com/100xdevs-cohort-2/week-24-testing/tree/main/2-simple-express-app](https://github.com/100xdevs-cohort-2/week-24-testing/tree/main/2-simple-express-app)

Let’s say we have an express app that doesnt have any DB connections

*   Initialize a simple TS project

```javascript
npm init -y
npx tsc --init
```

*   Change rootDir and srcDir

```javascript
"rootDir": "./src",
"outDir": "./dist",
```

*   Add dependencies

```javascript
npm install --save-dev ts-jest  @jest/globals @types/express
npm i supertest @types/supertest
npm install express 
```

*   Initialize jest.config.ts

```javascript
npx ts-jest config:init
```

*   Create `src/index.ts`

```javascript
import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    res.json({
        answer
    })
});
```

*   Update package.json scripts

```javascript
"test": "jest"
```

*   Add `tests/sum.test.ts`

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

      it("should return the sum of two negative numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: -1,
          b: -2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
      });

      it("should return the sum of two zero number", async () => {
        const res = await request(app).post("/sum").send({
          a: 0,
          b: 0
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(0);
      });
});
```

*   Update jest.config.js

```javascript
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["<rootDir>/src/tests/**/*.ts"]
};
```