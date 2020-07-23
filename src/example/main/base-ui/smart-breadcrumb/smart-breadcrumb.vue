<template>
  <div class="smart-breadcrumb">

    <b-title-tag name="b-advanced-search 组件"></b-title-tag>
    <code-h
      lang="html"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>
    顶部
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
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

    <h4>BAsiderMenu 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataProps"
    >
    </b-advanced-table>

    <h4>BAsiderMenu 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataSlot"
    >
    </b-advanced-table>

    <h4>BAsiderMenu 的 Event：</h4>
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
