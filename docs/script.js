'use strict';

function init() {
  const msg = 'Hello Service Worker World';
  document.title = msg;
  document.querySelector('#changeme').textContent = msg;
}

document.addEventListener('load', init);
