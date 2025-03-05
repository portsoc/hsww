async function init() {
  const message = await fetch('message.txt');
  const messageText = await message.text();
  const messageElem = document.querySelector("#message");
  messageElem.textContent = messageText;
}

async function registerServiceWorker() {
  if (navigator.serviceWorker) {
    await navigator.serviceWorker.register('./sw.js');
  }
}

window.addEventListener('load', init);
window.addEventListener('load', registerServiceWorker);

