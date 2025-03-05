/* Log fetch requests and then serve them from the cache */
async function interceptFetch(evt) {
  const c = await caches.open(CACHE);
  const cachedCopy = await c.match(evt.request);
  if (cachedCopy) {
    const fn = evt.request.url.split('/').pop();
    console.log(`Serving ${fn} from cache.`);
  }
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
