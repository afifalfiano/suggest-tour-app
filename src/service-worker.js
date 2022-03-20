import { precacheAndRoute } from 'workbox-precaching';
precacheAndRoute(self.__WB_MANIFEST);

// eslint-disable-next-line no-undef
if (workbox) {
  console.log("Workbox berhasil dimuat");
} else {
  console.log("Workbox gagal dimuat");
}
// eslint-disable-next-line no-undef
workbox.precaching.precacheAndRoute([
  {url: '/index.html', revision: '1'},
  {url: '/manifest.json', revision: '1'},
]);

// eslint-disable-next-line no-undef
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|ico)$/,
// eslint-disable-next-line no-undef
  workbox.strategies.cacheFirst()
);


// eslint-disable-next-line no-undef
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
// eslint-disable-next-line no-undef
workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);
 
// eslint-disable-next-line no-undef
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
// eslint-disable-next-line no-undef
workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
// eslint-disable-next-line no-undef
new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
// eslint-disable-next-line no-undef
new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);
// eslint-disable-next-line no-undef
workbox.routing.registerRoute(
  /^https:\/\/suggesttour\.herokuapp\.com\/api/,
// eslint-disable-next-line no-undef
workbox.strategies.staleWhileRevalidate({
    cacheName: 'dataApplication',
  })
);