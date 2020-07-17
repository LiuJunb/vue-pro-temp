<template>
  <div class="plugin">
    <br>
    <b-title-tag name="1.安装Vue插件的规范"></b-title-tag>
    <p>项目或者Vue依赖的插件建议统一存放在plugins文件夹下，统一使用index.js导入</p>
    <p>下面以安装 element-ui 为案例：</p>
    <p>
      1.再 plugins 文件夹下新建一个 element-ui.js 文件。使用vue.use安装插件
    </p>

    <code-h
      lang="js"
      content='
      import Vue from "vue"

      import {
        Pagination,
        // Dialog,
        // Autocomplete,
        // Dropdown,
        // DropdownMenu,
        // DropdownItem,
        Menu,
        Submenu,
        MenuItem,
        MenuItemGroup,
        Input,
        // InputNumber,
        Radio,
        RadioGroup,
        // RadioButton,
        Checkbox,
        CheckboxButton,
        CheckboxGroup,
        // Switch,
        Select,
        Option,
        // OptionGroup,
        Button,
        // ButtonGroup,
        Table,
        TableColumn,
        DatePicker,
        TimeSelect,
        TimePicker,
        // Popover,
        Tooltip,
        Breadcrumb,
        BreadcrumbItem,
        Form,
        FormItem,
        // Tabs,
        // TabPane,
        Tag,
        // Tree,
        // Alert,
        // Slider,
        Icon,
        Row,
        Col,
        Upload,
        // Progress,
        // Spinner,
        // Badge,
        // Card,
        // Rate,
        // Steps,
        // Step,
        // Carousel,
        // CarouselItem,
        // Collapse,
        // CollapseItem,
        // Cascader,
        // ColorPicker,
        // Transfer,
        Container,
        Header,
        Aside,
        Main,
        Footer,
        // Timeline,
        // TimelineItem,
        // Link,
        // Divider,
        // Image,
        // Calendar,
        Backtop
      // PageHeader,
      // CascaderPanel,
      // Loading,
      // MessageBox,
      // Message,
      // Notification
      } from "element-ui"
      // 引入自定义主题会导致编译变慢
      import "../styles/theme-chalk.scss"
      Vue.use(Pagination)
      // Vue.use(Dialog)
      // Vue.use(Autocomplete)
      // Vue.use(Dropdown)
      // Vue.use(DropdownMenu)
      // Vue.use(DropdownItem)
      Vue.use(Menu)
      Vue.use(Submenu)
      Vue.use(MenuItem)
      Vue.use(MenuItemGroup)
      Vue.use(Input)
      // Vue.use(InputNumber)
      Vue.use(Radio)
      Vue.use(RadioGroup)
      // Vue.use(RadioButton)
      Vue.use(Checkbox)
      Vue.use(CheckboxButton)
      Vue.use(CheckboxGroup)
      // Vue.use(Switch)
      Vue.use(Select)
      Vue.use(Option)
      // Vue.use(OptionGroup)
      Vue.use(Button)
      // Vue.use(ButtonGroup)
      Vue.use(Table)
      Vue.use(TableColumn)
      Vue.use(DatePicker)
      Vue.use(TimeSelect)
      Vue.use(TimePicker)
      // Vue.use(Popover)
      Vue.use(Tooltip)
      Vue.use(Breadcrumb)
      Vue.use(BreadcrumbItem)
      Vue.use(Form)
      Vue.use(FormItem)
      // Vue.use(Tabs)
      // Vue.use(TabPane)
      Vue.use(Tag)
      // Vue.use(Tree)
      // Vue.use(Alert)
      // Vue.use(Slider)
      Vue.use(Icon)
      Vue.use(Row)
      Vue.use(Col)
      Vue.use(Upload)
      // Vue.use(Progress)
      // Vue.use(Spinner)
      // Vue.use(Badge)
      // Vue.use(Card)
      // Vue.use(Rate)
      // Vue.use(Steps)
      // Vue.use(Step)
      // Vue.use(Carousel)
      // Vue.use(CarouselItem)
      // Vue.use(Collapse)
      // Vue.use(CollapseItem)
      // Vue.use(Cascader)
      // Vue.use(ColorPicker)
      // Vue.use(Transfer)
      Vue.use(Container)
      Vue.use(Header)
      Vue.use(Aside)
      Vue.use(Main)
      Vue.use(Footer)
      // Vue.use(Timeline)
      // Vue.use(TimelineItem)
      // Vue.use(Link)
      // Vue.use(Divider)
      // Vue.use(Image)
      // Vue.use(Calendar)
      Vue.use(Backtop)
      // Vue.use(PageHeader)
      // Vue.use(CascaderPanel)

      // Vue.use(Loading.directive)

      // Vue.prototype.$loading = Loading.service
      // Vue.prototype.$msgbox = MessageBox
      // Vue.prototype.$alert = MessageBox.alert
      // Vue.prototype.$confirm = MessageBox.confirm
      // Vue.prototype.$prompt = MessageBox.prompt
      // Vue.prototype.$notify = Notification
      // Vue.prototype.$message = Message
      // 或者使用下面来注册组件
      // Vue.component(Button.name, Button)
      // Vue.component(Select.name, Select)

    '>
    </code-h>
    <br>
    在该文件配置，用到element-ui的哪个组件，就安装哪个组件。注释的组件代表没有使用到的组件，不需要安装
    <p>
      2.将 element-ui.js 文件在 plugins 文件夹下的 index.js 导入启用
    </p>
    <code-h
      lang="js"
      content='
      import "./element-ui.js"
    '>
    </code-h>
    <p>
      3.然后组件中就可以直接使用 element-ui 提供的组件
    </p>
    <code-h
      lang="html"
      content='
      <template>
        <el-button>element框架中的button组件</el-button>
      </template>
    '>
    </code-h>
    <br>
    <br>
    <b-title-tag name="2.编写Vue插件的规范"></b-title-tag>
    <br>
    <p>下面以编写 vue-bus 插件为案例：</p>
    1.再 plugins 文件夹下新建一个 vue-bus.js 文件。
    <code-h
      lang="js"
      content='
      /**
      * 编写一个vue-bus的插件
      * @param {} Vue
      */
      const install = function(Vue) {
        const Bus = new Vue({
          methods: {
            emit(event, ...args) {
              this.$emit(event, ...args)
            },
            on(evnet, callback) {
              this.$on(evnet, callback)
            },
            off(evnet, callback) {
              this.$on(evnet, callback)
            }
          }
        })
        Vue.prototype.$bus = Bus
      }
      export default install

    '>
    </code-h>
    <p>2.在 vue-bus.js 文件 中编写要给 install 方法, 然后默认导出 install 方法</p>
    <p>3.在 plugins 文件夹下的 index.js 文件安装 vue-bus.js 插件</p>
    <code-h
      lang="js"
      content='
      import Vue from "vue"
      import VueBus from "./vue-bus.js"
      // 添加一个 eventbus 插件
      Vue.use(VueBus)

    '>
    </code-h>
    <p>4.使用 vue-bus.js 插件 </p>
    <code-h
      lang="js"
      content='
      // 发布事件
      this.$bus.emit("handleXxxChange",params)
      // 监听发布的事件
      this.$bus.on("handleXxxChange",(params)=>{ })
    '>
    </code-h>
    <br>

  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'Plugin',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Plugin'
    }
  },
  data: function() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.plugin{
  font-size: 15px;
}
</style>
