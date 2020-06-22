import AdvancedInput from './src/advanced-input.vue'
import {
  InputType,
  getFormFieldIds,
  getFormRules
} from '../../utils/input-type'
AdvancedInput.InputType = InputType
AdvancedInput.getFormFieldIds = getFormFieldIds
AdvancedInput.getFormRules = getFormRules
export default AdvancedInput
