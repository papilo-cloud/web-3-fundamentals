import { keccak256 } from 'ethereum-cryptography/keccak.js'
import { utf8ToBytes, toHex } from 'ethereum-cryptography/utils.js'

function hashMessage(message) {
    const bytes = utf8ToBytes(message)
    const hash = keccak256(bytes)
    return hash
}

export default hashMessage