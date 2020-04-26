// import Register from './index.vue'
const Register = () => import(/* webpackChunkName: "register" */ './index.vue')
export default {
  path: '/register',
  name: 'register',
  pname: '',
  level: 1, // 一级路由
  component: Register,
  children: [
  ]
}
