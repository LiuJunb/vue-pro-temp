
// 普通加载路由
// import TagGroup from './tag-group.vue'
// 懒加载路由
const TagGroup = () => import(/* webpackChunkName: "tag-group" */ './tag-group.vue')
export default {
  path: 'tag-group', // 二级路由前面没有/
  name: 'tag-group',
  pname: 'main', // 父亲路由的名称
  level: 2, // 3级路由
  component: TagGroup,
  children: [
  ]
}
