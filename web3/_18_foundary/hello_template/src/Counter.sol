// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract Counter {
    uint public count;

    constructor(uint _num) {
        count = _num;
    } 

    function increment() public {
        count += 1;
    }

    function decrement() public {
        count -= 1;
    }
}
