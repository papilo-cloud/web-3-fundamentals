class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getRoot(leaves = this.leaves) {
        if (leaves.length == 1){
            return leaves[0]
        }
        let root = []
        for (let i = 0; i < leaves.length; i += 2){
            const left = leaves[i]
            const right = leaves[i + 1]
            if (right) {
                root.push(this.concat(left, right))
            } else {
                root.push(left)
            }
        }
        return this.getRoot(root)
    }
}

export default MerkleTree