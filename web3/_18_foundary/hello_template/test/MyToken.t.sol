// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "src/MyToken.sol";

contract TestMyToken is Test {
    MyToken c;
    event Transfer(address indexed from, address indexed to, uint256 amount);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    function setUp() public {
        c = new MyToken();
    }

    function testMint() public {
        c.mint(address(this), 100);
        assertEq(c.balanceOf(address(this)), 100, "ok");
        assertEq(
            c.balanceOf(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f),
            uint256(0),
            "ok"
        );

        c.mint(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f, 100);
        assertEq(
            c.balanceOf(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f),
            100,
            "ok"
        );
    }

    function testTransfer() public {
        c.mint(address(this), 100);
        c.transfer(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f, 50);

        assertEq(c.balanceOf(address(this)), 50);
        assertEq(c.balanceOf(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f), 50);

        vm.prank(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f); // simulate next tx as coming from this address
        c.transfer(address(this), 50);

        assertEq(c.balanceOf(address(this)), 100);
        assertEq(c.balanceOf(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f), 0);
    }

    function testApprovals() public {
        c.mint(address(this), 100);

        c.approve(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f, 10);

        assertEq(c.allowance(address(this), 0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f), 10);
        assertEq(c.allowance(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f, address(this)), 0);

        vm.prank(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f);
        c.transferFrom(
            address(this),
            0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f,
            5
        );

        assertEq(c.balanceOf(address(this)), 95, "ok");
        assertEq(
            c.balanceOf(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f),
            5,
            "ok"
        );
        assertEq(
            c.allowance(
                address(this),
                0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f
            ),
            5
        );
    }

    // function testFailApprovals() public {
    //     c.mint(address(this), 100);
    //     c.approve(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f, 10);

    //     vm.prank(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f);
    //     c.transferFrom(address(this), 0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f, 100);
    // }

    function test_RevertWhen_TransferFromExceedsAllowance() public {
        c.mint(address(this), 100);
        c.approve(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f, 10);

        vm.prank(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f);
        vm.expectRevert(); // ERC20: insufficient allowance
        c.transferFrom(
            address(this),
            0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f,
            100
        );
    }

    // function testFailTransfer() public {
    //     c.mint(address(this), 20);
    //     c.transfer(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f, 100);
    // }

    function test_RevertWhen_TransferExceedsBalance() public {
        c.mint(address(this), 20);

        vm.expectRevert(); // ERC20: transfer amount exceeds balance
        c.transfer(0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f, 100);
    }

    function test_ExpectEmit() public {
        c.mint(address(this), 100);
        // Check that topic 1, topic 2, and data are the same as the following emitted event.
        // Checking topic 3 here doesn't matter, because `Transfer` only has 2 indexed topics.
        vm.expectEmit(true, true, false, true);
        // The event we expect
        emit Transfer(address(this), 0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD, 100);
        // The event we get
        c.transfer(0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD, 100);
    }
    
    function test_ExpectEmitApprove() public {
        c.mint(address(this), 100);
        
        vm.expectEmit(true, true, false, true);
        emit Approval(address(this), 0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD, 100);

        c.approve(0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD, 100);
        vm.prank(0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD);
        c.transferFrom(address(this), 0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD, 100);
    }


}
