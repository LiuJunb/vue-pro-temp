
import {
  AdvancedSearch
} from '@/base-ui/src'
const { SearchType } = AdvancedSearch
export const expFormItems1 = [
  {
    ItemType: SearchType.default,
    fieldId: 'user',
    defaultValue: undefined,
    labelName: '活动',
    labelWidth: '90px',
    style: {
      width: '280px'
    },
    tooltip: `
    1.Left Center 提示文字<br/>
    2.第二行信息提示文字<br/>
    3.第3行信息提示文字
  `,
    rules: [
      { required: false, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    placeholder: null
    // 可继续添加 element-ui  input 组件的其它的属性
  }
]
export const expFormItems2 = [
  {
    ItemType: SearchType.select,
    fieldId: 'region1',
    defaultValue: null,
    labelName: '活动区域1',
    labelWidth: '90px',
    style: {
      width: '150px'
    },
    rules: [
      { required: false, message: '请选择活动区域（单选）', trigger: 'change' }
    ],
    clearable: true,
    placeholder: null,
    // tooltip: `
    //   1.Left Center 提示文字<br/>
    //   2.第二行信息提示文字<br/>
    //   3.第3行信息提示文字
    // `,
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
  {
    ItemType: SearchType.select,
    fieldId: 'region2',
    defaultValue: [],
    labelName: '活动区域2',
    style: {
      width: '100%'
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
  }
]
export const expFormItems3 = [
  {
    ItemType: SearchType.selectAndInput,
    labelName: '名称',
    formItem_1: {
      fieldId: 'sel_1',
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
      fieldId: 'input_1',
      defaultValue: null,
      rules: [
        { required: false, message: '请输入名称', trigger: 'blur' }
      ],
      placeholder: null,
      style: {
        width: '300px'
      }
      // 可继续添加 element-ui  input 组件的其它的属性
    }
  },
  {
    ItemType: SearchType.inputAndSelect,
    labelName: '活动时间',
    required: false, // 显示红点
    labelWidth: '90px',
    // style: {
    //   width: '320px'
    // },
    formItem_1: {
      fieldId: 'i_s1',
      defaultValue: null,
      rules: [
        { type: 'string', required: false, message: '请选择日期', trigger: 'change' }
      ],
      // style: {
      //   width: '180px'
      // },
      placeholder: null
      // 可继续添加 element-ui  DatePicker 组件的其它的属性

    },
    formItem_2: {
      fieldId: 'i_s2',
      defaultValue: null,
      rules: [
        { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
      ],
      // style: {
      //   width: '130px'
      // },
      clearable: true,
      placeholder: null,
      // tooltip: `
      //   1.Left Center 提示文字<br/>
      //   2.第二行信息提示文字<br/>
      //   3.第3行信息提示文字
      // `,
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
    }
  }
]
export const expFormItems4 = [
  {
    ItemType: SearchType.checkboxs,
    fieldId: 'check_box_1',
    defaultValue: ['地推活动'],
    labelName: '活动性质',
    style: {
      width: '100%'
    },
    checkboxList: [
      {
        label: '美食/餐厅线上活动'
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
  }
]
export const expFormItems5 = [
  {
    ItemType: SearchType.radios,
    fieldId: 'radios_11',
    defaultValue: '',
    labelName: '请选择活动资源',
    labelWidth: '150px',
    style: {
      width: '100%'
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
  }
]
export const expFormItems6 = [
  {
    ItemType: SearchType.selectDate,
    fieldId: 'startDate',
    defaultValue: null,
    labelName: '时间date',
    // labelWidth: '150px',
    valueFormat: 'yyyy-MM-dd',
    rules: [
      { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null,
    style: {
      width: '150px'
    }
  },
  {
    ItemType: SearchType.selectDate,
    fieldId: 'dateTime',
    defaultValue: null,
    labelName: '时间datetime',
    // 指定组件的类型
    type: 'datetime',
    rules: [
      { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null,
    valueFormat: 'yyyy-MM-dd HH:mm:ss'
    // style: {
    //   width: '100%'
    // }
  }
]
export const expFormItems7 = [
  {
    ItemType: SearchType.selectDateRange,
    fieldId: 'startDateTime1',
    defaultValue: ['2020-03-08', '2020-03-09'],
    labelName: '时间范围daterange',
    // labelWidth: '150px',
    valueFormat: 'yyyy-MM-dd',

    type: 'daterange',
    rules: [
      { type: 'array', required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null,
    style: {
      width: '260px'
    }
  },
  {
    ItemType: SearchType.selectDateRange,
    fieldId: 'startDateTime2',
    // defaultValue: null, // ok
    defaultValue: ['2020-03-08 01:22:00', '2020-03-09 01:22:00'],
    labelName: '时间范围datetimerange',

    type: 'datetimerange',
    valueFormat: 'yyyy-MM-dd HH:mm:ss',
    rules: [
      { type: 'array', required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null,
    style: {
      width: '360px'
    }
  }
]
export const expFormItems8 = [
  {
    ItemType: SearchType.selectDataAndTime,
    labelName: '活动时间',
    required: false, // 显示红点
    labelWidth: '90px',
    style: {
      width: '320px'
    },
    formItem_1: {
      fieldId: 'data1',
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
      fieldId: 'data2',
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
  }
]
export const expFormItems9 = [
  {
    ItemType: SearchType.custom,
    customSlot: 'custom1', // 插槽名称
    fieldId: 'custom1',

    defaultValue: undefined,
    labelName: '名称1',
    // labelWidth: '130px',
    // style: {
    //   width: '260px'
    // },
    rules: [
      { required: false, message: '请输入自定义名称', trigger: 'blur' }
    ],
    placeholder: '请输入内容'
  }
]
export const expFormItems10 = [
  {
    ItemType: SearchType.default,
    fieldId: 'user',
    defaultValue: undefined,
    labelName: '活动',
    // labelWidth: '90px',
    // style: {
    //   width: '280px'
    // },
    tooltip: `
    1.Left Center 提示文字<br/>
    2.第二行信息提示文字<br/>
    3.第3行信息提示文字
  `,
    rules: [
      { required: false, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    placeholder: null
    // 可继续添加 element-ui  input 组件的其它的属性
  },
  {
    ItemType: SearchType.select,
    fieldId: 'region1',
    defaultValue: null,
    labelName: '活动区域1',
    // labelWidth: '90px',
    // style: {
    //   width: '150px'
    // },
    rules: [
      { required: false, message: '请选择活动区域（单选）', trigger: 'change' }
    ],
    clearable: true,
    placeholder: null,
    // tooltip: `
    //   1.Left Center 提示文字<br/>
    //   2.第二行信息提示文字<br/>
    //   3.第3行信息提示文字
    // `,
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
  {
    ItemType: SearchType.selectDate,
    fieldId: 'startDate',
    defaultValue: null,
    labelName: '时间date',
    // labelWidth: '150px',
    // style: {
    //   width: '150px'
    // },
    valueFormat: 'yyyy-MM-dd',
    rules: [
      { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null

  },
  {
    ItemType: SearchType.selectDateRange,
    fieldId: 'startDateTime1',
    defaultValue: ['2020-03-08', '2020-03-09'],
    labelName: '时间范围',
    // labelWidth: '150px',
    // style: {
    //   width: '260px'
    // },
    valueFormat: 'yyyy-MM-dd',

    type: 'daterange',
    rules: [
      { type: 'array', required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null

  },
  {
    ItemType: SearchType.custom,
    customSlot: 'custom1', // 插槽名称
    fieldId: 'custom1',

    defaultValue: undefined,
    labelName: '名称1',
    // labelWidth: '130px',
    // style: {
    //   width: '260px'
    // },
    rules: [
      { required: false, message: '请输入自定义名称', trigger: 'blur' }
    ],
    placeholder: '请输入内容'
  }
]
export const expFormItems11 = [
  {
    ItemType: SearchType.default,
    fieldId: 'user',
    defaultValue: undefined,
    labelName: '活动1',
    rules: [
      { required: false, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    placeholder: null
  }
]
