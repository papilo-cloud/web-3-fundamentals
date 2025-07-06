import dotenv from 'dotenv'
dotenv.config()
// const {API_KEY} = process.env;
import axios from 'axios';
import {assert} from 'chai';
 

describe('api key', () => {
    it('should be a valid api key', async () => {
        const url = `https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`;
        const address = "0x09c21331045f34551622A51A3C34D35DcdA15b00";

        const { data: { result } } = await axios.post(url, {
            jsonrpc: "2.0",
            id: 1,
            method: "eth_getBalance",
            params: [address, "latest"],
        });
        
        assert.isAbove(parseInt(result), 0x40db451e4e74a0311e90);
    });
});