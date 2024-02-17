import { createStore } from 'zustand/vanilla'
import { InMemoryWalletRepository } from '../infrastructure/in-memory-wallet.repository'
import { WalletService } from '../domain/wallet.service'
import { Wallet } from '../domain/wallet'

const repository = new InMemoryWalletRepository()
const service = new WalletService(repository)

type States = {
  wallets: Wallet[]
  currentWallet: Wallet | undefined
}

type Actions = {
  load: () => void
  setCurrentWallet: (wallet: Wallet) => void
  getWallet: (walletId: string) => void
  createWallet: (wallet: Wallet) => void
  updateWallet: (wallet: Wallet) => void
  deleteWallet: (walletId: string) => void
}

export const walletStore = createStore<States & Actions>()((set) => ({
  wallets: [],
  currentWallet: undefined,

  load: async () => {
    const allWallets = await service.getAll()
    set({ wallets: allWallets })
  },

  setCurrentWallet: (wallet) => set({ currentWallet: wallet }),

  getWallet: async (walletId: string) => {
    const wallet = await service.get(walletId)
    set({ currentWallet: wallet })
  },

  createWallet: async (wallet: Wallet) => {
    const newWallet = await service.create(wallet)
    set((state) => ({ wallets: [...state.wallets, newWallet] }))
  },

  updateWallet: async (wallet: Wallet) => {
    const updatedWallet = await service.update(wallet)
    set((state) => ({
      wallets: state.wallets.map((w) => (w.id === updatedWallet.id ? updatedWallet : w)),
      currentWallet: state.currentWallet?.id === updatedWallet.id ? updatedWallet : state.currentWallet,
    }))
  },

  deleteWallet: async (walletId: string) => {
    await service.delete(walletId)
    set((state) => ({
      wallets: state.wallets.filter((w) => w.id !== walletId),
      currentWallet: state.currentWallet?.id === walletId ? undefined : state.currentWallet,
    }))
  },
}))
