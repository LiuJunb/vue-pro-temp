export const tabColumnConfig = [
  {
    prop: 'name',
    label: '姓名',
    width: '180px'
  },
  {
    prop: 'age',
    label: '年龄',
    width: '180px',
    sortable: true
  },
  {
    prop: 'sex',
    label: '性别',
    width: '180px'
  },
  {
    prop: 'content',
    label: '内容',
    width: '380px',
    'show-overflow-tooltip': true
  },
  {
    prop: 'address',
    label: '地址'
  },
  {
    prop: 'operation',
    label: '操作',
    width: '200px',
    slotColName: 'operation'
  }

]

export const paginationConfig = {
  'current-page': 1, // 重 1 开始
  'page-sizes': [10, 20, 30, 40],
  'page-size': 100,
  layout: 'total, sizes, prev, pager, next, jumper',
  total: 14
}
