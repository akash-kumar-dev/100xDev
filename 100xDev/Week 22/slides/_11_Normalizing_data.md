# Normalizing data

Normalization in databases is a systematic approach of decomposing tables to eliminate data redundancy and improve data integrity.

The process typically progresses through several normal forms, each building on the last.

When you look at a schema, you can identify if it lies in one of the following categories of normalization

1.  1NF

2.  2NF

3.  3NF

4.  BCNF

5.  4NF

6.  5NF

You aim to reach 3NF/BCNF usually. The lower you go, the more normalised your table is. But over normalization can lead to excessive joins

### 

[](#2bee934c52814e5389af6740d7d5a205 "1NF")1NF

*   **A single cell must not hold more than one value (atomicity)**: This rule ensures that each column of a database table holds only atomic (indivisible) values, and multi-valued attributes are split into separate columns. For example, if a column is meant to store phone numbers, and a person has multiple phone numbers, each number should be in a separate row, not as a list or set in a single cell.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F93afac44-d131-4622-a7b7-11704ac94c8e%2FScreenshot_2024-05-03_at_12.26.37_PM.png?table=block&id=403e39a2-1496-4192-8931-d6316ae21ed8&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb2fec16c-b8f7-4717-9513-677f09c0f6cc%2FScreenshot_2024-05-03_at_12.26.41_PM.png?table=block&id=1a850971-420b-4ae0-afc9-f2ef58f7465b&cache=v2)

*   **There must be a primary key for identification**: Each table should have a primary key, which is a column (or a set of columns) that uniquely identifies each row in a table

*   **No duplicated rows**: To ensure that the data in the table is organised properly and to uphold the integrity of the data, each row in the table should be unique. This rule works hand-in-hand with the presence of a primary key to prevent duplicate entries which can lead to data anomalies.

*   **Each column must have only one value for each row in the table**: This rule emphasizes that every column must hold only one value per row, and that value should be of the same kind for that column across all rows.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F72b3d81b-6a03-4f01-8bcb-480de001abc6%2FScreenshot_2024-05-03_at_12.25.23_PM.png?table=block&id=f9108d9a-fb29-426d-83da-74206c873c35&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fa18e7a09-e396-480d-829e-221649ae61a6%2FScreenshot_2024-05-03_at_12.25.26_PM.png?table=block&id=a44b52af-9efc-4f63-a551-3b3db7f09a34&cache=v2)

### 

[](#077c88386d434a6ea6c4c35c4b611c41 "2NF")2NF

Ref -[https://www.studytonight.com/dbms/second-normal-form.php](https://www.studytonight.com/dbms/second-normal-form.php)

1NF gets rid of repeating rows. 2NF gets rid of redundancy

A table is said to be in 2NF if it meets the following criteria:

*   is already in 1NF

*   Has 0 partial dependency.

💡

Partial dependency - This occurs when a non-primary key attribute is dependent on part of a composite primary key, rather than on the whole primary key. In simpler terms, if your table has a primary key made up of multiple columns, a partial dependency exists if an attribute in the table is dependent only on a subset of those columns that form the primary key. **Example**: Consider a table with the composite primary key (`**StudentID**`, `**CourseID**`) and other attributes like `**InstructorName**` and `**CourseName**`. If `**CourseName**` is dependent only on `**CourseID**` and not on the complete composite key (`**StudentID**`, `**CourseID**`), then `**CourseName**` has a partial dependency on the primary key. This violates 2NF.

#### 

[](#fe6075564c1a4babb0a9e575d5e9f768 "Before normalization")Before normalization

Enrollments table

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd56a2464-4a92-432d-aa79-c998f1f58c34%2FScreenshot_2024-05-03_at_1.07.47_PM.png?table=block&id=96cced59-7dd4-4ec7-8c2f-5ec0c54ba8ca&cache=v2)

Can you spot the redundancy over here? The instructor name and course name are repeated in rows, even though the name of an instructor should be the same for a given courseID

Primary key of this table is (student\_id, course\_id)

CourseName and InstructorName have a `partial dependency` on `CourserID`

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd9028a09-53f6-452e-a17c-37b061e6ce61%2FScreenshot_2024-05-03_at_1.11.14_PM.png?table=block&id=9d11093f-3ca3-45de-98ad-9440e1afdaa1&cache=v2)

#### 

[](#52c9cb1936a244da953179c87a3db5d6 "After normalisation")After normalisation

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F15fd6c51-8574-4911-9f95-facebfc3e2e8%2FScreenshot_2024-05-03_at_1.08.17_PM.png?table=block&id=86ec6fa2-d9fa-44e2-b25b-5fadbfd53ed6&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ff1df691d-2fab-489c-b138-844e23289a48%2FScreenshot_2024-05-03_at_1.08.32_PM.png?table=block&id=4a255882-c9c9-448f-8713-be03f1772e18&cache=v2)

### 

[](#47035ddc96534078b99cf7007398b5ef "3NF")3NF

When a table is in 2NF, it eliminates repeating groups and redundancy, but it does not eliminate transitive partial dependency.

So, for a table to be in 3NF, it must:

*   be in 2NF

*   have no transitive partial dependency.

💡

A **transitive dependency** in a relational database occurs when one non-key attribute indirectly depends on the primary key through another non-key attribute.

For example

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F21b7cf62-dd2d-4674-8884-0e7599fcf627%2FScreenshot_2024-05-03_at_1.29.10_PM.png?table=block&id=36140903-15a9-4ff5-ae9e-0d5209147ed0&cache=v2)

`Department name` has a `transitive dependency` on the primary key (employee id).

To normalise to 3NF, we need to do the following

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8443bd6b-4baf-4213-831d-656cb23b243a%2FScreenshot_2024-05-03_at_1.31.18_PM.png?table=block&id=2e03a23f-21ac-4ceb-bef4-0b40f2feef93&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7cfb41e8-bdaf-4083-85a4-7f0ab9017250%2FScreenshot_2024-05-03_at_1.31.21_PM.png?table=block&id=4623f5c4-febc-42b9-b015-14ecb919c5e5&cache=v2)