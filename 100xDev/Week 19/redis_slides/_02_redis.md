# Redis

Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker

One of the key features of Redis is its ability to keep all data in memory, which allows for high performance and low latency access to data.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F869853ef-8e8c-4b49-b17e-d0ef85f52eb1%2FScreenshot_2024-04-07_at_11.27.27_AM.png?table=block&id=10d57a53-5435-4041-be3f-64cef41445da&cache=v2)

### 

[](#462a2e77fdc24c4f92370f88c8d742fe "In memory data structure store")In memory data structure store

Very similar to a DB, only it is in memory. That doesn’t mean it doesn’t have persistence

*   **RDB (Redis Database File):** The RDB persistence performs point-in-time snapshots of your dataset at specified intervals. It creates a compact single-file representation of the entire Redis dataset. The snapshotting process can be configured to run at specified intervals, such as every X minutes if Y keys have changed.

```javascript
save 900 1       # Save the dataset every 900 seconds if at least 1 key changed
save 300 10      # Save the dataset every 300 seconds if at least 10 keys changed
save 60 10000    # Save the dataset every 60 seconds if at least 10000 keys changed
```

*   **AOF (Append Only File):** The AOF persistence logs every write operation received by the server, appending each operation to a file. This file can then be replayed on startup to reconstruct the dataset.