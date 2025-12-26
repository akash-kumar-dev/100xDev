// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

interface IStorage {
    function getNum() external  view returns (uint);
    function add() external;
}

contract Contract2 {

    constructor() {

    }

    function proxyAdd() public {
        IStorage(0xd9145CCE52D386f254917e481eB44e9943F39138).add();
    }

    function proxyGet() public view returns (uint) {
        return IStorage(0xd9145CCE52D386f254917e481eB44e9943F39138).getNum();
    }
}