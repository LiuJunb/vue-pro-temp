// import AsiderMenu from './asider-menu'
const AsiderMenu = () => import(/* webpackChunkName: "asider-menu" */ './asider-menu.vue')
export default {
  path: 'asider-menu',
  name: 'asider-menu',
  pname: 'main',
  level: 2, // 二级路由
  component: AsiderMenu,
  children: [
  ]
}
