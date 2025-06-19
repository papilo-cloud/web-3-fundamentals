import Block from "../scripts/blocks.js";
import { assert } from "chai";

describe('Block', () => {
    const newBlock = new Block()
    it('should have a hash property', () => {
        assert(/^[0-9A-F]{64}$/i.test(newBlock.toHash()));
    })
})