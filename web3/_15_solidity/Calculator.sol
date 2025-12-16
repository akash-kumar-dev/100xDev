// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract Calculator {
    uint num = 0;

    constructor(uint _initialNum) {
        num = _initialNum; // Set initial value
    }

    function add(uint _value) public {
        num += _value;
    }

    function subtract(uint _value) public {
        num -= _value;
    }

    function multiply(uint _value) public  {
        num *= _value;
    }

    function divide(uint _value) public {
        require(_value != 0, "Value can not be 0.");
        num /= _value;
    }

    function get() public view returns (uint) {
        return num;
    }
}