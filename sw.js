const CACHE_NAME = 'webslib-v4';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/onboarding.html',
  '/best-practices.html',
  '/faq.html',
  '/manifest.json',
  '/mobile.css',
  '/mobile-extra.css',
  '/data-extra.js',
  '/data-extra-2.js',
  '/data-extra-3.js',
  '/data-extra-4.js'
];

// Install: cache core shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS.filter(url => !url.includes('firebase')));
    }).catch(() => { })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: network-first for HTML/JS data files, cache-first for static assets
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET, external APIs, and Firebase
  if (
    request.method !== 'GET' ||
    url.origin === 'https://www.gstatic.com' ||
    url.origin === 'https://identitytoolkit.googleapis.com' ||
    url.origin === 'https://securetoken.googleapis.com' ||
    url.hostname.includes('firebaseio.com') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('google.com') && url.pathname.includes('s2/favicons')
  ) {
    return;
  }

  // For HTML pages and JS data files: network-first (always get latest data)
  if (request.destination === 'document' || url.pathname.match(/data-extra.*\.js$/)) {
    event.respondWith(
      fetch(request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(request, clone));
          return res;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // For everything else: cache-first
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(request, clone));
        }
        return res;
      });
    })
  );
});
