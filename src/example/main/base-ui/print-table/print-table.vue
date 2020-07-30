<template>
  <div class="print-table">

    <b-title-tag name="b-advanced-search 组件"></b-title-tag>
    <h4>1.基本使用</h4>
    <code-h
      lang="html"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>
    <code-h
      lang="js"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>

    <h4>1.基本使用</h4>
    <code-h
      lang="html"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>
    <code-h
      lang="js"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>

    <h4>1.基本使用</h4>
    <code-h
      lang="html"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>
    <code-h
      lang="js"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>

    <h4>1.基本使用</h4>
    <code-h
      lang="html"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>
    <code-h
      lang="js"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>

    <!--  -->
    <h4>1.新建默认的表格,固定宽(共8列)</h4>
    <b-print-table
      width="992px"
    >
      <!-- 第一行 -->
      <b-row-item>
        <b-col-head
          :style="{fontSize:'14px'}"
          width="100px">
          标题一标题一
        </b-col-head>
        <b-col-content >内容一标题一</b-col-content>
        <b-col-head >标题一标题一标题一标题一标题一</b-col-head>
        <b-col-content >内容一标题一标题一</b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content >内容一</b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content>
          内容一
        </b-col-content>
      </b-row-item>
      <!-- 第二行 -->
      <b-row-item>
        <b-col-head >标题一</b-col-head>
        <b-col-content >
          长文本DVD是撒旦法撒旦法撒旦撒旦长文本DVD是撒旦法撒旦法撒旦撒旦长文本DVD是撒旦法撒旦法撒旦撒旦
        </b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content >内容一</b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content
          :cols="3">
          内容一3
        </b-col-content>
      </b-row-item>
    </b-print-table>

    <h4>2.新建表格，默认固定960px宽(共3列)</h4>
    <b-print-table>
      <!-- 第一行 -->
      <b-row-item>
        <b-col-head >标题一</b-col-head>
        <b-col-head >标题一</b-col-head>
        <b-col-head >标题一</b-col-head>
      </b-row-item>
      <!-- 第二行 -->
      <b-row-item>
        <b-col-content >内容一</b-col-content>
        <b-col-content >
          <img
          :src="logo"
          alt="">
          <br>
          内容
        </b-col-content>
        <b-col-content >内容一</b-col-content>
      </b-row-item>
    </b-print-table>

    <h4>3.新建表格，100%宽(共8列)</h4>
    <b-print-table
      width="100%"
    >
      <!-- 第一行 -->
      <b-row-item>
        <b-col-head
          :style="{fontSize:'14px'}"
          width="150px">
          标题一标题一
        </b-col-head>
        <b-col-content >内容一标题一</b-col-content>
        <b-col-head >标题一标题一标题一标题一标题一</b-col-head>
        <b-col-content>内容一标题一标题一</b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content >内容一</b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content>
          内容一
        </b-col-content>
      </b-row-item>
      <!-- 第二行 -->
      <b-row-item>
        <b-col-head :rows="2">标题一</b-col-head>
        <b-col-content >
          长文本DVD是撒旦法撒旦法撒旦撒旦长文本DVD是撒旦法撒旦法撒旦撒旦长文本DVD是撒旦法撒旦法撒旦撒旦
          长文本DVD是撒旦法撒旦法撒旦撒旦长文本DVD是撒旦法撒旦法撒旦撒旦长文本DVD是撒旦法撒旦法撒旦撒旦
        </b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content >内容一</b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content
          :cols="3">
          内容一3
        </b-col-content>
      </b-row-item>
      <!-- 第三行 -->
      <b-row-item>
        <b-col-content
          :cols="5">
          内容一3
        </b-col-content>
        <b-col-head
          :cols='2'>
          标题一
        </b-col-head>

      </b-row-item>
    </b-print-table>

    <h4>BPrintTable 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataProps"
    >
    </b-advanced-table>

    <h4>BPrintTable 的 Slot：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 900px"
      :tabColumn="tabColumnSlot"
      :tabData="tabDataSlot"
    >
    </b-advanced-table>

    <h4>BPrintTable 的 Event：</h4>
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
import logo from '@/assets/logo.png'
export default {
  name: 'PrintTable',
  components: {

  },
  mixins: [TableColumnMixin],
  props: {
    msg: {
      type: String,
      default: 'PrintTable'
    }
  },
  data: function() {
    return {
      logo,
      tabDataProps: [
        {
          attr: 'width',
          des: '表格的宽',
          type: 'String',
          select: ' ',
          default: '960px'
          // func:''
        },
        {
          attr: 'border',
          des: '边框大小',
          type: 'String',
          select: ' ',
          default: '1'
          // func:''
        },
        {
          attr: 'cellpadding',
          des: '规定单元边沿与其内容之间的空白',
          type: 'String',
          select: ' ',
          default: '6'
          // func:''
        }
      ],
      tabDataSlot: [
        {
          name: 'default',
          des: '自定义内容'
        }
      ],
      tabDataEvent: [
        // {
        //   name: 'handleClickCurrentMenu',
        //   des: '监听重复点击当前的菜单',
        //   func: 'func( menu )'
        // }
      ]

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
.print-table{

}
</style>
