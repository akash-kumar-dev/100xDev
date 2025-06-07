# System program

Solana contains a small handful of native programs that are part of the validator implementation and provide various core functionalities for the network.

When developing custom programs on Solana, you will commonly interact with two native programs, the `System Program` and the `BPF Loader`.

### 

[](#d57af6450c504a149fe3c3f63a3e8f17 "System program")System program

By default, all new accounts are owned by the [System Program](https://github.com/solana-labs/solana/tree/27eff8408b7223bb3c4ab70523f8a8dca3ca6645/programs/system/src). The System Program performs several key tasks such as:

*   [New Account Creation](https://github.com/solana-labs/solana/blob/27eff8408b7223bb3c4ab70523f8a8dca3ca6645/programs/system/src/system_processor.rs#L145): Only the System Program can create new accounts.

*   [Space Allocation](https://github.com/solana-labs/solana/blob/27eff8408b7223bb3c4ab70523f8a8dca3ca6645/programs/system/src/system_processor.rs#L70): Sets the byte capacity for the data field of each account.

*   [Assign Program Ownership](https://github.com/solana-labs/solana/blob/27eff8408b7223bb3c4ab70523f8a8dca3ca6645/programs/system/src/system_processor.rs#L112): Once the System Program creates an account, it can reassign the designated program owner to a different program account. This is how custom programs take ownership of new accounts created by the System Program.

On Solana, a `wallet` is simply an account owned by the System Program. The lamport balance of the wallet is the amount of SOL owned by the account.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2af07e6c-4289-422f-a015-ad762c09e7fc%2FScreenshot_2024-09-13_at_5.37.33_PM.png?table=block&id=e8baa344-ce99-4de7-97a1-e54c37e6b257&cache=v2)

### 

[](#c4497477c73746b1821fda8a94d7e24c "Using  @solana/web3.js to interact with the System program")Using `@solana/web3.js` to interact with the System program

Create a new account with data and rent

```javascript
const { Keypair, Connection, SystemProgram, Transaction } = require('@solana/web3.js');

const payer = Keypair.fromSecretKey(Uint8Array.from([222,61,190,103,38,70,4,221,24,242,44,86,66,111,102,52,87,41,83,45,166,179,184,79,208,91,20,66,142,36,147,236,30,84,33,77,227,36,159,27,27,53,27,249,230,207,30,83,42,51,3,225,70,41,44,85,54,31,198,80,45,49,208,39]));

const mintAthority = payer;

const connection = new Connection("https://api.devnet.solana.com");
async function main() {
    const newAccount = Keypair.generate();
    const TOTAL_BYTES = 165;
    const lamports = await connection.getMinimumBalanceForRentExemption(TOTAL_BYTES);
    const transaction = new Transaction();
    transaction.add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: newAccount.publicKey,
            lamports: lamports,
            space: TOTAL_BYTES,
            programId: SystemProgram.programId,
        }),
    );

    await connection.sendTransaction(transaction, [payer, newAccount]);
    console.log(`New account created at ${newAccount.publicKey.toBase58()}`);
}

main();
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ffc013295-93c0-4d65-a5ff-43a5c7dedc69%2FScreenshot_2024-09-13_at_5.52.14_PM.png?table=block&id=d3d7c2d5-d2fc-4d64-8174-a363ff9b5df1&cache=v2)

Transfer lamports from your account to another account

```javascript
const { createMint } = require('@solana/spl-token');
const { Keypair, Connection, SystemProgram, Transaction } = require('@solana/web3.js');

const payer = Keypair.fromSecretKey(Uint8Array.from([222,61,190,103,38,70,4,221,24,242,44,86,66,111,102,52,87,41,83,45,166,179,184,79,208,91,20,66,142,36,147,236,30,84,33,77,227,36,159,27,27,53,27,249,230,207,30,83,42,51,3,225,70,41,44,85,54,31,198,80,45,49,208,39]));

const mintAthority = payer;

const connection = new Connection("https://api.devnet.solana.com");
async function main() {
    const newAccount = Keypair.generate();
    const TOTAL_BYTES = 165;
    const lamports = await connection.getMinimumBalanceForRentExemption(TOTAL_BYTES);
    const transaction = new Transaction();
    transaction.add(
        SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: newAccount.publicKey,
            lamports,
        }),
    );

    await connection.sendTransaction(transaction, [payer, newAccount]);
    console.log(`Transferred to  ${newAccount.publicKey.toBase58()}`);
}

main();

```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F4970fd63-b214-4a52-acda-c898f7d9ec10%2FScreenshot_2024-09-13_at_5.51.06_PM.png?table=block&id=80c21458-1488-4928-98a0-94d74c8d78af&cache=v2)

Change the owner of an account

```javascript
const { createMint } = require('@solana/spl-token');
const { Keypair, Connection, SystemProgram, Transaction } = require('@solana/web3.js');

const payer = Keypair.fromSecretKey(Uint8Array.from([222,61,190,103,38,70,4,221,24,242,44,86,66,111,102,52,87,41,83,45,166,179,184,79,208,91,20,66,142,36,147,236,30,84,33,77,227,36,159,27,27,53,27,249,230,207,30,83,42,51,3,225,70,41,44,85,54,31,198,80,45,49,208,39]));

const connection = new Connection("https://api.devnet.solana.com");
async function main() {
    const newAccount = Keypair.generate();
    const owner = Keypair.generate();
    const TOTAL_BYTES = 165;
    const lamports = await connection.getMinimumBalanceForRentExemption(TOTAL_BYTES);
    const transaction = new Transaction();
    transaction.add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: newAccount.publicKey,
            lamports: lamports,
            space: TOTAL_BYTES,
            programId: owner.publicKey,
        }),
    );

    await connection.sendTransaction(transaction, [payer, newAccount]);
    console.log(`New account created at ${newAccount.publicKey.toBase58()}`);
}

main();

```