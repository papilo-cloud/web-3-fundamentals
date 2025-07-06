import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const url = `https://eth-mainnet.g.alchemy.com/v2/${process.env.API_KEY}`
async function getBlockNumber() {
    const response = await axios.post(url, {
        jsonrpc: "2.0",
        id: 1,
        method: 'eth_blockNUmber',
        params: ['0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', latest]
    })

    console.log(response.data)

    // return 
}

getBlockNumber()