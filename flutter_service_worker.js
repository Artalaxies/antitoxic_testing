'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "ad480d192ec46a266cac2cff4a22805d",
"main.dart.js_17.part.js": "1520653c06ec190dd6c5ddbbc8c555a6",
"main.dart.js": "c279f9eafe4bb8af80d878483aec60a1",
"index.html": "3dfd34b3e211e513c1e14562c4c93900",
"/": "3dfd34b3e211e513c1e14562c4c93900",
"main.dart.js_2.part.js": "cc5ad49733abd3550645759575b0776f",
"main.dart.js_1.part.js": "5b2101f12204fb3f1165171725bae14d",
"main.dart.js_34.part.js": "ca03f74db39a8896a2a8480377775afd",
"main.dart.js_25.part.js": "2e4b6e0acc7dbd3ff038da1221d10e71",
"main.dart.js_37.part.js": "ef9efba0908d36b6b3e62899677d028c",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_9.part.js": "ea31e858bb024245c4449ae5ed421fc4",
"main.dart.js_39.part.js": "f2b5df635c48336658bf03d1bf33503c",
"main.dart.js_24.part.js": "3a7a326a4a550009e1189dff0269c286",
"main.dart.js_22.part.js": "1cfa86b66e45e99c4b67a09d84f4caf7",
"main.dart.js_21.part.js": "2b824ad1806d556b37ea941dfe67910b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_45.part.js": "d2b86b865f88efc478b4d7d6e0ea9a4a",
"main.dart.js_11.part.js": "25c322cab30981141735220575cce050",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_7.part.js": "ca20c1d9279953a7bdeb075e5d441c02",
"main.dart.js_32.part.js": "699da5c5a677c57f1334334f538b8fe1",
"main.dart.js_19.part.js": "9a70344624cd3b3eff6fc99d83d014cf",
"main.dart.js_13.part.js": "4f6a07960df05caecd5a60b230507775",
"main.dart.js_35.part.js": "6168e4ebd264c6cfd5d0fe9e0e886827",
"main.dart.js_8.part.js": "3517c08ea6178dd4c283dd07defeec1f",
"main.dart.js_15.part.js": "217326d38ee1359b0b47282506fe16d2",
"main.dart.js_36.part.js": "405a5fca0581272d0feed44cbebb6cf2",
"main.dart.js_18.part.js": "f274ff831110e5633305380e5361a99b",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/AssetManifest.json": "bf740d9f816a76e6d758bf3e36f37c51",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/images/blank-profile-picture.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/images/alb.png": "e2df6fa4b0fad71522e429bfd70aef4d",
"assets/images/album.jpg": "f56ee8f7688570656412232d7d0f6781",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/Logo.svg": "b4f2cad530c601c725d5bdaa8753bd24",
"assets/assets/logo.riv": "f0f5709f257a60f4ba6312e4038a2802",
"assets/NOTICES": "6be0bfd304266b9ed36ce7cc80ae18bb",
"main.dart.js_14.part.js": "40378a8e16a710d1d21fb4ead4fbfebc",
"main.dart.js_28.part.js": "c82180c42dbb7c2a66d118ea3b30482c",
"main.dart.js_43.part.js": "94c45e415c6e4c3e9833449e232befbb",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"main.dart.js_40.part.js": "565fc6d3ceae19c57594058d74f3f5c1",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_3.part.js": "166cc2d4b49848d3160873e7608a7119",
"main.dart.js_29.part.js": "3269bfae0faa965ddbd22dcaf6b35cf6",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"version.json": "d6c37ea5039ae94823645b62a8c4a360",
"main.dart.js_5.part.js": "add81c9de0eb4d815f77a6ae78ee7d0f",
"main.dart.js_12.part.js": "92ece21118c098377d041fafa74b32b5",
"main.dart.js_6.part.js": "f8bbb21d0244ae658d6b9973139fbee3",
"main.dart.js_41.part.js": "cefe06467c509cfcd9705134db57d1ec",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_38.part.js": "137fcc8f83b4e7a1905f64b2a0778829",
"main.dart.js_44.part.js": "a28bdfeb74c1d9559e1799aa81d418ab",
"main.dart.js_42.part.js": "a3ba0d8792da6bf01115134f3e4f293e",
"main.dart.js_16.part.js": "fed1ec75de50e439a3dc13faef180bd7",
"main.dart.js_10.part.js": "b97fca37a9fa8a962dec8e86e49f8f01",
"main.dart.js_20.part.js": "11f0b020e1db98287927e06ea09e2cea",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
