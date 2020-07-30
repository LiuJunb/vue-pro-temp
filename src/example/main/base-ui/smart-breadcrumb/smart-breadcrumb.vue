<template>
  <div class="smart-breadcrumb">
    <b-title-tag name="b-smart-breadcrumb 组件"></b-title-tag>
    <h4>1.基本使用</h4>
    <b-smart-breadcrumb
      :menuList="menuList"
      :otherList="otherList">
    </b-smart-breadcrumb>
    <code-h
      lang="html"
      content='
      <b-smart-breadcrumb
        :menuList="menuList"
        :otherList="otherList">
      </b-smart-breadcrumb>
    '></code-h>
    <code-h
      lang="js"
      content="
      menuList = [
        {
          icon: 'el-icon-location',
          id: 1,
          level: 1,
          name: 'Vue项目架构介绍',
          type: 'dir',
          url: '/main',
          children: [
            {
              icon: 'el-icon-setting',
              id: 11,
              level: 2,
              name: '简介',
              type: 'menu',
              url: '/main/introduce',
              children: []
            },
            {
              icon: 'el-icon-setting',
              id: 12,
              level: 2,
              name: '代码规范',
              type: 'menu',
              url: '/main/code-specification',
              children: [
              ]
            }
          ]
        }
      ]

      otherList = [
      {

        parentUrl: '/main/smart-breadcrumb',
        url: '/main/smart-breadcrumb/detail',
        name: '详情',

        children: [
        ]
      }
    ]
      "></code-h>

    <!--
    顶部
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>

    <router-link to="/main/smart-breadcrumb/detail">Go to Bar</router-link>
    <el-button
     type="primary"
     @click="goToDetail()"
    >
      goToDetail
    </el-button>
    -->

    <h4>BSmartBreadcrumb 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataProps"
    >
    </b-advanced-table>

    <h4>BSmartBreadcrumb 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataSlot"
    >
    </b-advanced-table>

    <h4>BSmartBreadcrumb 的 Event：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnEvent"
      :tabData="tabDataEvent"
    >
    </b-advanced-table>

  </div>
</template>

<script>
// import {
//
// } from './page-config'
import {
  TableColumnMixin
} from '@/mixins/index.js'
import {
  menuList
} from '@/utils/asider-menu.js'
import {
  otherList
} from '@/config/index.js'
export default {
  name: 'SmartBreadcrumb',
  components: {

  },
  mixins: [TableColumnMixin],
  props: {
    msg: {
      type: String,
      default: 'SmartBreadcrumb'
    }
  },
  data: function() {
    return {
      menuList,
      otherList,
      tabDataProps: [
        {
          attr: 'menuList',
          des: '菜单列表',
          type: 'Array',
          select: ' ',
          default: ' '
          // func:''
        }
      ],
      tabDataSlot: [
        {
          name: 'menu-btn',
          des: '自定义折叠按钮'
        }
      ],
      tabDataEvent: [
        {
          name: 'handleClickCurrentMenu',
          des: '监听重复点击当前的菜单',
          func: 'func( menu )'
        }
      ]

    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    console.log('create smb')
    console.log(window.history)
    console.log(window.history.pushState)
  },
  mounted() {

  },
  methods: {
    goToDetail() {
      console.log(window.history.state.key)
      this.$router.push('/main/smart-breadcrumb/detail')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.smart-breadcrumb{

}
</style>
