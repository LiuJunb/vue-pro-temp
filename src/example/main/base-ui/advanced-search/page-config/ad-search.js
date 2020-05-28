
import {
  AdvancedSearch
} from '@/base-ui/src'
const { SearchType } = AdvancedSearch
export const adSearchConfig = [
  {
    type: SearchType.default,
    fieldId: 'user',

    defaultValue: undefined,
    labelName: '活动1',

    rules: [
      { required: true, message: '请输入活动名称', trigger: 'blur' },
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
      { required: true, message: '请选择活动区域', trigger: 'change' }
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
    required: true, // 显示红点
    formItem_1: {
      fieldId: 'data1',
      defaultValue: null,

      rules: [
        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
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
        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
      ],
      placeholder: null,
      style: {
        width: '100%'
      }
    }
  }
]
