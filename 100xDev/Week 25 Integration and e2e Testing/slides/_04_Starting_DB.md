# Starting the DB

Until now, we’ve used one of the following ways to start a DB

1.  Start one on [https://neon.tech/](https://neon.tech/) / aieven

2.  Start it locally using docker

```javascript
docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword  -d postgres
```

Let’s use the second one to start a database and then hit our backend

*   Make sure docker is running

*   Start a DB locally

```javascript
docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword  -d postgres
```

*   Update .env

```javascript
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"
```

*   Migrate the DB

```javascript
npx prisma migrate dev
```

*   Generate the client

```javascript
npx prisma generate
```

*   Send a request from POSTMAN

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2d5490e7-2a6a-42a8-b0de-5dfd85375e59%2FScreenshot_2024-05-19_at_2.06.38_PM.png?table=block&id=a455b15e-763f-451d-81bb-3e998a1cfeea&cache=v2)

*   Check the DB and ensure data is going in

```javascript
npx prisma studio
```

What we did right now is a `manual integration test`

We now need to automate this thing and do the same programatically

Let’s take down the database for now -

```javascript
docker ps
docker kill container_id
```