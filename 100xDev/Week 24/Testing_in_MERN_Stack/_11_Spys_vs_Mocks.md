# Spys vs Mocks

While `mocks` let you `mock` the functionality of a function call, spies let you `spy` on function calls.

Right now, we’ve mocked out the database call. Which means even if I pass in wrong inputs to the `prismaClient.user.create` function, tests would still pass

### 

[](#5d4b87d60c604c29ac38495722d7fc5d "Problem")Problem

Try flipping the a and b inputs

```javascript
const response = await prismaClient.sum.create({
    data: {
        a: parsedResponse.data.b,
        b: parsedResponse.data.a,
        result: answer
    }
})
```

Try running the tests, they would still work

```javascript
npm run test
```

This means our tests are flaky. They succeed even when the code is incorrect.

### 

[](#6f635d54e2af45c18e31ee0a9cf90e4c "Solution")Solution

Let’s put a `spy` on the `prismaClient.sum.create` function which ensures that the db call inputs are correct

Change the first test to be

```javascript
it("should return the sum of two numbers", async () => {
    prismaClient.sum.create.mockResolvedValue({
      id: 1,
      a: 1,
      b: 1,
      result: 3
    });

    vi.spyOn(prismaClient.sum, "create");

    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2
    });

    expect(prismaClient.sum.create).toHaveBeenCalledWith({
      data: {
        a: 1,
        b: 2,
        result: 3
        }
    })

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });
 
```

Notice that the tests begin to fail

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb80b37b8-dc5f-4167-b97c-05244bdcecf1%2FScreenshot_2024-05-12_at_3.47.31_PM.png?table=block&id=1502eb10-9ec3-4eb2-9138-13cd7f057fa0&cache=v2)

### 

[](#b847787417564e35ab94a069587defd7 "Revert the application logic")Revert the application logic

Make the application logic right again

```javascript
const response = await prismaClient.sum.create({
    data: {
        a: parsedResponse.data.a,
        b: parsedResponse.data.b,
        result: answer
    }
})
```