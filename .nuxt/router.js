import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14d5b594 = () => interopDefault(import('..\\pages\\CreatePost.vue' /* webpackChunkName: "pages/CreatePost" */))
const _bf7aa4cc = () => interopDefault(import('..\\pages\\Post.vue' /* webpackChunkName: "pages/Post" */))
const _a82e4bc2 = () => interopDefault(import('..\\pages\\Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _5c2ac733 = () => interopDefault(import('..\\pages\\Registration.vue' /* webpackChunkName: "pages/Registration" */))
const _401f2644 = () => interopDefault(import('..\\pages\\UserHome.vue' /* webpackChunkName: "pages/UserHome" */))
const _4bbc9c68 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CreatePost",
    component: _14d5b594,
    name: "CreatePost"
  }, {
    path: "/Post",
    component: _bf7aa4cc,
    name: "Post"
  }, {
    path: "/Profile",
    component: _a82e4bc2,
    name: "Profile"
  }, {
    path: "/Registration",
    component: _5c2ac733,
    name: "Registration"
  }, {
    path: "/UserHome",
    component: _401f2644,
    name: "UserHome"
  }, {
    path: "/",
    component: _4bbc9c68,
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
