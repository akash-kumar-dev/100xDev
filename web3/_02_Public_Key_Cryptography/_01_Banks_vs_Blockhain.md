# Banks vs Blockchains

### 

[](#80ed941d07e949e88baf7c0f4605279f "Goal of today’s class - ")Goal of today’s class -

1.  Create a simple web based wallet.

2.  Look at the codebase of some wallets to see how they generate private keys

### 

[](#a815184bad5a491abbb27ecaa988f6b7 "How banks do Auth")How banks do Auth

In traditional banks, you have a `username` and `password` that are enough for you to

1.  Look at your funds

2.  Transfer funds

3.  Look at your existing transactions

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fba23f265-1543-448d-8f2c-d52986bd09a0%2FScreenshot_2024-08-09_at_8.23.23_AM.png?table=block&id=0f101c44-5fee-45e8-a1e8-f2db9661a518&cache=v2)

### 

[](#9d37181e35344f4a8ca275ec50e1b3b0 "How Blockchains do auth")How Blockchains do auth

If you ever want to create an `account` on a blockchain, you need to generate a `public-private` keypair.

#### 

[](#182036b1969b4cb5877337960e258eda "Public private Keypair")Public private Keypair

A public-private key pair is a set of two keys used in `asymmetric cryptography`. These two keys have the following characteristics:

**Public Key**: The public key is a string that can be shared openly.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7c2334e0-2dd1-47a7-ae62-123483a0ff20%2FScreenshot_2024-08-09_at_9.04.15_AM.png?table=block&id=62bcfb5e-7425-4afd-8ab8-9ff405edacfc&cache=v2)

For example - [https://etherscan.io/address/0xD9a657ACB3960DB92AaaA32942019bD3c473FCCB](https://etherscan.io/address/0xD9a657ACB3960DB92AaaA32942019bD3c473FCCB)

**Private key:** The private key is a secret string that must be kept confidential.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Faccdce45-cf54-42c0-9b67-3ede4a3d699b%2FScreenshot_2024-08-09_at_9.03.46_AM.png?table=block&id=35c174f2-4bc0-4ad1-b22c-0b849e775dfa&cache=v2)