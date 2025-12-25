## Solidity

https://narrow-area-267.notion.site/Solidity-2c27be336c2f811bbf9ecf763eb7d0ea

### Variables
1. Unsigned Integer
    - uint8, uint16, uint32, ..., uint256

2. Signed Integer
    - int8, int16, int32, ..., int256

3. Booleans
    - bool

4. Address
    - address

5. String

### Constructors
- A special function that is executed only once when the contract is deployed.
- Used to initialize state variables of the contract.
    ```solidity
        contract Calculator {
            uint num = 0;

            constructor(uint initialNum) {
                num = initialNum;
            }
        }
    ```

---

### Functions
- Functions are defined using the `function` keyword followed by the function name and parentheses.
- Functions can have parameters and return types.
    ```solidity
    function add(uint _value) public {
        num += _value;
    }

    function get() public view returns (uint) {
        return num;
    }
    ```
- `view` : Indicates that the function does not modify the state of the contract. no need to spend gas to call this function.
- Visibility Modifiers: public, private, internal, external

---

### Inheritance
- Solidity supports inheritance, allowing contracts to inherit properties and methods from other contracts.

`Vehicle.sol:`

```solidity
    
    contract Vehicle {
        string public brand;

        constructor(string memory _brand) {
            brand = _brand;
        }

        function description() public pure virtual returns (string memory) {
            return "This is Vehicle Class.";
        }
    }
```

Car.sol:

```solidity

    import "./Vehicle.sol";

    contract Car is Vehicle {
        uint public numberOfWheels;

        constructor(string memory _brand, uint _numberOfWheels) Vehicle(_brand) {
            numberOfWheels = _numberOfWheels;
        }

        function description() public pure override  returns (string memory) {
            return "This is a Car Class.";
        }
    }
```

### Require
- The `require` function is used to enforce conditions in Solidity. If the condition is not met, the transaction is reverted, and an optional error message can be provided.
    ```solidity
    function setAge(uint _age) public {
        require(_age >= 18, "Age must be at least 18.");
        age = _age;
    }
    ```

### for Loops
```solidity
function addNumbers(uint256[] memory _numbers) public pure returns (uint) {
    uint sum = 0;
    for (uint i = 0; i < _numbers.length; i++) {
        sum += _numbers[i];
    }
    return sum;
}
```

### if-else
```solidity
function categorizeNumber(uint256 _number) public pure returns (string memory) {
    if (_number < 10) {
        return "Small";
    } else if (_number >= 10 && _number < 100) {
        return "Medium";
    } else {
        return "Large";
    }
}
```

### Mappings
- Mappings are key-value pairs used to store data in Solidity. 
- create a mapping: 
```solidity
mapping(address => uint) public balances;
```
- Insert or update a value:
```solidity
balances[msg.sender] = 100;
```
- Retrieve a value:
```solidity
uint userBalance = balances[msg.sender];
```

Question: Create a User Contract where user can come and signup - mapping with address and names.
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NameRegistry {

    mapping(address => string) public names;

    function setName(string memory _name) public {
        names[msg.sender] = _name;
    }

    function getName(address _address) public view returns (string memory) {
        return names[_address];
    }
}
```
---

### Arrays
- two types of arrays: fixed-size and dynamic-size arrays.
- Fixed-size array: size is defined at the time of declaration and cannot be changed later.(can change values at index)
```solidity
uint[5] public fixedArray; // Fixed-size array of length 5
```

- Dynamic-size array: size can be changed during runtime. (add or remove elements)
```solidity
uint[] public dynamicArray; // Dynamic-size array

function addElement(uint _element) public {
    dynamicArray.push(_element); // Add element to dynamic array
}

function getElement(uint _index) public view returns (uint) {
    return dynamicArray[_index]; // Retrieve element at index
}
```

---

### Structs
- Structs are custom data types that allow you to group related variables together.
```solidity
struct Person {
    string name;
    uint age;
}

Person public person;

function setPerson(string memory _name, uint _age) public {
    person = Person(_name, _age);
}

function getPerson() public view returns (string memory, uint) {
    return (person.name, person.age);
}
```
---

### Memory vs Stacks vs Storage

In Solidity, Memory, Stacks, and Storage are three distinct locations where data can be stored. Each has its own characteristics, use cases, and costs.

1. **Storage**:
   - Persistent storage location on the blockchain.
   - Data stored in storage is permanent and remains even after the function execution ends.
   - More expensive in terms of gas costs compared to memory and stack, beacuse it requires chnages to the blockchain state, which involves network consensus and storage allocation on the blockchain.
   - Used for state variables that need to be retained between function calls.
   - Example:
     ```solidity
     contract Example {
         uint256 public storedData; // Stored in storage

         function set(uint256 x) public {
             storedData = x; // Modifying storage variable
         }
     }
     ```

2. **Memory**:
   - Temporary storage location that exists only during the execution of a function.
   - Data stored in memory is not persistent and is discarded after the function execution ends.
   - Cheaper than storage (because it is not stored on the blockchain and is only kept in node's memory while the function is executing) but more expensive than stack. 
   - Used for function parameters and local variables that do not need to be retained after the function execution.
   - Example:
     ```solidity
     function processData(uint256[] memory data) public pure returns (uint256) {
         uint256 sum = 0;
         for (uint256 i = 0; i < data.length; i++) {
             sum += data[i];
         }
         return sum;
     }
     ```

3. **Stack**:
   - A low-level data structure used for storing small, fixed-size variables.
   - Data stored in the stack is temporary and exists only during the execution of a function.
   - Very cheap in terms of gas costs, as it is used for small, fixed-size data types like integers and booleans.
   - Limited in size (typically 1024 bytes), so it is not suitable for large data structures.
   - Example:
     ```solidity
     function add(uint256 a, uint256 b) public pure returns (uint256) {
         return a + b; // 'a' and 'b' are stored in the stack
     }
     ```

#### Heaps and Stacks
- In heaps, dynamic memory allocation happens, can be incresed or decreased the size during runtime. Example: dynamic arrays, structs, strings.
```
contract StringExample {
    function addStrings(string memory a, string memory b) public pure returns (string memory) {
        string memory result = string(abi.encodePacked(a, b)); // Correct usage
        return result;
    }
}

```
- In stacks, static memory allocation happens, size is fixed during compile time. Example: integers, booleans, fixed-size arrays.
```
// a and b are stored in stack
function addNumbers(int a, uint b) public pure returns (uint) {
    uint result = a + b; // result is stored in memory
    return result;
}
```

---

### Modifiers
- Modifiers are used to change the behavior of functions in a declarative way.
- they are used to add additional checks or logic before or after the execution of a function. Like Middleware in ExpressJS.

`onlyOwner` modifier example:
```solidity
address public owner;

modifier onlyOwner() {
    require(msg.sender == owner);
    _;
}

function restrictedFunction() public onlyOwner {
    // Function logic here
}
```
---

### Returning Tuples
- Solidity allows functions to return multiple values using tuples.
```solidity
function getPerson() public view returns (string memory, uint, bool) {
    return (person.name, person.age, person.isEmployed);
}
```

---

### Pure Functions
- Pure functions are functions that do not read or modify the state of the contract. They only depend on their input parameters and produce the same output for the same input.
- pure functions do not interact with any state variables or external contracts.
```solidity
function multiply(uint a, uint b) public pure returns (uint) {
    return a * b;
}
```

---

### Events
- Events are used to log information on the blockchain. They are useful for tracking contract activity and can be listened to by external applications.
- Events enable smart contracts to emit logs that can be used for debugging, indexing, or triggering external actions based on contract activity.
```solidity
contract EventExample {

    event Transfer(address indexed from, address indexed to, uint amount);
    // indexed - can be used to search all txnx from a specific user later

    // Function that emits the Transfer event
    function transfer(address _to, uint _amount) public {
        // Transfer logic here

        emit Transfer(msg.sender, _to, _amount);
    }
}
```

- Get all Transactions from a specific address:
```JavaScript
const Web3 = require('web3');
const web3 = new Web3("http://localhost:8545");

// Contract ABI and address
const contractAddress = "0xYourContractAddress";
const abi = [
];

// Create a contract instance
const contract = new web3.eth.Contract(abi, contractAddress);

// Listen for the Transfer event
contract.events.Transfer({
    filter: { from: "0xSenderAddress" }, // Optional filtering
    fromBlock: 0
}, (error, event) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Transfer from ${event.returnValues.from} to ${event.returnValues.to} of value ${event.returnValues.value}`);
    }
});

```

- Listen to any new Transactions:
```JavaScript
const ethers = require("ethers");

// Assume you have a provider connected to an Ethereum node
const provider = new ethers.JsonRpcProvider("http://localhost:8545");

// Contract ABI and address
const contractAddress = "0xYourContractAddress";
const abi = [
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "function transfer(address to, uint256 value) public"
];

// Create a contract instance
const contract = new ethers.Contract(contractAddress, abi, provider);

// Listen for the Transfer event
contract.on("Transfer", (from, to, value) => {
  console.log(`Transfer from ${from} to ${to} of value ${value}`);
});
```
---

### Extrenal Contracts
- Solidity allows you to interact with other contracts by importing their interfaces or ABIs.
```solidity
import "OpenZeppelin/contracts/access/Ownable.sol";

contract Calculator is Ownable {
    constructor() ownable(msg.sender) {

    }

    function add(uint a, uint b) public onlyOwner view returns (uint) {
        return a + b;
    }
}
```
