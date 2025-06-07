# Program derived addresses

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ffc9ec62d-8dd7-4d60-a246-ea6bb546408e%2FScreenshot_2024-09-13_at_7.12.22_PM.png?table=block&id=2ed38db8-b55e-438b-a2f2-5c9d2f7b0bc6&cache=v2)

Ref - [https://solana.com/docs/core/pda](https://solana.com/docs/core/pda)

Video - [https://www.youtube.com/watch?v=p0eD29d8JCM](https://www.youtube.com/watch?v=p0eD29d8JCM)

Program Derived Addresses (PDAs) provide developers on Solana with two main use cases:

*   **Deterministic Account Addresses**: PDAs provide a mechanism to deterministically derive an address using a combination of optional "seeds" (predefined inputs) and a specific program ID.

*   **Enable Program Signing**: The Solana runtime enables programs to "sign" for PDAs which are derived from its program ID.

### 

[](#2630de352a694fdebf99df0a55f95207 "Properties")Properties

*   PDAs are addresses derived deterministically using

*   a combination of user-defined seeds
*   a bump seed
*   and a program's ID.

*   PDAs are addresses that fall off the Ed25519 curve and have no corresponding private key.

*   Solana programs can programmatically "sign" for PDAs that are derived using its program ID.

*   Deriving a PDA does not automatically create an on-chain account.

*   An account using a PDA as its address must be explicitly created through a dedicated instruction within a Solana program.

### 

[](#d7b9c8c830bd41fea82a9f898a1fb10d "Find the associated token account for a user and a mint")Find the associated token account for a user and a mint

```javascript
const { PublicKey } = require('@solana/web3.js');
const { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } = require('@solana/spl-token');

// Replace these with your actual values
const userAddress = new PublicKey('5gjLjKtBhDxWL4nwGKprThQwyzzNZ7XNAVFcEtw3rD4i');
const tokenMintAddress = new PublicKey('6NeR2StEEb6CP75Gsd7ydbiAkabdriMdixPmC2U9hcJs');

// Derive the associated token address
const getAssociatedTokenAddress = (mintAddress, ownerAddress) => {
    return PublicKey.findProgramAddressSync(
        [
            ownerAddress.toBuffer(),
            TOKEN_PROGRAM_ID.toBuffer(),
            mintAddress.toBuffer(),
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
    );
};

const [associatedTokenAddress, bump] = getAssociatedTokenAddress(tokenMintAddress, userAddress);
console.log(`Associated Token Address: ${associatedTokenAddress.toBase58()}, bump: ${bump}`);

```

`createProgramAddress` vs `findProgramAddress`

```javascript
const { PublicKey } = require('@solana/web3.js');
const { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } = require('@solana/spl-token');

const PDA = PublicKey.createProgramAddressSync(
  [userAddress.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), tokenMintAddress.toBuffer(), Buffer.from([255])],
  ASSOCIATED_TOKEN_PROGRAM_ID,
);
 
console.log(`PDA: ${PDA}`);
```