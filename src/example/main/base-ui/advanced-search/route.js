
// 普通加载路由
// import AdvancedSearch from './advanced-search.vue'
// 懒加载路由
const AdvancedSearch = () => import(/* webpackChunkName: "advanced-search" */ './advanced-search.vue')
export default {
  path: 'advanced-search', // 二级路由前面没有/
  name: 'advanced-search',
  pname: 'main', // 父亲路由的名称
  level: 2, // 2级路由
  component: AdvancedSearch,
  children: [
  ]
}
