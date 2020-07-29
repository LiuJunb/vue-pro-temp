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
  // keep-alive 返回缓存页面后记录浏览位置
    console.log(from, to, savedPosition)
    // return { x: 0, y: 500 }
    if (scrollDom == null) {
      scrollDom = document.querySelector('.main .srcoll-view')
    }
    scrollDom.scrollTop = 0
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
  // ... todo
  console.log('-------------')
  console.log(to, from)
  if (scrollDom === null) {
    scrollDom = document.querySelector('.main .srcoll-view')
  } else {
    console.log('afterEach.afterEach=', scrollDom.scrollTop)
  }
  console.log('-------------')
})
export default router
