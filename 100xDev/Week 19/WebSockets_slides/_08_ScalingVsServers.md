# Scaling ws servers

In the real world, you’d want more than one websocket servers (Especially as your website gets more traffic)

The way to scale websocket servers usually happens by creating a `ws fleet`

There is usually a central layer behind it that `orchestrates` messages

ws servers are kept `stateless`

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb44488cf-22da-4480-ad1c-402d93799e62%2FScreenshot_2024-04-06_at_6.06.53_PM.png?table=block&id=4f0ed422-3897-4b48-8eea-925ab9118f18&cache=v2)