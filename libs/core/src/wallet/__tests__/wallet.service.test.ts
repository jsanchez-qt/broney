import { WalletService } from '../domain/wallet.service'
import { InMemoryWalletRepository } from '../infrastructure/in-memory-wallet.repository'
import { LocalStorageWalletRepository } from '../infrastructure/local-storage-wallet.repository'
import { describe, beforeEach, test, expect } from 'vitest'
import { LocalStorageRepositoryMock } from '../../local-storage/__mocks__/local-storage.mock'
import { WalletRepository } from '../domain/wallet.repository'

describe('Wallet Service', () => {
  describe.each([['in-memory'], ['local-storage']])('test the with a %s repository instance ', (repositoryType) => {
    let service: WalletService

    beforeEach(() => {
      let repository: WalletRepository

      switch (repositoryType) {
        case 'local-storage': {
          const localStorageMocked = new LocalStorageRepositoryMock()
          repository = new LocalStorageWalletRepository(localStorageMocked)
          break
        }
        case 'in-memory':
        default:
          repository = new InMemoryWalletRepository()
          break
      }

      service = new WalletService(repository)
    })

    test('getAll > should retrieve all wallets', async () => {
      const newWallet = { id: '1', name: 'Wallet 1', balance: 0 }

      await service.create(newWallet)
      const retrievedWallets = await service.getAll()

      expect(retrievedWallets).toEqual([newWallet])
    })

    test('get > should retrieve a wallet according to an id', async () => {
      const newWallet = { id: '1', name: 'Wallet 1', balance: 0 }

      await service.create(newWallet)
      const retrievedWallet = await service.get(newWallet.id)

      expect(retrievedWallet).toEqual(newWallet)
    })

    test('create > should create a wallet', async () => {
      const newWallet = { id: '1', name: 'Wallet 1', balance: 0 }

      const createdWallet = await service.create(newWallet)
      const retrievedWallets = await service.getAll()
      const retrievedWallet = await service.get(createdWallet.id)

      expect(createdWallet).toEqual(newWallet)
      expect(retrievedWallets).toEqual([newWallet])
      expect(retrievedWallet).toEqual(newWallet)
    })

    test('update > should update the specified wallet', async () => {
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

    test('delete > should delete a wallet', async () => {
      const newWallet = { id: '1', name: 'Wallet 1', balance: 0 }

      await service.create(newWallet)
      const retrievedWallet = await service.get(newWallet.id)
      await service.delete(newWallet.id)
      const retrievedWallets = await service.getAll()

      expect(retrievedWallet).toEqual(newWallet)
      expect(retrievedWallets).toEqual([])
    })
  })
})
