'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2a511696d556ee7ad7e08e7a7a1ba304",
"index.html": "ff9736776c90890d3c2e731c96cac1fe",
"/": "ff9736776c90890d3c2e731c96cac1fe",
"main.dart.js": "671c20d973bb34ce3c5ae377e402f352",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon-192.png": "3df9b3a142eec676eef4ca303e7d66bd",
"icons/Icon-maskable-192.png": "3df9b3a142eec676eef4ca303e7d66bd",
"icons/Icon-maskable-512.png": "cd7c5c75a14b0b4996ec5b00d44a0414",
"icons/Icon-512.png": "d6d8e2dcebdbfaf8cf677bb1d5475f09",
"manifest.json": "5ccc988f36595a9e63a43cd226227336",
".git/config": "1ade7babb56a16e0f0864866e36d2b49",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/3e/07519a6677eabbcab374f08afbf1faa789668b": "f7804ec715284ac2d8d8ddaecdc93dc8",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/6f/fac8611b3ba98e54b78f6812282aae27754bcd": "086b4dfd6449c982578b6a65d222fccd",
".git/objects/32/4ac6360459a24011e48c82faa8a6ce51e75812": "9253f1e658b0f793bf506529f75bfe32",
".git/objects/67/61334a886c6611513e85ed530ffe56173c6d2a": "4c249690eca918d1b59d49be53196cbb",
".git/objects/9c/7534b475093820369d2501cef937ecfcaad2b1": "64f533686242ffed84133a1cc3bba98c",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a3/612f38841ebf1f31f028a6e915d7c8c034b2b0": "4217c19ef3834f30ca8f1b7225f29bb7",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/be/c3ddb573df4810eafd1f3b7d413d0d72aeba94": "654391063600ced9ecd6b4fb78161077",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/b3/1fed7caf61e26af1535ca37ef9e03fc79a5a8d": "a1aa57ff21778d4b9b1a27f652b2c7b3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fd/03fa029383b3c7a21d2a871d97ef0d60cfabb9": "aba7f0a4db768f25b661e82786c92c9e",
".git/objects/c1/0686a75a9bc57262145bb823c3ab932f4b7d1e": "e97ef3cdc9130e57ba6c0c0b2e4108e3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/509fd6b07116fc710c04dbed2e9ef6b7be2cea": "6eb80ba5441ae84ed74a9d13d09003c1",
".git/objects/4b/099a035963f05a84965f0feb25d297915ea802": "8540c2f35b53462ee6e5f2cf545d010b",
".git/objects/87/960f01462e0e00da6b3372feceba1827aaeffb": "db6439487a228cf2a645614d6dc07c3d",
".git/objects/1a/769e7614f3136c12c694a62c8ff3b91d1ed1bf": "7a48c47241e2cb7ed4775cf98cad3b0e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/09/ace457755300dc89b6a3c9ed644b734451c3f2": "ae87a282009452f9d8f2db6247a333db",
".git/objects/5d/33cf084bcd70bc26709f78e86c01bbfa9fc34c": "9741a4b50cb7b9ee38ce3587c7068dac",
".git/objects/63/2953aa83cf62211f4508845e3eaaa6d53de0f9": "37d89e17994f358148972279ca94d276",
".git/objects/a7/a9040ee4d2dcd40e607a9b8dbe700fcb0f3fa3": "2240bd378f137e4519fde355e654338e",
".git/objects/b8/e2fcc14cd860644fe260b954c7bc6f02ea7cb2": "10b44483e040da419f9a5ab36260d922",
".git/objects/d2/b50f061c05f3963db7b6bad69c94d5335c1681": "798cc2c57c51a4e68c45d100682a6f1b",
".git/objects/d2/dafdc39584873d10eca142b683f3d90c88699d": "724346edb83f401b2324822a670b7a99",
".git/objects/b7/86bb2636c3267c5fc58b0de1fdf49844653850": "ee3e0dfea401fbfcf069b4929d061761",
".git/objects/b7/348274ae3c39bffed84da6f6b8d541138f5d14": "9c61644b12345ed9b31b98b73059637e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/ade0e860dc0090531a11e27e4e5d6e4e1b7c49": "351527b0a67caff8bae7a743ef020931",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e0/e43efe0b080e15f0c03c511542010467cb9dcf": "368487fe8cd9e114e08f2d4f77b39dec",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/2d0b7d1301e7d43574be89300946d4d8e83ea4": "71920786e5dfd0c6e17d9420991bcf7a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8d/d83af371e511cef29ff9dd49f69c15f1fef626": "ec7974c0064984856e4336a9e272aa59",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/40/f09dbb803e0c4fd12021730c218bd172a6542e": "007289432f362d8a23a86fe48b671dda",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "233322d6d480ed219d09f0b9e5d06a6e",
".git/logs/refs/heads/main": "4884ce60e5f0432e400c6c1532fd7da7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "10aef7f338ea37158f6c916981145299",
".git/index": "7b949ab327d741526d8154eea97453c9",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "231f9c86ce24e906302aae6c30f2ecd8",
"assets/NOTICES": "e964aa9d2231ecd626fc857764a72cee",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/hamza.png": "8c0d731b7b2a667a6e90a402e7b45881",
"assets/assets/images/img5.png": "0dfa269441e899ed578657b021357355",
"assets/assets/images/img4.JPG": "847591ab1d537c6bd226847c3717c8d3",
"assets/assets/images/img6.png": "368021dec63059ab80f4fbf750532657",
"assets/assets/images/img3.png": "ec89830fa1751cf99d8ea7a7e79216b1",
"assets/assets/images/img2.png": "c71f6dc88f28fcdf4e077fd5ece71d5e",
"assets/assets/images/img1.png": "78e7a2ab645897c78bfc4a8f6d9cccd0",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/bg.jpg": "c7f6ed8d169af10039d85b0ba209dc3e",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
