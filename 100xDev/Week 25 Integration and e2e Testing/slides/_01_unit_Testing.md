# Unit testing

Code for today - [https://github.com/100xdevs-cohort-2/week-25-integ-e2e-tests](https://github.com/100xdevs-cohort-2/week-25-integ-e2e-tests)

### 

[](#223d80605b424b0e871175b0fc3069ac "Recap of Unit tests")Recap of Unit tests

The following is a great example of a unit test - [https://github.com/100xdevs-cohort-2/week-24-testing/tree/main/5-express-vitest-prisma](https://github.com/100xdevs-cohort-2/week-24-testing/tree/main/5-express-vitest-prisma)

We have used concepts like

1.  Mocking

2.  mockingResolvedValue

3.  Spying

to create unit tests for our simple express app.

#### 

[](#0dd80bd95d6c49e0b4a315d89974ab05 "Code")Code

```javascript
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
            type: "Sum"
        }
    })
    
    res.json({ answer: result, id: request.id });
})
```

### 

[](#d9faf4a0cdeb44048ef16fe1c7025197 "Test")Test

```javascript
import { it, describe, expect, vi } from "vitest";
import { app } from "../index";
import request from "supertest";
import { prismaClient } from '../__mocks__/db'

// mockReturnValue
vi.mock("../db");

describe("Tests the sum function", () => {
    it("Should return 3 when 1 + 2", async () => {
        prismaClient.request.create.mockResolvedValue({
            id: 1,
            answer: 3,
            type: "Sum",
            a: 1,
            b: 2
        })

        vi.spyOn(prismaClient.request, "create");

        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        })

        expect(prismaClient.request.create).toHaveBeenCalledWith({
            data: {
                a: 1,
                b: 2,
                type: "Sum",
                answer: 3
            }
        })

        expect(res.body.answer).toBe(3);
        expect(res.body.id).toBe(1);
        expect(res.statusCode).toBe(200);
    })

    it("Should fail when a number is too big", async () => {
        const res = await request(app).post("/sum").send({
            a: 1000000000000,
            b: 2
        })

        expect(res.body.message).toBe("Sorry we dont support big numbers");
        expect(res.statusCode).toBe(422);
    })
})
```