// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Escrow {
    address public depositor;
    address public beneficiary;
    address public arbiter;
    bool public isApproved;

    constructor(address _arbiter, address _beneficiary) payable {
        depositor = msg.sender;
        arbiter = _arbiter;
        beneficiary = _beneficiary;
    }

    function approve() external {
        require(msg.sender == arbiter, "Not the arbiter");
        (bool sent, ) = beneficiary.call{value: address(this)}("");
        require(sent);
        
        isApproved = true;
    }
}