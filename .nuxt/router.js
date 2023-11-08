import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d24d7f4c = () => interopDefault(import('../pages/404/index.vue' /* webpackChunkName: "pages/404/index" */))
const _a2ec4146 = () => interopDefault(import('../pages/cookie-policy/index.vue' /* webpackChunkName: "pages/cookie-policy/index" */))
const _8ffec9ac = () => interopDefault(import('../pages/privacy/index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _02def3f1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _d24d7f4c,
    name: "404"
  }, {
    path: "/cookie-policy",
    component: _a2ec4146,
    name: "cookie-policy"
  }, {
    path: "/privacy",
    component: _8ffec9ac,
    name: "privacy"
  }, {
    path: "/",
    component: _02def3f1,
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
