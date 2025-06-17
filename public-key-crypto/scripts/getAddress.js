import secp from "ethereum-cryptography/secp256k1.js";
import { keccak256 } from "ethereum-cryptography/keccak.js";

function getAddress(publicKey) {
    const slice = publicKey.slice(1);
    const hash = keccak256(slice)
    return hash.slice(-20)
}

export default getAddress