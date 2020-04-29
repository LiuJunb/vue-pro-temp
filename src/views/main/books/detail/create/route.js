// import Create from './create.vue'
const Create = () => import('./create.vue')
export default {
  path: 'create',
  name: 'bookscreate',
  pname: 'booksdetail',
  level: 3, // 3级路由
  component: Create,
  children: [
  ]
}
