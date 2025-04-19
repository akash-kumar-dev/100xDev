# Bootstraping Integration tests in vitest

*   Add vitest as a dependency

```javascript
npm i vitest
```

*   Add a docker-compose with all your external services

```javascript
version: '3.8'
services:
  db:
    image: postgres
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=mysecretpassword
    ports:
      - '5432:5432'
```

*   Crate `src/tests/helpers/reset-db.ts`

```javascript

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async () => {
  await prisma.$transaction([
    prisma.request.deleteMany(),
  ])
}
```

*   Create a new script `[scripts/run-integration.sh](http://run-integration.sh/)`

```javascript
docker-compose up -d
```

*   Bring in [`wait-for-it.sh`](http://wait-for-it.sh) locally in `scripts/wait-for-it.sh`

```javascript
curl https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -o scripts/wait-for-it.sh
```

💡

On a mac, you might need this to run the following command -

`brew install coreutils && alias timeout=gtimeout` Ref - [https://github.com/vishnubob/wait-for-it/issues/108](https://github.com/vishnubob/wait-for-it/issues/108)

*   Make the scripts executable

```javascript
chmod +x scripts/*
```

*   Update `run-integration.sh`

```javascript
docker-compose up -d
echo '🟡 - Waiting for database to be ready...'
./wait-for-it.sh "postgresql://postgres:mysecretpassword@localhost:5432/postgres" -- echo '🟢 - Database is ready!'
npx prisma migrate dev --name init
npm run test
docker-compose down
```

*   Update `package.json`

```javascript
"scripts": {
	"test": "vitest",
  "test:integration": "./scripts/run-integration.sh"
},
```