# CI/CD pipeline

Final code - [https://github.com/100xdevs-cohort-2/week-25-integ-e2e-tests](https://github.com/100xdevs-cohort-2/week-25-integ-e2e-tests)

*   Add a .env.example

```javascript
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"
```

*   Add `.github/workflows/test.yml`

```javascript
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2

    - name: Set up Docker Compose
      uses: docker/setup-qemu-action@v2

    - name: Ensure Docker Compose is available
      run: docker-compose version

    - name: Copy .env.example to .env
      run: cp ./1-integration-test/.env.example ./1-integration-test/.env

    - name: Run integration script
      run: cd 1-integration-test && npm run test:integration
```