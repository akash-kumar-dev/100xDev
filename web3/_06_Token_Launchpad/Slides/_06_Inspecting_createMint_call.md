# Inspecting the createMint call

The `createMint` function sends a `transaction` with 2 `instructions`

1.  Create a fresh `mint account`

2.  Initialise data inside the `mint account` such that it stores `mint data` (decimals, mintAuthority etc)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ffa311463-2af3-437e-b692-f085cc41baa3%2FScreenshot_2024-09-06_at_4.23.10_PM.png?table=block&id=2b24073c-b3b1-46ae-bb53-35f03eb836a2&cache=v2)

We need to bring in the same code in our codebase and make the `user sign it`