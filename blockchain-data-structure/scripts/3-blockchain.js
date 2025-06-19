import Block from "./blocks.js";

class BlockChain {
    constructor() {
        this.chain = [new Block('Genesis block')]
    }
}

export default BlockChain