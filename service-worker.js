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
    "revision": "37d2a1f0d4e96864f1c59c9a1cce1f65"
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
    "url": "assets/js/17.c094c171.js",
    "revision": "34536afc1fe0f4cd2f8416c392f22f98"
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
    "url": "assets/js/app.228fcbb3.js",
    "revision": "a84da8f1b08eee255d33878e19341878"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "5538113a2d12e5bc406ef65a8bcdfe31"
  },
  {
    "url": "categories/index.html",
    "revision": "708f712f403e1f72baf9bf7eb7e8a66f"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "2751450b179c390ff2a42a129d01f5df"
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
    "revision": "cae07575df694d361a45fb167e3b6c7e"
  },
  {
    "url": "logo.jpg",
    "revision": "da9436f3230b35dbe496f8a71ef6fa33"
  },
  {
    "url": "notes/backDev/index.html",
    "revision": "8ea19eaa1227e11a7110d60f6843f338"
  },
  {
    "url": "notes/backDev/test.html",
    "revision": "7e3c25da1a4d0ce9c0a09642941ebb29"
  },
  {
    "url": "notes/dailyLife/index.html",
    "revision": "6662a5d08958b7f100f52b88da5b290f"
  },
  {
    "url": "notes/frontDev/index.html",
    "revision": "7cbf8347e0eab162a584f03110b9c163"
  },
  {
    "url": "tag/index.html",
    "revision": "6b04ee3fbaeb90895e56470d0a79eecd"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "29172b331d4f8df9c28735a72c9773d0"
  },
  {
    "url": "timeline/index.html",
    "revision": "e02e9d2c46160b7a839512a1098f8a00"
  },
  {
    "url": "timeLine/index.html",
    "revision": "0e5c059c179f2a432a7b265853ccd499"
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
