self.addEventListener('install', async event => {
    self.skipWaiting()
    event.waitUntil(() => { })
})
self.addEventListener('activate', async event => {
    await self.clients.claim()
})
self.addEventListener('fetch', async req => {
    req.respondWith(await self.fetch(req.request))
})
