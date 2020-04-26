// import Create from './index.vue'
const Create = () => import('./index.vue')
export default {
  path: 'create',
  name: 'bookscreate',
  pname: 'booksdetail',
  level: 3, // 3级路由
  component: Create,
  children: [
  ]
}
