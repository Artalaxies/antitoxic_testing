'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_6.part.js": "78b9bc1d331ead2ad32c3736cfdae4d5",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_19.part.js": "1fb591d7669b66a4f5853fa523436461",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_32.part.js": "3196915b01759f7e33396ce8d5fd8994",
"main.dart.js_29.part.js": "a0b7fce1ebdea7979f87d408b7da154e",
"main.dart.js_34.part.js": "159ee4037503876fd9255f7b27ccce73",
"main.dart.js_2.part.js": "515a05a7d0373ce412a4d0074ef29b22",
"assets/AssetManifest.json": "adcec8eba94869351e9cf0333ab6ff86",
"assets/assets/logo.riv": "f0f5709f257a60f4ba6312e4038a2802",
"assets/NOTICES": "818e47116d20beaf69bed169d625f737",
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
"index.html": "552d7e4afee8f70ddc68e567a72f28a4",
"/": "552d7e4afee8f70ddc68e567a72f28a4",
"main.dart.js_44.part.js": "deae1fb9a0c4bfc0afc2bc3bc5fa9956",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_40.part.js": "bb03dfa2d3dbdb36232878459725eb57",
"main.dart.js_21.part.js": "83ccd46deb7432e83f3fad08966930eb",
"main.dart.js_41.part.js": "afa7af1d0132067c4a5f0408f568731c",
"main.dart.js_31.part.js": "0f17565972060221f83516fb9e78d25c",
"main.dart.js_16.part.js": "07cc2b02af3bc3a86b8af06db0ae3798",
"main.dart.js_37.part.js": "3cfd9085c2b1f83cbb133c56fb9ff55d",
"main.dart.js_42.part.js": "5ddebe218b17781cbc502726fc747994",
"main.dart.js_12.part.js": "3249ae29cde79a915d7d4edd5e64e031",
"version.json": "0282905a1d30526c9d0d81ded8e7c45a",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_20.part.js": "4283f5eb2a126ee8602242d6f653e5ad",
"main.dart.js_47.part.js": "6f8bf4f4a292222496e32e07f2e5e973",
"main.dart.js_23.part.js": "357e85bca9d8ccdabf982ad2d753d06a",
"main.dart.js_11.part.js": "90af9a21017ae298050d5192a115b0da",
"main.dart.js_46.part.js": "6f217ae8e1fce6bcb2c4df360b9a29ca",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_36.part.js": "9cb74f4687c8a67f6af8e38d5d0a9659",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_8.part.js": "542fb581be3493d45d08fc4106f4ec58",
"main.dart.js_24.part.js": "3769ca36fc25452b453e1cdf92f41f99",
"main.dart.js_49.part.js": "9c0139503e65a9cbc584bfa31ef5eeaa",
"main.dart.js_51.part.js": "5d917eac64f0445a6f03b09b318bbc43",
"main.dart.js_10.part.js": "55c8e6e2fa9329ea8711e86130109d7d",
"main.dart.js_3.part.js": "12736840309dae32932e065cb3b9d0d9",
"main.dart.js_13.part.js": "398214261d18c67cb4be961514c6f704",
"main.dart.js_43.part.js": "e5efb13ed92982b38b46d2c37d023d3e",
"main.dart.js_1.part.js": "f36ea5951825c60bfd93417feb641b66",
"main.dart.js_17.part.js": "10bfde150001eb28c59ec05c28475f83",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_50.part.js": "f7de504786150522651b1ef6d497f51a",
"main.dart.js_15.part.js": "8642d0b9a96636f7d36d069ba025cc53",
"main.dart.js": "f4a4e9aec0bf61b053546362439230d4",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_7.part.js": "8a78eb8438fa19c95a26eb6701d6689c",
"main.dart.js_22.part.js": "4b77757154c6779eaa4191f6b00ce94d",
"main.dart.js_25.part.js": "cf2b28b48770af58b10ea00adb8842a1",
"main.dart.js_18.part.js": "3e356f878dd54fefa7fbe988298ab1b8",
"main.dart.js_48.part.js": "00d5a5a068b3d6210af9ee18ac393e45",
"main.dart.js_45.part.js": "3954f477a87c354145ad260c6737a37f",
"main.dart.js_38.part.js": "92475cd5049a55fec19188e3c4f8b8b3",
"main.dart.js_35.part.js": "eef81905edea2a89e56c85432627acc0",
"main.dart.js_9.part.js": "90e702c99bf6b3305ae02fafec0eece5",
"main.dart.js_28.part.js": "2b6453d248a8a1026d87f4e19566856d"
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
