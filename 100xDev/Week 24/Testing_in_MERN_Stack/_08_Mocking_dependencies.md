# Mocking dependencies

Ref - [https://vitest.dev/guide/mocking.html](https://vitest.dev/guide/mocking.html)

When writing `unit tests` , you `mock out` all `external service` calls.

This means you test the `core` of your logic, and assume the `database calls` would succeed.

This is done so tests can run without starting a `database` / `external services`

### 

[](#391b3d30f32749ef9d981180c9d0d452 "Mocking")Mocking

Mocking, as the name suggests, means `mocking` the behaviour of a file/class/variable when tests are running.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd1f24e18-bf62-493d-b5da-25b938f383fa%2FScreenshot_2024-05-12_at_2.04.33_PM.png?table=block&id=132b6861-f196-4fb5-aa31-6cbcfde96b1e&cache=v2)

### 

[](#3ffeda3e836d4b5d8df767b1980db8ad "Creating a mock")Creating a mock

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1d09a813-8180-4af1-9beb-79a127f0864a%2FScreenshot_2024-05-12_at_2.25.08_PM.png?table=block&id=7bd03442-6e6d-4767-9994-2842c8762576&cache=v2)

#### 

[](#e981bdb5608d4650bb4786cd61ff66e1 "Mocking our prismaClient")Mocking our prismaClient

To mock out the `prismaClient`, you can add the following code to the top of `index.test.ts`

```javascript
vi.mock('../db', () => ({
  prismaClient: { sum: { create: vi.fn() }}
}));
```

Since we know we are only calling

```javascript
prismaClient.sum.create
```

I have `mocked` the implementation of that function. A `mock` does nothing and returns `undefined` when the function call succeeds.

Try running `npm run test` now. It should succeed

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb65a7ca5-c800-46da-8eb4-572207305011%2FScreenshot_2024-05-12_at_2.31.33_PM.png?table=block&id=2aa312a8-66b3-4418-9523-c9ac85b27690&cache=v2)

### 

[](#0cd6bdf6c2164f1da1d6b010400ff942 "Problems")Problems

💡

Can you guess the two problems that exist here? 1. What if I want to use the value that the database call returns? Right now, it will return `undefined` while a real DB call would return some real data 2. I have to constantly keep upgrading the `mock` since in the future I might use the `findOne` function, then might add a new table called `users` …