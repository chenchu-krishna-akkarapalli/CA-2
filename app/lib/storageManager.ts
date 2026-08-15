/**
 * Enterprise Scheduled LocalStorage Manager
 * Enforces TTL expiry, automated garbage-collection pruning, and QuotaExceeded fallback.
 */

interface StoragePayload<T> {
  timestamp: number;
  expiry: number;
  value: T;
}

export class ScheduledStorage {
  private static PREFIX = "cmk_cache_";
  private static DEFAULT_TTL_MS = 24 * 60 * 60 * 1000; // 24 Hours
  private static memoryFallback = new Map<string, StoragePayload<any>>();

  static setItem<T>(key: string, data: T, ttlMs: number = this.DEFAULT_TTL_MS): boolean {
    const payload: StoragePayload<T> = {
      timestamp: Date.now(),
      expiry: Date.now() + ttlMs,
      value: data,
    };
    const storageKey = this.PREFIX + key;

    try {
      localStorage.setItem(storageKey, JSON.stringify(payload));
      return true;
    } catch (e: any) {
      if (e?.name === "QuotaExceededError" || e?.name === "NS_ERROR_DOM_QUOTA_REACHED") {
        console.warn("[ScheduledStorage] Quota exceeded. Executing cache purge...");
        this.pruneStaleStorage(true);
        try {
          localStorage.setItem(storageKey, JSON.stringify(payload));
          return true;
        } catch {
          // Degrade gracefully to in-memory store
          this.memoryFallback.set(storageKey, payload);
          return false;
        }
      }
      return false;
    }
  }

  static getItem<T>(key: string): T | null {
    const storageKey = this.PREFIX + key;
    let raw = null;
    try {
      raw = localStorage.getItem(storageKey);
    } catch {
      // In private browsing or blocked storage mode
    }

    if (!raw) {
      const memoryItem = this.memoryFallback.get(storageKey);
      if (memoryItem && Date.now() <= memoryItem.expiry) return memoryItem.value;
      return null;
    }

    try {
      const payload: StoragePayload<T> = JSON.parse(raw);
      if (Date.now() > payload.expiry) {
        localStorage.removeItem(storageKey);
        return null;
      }
      return payload.value;
    } catch {
      return null;
    }
  }

  static pruneStaleStorage(forceAggressive = false): void {
    const now = Date.now();
    const toRemove: string[] = [];

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(this.PREFIX)) {
          try {
            const item: StoragePayload<any> = JSON.parse(localStorage.getItem(k) || "");
            if (now > item.expiry || forceAggressive) {
              toRemove.push(k);
            }
          } catch {
            toRemove.push(k);
          }
        }
      }
      toRemove.forEach((k) => localStorage.removeItem(k));
    } catch (err) {
      console.error("[ScheduledStorage] Cleanup error:", err);
    }
  }

  static initBackgroundCleaner(intervalMinutes = 30): void {
    if (typeof window === "undefined") return;
    this.pruneStaleStorage();
    setInterval(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => this.pruneStaleStorage());
      } else {
        this.pruneStaleStorage();
      }
    }, intervalMinutes * 60 * 1000);
  }
}
