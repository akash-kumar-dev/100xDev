# Equivalent code in JS

Create a new cli wallet

```javascript
solana-keygen new
```

Set the RPC url

```javascript
solana config set --url https://api.devnet.solana.com
```

Create an empty JS file

```javascript
 npm init -y
 touch index.js
```

Install dependencies

```javascript
npm install @solana/web3.js @solana/spl-token
```

Write a function to airdrop yourself some solana

```javascript
const {Connection, LAMPORTS_PER_SOL, clusterApiUrl, PublicKey} = require('@solana/web3.js');

const connection = new Connection(clusterApiUrl('devnet'));

async function airdrop(publicKey, amount) {
    const airdropSignature = await connection.requestAirdrop(new PublicKey(publicKey), amount);
    await connection.confirmTransaction({signature: airdropSignature})
}

airdrop("GokppTzVZi2LT1MSTWoEprM4YLDPy7wQ478Rm3r77yEw", LAMPORTS_PER_SOL).then(signature => {
    console.log('Airdrop signature:', signature);
});
```

Check your balance

```javascript
solana balance
```

Create token mint

```javascript
const { createMint } = require('@solana/spl-token');
const { Keypair, Connection, clusterApiUrl,  TOKEN_PROGRAM_ID } = require('@solana/web3.js');

const payer = Keypair.fromSecretKey(Uint8Array.from([102,144,169,42,220,87,99,85,100,128,197,17,41,234,250,84,87,98,161,74,15,249,83,6,120,159,135,22,46,164,204,141,234,217,146,214,61,187,254,97,124,111,61,29,54,110,245,186,11,253,11,127,213,20,73,8,25,201,22,107,4,75,26,120]));

const mintAthority = payer;

const connection = new Connection(clusterApiUrl('devnet'));

async function createMintForToken(payer, mintAuthority) {
    const mint = await createMint(
        connection,
        payer,
        mintAuthority,
        null,
        6,
        TOKEN_PROGRAM_ID
    );
    console.log('Mint created at', mint.toBase58());
    return mint;
}

async function main() {
    const mint = await createMintForToken(payer, mintAthority.publicKey);
}

main();
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7fd32bfe-7cd1-4a76-9428-c3e5c58aa363%2FScreenshot_2024-08-23_at_4.44.15_PM.png?table=block&id=32de1c4f-c8dc-47b2-871c-bdda598958ca&cache=v2)
Verify token mint on chain

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc536405d-3af7-4272-8eec-d9df090d7c1c%2FScreenshot_2024-08-23_at_4.42.55_PM.png?table=block&id=1c75867d-18bb-4b0e-b98d-d03fca9fce5a&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3df62954-78fb-49fc-bde6-2cb1297b7ec4%2FScreenshot_2024-08-23_at_4.58.03_PM.png?table=block&id=f689e888-c545-441e-b2a1-94d99f978204&cache=v2)

*   Check the token on solana fm [https://solana.fm/address/ChNkv9iW5pZJ1YAsNswC2CrdMUkFJBUbRWinjdLvKpXA/transactions?cluster=devnet-solana](https://solana.fm/address/ChNkv9iW5pZJ1YAsNswC2CrdMUkFJBUbRWinjdLvKpXA/transactions?cluster=devnet-solana)

*   Use the `getAccountInfo` to see the `data` and `lamports` in the account

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Facb8eded-aa54-4fb2-ad5d-07b4e6de37f0%2FScreenshot_2024-08-23_at_4.58.42_PM.png?table=block&id=469a26ac-e0ce-4a60-9cbf-416a9f760ad0&cache=v2)

Create an associated token account, mint some tokens

```javascript
const { createMint, getOrCreateAssociatedTokenAccount, mintTo } = require('@solana/spl-token');
const { Keypair, Connection, clusterApiUrl,  TOKEN_PROGRAM_ID, PublicKey } = require('@solana/web3.js');

const payer = Keypair.fromSecretKey(Uint8Array.from([102,144,169,42,220,87,99,85,100,128,197,17,41,234,250,84,87,98,161,74,15,249,83,6,120,159,135,22,46,164,204,141,234,217,146,214,61,187,254,97,124,111,61,29,54,110,245,186,11,253,11,127,213,20,73,8,25,201,22,107,4,75,26,120]));

const mintAthority = payer;

const connection = new Connection(clusterApiUrl('devnet'));

async function createMintForToken(payer, mintAuthority) {
    const mint = await createMint(
        connection,
        payer,
        mintAuthority,
        null,
        6,
        TOKEN_PROGRAM_ID
    );
    console.log('Mint created at', mint.toBase58());
    return mint;
}

async function mintNewTokens(mint, to, amount) { 
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        payer,
        mint,
        new PublicKey(to)
      );

      console.log('Token account created at', tokenAccount.address.toBase58());
      await mintTo(
        connection,
        payer,
        mint,
        tokenAccount.address,
        payer,
        amount
      )
      console.log('Minted', amount, 'tokens to', tokenAccount.address.toBase58());
}

async function main() {
    const mint = await createMintForToken(payer, mintAthority.publicKey);
    await mintNewTokens(mint, mintAthority.publicKey, 100);    
}

main();
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F082a2826-1226-4896-91d0-a8e7cac71916%2FScreenshot_2024-08-23_at_5.18.14_PM.png?table=block&id=c4d4f041-ba5c-4e77-845f-80ab4a5d28ea&cache=v2)
Check your balances in the explorer

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe6573e13-5780-44cf-914a-ffd637cc1ced%2FScreenshot_2024-08-23_at_5.20.41_PM.png?table=block&id=465ccf19-7364-4b35-9410-c6e00b61c364&cache=v2)

Import the token in Phantom and see the balances

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5049782a-d22b-4e2b-8039-82cf01c1aa5c%2FScreenshot_2024-08-23_at_5.22.13_PM.png?table=block&id=b0e28e5a-9848-46f6-b232-125c8bcdef3e&cache=v2)