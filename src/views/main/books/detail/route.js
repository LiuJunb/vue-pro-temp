// import Detail from './index.vue'
const Detail = () => import('./index.vue')
export default {
  path: 'booksdetail',
  name: 'booksdetail',
  pname: 'main',
  level: 2, // 二级路由
  component: Detail,
  children: [
  ]
}
