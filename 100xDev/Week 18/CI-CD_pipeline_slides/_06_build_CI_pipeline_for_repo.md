# Lets add a build pipeline for our repo

Anytime a user creates a PR, we need to run `npm run build` and only if it succeeds should the workflow succeed

*   Fork the main repo - [https://github.com/100xdevs-cohort-2/week-18-2-ci-cd](https://github.com/100xdevs-cohort-2/week-18-2-ci-cd)

*   Add `.github/workflows/build.yml` in the root folder

*   Create the workflow

```yaml
name: Build on PR

on:
  pull_request:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install Dependencies
        run: npm install
        
      - name: Run Build
        run: npm run build
```

*   Push this to master branch

*   Create a new branch with some minimal changes and create a PR from it

*   You should see the workflow run

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe66100ee-cdad-46d8-8b5b-0e97563aaf28%2FScreenshot_2024-03-31_at_4.37.16_PM.png?table=block&id=6b012946-2705-4ae3-889d-d64fa8d0b112&cache=v2)