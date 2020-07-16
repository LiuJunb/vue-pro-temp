<template>
  <div class="code-specification">
    <b-title-tag name="1.命名规范"></b-title-tag>
    <br>
    <code-h
      lang="js"
      content='
      1.项目中的文件夹、文件统一使用小写命名。
        如果有多个单词则使用（-）中划线来连接。建议命名不要超过3个单词
        // 推荐（文件夹、文件）命名
        button  button-group
        button.vue button-group.vue findpro-modal.vue
        asider-menu.js
        theme-chalk.scss
        // 不推荐（文件夹、文件）命名
        Button ButtonGroup
        Button.vue ButtonGroup.vue find-process-modal.vue
        AsiderMenu.js
        asiderMenu.js
        asider_menu.js
        ThemeChalk.scss
        themeChalk.scss

      2.组件名称的命名使用单词首字母大写。
        如果有多个单词也是每个单词首字母大写。建议命名不要超过3个单词

        Button ButtonGroup FindProModal
      3.新建的组件放到一个目录里面
        例如：
        button
          button.vue
    '>
    </code-h>

    <br>
    <b-title-tag name="2.模块定义规范"></b-title-tag>
    <br>
    <code-h
      lang="js"
      content='
      1.basic-comps 独立组件模块，该模块编写的独立组件，该模块的组件之前不能互相引用,
        并且编写的组件统一在index.js中导出
        basic-comps
          button
            button.vue
          index.js // 统一导出组件

      2.components 非独立组件模块，该模块编写非独立的组件（组合组件和业务组件）。
        1）该模块的组件之前能互相引用，引用时直接指定要引用的单个组件
          import Icon from "./icon/icon.vue" // 正确
          import { Icon } from "@/components/index.js" // 错误

        2）该模块的组件可以引用basic-comps模块的组件，反过来则不行

      2.config 配置模块，该模块提供 index.js 统一导出所有的配置
        config
          config.mock.js // mock环境的配置
          config.dev.js // 开发环境的配置
          config.pro.js // 测试环境的配置
          config.real.js // 正式部署环境的配置
          // 上面四个配置默认情况下定义的属性是一样的，只是属性的值不一样
          index.js 统一导出所有的配置

      3.enum 枚举 推荐的定义方式
        export const Sex = {
          Man: {
            value: "男",
            label: "男",
            color: BaseStyle.$themeColor,
            id: ""
          },
          Woman: {
            value: "女",
            label: "女",
            color: BaseStyle.$successColor,
            id: ""
          }
        }

      4.mixins 混合模块，该模块提供 index.js 统一导出所有的混合
        1)如果一个组件使用到多个混合时，注意多个混合之间的属性相同的情况
         例如：
          button
            button.vue // 引入了A-mixin.js 和 B-mixin.js, 注意这两个混合之间是否有重复的属性，重复属性会出现覆盖的问题
        2）建议每个混合中的属性都添加 前缀

      5.router,service 和 views 模块
        使用自动加载,这三个模块的目录结构推荐是基本一样

      6.xx 模块

    '>
    </code-h>

    <br>
    <b-title-tag name="3.组件编写规范"></b-title-tag>
    <br>
    <code-h
      lang="js"
      content='
      1.组件模板的规范

      2.组件名的规范

      3.组件属性的规范

      4.组件生命周期和属性顺序的规范

    '>
    </code-h>

    <br>
    <b-title-tag name="1.命名规范"></b-title-tag>
    <br>
    <code-h
      lang="js"
      content='
      1.项目中的文件夹、文件统一使用小写命名。
        如果有多个单词则使用（-）中划线来连接。建议命名不要超过3个单词
      2.组件名称的命名使用单词首字母大写。
        如果有多个单词也是每个单词首字母大写。建议命名不要超过3个单词
      3.
    '>
    </code-h>

    <br>
    <b-title-tag name="1.命名规范"></b-title-tag>
    <br>
    <code-h
      lang="js"
      content='
      1.项目中的文件夹、文件统一使用小写命名。
        如果有多个单词则使用（-）中划线来连接。建议命名不要超过3个单词
      2.组件名称的命名使用单词首字母大写。
        如果有多个单词也是每个单词首字母大写。建议命名不要超过3个单词
      3.
    '>
    </code-h>

    <br>
    <b-title-tag name="1.命名规范"></b-title-tag>
    <br>
    <code-h
      lang="js"
      content='
      1.项目中的文件夹、文件统一使用小写命名。
        如果有多个单词则使用（-）中划线来连接。建议命名不要超过3个单词
      2.组件名称的命名使用单词首字母大写。
        如果有多个单词也是每个单词首字母大写。建议命名不要超过3个单词
      3.
    '>
    </code-h>

    <br>
    <b-title-tag name="1.命名规范"></b-title-tag>
    <br>
    <code-h
      lang="js"
      content='
      1.项目中的文件夹、文件统一使用小写命名。
        如果有多个单词则使用（-）中划线来连接。建议命名不要超过3个单词
      2.组件名称的命名使用单词首字母大写。
        如果有多个单词也是每个单词首字母大写。建议命名不要超过3个单词
      3.
    '>
    </code-h>

    <br>
    <b-title-tag name="1.命名规范"></b-title-tag>
    <br>
    <code-h
      lang="js"
      content='
      1.项目中的文件夹、文件统一使用小写命名。
        如果有多个单词则使用（-）中划线来连接。建议命名不要超过3个单词
      2.组件名称的命名使用单词首字母大写。
        如果有多个单词也是每个单词首字母大写。建议命名不要超过3个单词
      3.
    '>
    </code-h>

    <br>
    <b-title-tag name="1.命名规范"></b-title-tag>
    <br>
    <code-h
      lang="js"
      content='
      1.项目中的文件夹、文件统一使用小写命名。
        如果有多个单词则使用（-）中划线来连接。建议命名不要超过3个单词
      2.组件名称的命名使用单词首字母大写。
        如果有多个单词也是每个单词首字母大写。建议命名不要超过3个单词
      3.
    '>
    </code-h>

    <br>
    <b-title-tag name="1.命名规范"></b-title-tag>
    <br>
    <code-h
      lang="js"
      content='
      1.项目中的文件夹、文件统一使用小写命名。
        如果有多个单词则使用（-）中划线来连接。建议命名不要超过3个单词
      2.组件名称的命名使用单词首字母大写。
        如果有多个单词也是每个单词首字母大写。建议命名不要超过3个单词
      3.
    '>
    </code-h>

    <br>
    <b-title-tag name="1.命名规范"></b-title-tag>
    <br>
    <code-h
      lang="js"
      content='
      1.项目中的文件夹、文件统一使用小写命名。
        如果有多个单词则使用（-）中划线来连接。建议命名不要超过3个单词
      2.组件名称的命名使用单词首字母大写。
        如果有多个单词也是每个单词首字母大写。建议命名不要超过3个单词
      3.
    '>
    </code-h>
  </div>
</template>

<script>
export default {
  name: 'CodeSpecification',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'CodeSpecification'
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
.code-specification{
  font-size: 15px;
}
</style>
