# Pub Sub + Singleton

What if You want to create a system where users can subscribe to the `feed` of stocks (prices)

This application will be used by >1Mn users

How would you build it?

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F47e1b7ac-417c-4ca7-bef0-96eb5f1aa856%2FScreenshot_2024-04-21_at_5.44.59_PM.png?table=block&id=f663fec0-89cb-4463-9cd8-a6c88b063875&cache=v2)

*   Create a PubSubManager class (singleton)

*   It keeps track of what all stocks are users on `this server` interested in

*   It tells the pub sub whenever a `new stock` is added or a stock is removed from the list of interested stocks on that server

*   It relays the events to the right sockets whenever an event is received