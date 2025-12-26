### Interfaces, CCIs, and Payable in ETH

## CCI (Cross-Contract Invocation)
- A cross-contract call refers to a scenario where one smart contract intreacts with another smart contract by invoking its functions.
- This is a fundamental concept in blockchain development, enabling modularity and reusability of code across different contracts.

#### Interfaces
- Interfaces in Solidity is a way to define a contract's external functions without providing their implementation.
- commonly used to interact with already deployed contracts, enabling modularity and upgradability.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessagContract {
    string private message;

    // Set a new message
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    // Retrieve the stored message
    function getMessage() public view returns (string memory) {
        return message;
    }
}
```
Interface and CCI implementation for the above contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IMessageContract {
    function setMessage(string memory newMessage) external;
    function getMessage() external view returns (string memory);
}

contract ParentContract {
    address private contractAAddress;

    constructor(address _contractAAddress) {
        contractAAddress = _contractAAddress;
    }

    function setMessageFromOtherContract(string memory newMessage) public {
        IMessageContract(contractAAddress).setMessage(newMessage);
    }

    // Get the message from Contract A
    function getMessageFromOtherContract() public view returns (string memory) {
        return IMessageContract(contractAAddress).getMessage();
    }
}

```

## Payables
- In Solidity, payables refer to functions or addresses that are capable of receiving Ether (ETH) Transfers.
- Solidity is Ethereum's programming language, and Ether is the native cryptocurrency of the Ethereum network.
- The `payable` keyword is used to indicate that a function or an address can accept Ether sent to it.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    uint public amount;

    function deposit() public payable {
        amount += msg.value;
    }

    function withdraw(address payable recipient) public {
        payable(recipient).transfer(amount);
        amount = 0;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
```