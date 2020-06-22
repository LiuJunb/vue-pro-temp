import {
  AdvancedInput
} from '@/base-ui/src'
const { InputType } = AdvancedInput
const formItem2 = [
  {
    ItemType: InputType.default,
    fieldId: 'user2',
    defaultValue: undefined,
    labelName: '活动2',

    rules: [
      { required: true, message: '请输入活动名称', trigger: 'blur' }
    ],
    placeholder: null
  }
]

export {
  formItem2
}

