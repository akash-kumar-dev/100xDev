# Stateful vs Stateless Backends

Common interview question

## 

[](#6a5020553f7947dca4cc10c1ce0d61be "Stateless servers")Stateless servers

Usually when you write HTTP servers, they dont hold any `state`

This means, they don’t have any in memory variables that they use

They usually rely on the `database` for `state`

#### 

[](#4236f93021924c13868d8603fabc8f49 "Advantages")Advantages

1.  Users can connect to a random server, there is no need of stickiness

2.  Can autoscale up and down easily and simply decide where to route traffic based on CPU usage.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Feba0b213-7fb0-4eb8-bc88-acd1542ca0ef%2FScreenshot_2024-04-21_at_4.17.50_PM.png?table=block&id=9ad4aeed-b780-4fe9-8ae3-742e03add2b4&cache=v2)

## 

[](#c3533eb4f88f45b5af99017c0ad7b9e0 "Stateful servers")Stateful servers

A lot of times, you make servers hold `state` Good examples of this are

1.  Creating an `in memory cache` - [https://github.com/code100x/cms/blob/e905c71eacf9d99f68db802b24b7b3a924ae27f1/src/db/Cache.ts#L3](https://github.com/code100x/cms/blob/e905c71eacf9d99f68db802b24b7b3a924ae27f1/src/db/Cache.ts#L3)

2.  Storing the `state` of a Game in case of a realtime game - [https://github.com/code100x/chess/blob/main/apps/ws/src/Game.ts#L41-L47](https://github.com/code100x/chess/blob/main/apps/ws/src/Game.ts#L41-L47)

3.  Storing a list of 10 most latest chats in memory for a `chat` application

In case `1`, there is no need of `stickiness`

In case of `2` and `3`, there is need of `stickiness`

#### 

[](#fcec1476f59c43988a187a6039e16f9a "Stickiness")Stickiness

Making sure that the user who is interested in a `specific` room, gets connected to a `specific` server.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Feee8417d-18e0-4f07-ad52-59605fc5c182%2FScreenshot_2024-04-21_at_4.41.59_PM.png?table=block&id=9afa1fd2-29e8-45bd-8614-ec7a7e3268ef&cache=v2)

Good question to ask at this point is - How to store state in a JS project?