
// 普通加载路由
// import PrintTable from './print-table.vue'
// 懒加载路由
const PrintTable = () => import(/* webpackChunkName: "print-table" */ './print-table.vue')
export default {
  name: 'print-table12',
  path: 'print-table', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: PrintTable,
  children: [
  ]
}
