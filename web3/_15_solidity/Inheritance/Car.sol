// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

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