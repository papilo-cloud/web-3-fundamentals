// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Collectible {
    address owner;
    uint price;

    event Deployed(address indexed _addr);
    event Transfer(address indexed _owner, address indexed _newOwner);
    event ForSale(uint indexed, uint indexed);
    event Purchase(uint indexed, address indexed);
    
    constructor () {
        owner = msg.sender;
        emit Deployed(owner);
    }

    function transfer(address _recipient) external {
        require(msg.sender == owner);
        owner = _recipient;
        emit Transfer(msg.sender, _recipient);
    }

    function markPrice(uint _price) external {
        require(msg.sender == owner);
        price = _price;
        emit ForSale(_price, block.timestamp);
    }

    function purchase() external payable {
        uint amount = msg.value;

        require(amount == price);
        require (amount > 0);
        
        (bool sent, ) = owner.call{value: amount}("");
        require(sent);
        price = 0;
        owner = msg.sender;
        emit Purchase(amount, msg.sender);
    }
}