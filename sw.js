const CACHE_NAME = "ball-game-cache-v1";
const urlsToCache = [
  "/",
  "index.html",
  "style.css",
  "script.js",
  "manifest.json",
  "icons/icon-192x192.png",
  "icons/icon-512x512.png"
];

// インストールイベント
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// フェッチイベント
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;  // キャッシュから返す
        }
        return fetch(event.request);  // ネットワークから取得
      })
  );
});

// アクティベーションイベント
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);  // 古いキャッシュを削除
          }
        })
      );
    })
  );
});

