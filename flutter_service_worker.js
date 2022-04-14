'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "01d2e0a018b44a5215a6dea45f60a8fc",
"main.dart.js_17.part.js": "48dac1ee4285f9c99ba96933a5210dbc",
"main.dart.js": "89daba9e342e8520fda54a97ce3c3a69",
"index.html": "2dc632af627fbc7c5e7d10b8d2e624d9",
"/": "2dc632af627fbc7c5e7d10b8d2e624d9",
"main.dart.js_2.part.js": "3e0ed69ce92f9cf1087eb77504f81df6",
"main.dart.js_1.part.js": "bb9cb1b559009d63bf3dad18f2301f81",
"main.dart.js_34.part.js": "3e20d09f6425956826847764c99110c4",
"main.dart.js_25.part.js": "db42c7a6ad48260be6ac0d93585f285f",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_47.part.js": "bca306f2720aadcc53dff00282ef0885",
"main.dart.js_9.part.js": "18402184fec6397f8d3c4202d3e45fcb",
"main.dart.js_39.part.js": "d169a4b1a3cd0028e6c856dd534330a8",
"main.dart.js_22.part.js": "006d057c2a56d7034727da7f16dcb5a8",
"main.dart.js_26.part.js": "220dade6123f86be4848ae8673a99461",
"main.dart.js_21.part.js": "0095a3179f6c415a921ae10508321c4f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_45.part.js": "ea6193f09ffd96323b00294c7ba31ed7",
"main.dart.js_46.part.js": "4296482efb9011a7967e3fd480a4b608",
"main.dart.js_11.part.js": "5b2aa21509f4a4923aaacfe1df6e7618",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_7.part.js": "2f00671ff93e0ebcaa880098ca96c892",
"main.dart.js_32.part.js": "ef5193c16220e94afbbab248da862f9d",
"main.dart.js_19.part.js": "cf53675f82f82308966dc898123a7de9",
"main.dart.js_23.part.js": "24539a2675615effa8a2041618d5dd37",
"main.dart.js_13.part.js": "ec4cc67870e2d1d0e5507f9938efff24",
"main.dart.js_35.part.js": "c014ba10482810215a59a28871a0648e",
"main.dart.js_8.part.js": "3e8f0c4b5aa28e372c8aefe7530e06ed",
"main.dart.js_15.part.js": "5a293831482bd86944557f0b7f9d2f4c",
"main.dart.js_31.part.js": "35d3cc4357df54e41c2b229a9d6f62be",
"main.dart.js_36.part.js": "e2ce94d6ae9cf8bec8767af465c48928",
"main.dart.js_48.part.js": "8f9ee3436e058884446d9fd81e48aa4b",
"main.dart.js_18.part.js": "cac3ef4604df868bb6bba9ad35ebfdfd",
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
"main.dart.js_14.part.js": "514c1b4789c87c00fdf9d355ceeeed49",
"main.dart.js_43.part.js": "6ab1e42aba2c14b5e51171aa35792909",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"main.dart.js_40.part.js": "0ca6146ab0db45f1725b0f3ba4ae9bd4",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_3.part.js": "b488d46e9965d689255ac4256be098f6",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"version.json": "d6c37ea5039ae94823645b62a8c4a360",
"main.dart.js_12.part.js": "93dcd405d3c54babbd4439792f8b89e9",
"main.dart.js_6.part.js": "bc2bdbbb7540dec822d8cf408dad07d8",
"main.dart.js_41.part.js": "d6abfe0bdea19335c185e57ce61c2fb0",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_38.part.js": "e1fb08cf3bbba3e6c0842e022d80af15",
"main.dart.js_49.part.js": "7f293bfaf1d6ae6edb705128f81ce97d",
"main.dart.js_33.part.js": "af634392e4c2eb7f82e207342e0225de",
"main.dart.js_44.part.js": "b9d27beb01b7ffaeb0f32d1338a594d0",
"main.dart.js_42.part.js": "cebcdd38d6fa1f9cd3197a47df2c211b",
"main.dart.js_16.part.js": "c88547b5590259e939da889b5e06330d",
"main.dart.js_10.part.js": "8c33abf35538dc235c51a25cd1d9a7e6",
"main.dart.js_20.part.js": "b83f3335a0b6cb3573b04446d220b4d9",
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
