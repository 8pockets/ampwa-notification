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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "helper-iframe.html",
    "revision": "37afed71c4b45da33e1a7bb6850a4c7c"
  },
  {
    "url": "index.html",
    "revision": "a207cddf6e8c7f4fd906edecc76c33b7"
  },
  {
    "url": "permission-dialog.html",
    "revision": "a616f750edc862ea6b4c81c140f15585"
  },
  {
    "url": "sw.html",
    "revision": "a7d53957bfd645f886751e4474370beb"
  },
  {
    "url": "workbox-config.js",
    "revision": "047fb4b143113a20f240168471032035"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
