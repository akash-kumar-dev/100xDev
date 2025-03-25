# Adding a CI/CD pipeline

*   Create a CI/CD pipeline that runs `npm run test`

*   Create `.github/workflows/test.yml`

```javascript
name: CI/CD Pipeline

on:
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 20

      - name: Install dependencies
        working-directory: 5-express-vitest-prisma
        run: npm install && npx prisma generate

      - name: Run tests
        working-directory: 5-express-vitest-prisma
        run: npm run test
```

Final code - [https://github.com/100xdevs-cohort-2/week-24-testing](https://github.com/100xdevs-cohort-2/week-24-testing)

PR #1 - [https://github.com/100xdevs-cohort-2/week-24-testing/pull/2](https://github.com/100xdevs-cohort-2/week-24-testing/pull/2)

PR #2 - [https://github.com/100xdevs-cohort-2/week-24-testing/pull/3](https://github.com/100xdevs-cohort-2/week-24-testing/pull/3)