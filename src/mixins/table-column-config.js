export default {

  data: function() {
    return {
      tabColumnProps: [
        {
          prop: 'attr',
          label: '参数',
          width: '180px'
        },
        {
          prop: 'des',
          label: '说明'
        },
        {
          prop: 'type',
          label: '类型',
          width: '180px'
        },
        {
          prop: 'select',
          label: '可选值'
        },
        {
          prop: 'default',
          label: '默认值',
          width: '180px'
        }
      ],
      tabColumnSlot: [
        {
          prop: 'name',
          label: '插槽名称',
          width: '180px'
        },
        {
          prop: 'des',
          label: '说明'
        }
      ],

      tabColumnEvent: [
        {
          prop: 'name',
          label: '事件名称',
          width: '180px'
        },
        {
          prop: 'des',
          label: '说明'
        },
        {
          prop: 'func',
          label: '回调参数'
        }
      ],
      tabColumnMethods: [
        {
          prop: 'name',
          label: '事件名称',
          width: '180px'
        },
        {
          prop: 'des',
          label: '说明'
        },
        {
          prop: 'func',
          label: '参数'
        }
      ],

      tabDataProps: [
        {
          attr: '刘军',
          des: 100,
          type: '男',
          select: '理科生是否收到收到是是的撒旦法第三方沙发是否撒旦法撒旦法sad法尔范 多个发给 ',
          default: '上海市普陀区金沙江路 1518 弄'
          // func:''
        }
      ],
      tabDataSlot: [
        {
          name: '刘军',
          des: 100
        }
      ],
      tabDataEvent: [
        {
          name: '刘军',
          des: 100,
          func: 'dd'
        }
      ],
      tabDataMethods: [
        {
          name: '刘军',
          des: 100,
          func: 'dd'
        }
      ]

    }
  }
}
