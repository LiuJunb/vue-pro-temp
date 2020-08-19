
// 普通加载路由
// import Demo from './demo.vue'
// 懒加载路由
const Demo = () => import(/* webpackChunkName: "demo" */ './demo.vue')
export default {
  name: 'demo',
  path: 'demo', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // 2 级路由（number类型）
  component: Demo,
  children: [
  ],
  meta: {
    keepAlive: true, // 是否需要缓存
    requireAuth: false // 是否需要登录才能访问
  }
}
