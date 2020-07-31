import {
  AdvancedInput
} from '@/base-ui/src'
const { InputType } = AdvancedInput
const form1Item = [
  {
    ItemType: InputType.default,
    fieldId: 'u1',
    defaultValue: undefined,
    labelName: '活动1',

    rules: [
      { required: true, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    placeholder: null
  },
  {
    ItemType: InputType.default,
    fieldId: 'n1',
    defaultValue: undefined,
    labelName: '用户名',

    rules: [
      { required: true, message: '用户名', trigger: 'blur' }
    ],
    placeholder: null
  },
  {
    ItemType: InputType.select,
    fieldId: 's1',
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
    placeholder: null
  }
]
export {
  form1Item
}
