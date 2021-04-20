/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bd74f95859190b72daa21135ce062857"
  },
  {
    "url": "assets/css/0.styles.d2e03d5b.css",
    "revision": "3a300ca60ff3b0cb03d43b5d48bbae1d"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.3b5ae833.js",
    "revision": "92099d1afe2920354115ff79f71ceb1d"
  },
  {
    "url": "assets/js/10.aacd51f8.js",
    "revision": "e223e208b1be8b5265c8e42976890324"
  },
  {
    "url": "assets/js/11.5cb8fff9.js",
    "revision": "93636c4ae91fad974274ac905fe2e4b1"
  },
  {
    "url": "assets/js/12.057cd3aa.js",
    "revision": "b33e42ace4f600fb9ab82fc3421090cd"
  },
  {
    "url": "assets/js/13.60516dad.js",
    "revision": "93f11effb78fd7bdf7ded0a943bb0c82"
  },
  {
    "url": "assets/js/14.29d1cbdd.js",
    "revision": "6dd0b4ccd8a024d956c89ec7c8084380"
  },
  {
    "url": "assets/js/15.f3da2ef0.js",
    "revision": "ddad241fb735fbbec79a277b929f4129"
  },
  {
    "url": "assets/js/16.447f8789.js",
    "revision": "f76b3e444e2a096cdc929a144f4ba627"
  },
  {
    "url": "assets/js/17.5fd25d4b.js",
    "revision": "42ba692ab025acadbb97776d94f5b8f8"
  },
  {
    "url": "assets/js/18.38664ec4.js",
    "revision": "171fb8957689acd9f3d0fcde136979ac"
  },
  {
    "url": "assets/js/19.6159792d.js",
    "revision": "8313e8fdc382ba2694cd895b063803b5"
  },
  {
    "url": "assets/js/3.732b83a9.js",
    "revision": "6461dc94528b5dd89f34f42eae5fc3ed"
  },
  {
    "url": "assets/js/4.e3d7390d.js",
    "revision": "a4d08235a97266221f3c14d740a94241"
  },
  {
    "url": "assets/js/5.739aeaa1.js",
    "revision": "5789f3e033282d67e658575cd2290a34"
  },
  {
    "url": "assets/js/6.859b1f1b.js",
    "revision": "439e94b312d674b79a32c28eb8f455cd"
  },
  {
    "url": "assets/js/7.6ea5e428.js",
    "revision": "1a9e7e5f3d74bdd4c6a9c073cf87a5ee"
  },
  {
    "url": "assets/js/8.fbb0a74d.js",
    "revision": "b86dc67d2b60834f4c8f47dac9b307c3"
  },
  {
    "url": "assets/js/9.8fd929e1.js",
    "revision": "f6d1a56b02c7c6d0ee3de8a8755f763d"
  },
  {
    "url": "assets/js/app.5302b6e0.js",
    "revision": "1852168f622d6b7cf6fcd89b437fa9cb"
  },
  {
    "url": "categories/index.html",
    "revision": "f7b91f39142b58ed73b0a68bf19a6f52"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "8ca9bf5d4a83453c9421b72ad44c5fd4"
  },
  {
    "url": "heroHome.jpg",
    "revision": "c91e2991d0b216c7c5d58e8fea6b699f"
  },
  {
    "url": "icon/good.png",
    "revision": "8c25c638bcc40f9621dfb489ba263c14"
  },
  {
    "url": "icon/good.svg",
    "revision": "415f81aa8601a9d9354df914b835a277"
  },
  {
    "url": "icon/good128.png",
    "revision": "78ac9e206bdd6f9d15683b6f1ce69f3f"
  },
  {
    "url": "icon/good16.png",
    "revision": "ecee0792d745db76882f6e8dd2b36431"
  },
  {
    "url": "icon/good48.png",
    "revision": "235b6b9107bb04b100f48cd8877855b4"
  },
  {
    "url": "index.html",
    "revision": "8aaeeb4c414ad7747845fb50512166c4"
  },
  {
    "url": "logo.jpg",
    "revision": "da9436f3230b35dbe496f8a71ef6fa33"
  },
  {
    "url": "notes/backDev/index.html",
    "revision": "0f62b1c553353736b9b1b79a4e4505f3"
  },
  {
    "url": "notes/dailyLife/index.html",
    "revision": "c857892e7629296046f3982437eee882"
  },
  {
    "url": "notes/frontDev/JS/Object/index.html",
    "revision": "2995f70feae64aa0ab2b368af96479a3"
  },
  {
    "url": "notes/frontDev/JS/Object/Object_Create.html",
    "revision": "3483207502398207f63702e1134f6d60"
  },
  {
    "url": "notes/frontDev/JS/Object/Object_Propty_Descriptor.html",
    "revision": "9a6ed59785bcacca01087e7840e9c26a"
  },
  {
    "url": "notes/frontDev/JS/Object/Object-Extend.html",
    "revision": "b820c1ff63692a69e756242c30895636"
  },
  {
    "url": "tag/index.html",
    "revision": "c8f0b6d99f33102098de2505613e7a60"
  },
  {
    "url": "tag/js-Object/index.html",
    "revision": "2936edf2ebc62193837d746484c3b8e3"
  },
  {
    "url": "timeline/index.html",
    "revision": "ee1958c35a443dd59b1aeaa8cb8c7519"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
