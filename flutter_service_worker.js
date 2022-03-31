'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_34.part.js": "d8839ab56fe957e6a03e44936fccba80",
"main.dart.js_1.part.js": "c945ca7d1b5cfa83f46b50243ee2e2d3",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"assets/assets/logo.riv": "f0f5709f257a60f4ba6312e4038a2802",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/images/album.jpg": "f56ee8f7688570656412232d7d0f6781",
"assets/images/blank-profile-picture.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/images/Logo.svg": "b4f2cad530c601c725d5bdaa8753bd24",
"assets/images/alb.png": "e2df6fa4b0fad71522e429bfd70aef4d",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/AssetManifest.json": "adcec8eba94869351e9cf0333ab6ff86",
"assets/NOTICES": "314fbdee76ae9e16ed87ae60b28b3ea0",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"main.dart.js_13.part.js": "bf23949bcca3d64a7963a9dcc20c24f6",
"main.dart.js_33.part.js": "c3e9fed88d1af080c1d2118312193945",
"main.dart.js_43.part.js": "f98beebefa26e86174b6769b564324ce",
"main.dart.js_16.part.js": "a54a6e9d4087c333ce36639a4a49c44e",
"main.dart.js_7.part.js": "75bb1a2fada9e7d05f544bbffd8b76bb",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_14.part.js": "bf76f70352bbc4fdc2fe28f767dd4dc0",
"main.dart.js_21.part.js": "2a1be64149c4a3ddcc4bdad43f972c0d",
"main.dart.js_24.part.js": "2053e1f78ee6f69d0aee51819f591491",
"main.dart.js_29.part.js": "b6af555ba5eae6d4d70bb0c22f511ea5",
"index.html": "7840cc7c9b2d888a5b933f4fbb6dd4cb",
"/": "7840cc7c9b2d888a5b933f4fbb6dd4cb",
"main.dart.js_32.part.js": "47450ef1c5985a43ea82dde42be6e10a",
"main.dart.js_3.part.js": "e79711575cbf81f737eb0b3dafd3acb4",
"version.json": "d6c37ea5039ae94823645b62a8c4a360",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"main.dart.js_17.part.js": "421c9726bad42de4713f84b0f6f8f186",
"main.dart.js_45.part.js": "48c54a7da6b9fef08dda3761b652e5a2",
"main.dart.js_48.part.js": "48a16cd35103b132b0b8e6eb4eb40755",
"main.dart.js_20.part.js": "fbae94d8a9fc7fca7d6897da73061b6b",
"main.dart.js_9.part.js": "5f3de5676162f09521c95c7c7347c128",
"main.dart.js_35.part.js": "f493b91560b5b39dadcd5dc6496e3d3d",
"main.dart.js_15.part.js": "1729bdaa83a08fa5e6924d64d4d7e5b5",
"main.dart.js_39.part.js": "bf4b8b913ece4541b829075a48d2499a",
"main.dart.js_18.part.js": "e8bcbd8fd68336c67541668e46171ee9",
"main.dart.js": "85a01961418956f476d5cedecbd52e74",
"main.dart.js_42.part.js": "1d8fb313ad48ea5e25bfbb683d6de6ba",
"main.dart.js_10.part.js": "1f6aa2df6d9894cfed71cf089218646a",
"main.dart.js_19.part.js": "af6ca3658da9ef28ddf645064730d61a",
"main.dart.js_6.part.js": "5dabf7e3e6f6a45dcebc2d676857e155",
"main.dart.js_47.part.js": "2ac7afd5ebfc3562f1748adee8bd181c",
"main.dart.js_8.part.js": "12560a92b7da6d475d223565f2cbd419",
"main.dart.js_11.part.js": "16a1dcaaef2eaa2ef91496133c66577b",
"main.dart.js_38.part.js": "3941d3afa8a201d1531d68c36695f309",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_46.part.js": "42c21c39a6bc140c1ba4d505e997d8a4",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_44.part.js": "21c6fa70fc163b7ed05995cbfc743bef",
"main.dart.js_40.part.js": "6ab2ef43b08a2899ed1235ceb3b5e3e9",
"main.dart.js_30.part.js": "f75507b72832524fefdbd4e548e0d3e3",
"main.dart.js_2.part.js": "770dbe9a64c8e92a11c08f331f945bc5",
"main.dart.js_31.part.js": "ed26815fbd5501ba236ae7a7d93ade2a",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"main.dart.js_25.part.js": "349fac2b3ff04868927c79e8f05ba751",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_41.part.js": "95e0ed3bd4c456f3a27cb526f18d8883",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_22.part.js": "ab9846ccfee7c0980919d3398ee5def9",
"main.dart.js_12.part.js": "646801ae64d72449049e519f18edcec2",
"main.dart.js_37.part.js": "2c9948a7f5b8c27cf4ca014e98dc1504"
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
