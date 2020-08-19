import Main from './main.vue'
// const Main = () => import(/* webpackChunkName: "main" */ './main.vue')
export default {
  path: '/main',
  name: 'main',
  pname: '',
  level: 1, // 一级路由
  component: Main,
  children: [
  ],
  meta: {
    keepAlive: true, // 是否需要缓存
    requireAuth: false // 是否需要登录才能访问
  }
}
