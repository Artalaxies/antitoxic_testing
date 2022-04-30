'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_29.part.js": "d10b7152ff07e864b2cfbd3319a79bf3",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_8.part.js": "732c69775fa16bfaaed60ad1faab465e",
"main.dart.js_35.part.js": "da8a35bab332226bcef06e3657cb666a",
"main.dart.js_20.part.js": "a5c0e30151bc36367b812f20393c88f9",
"main.dart.js_44.part.js": "757e199ea898292cdfee42edf196fa45",
"main.dart.js_36.part.js": "d17de8e90c9093e0b126a892a9a7766f",
"main.dart.js_24.part.js": "de4eb65a59d1d874f5efea1bbffdc644",
"main.dart.js_11.part.js": "72eb81b114f83c95ff5336c3ac730d68",
"main.dart.js_21.part.js": "c86e506e580a0e74e1ad7b224990d1dc",
"main.dart.js_39.part.js": "ff1fa7718bbaa05f80a9a78b5e3e0015",
"main.dart.js_16.part.js": "9546f215db331ce07b0cb8b339ee8415",
"main.dart.js_27.part.js": "2c6c04ac90ffc2cfae6b64f07ee6ee64",
"main.dart.js_41.part.js": "44455196b2cb532feb9fe70ab5fa469a",
"main.dart.js_6.part.js": "39edf610dcae513d3ac809847cd7ba1c",
"index.html": "a1fa119b165d12f8102ecad1b7a6d44c",
"/": "a1fa119b165d12f8102ecad1b7a6d44c",
"main.dart.js_5.part.js": "7fb94512324eedd7011fc131f1f4109e",
"main.dart.js_18.part.js": "26251eb553b4e86c67f83e6cf7cabca7",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"main.dart.js_23.part.js": "f712d526c7a470819106248948fe0fec",
"main.dart.js_42.part.js": "91a6950b1541257d0942cb5f1c20ab94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_38.part.js": "2603cf43e6e2298d4f85bff04acac97b",
"version.json": "d6c37ea5039ae94823645b62a8c4a360",
"main.dart.js_17.part.js": "b0c7aa7a4fed3040a2da50db9b4d980f",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"main.dart.js_34.part.js": "8c0a342a367476cdb13c95e8d689de69",
"main.dart.js_9.part.js": "513c4fb5a2c2a5b72c0e90aa1dc6acd9",
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
"main.dart.js_37.part.js": "60eecba86d93101bd8bb587fc8f1c98f",
"main.dart.js_40.part.js": "0727d111cd69d709ed5b469212b0d5be",
"main.dart.js_13.part.js": "6932f1322e7b3b4475349c323cd14273",
"main.dart.js_43.part.js": "2a7502e218119090ff8c8a0c89cbec68",
"main.dart.js_3.part.js": "4442a8676d91ce22c924307c6ca1c607",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_1.part.js": "47a7ddf0c55c6f8b1f5e6f8fd1f67ed5",
"main.dart.js_14.part.js": "cd5ba723136b75cd7dea4e634f7b084b",
"main.dart.js_33.part.js": "48f4bf6766e29990c7ab513a9254b370",
"main.dart.js_2.part.js": "f5402ec17e0c03a44ba62721f5b3bc0a",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_31.part.js": "74b760548eee6ad053bf60999b53698f",
"main.dart.js_15.part.js": "39d5484e412d69a1e1a27cabf17b695d",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_12.part.js": "c5c781344658f4695c1581e3d7d333b9",
"main.dart.js": "ddc5bbf62fe5113e84588e0efb436f61",
"main.dart.js_7.part.js": "d944203a220e0b006efd25e82047792a",
"main.dart.js_28.part.js": "cf0bbb170a1660d3e0936efee5eef612",
"main.dart.js_10.part.js": "a23724d576f852034338b3c6ad7a9358",
"main.dart.js_19.part.js": "4100becedb38708c5847b8c707a3ced0",
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
