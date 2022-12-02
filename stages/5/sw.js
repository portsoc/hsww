/* Log fetch requests and then process them as normal */
async function interceptFetch(evt) {
  console.log(evt.request.method, evt.request.url);
  return await fetch(evt.request);
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
async function prepareCache(evt) {
  const c = await caches.open(CACHE);
  await c.addAll(CACHEABLE);
  console.log("Cache prepared.")
}

// install the event listener so it can run in the background.
self.addEventListener('install', prepareCache);
self.addEventListener('fetch', interceptFetch);

