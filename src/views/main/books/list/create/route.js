// import Create from './create.vue'
const Create = () => import('./create.vue')
export default {
  path: 'create',
  name: 'bookcreate',
  pname: 'bookslist',
  level: 3, // 3级路由
  component: Create,
  children: [
  ]
}
