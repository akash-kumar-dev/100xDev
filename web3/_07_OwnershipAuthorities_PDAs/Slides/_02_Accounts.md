# Accounts

Ref - [https://solana.com/docs/core/accounts](https://solana.com/docs/core/accounts)

On Solana, all data is stored in what are referred to as "accounts”. The way data is organized on Solana resembles a [key-value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database), where each entry in the database is called an "account".

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F80c367bd-047e-46c7-b8db-d00c121d6a6e%2FScreenshot_2024-09-13_at_5.25.38_PM.png?table=block&id=91e2b17e-4810-4eaf-bc82-c4b329c5d3c5&cache=v2)

### 

[](#25b7a4a1766b4dfa99532a7aabddb921 "Key points")Key points

*   Accounts can store up to 10MB of data, which can consist of either executable program code or program state.

*   Programs (smart contracts) are stateless accounts that store executable code.
*   Data accounts are created by programs to store and manage program state.

*   Accounts require a rent deposit in SOL, proportional to the amount of data stored, which is fully refundable when the account is closed.

*   Every account has a program `owner`. Only the program that owns an account can modify its data or deduct its lamport balance. However, anyone can increase the balance.

*   Native programs are built-in programs included with the Solana runtime.

### 

[](#555a5b7405824fa5acee2eed439072c3 "Account")Account

Each account is identifiable by its unique address, represented as 32 bytes in the format of an [Ed25519](https://ed25519.cr.yp.to/) `PublicKey`. You can think of the address as the unique identifier for the account.

### 

[](#cb6d24b710114fe6a91ebd5e09cc3980 "AccountInfo")AccountInfo

Accounts have a [max size of 10MB](https://github.com/solana-labs/solana/blob/27eff8408b7223bb3c4ab70523f8a8dca3ca6645/sdk/program/src/system_instruction.rs#L85) (10 Mega Bytes) and the data stored on every account on Solana has the following structure known as the [AccountInfo](https://github.com/solana-labs/solana/blob/27eff8408b7223bb3c4ab70523f8a8dca3ca6645/sdk/program/src/account_info.rs#L19).

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F60670dd4-55eb-4402-89d2-00d05566ad8e%2FScreenshot_2024-09-13_at_5.28.29_PM.png?table=block&id=dab8c21e-755c-4932-8a5a-a2c681d6eba2&cache=v2)

💡

Even if you store not data, you have to store fields like `executable` and `owner` which is why you still have to have a minimum amount of SOL as rent `solana rent 0`

### 

[](#62be4134bb184dfa804403130ded36a2 "Example accounts")Example accounts

Account with no data (Owner - SystemProgram)

[https://explorer.solana.com/address/5gjLjKtBhDxWL4nwGKprThQwyzzNZ7XNAVFcEtw3rD4i](https://explorer.solana.com/address/5gjLjKtBhDxWL4nwGKprThQwyzzNZ7XNAVFcEtw3rD4i)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F6c580b82-a44a-4d62-bcfc-3ea880af8fab%2FScreenshot_2024-09-13_at_5.29.46_PM.png?table=block&id=ceb9f6bf-7545-4405-bb7e-8cdabe058c46&cache=v2)

Account with some data (Owner - TokenProgram)

[https://explorer.solana.com/address/8FQvjBxFdR51wbZfQVaWbkjR2sNNxDLyabNePPmsyou9](https://explorer.solana.com/address/8FQvjBxFdR51wbZfQVaWbkjR2sNNxDLyabNePPmsyou9)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fdd2d9034-7e39-4198-880d-545b89e567e3%2FScreenshot_2024-09-13_at_5.30.40_PM.png?table=block&id=b60a653a-ac6e-4859-b24e-9df6ac77ca6d&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fa6ed5bc9-6644-46ef-bb31-4cf198163ba0%2FScreenshot_2024-09-13_at_5.31.45_PM.png?table=block&id=a0254230-8df0-4b1c-9b5f-5860620f66ef&cache=v2)

Program account (Owner - BPF Loader)

‣

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F828b7a47-655f-4845-9114-1911db5e9009%2FScreenshot_2024-09-13_at_5.33.24_PM.png?table=block&id=2c2eac74-25c6-48fd-aac0-f5a57ec4451c&cache=v2)