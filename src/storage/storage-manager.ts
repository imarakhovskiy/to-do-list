import { StorageType } from "types/storage-types";

interface StorageMethodOptions {
  storageType?: StorageType;
}

interface StorageGetItemOptions extends StorageMethodOptions {}

interface StorageSetItemOptions extends StorageMethodOptions {}

interface StorageRemoveItemOptions extends StorageMethodOptions {}

interface StorageClearOptions extends StorageMethodOptions {}

class StorageManager {
  private isSSR: boolean;
  private localStorage: Storage | null;
  private sessionStorage: Storage | null;

  constructor() {
    this.isSSR = typeof window === "undefined";

    if (!this.isSSR) {
      this.localStorage = localStorage;
      this.sessionStorage = sessionStorage;
    } else {
      this.localStorage = null;
      this.sessionStorage = null;
    }
  }

  private getStorageBasedOnType(type: StorageType | undefined) {
    switch (type) {
      case StorageType.Local:
        return this.localStorage;
      case StorageType.Session:
        return this.sessionStorage;
      default:
        return this.localStorage;
    }
  }

  public getItem(key: string, options?: StorageGetItemOptions) {
    if (this.isSSR) {
      return;
    }

    const storage = this.getStorageBasedOnType(options?.storageType);

    const value = storage?.getItem(key);

    return value;
  }

  public setItem(key: string, value: string, options?: StorageSetItemOptions) {
    if (this.isSSR) {
      return;
    }

    const storage = this.getStorageBasedOnType(options?.storageType);

    storage?.setItem(key, value);
  }

  public removeItem(key: string, options: StorageRemoveItemOptions) {
    if (this.isSSR) {
      return;
    }

    const storage = this.getStorageBasedOnType(options?.storageType);

    storage?.removeItem(key);
  }

  public clear(options?: StorageClearOptions) {
    if (this.isSSR) {
      return;
    }

    const storage = this.getStorageBasedOnType(options?.storageType);

    storage?.clear();
  }
}

export const storageManager = new StorageManager();
