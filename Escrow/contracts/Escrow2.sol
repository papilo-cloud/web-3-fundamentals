// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Escrow {
    address public depositor;
    address public beneficiary;
    address public arbiter;

    constructor(address _arbiter, address _beneficiary) {
        depositor = msg.sender;
        arbiter = _arbiter;
        beneficiary = _beneficiary;
    }
}