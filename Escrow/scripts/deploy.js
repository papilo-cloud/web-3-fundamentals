const ethers = require('ethers');

/**
 * Deploys the Escrow contract with a 1 ether deposit
 *
 * @param {array} abi - interface for the Escrow contract
 * @param {string} bytecode - EVM code for the Escrow contract
 * @param {ethers.types.Signer} signer - the depositor EOA
 * @param {string} arbiterAddress - hexadecimal address for arbiter
 * @param {string} beneficiaryAddress - hexadecimal address for benefiiciary
 * 
 * @return {promise} a promise of the contract deployment
 */
function deploy(abi, bytecode, signer, arbiterAddress, beneficiaryAddress) {
    const contract = new ethers.ContractFactory(abi, bytecode, signer);
    const deploy = contract.deploy(arbiterAddress, beneficiaryAddress, {value: ethers.utils.parseEther('1')})
    return deploy;
}

module.exports = deploy;