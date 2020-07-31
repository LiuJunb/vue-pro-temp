import {
  AdvancedInput
} from '@/base-ui/src'
const { InputType } = AdvancedInput
const colWidth = '360px'
const form3Item = [
  {
    ItemType: InputType.default,
    fieldId: 'u3',
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
    fieldId: 'n3',
    type: 'textarea',
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
    ItemType: InputType.custom,
    customSlot: 'custom3', // 插槽名称
    fieldId: 'custom3',

    defaultValue: undefined,
    labelName: '自定义item',
    min: 1,
    max: 10,
    // labelWidth: '130px',
    style: {
      width: colWidth
    },
    controlsPosition: 'right',
    rules: [
      { required: false, message: '请输入自定义名称', trigger: 'blur' }
    ],
    placeholder: '请输入内容'
  }

]
export {
  form3Item
}
