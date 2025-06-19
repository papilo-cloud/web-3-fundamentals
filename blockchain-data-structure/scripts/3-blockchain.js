import Block from "./blocks.js";

class BlockChain {
    constructor() {
        this.chain = [new Block('Genesis block')]
    }
    addBlock(block) {
        this.chain.push(block)
    }
}

export default BlockChain