import SHA256 from 'crypto-js/sha256.js';

class Block {
    constructor(data) {
        this.data = data
    }
    toHash() {
        return SHA256(this.data + this.previousHash)
    }
}

export default Block