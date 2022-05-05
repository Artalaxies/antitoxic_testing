'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_29.part.js": "5054639a28aaa732bbba45a84acd56ee",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_8.part.js": "5a7e185396c2af7b34ec53928693fd13",
"main.dart.js_35.part.js": "2d7abea1194b6849de4650045bba230b",
"main.dart.js_20.part.js": "511d7fdc12cfbd556a5769a317633abe",
"main.dart.js_44.part.js": "4c75d274a8fc05bb6ed25d9705b5f994",
"main.dart.js_36.part.js": "27e0c0a98369efa7317b44708719df6f",
"main.dart.js_24.part.js": "d0aab4400e16f8a48a4026fe5f6cc742",
"main.dart.js_11.part.js": "ccf9de1311997623891679b6af506ba1",
"main.dart.js_21.part.js": "2823daa4b81fb9a99c8dc540b317af97",
"main.dart.js_39.part.js": "d1c1b69535729fff7efe02cfbc617598",
"main.dart.js_16.part.js": "82caee16f53e886ed830f6be556ed39c",
"main.dart.js_27.part.js": "e974c18d5bc8d4a6a4a677a2a15654cd",
"main.dart.js_41.part.js": "fadf579a2a5ff1f9ef6b4c190edfce7f",
"main.dart.js_6.part.js": "73d0445fdb796274ab6ba34298d1e71b",
"index.html": "04ff14066873769ad8ba5c2582ce7b3c",
"/": "04ff14066873769ad8ba5c2582ce7b3c",
"main.dart.js_5.part.js": "43e20bb2c840ad678ded9aa40934be65",
"main.dart.js_18.part.js": "ff85eac28b42813013d2143a2a65b696",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"main.dart.js_23.part.js": "7d84ff0ad52fc27f9d3f800a16aa9cc0",
"main.dart.js_42.part.js": "9912cc4c09f9eab42fa3744e5662a037",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_38.part.js": "50743e2d279e7702035c7ab122912be5",
"version.json": "d6c37ea5039ae94823645b62a8c4a360",
"main.dart.js_17.part.js": "6924ea07e7496ef784e2804d2f1a5a95",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"main.dart.js_34.part.js": "cb10eca054f4a1175383d7e5fd286e92",
"main.dart.js_9.part.js": "24379dbce4398bcbe14d7145e627defa",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/NOTICES": "6be0bfd304266b9ed36ce7cc80ae18bb",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/images/blank-profile-picture.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/images/album.jpg": "f56ee8f7688570656412232d7d0f6781",
"assets/images/Logo.svg": "b4f2cad530c601c725d5bdaa8753bd24",
"assets/images/alb.png": "e2df6fa4b0fad71522e429bfd70aef4d",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/assets/logo.riv": "f0f5709f257a60f4ba6312e4038a2802",
"assets/AssetManifest.json": "bf740d9f816a76e6d758bf3e36f37c51",
"main.dart.js_37.part.js": "37879b6940bf0ad7a4112eefd6675b0e",
"main.dart.js_40.part.js": "dcd404bb12be876b9f82ab773cee11ad",
"main.dart.js_13.part.js": "78d66e6e65de3466248c59a077615790",
"main.dart.js_43.part.js": "7d2a5b5b13798a498cb22234adcd308f",
"main.dart.js_3.part.js": "fd2aa14d0148906717a51a185c3cc898",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_1.part.js": "8c64f5630ecef8a2fd269726243e9bbf",
"main.dart.js_14.part.js": "cbe2e936dfdda3b03f6737488016ece1",
"main.dart.js_33.part.js": "5778129f2390496c5e460468e4f4f8a6",
"main.dart.js_2.part.js": "19f574c426cfcff750a34943a135e6cf",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_31.part.js": "00b6ff11b31a7caf2ef29cb766edcd2a",
"main.dart.js_15.part.js": "7ce4901f741a64e2e14399f928b3b675",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_12.part.js": "c55fac1f3e41e31de14bbee45d7f8f7c",
"main.dart.js": "0c9e5969476134ea1d6c49be0aca757a",
"main.dart.js_7.part.js": "2270a4b9679e9b603fa04a98f28cb9c1",
"main.dart.js_28.part.js": "c46f92025315ad72fa5b39ed8e633df1",
"main.dart.js_10.part.js": "ffdede1c9f38e2717200c0cf4aa3389e",
"main.dart.js_19.part.js": "59025e90c000525c590f450373bba642",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3"
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
