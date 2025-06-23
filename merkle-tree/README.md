# MERKLE TREE

## 1: Combine Two Leaves
### Your Goal: Root of Two Leaves
- First, let's write a constructor for the `MerkleTree` class. This constructor will take two arguments passed in this order:

1. An **array** of leaf nodes
1. A combination **function** used to concatenate and hash **two leaves **together

- Next, let's add a function `getRoot` on the `MerkleTree` class. This function will find the merkle root.

For this stage you will only need to take two leaves and hash them together:
<pre>
    Root
    /  \ 
   A    B
  </pre>
- Here, A and B are the leaf nodes and the root is the result of the concatenation. Simply take the first and second leaf nodes and use the concatenate function to get the result.

## 2: Multiple Layers
### Your Goal: Handle Bigger Trees
- Update the `getRoot` function to handle merkle trees with more than two leaf nodes.

- When breaking down the logic of merkle trees, first we hash together `A` and `B`, then we hash together `C` and `D`. Then we hash together the combination of `A` and `B` `(AB)` with the combination of `C` and `D` `(CD)`. Something like this:
<pre>
    ABCD
    /  \ 
   AB  CD
  / \  / \
  A B  C D
</pre>
- Writing the code you will likely find it useful to think of the tree as having multiple layers:

- The first layer is the leaves (`A`, `B`, `C`, `D`)
- The second is the combination of both of those combinations (`AB`, `CD`)
- The last layer is the final combination: the merkle root (`ABCD`)
- In each layer, we'll need to combine elements two-at-a-time until we reach a layer with just **a single element**. At that point we can stop, knowing we've found the root.

For this stage you'll need to handle a **single leaf node**, **two leaf nodes**, **four leaf nodes** and **eight leaf nodes**.

## 3: Odd Leaves
### Your Goal: Handle Odd Number of Leaves
- Let's consider what happens in the case of an **odd number of leaves** in a tree.

- Any time that there is no **right** pair to an element, we're just going to want to carry that leaf one layer up:

<pre>
    Root
    / \ 
   AB  C
  / \  |
  A B  C
</pre>

- In this case we don't use the `C` node until we combine it with `AB` to create the Merkle Root. Let's handle this in our `getRoot` function.

## 4: Build the Proof
### ABCDE Merkle Proof Example
<pre>
      Root
     /    \
    ABCD   E
    / \    |
   AB  CD  E
  / \  / \ |
  A B  C D E
</pre>

### Proof of C

- Let's prove `C` is in the Merkle Root!

- We build the path to create the root from `C`:

<pre>
    Hash(Hash(AB + Hash(C + D)) + E)
</pre>
> So the four hashes in use here are `AB`, `C`, `D`, and `E`. Since we're starting with `C`, we won't need it in the proof. We'll need to know `AB`, `D` and `E`.

- Also we need to know **the order in which they should be combined**. `Hash(A + B)` will not be the same as `Hash(B + A)`. Our proof should contain the `data` (the hash) and whether or not the node is in the `left` position.

Our resulting proof would look like this:
```js
<pre>
[
 { data: 'D', left: false },
 { data: 'AB', left: true },
 { data: 'E', left: false }
]
</pre>
```
- By looking at this proof, we can easily concatenate to the root. We start with `C`, concatenate `D` on the right `(CD)`, concatenate AB to the left `(ABCD)` and then concatenate `E` on the right to get the root `ABCDE`.

Look at that! We didn't even need to know A or B, just the combined hash of the two.

 Check out Details for another example.

### Add the getProof Method
Let's add a `getProof` method to our `MerkleTree` class. This function will take in an index of a leaf node and return a **Merkle Proof**.

The Merkle Proof will be an array of objects with the properties `data` (the hash) and `left` (a boolean indicating if the hash is on the left).

> If you get stuck be sure to check out our Recommended Approach.

## 5: Verify your Proof
### Your Goal: Complete Verify Proof
- The function `verifyProof` takes four parameters: `proof`, `node`, `root` and `concat`.

- Here are their definitions:

1. `proof` - An array of objects whose properties are `data` and `left`. (The `proof` you created in the previous stage)
1. `node` - A leaf `node` we're trying to prove is within the merkle tree.
1. `root` - The valid Merkle `Root`.
1. `concat` - The method used to combine the leaf nodes.
- Take the `node` and combine it with all the data provided in the `proof`.

At this point you'll have your own `root` derived from the `node` and the `proof`. Compare this to the true `root` with `===` to see if they match.