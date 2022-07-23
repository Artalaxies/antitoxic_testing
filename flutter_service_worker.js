'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "044839ff5d0ab7cfb235cb1a526ce954",
"main.dart.js_40.part.js": "b931f99a581285f790b813b7e846c992",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_2.part.js": "3dcb85a37ec908fc50b0444bf0992844",
"index.html": "ee0a2419f440cb526d27dc0e510041bb",
"/": "ee0a2419f440cb526d27dc0e510041bb",
"main.dart.js_22.part.js": "ad078e15e31d66321261d509432916fa",
"main.dart.js_47.part.js": "8fbc9a8cb6816eb78df5f8fa54536d8e",
"main.dart.js_3.part.js": "09b1ec6262ec7ada09bd27173584618e",
"main.dart.js_37.part.js": "b0a791cd11f59bdaab0e2fa39a6fd2d8",
"main.dart.js_31.part.js": "c334b55bddd548f89287100105c1e147",
"main.dart.js_44.part.js": "56fcf425696c6caf8f21336efb75a325",
"main.dart.js_21.part.js": "56519cc2105d2aac309ad0c8504f36db",
"main.dart.js_24.part.js": "130bd28227789a90e6235eac9aee52f8",
"main.dart.js_26.part.js": "04ccc032ae50c130dbc1d6c1260e6f7b",
"main.dart.js_30.part.js": "5e4e1cf730b0ef5b7d79c5e43c65987b",
"main.dart.js_29.part.js": "73a7fd97c2d93f32f8b3b153127ec1a2",
"main.dart.js_33.part.js": "384676200db6027138d743932e6ed463",
"main.dart.js_38.part.js": "6951e271dbc7f4f3f00b7e87af42e477",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "2286427553c3591e6a7e9074bb70294b",
"main.dart.js": "6c0bbb0863bf0cdc68360dd6cb45c6ea",
"main.dart.js_25.part.js": "aeeb44f266fcfbbbfd08467d743140f8",
"main.dart.js_14.part.js": "59222f9b1f0e8a0c80c3a22a1295a587",
"main.dart.js_1.part.js": "87b0a83e89fa13cada7b60b1d9a9fadb",
"main.dart.js_9.part.js": "901c355e2e5c4ca506073e989e049590",
"main.dart.js_19.part.js": "178d8daea1315f298ef045c67d53d905",
"manifest.json": "46ac6dc7ca2ab2021fbd4e14590e1f16",
"main.dart.js_45.part.js": "fc7d291fffb0c247786da294790e9da3",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_43.part.js": "505f87ba8f996f618a6b9a7599966206",
"version.json": "d6c37ea5039ae94823645b62a8c4a360",
"main.dart.js_42.part.js": "1692f52924f371413b738f05813d10c9",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "12bd746cf03bf06634335b7a80c80a9b",
"icons/Icon-maskable-512.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-512.png": "7a0e8da06ce506c927e810b2b3929005",
"icons/Icon-maskable-192.png": "4f5e1111fa2a63d4b81cc398357a1c68",
"icons/Icon-192.png": "7a0e8da06ce506c927e810b2b3929005",
"main.dart.js_15.part.js": "6f82ad1cb9b619a5c81e19b66b567302",
"main.dart.js_8.part.js": "1ea96747cf95cb2b90c1e0e90e4251bc",
"main.dart.js_5.part.js": "8badd63b9b61ffff5462673df9d0a17e",
"main.dart.js_16.part.js": "9a8a5d430346cc826324e6f1f6653ee0",
"main.dart.js_20.part.js": "4a879531eb48dd5e025612ad488bf0cf",
"main.dart.js_17.part.js": "03a9835ac3340b12ea549efc4796498a",
"main.dart.js_34.part.js": "26d6e7d2c94cada3bf15b3c2473ffc02",
"main.dart.js_39.part.js": "fb927e656bc466cd2bb82d6df4e1927c",
"main.dart.js_13.part.js": "262275d21c4ffcfbb9107b88db76fea6",
"main.dart.js_7.part.js": "e69bade4c72e13f1ffd38e2d2f5c8ca7",
"main.dart.js_41.part.js": "6bc016feb3244b89ce187cfd00011307",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/images/Logo.svg": "b4f2cad530c601c725d5bdaa8753bd24",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/images/album.jpg": "f56ee8f7688570656412232d7d0f6781",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/images/blank-profile-picture.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/images/alb.png": "e2df6fa4b0fad71522e429bfd70aef4d",
"assets/NOTICES": "fe7a3d3acd4f4d4c766178ac1cbd3610",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/logo.riv": "f0f5709f257a60f4ba6312e4038a2802",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/cryptocurrency_network_utility/assets/ArtalaxiesMarket.json": "e561f3aa082a981b134df4921caedaeb",
"assets/AssetManifest.json": "bf740d9f816a76e6d758bf3e36f37c51",
"main.dart.js_10.part.js": "7e1ad82e79dc551f1ba893ece8cdaefe",
"bundle.js": "8321b750acacde682753e68a8d845f05",
"main.dart.js_18.part.js": "4d5dbda4cae88bbe9ea8a17b03a452ca",
"main.dart.js_6.part.js": "002cfa12fde30456db52536d44291525",
"main.dart.js_46.part.js": "d6dbc4520bfac7228e80970c8388cb70",
"main.dart.js_11.part.js": "3d63075a2ea1e069b99512da52858d21",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
