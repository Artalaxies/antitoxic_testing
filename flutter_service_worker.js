'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_1.part.js": "255f7f2604bed353f327b848172f1d5a",
"main.dart.js_49.part.js": "e7882606b6a84390151efa3b3b6cd9ae",
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
"main.dart.js_13.part.js": "f71f062809c367f971229f132251c95f",
"main.dart.js_33.part.js": "68dd047670e2a369529830d5484b726c",
"main.dart.js_43.part.js": "a6a1533b3dd2c9cfc770756c459ada7f",
"main.dart.js_16.part.js": "cc3290a234a3955974953b2a8073fdfe",
"main.dart.js_7.part.js": "0c5827403522ad79a6e9c9aa8efc194d",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_14.part.js": "875db7a59a9e4b7d9fccdf43d17bc230",
"main.dart.js_21.part.js": "518e1ba2e3ab7ae65dcaef0bf68ea0e3",
"main.dart.js_24.part.js": "d5188c719db2ea468658cbc04b758579",
"main.dart.js_23.part.js": "ff44cf91676e9768d818754ae10a1ba5",
"main.dart.js_29.part.js": "9842af3df37241e3cafa1dfa527a1e8a",
"index.html": "bbb040069efef12672645c35511e12d4",
"/": "bbb040069efef12672645c35511e12d4",
"main.dart.js_32.part.js": "ea453e1ad086c649c51fd1aacdd9c03f",
"main.dart.js_3.part.js": "9c7e77a5b519cecfe6deec28cb93a1cb",
"main.dart.js_50.part.js": "593b3b6bbd7a8aba1b3caf518a428ab9",
"version.json": "d6c37ea5039ae94823645b62a8c4a360",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"main.dart.js_17.part.js": "4bdd31d030bf48dfead46acf3d1cc00f",
"main.dart.js_45.part.js": "ca915181720e768a4b3a03adb9344911",
"main.dart.js_48.part.js": "e9861616cf9f06cfd321b42a5b8e947d",
"main.dart.js_20.part.js": "92157a2f9cbb816ad12cd71a554de22c",
"main.dart.js_9.part.js": "acb5bbb6cd804f1a7b7ed6ba7d00eff0",
"main.dart.js_35.part.js": "ed2153bd9f419dffe91833f84a3d1447",
"main.dart.js_39.part.js": "f529a4d118f09031de2cae7841a972ca",
"main.dart.js_18.part.js": "bd88fda10c1e487560ff089cf44be683",
"main.dart.js": "bc8ceb1eab73aa5548152c9976687cd1",
"main.dart.js_42.part.js": "acb41308201d5a31ffa47e75b7442986",
"main.dart.js_26.part.js": "1c530d3ce73256f4f924dd980e8cb038",
"main.dart.js_10.part.js": "62f56ed46a52d9d1e38fc68899fcc370",
"main.dart.js_19.part.js": "f11a4e1bb30f7aa0e84828887d734a34",
"main.dart.js_6.part.js": "06fff175db9678be6fd0753ce0aaf118",
"main.dart.js_47.part.js": "f62e6ae89f4507629c2cc4ad0bc98d87",
"main.dart.js_51.part.js": "9993fe034f63663f2b7ed89729e0f02a",
"main.dart.js_8.part.js": "5647c110da33a861965503e8f1d5c18e",
"main.dart.js_11.part.js": "3631434b1d9c631fa39204e8e6f889ba",
"main.dart.js_38.part.js": "ace5756a9463bad0f1aaee34146a9a4e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_46.part.js": "1211dde005c47c0da2839258f6723467",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_44.part.js": "d0f913c8c38d57e85bcda90a136772c4",
"main.dart.js_52.part.js": "06a93ae0b56ec9c196960bbd4cc86896",
"main.dart.js_30.part.js": "ebb20eb05626826a8693aeb69e73b4c1",
"main.dart.js_2.part.js": "8b97ecf1436a49065f6f3ab0781f8f1d",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"main.dart.js_25.part.js": "d71dd2cc352912433cbdb31dc5395ee8",
"main.dart.js_36.part.js": "c65a6d2f9a6c1928ecbb696344d82243",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_41.part.js": "625bc92dff18db643cd4947b9f2eb05b",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_22.part.js": "932954c4d174ca4af0151e8c1121c5db",
"main.dart.js_12.part.js": "7aee9c45634fc560393dd1c6533cbdf8",
"main.dart.js_37.part.js": "3c133626ab3aedd8c142b64718b87563"
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
