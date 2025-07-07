import { assert } from 'chai';
import getValue from '../scripts/1-index.js';

describe('Contract', function () {
    const random = Math.floor(Math.random() * 1000);
    let contract;
    before(async () => {
        const Contract = await ethers.getContractFactory("Contract");
        contract = await Contract.deploy(random);
        await contract.deployed();
    });

    it('should get the value', async () => {
        const value = await getValue(contract);
        assert.equal(value, random);
    });
});
