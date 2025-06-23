import SHA256 from 'crypto-js/sha256.js';

const hash = SHA256('5118')

// console.log(hash.toString())
class Block {
    constructor(data) {
        this.data = data
    }
    toHash() {
        return SHA256(this.data + this.previousHash)
    }
}

const block = new Block('Hello world')

console.log(block.data)
console.log(block.previousHash)
console.log(block.toHash().toString())