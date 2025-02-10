# Indexing in Postgres

We’ve created postgres tables many times now. Let’s see how/if indexing helps us speed up queries

*   Create a postgres DB locally (dont use neon, we have a lot of data to store, will be very slow)

```javascript
docker run  -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

*   Connect to it and create some dummy data in it

```javascript
docker exec -it container_id /bin/bash
psql -U postgres
```

*   Create the schema for a simple medium like app

```javascript
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255)
);
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
```

*   Insert some dummy data in

```javascript
DO $$
DECLARE
    returned_user_id INT;
BEGIN
    -- Insert 5 users
    FOR i IN 1..5 LOOP
        INSERT INTO users (email, password, name) VALUES
        ('user'||i||'@example.com', 'pass'||i, 'User '||i)
        RETURNING user_id INTO returned_user_id;

        FOR j IN 1..500000 LOOP
            INSERT INTO posts (user_id, title, description)
            VALUES (returned_user_id, 'Title '||j, 'Description for post '||j);
        END LOOP;
    END LOOP;
END $$;
```

*   Try running a query to get all the posts of a user and log the time it took

```javascript
 EXPLAIN ANALYSE SELECT * FROM posts WHERE user_id=1 LIMIT 5;
```

Focus on the `execution time`

*   Add an index to user\_id

```javascript
CREATE INDEX idx_user_id ON posts (user_id);
```

Notice the `execution time` now. What do you think happened that caused the query time to go down by so much?

### 

[](#bef3bda367974776bb3414f721df2ca0 "How indexing works (briefly)")How indexing works (briefly)

When you create an index on a field, a new data structure (usually B-tree) is created that stores the mapping from the `index column` to the `location` of the record in the original table.

Search on the index is usually `log(n)`

#### 

[](#14c0453ead9648a9ae6410474e2454cd "Without indexes")Without indexes

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F059144a3-cb58-4658-8b51-019f2411950b%2FScreenshot_2024-04-27_at_7.04.41_PM.png?table=block&id=843dcaf3-5995-4980-ace1-e3ae58b0b03e&cache=v2)

#### 

[](#ae2df30ef7c245efa143d1e7d276cce4 "With indexes")With indexes

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3df35f4c-ed1e-4ed2-a704-99c43a3a999a%2FScreenshot_2024-04-27_at_7.10.00_PM.png?table=block&id=b1492b6a-2798-4667-9f92-96225c31ba1c&cache=v2)

The data pointer (in case of postgres) is the `page` and `offset` at which this record can be found.

Think of the index as the `appendix` of a book and the `location` as the `page + offset` of where this data can be found