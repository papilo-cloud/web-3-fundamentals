// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Voting {
    enum Choice { NotDecided, Yes, No }
    struct Proposal {
        address target;
        bytes data;
        uint yesCount;
        uint noCount;
        mapping(address => Choice) choice;
    }

    Proposal[] public proposals;

    event ProposalCreated(uint id);
    event VoteCast(uint id, address voter);

    function newProposal(address _addr, bytes calldata _data) external {
        emit ProposalCreated(proposals.length);
        Proposal storage proposal = proposals.push();
        proposal.target = _addr;
        proposal.data = _data;

    }

    function castVote(uint _propId, bool _propBool) external {

        Proposal storage proposal = proposals[_propId];

        if(proposal.choice[msg.sender] == Choice.Yes) {
            proposal.yesCount--;
        }
        if(proposal.choice[msg.sender] == Choice.No) {
            proposal.noCount--;
        }

        _propBool == true ? proposal.yesCount++ : proposal.noCount++;
        proposal.choice[msg.sender] = _propBool ? Choice.Yes : Choice.No;

        emit VoteCast(_propId, msg.sender);
    }
}