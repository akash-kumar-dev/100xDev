# Redis as a DB

### 

[](#d2f7529d56284bc8b086a698f571d931 "SET/GET/DEL")SET/GET/DEL

*   Setting data

```javascript
SET mykey "Hello" 
```

*   Getting data

```javascript
GET mykey
```

*   Deleting data

```javascript
DEL mykey
```

### 

[](#1b89adcc70b04bb28ef49bdb092fa337 "HSET/HGET/HDEL (H = Hash)")HSET/HGET/HDEL (H = Hash)

```javascript
HSET user:100 name "John Doe" email "user@example.com" age "30"
HGET user:100 name
HGET user:100 email
```

💡

You should never use redis as your primary database

Very nice video -

[https://www.youtube.com/watch?v=WQ61RL1GpEE](https://www.youtube.com/watch?v=WQ61RL1GpEE)