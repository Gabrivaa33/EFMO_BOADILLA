self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('efmo-cache').then(cache => {
      return cache.addAll([
        '/',
        '/EFMO_BOADILLA/',
        '/EFMO_BOADILLA/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
