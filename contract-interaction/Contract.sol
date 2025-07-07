// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.20;

contract Contract {
    
    uint public value;
    address owner;
    string public message;

    mapping (address => uint) balances;

    constructor (uint _value) {
        value = _value;
        owner = msg.sender;
        balances[msg.sender] += 1000;
    }

    function deposit() payable external { }

    function modify(string calldata _message) external {
        require(msg.sender != owner, "Owner cannot modify the message!");
        message = _message;
    }

    function transfer(address beneficiary, uint amount) external {
        require(balances[msg.sender] >= amount, "Balance too low!");
        balances[beneficiary] += amount;
        balances[msg.sender] -= amount;
    }
}