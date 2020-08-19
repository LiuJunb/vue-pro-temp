
// 普通加载路由
// import Statistical from './statistical.vue'
// 懒加载路由
const Statistical = () => import(/* webpackChunkName: "statistical" */ './statistical.vue')
export default {
  name: 'statistical',
  path: 'statistical', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: Statistical,
  children: [
  ],
  meta: {
    keepAlive: true, // 是否需要缓存
    requireAuth: false // 是否需要登录才能访问
  }
}
