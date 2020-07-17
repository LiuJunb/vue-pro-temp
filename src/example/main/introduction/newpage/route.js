
// 普通加载路由
// import Newpage from './newpage.vue'
// 懒加载路由
const Newpage = () => import(/* webpackChunkName: "newpage" */ './newpage.vue')
export default {
  name: 'newpage',
  path: 'newpage', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: Newpage,
  children: [
  ],
  meta: {
    keepAlive: false, // 需不需要缓存
    requireAuth: false // 需不需要登录才能访问
  }
}
