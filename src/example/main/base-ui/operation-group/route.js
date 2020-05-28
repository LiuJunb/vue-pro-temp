
// 普通加载路由
// import OperationGroup from './operation-group.vue'
// 懒加载路由
const OperationGroup = () => import(/* webpackChunkName: "operation-group" */ './operation-group.vue')
export default {
  path: 'operation-group', // 二级路由前面没有/
  name: 'operation-group',
  pname: 'main', // 父亲路由的名称
  level: 2, // 2级路由
  component: OperationGroup,
  children: [
  ]
}
