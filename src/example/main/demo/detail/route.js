
// 普通加载路由
// import Detail from './detail.vue'
// 懒加载路由
const Detail = () => import(/* webpackChunkName: "detail" */ './detail.vue')
export default {
  path: 'demo/detail', // 二级路由前面没有/
  name: 'detail',
  pname: 'main', // 父亲路由的名称
  level: 2, // 2级路由
  component: Detail,
  children: [
  ],
  meta: {
    keepAlive: false, // 需不需要缓存
    requireAuth: false // 需不需要登录才能访问
  }
}
