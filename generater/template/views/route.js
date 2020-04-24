
// import <%= component.name %> from './<%= component.name %>.vue'
// const <%= component.name %> = () => import('./<%= component.name %>.vue')
export default {
  path: '/<%= component.name %>',
  name: '<%= component.name %>',
  pname: '', // 父亲路由的名称
  level: 1, // 一级路由
  component: () => import('./<%= component.name %>.vue'),
  children: [
  ]
}
