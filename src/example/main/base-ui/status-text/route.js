
// 普通加载路由
// import StatusText from './status-text.vue'
// 懒加载路由
const StatusText = () => import(/* webpackChunkName: "status-text" */ './status-text.vue')
export default {
  path: 'status-text', // 二级路由前面没有/
  name: 'status-text',
  pname: 'main', // 父亲路由的名称
  level: 2, // 2级路由
  component: StatusText,
  children: [
  ]
}
