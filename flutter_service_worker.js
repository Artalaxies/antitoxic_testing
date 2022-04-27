'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "6b10d66d66bd8e69065df64c4f597a7a",
"main.dart.js_17.part.js": "0a36ede44dfe7526c232b25febf94b3c",
"main.dart.js": "22b31f4b5233991d7bbf9949faa7ae85",
"index.html": "72aff9b62b7c793d7f1129afc069e69f",
"/": "72aff9b62b7c793d7f1129afc069e69f",
"main.dart.js_2.part.js": "cde32a0daa86b49cf33ba681587220a2",
"main.dart.js_1.part.js": "c92dca74177fcba9e6fee493f71d7d33",
"main.dart.js_34.part.js": "4cf49c99df0b7700f315cf381f82d6f0",
"main.dart.js_25.part.js": "67912e92d63519917f06722712b182f1",
"main.dart.js_37.part.js": "ef9efba0908d36b6b3e62899677d028c",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_9.part.js": "cf5f7951c65d3822d4f52e4c2fd7e579",
"main.dart.js_39.part.js": "c7e997563363fcaf4fc8fb67f0d5d3c6",
"main.dart.js_24.part.js": "92964ecc7f84bee85467a78363491467",
"main.dart.js_22.part.js": "ed3444c7af74cfee2093a46dd890c24a",
"main.dart.js_21.part.js": "a2afeca1412370193c51b7dc51dad8fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_45.part.js": "60564d57460568b9224a0f9f52c2149b",
"main.dart.js_11.part.js": "4f6a5983a869cd9a2bade24db11a1328",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_7.part.js": "e466da11b4ed7a7b5daac5d4219bbd85",
"main.dart.js_32.part.js": "8d4d140f3a953ba1714d1288152ede22",
"main.dart.js_19.part.js": "9a70344624cd3b3eff6fc99d83d014cf",
"main.dart.js_13.part.js": "a1d59bab3d44328d2386f8e9132a797d",
"main.dart.js_35.part.js": "a74b8a691bcad0cfb67e3b7c56cf1568",
"main.dart.js_8.part.js": "1ed48bb285494abe710b4b210ab6fb39",
"main.dart.js_15.part.js": "9f0d1f692a414b7ba4ea734dc44ec959",
"main.dart.js_36.part.js": "afe77d1ccc8934d72bc0f91028ac86cb",
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
"main.dart.js_28.part.js": "1f9e9a55ea81d86844b69c833dce25c0",
"main.dart.js_43.part.js": "412aa3ecea1c3114640025ed1b8f3298",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"main.dart.js_40.part.js": "a8249e35bafe668294ae9864962445a0",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_3.part.js": "79a4b27b22bf63dca5b0c24fae793087",
"main.dart.js_29.part.js": "3269bfae0faa965ddbd22dcaf6b35cf6",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"version.json": "d6c37ea5039ae94823645b62a8c4a360",
"main.dart.js_5.part.js": "c7085a14e24b4966e2bdb2b7b90a08b9",
"main.dart.js_12.part.js": "4eb6febfceedb425bd6672dae1644098",
"main.dart.js_6.part.js": "f8bbb21d0244ae658d6b9973139fbee3",
"main.dart.js_41.part.js": "a38157312401037cd557c41ced24e408",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_38.part.js": "f4b55548ba76a0b7fd72f894812cdc03",
"main.dart.js_44.part.js": "2e8f6b2f123d2160554bcc9a1129b1d0",
"main.dart.js_42.part.js": "1ec3a69535c6318404e2f5b369b8a6e3",
"main.dart.js_16.part.js": "d769fef060337b01f66d2498a7c44be6",
"main.dart.js_10.part.js": "bd71a525d1d747ed96f300153f920b83",
"main.dart.js_20.part.js": "b07aa995cbfdc840b34c3da148686e07",
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
