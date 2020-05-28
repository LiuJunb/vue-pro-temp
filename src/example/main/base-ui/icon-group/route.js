
// 普通加载路由
// import IconGroup from './icon-group.vue'
// 懒加载路由
const IconGroup = () => import(/* webpackChunkName: "icon-group" */ './icon-group.vue')
export default {
  path: 'icon-group', // 二级路由前面没有/
  name: 'icon-group',
  pname: 'main', // 父亲路由的名称
  level: 2, // 3级路由
  component: IconGroup,
  children: [
  ]
}
