# Staged Service Worker

Build a service worker app from scratch, in stages.

https://portsoc.github.io/hsww/

## Stage 1: A basic structure

* `index.html` contains a single heading.
* `style.css` is a short css file that changes the colour of the heading.
* `script.js` is a simple client JS script that writes to the console on page load.

## Stage 2: Add a favicon ([see the diff](https://github.com/portsoc/hsww/commit/stage-2))
* `img/192.png` a 192x192 pixel png logo.
* `index.html` links to logo as shortcut icon and an `apple-touch-icon` (used for bookmarks).

## Stage 3: Register a Service Worker ([see the diff](https://github.com/portsoc/hsww/commit/stage-3))
* `script.js` add code to register a Service Worker
* `sw.js` is the new Service Worker script that runs in the background and writes to the console on registration.

## Stage 4: Logging Fetch Events with a Service Worker ([see the diff](https://github.com/portsoc/hsww/commit/stage-4))
* `script.js` attempts to fetch a text message to modify the "Hello World" text.
* `sw.js` adds an event listener for fetch events, and logs each one.  Notice that the service workers is installed when the page is loaded, so only really starts to be visible on reload.

## Stage 5: Adding a Cache ([see the diff](https://github.com/portsoc/hsww/commit/stage-5))
* `sw.js` uses the `install` event to add a cache and populate it with a list of cacheable files.

## Stage 6: Fetch from Cache ([see the diff](https://github.com/portsoc/hsww/commit/stage-6))
* `sw.js` uses the cache (and only the cache) to respond to fetch requests, so there's no network traffic at all.

## Stage 7: Refactor ([see the diff](https://github.com/portsoc/hsww/commit/stage-7))
* `sw.js` interceptFetch is refactored to call the handleFetch method, ready for stage 8.

## Stage 8: Updating the Cache ([see the diff](https://github.com/portsoc/hsww/commit/stage-8))
* `sw.js` when a resource is requested, it is immediately served from the cache, and a network request is used to update the cache in the background.  The SW is not allowed to go idle until the cache is updated.

## Stage 9: Make it installable with a Manifest ([see the diff](https://github.com/portsoc/hsww/commit/stage-9))
* `manifest.json` is added specifying the data necessary for a device to be able to bookmark and run the app.
* `index.html` is modified to refer to `manifest.json` 
* `sw.js` is modified to add `manifest.json` to the list of cacheable files.

## Stage 10: Address additional Lighthouse requirements ([see the diff](https://github.com/portsoc/hsww/commit/stage-10))
* `manifest.json` is added specifying the data necessary for a device to be able to bookmark and run the app.
* `index.html` is modified to refer to `manifest.json` 
* `sw.js` is modified to add `manifest.json` to the list of cacheable files.

