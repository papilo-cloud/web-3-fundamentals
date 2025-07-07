import { assert } from 'chai';
import transfer from '../scripts/transfer.js';
import { ethers } from 'ethers';

describe('Token', function () {
    let contract;
    let owner;
    let friend;
    before(async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const accounts = await provider.listAccounts()

        owner = provider.getSigner(accounts[1]);
        friend = provider.getSigner(accounts[2]);
        
        const Contract = await ethers.getContractFactory("Token");
        contract = await Contract.deploy();
        await contract.deployed();
    });

    describe('after transfer', () => {
        before(async () => {
            await transfer(contract, friend);
        });

        it('should decrease the owner balance', async () => {
            const balance = await contract.balances(owner);
            assert(balance.lt(1000));
        });

        it('should increase the friend balance', async () => {
            const balance = await contract.balances(friend);
            assert(balance.gt(0));
        });
    });
});
