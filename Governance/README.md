# VOTING CONTRACT
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


