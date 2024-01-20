import { LocalStorageRepository } from '../domain/local-storage.repository'

export class LocalStorageRepositoryMock implements LocalStorageRepository {
  private storage: Record<string, string>

  constructor() {
    this.storage = {}
  }

  getItem(key: string): string | null {
    return this.storage[key] || null
  }

  setItem(key: string, item: string): void {
    this.storage[key] = item
  }
}
