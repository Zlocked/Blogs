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
    "revision": "6593bc32ea169e05df8e6ddce50b5789"
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
    "url": "assets/js/1.7c14a947.js",
    "revision": "b0e9d794b3a708e75e3c8cfe1baa8503"
  },
  {
    "url": "assets/js/10.aacd51f8.js",
    "revision": "e223e208b1be8b5265c8e42976890324"
  },
  {
    "url": "assets/js/11.560c75f0.js",
    "revision": "cfbb9cdf4a18f9c07725a13f32cab930"
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
    "url": "assets/js/15.0c2876e1.js",
    "revision": "e7545e77b3ba6e2ab1dc8bddd40d2c39"
  },
  {
    "url": "assets/js/16.7db83e4c.js",
    "revision": "968178b4e498a23e47d23ec8d412d1cd"
  },
  {
    "url": "assets/js/17.46d6d152.js",
    "revision": "3244eccaf6205c1326f438b42d767696"
  },
  {
    "url": "assets/js/18.2310fc4e.js",
    "revision": "2ba618885b373efca58a9baa29007a72"
  },
  {
    "url": "assets/js/19.cf0a2e92.js",
    "revision": "a337cd35c5043c8c673b47dbd8810f13"
  },
  {
    "url": "assets/js/20.1f4fc5da.js",
    "revision": "67562c462f19b8fccd69f6e9bcb6f898"
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
    "url": "assets/js/8.ca2928d0.js",
    "revision": "87db85f9aeb50d0d4220f9c8e75f791a"
  },
  {
    "url": "assets/js/9.c4cbd7d5.js",
    "revision": "fce99ab336e2c383e63ba40bf47bdfe2"
  },
  {
    "url": "assets/js/app.de4de45d.js",
    "revision": "0b0d4fd3b167afd1e350eefe11c625c3"
  },
  {
    "url": "categories/index.html",
    "revision": "0ec40bd344eff6b2b59e2bc3ae44a13c"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "ff73096aa5a36bbefa06b1cfe7e603e4"
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
    "revision": "c0f324e100f0a9eb55316b7dbe7303fd"
  },
  {
    "url": "logo.jpg",
    "revision": "da9436f3230b35dbe496f8a71ef6fa33"
  },
  {
    "url": "notes/backDev/index.html",
    "revision": "6db488f337b32a967f6fb34c10e94d26"
  },
  {
    "url": "notes/dailyLife/index.html",
    "revision": "98020df062517105e052dcdf44cca675"
  },
  {
    "url": "notes/frontDev/JS/Object/index.html",
    "revision": "de48c0485873beda79cc419c9a8e21b3"
  },
  {
    "url": "notes/frontDev/JS/Object/Object_Create.html",
    "revision": "2012282697df19bdf74d59ff159666ff"
  },
  {
    "url": "notes/frontDev/JS/Object/Object_Propty_Descriptor.html",
    "revision": "681b881c14a2dc60a41884b31fc340a6"
  },
  {
    "url": "notes/frontDev/JS/Object/Object-Class.html",
    "revision": "48fca0555fb766e60c173b2f78567bf8"
  },
  {
    "url": "notes/frontDev/JS/Object/Object-Extend.html",
    "revision": "92dbbd6c05b387f29e6ae11571e4f462"
  },
  {
    "url": "tag/index.html",
    "revision": "ee02eae9ffcca7c68ccedbceab1d5e21"
  },
  {
    "url": "tag/js-Object/index.html",
    "revision": "5e6cb4455e196bfc0c7065a0226fd728"
  },
  {
    "url": "timeline/index.html",
    "revision": "0c6e4db315df9c44d0d7a1132869cf60"
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
