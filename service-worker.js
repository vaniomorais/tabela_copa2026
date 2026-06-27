const CACHE_NAME = 'tabela-copa-v3.1';

const FILES_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png'
];

self.addEventListener('install', event => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        Promise.all([
            caches.keys().then(cacheNames =>
                Promise.all(
                    cacheNames
                        .filter(cache => cache !== CACHE_NAME)
                        .map(cache => caches.delete(cache))
                )
            ),
            clients.claim()
        ])
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});