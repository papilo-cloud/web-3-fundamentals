import { Wallet, utils, providers } from 'ethers';
import { ganacheProvider, PRIVATE_KEY } from './config';

// TODO: replace undefined with a new web3 provider
const provider = new providers.Web3Provider(ganacheProvider); 

const wallet = new Wallet(PRIVATE_KEY, provider);

async function sendEther({ value, to }) {
    // const nonce = await providers.getTransactionCount
    // const rawTx = await wallet.signTransaction({ 
    //     value, to, 
    //     gasLimit: 0x5208,
    //     gasPrice: 0x3b9aca00,
    //     nonce
    // });

    // TODO: send the transaction and return the transaction promise
    return wallet.sendTransaction({value, to})
}

module.exports = sendEther;