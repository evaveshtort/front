if('serviceWorker' in navigator) navigator.serviceWorker.register('/statistician-frontend/dev-sw.js?dev-sw', { scope: '/statistician-frontend/', type: 'classic' })