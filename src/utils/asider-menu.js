const menuList = [
  {
    icon: 'el-icon-location',
    id: 1,
    level: 1,
    name: '项目简介',
    type: 'dir',
    url: '/main',
    children: [
      {
        icon: 'el-icon-setting',
        id: 11,
        level: 2,
        name: '表格页面',
        type: 'menu',
        url: '/main/example',
        children: []
      },
      {
        icon: 'el-icon-setting',
        id: 12,
        level: 2,
        name: 'demo页面',
        type: 'menu',
        url: '/main/demo',
        children: []
      }
    ]
  }

]

export {
  menuList
}
