import {
  AdvancedInput
} from '@/base-ui/src'
const { InputType } = AdvancedInput
const formItem3 = [
  {
    ItemType: InputType.default,
    fieldId: 'cus-des',
    defaultValue: undefined,
    labelName: 'input-des',

    type: 'textarea',
    autosize: { minRows: 3, maxRows: 5 },
    rules: [
      { required: false, message: '请输入活动名称', trigger: 'blur' }
    ],
    placeholder: null
    // todo ...  其它的属性查找 element input 组件熟悉
  },
  {
    ItemType: InputType.select,
    fieldId: 'cus-tag',
    defaultValue: undefined,
    labelName: 'input-tags',

    clearable: true,
    multiple: true,
    filterable: true,
    allowCreate: true,
    defaultFirstOption: true,

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
      { required: false, message: '性别', trigger: 'blur' }
    ],
    placeholder: null
    // todo ...  其它的属性查找 element select 组件熟悉
  }
]

export {
  formItem3
}

