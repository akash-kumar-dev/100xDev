## Ganache, Trufle, Hardhat and Foundry

### Ganache
- used for starting/creating a local blockchain for Ethereum development for testing.
- similar to `solana-test-validator` that lets us start solana locally.

### Truffle
- A development environment, testing framework and asset pipeline for Ethereum.
- similar to `Anchor` framework for Solana.

Both Ganache and Truffle are deprecated in favor of Hardhat and Foundry.

### Hardhat
- Ethereum development environment for professionals.

### Foundry ***
- Ethereum development framework written in Rust.
it has 4 parts:
  - Forge: smart contract development tool.
  - Cast: command line tool for interacting with Ethereum.
  - Anvil: local Ethereum node, similar to Ganache.
  - Chisel: IDE extension for Solidity development.


init Foundry project:

```bash
forge init --template https://github.com/foundry-rs/forge-template hello_template
```
