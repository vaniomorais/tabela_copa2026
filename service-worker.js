const CACHE_NAME = 'tabela-copa-v3.4';

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
    console.log('[Service Worker] Instalando...', CACHE_NAME);
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Cache aberto, adicionando arquivos');
                return cache.addAll(FILES_TO_CACHE);
            })
            .catch(error => console.error('[Service Worker] Erro ao cachear arquivos:', error))
    );
});

self.addEventListener('activate', event => {
    console.log('[Service Worker] Ativando...');
    event.waitUntil(
        Promise.all([
            caches.keys().then(cacheNames =>
                Promise.all(
                    cacheNames
                        .filter(cache => cache !== CACHE_NAME)
                        .map(cache => {
                            console.log('[Service Worker] Deletando cache antigo:', cache);
                            return caches.delete(cache);
                        })
                )
            ),
            clients.claim()
        ])
    );
    console.log('[Service Worker] Ativado e controlando clientes');
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(error => {
                console.error('[Service Worker] Erro ao fazer fetch:', error);
                throw error;
            })
    );
});

self.addEventListener('message', event => {
    console.log('[Service Worker] Mensagem recebida:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('[Service Worker] SKIP_WAITING recebido, ativando novo SW');
        
        // Aguarda um pouco antes de fazer skipWaiting para garantir que a mensagem foi processada
        setTimeout(() => {
            self.skipWaiting();
            console.log('[Service Worker] skipWaiting() executado');
        }, 100);
    }
});