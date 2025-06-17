import {assert} from 'chai';

import {addTransaction, mempool} from '../scripts/mempool.js'

describe('addTransaction', () => {
    it('It should add the transactions to the mempool', () => {
        const tx = {to: 'Bob', sender: 'Alice'}
        addTransaction(tx)
        assert.equal(mempool.length, 1)
        assert.equal(mempool[0], tx)
    })
})