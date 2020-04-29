// import List from './list.vue'
const List = () => import('./list.vue')
export default {
  path: 'bookslist',
  name: 'bookslist',
  pname: 'main',
  level: 2, // 二级路由
  component: List,
  children: [
  ]
}
