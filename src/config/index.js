// 默认导出config.dev.js的导出的属性
export * from './config.dev.js'
// export * from './config.pro.js'

// 其它菜单配置
export const OtherList = [
  {
    icon: '0',
    id: 0,
    level: 0,
    type: '0',
    parentId: 0,

    parentUrl: '/main/smart-breadcrumb',
    url: '/main/smart-breadcrumb/detail',
    name: '详情',

    children: [
    ]
  }
]

// 分页器默认配置
export const PaginatonDefaultConfig = {
  'current-page': 1, // 重 1 开始
  'page-sizes': [10, 20, 30, 40], // 10条/每页，20条/每页
  'page-size': 10, // 每页显示10条
  // layout: 'total, sizes, prev, pager, next, jumper',
  total: 0
}

// 页面搜索默认参数
export const CurSearchParams = {
  pageNum: 1, // 获取第几页
  pageSize: 10, // 每页展示多少条
  data: {

  }
}
