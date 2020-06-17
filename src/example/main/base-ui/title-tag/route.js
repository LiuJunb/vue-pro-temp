
// 普通加载路由
// import TitleTag from './title-tag.vue'
// 懒加载路由
const TitleTag = () => import(/* webpackChunkName: "title-tag" */ './title-tag.vue')
export default {
  name: 'title-tag',
  path: 'title-tag', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: TitleTag,
  children: [
  ]
}
