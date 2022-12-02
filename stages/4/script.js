'use strict';

async function init() {
  console.log('js ready');
  console.log('fetching message');
  const message = await fetch('message.txt');
  const messageText = await message.text();
  const messageElem = document.querySelector("#message");
  messageElem.textContent = messageText;
  console.log('message fetched');
}

window.addEventListener('load', init);

async function registerServiceWorker() {
  if (navigator.serviceWorker) {
    await navigator.serviceWorker.register('./sw.js');
  }
}

window.addEventListener('load', registerServiceWorker);

