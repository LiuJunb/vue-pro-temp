import Vue from 'vue'
import VueRouter from 'vue-router'
import ARoutes from './register-routes.js'
// import ARoutes from '../views/load-routes.js'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/demo'
  },
  ...ARoutes
]

let scrollDom = null

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
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
  }
})
// https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%90%8E%E7%BD%AE%E9%92%A9%E5%AD%90
router.beforeEach((to, from, next) => {
  // requireAuth 是在路由配置对象的meta属性中配置的属性
  if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
    if (sessionStorage.getItem('token')) { // 判断是否登录
      next()
    } else { // 没登录则跳转到登录界面
      next('/login')
    }
  } else {
    next()
  }
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

// https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%90%8E%E7%BD%AE%E9%92%A9%E5%AD%90
router.beforeEach((to, from, next) => {
  // ... todo
  next()
})

router.afterEach((to, from) => {
  // ... todo
})

export default router
