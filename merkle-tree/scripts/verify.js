function verifyProof(proof, node, root, concat) {
  for (let i = 0; i < proof.length; i++) {
      if (proof[i].left) {
          node = concat(proof[i].data, node)
      } else {
          node = concat(node, proof[i].data)
      }
  }
  return node === root
}

export default verifyProof;