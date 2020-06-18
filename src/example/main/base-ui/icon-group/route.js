
// 普通加载路由
// import IconGroup from './icon-group.vue'
// 懒加载路由
const IconGroup = () => import(/* webpackChunkName: "icon-group" */ './icon-group.vue')
export default {
  name: 'icon-group',
  path: 'icon-group', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: IconGroup,
  children: [
  ]
}
