const CACHE_NAME = 'webslib-v8';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/reference-desk.css?v=9',
  '/data-extra.js',
  '/data-extra-2.js?v=2',
  '/data-extra-3.js',
  '/data-extra-4.js',
  '/data-extra-5.js',
  '/data-extra-6.js',
  '/data-extra-7.js',
  '/data-extra-8.js?v=1',
  '/data-extra-9.js?v=1',
  '/data-extra-10.js?v=1',
  '/data-extra-11.js?v=1',
  '/data-extra-12.js?v=1',
  '/data-extra-13.js?v=1',
  '/data-extra-14.js?v=1',
  '/merge-categories.js?v=8',
  '/access-map.js?v=1',
  '/catalog-audit.js?v=1',
  '/reference-desk.js?v=9',
  '/assets/observatory-poster.jpg',
  '/icon-192.png',
  '/icon-512.png'
];

// Install: cache the shell so the directory opens offline
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS)).catch(() => { }));
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// Fetch: network-first for pages, scripts and styles so edits reach people on
// their next visit; cache-first for images, video and fonts.
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  const fresh = request.destination === 'document' || request.destination === 'script' || request.destination === 'style' || url.pathname.endsWith('.json');
  if (fresh) {
    event.respondWith(
      fetch(request)
        .then(res => {
          if (res.ok) { const clone = res.clone(); caches.open(CACHE_NAME).then(c => c.put(request, clone)); }
          return res;
        })
        .catch(() => caches.match(request).then(hit => hit || caches.match('/')))
    );
    return;
  }

  // Video uses range requests, which the cache API cannot answer; let the network handle it.
  if (request.destination === 'video') return;

  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request).then(res => {
      if (res.ok) { const clone = res.clone(); caches.open(CACHE_NAME).then(c => c.put(request, clone)); }
      return res;
    }))
  );
});
