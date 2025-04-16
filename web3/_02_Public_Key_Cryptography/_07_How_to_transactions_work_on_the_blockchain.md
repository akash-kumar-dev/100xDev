# How to transactions work on the blockchain?

Ref - [https://andersbrownworth.com/blockchain/](https://andersbrownworth.com/blockchain/)

### 

[](#4989648744914bff8a4cff55981d8d26 "User side")User side

1.  User first creates a `public/private` keypair

2.  They create a `transaction` that they want to do (send Rs 50 to Alice). The transaction includes all necessary details like the recipient's address, the amount and some blockchain specific parameters (for eg - latestBlockHash in case of solana)

3.  They hash the `transaction`

4.  They `sign` the transaction using their private key

5.  They send the `raw transaction` , `signature` and their `public key` to a node on the blockchain.

#### 

[](#6e3db36b963b40e797abb7c52e3a397e "Miner")Miner

1.  Hashes the original message to generate a `hash`

2.  Verifies the `signature` using the users `public key` and the `hash` generated in step 1

3.  Transaction validation - The miner/validator checks additional aspects of the transaction, such as ensuring the user has sufficient funds

4.  If everything checks out, adds the transaction to the block