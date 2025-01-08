# Redis as a queue

You can also push to a `topic` / `queue` on Redis and other processes can `pop` from it.

Good example of this is Leetcode submissions that need to be processed asynchronously

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe671776f-58e2-4b1b-a9f8-32ef466c3840%2FScreenshot_2024-04-07_at_4.31.24_PM.png?table=block&id=867c4f9f-d537-47b0-bb0c-e0f44db4524d&cache=v2)

#### 

[](#13e50480a58743d188e1292f244b615b "Pushing to a queue")Pushing to a queue

```javascript
LPUSH problems 1
LPUSH problems 2
```

#### 

[](#2cd492a8fccb407e9777fb14e28a3f42 "Popping from a queue")Popping from a queue

```javascript
RPOP problems
RPOP problems 
```

#### 

[](#5e1b4afce78a47199777ec45369ca78b "Blocked pop")Blocked pop

```javascript
BRPOP problems 0
BRPOP problems 30
```

The last argument represents the timeout before the blocking should be stopped