// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Collectible {
    address owner;
    event Deployed(address _addr);

    constructor () {
        owner = msg.sender;
        emit Deployed(owner);
    }
}