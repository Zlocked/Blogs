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
    "revision": "353dc22c620ffb78b033f4b8c3be5fb8"
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
    "url": "assets/js/1.1cd76e76.js",
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
    "url": "assets/js/14.f6fb7068.js",
    "revision": "cff0f61ccbb4bfafc8e65e1d040e6c33"
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
    "url": "assets/js/3.a0e4f339.js",
    "revision": "7e021c572ce3cd640b1ea19bb36317c1"
  },
  {
    "url": "assets/js/4.bf8ff9ed.js",
    "revision": "d0336756c3e8b7f30934e83b0540a1cc"
  },
  {
    "url": "assets/js/5.49be185f.js",
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
    "url": "assets/js/app.b43d6c5f.js",
    "revision": "8e3eec47fd2096e2a76dd4f2603eb4b6"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "090304a866667515332444d91d9242a1"
  },
  {
    "url": "categories/index.html",
    "revision": "a7ec37fd6db03a124507d949088d77f5"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "af47069decce7fb359897aa379b69c8a"
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
    "revision": "9c7b4363c9d05416e5394acba815623d"
  },
  {
    "url": "logo.jpg",
    "revision": "da9436f3230b35dbe496f8a71ef6fa33"
  },
  {
    "url": "notes/backDev/index.html",
    "revision": "ef05ee851244c7acf96731c110c885a9"
  },
  {
    "url": "notes/backDev/test.html",
    "revision": "b20b3ea232a1dac55338f271fb643b73"
  },
  {
    "url": "notes/dailyLife/index.html",
    "revision": "6121e806ad9e54a73d25a18de0fdd415"
  },
  {
    "url": "notes/frontDev/index.html",
    "revision": "9e1151fce34e5f515aeed86670a07cbd"
  },
  {
    "url": "tag/index.html",
    "revision": "8498849f4d0d90d59c9de8056d0b1fef"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "822627758e5f825289d4540e4ad0dca5"
  },
  {
    "url": "timeline/index.html",
    "revision": "14b18cd71b19f00f53d02ee8d51fe47d"
  },
  {
    "url": "timeLine/index.html",
    "revision": "136c455fa518486ccd59754480ad3e73"
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
