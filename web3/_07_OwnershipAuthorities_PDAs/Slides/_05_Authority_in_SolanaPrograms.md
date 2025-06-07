# Authority in solana programs

In Solana programs, `authorities` are entities or accounts that have the right to perform certain actions or make changes within the program.

For example

Token mint authority - Can mint new tokens

1.  Token with mint auth - [https://explorer.solana.com/address/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v](https://explorer.solana.com/address/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v)

2.  Token with No mint auth - [https://explorer.solana.com/address/8FQvjBxFdR51wbZfQVaWbkjR2sNNxDLyabNePPmsyou9](https://explorer.solana.com/address/8FQvjBxFdR51wbZfQVaWbkjR2sNNxDLyabNePPmsyou9)

Token freeze authority - Can freeze tokens in an account

Token with a freeze auth - [https://explorer.solana.com/address/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v](https://explorer.solana.com/address/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v)

Upgrade authority - Can `upgrade` the code of a program.

[https://explorer.solana.com/address/8rpHNPsyEJQEJjC2waWvUXyvCkYghCZndACoXs9sNKZg?cluster=devnet](https://explorer.solana.com/address/8rpHNPsyEJQEJjC2waWvUXyvCkYghCZndACoXs9sNKZg?cluster=devnet)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fbba392c1-fadc-4c03-ad60-8b68fb151e0d%2FScreenshot_2024-09-13_at_7.04.39_PM.png?table=block&id=99edf09a-d19a-41fd-80d9-453ff9e47560&cache=v2)

### 

[](#fd453551329343f7a6b6474bdd4a0b23 "Creating and revoking mint authority")Creating and revoking mint authority

*   Create a new token

```javascript
spl-token create-token
```

*   Create an ata

```javascript
spl-token create-account <token_mint_address> 
```

*   Try minting some tokens

```javascript
spl-token mint <token_mint_address> 10000000000
```

*   Check if `mint authority` exists on explorer

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc32e8bf2-7ddc-4d2d-af7f-2dddb31b5524%2FScreenshot_2024-09-13_at_7.51.04_PM.png?table=block&id=6b659a19-6eca-44f7-83c6-b7bccabd6f57&cache=v2)

*   Revoke `mint authority`

```javascript
spl-token authorize  <token_id>  mint --disable
```

*   Try to mint again/check the explorer

```javascript
spl-token mint <token_mint_address> 10000000000
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fef6b7b6a-3bda-4e93-bc7d-71e5ab0fbdfa%2FScreenshot_2024-09-13_at_7.49.03_PM.png?table=block&id=77722bf3-742f-4dfa-bfe0-48e6cd85d8d1&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9ca93ed5-4625-4d04-ba29-eb38a5576d57%2FScreenshot_2024-09-13_at_7.50.27_PM.png?table=block&id=36ff6de6-5854-46b4-8326-2e1bacf64677&cache=v2)