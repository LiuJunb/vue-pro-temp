const menuList = [
  {
    icon: 'el-icon-location',
    id: 1,
    level: 1,
    name: '项目简介',
    type: 'dir',
    url: '',
    children: [
      {
        icon: 'el-icon-setting',
        id: 12,
        level: 2,
        name: 'Demo页面',
        type: 'menu',
        url: '/demo',
        children: []
      },
      {
        icon: 'el-icon-setting',
        id: 11,
        level: 2,
        name: '基础表格页',
        type: 'menu',
        url: '/example',
        children: []
      },
      {
        icon: 'el-icon-setting',
        id: 13,
        level: 2,
        name: '九宫格页面',
        type: 'menu',
        url: '/gridview',
        children: []
      },
      {
        icon: 'el-icon-setting',
        id: 14,
        level: 2,
        name: '统计页面',
        type: 'menu',
        url: '/statistical',
        children: []
      },
      {
        icon: 'el-icon-setting',
        id: 15,
        level: 2,
        name: '测试自动生成的页面',
        type: 'menu',
        url: '/login',
        children: []
      },
      {
        icon: 'el-icon-setting',
        id: 16,
        level: 2,
        name: '子系统',
        type: 'menu',
        url: '/app1',
        children: []
      }
    ]
  },
  {
    icon: 'el-icon-location',
    id: 2,
    level: 1,
    name: '用户管理系统',
    type: 'dir',
    url: '',
    children: [
      {
        icon: 'el-icon-setting',
        id: 26,
        level: 2,
        name: '角色管理',
        type: 'menu',
        url: '/app1/main/demo',
        children: []
      }
    ]
  }

]

export {
  menuList
}
