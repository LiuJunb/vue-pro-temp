
import {
  AdvancedSearch
} from '@/base-ui/src'
const { SearchType } = AdvancedSearch

export const adForm = [

  {
    ItemType: SearchType.default,
    fieldId: 'username',

    defaultValue: '',
    labelName: '用户名',
    clearable: true,
    // labelWidth: '100px',
    style: {
      width: '100%'
    },
    rules: [
      { required: false, message: '请输入用户名', trigger: 'blur' }
    ],
    placeholder: '请输入用户名'
  },
  {
    ItemType: SearchType.default,
    fieldId: 'password_1',

    defaultValue: '',
    labelName: '请输入密码',
    // labelWidth: '100px',
    style: {
      width: '100%'
    },
    rules: [
      { required: false, message: '请输入密码', trigger: 'blur' }
    ],
    placeholder: '请输入密码'
  },
  {
    ItemType: SearchType.default,
    fieldId: 'password_2',

    defaultValue: '',
    labelName: '确认密码',
    labelWidth: '100px',
    style: {
      width: '300px'
    },
    rules: [
      { required: false, message: '请输入密码', trigger: 'blur' }
    ],
    placeholder: '请输入密码'
  },
  {
    ItemType: SearchType.select,
    fieldId: 'select_1',
    defaultValue: '',
    labelName: '选择城市',
    selectList: [
      {
        label: '广州',
        value: 1
      },
      {
        label: '深圳',
        value: 2
      }
    ],
    style: {
      width: '100%'
    },
    rules: [
      { required: false, message: '请输入密码', trigger: 'blur' }
    ],
    placeholder: '请输入密码'
  },
  {
    ItemType: SearchType.radios,
    fieldId: 'select_2',
    defaultValue: '',
    labelName: '选择性别',
    radioList: [
      {
        label: '男'
      },
      {
        label: '女'
      }
    ],
    labelWidth: '100px',
    style: {
      width: '300px'
    },
    rules: [
      { required: false, message: '请输入密码', trigger: 'blur' }
    ],
    placeholder: '请输入密码'
  },
  {
    ItemType: SearchType.checkboxs,
    fieldId: 'select_3',
    defaultValue: [],
    labelName: '选择爱好',
    checkboxList: [
      {
        label: '游戏'
      },
      {
        label: '跑步'
      },
      {
        label: '听歌'
      }
    ],
    labelWidth: '100px',
    style: {
      width: '300px'
    },
    rules: [
      { required: false, message: '请输入密码', trigger: 'blur' }
    ],
    placeholder: '请输入密码'
  },
  {
    ItemType: SearchType.default,
    fieldId: 'textarea_1',
    defaultValue: '',
    labelName: '请输入内容',

    type: 'textarea',
    maxlength: '30',
    'show-word-limit': true,
    style: {
      width: '100%'
    },
    rules: [
      { required: false, message: '请输入密码', trigger: 'blur' }
    ],
    placeholder: '请输入密码'
  }
]
