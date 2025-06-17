import secp from "ethereum-cryptography/secp256k1.js";
import hashMessage from './hashMessage.js';

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    return secp.sign(hashMessage(msg), PRIVATE_KEY, {recovered: true});
}

const x = await secp.sign(hashMessage('hello'), PRIVATE_KEY, {recovered: true})

console.log(x)
export default signMessage;