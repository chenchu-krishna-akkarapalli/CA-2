"use client";

import { useEffect } from "react";
import { ScheduledStorage } from "../lib/storageManager";

export default function ClientInit() {
  useEffect(() => {
    const initDeferredTasks = () => {
      // 1. Initialize scheduled LocalStorage cleanup
      ScheduledStorage.initBackgroundCleaner(30);

      // 2. Service Worker registration (Production Only)
      if ("serviceWorker" in navigator) {
        if (
          process.env.NODE_ENV === "production" &&
          window.location.hostname !== "localhost" &&
          window.location.hostname !== "127.0.0.1"
        ) {
          navigator.serviceWorker
            .register("/sw.js")
            .catch(() => {});
        } else {
          navigator.serviceWorker.getRegistrations().then((registrations) => {
            for (const reg of registrations) {
              reg.unregister();
            }
          });
        }
      }
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(initDeferredTasks, { timeout: 3000 });
    } else {
      setTimeout(initDeferredTasks, 1500);
    }
  }, []);

  return null;
}
