// Network first: when online, always load the latest files from GitHub.
// The cache is only used as a fallback when offline.
// You no longer need to change this file when you edit index.html.
const CACHE = "daily-calories";
const FILES = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", event => {
  // cache: "reload" skips the browser's HTTP cache so we never store a stale copy.
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(FILES.map(url => new Request(url, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(req, { cache: "no-cache" })
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(req, copy));
        }
        return response;
      })
      .catch(() => caches.match(req).then(cached => cached || caches.match("./index.html")))
  );
});
