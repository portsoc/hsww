/* Log fetch requests and then serve them from the cache */
async function interceptFetch(evt) {
  evt.respondWith(handleFetch(evt.request));
  evt.waitUntil(updateCache(evt.request));
}

/* Retrieve a requested resource from the cache
 * or return a resolved promise if its not there.
 */
async function handleFetch(request) {
  const c = await caches.open(CACHE);
  const cachedCopy = await c.match(request);
  return cachedCopy || Promise.reject(new Error('no-match'));
}

/* Invoke the default fetch capability to
 * pull a resource over the network and use
 * that to update the cache.
 */
async function updateCache(request) {
  const c = await caches.open(CACHE);
  const response = await fetch(request);
  console.log("Updating cache ", request.url)
  return c.put(request, response);
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
  './manifest.json',
];

/* Prepare and populate a cache. */
async function prepareCache(evt) {
  const c = await caches.open(CACHE);
  await c.addAll(CACHEABLE);
  console.log("Cache prepared.")
}

// install the event listener so it can run in the background.
self.addEventListener('install', prepareCache);
self.addEventListener('fetch', interceptFetch);

