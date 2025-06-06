# Actually minting the tokens

Ref - [https://github.com/100xdevs-cohort-3/week-6-web3-token-launchpad/tree/main/5-token-launchpage-with-metadata-and-mint](https://github.com/100xdevs-cohort-3/week-6-web3-token-launchpad/tree/main/5-token-launchpage-with-metadata-and-mint)

Finally, lets write the logic to actually mint the tokens

1.  Find the associated token account

2.  mint the tokens to the ata

```javascript
 const associatedToken = getAssociatedTokenAddressSync(
    mintKeypair.publicKey,
    wallet.publicKey,
    false,
    TOKEN_2022_PROGRAM_ID,
);

console.log(associatedToken.toBase58());

const transaction2 = new Transaction().add(
    createAssociatedTokenAccountInstruction(
        wallet.publicKey,
        associatedToken,
        wallet.publicKey,
        mintKeypair.publicKey,
        TOKEN_2022_PROGRAM_ID,
    ),
);

await wallet.sendTransaction(transaction2, connection);

const transaction3 = new Transaction().add(
    createMintToInstruction(mintKeypair.publicKey, associatedToken, wallet.publicKey, 1000000000, [], TOKEN_2022_PROGRAM_ID)
);

await wallet.sendTransaction(transaction3, connection);
```
