// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "src/Counter.sol";

contract TestCounter is Test {
    Counter c;

    function setUp() public {
        c = new Counter(5);
    }

    function testInc() public {
        c.increment();
        c.increment();
        assertEq(c.count(), 7, "OK");
    }

    function testDec() public {
        c.decrement();
        assertEq(c.count(), 4, "OK");
    }

    function test_Revert_When_DecrementBelowZero() public {
        c.decrement();
        c.decrement();
        c.decrement();
        c.decrement();
        c.decrement();
        
        vm.expectRevert();
        c.decrement(); // this should fail
    }
}
