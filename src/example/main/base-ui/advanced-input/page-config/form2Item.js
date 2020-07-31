import {
  AdvancedInput
} from '@/base-ui/src'
const { InputType } = AdvancedInput
const colWidth = '360px'
const form2Item = [
  {
    ItemType: InputType.default,
    fieldId: 'u2',
    defaultValue: undefined,
    labelName: '活动1',

    rules: [
      { required: true, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    placeholder: null,
    style: {
      width: colWidth
    }
  },
  {
    ItemType: InputType.default,
    fieldId: 'n2',
    defaultValue: undefined,
    labelName: '用户名',

    rules: [
      { required: true, message: '用户名', trigger: 'blur' }
    ],
    placeholder: null,
    style: {
      width: colWidth
    }
  },
  {
    ItemType: InputType.select,
    fieldId: 's2',
    defaultValue: undefined,
    labelName: '性别',
    clearable: true,
    selectList: [
      {
        label: '男',
        value: '男'
      },
      {
        label: '女',
        value: '女'
      }
    ],
    rules: [
      { required: true, message: '性别', trigger: 'blur' }
    ],
    placeholder: null,
    style: {
      width: colWidth
    }
  },
  {
    ItemType: InputType.select,
    fieldId: 'r2',
    defaultValue: [],
    labelName: '活动区域2',
    style: {
      width: colWidth
    },
    multiple: true,
    rules: [
      { required: false, message: '请选择活动区域（多选）', trigger: 'change' }
    ],
    clearable: true,
    placeholder: null,
    //   tooltip: `
    //   1.Left Center 提示文字<br/>
    //   2.第二行信息提示文字<br/>
    //   3.第3行信息提示文字
    //  `,
    selectList: [
      {
        label: '区域一1',
        value: 'shanghai2'
      },
      {
        label: '区域二2',
        value: 'beijing2'
      }
    ]
  },
  {
    ItemType: InputType.selectAndInput,
    labelName: '名称',
    formItem_1: {
      fieldId: 'sel_2',
      defaultValue: 'shanghai',
      rules: [
        { required: false, message: '请选择活动区域', trigger: 'change' }
      ],
      clearable: false,
      placeholder: null,
      style: {
        width: '100px'
      },
      //   tooltip: `
      //   1.Left Center 提示文字<br/>
      //   2.第二行信息提示文字<br/>
      //   3.第3行信息提示文字
      //  `,
      // 可继续添加 element-ui  select 组件的其它的属性
      selectList: [
        {
          label: '区域一',
          value: 'shanghai'
        },
        {
          label: '区域二',
          value: 'beijing'
        }
      ]
    },
    formItem_2: {
      fieldId: 'input_2',
      defaultValue: null,
      rules: [
        { required: false, message: '请输入名称', trigger: 'blur' }
      ],
      placeholder: null,
      style: {
        width: colWidth
      }
      // 可继续添加 element-ui  input 组件的其它的属性
    }
  },
  {
    ItemType: InputType.checkboxs,
    fieldId: 'ch_box_2',
    defaultValue: ['地推活动'],
    labelName: '活动性质',
    style: {
      width: colWidth
    },
    checkboxList: [
      {
        label: '美食/餐厅'
      },
      {
        label: '地推活动'
      },
      {
        label: '线下主题活动'
      }
    ],
    rules: [
      { type: 'array', required: false, message: '请至少选择一个活动性质', trigger: 'change' }
    ],
    placeholder: null
  },
  {
    ItemType: InputType.radios,
    fieldId: 'radio2',
    defaultValue: '',
    labelName: '请选择活动',
    // labelWidth: '150px',
    style: {
      width: colWidth
    },
    radioList: [
      {
        label: '线上品牌商赞助'
      },
      {
        label: '线下场地免费'
      }
    ],
    rules: [
      { required: false, message: '请选择活动资源', trigger: 'change' }
    ],
    placeholder: null
  },
  {
    ItemType: InputType.selectDate,
    fieldId: 'sDate2',
    defaultValue: null,
    labelName: '时间date',
    // labelWidth: '150px',
    valueFormat: 'yyyy-MM-dd',
    rules: [
      { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null,
    style: {
      width: colWidth
    }
  },
  {
    ItemType: InputType.selectDate,
    fieldId: 'dTime2',
    defaultValue: null,
    labelName: '时间1',
    // 指定组件的类型
    type: 'datetime',
    rules: [
      { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null,
    valueFormat: 'yyyy-MM-dd HH:mm:ss',
    style: {
      width: colWidth
    }
  },
  {
    ItemType: InputType.selectDateRange,
    fieldId: 'sTime2',
    defaultValue: ['2020-03-08', '2020-03-09'],
    labelName: '时间范围1',
    // labelWidth: '150px',
    valueFormat: 'yyyy-MM-dd',

    type: 'daterange',
    rules: [
      { type: 'array', required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null,
    style: {
      width: colWidth
    }
  },
  {
    ItemType: InputType.selectDateRange,
    fieldId: 'ssTime2',
    // defaultValue: null, // ok
    defaultValue: ['2020-03-08 01:22:00', '2020-03-09 01:22:00'],
    labelName: '时间范围2',

    type: 'datetimerange',
    valueFormat: 'yyyy-MM-dd HH:mm:ss',
    rules: [
      { type: 'array', required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null,
    style: {
      width: colWidth
    }
  },
  {
    ItemType: InputType.selectDataAndTime,
    labelName: '活动时间',
    required: false, // 显示红点
    // labelWidth: '90px',
    style: {
      width: colWidth
    },
    formItem_1: {
      fieldId: 'data2',
      defaultValue: null,
      valueFormat: 'yyyy-MM-dd',
      rules: [
        { type: 'string', required: false, message: '请选择日期', trigger: 'change' }
      ],
      // labelWidth: '10px',
      // style: {
      //   width: '160px'
      // },
      placeholder: null

    },
    formItem_2: {
      fieldId: 'ddata2',
      defaultValue: null,
      valueFormat: 'HH:mm:ss',
      rules: [
        { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
      ],
      // labelWidth: '10px',
      // style: {
      //   width: '160px'
      // },
      placeholder: null
    }
  },
  {
    ItemType: InputType.custom,
    customSlot: 'custom2', // 插槽名称
    fieldId: 'custom2',

    defaultValue: undefined,
    labelName: '自定义item',
    // labelWidth: '130px',
    style: {
      width: colWidth
    },
    rules: [
      { required: false, message: '请输入自定义名称', trigger: 'blur' }
    ],
    placeholder: '请输入内容'
  }

]
export {
  form2Item
}
