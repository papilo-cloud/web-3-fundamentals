import { assert } from "chai";
import BlockChain from "../scripts/3-blockchain.js";
import Block from "../scripts/blocks.js";

describe('Blockchain', () => {
    it('should have a genesis block', () => {
        const blockchain = new BlockChain()
        const genesisBlock = blockchain.chain[0]
        assert(genesisBlock, 'Could not find the genesis block!')
        assert(genesisBlock instanceof Block, 'Genesis block should be a block!')
    })
})