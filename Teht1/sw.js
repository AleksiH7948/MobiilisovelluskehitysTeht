// data menee hello-pwa -nimiseen välimuistitilaan selaimella.
const cacheName = 'hello-pwa';
const filesToCache = [
  '/',
  '/Tehtävät/Teht1/index.html',
  '/Tehtävät/Teht1/css/style.css',
  '/Tehtävät/Teht1/js/main.js',
];

/* Start the service worker and cache all of the app's content.

install tapahtuu, kun sovellus ladataan laitteeseen,
ja silloin data laitetaan välimuistiin.
*/

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline

Datan noutaminen välimuistista.
*/
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
