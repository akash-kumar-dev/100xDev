# Starting redis locally

Let’s start redis locally and start using it as a DB

```javascript
docker run --name my-redis -d -p 6379:6379 redis
```

Connecting to your container

```javascript
docker exec -it container_id /bin/bash
```

Connecting to the redis cli

```javascript
redis-cli
```