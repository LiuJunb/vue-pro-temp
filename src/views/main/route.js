import Main from './index.vue'
// const Main = () => import(/* webpackChunkName: "main" */ './index.vue')
export default {
  path: '/main',
  name: 'main',
  pname: '',
  level: 1, // 一级路由
  component: Main,
  children: [
  ]
}
