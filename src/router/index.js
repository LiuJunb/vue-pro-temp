import Vue from 'vue'
import VueRouter from 'vue-router'
import ARoutes from './register-routes.js'
console.log('Routes=', ARoutes)

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

export default router
