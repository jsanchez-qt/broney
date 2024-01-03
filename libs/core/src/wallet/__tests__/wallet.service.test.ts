import { WalletService } from '../domain/wallet.service'
import { InMemoryWalletRepository } from '../infrastructure/in-memory-wallet.repository'
import { describe, beforeEach, test, expect } from 'vitest'

describe('Wallet Service', () => {
  let service: WalletService

  beforeEach(() => {
    const repository = new InMemoryWalletRepository()
    service = new WalletService(repository)
  })

  test('getAll', async () => {
    const newWallet = { id: '1', name: 'Wallet 1', balance: 0 }

    await service.create(newWallet)
    const retrievedWallets = await service.getAll()

    expect(retrievedWallets).toEqual([newWallet])
  })

  test('get', async () => {
    const newWallet = { id: '1', name: 'Wallet 1', balance: 0 }

    await service.create(newWallet)
    const retrievedWallet = await service.get(newWallet.id)

    expect(retrievedWallet).toEqual(newWallet)
  })

  test('create', async () => {
    const newWallet = { id: '1', name: 'Wallet 1', balance: 0 }

    const createdWallet = await service.create(newWallet)
    const retrievedWallets = await service.getAll()
    const retrievedWallet = await service.get(createdWallet.id)

    expect(createdWallet).toEqual(newWallet)
    expect(retrievedWallets).toEqual([newWallet])
    expect(retrievedWallet).toEqual(newWallet)
  })

  test('update', async () => {
    const newWallet = { id: '1', name: 'Wallet 1', balance: 0 }
    const updatedWallet = { id: '1', name: 'Wallet 1', balance: 100 }

    await service.create(newWallet)
    const retrievedWallet = await service.get(newWallet.id)
    const modifiedWallet = await service.update(updatedWallet)
    const retrievedModifiedWallet = await service.get(modifiedWallet.id)

    expect(retrievedWallet).toEqual(newWallet)
    expect(modifiedWallet).toEqual(updatedWallet)
    expect(retrievedModifiedWallet).toEqual(updatedWallet)
  })

  test('delete', async () => {
    const newWallet = { id: '1', name: 'Wallet 1', balance: 0 }

    await service.create(newWallet)
    const retrievedWallet = await service.get(newWallet.id)
    await service.delete(newWallet.id)
    const retrievedWallets = await service.getAll()

    expect(retrievedWallet).toEqual(newWallet)
    expect(retrievedWallets).toEqual([])
  })
})
