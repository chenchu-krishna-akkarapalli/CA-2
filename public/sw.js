// Service Worker: Low-Bandwidth Resilience & Stale-While-Revalidate Engine
const CACHE_VERSION = "cmk-v1.0.1";
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;

const PRECACHE_ASSETS = [
  "/",
  "/about/",
  "/services/",
  "/connect/",
  "/site.webmanifest",
  "/offline.html"
];

// 1. INSTALL - Pre-cache critical core shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

// 2. ACTIVATE & PURGE OBSOLETE CACHES
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== STATIC_CACHE && k !== RUNTIME_CACHE)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// 3. FETCH STRATEGY
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Bypass non-GET requests, localhost/dev, or external tracking scripts
  if (
    request.method !== "GET" ||
    url.hostname === "localhost" ||
    url.hostname === "127.0.0.1" ||
    url.hostname.includes("google-analytics") ||
    url.hostname.includes("clarity.ms") ||
    url.hostname.includes("emailjs.com")
  ) {
    return;
  }

  // Strategy A: Cache-First for hashed Next.js assets, fonts, and optimized images
  if (
    url.pathname.includes("/_next/static/") ||
    url.pathname.includes("/Assets/") ||
    url.pathname.endsWith(".woff2") ||
    url.pathname.endsWith(".avif") ||
    url.pathname.endsWith(".webp")
  ) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;

        const networkRes = await fetch(request);
        if (networkRes && networkRes.status === 200) {
          cache.put(request, networkRes.clone());
        }
        return networkRes;
      })
    );
    return;
  }

  // Strategy B: Stale-While-Revalidate with Offline Fallback for HTML Navigation
  event.respondWith(
    caches.open(RUNTIME_CACHE).then(async (cache) => {
      const cachedResponse = await cache.match(request);

      const networkPromise = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            cache.put(request, response.clone());
          }
          return response;
        })
        .catch(() => {
          if (cachedResponse) return cachedResponse;
          if (request.mode === "navigate") {
            return caches.match("/offline.html");
          }
        });

      return cachedResponse || networkPromise;
    })
  );
});
