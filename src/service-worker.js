import { precacheAndRoute } from 'workbox-precaching';
precacheAndRoute(self.__WB_MANIFEST);

if (workbox) {
  console.log("Workbox berhasil dimuat");
} else {
  console.log("Workbox gagal dimuat");
}

workbox.precaching.precacheAndRoute([
  {url: '/index.html', revision: '1'},
  {url: '/manifest.json', revision: '1'},
]);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|ico)$/,
  workbox.strategies.cacheFirst()
);


workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);
 
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /^https:\/\/suggesttour\.herokuapp\.com\/api/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'dataApplication',
  })
);