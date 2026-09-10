// O celular exige um Service Worker para liberar a instalação.
// Este código básico apenas registra a instalação e permite a passagem de dados.

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
    // Deixa as requisições passarem normalmente
}); 