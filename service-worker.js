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
    "revision": "6804d902662465954751c5e3bd487d2f"
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
    "url": "assets/js/11.36155735.js",
    "revision": "6a2218bb7ea260fbe60637a1455b5aff"
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
    "url": "assets/js/15.18ad9279.js",
    "revision": "8cc99b186d72a1102c45e3cda93a81f9"
  },
  {
    "url": "assets/js/16.f8d090d7.js",
    "revision": "f5b181239d525dc7c93bfe09768897f9"
  },
  {
    "url": "assets/js/17.d3a072bb.js",
    "revision": "8f0ef9f6a2ed0696160a47c0589995a9"
  },
  {
    "url": "assets/js/18.ac910592.js",
    "revision": "e082ac0e73095d7c5aa7122c0d398c92"
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
    "url": "assets/js/9.a17c4dcd.js",
    "revision": "f2d7e8cc1e4ab1fea74e94f23f542599"
  },
  {
    "url": "assets/js/app.8706f753.js",
    "revision": "0543556aeaf169d47059dba6876072d2"
  },
  {
    "url": "categories/index.html",
    "revision": "0d0cd03f7937099cbfb42c9cd2bd904e"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "44150e280a8d1de79573df90933748ae"
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
    "revision": "6badad757bc2de311943eeb3b9336387"
  },
  {
    "url": "logo.jpg",
    "revision": "da9436f3230b35dbe496f8a71ef6fa33"
  },
  {
    "url": "notes/backDev/index.html",
    "revision": "cad8f8a566ce1099ecf8ad8c3ed4d741"
  },
  {
    "url": "notes/dailyLife/index.html",
    "revision": "644279d5476908fe6be81b0337ce82c8"
  },
  {
    "url": "notes/frontDev/JS/Object/index.html",
    "revision": "9eee0f0d55c595a3f6c2250e0b5a0f60"
  },
  {
    "url": "notes/frontDev/JS/Object/Object_Create.html",
    "revision": "93d0f9b499790ea1906bf5f705819e7c"
  },
  {
    "url": "notes/frontDev/JS/Object/Object_Propty_Descriptor.html",
    "revision": "f34fe7143eff992264fffc67f5822860"
  },
  {
    "url": "tag/index.html",
    "revision": "cf3ae6cbcc76b7c643f11bf14cabe1bf"
  },
  {
    "url": "tag/js-Object/index.html",
    "revision": "3edf2ecff7bb5a8d4f45350967290cf2"
  },
  {
    "url": "timeline/index.html",
    "revision": "7aef1f4c51b29c03282ce9b4950e1a24"
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
