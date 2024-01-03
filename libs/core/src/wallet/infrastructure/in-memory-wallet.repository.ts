import { Wallet } from '../domain/wallet'
import { WalletRepository } from '../domain/wallet.repository'

export class InMemoryWalletRepository implements WalletRepository {
  private wallets: Wallet[] = []

  getAll() {
    return Promise.resolve(this.wallets)
  }

  get(walletId: string) {
    return Promise.resolve(this.wallets.find((wallet) => wallet.id === walletId))
  }

  create(wallet: Wallet) {
    this.wallets.push(wallet)
    return Promise.resolve(wallet)
  }

  update(wallet: Wallet) {
    const index = this.wallets.findIndex((w) => w.id === wallet.id)
    this.wallets[index] = wallet
    return Promise.resolve(wallet)
  }

  delete(walletId: string) {
    const index = this.wallets.findIndex((w) => w.id === walletId)
    this.wallets.splice(index, 1)
    return Promise.resolve()
  }
}
