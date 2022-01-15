'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_6.part.js": "8c90290d5f7dc9d48938aca8d9b31bb4",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_19.part.js": "1fb591d7669b66a4f5853fa523436461",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_32.part.js": "5e0e72268fb72bd4363ce598ed9a8f17",
"main.dart.js_29.part.js": "eb0e87c4e42c574681aff4567f0dbdce",
"main.dart.js_34.part.js": "04d34b52ad27a6272020c5f5e2d8b0d2",
"main.dart.js_2.part.js": "620d23438c9f42eafa40f3dcd073061d",
"assets/AssetManifest.json": "adcec8eba94869351e9cf0333ab6ff86",
"assets/assets/logo.riv": "f0f5709f257a60f4ba6312e4038a2802",
"assets/NOTICES": "67ffd2cf191adcb87b930d7c0adc5703",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/images/album.jpg": "f56ee8f7688570656412232d7d0f6781",
"assets/images/alb.png": "e2df6fa4b0fad71522e429bfd70aef4d",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/images/Logo.svg": "b4f2cad530c601c725d5bdaa8753bd24",
"assets/images/blank-profile-picture.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"index.html": "0217e829b2834e897c2274b60925779e",
"/": "0217e829b2834e897c2274b60925779e",
"main.dart.js_44.part.js": "801d0a77d92694248fe52f4e5b228618",
"main.dart.js_40.part.js": "fd3099aeb81f7dff32f5f1252300a0ff",
"main.dart.js_21.part.js": "83ccd46deb7432e83f3fad08966930eb",
"main.dart.js_41.part.js": "0f19320ce4c76e9120c6adcaf057e811",
"main.dart.js_31.part.js": "cf53555a5d2d9311aa9053791d959cec",
"main.dart.js_16.part.js": "7bbf74b0bc186652d7d677a8d9dc0924",
"main.dart.js_37.part.js": "6bc408f9594701bfb8882b0c23df1e1f",
"main.dart.js_42.part.js": "5ddebe218b17781cbc502726fc747994",
"main.dart.js_12.part.js": "209b801e733510ed1540cfacc270f262",
"version.json": "0282905a1d30526c9d0d81ded8e7c45a",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_20.part.js": "19f31f83febc35c9804220f80994f03d",
"main.dart.js_47.part.js": "8d9fb02cddb337778325bcd9d02d3e7d",
"main.dart.js_23.part.js": "884877612cfa438334af0fa712895979",
"main.dart.js_11.part.js": "7be3b569f7b115463af9f935b7a9cdb1",
"main.dart.js_46.part.js": "6f217ae8e1fce6bcb2c4df360b9a29ca",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_36.part.js": "c52fb2e578379ea8d6b08c1003c25880",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_8.part.js": "450a8d7a01e59c940b0f4ae5862132ed",
"main.dart.js_24.part.js": "f00548d8bbb0bb1a80237e6119dcd73a",
"main.dart.js_49.part.js": "4582f3e69a60493529621ef2d595db47",
"main.dart.js_51.part.js": "1e2c461779dc4cb9a42c5f445f5beb3a",
"main.dart.js_10.part.js": "1961b34ed69f8865333a46b81976fc5b",
"main.dart.js_3.part.js": "5f098038bd7007c2319865276dda4da8",
"main.dart.js_13.part.js": "1ac3d49f86c46d002313b2eba8384a27",
"main.dart.js_43.part.js": "e5efb13ed92982b38b46d2c37d023d3e",
"main.dart.js_1.part.js": "acde46603570ff18f965a90f618c5090",
"main.dart.js_17.part.js": "e6ded3b9bb88e8a98dffb7743611814e",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_50.part.js": "cc0e7c71bb750e5bfb994c73e947b04e",
"main.dart.js_15.part.js": "c2cd1f3d141b31c1aa43f0dad8243985",
"main.dart.js": "b2bd0286cd912ee284522f8e3a732cf2",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_7.part.js": "37264540fa455e0fd1cc12c1f868a880",
"main.dart.js_22.part.js": "da6a95d5c4a8906b50c343eba69b36d6",
"main.dart.js_25.part.js": "6ff95ac92b2085440f0cd5892f9a6bd5",
"main.dart.js_18.part.js": "3e356f878dd54fefa7fbe988298ab1b8",
"main.dart.js_48.part.js": "d69d6b4c0eda38dae218c34f1face81e",
"main.dart.js_45.part.js": "a8e78aae3b4fb9a6356c0a2c06f143d8",
"main.dart.js_38.part.js": "21d7a44106e21787cf6dd39e309ed6e5",
"main.dart.js_35.part.js": "c3b3888047f2e534c02661d4b959a0a5",
"main.dart.js_9.part.js": "dcc82764ee316d78aaa33347fe9dd4be",
"main.dart.js_28.part.js": "b29c2d98807a0924fe727926bdd0c12d"
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
