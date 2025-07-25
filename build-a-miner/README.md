# BUILD A MINER

## 1: Mempool
### Your Goal: Add Transaction
- Your goal is to implement the addTransaction function, which adds transactions to the mempool.

- Take the transaction sent to the function and push it on top of the mempool array.

## 2: Mine Block
### Your Goal: Mine Block
- The goal of this stage is to update the mine() fuction to create a new block with a unique identifier and add it to our blocks array.
- For the purposes of this mining exercise, our block will be an object with a single property: an id that is equal to the block height prior to it being mined.

- Update the mine() function to create a new block object with a single property: id
- Set the id property to the block height prior to the new block being added
- Push the block object into the blocks array

## 3: Block Hash
### Your Goal: Add the Hash
- Stringify the block object using JSON.stringify
- Take the SHA256 hash of the stringified block object
- Set the resulting value to a hash property on the mined block just before mining it

## 4. Mine Transaction
### Your Goal: Mine Transactions
- Inside the mine function, pull transactions off the mempool and include them in the block in an array called transactions
- Remove each transaction you include in the block from the mempool
- Add the transactions array to the block before hashing the block

## 5. Target Difficulty
### Your Goal: Proof of Work
- Now it's time to actually mine the block. This is where we get the work part of proof of work!

- In the mine function, prior to hashing the block, add a nonce property. This property should start at 0
- Keep changing the nonce until you find a hash that is less than the TARGET_DIFFICULTY

- You can compare a BigInt to another BigInt using the JavaScript comparison operators. You can convert from a hash to be a BigInt by:
```javascript
    const hash = SHA256("example");
    const int = BigInt(`0x${hash}`);
```