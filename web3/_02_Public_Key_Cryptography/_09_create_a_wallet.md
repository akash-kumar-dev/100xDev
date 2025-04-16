# How to create a wallet

### 

[](#90dee802b87c46ff863ed4d10d4a153f "Mnemonics")Mnemonics

A mnemonic phrase (or seed phrase) is a human-readable string of words used to generate a cryptographic seed. BIP-39 (Bitcoin Improvement Proposal 39) defines how mnemonic phrases are generated and converted into a seed.

Ref - [https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt)

Where this is done in Backpack - [https://github.com/coral-xyz/backpack/blob/master/packages/app-extension/src/components/common/Account/MnemonicInput.tsx#L143](https://github.com/coral-xyz/backpack/blob/master/packages/app-extension/src/components/common/Account/MnemonicInput.tsx#L143)

Code

```javascript
import { generateMnemonic } from 'bip39';

// Generate a 12-word mnemonic
const mnemonic = generateMnemonic();
console.log('Generated Mnemonic:', mnemonic);
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F68d139c4-7cc2-4fcd-90fe-73e4abb5f97e%2FScreenshot_2024-08-09_at_3.50.17_PM.png?table=block&id=430d65ee-b6fa-404a-88b1-e1ecbc507547&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F743f3280-f10a-44fb-9519-4e72d79dfde8%2FScreenshot_2024-08-09_at_3.51.07_PM.png?table=block&id=b1e64923-c09f-4f13-aecb-d7dfb9aa5f17&cache=v2)

Ref - [https://www.youtube.com/shorts/ojBIcnPOk6k](https://www.youtube.com/shorts/ojBIcnPOk6k)

### 

[](#35f29a534e8e4d6486931c4a348f8927 "Seed phrase")Seed phrase

The seed is a binary number derived from the mnemonic phrase.

```javascript
import { generateMnemonic, mnemonicToSeedSync } from "bip39";

const mnemonic = generateMnemonic();
console.log("Generated Mnemonic:", mnemonic);
const seed = mnemonicToSeedSync(mnemonic);
```

Ref - [https://github.com/coral-xyz/backpack/blob/master/packages/secure-background/src/services/svm/keyring.ts#L131](https://github.com/coral-xyz/backpack/blob/master/packages/secure-background/src/services/svm/keyring.ts#L131)

#### 

[](#36eb900d15f0439a855ffd0e9fe73772 "Derivation paths")Derivation paths

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1460affc-075a-4a46-81b8-b120d96abad5%2FScreenshot_2024-08-09_at_6.39.43_PM.png?table=block&id=7768a115-f096-4d85-a3f3-3f4a063a64b3&cache=v2)

*   Derivation paths specify a systematic way to derive various keys from the master seed.

*   They allow users to recreate the same set of addresses and private keys from the seed across different wallets, ensuring interoperability and consistency. (for example if you ever want to port from Phantom to Backpack)

*   A derivation path is typically expressed in a format like `m / purpose' / coin_type' / account' / change / address_index`.

*   `**m**`: Refers to the master node, or the root of the HD wallet.
*   `**purpose**`: A constant that defines the purpose of the wallet (e.g., `44'` for BIP44, which is a standard for HD wallets).
*   `**coin_type**`: Indicates the type of cryptocurrency (e.g., `0'` for Bitcoin, `60'` for Ethereum, `501'` for solana).
*   `**account**`: Specifies the account number (e.g., `0'` for the first account).
*   `**change**`: This is either `0` or `1`, where `0` typically represents external addresses (receiving addresses), and `1` represents internal addresses (change addresses).
*   `**address_index**`: A sequential index to generate multiple addresses under the same account and change path.

```javascript
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

const mnemonic = generateMnemonic();
const seed = mnemonicToSeedSync(mnemonic);
for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`; // This is the derivation path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}
```

Ref SOL - [https://github.com/coral-xyz/backpack/blob/master/packages/secure-background/src/blockchain-configs/solana/config.ts#L38](https://github.com/coral-xyz/backpack/blob/master/packages/secure-background/src/blockchain-configs/solana/config.ts#L38)

[https://github.com/coral-xyz/backpack/blob/master/packages/secure-background/src/services/svm/util.ts#L22](https://github.com/coral-xyz/backpack/blob/master/packages/secure-background/src/services/svm/util.ts#L22)