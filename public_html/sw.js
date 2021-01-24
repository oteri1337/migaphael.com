let appCache;
const appCacheKey = "traderfxm.com-2020-09-19";

self.addEventListener("push", (event) => {
  const { subject, body } = event.data.json();
  self.registration.showNotification(subject, { body });
});

self.addEventListener("install", async (event) => {
  console.log("installing", appCacheKey);
  appCache = await caches.open(appCacheKey);
  appCache.addAll([
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.gstatic.com/s/materialicons/v53/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
    "/",
    "/signin.html",
  ]);
  self.skipWaiting();
});

self.addEventListener("activate", async () => {
  console.log("activating", appCacheKey);
  let allCacheKeys = await caches.keys();
  allCacheKeys.forEach((cacheKey) => {
    if (cacheKey != appCacheKey) caches.delete(cacheKey);
  });
});

self.addEventListener("fetch", (event) => {
  // this callback must be syncronous
  // this callback can alter the response by passing a Response object to event.responseWith
  // this callback can alter the response by passing a callback with one argument to event.responseWith

  return event.respondWith(asyncCallback(event));
});

var asyncCallback = async function ({ request }) {
  // this callback must return a Response object

  const { method, url } = request;
  const { origin } = location;

  // home page
  if (method === "GET" && url === origin) {
    const cacheResponse = await caches.match("/");
    return cacheResponse;
  }

  // static assets
  if (
    method === "GET" &&
    url.startsWith(`${origin}/assets`) &&
    !url.endsWith("reactapp.js") &&
    !url.endsWith("reactapp.css")
  ) {
    const cacheResponse = await caches.match(url);

    if (cacheResponse === undefined) {
      const fetchResponse = await fetch(request);
      const fetchResponseClone = await fetchResponse.clone();
      appCache = await caches.open(appCacheKey);
      appCache.put(url, fetchResponseClone);
      return fetchResponse;
    } else {
      return cacheResponse;
    }
  }

  // google fonts
  if (method === "GET" && url.startsWith("https://fonts")) {
    const cacheResponse = await caches.match(url);

    if (cacheResponse === undefined) {
      const fetchResponse = await fetch(request);
      const fetchResponseClone = await fetchResponse.clone();
      appCache = await caches.open(appCacheKey);
      appCache.put(url, fetchResponseClone);
      return fetchResponse;
    } else {
      return cacheResponse;
    }
  }

  // fetch from network
  const fetchResponse = await fetch(request);
  return fetchResponse;
};
