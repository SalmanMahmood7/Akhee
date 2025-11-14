const CACHE_NAME = 'brillion-digital-v2-optimized';
const STATIC_ASSETS = [
  '/',
  '/digital-platforms-hero-bg.jpg',
  '/ai-solutions-background.jpg',
  '/cloud-hero-bg.jpg',
  '/cyber-hero-bg.jpg',
  '/a-favicon.svg',
];

// Resources to cache on demand
const DYNAMIC_CACHE = 'brillion-dynamic-v2';

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        self.skipWaiting();
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      self.clients.claim();
    })
  );
});

// Fetch event with performance optimizations
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  const url = new URL(event.request.url);

  // Strategy First for static assets
  if (url.pathname.includes('/_next/static/') || 
      url.pathname.includes('/images/') ||
      url.pathname.endsWith('.jpg') ||
      url.pathname.endsWith('.jpeg') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.webp') ||
      url.pathname.endsWith('.css') ||
      url.pathname.endsWith('.js')) {
    
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request).then((fetchResponse) => {
            if (fetchResponse.status === 200) {
              const responseClone = fetchResponse.clone();
              caches.open(DYNAMIC_CACHE).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return fetchResponse;
          });
        })
    );
    return;
  }

  // Strategy First for pages and API calls
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request)
          .then((response) => {
            return response || caches.match('/');
          });
      })
  );
});