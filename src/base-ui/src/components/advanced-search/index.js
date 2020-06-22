import AdvancedSearch from './src/advanced-search.vue'
// import {
//   SearchType
// } from './src/search-type'
// AdvancedSearch.SearchType = SearchType

import {
  InputType,
  getFormFieldIds,
  getFormRules
} from '../../utils/input-type'
AdvancedSearch.SearchType = InputType
AdvancedSearch.getFormFieldIds = getFormFieldIds
AdvancedSearch.getFormRules = getFormRules

export default AdvancedSearch
