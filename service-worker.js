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
    "revision": "5d6057dfc82bb7e6c9243cbb0d894cb8"
  },
  {
    "url": "assets/css/0.styles.1b6d2abc.css",
    "revision": "3a9c226b65edf105ae340f1bbe28677a"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.3674e00c.js",
    "revision": "caace5d622d7a2e5ffa651398b4d9142"
  },
  {
    "url": "assets/js/10.5c06fd4c.js",
    "revision": "c7970cc0ab5142a1e23968e6d98b6375"
  },
  {
    "url": "assets/js/11.ea2bf37d.js",
    "revision": "403eef00df8cbb24ab30c0541fbb2694"
  },
  {
    "url": "assets/js/12.1745f6ac.js",
    "revision": "b0dfa8163f0515b8ad893e9eb705b4e0"
  },
  {
    "url": "assets/js/13.a37485fd.js",
    "revision": "80de82e4647b6c28c0d2b1ad7a9b0313"
  },
  {
    "url": "assets/js/14.9a40fcaf.js",
    "revision": "d6af6920f719f6647c645b2552e1f5ca"
  },
  {
    "url": "assets/js/15.c6228332.js",
    "revision": "ee1f29f03a0e54128a2e4bc2392bdfb8"
  },
  {
    "url": "assets/js/16.11f1225e.js",
    "revision": "e3f666d7689348dea57b8cda327be478"
  },
  {
    "url": "assets/js/17.2028f217.js",
    "revision": "eca09f64fd4abe09c4ace7b4dbc82c0d"
  },
  {
    "url": "assets/js/18.cb5a3591.js",
    "revision": "a1c245672e35da851fc83bfee1f85bb3"
  },
  {
    "url": "assets/js/3.7213f130.js",
    "revision": "7e021c572ce3cd640b1ea19bb36317c1"
  },
  {
    "url": "assets/js/4.c87bcf39.js",
    "revision": "d0336756c3e8b7f30934e83b0540a1cc"
  },
  {
    "url": "assets/js/5.b60bfeb5.js",
    "revision": "ac52ac57f421a685ae3c7199badd7494"
  },
  {
    "url": "assets/js/6.98fd4203.js",
    "revision": "a3e6b3158721e0de1d6f9cae253d563c"
  },
  {
    "url": "assets/js/7.227dd513.js",
    "revision": "7271bedad85401e36fb196d42e1f4d16"
  },
  {
    "url": "assets/js/8.f2f2b471.js",
    "revision": "e53a161feb077d09e0b6f67d35938e12"
  },
  {
    "url": "assets/js/9.0f31242e.js",
    "revision": "85ee10ee905a0789474b7eed74803767"
  },
  {
    "url": "assets/js/app.a505e943.js",
    "revision": "4ccdc1bc077db7ba2ab4f04c08111b3d"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "df4cc2fa3b3b289dc48f7b8b9e2741da"
  },
  {
    "url": "categories/index.html",
    "revision": "f8232f7c9a332c8ffc847d4082a94347"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "c97f7b0502fb3ef5f18f81b8b7a1aabf"
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
    "revision": "94735222ee9ad9bea04b90699497b191"
  },
  {
    "url": "logo.jpg",
    "revision": "da9436f3230b35dbe496f8a71ef6fa33"
  },
  {
    "url": "notes/backDev/index.html",
    "revision": "e07c78a42e423475d61a2e4714d98d46"
  },
  {
    "url": "notes/backDev/test.html",
    "revision": "c8bcb1585f0a20f5a27e328d9ed1c0f0"
  },
  {
    "url": "notes/dailyLife/index.html",
    "revision": "2959f8ae1aa4350cbba5b0cf11438839"
  },
  {
    "url": "notes/frontDev/index.html",
    "revision": "f4bc59ae75a5fe72ce08a888ef807b90"
  },
  {
    "url": "tag/index.html",
    "revision": "811b74a5de84d2a1f7371e5473a90c9d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b59f8918f4f89fe84599266dbbb2d1c8"
  },
  {
    "url": "timeLine/index.html",
    "revision": "792427080a7d22b51e54bc7d91df3769"
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
