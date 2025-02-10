# Complex indexes

You can have index on more than one column for more complex queries

For example,

Give me all the posts of a user with given `id` with `title` “Class 1”.

The index needs to have two keys now

```javascript
CREATE INDEX idx_posts_user_id_title ON posts (description, title);
```

*   Try searching before the index is added and after it is added

```javascript
 SELECT * FROM posts WHERE title='title' AND description='my title';
```