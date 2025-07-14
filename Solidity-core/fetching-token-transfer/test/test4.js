const { assert } = require('chai');
const totalDaiTransferred = require('../scripts/totalDaiTransferred')

describe('totalDaiTransferred', () => {
    it('should work for a block interval containing 2 transfers', async () => {
        const daiTransferred = await totalDaiTransferred("0xff26e1", "0xff2800");
        assert.equal(daiTransferred, 26001191798000000000000n);
    });

    it('should work for a block interval containing 3 transfers', async () => {
        const daiTransferred = await totalDaiTransferred("0xff26e1", "0xff28d4");
        assert.equal(daiTransferred, 26497391098000000000000n);
    });
});