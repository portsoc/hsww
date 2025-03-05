/* Log fetch requests and then serve them from the cache */
function interceptFetch(evt) {
  evt.respondWith(handleFetch(evt.request));
}

/* Retrieve a requested resource from the cache
 * or return a resolved promise if its not there.
 */
async function handleFetch(request) {
  const c = await caches.open(CACHE);
  const cachedCopy = await c.match(request);
  return cachedCopy || Promise.reject(new Error('no-match'));
}

const CACHE = 'hsww';
const CACHEABLE = [
  './',
  './index.html',
  './sw.js',
  './script.js',
  './style.css',
  './message.txt',
  './img/192.png',
];

/* Prepare and populate a cache. */
async function prepareCache() {
  const c = await caches.open(CACHE);
  await c.addAll(CACHEABLE);
  console.log('Cache prepared.');
}

// install the event listener so it can run in the background.
self.addEventListener('install', prepareCache);
self.addEventListener('fetch', interceptFetch);
