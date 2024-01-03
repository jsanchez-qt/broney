import { Wallet } from './wallet'

export interface WalletRepository {
  getAll(): Promise<Wallet[]>
  get(walletId: string): Promise<Wallet | undefined>

  create(wallet: Wallet): Promise<Wallet>
  update(wallet: Wallet): Promise<Wallet>
  delete(walletId: string): Promise<void>
}
