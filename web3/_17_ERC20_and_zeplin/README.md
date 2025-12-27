# ERC-20 Token Standard and Zeppelin

## ERC-20 Token Standard
[ERC-20: Token Standard](https://eips.ethereum.org/EIPS/eip-20)

ERC-20 is a technical standard used for smart contracts on the Ethereum blockchain for implementing tokens. It defines a common list of rules that an Ethereum token must implement, allowing developers to create interoperable tokens that can be easily exchanged and integrated with various platforms and services.

custom Token contract without ERC-20 standard:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Token {
    string public name = "CustomToken";
    uint public supply = 0;
    address public owner;
    mapping(address => uint) public balances;

    constructor() {
        owner = msg.sender;
    }

    function mintTo(address to, uint amount) public {
        require(msg.sender == owner);
        balances[to] += amount;
        supply += amount;
    }

    function transfer(address to, uint amount) public {
        uint balance = balances[msg.sender];
        require(balance >= amount, "You dont have enough baance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function burn(uint amount) public {
        uint balance = balances[msg.sender];
        require(balance >= amount, "You dont have enough baance");
        balances[msg.sender] -= amount;
        supply -= amount;
    }
}
```

## Allowance:
Allowance is a mechanism in the ERC-20 standard that allows a token holder to authorize another address (the spender) to spend a specified amount of tokens on their behalf. This is useful for scenarios where a user wants to delegate spending power to another contract or user without transferring ownership of the tokens.

without ERC-20 standard:

```solidity
mapping(address => mapping(address => uint)) public allowance;

event Transfer(address indexed from, address indexed to, uint256 value);
event Approval(address indexed owner, address indexed spender, uint256 value);

function allow(address to, uint amount) public {
    allowance[msg.sender][to] = amount;
    emit Approval(msg.sender, to, amount);
}

function transferFrom(address from, address to, uint amount) public {
    uint balance = balances[from];
    require(balance >= amount);

    uint currentAllowance = allowance[from][msg.sender];
    require(currentAllowance >= amount);

    balances[from] -= amount;
    balances[to] += amount;
    allowance[from][msg.sender] -= amount;

    emit Transfer(from, to, amount);
}
```

## ERC-20 Specification

**totalSupply()**  
Returns the total number of tokens in circulation (the total supply of the token).

**balanceOf(address account)**  
Returns the balance of tokens held by a specific address (account).

**transfer(address recipient, uint256 amount)**  
Transfers a specified number of tokens (amount) from the caller's account to the recipient address. This function returns true if the transfer is successful.

**allowance(address owner, address spender)**  
Returns the amount of tokens that the spender is allowed to transfer on behalf of the owner based on the allowance previously set by the owner using the approve() function.

**approve(address spender, uint256 amount)**  
Approves the spender to spend up to a specified number of tokens (amount) from the caller's account. This creates an "allowance" that the spender can use with the transferFrom() function.

**transferFrom(address sender, address recipient, uint256 amount)**  
Allows the spender (who must have been approved by the sender) to transfer tokens from the sender's account to the recipient's account.

**Minting and Burning logic:**
- The ERC-20 standard only defines the basic fucntions and events that a token contract must implement to ensure interoperability across different platforms (wallets, exchanges, etc.), such as transferring tokens, checking balances, and setting allowances.
- Minting (creating new tokens) and burning (destroying tokens) are not part of the core ERC-20 standard but are commonly implemented in token contracts to manage the total supply of tokens.

How to mint/launch a token:
- Initial Coin Offering (ICO)
- Airdrops
- Fair Launch
- Token Vesting/ Token Unlocking

Implementation of ERC-20 Example: [openzeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol)

Example: 

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KiratCoin is ERC20, Ownable {

    constructor() ERC20("MyMintableToken", "MMT") Ownable(msg.sender) {
        _mint(msg.sender, 1000000000);
    }

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }
}
```