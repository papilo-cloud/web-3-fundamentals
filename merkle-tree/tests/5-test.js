import {assert} from 'chai';
import MerkleTree from "../scripts/index.js";
import verifyProof from '../scripts/verify.js';

const concat = (a, b) => `Hash(${a} + ${b})`;

describe('merkle proof verification', function() {
  describe('a given merkle tree', function() {
    const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
    const root = "Hash(Hash(Hash(Hash(A + B) + Hash(C + D)) + Hash(Hash(E + F) + Hash(G + H))) + Hash(Hash(I + J) + K))";
    let tree; 
    beforeEach(() => {
      tree = new MerkleTree(leaves.slice(0), concat);
    });

    describe('untampered proofs', function() {
      leaves.forEach((_, i) => {
        it(`should verify the proof for leaf index ${i}`, function() {
          const proof = tree.getProof(i);
          assert.equal(verifyProof(proof, leaves[i], root, concat), true);
        });
      });
    });

    describe('tampered proofs', function() {
      describe('verifying a different node with a proof', function() {
        it('should not verify the proof', function() {
          let proof = tree.getProof(2);
          assert.equal(verifyProof(proof, leaves[3], root, concat), false);
        });
      });

      describe('verifying a different root', function() {
        it('should not verify the proof', function() {
          let proof = tree.getProof(2);
          const badRoot = "Hash(Hash(Hash(Hash(A + C) + Hash(C + D)) + Hash(Hash(E + F) + Hash(G + H))) + Hash(Hash(I + J) + K))";
          assert.equal(verifyProof(proof, leaves[2], badRoot, concat), false);
        });
      });

      describe('flipping a nodes position', function() {
        it('should not verify the proof', function() {
          let proof = tree.getProof(3);
          proof[1].left = !proof[1].left;
          assert.equal(verifyProof(proof, leaves[3], root, concat), false);
        });
      });

      describe('editing a hash', function() {
        it('should not verify the proof', function() {
          let proof = tree.getProof(5);
          proof[2].data = "Q";
          assert.equal(verifyProof(proof, leaves[5], root, concat), false);
        });
      });
    });
  });
});
