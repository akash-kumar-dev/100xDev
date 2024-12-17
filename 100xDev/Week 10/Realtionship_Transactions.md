Relationships and Transactions
========================================

Relationships let you store data in different tables and `relate` it with each other.

### 

[](#c22cda00b6b5452c801ac05e61643455 "Relationships in Mongodb")Relationships in Mongodb

Since `mongodb` is a NoSQL database, you can store any shape of data in it. If I ask you to store a users details along with their address, you can store it in an object that has the address details.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ffd33f71f-ac54-432e-9afc-321758d50b04%2FScreenshot_2024-02-03_at_1.24.12_AM.png?table=block&id=ededf670-2336-4101-b701-c384e35f7447&cache=v2)

### 

[](#82cf59ff391e44ffac7cc0b303899e7e "Relationships in SQL")Relationships in SQL

Since SQL can not store `objects` as such, we need to define two different tables to store this data in.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1646f1fe-2d70-4df1-9de1-b619b28bf3a7%2FScreenshot_2024-02-03_at_1.30.10_AM.png?table=block&id=4af3b6ab-44fe-4ca4-8f04-c3d063592e11&cache=v2)

This is called a `relationship` , which means that the `Address` table is related to the `Users` table.

When defining the table, you need to define the `relationship`

    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    
    CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

### 

[](#ce6a883e12704de9b4d65eee12aaeea2 "SQL query")SQL query

To insert the address of a user -

    INSERT INTO addresses (user_id, city, country, street, pincode)
    VALUES (1, 'New York', 'USA', '123 Broadway St', '10001');

Now if you want to get the address of a user given an `id` , you can run the following query -

    SELECT city, country, street, pincode
    FROM addresses
    WHERE user_id = 1;

### 

[](#716cc6a2b3ac4c74bedd9354b1cf9d5d "Extra - Transactions in SQL")Extra - Transactions in SQL

💡

Good question to have at this point is what queries are run when the user signs up and sends both their information and their address in a single request. Do we send two SQL queries into the database? What if one of the queries (address query for example) fails? This would require `transactions` in SQL to ensure either both the user information and address goes in, or neither does

SQL Query

    BEGIN; -- Start transaction
    
    INSERT INTO users (username, email, password)
    VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123');
    
    INSERT INTO addresses (user_id, city, country, street, pincode)
    VALUES (currval('users_id_seq'), 'New York', 'USA', '123 Broadway St', '10001');
    
    COMMIT;

Node.js Code

    import { Client } from 'pg';
    
    async function insertUserAndAddress(
        username: string, 
        email: string, 
        password: string, 
        city: string, 
        country: string, 
        street: string, 
        pincode: string
    ) {
        const client = new Client({
            host: 'localhost',
            port: 5432,
            database: 'postgres',
            user: 'postgres',
            password: 'mysecretpassword',
        });
    
        try {
            await client.connect();
    
            // Start transaction
            await client.query('BEGIN');
    
            // Insert user
            const insertUserText = `
                INSERT INTO users (username, email, password)
                VALUES ($1, $2, $3)
                RETURNING id;
            `;
            const userRes = await client.query(insertUserText, [username, email, password]);
            const userId = userRes.rows[0].id;
    
            // Insert address using the returned user ID
            const insertAddressText = `
                INSERT INTO addresses (user_id, city, country, street, pincode)
                VALUES ($1, $2, $3, $4, $5);
            `;
            await client.query(insertAddressText, [userId, city, country, street, pincode]);
    
            // Commit transaction
            await client.query('COMMIT');
    
            console.log('User and address inserted successfully');
        } catch (err) {
            await client.query('ROLLBACK'); // Roll back the transaction on error
            console.error('Error during transaction, rolled back.', err);
            throw err;
        } finally {
            await client.end(); // Close the client connection
        }
    }
    
    // Example usage
    insertUserAndAddress(
        'johndoe', 
        'john.doe@example.com', 
        'securepassword123', 
        'New York', 
        'USA', 
        '123 Broadway St', 
        '10001'
    );