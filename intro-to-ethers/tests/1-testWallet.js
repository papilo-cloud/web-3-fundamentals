import { Wallet } from 'ethers'
import { assert } from 'chai'
import { wallet1, wallet2 } from '../scripts/wallets.js'

describe('wallets', () => {
    describe('wallet 1', () => {
        it('should be an instant of wallet', () => {
            assert(wallet1 instanceof Wallet)
        })
        it('should unlock the expected address', () => {
            assert.equal(wallet1.address, '0x5409ED021D9299bf6814279A6A1411A7e866A631')
        })
    })

    describe('wallet 2', () => {
        it('should be an instant of wallet', () => {
            assert(wallet2 instanceof Wallet)
        })
        it('should unlock the expected address', () => {
            assert.equal(wallet2.address, '0x88E9DD325BA8329dDD9825c1d24e8470b25575C1')
        })
    })
})
