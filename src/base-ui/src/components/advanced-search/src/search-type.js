const SearchType = {
  default: 1,
  select: 2,
  selectDataAndTime: 3
}
/**
 *
formItems:
[
  {
    fieldId: 'user',
    defaultValue: '',

    labelName: '',
    rules: [
      {
        required: false,
        message: '请选择日期'
      }
    ],
    placeholder: null
  }
]

{
  user: '',
  region: ''
}
 */
const getFormFieldIds = (formItems) => {
  const val = {}
  if (formItems && formItems.length > 0) {
    formItems.forEach((element) => {
      if (element.formItem_1) {
        for (let i = 1; i < 6; i++) {
          if (element['formItem_' + i]) {
            const item = element['formItem_' + i]
            const k = item.fieldId
            const v = item.defaultValue
            val[k] = v
          }
        }
      } else {
        const k = element.fieldId
        const v = element.defaultValue
        val[k] = v
      }
    })
  }
  console.log('val_1=', val)
  return val
}

const getFormRules = (formItems) => {
  const val = {}
  if (formItems && formItems.length > 0) {
    formItems.forEach((element) => {
      if (element.formItem_1) {
        for (let i = 1; i < 6; i++) {
          if (element['formItem_' + i]) {
            const item = element['formItem_' + i]
            const k = item.fieldId
            const v = item.rules
            val[k] = v
          }
        }
      } else {
        const k = element.fieldId
        const v = element.rules
        val[k] = v
      }
    })
  }
  console.log('val_2=', val)
  return val
}

export {
  SearchType,
  getFormFieldIds,
  getFormRules
}
