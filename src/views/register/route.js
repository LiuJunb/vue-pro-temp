// import Register from './register.vue'
const Register = () => import(/* webpackChunkName: "register" */ './register.vue')
export default {
  path: '/register',
  name: 'register',
  pname: '',
  level: 1, // 一级路由
  component: Register,
  children: [
  ],
  meta: {
    keepAlive: false, // 是否需要缓存
    requireAuth: false // 是否需要登录才能访问
  }
}
