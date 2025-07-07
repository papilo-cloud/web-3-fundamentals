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

## 3: Up For Sale
###  Your Goal: Mark the Price
1. Create a new event called `ForSale` which takes two `uint` parameters: the price and the current block timestamp.
2. Create a new external function called `markPrice` which has a single `uint` parameter: the asking price.
3. Inside the `markPrice` function, emit the `ForSale` event with the price and block timestamp as its arguments. *HINT: `block.timestamp` is a global variable*
### Function Security
Ensure that the person calling this function **is the current owner** of the collectible. Otherwise, revert.

## 4: Sale
###  Your Goal: Make a Purchase!
1. Create an event called `Purchase` which takes two arguments: a `uint` for the purchase amount, and an `address` for the buyer.
2. Create an external, payable function `purchase` which allows a buyer to purchase the collectible at the asking price.
3. To make this purchase happen you'll need to do 3 things:
    - Transfer the `msg.value` to the seller.
    - Transfer the ownership to the buyer.
    - Mark the collectible as not for sale any longer.
    - Emit a Purchase event.

**Reminder** - To send ether, you can use the `.call` syntax. Let's say we're trying to send the `msg.value` to an address called `anAddress`:
<pre>
    (bool success, ) = anAddress.call{ value: msg.value }("");
    require(success);
</pre>