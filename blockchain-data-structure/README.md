# BLOCKCHAIN DATA STRUCTURE

## 1: Blocks and Hashes
### Your Goal: Return a Hash
- In your Block.js file, we have a class Block. Using the SHA256 function from the Crypto JS Library, return a valid hash in the toHash function.

- For now, there's no need to hash anything in particular since the block contains none of the components we mentioned above.

## 2: What's in a Hash?
**Adding Data to the Hash**
### Your Goal: Hash the Data
- When creating a new block, data will be passed to its constructor:

```js
const block = new Block("Alice sent Bob 1 BTC");

console.log( block.data ); // Alice sent Bob 1 BTC
```
-As shown above, let's add a `data` property to the Block.

1. Add a constructor to our `Block` class that takes one argument `data` and assigns it to `this.data`
1. Once you have added data to the `block`, use this data to calculate the block's hash in the `toHash` function!

## 3: The Genesis Block
### Your Goal: Add the Genesis Block
- The Blockchain.js file contains the Blockchain class with a chain array. Let's add the Genesis Block to this array.

- Create a new Block in the Blockchain constructor then add it to the chain array.

## 4: Adding Blocks
### Your Goal: Create an addBlock Function
- Let's create an addBlock function on our Blockchain class.

- This function should take in a new block and add it to the chain array:

```js
const blockchain = new Blockchain();
const block = new Block("Charlie sent Dave 2 BTC");

- blockchain.addBlock(block);

console.log(blockchain.chain.length); // 2
```

- Remember we should have both the genesis block and the new block now.

## 5: Linking The Blocks
### Your Goal: Link Blocks
- To link the blocks you have to accomplish two things:

- Add a `previousHash` property to each block. The value of this property should be the hash of the block **before it** in the chain.
- Use this `previousHash` property in the calculation of the block's hash.

- A good spot to add the `previousHash` property on the block would be in the `addBlock` function, where a block is placed on the chain.
- So far, the `Block` class in your `Block.js` file does not yet contain a `previousHash` property and currently only hashes `this.data` of a block - you must also include the block's `this.previousHash` property in the `toHash` function!
- You are importing `Block.js` into `Blockchain.js`; this import includes the `toHash()` function!
- You can add multiple inputs to the SHA256 function by using the + operator, for example:
```js
const hash = SHA256("dog" + "cat"); // hash of dog and cat together
```