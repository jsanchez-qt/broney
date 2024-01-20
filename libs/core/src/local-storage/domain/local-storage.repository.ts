export interface LocalStorageRepository {
  getItem(key: string): string | null
  setItem(key: string, item: string): void
}
