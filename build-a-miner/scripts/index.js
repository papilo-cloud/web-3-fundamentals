import SHA256 from 'crypto-js/sha256.js';
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.push(transaction)
}

function mine() {
    // TODO: mine a block
    const block = {id: blocks.length}
    const hash = SHA256(JSON.stringify(block))
    block.hash = hash;
    blocks.push(block)
}

const tx = {to: 'Bob', sender: 'Alice'}
const ans = addTransaction(tx)

console.log(first)

export {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};