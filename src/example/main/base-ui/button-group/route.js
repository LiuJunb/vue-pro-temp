
// 普通加载路由
// import ButtonGroup from './button-group.vue'
// 懒加载路由
const ButtonGroup = () => import(/* webpackChunkName: "button-group" */ './button-group.vue')
export default {
  path: 'button-group', // 二级路由前面没有/
  name: 'button-group',
  pname: 'main', // 父亲路由的名称
  level: 2, // 2级路由
  component: ButtonGroup,
  children: [
  ]
}
