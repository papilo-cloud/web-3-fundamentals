# ESCROW
## What's an Escrow? 
An escrow is an agreement often used when transferring funds in exchange for a good or service. Funds can be held in escrow and a third party can be chosen to "arbitrate" or approve the transfer when the service or good is provided.

## 1: Setup
### State Variables
We'll have three parties involved in the Escrow:

1. **Depositor** - The payer of the Escrow, makes the initial deposit that will eventually go to the beneficiary.
2. **Beneficiary** - The receiver of the funds. They will provide some service or good to the depositor before the funds are transferred by the arbiter.
3. **Arbiter** - The approver of the transaction. They alone can move the funds when the goods/services have been provided.
For this first stage, let's create these addresses as public state variables!

### Your Goal: Addresses
Create three public state variables for the addresses of the `depositor`, `beneficiary` and `arbiter`.


## 2: Constructor
### Constructor Storage 
Each time that a **depositor**, **arbiter** and **beneficiary** come to an agreement upon Escrow terms, they can deploy a contract.

The depositor will be the **signer** deploying the contract. They will ask the arbiter and beneficiary for addresses that those two parties have access to. Then the depositor will provide those addresses as the arguments to the Escrow contract for storage.

### Your Goal: Store Addresses
1. Create a `constructor` which takes two arguments: an `address` for the arbiter and an `address` for the beneficiary (in that order). Store these variables in the corresponding state variables.

2. The `depositor` is the address deploying the contract, so take this address and store it in the depositor state variable.

## 3: Funding
### Funding 
It's time to **fund** the contract!

The depositor will send some ether to the contract, which will be used to pay the beneficiary after the transfer is approved by the arbiter.

### Your Goal: Payable
Modify the constructor function to make it **payable**.

## 4: Approval
### Approval
After the contract has been deployed with the appropriate amount of funds, the beneficiary will provide the good or service. They are now secure in knowing that the money is on its way! 

Once the good or service is provided, the arbiter needs a way to **approve** the transfer of the deposit over to the beneficiary's account. 

Let's add this mechanism to our contract!

### Your Goal: Approve
1. Create an external function called `approve`.
1. This function should move the contract's balance to the beneficiary's address.
1. Create a boolean public state variable called `isApproved` which is initially set to false, then changed to `true` after the contract has been approved.

Remember the proper syntax for using `.call()` to send ether:
<pre>
    (bool sent, ) = _to.call{ value: someValue }("");
    require(sent, "Failed to send ether");
</pre>

## 5: Security
### Lock it Down 
There's only one address that should be able to call the approve method: the **arbiter**. 

This is their role in the escrow transaction, to decide when the funds can be transferred.

### Your Goal: Security
If anyone tries to call `approve` other than the arbiter address, revert the transaction.

## 6: Events
### Events 
When the Escrow is approved, the User Interface will want to show some indication.

Let's create an event so it is easy for the interface to subscribe to such an occurrence.

### Your Goal: Approved
1. Create an event called `Approved` which takes a single `uint` parameter: the balance that is sent to the beneficiary.
2. Emit this event from within the `approve` function.

## 7: Deployment
### Deploy Escrow
It's time to take the Escrow contract we've created and deploy it using ethers.js!

Given an abi, bytecode and a signer we can deploy a contract:
<pre>
    1. const factory = new ethers.ContractFactory(abi, bytecode, signer);
    2. const promise = factory.deploy(/* constructor arguments */);
</pre>
The `ContractFactory` holds the information we need to interact with the contract. We can deploy multiple contracts with this factory.

The `deploy` method will sign a transaction with the contract's bytecode and broadcast the transaction through the provider. Since this is asynchronous, naturally, it returns a promise.

The constructor arguments to the `deploy` function are passed in like arguments to any other ethers.js function. This also includes the *overrides* object which can contain additional properties like **value, gasLimit, nonce,** etc...

### Your Goal: Deploy
1. In `deploy.js` complete the deploy function! This function is provided with the `abi`, `bytecode` and `signer` which are needed to create a `ContractFactory` instance.
2. Create the factory and then call `factory.deploy` with the address arguments as they should be supplied to the `Escrow` constructor function.
 > See here for the ethers.js Contact Documentation.

3. Additionally, send a 1 Ether deposit to the contract. *Hint: you'll want to specify `value` in your deploy function*
4. Return the deployment promise.

## 8: Approve TX
### Approve 
It's time to create the approve transaction! This will move the deposited funds to the beneficiary address.

We'll need the arbiter to sign this transaction in order for it to work!

### Your Goal: Approve
1. In the `approve.js` file, call the `approve` function on the Escrow `contract` using the arbiter signer.

    >  Hint : Remember: calling a contract from a specific signer can be done with: `contract.connect(signer).functionName()`

2. Return the transaction promise.