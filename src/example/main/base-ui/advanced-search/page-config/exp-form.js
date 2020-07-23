
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
    clearable: false,
    placeholder: null,
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
export const expFormItems6 = [
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
export const expFormItems7 = [
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
export const expFormItems8 = [
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
export const expFormItems9 = [
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
export const expFormItems10 = [
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
