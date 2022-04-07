'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_48.part.js": "87423afdbd26d22cfdcaa5c6e3bbdc12",
"main.dart.js_14.part.js": "d5e0767b46bbf3190d0f58cf227f0515",
"assets/NOTICES": "5ce8f01e75726aca19c73fb1055c9c14",
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
"main.dart.js_10.part.js": "6e102f3d1ddd0d8d5696f4bce031daf1",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_46.part.js": "1f084e55658e0a253f79caa079ceeee5",
"main.dart.js_21.part.js": "9cfb8ab15b84540320354fecdbe96d42",
"main.dart.js_16.part.js": "06bbe4a87b123b329577796a24444e47",
"main.dart.js_24.part.js": "2685d7241a7dafc46d74cba1bc906b5d",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"main.dart.js_34.part.js": "08f4647e48f55c14f4084e24def3275c",
"main.dart.js_25.part.js": "aef501ed3ebc24c37d9771d6b699c400",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_1.part.js": "9daaba6e64334f2941393747927f5e43",
"main.dart.js_29.part.js": "1da6706dc8e7e719c2a535ab2402e2b7",
"main.dart.js_31.part.js": "291d2f5736f6614258c9bf14843179b7",
"main.dart.js_11.part.js": "5055194e575d7bcb10aadd779249e8ac",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_8.part.js": "998487688153789dbb0368fa03e63c94",
"main.dart.js_35.part.js": "801fcda1fdae41850002a1454b80961e",
"main.dart.js_7.part.js": "d80591db6f760766e94b1ff2897f52f5",
"main.dart.js_40.part.js": "792743e41980d81daf5da309487d0f97",
"main.dart.js_42.part.js": "bc5f40bb4ce1973ad78af6da4e6bf608",
"index.html": "29976d1bd037407227940562f2d74c21",
"/": "29976d1bd037407227940562f2d74c21",
"main.dart.js_47.part.js": "a3ebd2e687559c38aecb6df0cc257008",
"main.dart.js_17.part.js": "2c3bc7fe0633aa328f3ddadea978f9ef",
"main.dart.js_3.part.js": "596218d79ed929d6009a1a0c5712267d",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"main.dart.js_9.part.js": "dbe2149182b8720387e1fc941feab2a7",
"main.dart.js_44.part.js": "17afac901f99c9befedd8c6ba16164d5",
"main.dart.js_22.part.js": "bc469ce6f4e173fbb12ec17268e5d3ad",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_20.part.js": "335effc74739ae8a8504edec1e509db3",
"main.dart.js_41.part.js": "7a6b0fad607930a6445cb9cc68b2d835",
"main.dart.js_38.part.js": "8d5a800db21ddb2d3c82cd69ec40ea88",
"main.dart.js_37.part.js": "2f31d7278efd6cf9723c77f101dda291",
"main.dart.js_19.part.js": "e372dc5b1470557ab5326847fbd5c45d",
"main.dart.js_2.part.js": "6c5b48e40e3aecec5ec9b3bac2ac3a44",
"main.dart.js_6.part.js": "a17ba0f769113aebf646616854a41679",
"main.dart.js_45.part.js": "efb985b3d58eb9b990aa17ba0455ec4a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"main.dart.js_39.part.js": "c7de79318f4a0489601484a14bd55ef9",
"main.dart.js_12.part.js": "7689f333aae8296c52ead3e71e1e055d",
"main.dart.js_33.part.js": "7cb2de015b95edcbde2629ee883940f0",
"main.dart.js_15.part.js": "fb36e188d72caf9140d6def66d26776e",
"main.dart.js_30.part.js": "eb3847944c8344e975b1d2490a298af8",
"main.dart.js_32.part.js": "18b75a77a172c96b298647a4700b7047",
"main.dart.js": "ca8d098b293be53cc41fa3de0ce941a1",
"main.dart.js_13.part.js": "f214e51869550bf694930ce2f308f012",
"main.dart.js_18.part.js": "67b5687032cb7b9ea6858e734272301d",
"main.dart.js_43.part.js": "62c3a0512d55620e1a08263d6ba2889c",
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
