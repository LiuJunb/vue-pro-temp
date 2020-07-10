
// 普通加载路由
// import Detail from './detail.vue'
// 懒加载路由
const Detail = () => import(/* webpackChunkName: "detail" */ './detail.vue')
export default {
  name: '详情',
  path: 'example/detail', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // 2 级路由（number类型）
  component: Detail,
  children: [
  ],
  meta: {
    keepAlive: false, // 是否需要缓存
    requireAuth: false // 是否需要登录才能访问
  }
}
