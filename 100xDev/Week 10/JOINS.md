Joins
===============

Defining relationships is easy.

What’s hard is `joining` data from two (or more) tables together.

For example, if I ask you to fetch me a users details `and` their address, what SQL would you run?

Approach 1 (Bad)

    -- Query 1: Fetch user's details
    SELECT id, username, email
    FROM users
    WHERE id = YOUR_USER_ID;
    
    -- Query 2: Fetch user's address
    SELECT city, country, street, pincode
    FROM addresses
    WHERE user_id = YOUR_USER_ID;

Approach 2 (using joins)

    SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users
    JOIN addresses ON users.id = addresses.user_id
    WHERE users.id = '1';

    SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
    FROM users u
    JOIN addresses a ON u.id = a.user_id
    WHERE u.id = YOUR_USER_ID;

Now try converting the same to your node app

Approach 1 (Bad)

    import { Client } from 'pg';
    
    // Async function to fetch user details and address separately
    async function getUserDetailsAndAddressSeparately(userId: string) {
        const client = new Client({
            host: 'localhost',
            port: 5432,
            database: 'postgres',
            user: 'postgres',
            password: 'mysecretpassword',
        });
    
        try {
            await client.connect();
    
            // Fetch user details
            const userDetailsQuery = 'SELECT id, username, email FROM users WHERE id = $1';
            const userDetails = await client.query(userDetailsQuery, [userId]);
    
            // Fetch user address
            const userAddressQuery = 'SELECT city, country, street, pincode FROM addresses WHERE user_id = $1';
            const userAddress = await client.query(userAddressQuery, [userId]);
    
            if (userDetails.rows.length > 0) {
                console.log('User found:', userDetails.rows[0]);
                console.log('Address:', userAddress.rows.length > 0 ? userAddress.rows[0] : 'No address found');
                return { user: userDetails.rows[0], address: userAddress.rows.length > 0 ? userAddress.rows[0] : null };
            } else {
                console.log('No user found with the given ID.');
                return null;
            }
        } catch (err) {
            console.error('Error during fetching user and address:', err);
            throw err;
        } finally {
            await client.end();
        }
    }
    getUserDetailsAndAddressSeparately("1");

Approach 2 (using joins)

    import { Client } from 'pg';
    
    // Async function to fetch user data and their address together
    async function getUserDetailsWithAddress(userId: string) {
        const client = new Client({
            host: 'localhost',
            port: 5432,
            database: 'postgres',
            user: 'postgres',
            password: 'mysecretpassword',
        });
    
        try {
            await client.connect();
            const query = `
                SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
                FROM users u
                JOIN addresses a ON u.id = a.user_id
                WHERE u.id = $1
            `;
            const result = await client.query(query, [userId]);
    
            if (result.rows.length > 0) {
                console.log('User and address found:', result.rows[0]);
                return result.rows[0];
            } else {
                console.log('No user or address found with the given ID.');
                return null;
            }
        } catch (err) {
            console.error('Error during fetching user and address:', err);
            throw err;
        } finally {
            await client.end();
        }
    }
    getUserDetailsWithAddress("1");

No

#### 

[](#614e804a75a44dcc90336579344a095c "Benefits of using a join - ")Benefits of using a join -

1.  **Reduced Latency**

2.  Simplified Application Logic

3.  ****Transactional Integrity****

### 

[](#8b07696f5e2c48248bad39ec20d4bf21 "Types of Joins")Types of Joins

#### 

[](#408955e8a01748159054e54560ee19a5 "1. INNER JOIN")****1\. INNER JOIN****

Returns rows when there is at least one match in both tables. If there is no match, the rows are not returned. It's the most common type of join.

**Use Case: Find All Users With Their Addresses. If a user hasn’t filled their address, that user shouldn’t be returned**

    SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users
    INNER JOIN addresses ON users.id = addresses.user_id;

****2\. LEFT JOIN****

Returns all rows from the left table, and the matched rows from the right table.

Use case - To list all users from your database along with their address information (if they've provided it), you'd use a LEFT JOIN. Users without an address will still appear in your query result, but the address fields will be NULL for them.

    SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users
    LEFT JOIN addresses ON users.id = addresses.user_id;

#### 

[](#266f9485334b4fa3b961d35c7d8143a8 "3. RIGHT JOIN")****3\. RIGHT JOIN****

Returns all rows from the right table, and the matched rows from the left table.

Use case - Given the structure of the database, a RIGHT JOIN would be less common since the `**addresses**` table is unlikely to have entries not linked to a user due to the foreign key constraint. However, if you had a situation where you start with the `**addresses**` table and optionally include user information, this would be the theoretical use case.

    SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users
    RIGHT JOIN addresses ON users.id = addresses.user_id;

#### 

[](#82ef2838707b46f3a371697e69ba305b "4. FULL JOIN")****4\. FULL JOIN****

Returns rows when there is a match in one of the tables. It effectively combines the results of both LEFT JOIN and RIGHT JOIN.

Use case - A FULL JOIN would combine all records from both `**users**` and `**addresses**`, showing the relationship where it exists. Given the constraints, this might not be as relevant because every address should be linked to a user, but if there were somehow orphaned records on either side, this query would reveal them.

    SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users
    FULL JOIN addresses ON users.id = addresses.user_id;