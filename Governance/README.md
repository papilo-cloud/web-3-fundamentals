# VOTING CONTRACT

In this tutorial we're going to build a voting contract! We'll use the lessons learned here to understand how the Governor standard emerged 

## 1: Proposal
### Proposal Storage 
In this stage we're going to focus on the storage of new proposals.

A proposal should keep track of a question `"Should we elect Abraham as mayor?"`, the creator address, and the count of yes/no votes on the prposal.

### Your Goal: Proposals
1. Create a public array of type `Proposal` and call it `proposals`.
2. Create an external function `newProposal` which takes two arguments:
    - An `address` argument which will be the target address of the proposal. We'll send some calldata to this address.
    - A `bytes` argument which will be the calldata to eventually send to the smart contract when the proposal is executed.
3. In the `newProposal` function create a new `Proposal` with the arguments passed in and the yes/no vote counts are initialized at 0.
Add the new `Proposal` to the `proposals` array.


## 2: Cast a Vote
### Voting 
Now that we have proposals with vote counts, it's time to create voting functionality!

### Your Goal: Cast Vote
1. Create an external function `castVote` which takes a `uint` proposalId and a `bool` which indicates whether the vote supports the proposal (`true` for yes, `false` for no).
2. For each vote cast, update the `yesCount` and `noCount` in the referenced proposal accordingly.
> Don't worry about double votes for the moment, we'll get to that in the next stage!


## 3: Multiple Votes
### Multiple Votes
We need to handle the case where an address **votes twice**. 

One potential way to handle this is to prevent voters from voting twice. However, what if they want to change their vote? 

Let's allow voters to change their vote. Adding this functionality will require that we account for the vote change in the vote counts. This means that if the address previously voted yes and switched to no, we'll want to decrement the yesCount and increment the noCount. And vice-versa!

### Your Goal: Vote Changing
Modify the `castVote` function to allow voters to change their vote on a particular proposal.
> The implementation of this is up to you! You'll need to figure out a new way to track which **addresses** have already voted on which proposal.


## 4: Voting Events
### Events
We'll want to make it easy for the user interface to subscribe to new proposal and voting events! 

Let's add some new events so we can listen closely. 

### Your Goal: Proposal Created & Vote Cast Events
1. Create an event `ProposalCreated` which takes a single argument: a `uint` proposal ID. Emit this event whenever a new `Proposal` struct is created.
2. Create an event `VoteCast` which takes two arguments: a `uint` proposal ID and an `address` for the voter's address. Emit this event any time a new vote is cast.


## 5: Members
### Voting Members
It's important for us to maintain a list of voting members.

After all, it's relatively easy for anyone to make hundreds of Ethereum addresses very quickly and vote with each of these addresses. The only thing stopping them is gas and effort! 

> When a single person operates many accounts it is known as a `Sybil` attack. Any system that is setup to handle this is known to be `sybil` resistant.

### Your Goal: Members
Create a public `constructor` which takes an array of `address`. These addresses, plus the deployer of the function, should all be allowed to create new proposals and vote on those proposals.
If anyone else attempts to create a proposal or vote, the transaction should be reverted.


## 6: Execute
### Execute Vote
In smart contract governance systems there is usually some minimum voting participation that must be reached before a proposal can be executed. Most governance systems today use coin voting, where the number of voting ERC20 tokens you hold decide your vote weight.

### Your Goal: Execute
Let's make our minimum voting threshold be 10 participants. Once 10 members have voted yes on a proposal, execute it.

1. Update the `castVote` function to execute the proposal when the 10 yes votes have been registered.
2. Execute the vote by sending the `data` to the `target` address via the `call` syntax.
> You should make sure that the proposal has not already been executed.