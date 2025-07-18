// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Voting {
    struct Proposal {
        address target;
        bytes data;
        uint yesCount;
        uint noCount;
    }

    Proposal[] public proposals;

    function newProposal(address _addr, bytes calldata _data) external {
        Proposal memory proposal = Proposal(_addr, _data, 0, 0);
        proposals.push(proposal);
    }

    function castVote(uint _propId, bool _propBool) external {
        Proposal storage proposal = proposals[_propId];
        _propBool == true ? proposal.yesCount++ : proposal.noCount++;
    }
    
}
