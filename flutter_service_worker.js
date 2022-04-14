'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_30.part.js": "4d90077d83d3566d6fc209dac256d4b0",
"main.dart.js_17.part.js": "518aeb1af64cedf6de3a4b97dbc8e9bd",
"main.dart.js": "809db863169c605e555eef2bab3605cc",
"index.html": "bce2eec65ca674d1804c4b05024473ec",
"/": "bce2eec65ca674d1804c4b05024473ec",
"main.dart.js_2.part.js": "81ca4570c1e5a2093b3fe07d8f80ce2a",
"main.dart.js_1.part.js": "ab700c43ef7f5f0d5eca2b2a79e3af15",
"main.dart.js_34.part.js": "20b24816ef560b3f496b36889fc5b107",
"main.dart.js_25.part.js": "fa539e6f1f386b1d12e3703a926e7e45",
"main.dart.js_37.part.js": "ed451cc91a6fe2cb6edbeb573c17fc3f",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_47.part.js": "fcb4c7e2ac62d3bc7bcc3609661fd04b",
"main.dart.js_9.part.js": "28447f9338de080b2b674259bbc159e6",
"main.dart.js_39.part.js": "0ca6146ab0db45f1725b0f3ba4ae9bd4",
"main.dart.js_22.part.js": "782f2cbdc9e7bae154e1d75da97b46e0",
"main.dart.js_26.part.js": "f45e32266479f4f733d6cb270ae51af2",
"main.dart.js_21.part.js": "62807d476bf7e751968d78f1266332e5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_45.part.js": "e8587a57e4f36895cb0e9df2ecec2774",
"main.dart.js_46.part.js": "68e9b3e39128fe51d5814d08a9645255",
"main.dart.js_11.part.js": "98a3b2236e8c305bc1f261852807c333",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_7.part.js": "2f00671ff93e0ebcaa880098ca96c892",
"main.dart.js_32.part.js": "af634392e4c2eb7f82e207342e0225de",
"main.dart.js_19.part.js": "53c679557268a359b610527344b2748a",
"main.dart.js_23.part.js": "a38a5a265b638eef59d9b544c6cca23e",
"main.dart.js_13.part.js": "f48ecf23fc8b6a472c20ad79da86238a",
"main.dart.js_35.part.js": "90a2e74b8e6cfc683fb1c42ffa30eebf",
"main.dart.js_8.part.js": "d7ee0df0033310ba93ab9392952df279",
"main.dart.js_15.part.js": "f8282c9c2814480d32d88d8e77b41ea2",
"main.dart.js_31.part.js": "f52b4b86b761ab36b24e10fd88d69175",
"main.dart.js_48.part.js": "caa2dab4967202cad5b8e94b5eb481c9",
"main.dart.js_18.part.js": "dafc1a0735ce4fdf632ba70247b6591c",
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
"main.dart.js_14.part.js": "59d1ed6b0dfa85788a6f4cfe335a2f94",
"main.dart.js_43.part.js": "0b686f759ffae4ae15b28fe9736ef7ef",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"main.dart.js_40.part.js": "b73de594d8547cbac4ed9abcf93e4f40",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_3.part.js": "7237f8c6768077555840af48646ddc85",
"main.dart.js_29.part.js": "8c5c50ce5bf32135aee89d2c47d0039b",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"version.json": "d6c37ea5039ae94823645b62a8c4a360",
"main.dart.js_12.part.js": "00f61509348f6105cf0b91cd7019a1fc",
"main.dart.js_6.part.js": "cad9bbcacb5d8ede332beefd09a8ed0d",
"main.dart.js_41.part.js": "9602f224e56769a309fd04fac8e17de1",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_38.part.js": "edfeabcab29144f65407c11ff80bf12c",
"main.dart.js_33.part.js": "b04efe0e579d2166ac9eb159750bf836",
"main.dart.js_44.part.js": "da0bfc12781cbca6c79b342ba8e3f1f1",
"main.dart.js_42.part.js": "4e1c119015b37489234914964833361f",
"main.dart.js_16.part.js": "dac8f1d6df8d14342de0b35de4b6f908",
"main.dart.js_10.part.js": "8cb4c0c884a8f709ca6481726bac2dc9",
"main.dart.js_20.part.js": "eb07df76d69006c48a75a62b094c2c86",
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
