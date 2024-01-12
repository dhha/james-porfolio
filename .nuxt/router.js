import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4424349b = () => interopDefault(import('..\\pages\\index-new.vue' /* webpackChunkName: "pages/index-new" */))
const _b322ee16 = () => interopDefault(import('..\\pages\\index-new-bg-image.vue' /* webpackChunkName: "pages/index-new-bg-image" */))
const _e2227bd0 = () => interopDefault(import('..\\pages\\index-new-dark.vue' /* webpackChunkName: "pages/index-new-dark" */))
const _b40f542c = () => interopDefault(import('..\\pages\\index-new-demo-2.vue' /* webpackChunkName: "pages/index-new-demo-2" */))
const _b3f3252a = () => interopDefault(import('..\\pages\\index-new-demo-3.vue' /* webpackChunkName: "pages/index-new-demo-3" */))
const _b3d6f628 = () => interopDefault(import('..\\pages\\index-new-demo-4.vue' /* webpackChunkName: "pages/index-new-demo-4" */))
const _b3bac726 = () => interopDefault(import('..\\pages\\index-new-demo-5.vue' /* webpackChunkName: "pages/index-new-demo-5" */))
const _b39e9824 = () => interopDefault(import('..\\pages\\index-new-demo-6.vue' /* webpackChunkName: "pages/index-new-demo-6" */))
const _b3826922 = () => interopDefault(import('..\\pages\\index-new-demo-7.vue' /* webpackChunkName: "pages/index-new-demo-7" */))
const _b3663a20 = () => interopDefault(import('..\\pages\\index-new-demo-8.vue' /* webpackChunkName: "pages/index-new-demo-8" */))
const _31cd8fc8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/index-new",
    component: _4424349b,
    name: "index-new"
  }, {
    path: "/index-new-bg-image",
    component: _b322ee16,
    name: "index-new-bg-image"
  }, {
    path: "/index-new-dark",
    component: _e2227bd0,
    name: "index-new-dark"
  }, {
    path: "/index-new-demo-2",
    component: _b40f542c,
    name: "index-new-demo-2"
  }, {
    path: "/index-new-demo-3",
    component: _b3f3252a,
    name: "index-new-demo-3"
  }, {
    path: "/index-new-demo-4",
    component: _b3d6f628,
    name: "index-new-demo-4"
  }, {
    path: "/index-new-demo-5",
    component: _b3bac726,
    name: "index-new-demo-5"
  }, {
    path: "/index-new-demo-6",
    component: _b39e9824,
    name: "index-new-demo-6"
  }, {
    path: "/index-new-demo-7",
    component: _b3826922,
    name: "index-new-demo-7"
  }, {
    path: "/index-new-demo-8",
    component: _b3663a20,
    name: "index-new-demo-8"
  }, {
    path: "/",
    component: _31cd8fc8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
