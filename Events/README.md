# EVENTS
## 1: Deployed
### Your Goal: Deployed Event
1. Create a new `event` called `Deployed`. This event should take one argument: an `address`.
1. This address will be the first **owner** of this collectible. The owner in this case will be the address that deployed the contract.
1. Create a public `constructor`. In this constructor, emit the `Deployed` event with the owner's address as the argument.

## 2: Transfer
### Your Goal: Transfer the Collectible
1. Create a new event called `Transfer` which has two `address` parameters: the original owner and the new owner.
1. Create an external function called transfer which takes a recipient `address` to send the collectible to. In this function, `transfer` the ownership of the collectible to the recipient.
1. Then, emit the `Transfer` event with the original owner's address and the new owner's address as arguments (be sure to specify the event arguments in that order).
1. Ensure that the person calling this function **is the current owner** of the collectible. Otherwise, revert the transaction.