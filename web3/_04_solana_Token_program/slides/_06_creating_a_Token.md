# Creating a token

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3552b4c1-bb13-4b34-81a8-2b96928ad7de%2FScreenshot_2024-08-28_at_7.09.00_PM.png?table=block&id=b9891415-58e8-414b-a2a6-a1031d6e99b0&cache=v2)

Creating `your own token` (100x coin lets say) requires understanding the `Token Program` that is written by the engineers at Solana - [https://github.com/solana-labs/solana-program-library](https://github.com/solana-labs/solana-program-library)

Specifically, the way to create a `token` requires you to

1.  Create a token mint

2.  Create an `associated token account` for this mint and for a specific user

3.  Mint tokens to that user.

#### 

[](#c97266de68f5428696cff98320800964 "Token mint")Token mint

It’s like a `bank` that has the athority to create more coins. It can also have the authority to `freeze coins`.

#### 

[](#9593c7abb60b454a8e690036efd78dce "Associated token account")Associated token account

Before you can ask other people to send you a token, you need to create an `associated token account` for that token and your public key

Reference - [https://spl.solana.com/token](https://spl.solana.com/token)

Create a new cli wallet

```javascript
solana-keygen new
```

Set the RPC url

```javascript
solana config set --url https://api.devnet.solana.com
```

Airdrop yourself some SOL

```javascript
 solana airdrop 1
```

Check your balance

```javascript
solana balance
```

Create token mint

```javascript
spl-token create-token
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7fd32bfe-7cd1-4a76-9428-c3e5c58aa363%2FScreenshot_2024-08-23_at_4.44.15_PM.png?table=block&id=dedd117f-feb8-4eea-828e-6e9e1a797fe7&cache=v2)

Verify token mint on chain

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc536405d-3af7-4272-8eec-d9df090d7c1c%2FScreenshot_2024-08-23_at_4.42.55_PM.png?table=block&id=4b5b96c7-eb4d-4be7-85ed-f6310becf9d2&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3df62954-78fb-49fc-bde6-2cb1297b7ec4%2FScreenshot_2024-08-23_at_4.58.03_PM.png?table=block&id=200352ec-0303-48d9-88fe-92dc4118a2a1&cache=v2)

*   Check the token on solana fm [https://solana.fm/address/ChNkv9iW5pZJ1YAsNswC2CrdMUkFJBUbRWinjdLvKpXA/transactions?cluster=devnet-solana](https://solana.fm/address/ChNkv9iW5pZJ1YAsNswC2CrdMUkFJBUbRWinjdLvKpXA/transactions?cluster=devnet-solana)

*   Use the `getAccountInfo` to see the `data` and `lamports` in the account

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Facb8eded-aa54-4fb2-ad5d-07b4e6de37f0%2FScreenshot_2024-08-23_at_4.58.42_PM.png?table=block&id=665c5797-80c1-4410-b2d1-0306cdd5d48d&cache=v2)

Check the supply of the token

```javascript
spl-token supply AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM
```

Create an associated token account

```javascript
spl-token create-account ChNkv9iW5pZJ1YAsNswC2CrdMUkFJBUbRWinjdLvKpXA
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F082a2826-1226-4896-91d0-a8e7cac71916%2FScreenshot_2024-08-23_at_5.18.14_PM.png?table=block&id=b95e120b-4920-470c-a943-2322220366a3&cache=v2)

Mint some tokens to yourself

```javascript
spl-token mint  ChNkv9iW5pZJ1YAsNswC2CrdMUkFJBUbRWinjdLvKpXA 100
```

Check your balances in the explorer

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe6573e13-5780-44cf-914a-ffd637cc1ced%2FScreenshot_2024-08-23_at_5.20.41_PM.png?table=block&id=1f45e924-8159-45f0-bcd8-784703d6e8de&cache=v2)

Import the token in Phantom and see the balances

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5049782a-d22b-4e2b-8039-82cf01c1aa5c%2FScreenshot_2024-08-23_at_5.22.13_PM.png?table=block&id=993dda88-11c3-448c-97c2-2a697e7113a3&cache=v2)