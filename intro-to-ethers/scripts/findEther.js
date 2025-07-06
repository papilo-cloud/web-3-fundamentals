import { providers } from 'ethers';
import { ganacheProvider } from './config';

const provider = new providers.Web3Provider(ganacheProvider);

/**
 * Given an ethereum address find all the addresses
 * that were sent ether from that address
 * @param {string} address - The hexadecimal address for the sender
 * @async
 * @returns {Array} all the addresses that received ether
 */
async function findEther(address) {
    const addresses = []
    const blockNUmber = await provider.getBlockNumber()

    for(let i = 0; i < blocknumber; i++) {
        const block = await provider.getBlockWithTransactions(i)
        block.transactions.forEach(tx => {
            if (tx.from == address) {
                addresses.push(tx.to)
            }
        })
    }
    return addresses
}
