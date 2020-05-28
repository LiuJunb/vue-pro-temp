
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
        name: '简介',
        type: 'menu',
        url: '/main/introduce',
        children: []
      },
      {
        icon: 'el-icon-setting',
        id: 12,
        level: 2,
        name: '编写规范',
        type: 'dir',
        url: '/main/code-specification',
        children: [
        ]
      }
    ]
  },
  {
    icon: 'el-icon-document',
    id: 2,
    level: 1,
    name: 'BaseUI组件',
    type: 'dir',
    url: '/main/detainees/inmates',
    children: [
      {
        icon: 'el-icon-setting',
        id: 21,
        level: 2,
        name: 'BAsiderMunu',
        type: 'menu',
        url: '/main/asider-menu',
        children: [
        ]
      },
      {
        icon: 'el-icon-setting',
        id: 22,
        level: 2,
        name: 'AdvancedSearch',
        type: 'dir',
        url: '/main/advanced-search',
        children: [
        ]
      }
    ]
  }
]

export {
  menuList
}
