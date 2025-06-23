class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getRoot(leaves = this.leaves) {
        return this.concat(leaves[0], leaves[1])
    }
}

export default MerkleTree