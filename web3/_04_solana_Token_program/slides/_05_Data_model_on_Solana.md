# Data model on Solana

Solana stores all the data of the `same app` / `same program` in various accounts.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F4dfb1165-12fb-4c2c-829d-7ac1d56384a8%2FScreenshot_2024-08-23_at_4.38.03_PM.png?table=block&id=b3b79777-2624-4bbb-8c91-3257337f7178&cache=v2)

#### 

[](#f94290f02a42408297c2b9490b1ffbff "Transaction vs Instruction")Transaction vs Instruction

**Transactions**

A transaction in Solana is a bundle that includes one or more instructions. Transactions are used to submit operations or changes to the network. They can be simple, such as transferring SOL between accounts, or complex

**Instructions**

The core operations that the transaction will execute.

💡

There are more concepts like `recentBlockchash` and `signers` , `writeable` that we we will eventually get to.

#### 

[](#b9fb484bdf7045cfaf8e5066e4446094 "How to create an account with some data")How to create an account with some data

```javascript
const solanaWeb3 = require('@solana/web3.js');
const fs = require("fs")
const { Keypair, Connection, SystemProgram, Transaction, sendAndConfirmTransaction } = solanaWeb3;

// Connect to Solana devnet
const connection = new Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');

// Generate a new keypair for the data account
const dataAccount = Keypair.generate();
const payer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync(`/Users/harkiratsingh/.config/solana/id.json`, "utf-8")))); // This will be the account paying for the transaction

async function createAccount() {
    // Create a transaction to create and fund the account
    const tx = new Transaction().add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: dataAccount.publicKey,
            lamports: await connection.getMinimumBalanceForRentExemption(1000), // Amount to fund the account
            space: 1000, // Space in bytes to allocate for data
            programId: SystemProgram.programId,
        })
    );

    // Send the transaction to the network
    const txId = await sendAndConfirmTransaction(connection, tx, [payer, dataAccount]);

    console.log(`Created account with transaction ID: ${txId}`);

}

createAccount();
```