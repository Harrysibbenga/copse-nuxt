import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b8bc898a = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _1905a97e = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0d64628e = () => interopDefault(import('../pages/admin/about.vue' /* webpackChunkName: "pages/admin/about" */))
const _2fa29464 = () => interopDefault(import('../pages/admin/carousel.vue' /* webpackChunkName: "pages/admin/carousel" */))
const _3bda0a55 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _7232673e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _b8bc898a,
    children: [{
      path: "",
      component: _1905a97e,
      name: "admin"
    }, {
      path: "about",
      component: _0d64628e,
      name: "admin-about"
    }, {
      path: "carousel",
      component: _2fa29464,
      name: "admin-carousel"
    }]
  }, {
    path: "/login",
    component: _3bda0a55,
    name: "login"
  }, {
    path: "/",
    component: _7232673e,
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
