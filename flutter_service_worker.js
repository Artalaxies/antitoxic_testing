'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "262c9d88f4e2e3572888fd10c340903a",
"main.dart.js_17.part.js": "2875f45bdebe4d22ac2242f6fb973cc0",
"main.dart.js": "94408019c119b0e3b65a664c1a051d26",
"index.html": "f92c71988a09cc24cde5d70cb8da5492",
"/": "f92c71988a09cc24cde5d70cb8da5492",
"main.dart.js_2.part.js": "21ffb98ae6e02a03789cf9d004fcc080",
"main.dart.js_1.part.js": "c9be3017d60859a7d046a36c50fba022",
"main.dart.js_34.part.js": "08f4647e48f55c14f4084e24def3275c",
"main.dart.js_25.part.js": "13f0cf62064f61aa2d0980aba201139b",
"main.dart.js_37.part.js": "f58a0c663608ee1c9c03b4e7ccd61e75",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_47.part.js": "e09a76314917a11f16f32119a214cf4d",
"main.dart.js_9.part.js": "a8ce303f558589df3608ee09e8f56163",
"main.dart.js_39.part.js": "c7de79318f4a0489601484a14bd55ef9",
"main.dart.js_24.part.js": "eb53c157dbf6eb372c5c1ff73b1daf8d",
"main.dart.js_22.part.js": "f9751450d2af6f08c58e7394cc615527",
"main.dart.js_21.part.js": "6f2a8d7c4c04822f56e84f3e76299d28",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_45.part.js": "efb985b3d58eb9b990aa17ba0455ec4a",
"main.dart.js_46.part.js": "9a2f17bb2fb96c7d4c5b2fa3fe3d54b0",
"main.dart.js_11.part.js": "5055194e575d7bcb10aadd779249e8ac",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_7.part.js": "d80591db6f760766e94b1ff2897f52f5",
"main.dart.js_32.part.js": "18b75a77a172c96b298647a4700b7047",
"main.dart.js_19.part.js": "e372dc5b1470557ab5326847fbd5c45d",
"main.dart.js_13.part.js": "f214e51869550bf694930ce2f308f012",
"main.dart.js_35.part.js": "7446f59e3225dacb8ab25b8130d4359e",
"main.dart.js_8.part.js": "e7218a5d95597459c8d378a57850a517",
"main.dart.js_15.part.js": "fb36e188d72caf9140d6def66d26776e",
"main.dart.js_31.part.js": "291d2f5736f6614258c9bf14843179b7",
"main.dart.js_48.part.js": "5de984d9fe0d1ae21c4c94b4605a04f8",
"main.dart.js_18.part.js": "67b5687032cb7b9ea6858e734272301d",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/AssetManifest.json": "adcec8eba94869351e9cf0333ab6ff86",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/images/blank-profile-picture.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/images/alb.png": "e2df6fa4b0fad71522e429bfd70aef4d",
"assets/images/album.jpg": "f56ee8f7688570656412232d7d0f6781",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/Logo.svg": "b4f2cad530c601c725d5bdaa8753bd24",
"assets/assets/logo.riv": "f0f5709f257a60f4ba6312e4038a2802",
"assets/NOTICES": "5ce8f01e75726aca19c73fb1055c9c14",
"main.dart.js_14.part.js": "81035b967faaab5c7d77efe4af89dc43",
"main.dart.js_43.part.js": "62c3a0512d55620e1a08263d6ba2889c",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"main.dart.js_40.part.js": "792743e41980d81daf5da309487d0f97",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_3.part.js": "e845c4e0ee845660fb0bd5c3c66816b2",
"main.dart.js_29.part.js": "33f90661e4169cbb7559c51bf4d9aa38",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"version.json": "d6c37ea5039ae94823645b62a8c4a360",
"main.dart.js_12.part.js": "0b319a70e3b752cac2874c72ec417949",
"main.dart.js_6.part.js": "698aa0a29c73763c6f3f711a79375c2a",
"main.dart.js_41.part.js": "e87236a1a5e3704e21d1c6379df2fc33",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_38.part.js": "84a6c41843773040c562fb3fd8d5488d",
"main.dart.js_33.part.js": "844e39c5b5ed201c9b06de53a696f328",
"main.dart.js_44.part.js": "20c038b62b3ae507d86e063f42216cbf",
"main.dart.js_42.part.js": "ba8aea15124bd6dbac6187a88e2ee7ae",
"main.dart.js_16.part.js": "79f81cd4b31b68c9fab94f7e73b629d5",
"main.dart.js_10.part.js": "10702cb2c1097d044b9fe3773e696068",
"main.dart.js_20.part.js": "0bf617b7ad00108478d5eb41ba6d8a8a",
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
