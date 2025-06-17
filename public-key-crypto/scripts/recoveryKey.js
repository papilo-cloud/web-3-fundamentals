import secp from "ethereum-cryptography/secp256k1.js";
import hashMessage from "./hashMessage.js";

async function recoverKey(message, signature, recoveryBit) {
    return secp.recoverPublicKey(hashMessage(message), signature, recoveryBit)
}

export default recoverKey;