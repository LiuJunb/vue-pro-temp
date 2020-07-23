
import {
  AdvancedSearch
} from '@/base-ui/src'
const { SearchType } = AdvancedSearch

export const adSearchDefaultConfig = [
  {
    ItemType: SearchType.default,
    fieldId: 'user1',
    defaultValue: undefined,
    labelName: '活动1',

    rules: [
      { required: false, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    placeholder: null
  },
  {
    ItemType: SearchType.default,
    fieldId: 'user2',
    defaultValue: undefined,
    labelName: '活动2',

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
  },
  {
    ItemType: SearchType.default,
    fieldId: 'user3',
    defaultValue: undefined,
    labelName: '活动3',
    rules: [
      { required: false, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    style: {
      width: '150px'
    },
    placeholder: null
  },
  {
    ItemType: SearchType.default,
    fieldId: 'user4',
    defaultValue: undefined,
    labelName: '活动4',
    rules: [
      { required: false, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],

    labelWidth: '150px',
    placeholder: null
  },
  {
    ItemType: SearchType.select,
    fieldId: 'region1',
    defaultValue: null,
    labelName: '活动区域1',
    // labelWidth: '150px',

    rules: [
      { required: false, message: '请选择活动区域', trigger: 'change' }
    ],
    clearable: false,
    placeholder: null,
    style: {
      width: '150px'
    },

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

    multiple: true,
    rules: [
      { required: false, message: '请选择活动区域', trigger: 'change' }
    ],
    clearable: true,
    placeholder: null,
    style: {
      width: '100%'
    },
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
    ItemType: SearchType.selectAndInput,
    labelName: '名称',
    formItem_1: {
      fieldId: 'sel_1',

      rules: [
        { required: false, message: '请选择活动区域', trigger: 'change' }
      ],
      clearable: false,
      placeholder: null,
      style: {
        width: '100px'
      },
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
    }
  },
  {
    ItemType: SearchType.checkboxs,
    fieldId: 'check_box_1',
    defaultValue: [],
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
  },
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
  },
  {
    ItemType: SearchType.selectDate,
    fieldId: 'startDate',
    defaultValue: null,
    labelName: '时间1',
    // labelWidth: '150px',
    valueFormat: 'yyyy-MM-dd',
    rules: [
      // { type: 'date', required: false, message: '请选择时间', trigger: 'change' }
      { type: 'string', required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null,
    style: {
      width: '130px'
    }
  },
  {
    ItemType: SearchType.selectDate,
    fieldId: 'dateTime',
    defaultValue: null,
    labelName: '时间2',

    type: 'datetime',
    rules: [
      { type: 'date', required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null
    // style: {
    //   width: '100%'
    // }
  },
  {
    ItemType: SearchType.selectDateRange,
    fieldId: 'startDateTime1',
    // defaultValue: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
    defaultValue: ['2020-03-08', '2020-03-09'],
    labelName: '时间范围1',
    // labelWidth: '150px',
    valueFormat: 'yyyy-MM-dd',

    type: 'daterange',
    rules: [
      { required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null,
    style: {
      width: '230px'
    }
  },
  {
    ItemType: SearchType.selectDateRange,
    fieldId: 'startDateTime2',
    defaultValue: '',
    labelName: '时间范围2',

    type: 'datetimerange',
    rules: [
      { required: false, message: '请选择时间', trigger: 'change' }
    ],
    placeholder: null,
    style: {
      width: '350px'
    }
  },

  {
    ItemType: SearchType.selectDataAndTime,
    labelName: '活动时间',
    required: false, // 显示红点
    // labelWidth: '150px',
    // style: {
    //   width: '320px'
    // },
    formItem_1: {
      fieldId: 'data1',
      defaultValue: null,

      rules: [
        { type: 'date', required: false, message: '请选择日期', trigger: 'change' }
      ],
      placeholder: null
      // style: {
      //   width: '100%'
      // }
    },
    formItem_2: {
      fieldId: 'data2',
      defaultValue: null,

      rules: [
        { type: 'date', required: false, message: '请选择时间', trigger: 'change' }
      ],
      placeholder: null
      // style: {
      //   width: '100%'
      // }
    }
  }
]
