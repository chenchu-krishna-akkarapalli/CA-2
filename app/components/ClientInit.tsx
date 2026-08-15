"use client";

import { useEffect } from "react";
import { ScheduledStorage } from "../lib/storageManager";

export default function ClientInit() {
  useEffect(() => {
    // 1. Initialize scheduled LocalStorage cleanup (every 30 mins)
    ScheduledStorage.initBackgroundCleaner(30);

    // 2. Service Worker registration (Production Only)
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      if (process.env.NODE_ENV === "production") {
        window.addEventListener("load", () => {
          navigator.serviceWorker
            .register("/sw.js")
            .then((registration) => {
              console.log("[SW] Active scope:", registration.scope);
            })
            .catch((error) => {
              console.warn("[SW] Registration failed:", error);
            });
        });
      } else {
        // In local development, unregister any active SW to prevent CSS/chunk caching issues
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const reg of registrations) {
            reg.unregister();
            console.log("[SW] Unregistered development service worker:", reg.scope);
          }
        });
      }
    }
  }, []);

  return null;
}
