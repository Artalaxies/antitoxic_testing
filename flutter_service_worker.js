'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_19.part.js": "1c3378499c563a69e0bf530f317e6dce",
"main.dart.js_3.part.js": "1f12d8a0eefa73dae31aaa92a458bfd5",
"main.dart.js_44.part.js": "f530c2c5e4097908baf47aaf3e6a9562",
"main.dart.js_15.part.js": "71148173499708df53ef8c19fb373d61",
"main.dart.js_48.part.js": "35ca5462e9559f80c2376c5620dae07a",
"main.dart.js_32.part.js": "85370436bc37d0c49fdee3969138dc44",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_36.part.js": "781a73da3f01aaf97b76dc6e82d8505a",
"main.dart.js": "c452fdf9abff05426066c6b4644f12e2",
"main.dart.js_9.part.js": "1713ed16359be4f4674e8fa95d9ba4a5",
"main.dart.js_20.part.js": "005e2499f64e5870a931b102d8049d89",
"version.json": "0282905a1d30526c9d0d81ded8e7c45a",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_24.part.js": "66f9dba75abe171ef6622087fdb97ea8",
"main.dart.js_28.part.js": "4f1d72391c250749ebeead21034115aa",
"main.dart.js_45.part.js": "31dcfc2893c48a361302d8c75674faed",
"main.dart.js_2.part.js": "1cfa012eb9ba14cfc4c9b40959155706",
"main.dart.js_17.part.js": "7d80523952a5cff739de6778ddc51652",
"main.dart.js_25.part.js": "27102ad1ca62a0a41b974d5ae0b8fd9e",
"main.dart.js_7.part.js": "847d65af55f395c42335fdc2b70e6264",
"main.dart.js_6.part.js": "c7d9361877e5641262b91a3d08c77b7f",
"main.dart.js_49.part.js": "adeb463b3f551cae8ad1f724b508faa1",
"main.dart.js_22.part.js": "1623199bd61c554bbe7c974dbc5b4a6c",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_51.part.js": "85afeda86af771f812883fa825338522",
"main.dart.js_1.part.js": "de2ad442cf236df9672dcc385b906bba",
"main.dart.js_41.part.js": "5f77f2a9449bbcb3047b48bc05811765",
"main.dart.js_43.part.js": "f7bb6e6e8bb2d77d42ed30fe83ab7b7d",
"main.dart.js_31.part.js": "9c85ece8fc14946eb98dbda963d5c0fc",
"main.dart.js_37.part.js": "c70a038fbf16496003c926f4d98d71a6",
"main.dart.js_50.part.js": "9ea7f2bddfc71d2b5230538adde9df3b",
"main.dart.js_29.part.js": "bfbb8644508c0aa688637f2fcedc05d6",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/images/blank-profile-picture.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/images/alb.png": "e2df6fa4b0fad71522e429bfd70aef4d",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/album.jpg": "f56ee8f7688570656412232d7d0f6781",
"assets/images/Logo.svg": "b4f2cad530c601c725d5bdaa8753bd24",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/NOTICES": "17820fb04dd35c95b90b36528b39a201",
"assets/AssetManifest.json": "532f325fbb4513f431a26c14b1804006",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/assets/ArtalaxiesMarketV2.json": "2243e2b8b6d870c6216ef7c9460d9e74",
"assets/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/assets/space.riv": "19ebb50cac3f5949ba2e3776f1afad1b",
"assets/assets/logo.riv": "f0f5709f257a60f4ba6312e4038a2802",
"assets/assets/ERC721Upgradeable.json": "4d7a1d9eff59f3fee6c0d06a81a2f3b9",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"main.dart.js_47.part.js": "ec7da0795c02fa2d52775befacd8ea69",
"index.html": "7d15e3db85400b935e1a0fce5c9eb4a8",
"/": "7d15e3db85400b935e1a0fce5c9eb4a8",
"main.dart.js_16.part.js": "f155d6b254f283c930400cb832f05c55",
"main.dart.js_23.part.js": "5bece9e86fdc1ba076fa83daf31e5a30",
"main.dart.js_13.part.js": "d723153bf412b90696b128b1ca480867",
"main.dart.js_11.part.js": "78a2eeff16afcf7c635375c7a17a3b0e",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "3ba734e0356291a45d459f0ecd7c5af5",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_8.part.js": "38a2714811b9157143026f854d6126e9",
"main.dart.js_21.part.js": "cc82a714580bd5a15a0d96c001f10dc3",
"main.dart.js_42.part.js": "63c33fa3ecc5d6d1072970791ca63581",
"main.dart.js_18.part.js": "00f1d1c8215459bc6c6a15639b7dd165",
"main.dart.js_34.part.js": "3a9b708e3f58ac2342d83b30345677d2",
"main.dart.js_10.part.js": "53da5a418a4098f0512f1c0e33bee576",
"main.dart.js_40.part.js": "2ac5017d9b5a8f69319b54789c3675cb",
"main.dart.js_38.part.js": "c7fe7c239a7580aae6de04f8aba2b1d4",
"main.dart.js_12.part.js": "d7b206f189bab57c2e7a63f11b8bf8c9",
"main.dart.js_46.part.js": "0278d5c26c6426ca72ba0f582782f5ca"
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
