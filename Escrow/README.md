# ESCROW
## What's an Escrow? 
An escrow is an agreement often used when transferring funds in exchange for a good or service. Funds can be held in escrow and a third party can be chosen to "arbitrate" or approve the transfer when the service or good is provided.

## 1: Setup
We'll have three parties involved in the Escrow:

1. **Depositor** - The payer of the Escrow, makes the initial deposit that will eventually go to the beneficiary.
2. **Beneficiary** - The receiver of the funds. They will provide some service or good to the depositor before the funds are transferred by the arbiter.
3. **Arbiter** - The approver of the transaction. They alone can move the funds when the goods/services have been provided.
For this first stage, let's create these addresses as public state variables!

### Your Goal: Addresses
Create three public state variables for the addresses of the `depositor`, `beneficiary` and `arbiter`.