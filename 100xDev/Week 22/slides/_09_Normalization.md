# **Normalization**

Normalization is the process of removing redundancy in your database.

### 

[](#f48867b9b1c44542b655517f1ab3dd06 "Redundancy")Redundancy

Redundant data means data that already exists elsewhere and we’re duplicating it in two places

For example, if you have two tables

1.  users

2.  user\_metadata

where you do the following -

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9fdded74-4e0e-4866-8459-e730c87bc521%2FScreenshot_2024-05-02_at_1.14.02_PM.png?table=block&id=107d0556-d19e-4c66-9256-dbd421dc0b09&cache=v2)

If you notice, we’ve stored the name on the order in the Orders table, when it is already present in the Users table. This is what is `redundant` data.

Notice this schema is still `full proof`. We can get all the orders given a user id. We can tell the users details (username, name) given an order id.

### 

[](#0aac7ae57b814b4ebb467dc0d4efd3a9 "Non full proof data")Non full proof data

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ff389e2e8-cf2d-4843-80ca-19875a846868%2FScreenshot_2024-05-02_at_1.17.08_PM.png?table=block&id=e98a5baa-40a7-44ba-b961-b7b2eab5a600&cache=v2)

This data doesn’t have any relationship b/w Orders and users. This is just plain wrong. You can never tell the orders for a user (esp if 2 users can have the same name)

Normalisation is done on tables that are full proof to remove redundancy.