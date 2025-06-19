import SHA256 from 'crypto-js/sha256.js';

class Block {
    toHash() {
        return SHA256('Abdul')
    }
}

export default Block