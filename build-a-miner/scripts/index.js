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
    let tx = []
    while (tx.length < MAX_TRANSACTIONS && mempool.length > 0) {
        tx.push(mempool.pop())
    }
    const block = {id: blocks.length, transactions: tx, nonce: 0}
    let hash;

    while (true) {
        hash = SHA256(JSON.stringify(block))
        const int = BigInt(`0x${hash}`)
        if (int < TARGET_DIFFICULTY) {
            break;
        }
        block.nonce++
    }
    blocks.push({...block, hash})
}

export {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};

