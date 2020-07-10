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
        id: 12,
        level: 2,
        name: 'Demo页面',
        type: 'menu',
        url: '/main/demo',
        children: []
      },
      {
        icon: 'el-icon-setting',
        id: 11,
        level: 2,
        name: '基础表格页',
        type: 'menu',
        url: '/main/example',
        children: []
      },
      {
        icon: 'el-icon-setting',
        id: 13,
        level: 2,
        name: '九宫格页面',
        type: 'menu',
        url: '/main/gridview',
        children: []
      },
      {
        icon: 'el-icon-setting',
        id: 14,
        level: 2,
        name: '统计页面',
        type: 'menu',
        url: '/main/statistical',
        children: []
      }
    ]
  }

]

export {
  menuList
}
