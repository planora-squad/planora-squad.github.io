'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d078cc9af179eebf7489c7467a80bfb6",
"version.json": "060cb261de3d67ad9d3892ee0ff53dce",
"index.html": "0dc6e099d2bbd93ee28e4e7f4f702938",
"/": "0dc6e099d2bbd93ee28e4e7f4f702938",
"main.dart.js": "1206c9c77a6d6a0d11d58b9f23de331e",
"sqlite3.wasm": "19f93db1ac9fb159284ad0a80bfa86f8",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"drift_worker.js": "ae1f716f0e8e90b0a566f82c6ffa3bc2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f0c0bc3e4e4892383fada7532c42e4df",
"assets/AssetManifest.json": "7b4f91711bddbd126cb39020bb8f031e",
"assets/NOTICES": "4ea691caad0a20547a3b18c20217848f",
"assets/FontManifest.json": "b6daaff1a5220c7c307e4f9612222b9f",
"assets/AssetManifest.bin.json": "d79fd80de62cb23304587d3d6ab41f74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/progressive_blur/lib/shaders/progressive_blur.frag": "70359fd1796f484483d545b707c84070",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d4e9e6c754b884def6beb69547f6f198",
"assets/fonts/MaterialIcons-Regular.otf": "ac15e6c2275450c32f31a94d9b6fe350",
"assets/assets/images/chip_blur.png": "e067d7f72caa0999570780298f7d5dfe",
"assets/assets/images/delete_ilustration.png": "59e93b2be80d87537df2835d6a4bed07",
"assets/assets/images/success_ilustration.png": "9dd8cb6946971f55519096b0490fd2bc",
"assets/assets/images/logo.jpg": "67dc5865af6fbe3e060b9ddc23ea262e",
"assets/assets/images/theme/lovePink/background/time_picker.png": "4552473c33b81beea364a0812b658879",
"assets/assets/images/theme/lovePink/background/background_flashcard.png": "21c33f7f30b0d1052f2f1a660d02dc66",
"assets/assets/images/theme/lovePink/background/background_home.png": "adc21e50d9b08984021077628b137862",
"assets/assets/images/theme/lovePink/logo/logo.png": "f4153d1707b0e9485b28ffa27b3e11ae",
"assets/assets/images/theme/lovePink/logo/logo_light.png": "9a6a9426d197ff787724791481973e15",
"assets/assets/images/theme/lovePink/icon/todo.png": "278f9b2a9f202ba1e96b4e2878d42ccb",
"assets/assets/images/theme/lovePink/icon/schedule.png": "8843e7e9863fcf8c32d57a7b3196e43e",
"assets/assets/images/theme/lovePink/icon/subject.png": "40d9f999af9a7830e699db8cde43b95b",
"assets/assets/images/theme/auroraGreen/background/time_picker.png": "7b76a55e6a57795e8e0c8fbda729939e",
"assets/assets/images/theme/auroraGreen/background/background_flashcard.png": "2a7284a1914079968735e83ee903e5e6",
"assets/assets/images/theme/auroraGreen/background/background_home.png": "1612e9b3708d194dfa450c1b102dba3e",
"assets/assets/images/theme/auroraGreen/logo/logo.png": "cfd5c0caf6ec6b953c5895aaf129ce05",
"assets/assets/images/theme/auroraGreen/logo/logo_light.png": "f3a457f8429540a9e588300cd9102d7f",
"assets/assets/images/theme/auroraGreen/icon/todo.png": "8a2a2222d3629d68567a70bdf014bd79",
"assets/assets/images/theme/auroraGreen/icon/schedule.png": "624e85bb1f503c43d73304310c138436",
"assets/assets/images/theme/auroraGreen/icon/subject.png": "82dedfd6754af60956a7d57c0b3267fc",
"assets/assets/images/theme/voidMonochrome/icon/todo.png": "c23e18d0a9bc6cabe576d959887fd241",
"assets/assets/images/theme/voidMonochrome/icon/schedule.png": "b7ac3dc08914376750f8c30865c8074c",
"assets/assets/images/theme/voidMonochrome/icon/subject.png": "2cc4cf886d588585d672c438cc98aa55",
"assets/assets/images/sample/avatar.jpg": "ba2c1c96b5b7fea2428c32f374fc82aa",
"assets/assets/images/nodata_ilustration.png": "85103e2a1aa74ec97f9658d67a75e3e2",
"assets/assets/images/confirmation_ilustration.png": "f7db2c5e89f90c19b93eb6328ec45609",
"assets/assets/fonts/lora/Lora-Italic.ttf": "23b1466fb9df366dc42831381cdce668",
"assets/assets/fonts/lora/Lora-Bold.ttf": "a487e58050c7a815e9e5cc2d70a8f3ae",
"assets/assets/fonts/lora/Lora-SemiBold.ttf": "9a334f12e5bb77aa5827ed4029b3cafa",
"assets/assets/fonts/lora/Lora-SemiBoldItalic.ttf": "8da77b7281b11294c2aa17ef07daa78d",
"assets/assets/fonts/lora/Lora-MediumItalic.ttf": "631bacb8f8164f0c4afa12726d5d2aef",
"assets/assets/fonts/lora/Lora-Medium.ttf": "2e5042f11715005795c8ed4ba772b40e",
"assets/assets/fonts/lora/Lora-BoldItalic.ttf": "e3ac18951245a7b13449deb7034d2829",
"assets/assets/fonts/lora/Lora-Regular.ttf": "7637dfac7457920e0367967d608ee3a8",
"assets/assets/fonts/sourceSansPro/SourceSansPro-SemiBoldItalic.ttf": "1f03d6ccc63b8d677e9eb28b66c1decb",
"assets/assets/fonts/sourceSansPro/SourceSansPro-Medium.ttf": "b7db812a0b7af4a319b62f14505987e1",
"assets/assets/fonts/sourceSansPro/SourceSansPro-Regular.ttf": "16ce2edfa19b06ae874edddba2cf7fff",
"assets/assets/fonts/sourceSansPro/SourceSansPro-Bold.ttf": "f6882efb1598c53b03949ceeae2ac472",
"assets/assets/fonts/sourceSansPro/SourceSansPro-LightItalic.ttf": "b790d313480cc92354bbfcb760c87ea4",
"assets/assets/fonts/sourceSansPro/SourceSansPro-Light.ttf": "85369955836f0888bca651eedfc8fb0d",
"assets/assets/fonts/sourceSansPro/SourceSansPro-MediumItalic.ttf": "964afd6a1cd0bc218289ae21a74155fc",
"assets/assets/fonts/sourceSansPro/SourceSansPro-ExtraLight.ttf": "b6c18ea822e9d47a1ef83dd8e85f4d90",
"assets/assets/fonts/sourceSansPro/SourceSansPro-BoldItalic.ttf": "37790f9a3d33c39ca172fe72fd1d976d",
"assets/assets/fonts/sourceSansPro/SourceSansPro-SemiBold.ttf": "0aaffde3155f346333e2cff5e91d889a",
"assets/assets/fonts/sourceSansPro/SourceSansPro-ExtraLightItalic.ttf": "01f6ac7b135cbe517594587fc8597ddc",
"assets/assets/fonts/sourceSansPro/SourceSansPro-Italic.ttf": "063a60572b12919ab3f0973a87fb644b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
