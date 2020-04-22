// import Register from './register.vue'
const Register = () => import('./register.vue')
export default {
  path: '/register',
  name: 'register',
  pname: '',
  level: 1, // 一级路由
  component: Register,
  children: [
  ]
}
