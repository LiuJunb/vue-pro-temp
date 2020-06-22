import Button from './components/button'
import AsiderMenu from './components/aside-menu'
import AdvancedSearch from './components/advanced-search'
import ButtonGroup from './components/button-group'
import AdvancedTable from './components/advanced-table'
import StatusText from './components/status-text'
import TagGroup from './components/tag-group'
import SmartBreadcrumb from './components/smart-breadcrumb'
import DividerLine from './components/divider-line'
import Logo from './components/logo'
import TitleTag from './components/title-tag'
import GridView from './components/grid-view'
import IconGroup from './components/icon-group'
import PrintTable from './components/print-table'
import RowItem from './components/row-item'
import ColHead from './components/col-head'
import ColContent from './components/col-content'
import AdvancedInput from './components/advanced-input'
// import Icon from './components/icon'
// import ButtonGroups from './components/button-groups'

// import { ButtonGroups } from '@/BaseUI/src'  // 局部导入组件
export {
  // Icon,
  Button,
  AsiderMenu,
  AdvancedSearch,
  ButtonGroup,
  AdvancedTable,
  StatusText,
  TagGroup,
  SmartBreadcrumb,
  DividerLine,
  Logo,
  TitleTag,
  GridView,
  IconGroup,
  PrintTable,
  RowItem,
  ColHead,
  ColContent,
  AdvancedInput
  // ButtonGroups
}

// import BaseUI from 'BaseUI';
// BaseUI.ButtonGroups 1.局部导入组件
// const { ButtonGroups } = BaseUI  // 2.局部导入组件（解构也可以获取）
const BaseUI = {
  // Icon,
  Button,
  AsiderMenu,
  AdvancedSearch,
  ButtonGroup,
  AdvancedTable,
  StatusText,
  TagGroup,
  SmartBreadcrumb,
  DividerLine,
  Logo,
  TitleTag,
  GridView,
  IconGroup,
  PrintTable,
  RowItem,
  ColHead,
  ColContent,
  AdvancedInput
  // ButtonGroups
}

// 需要被全局注册的组件
export const components = [
  // Icon,
  Button,
  AsiderMenu,
  AdvancedSearch,
  ButtonGroup,
  AdvancedTable,
  StatusText,
  TagGroup,
  SmartBreadcrumb,
  DividerLine,
  Logo,
  TitleTag,
  GridView,
  IconGroup,
  PrintTable,
  RowItem,
  ColHead,
  ColContent,
  AdvancedInput
  // ButtonGroups
]

BaseUI.install = function(Vue, options = {}) {
  // install all the comps
  components.forEach(component => {
    // BButton
    if (component.name) {
      // 1.注册全局组件
      Vue.component(component.name, component)
    }
  })
  // 2.
  // Vue.prototype.$alert = MessageBox.alert
}
export default BaseUI
