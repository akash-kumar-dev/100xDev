# **Hierarchical Deterministic (HD) Wallet**

Hierarchical Deterministic (HD) wallets are a type of wallet that can generate a tree of key pairs from a single seed. This allows for the generation of multiple addresses from a single root seed, providing both security and convenience.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb2ea8c0f-e0d8-41d5-8caf-1f0305f89eb7%2FScreenshot_2024-08-09_at_6.39.43_PM.png?table=block&id=64d200a7-cdb2-46e5-a1cc-51b63a4d6ac5&cache=v2)

#### 

[](#4320e82e7c1445dd98d3c1445e0c2f21 "Problem ")Problem

You have to maintain/store multiple `public private` keys if you want to have multiple wallets.

#### 

[](#8a615cfc9a4a49f6a40c6fb5746f09a6 "Solution - BIP-32")**Solution - BIP-32**

[Bitcoin Improvement Proposal](https://www.ledger.com/academy/what-is-a-bitcoin-improvement-proposal-bip) 32 (BIP-32) provided the solution to this problem in 2012. It was proposed by Pieter Wuilla, a Bitcoin Core developer, to simplify the recovery process of crypto wallets. BIP-32 introduced a hierarchical tree-like structure for wallets that allowed you to manage multiple accounts much more easily than was previously possible. It’s essentially a standardized way to derive private and public keys from a master seed.