## Ethereum
Ethereum is a decentralized platform that enables developers to build and deploy smart contracts and decentralized applications (dApps). It uses a blockchain to maintain a secure and transparent ledger of transactions.

#### World State
In Ethereum, the world state is a mapping of addresses to account states. Each account state contains information such as the account's balance, nonce, storage root, and code hash. The world state is stored in a Merkle Patricia Trie, which allows for efficient verification of the state.

#### Types of Accounts on ETH
There are two types of accounts in Ethereum:
1. Externally Owned Accounts (EOAs): These are accounts controlled by private keys.
2. Contract Accounts: These are accounts that contain smart contract code and are controlled by the code itself.`

#### Ethereum Virtual Machine (EVM)
The Ethereum Virtual Machine (EVM) is a runtime environment for executing smart contracts on the Ethereum blockchain. It is a stack-based virtual machine that executes bytecode compiled from high-level programming languages like Solidity. The EVM is designed to be Turing-complete, allowing for complex computations and logic to be executed on the blockchain.

EVM is conseptually similar to the Java Virtual Machine (JVM) in that both are virtual machines that execute code in a platform-independent manner.

#### Solidity
Solidity is a high-level programming language specifically designed for writing smart contracts on the Ethereum platform. It is statically typed and supports features such as inheritance, libraries, and complex user-defined types. Solidity code is compiled into EVM bytecode, which can then be deployed and executed on the Ethereum blockchain.

#### ABIS (Application Binary Interfaces), Bytecode, Opcodes
- **Opcodes**: Opcodes are low-level instructions that the EVM can execute. Each opcode corresponds to a specific operation, such as arithmetic operations, data manipulation, and control flow. The EVM has a defined set of opcodes that are used to perform various tasks within smart contracts.
- **Bytecode**: Bytecode is the compiled version of a smart contract written in a high-level language like Solidity. It consists of a sequence of opcodes that the EVM can interpret and execute. When a smart contract is deployed on the Ethereum blockchain, it is stored as bytecode.
- **ABIs (Application Binary Interfaces)**: ABIs define the interface between smart contracts and external applications. They specify how to encode and decode data when interacting with smart contracts, including function signatures and event definitions. ABIs are essential for developers to interact with deployed smart contracts using tools like web3.js or ethers.js.

#### Transactions Object
- **To**: Address of the recipient account (EOA or contract).
- **DATA**: Input data for the transaction, often used to specify function calls and parameters for smart contracts.
- **Gas Limit**: The maximum amount of gas the sender is willing to spend on the transaction.
- **Gas Price**: The amount of Ether the sender is willing to pay per unit of gas.
- **Value**: The amount of Ether to be transferred to the recipient account.
- **Nonce**: A counter that ensures each transaction can only be processed once.