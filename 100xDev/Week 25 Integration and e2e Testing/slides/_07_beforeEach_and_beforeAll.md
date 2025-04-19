# beforeEach and beforeAll function

### 

[](#69f0406ec8cc4dac85d5b20fed5d150f "beforeEach")beforeEach

If you want to clear the DB between tests/descibe blocks, you can use the `beforeEach` function

```javascript
import { beforeEach, describe, expect, it } from "vitest";
import { app } from "..";
import request from "supertest";
import resetDb from "./helpers/reset-db";

describe("POST /sum", () => {
    beforeEach(async () => {
        console.log("clearing db");
        await resetDb();
    });

    it("should sum add 2 numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 3, id: expect.any(Number) });
    });

    it("should sum add 2 negative numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: -1,
            b: -2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: -3, id: expect.any(Number) });
    });
})
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe0982ba5-7e2b-4c9c-9001-81ab6a1b5873%2FScreenshot_2024-05-19_at_4.15.41_PM.png?table=block&id=91f6d467-f46c-4a4c-b1d6-4bf9e65bc691&cache=v2)

### 

[](#5df8c59f5187499782baedae9e6f8105 "beforeAll")beforeAll

If you want certain code to run before all the tests (but not before every individual test), you can use the `beforeAll` function

```javascript
import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { app } from "..";
import request from "supertest";
import resetDb from "./helpers/reset-db";

describe("POST /sum", () => {
    beforeAll(async () => {
        console.log("clearing db");
        await resetDb();
    });

    it("should sum add 2 numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 3, id: expect.any(Number) });
    });

    it("should sum add 2 negative numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: -1,
            b: -2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: -3, id: expect.any(Number) });
    });
})
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd5bdfeaa-7373-415e-888c-1f1a70f353ac%2FScreenshot_2024-05-19_at_4.16.23_PM.png?table=block&id=b99be225-f6ef-42af-a0b6-eb19d90dfa77&cache=v2)