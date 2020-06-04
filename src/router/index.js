import Vue from 'vue'
import VueRouter from 'vue-router'
import ARoutes from './register-routes.js'
// import ARoutes from '../views/load-routes.js'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  ...ARoutes
]

const router = new VueRouter({
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
})

export default router
