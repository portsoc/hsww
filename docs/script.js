'use strict';

if (navigator.serviceWorker) {
  // eslint-disable-next-line no-inner-declarations
  async function registerServiceWorker() {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.error("Service Worker failed.  Falling back to 'online only'.", e);
    }
  }
  window.addEventListener('load', registerServiceWorker);
}

function init() {
  const msg = 'Hello Service Worker World';
  document.title = msg;
  document.querySelector('#changeme').textContent = msg;
  console.log('hello');
}

console.log('jacek');

document.addEventListener('load', init);
init();