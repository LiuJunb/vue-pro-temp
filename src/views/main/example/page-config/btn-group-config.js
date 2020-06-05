import BaseStyle from '@/styles/base.js'
export const btnListConfig = [
  {
    name: '新建1',
    bgColor: '',
    type: 'primary',
    btnPerm: 'pp.list'
  },
  {
    name: '新建2',
    bgColor: '',
    type: 'primary',
    btnPerm: ''
  },
  {
    name: '导出',
    icon: 'el-icon-upload2',
    type: 'primary',
    btnPerm: ''
  },
  {
    name: '查询',
    icon: 'el-icon-search',
    type: 'warning',
    bgColor: '',
    btnPerm: ''
  },
  {
    name: '上传',
    upload: true, // upload, slotName是必须的
    slotName: 'upload-1', //
    icon: 'el-icon-upload',
    type: 'primary',
    btnPerm: ''
  },
  {
    icon: 'el-icon-refresh',
    btnPerm: '',
    float: 'right',
    circle: true
  }
]

export const btnOperationConfig = [

  {
    name: '查看',
    type: 'text',
    // size: 'small',
    color: BaseStyle.$themeColor,
    btnPerm: ''
  },
  {
    name: '编辑',
    type: 'text',
    // size: 'small',
    color: BaseStyle.$themeColor,
    btnPerm: ''
  },
  {
    name: '删除',
    type: 'text',
    // size: 'small',
    color: BaseStyle.$successAnguar,
    btnPerm: ''
  }

]
