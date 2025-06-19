import Block from "./blocks.js";

class BlockChain {
    constructor() {
        this.chain = [new Block('Genesis block')]
    }
    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block)
    }
    isValid() {
        for (let i = this.chain.length - 1; i > 0; i--) {
            const block = this.chain[i]
            const prevBlock = this.chain[i - 1]
            if (block.previousHash.toString() !== prevBlock.toHash().toString()){
                return false
            }
        }
        return true
    }
}

export default BlockChain