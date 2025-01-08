# Pub subs

Publish-subscribe (pub-sub) is a messaging pattern where messages are published to a topic without the knowledge of what or if any subscribers there might be. Similarly, subscribers listen for messages on topics of interest without knowing which publishers are sending them. This decoupling of publishers and subscribers allows for highly scalable and flexible communication systems.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7f446917-e063-4a1c-8d16-632cc6fca0a2%2FScreenshot_2024-04-07_at_5.26.51_PM.png?table=block&id=e81e64d8-32c3-40a8-b791-450a5465629b&cache=v2)

Subscribe to a topic

```javascript
SUBSCRIBE problems_done
```

Publishing to a topic

```javascript
PUBLISH problems_done "{id: 1, ans: 'TLE'}"
```