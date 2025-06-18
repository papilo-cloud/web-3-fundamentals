import { assert } from 'chai';
import { mine, blocks } from '../scripts/index.js';
import SHA256 from 'crypto-js/sha256.js';

describe('mine', () => {
    describe('first block', () => {
        let hash;
        before(() => {
            hash = mine();
        });
        it('should add to the blocks', () => {
            assert.equal(blocks.length, 1);
        });
        it('should store the expected id', () => {
            const lastBlock = blocks[blocks.length - 1];
            assert(lastBlock.id != null, "did not find an id property on the block");
            assert.equal(lastBlock.id, 0);
        });
    });
    describe('second block', () => {
        let hash;
        before(() => {
            hash = mine();
        });
        it('should add to the blocks', () => {
            assert.equal(blocks.length, 2);
        });
        it('should store the expected id', () => {
            const lastBlock = blocks[blocks.length - 1];
            assert(lastBlock.id != null, "did not find an id property on the block");
            assert.equal(lastBlock.id, 1);
        });
    });
});