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
    "revision": "b493262928cbd5da4ff5562b616bcc1e"
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
    "url": "assets/js/11.9899f6f3.js",
    "revision": "80d80a9325f7616dcb27cd89d1e8922c"
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
    "url": "assets/js/15.bb2733e6.js",
    "revision": "034b2a9519aeed6afc24d6369027beef"
  },
  {
    "url": "assets/js/16.23ee7da8.js",
    "revision": "81597ee98ea0e4a6ad8da4bd0891dce4"
  },
  {
    "url": "assets/js/17.52cba2eb.js",
    "revision": "24d397afd0ac380f8a8a973c4473e04b"
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
    "url": "assets/js/9.083fb3d8.js",
    "revision": "95e9b1e26707f5e8cc0561bd611b241d"
  },
  {
    "url": "assets/js/app.581580de.js",
    "revision": "f326d57a941ecbb4a1c8630f9bb6cc41"
  },
  {
    "url": "categories/index.html",
    "revision": "24339f5490ccb302ba74d2b9270eec7f"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "eaf5334bad251275f7882aacd3943038"
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
    "revision": "3eb06c2250dfeffae7a241b9d1d7bd65"
  },
  {
    "url": "logo.jpg",
    "revision": "da9436f3230b35dbe496f8a71ef6fa33"
  },
  {
    "url": "notes/backDev/index.html",
    "revision": "b213b4489c9912d0bdf675064f5f6d3d"
  },
  {
    "url": "notes/dailyLife/index.html",
    "revision": "84657dc1bb2d9698f163f4c775791294"
  },
  {
    "url": "notes/frontDev/JS/Object/index.html",
    "revision": "1f66decbec0ac2eeab4fd897823bc294"
  },
  {
    "url": "notes/frontDev/JS/Object/Object_Propty_Descriptor.html",
    "revision": "c90a6e33c7c7d5785ef47766cd03ae65"
  },
  {
    "url": "tag/index.html",
    "revision": "cac0f786702d60aae77e679941a6aa83"
  },
  {
    "url": "tag/js-Object/index.html",
    "revision": "5831f7a0eea9d93a6ac2e3415d84ea1a"
  },
  {
    "url": "timeline/index.html",
    "revision": "3c1d0b284d1ebe3e46578fc26b44f189"
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
