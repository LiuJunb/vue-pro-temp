
// 普通加载路由
// import AdvancedTable from './advanced-table.vue'
// 懒加载路由
const AdvancedTable = () => import(/* webpackChunkName: "advanced-table" */ './advanced-table.vue')
export default {
  path: 'advanced-table', // 二级路由前面没有/
  name: 'advanced-table',
  pname: 'main', // 父亲路由的名称
  level: 2, // 2级路由
  component: AdvancedTable,
  children: [
  ]
}
