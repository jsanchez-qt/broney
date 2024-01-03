import { Wallet } from './wallet'
import { WalletRepository } from './wallet.repository'

export class WalletService implements WalletRepository {
  constructor(private repository: WalletRepository) {}

  getAll() {
    return this.repository.getAll()
  }

  get(walletId: string) {
    return this.repository.get(walletId)
  }

  create(wallet: Wallet) {
    return this.repository.create(wallet)
  }

  update(wallet: Wallet) {
    return this.repository.update(wallet)
  }

  delete(walletId: string) {
    return this.repository.delete(walletId)
  }
}
