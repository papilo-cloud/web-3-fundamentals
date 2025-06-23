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

    getProof(idx, leaves = this.leaves, proof = []) {
        if (leaves.length === 1) return proof;
        const stack = [];
        for (let i = 0; i < leaves.length; i += 2) {
            let left = leaves[i];
            let right = leaves[i + 1];
            if (!right) {
                stack.push(left);
            }
            else {
                stack.push(this.concat(left, right));

                if (i === idx || i === idx - 1) {
                    let isLeft = !(idx % 2);
                    proof.push({
                        data: isLeft ? right : left,
                        left: !isLeft
                    });
                }
            }
        }
        return this.getProof(Math.floor(idx / 2), stack, proof);
    }
}

export default MerkleTree