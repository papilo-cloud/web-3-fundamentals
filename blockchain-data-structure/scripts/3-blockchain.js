import Block from "./blocks.js";

class BlockChain {
    constructor() {
        this.chain = [new Block('Genesis block')]
    }
    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block)
    }
}

export default BlockChain