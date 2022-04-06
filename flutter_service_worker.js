'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_48.part.js": "551912b4282b9c9143df9d2e8b197e38",
"main.dart.js_14.part.js": "6592a405cffd1b4f50e907f0bf7229ca",
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
"main.dart.js_10.part.js": "2e10741228c7121fc42c1fd199711b10",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_46.part.js": "579cba4d81ef65ec80831d08a0aae400",
"main.dart.js_21.part.js": "9453a17d377ad4ad5cbaac41ce1524d1",
"main.dart.js_16.part.js": "aecce2e69eeeca2d8e8f717724bb2704",
"main.dart.js_24.part.js": "e278265bec7f2227bfec9c8fed68c627",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"main.dart.js_34.part.js": "a32f537572e7deb60b9dcd718d038d2f",
"main.dart.js_25.part.js": "c56a3ec044755c335b4870c76e1013b4",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_1.part.js": "49f8f231a17ed4a0b5ff678053858f9f",
"main.dart.js_29.part.js": "e80e574534f6920df05e04cff0930680",
"main.dart.js_31.part.js": "0345ea3b4c5a52863b3de832443900db",
"main.dart.js_11.part.js": "6acad1366f80d15f1f4999ea2aa01f4e",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_8.part.js": "82633f4aab9f8cc12e6f1a7cb1df7427",
"main.dart.js_35.part.js": "87721bdeead3fcefda49c471a1657abd",
"main.dart.js_7.part.js": "cf93e7e3f73951f2d36e603448e0d7bc",
"main.dart.js_40.part.js": "f5854d39a3ab389f16f2db01df8eee68",
"main.dart.js_42.part.js": "8b583ff33e679df9f535f9769e3cc531",
"index.html": "484c29a005a1511bb49691b9bfd74d23",
"/": "484c29a005a1511bb49691b9bfd74d23",
"main.dart.js_47.part.js": "8bf53ab707d1306b1958e7b0f20ed1c9",
"main.dart.js_17.part.js": "faab7938ecb89995e9c39976bc4e6090",
"main.dart.js_3.part.js": "c1afbafb3675ebc3e887b89bd36a66cb",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"main.dart.js_9.part.js": "5d23be0d51f9e5ac47b1b230bd1e4ffa",
"main.dart.js_44.part.js": "4e4c9dfde0e49835fc672006e198820c",
"main.dart.js_22.part.js": "a2ae896488af2bcff4d8ec1be25cc57c",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_20.part.js": "b32b71b18b1ca690bdc36627d18f3ac8",
"main.dart.js_41.part.js": "ea5bea815e394c649c6644e4db5da376",
"main.dart.js_38.part.js": "f9c1c4c05e775896c34b99318aabbefa",
"main.dart.js_37.part.js": "ab933f166e89ff7daf6bdd910b72a9b0",
"main.dart.js_19.part.js": "e372dc5b1470557ab5326847fbd5c45d",
"main.dart.js_2.part.js": "52ec2301144f651c6197446db91bbd8f",
"main.dart.js_6.part.js": "c7c52b3a27a6987d97cdced6076e7da4",
"main.dart.js_45.part.js": "e2413070403cf8736b96475fd7b33614",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"main.dart.js_39.part.js": "5dce6774f0c3581920d9b68171912b72",
"main.dart.js_12.part.js": "97fcd677889940206ad0458f15c8dbc2",
"main.dart.js_33.part.js": "d35f02119167980a8d39d54009af0d96",
"main.dart.js_15.part.js": "1b7e2fb157fd00f77438d78c2a796bac",
"main.dart.js_30.part.js": "ab929d781541ac8eb276875886a736e5",
"main.dart.js_32.part.js": "18b75a77a172c96b298647a4700b7047",
"main.dart.js": "9dec7f7c2c2e098caafc2e22969f1523",
"main.dart.js_13.part.js": "b8ad9538d9f87b35a3426ffae824e1dc",
"main.dart.js_18.part.js": "67b5687032cb7b9ea6858e734272301d",
"main.dart.js_43.part.js": "a1a54deed35baf1b3b09f98ff36a1c32",
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
