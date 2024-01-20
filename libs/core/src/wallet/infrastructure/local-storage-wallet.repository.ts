import { LocalStorageRepository } from '../../local-storage/domain/local-storage.repository'
import { Wallet } from '../domain/wallet'
import { WalletRepository } from '../domain/wallet.repository'

export class LocalStorageWalletRepository implements WalletRepository {
  constructor(private localStorage: LocalStorageRepository) {}

  private WALLET_KEY = 'wallets'

  private retrieveWallets() {
    return JSON.parse(this.localStorage.getItem(this.WALLET_KEY) || '[]')
  }

  private storeWallets(wallets: Wallet[]) {
    this.localStorage.setItem(this.WALLET_KEY, JSON.stringify(wallets))
  }

  getAll() {
    return Promise.resolve(this.retrieveWallets())
  }

  get(walletId: string) {
    const wallets = this.retrieveWallets()
    return Promise.resolve(wallets.find((wallet: Wallet) => wallet.id === walletId))
  }

  create(wallet: Wallet) {
    const wallets = this.retrieveWallets()
    wallets.push(wallet)
    this.storeWallets(wallets)
    return Promise.resolve(wallet)
  }

  update(wallet: Wallet) {
    const wallets = this.retrieveWallets()
    const index = wallets.findIndex((w: Wallet) => w.id === wallet.id)
    wallets[index] = wallet
    this.storeWallets(wallets)
    return Promise.resolve(wallet)
  }

  delete(walletId: string) {
    const wallets = this.retrieveWallets()
    const index = wallets.findIndex((w: Wallet) => w.id === walletId)
    if (index !== -1) {
      wallets.splice(index, 1)
    }
    this.storeWallets(wallets)
    return Promise.resolve()
  }
}
