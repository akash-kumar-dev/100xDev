// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

contract CustomToken {
    address public owner;
    uint public totalSuplly;
    mapping (address => uint) public balances;
    mapping (address => mapping (address => uint)) public allowances;
    string public name = "MyCustomToken";
    string public symbol = "MT";
    uint public decimals = 6;

    constructor() {
        owner = msg.sender;
    }

    function mint(uint amount) public {
        require(msg.sender == owner);
        balances[owner] += amount;
        totalSuplly += amount;
    }

    function mintTo(uint amount, address to) public {
        require(msg.sender == owner);
        balances[to] += amount;
        totalSuplly += amount;
    }

    function transfer(uint amount, address to) public {
        uint existingBalance = balances[msg.sender];
        require(existingBalance >= amount, "You don't have enough balance.");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function burn(uint amount) public {
        uint balance = balances[msg.sender];
        require(balance >= amount);
        balances[msg.sender] -= amount;
        totalSuplly -= amount;
    }

    function approve(address _spender, uint _value) public returns (bool success) {
        allowances[msg.sender][_spender] = _value;
        return true;
    }

    function transferFrom(address _from, address _to, uint _value) public returns (bool success) {
        uint allowance = allowances[_from][msg.sender];
        require(allowance >= _value);

        uint balance = balances[_from];
        require(balance >= _value);

        balances[_from] -= _value;
        balances[_to] += _value;
        allowances[_from][msg.sender] -= _value;
    }
}