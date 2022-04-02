'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_48.part.js": "8e7e95547094de12f15beb30f40ee43e",
"main.dart.js_14.part.js": "b2b8c3eecc6611bb5276e1e95f800fb8",
"assets/NOTICES": "314fbdee76ae9e16ed87ae60b28b3ea0",
"assets/assets/logo.riv": "f0f5709f257a60f4ba6312e4038a2802",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/AssetManifest.json": "adcec8eba94869351e9cf0333ab6ff86",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/alb.png": "e2df6fa4b0fad71522e429bfd70aef4d",
"assets/images/blank-profile-picture.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/images/album.jpg": "f56ee8f7688570656412232d7d0f6781",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/images/Logo.svg": "b4f2cad530c601c725d5bdaa8753bd24",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"main.dart.js_10.part.js": "ac6a04fc8192039d3bbb67556c232cd3",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_46.part.js": "ea55805c1087c4bd823e54badc89a5ee",
"main.dart.js_21.part.js": "d560b349152bff8425386ea72962bf9e",
"main.dart.js_16.part.js": "505196362a906dded7c7772d598a86d9",
"main.dart.js_24.part.js": "4a968a4da7f8d0e77d29a657cd59856f",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"main.dart.js_34.part.js": "61e323061e17a38764ad1a7237642d2d",
"main.dart.js_25.part.js": "fca9816f098b4c47c655a2f00cd703d2",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_1.part.js": "5414371709e3fad82e20328aced0ae6a",
"main.dart.js_29.part.js": "fd04d8b52caf73bf466f26aacdb16681",
"main.dart.js_31.part.js": "d9ec196bd62a96ee80b7b6f1ff459c46",
"main.dart.js_11.part.js": "6a1d515fce5a959c932b090c4e570123",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_8.part.js": "1bd2717e498b0c2ba827cd64aafef97b",
"main.dart.js_35.part.js": "516dce06a6b6b193898af73705380cf9",
"main.dart.js_7.part.js": "cf93e7e3f73951f2d36e603448e0d7bc",
"main.dart.js_40.part.js": "a355827af088eea211ef0ebd47b4a8b1",
"main.dart.js_42.part.js": "d9901b0574c7df77deb2b8446b2a24de",
"index.html": "f73e0b55aa7c5ca0a2aa14fb07c83d98",
"/": "f73e0b55aa7c5ca0a2aa14fb07c83d98",
"main.dart.js_47.part.js": "c0a5ce585db9781e91e5b38ba1e28db4",
"main.dart.js_17.part.js": "a4b4e46d050c041c661b2ad53440dad9",
"main.dart.js_3.part.js": "3db51547f1213f7c7e121596769b42af",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"main.dart.js_9.part.js": "35704880825fe433711c56d8d7919695",
"main.dart.js_44.part.js": "928af1c09fa77e7b3adfe94be08af18c",
"main.dart.js_22.part.js": "0a9de289019049560b3750d8809e04f8",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_20.part.js": "fcc844ae40d9e5cc5f30414ee9117b71",
"main.dart.js_41.part.js": "b8288b50681e7c519eba768348936689",
"main.dart.js_38.part.js": "e55f80e79c06533269b803ed7302e686",
"main.dart.js_37.part.js": "5387d27708682471ee9d3b09ef81b209",
"main.dart.js_19.part.js": "e372dc5b1470557ab5326847fbd5c45d",
"main.dart.js_2.part.js": "dbe7d43a97c6a896049401084a162b15",
"main.dart.js_6.part.js": "e7c4ecde1e934e069b0c550536b8b531",
"main.dart.js_45.part.js": "6df0cfcaf1c70c75b5d82c20e0bb681f",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"main.dart.js_39.part.js": "5dce6774f0c3581920d9b68171912b72",
"main.dart.js_12.part.js": "70e43529758ca710c3767df9ad26202e",
"main.dart.js_33.part.js": "45a87339ea402eccabeaf2cf9eddbd15",
"main.dart.js_15.part.js": "8fb8b149c3666ede1567709338224795",
"main.dart.js_30.part.js": "238fce42d26b9fc57805e8d97b100eac",
"main.dart.js_32.part.js": "c026b2cc9e2359bef4e0b78681b82e2f",
"main.dart.js": "a195cea3002e595cc8550703e75d81c6",
"main.dart.js_13.part.js": "db9d4890ca338bddee86e5a045935ed1",
"main.dart.js_18.part.js": "2ff0c081114a35acb25631925f3990e3",
"main.dart.js_43.part.js": "d0659d2630df1802c9a9ec9ee821b7af",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "d6c37ea5039ae94823645b62a8c4a360"
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
