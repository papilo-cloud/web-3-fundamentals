# BLOCKCHAIN DATA STRUCTURE

## 1: Blocks and Hashes
### Your Goal: Return a Hash
- In your Block.js file, we have a class Block. Using the SHA256 function from the Crypto JS Library, return a valid hash in the toHash function.

- For now, there's no need to hash anything in particular since the block contains none of the components we mentioned above.

## 2: What's in a Hash?
**Adding Data to the Hash**
## Your Goal: Hash the Data
- When creating a new block, data will be passed to its constructor:

```js
const block = new Block("Alice sent Bob 1 BTC");

console.log( block.data ); // Alice sent Bob 1 BTC
```
-As shown above, let's add a `data` property to the Block.

1. Add a constructor to our `Block` class that takes one argument `data` and assigns it to `this.data`
1. Once you have added data to the `block`, use this data to calculate the block's hash in the `toHash` function!