import BaseStyle from '@/styles/base.js'
export const btnListConfig = [
  {
    name: '新建1',
    bgColor: '',
    type: 'primary',
    // size: 'small',
    btnPerm: 'pp.list'
  },
  {
    name: '新建2',
    bgColor: '',
    // size: 'small',
    type: 'primary',
    btnPerm: ''
  },
  {
    name: '导出',
    icon: 'el-icon-upload2',
    // size: 'small',
    type: 'primary',
    btnPerm: ''
  },
  {
    name: '查询',
    icon: 'el-icon-search',
    type: 'warning',
    // size: 'small',
    bgColor: '',
    btnPerm: ''
  },
  {
    name: '上传',
    upload: true, // upload, slotName是必须的
    slotName: 'upload-1', //
    icon: 'el-icon-upload',
    // size: 'small',
    type: 'primary',
    btnPerm: ''
  },
  {
    icon: 'el-icon-refresh',
    btnPerm: '',
    // size: 'small',
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
