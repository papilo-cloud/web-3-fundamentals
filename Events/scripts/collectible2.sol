// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Collectible {
    address owner;
    event Deployed(address _addr);
    event Transfer(address _owner, address _newOwner);
    
    constructor () {
        owner = msg.sender;
        emit Deployed(owner);
    }

    function transfer(address _recipient) external {
        require(msg.sender == owner);
        owner = _recipient;
        emit Transfer(msg.sender, _recipient);
    }
}