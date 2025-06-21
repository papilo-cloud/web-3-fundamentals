# UTXO MODEL

## 1: Transaction Output
### Your Goal: Create a TXO class
- Let's complete the `constructor` and `spend` methods for the `TXO` class in the `TXO.js `file.

1. The `constructor` should store the values passed into it on properties of the same name. It should also create a property `spent` and default it to `false`.
2. The `spend` function should set the `spent` property to true. For example:

```js
const txo = new TXO("1FNv3tXLkejPBYxDHDaZz6ENNz3zn3G4GM", 10);

console.log( txo.owner ); // 1FNv3tXLkejPBYxDHDaZz6ENNz3zn3G4GM
console.log( txo.amount ); // 10
console.log( txo.spent ); // false

txo.spend();

console.log( txo.spent ); // true
```
- Notice how `spent` is initially `false` when we create the new TXO. After invoking the `spend` function, `spent` should be set to `true`.

## 2: Spent TXOs
### Your Goal: Ensure Inputs are UTXOs
- On this stage, we introduce a new file `Transaction.js`.

- In the `Transaction` constructor you'll see two arguments passed in: `inputUTXOs` and `outputUTXOs`. Both of these objects are arrays containing instances of transaction outputs.

1. Store `inputUTXOs` and `outputUTXOs` on the transaction object.
2. In the `execute` function do one thing for now: ensure that none of the `inputUTXOs` are already spent. We can't allow double-spending TXOs!
3. Throw an error in `execute` if any input TXO is already spent.
> The terminology between UTXO and TXO can sometimes get confusing. Remember that a TXO is just the nomenclature for a UTXO that is **already spent!**

## 3: Sufficient Amount
###  Your Goal: Ensure Sufficient Input
1. Let's make sure that the `inputUTXOs` have enough total value in them to cover the total value of the `outputUTXOs`.
2. If the total value of the inputs **is less than** the total value of the outputs, throw an error in the `execute` function.