
import {
  AdvancedSearch
} from '@/base-ui/src'
const { SearchType } = AdvancedSearch
export const adSearchConfig = [
  {
    type: SearchType.custom,
    customSlot: 'custom1',
    fieldId: 'custom1',
    defaultValue: undefined,
    labelName: '名称1',

    rules: [
      { required: false, message: '请输入自定义名称', trigger: 'blur' }
    ],
    placeholder: null
  },

  {
    type: SearchType.selectAndInput,
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
      placeholder: null
      // style: {
      //   width: '100%'
      // }
    }
  },
  {
    type: SearchType.default,
    fieldId: 'user',

    defaultValue: undefined,
    labelName: '活动1',

    rules: [
      { required: false, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    placeholder: null
  },
  {
    type: SearchType.select,
    fieldId: 'region',
    defaultValue: null,
    labelName: '活动区域2',

    rules: [
      { required: false, message: '请选择活动区域', trigger: 'change' }
    ],
    placeholder: null,
    style: {
      width: '100%'
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
    type: SearchType.selectDataAndTime,
    labelName: '活动时间3',
    required: false, // 显示红点
    formItem_1: {
      fieldId: 'data1',
      defaultValue: null,

      rules: [
        { type: 'date', required: false, message: '请选择日期', trigger: 'change' }
      ],
      placeholder: null,
      style: {
        width: '100%'
      }
    },
    formItem_2: {
      fieldId: 'data2',
      defaultValue: null,

      rules: [
        { type: 'date', required: false, message: '请选择时间', trigger: 'change' }
      ],
      placeholder: null,
      style: {
        width: '100%'
      }
    }
  }
]
