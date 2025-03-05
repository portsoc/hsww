console.log("Service Worker that logs fetch events is now running.");

/* Log fetch requests and then process them as normal */
async function interceptFetch(evt) {
  console.log(evt.request.method, evt.request.url);
  return await fetch(evt.request);
}

self.addEventListener('fetch', interceptFetch);

