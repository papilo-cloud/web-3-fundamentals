import TXO from "./TXO.js";

class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        let error = this.inputUTXOs.some(x => x.spent) ;
        if (error) {
            throw new Error("Cannot double spend");
        }
        let inputAmount = this.inputUTXOs.reduce((a, b) => a + b.amount, 0)
        let outputAmount = this.outputUTXOs.reduce((a, b) => a + b.amount, 0)
        if (inputAmount < outputAmount) {
            throw new Error("Not enough BTC");
        } else {
            this.fee = inputAmount - outputAmount;
        }
    }
}

export default Transaction;


// const tx1 = new TXO('12345', 100)
// const tx2 = new TXO('23458', 10)
// const tx3 = new TXO('45678', 50)

// const trans = new Transaction([tx1, tx2, tx3], [])

// trans.execute()