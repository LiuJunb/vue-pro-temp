
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
        name: 'b-asider-menu',
        type: 'menu',
        url: '/main/asider-menu',
        children: [
        ]
      },
      {
        icon: 'el-icon-setting',
        id: 22,
        level: 2,
        name: 'b-advanced-search',
        type: 'menu',
        url: '/main/advanced-search',
        children: [
        ]
      },
      {
        icon: 'el-icon-setting',
        id: 23,
        level: 2,
        name: 'b-button-group',
        type: 'menu',
        url: '/main/button-group',
        children: [
        ]
      },
      {
        icon: 'el-icon-setting',
        id: 24,
        level: 2,
        name: 'b-advanced-table',
        type: 'menu',
        url: '/main/advanced-table',
        children: [
        ]
      }

    ]
  }
]

export {
  menuList
}
