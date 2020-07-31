import Vue from 'vue'
import VueRouter from 'vue-router'
import ARoutes from './register-routes.js'
// import ARoutes from '../views/load-routes.js'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/main/introduce'
  },
  ...ARoutes
]
let scrollDom = null
const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    // 回到需要做缓存的页面时，回复滚动的位置
    if (scrollDom === null) {
      scrollDom = document.querySelector('.main .scrollbar__wrap')
      if (to.meta.keepAlive && scrollDom) {
        scrollDom.scrollTop = to.meta.savedPosition ? to.meta.savedPosition.y : 0
      } else {
        if (scrollDom) { scrollDom.scrollTop = 0 }
      }
    }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes

})
// https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%90%8E%E7%BD%AE%E9%92%A9%E5%AD%90
router.beforeEach((to, from, next) => {
  // ... todo

  next()
})

router.afterEach((to, from) => {
  // 需要做缓存的页面，记录from页面的滚动位置
  if (from.meta.keepAlive) {
    if (scrollDom === null) {
      scrollDom = document.querySelector('.main .scrollbar__wrap')
    }
    from.meta.savedPosition = {
      x: 0,
      y: scrollDom ? scrollDom.scrollTop : 0
    }
  } else {
    from.meta.savedPosition = {
      x: 0,
      y: 0
    }
  }
})
export default router
