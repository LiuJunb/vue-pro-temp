<template>
  <div class="print-table">

    <b-title-tag name="b-print-table 组件"></b-title-tag>
    <h4>1.基本使用</h4>
    <b-print-table
      width="992px"
    >

      <!-- 第一行（第一行有4列，注意 注意 每一行的列数要保持一样） -->
      <b-row-item>
        <b-col-head
          :style="{fontSize:'14px'}"
          width="100px">
          标题一标题一
        </b-col-head>
        <b-col-content >内容一</b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content >内容一</b-col-content>
      </b-row-item>

      <!-- 第二行（第二行有4列，注意 注意 每一行的列数要保持一样） -->
      <b-row-item>
        <b-col-head >标题一</b-col-head>
        <b-col-content >
          撒旦撒旦
        </b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content >内容一</b-col-content>
      </b-row-item>

    </b-print-table>

    <code-h
      lang="html"
      content='
    <b-print-table
      width="992px"
    >

      <!-- 第一行（第一行有4列，注意 注意 每一行的列数要保持一样） -->
      <b-row-item>
        <b-col-head
          :style="{fontSize:"14px"}"
          width="100px">
          标题一标题一
        </b-col-head>
        <b-col-content >内容一</b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content >内容一</b-col-content>
      </b-row-item>

      <!-- 第二行（第二行有4列，注意 注意 每一行的列数要保持一样） -->
      <b-row-item>
        <b-col-head >标题一</b-col-head>
        <b-col-content >
          撒旦撒旦
        </b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content >内容一</b-col-content>
      </b-row-item>

    </b-print-table>
    '></code-h>

    <h4>2.跨列的使用</h4>
    <b-print-table
      width="992px"
    >

      <!-- 第一行（第一行有4列，注意每一行的列数要保持一样） -->
      <b-row-item>
        <b-col-head >
          标题一标题一
        </b-col-head>
        <b-col-content >内容一</b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content >内容一</b-col-content>
      </b-row-item>

      <!-- 第二行 -->
      <b-row-item>
        <b-col-head >标题一</b-col-head>
        <!-- 第一行共有 4 列， 那么第二行也必须要有4列（标题一列，内容3列） -->
        <b-col-content :cols='3'>撒旦撒旦</b-col-content>
      </b-row-item>

    </b-print-table>

    <code-h
      lang="html"
      content='
    <b-print-table
      width="992px"
    >

      <!-- 第一行（第一行有4列，注意每一行的列数要保持一样） -->
      <b-row-item>
        <b-col-head >标题一标题一</b-col-head>
        <b-col-content >内容一</b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content >内容一</b-col-content>
      </b-row-item>

      <!-- 第二行 -->
      <b-row-item>
        <b-col-head >标题一</b-col-head>
        <!-- 第一行共有 4 列， 那么第二行也必须要有4列（标题1列，内容3列） -->
        <b-col-content :cols="3">撒旦撒旦</b-col-content>
      </b-row-item>

    </b-print-table>
    '></code-h>

    <h4>3.跨行的使用</h4>
    <b-print-table
      width="100%"
    >
      <!-- 第一行（表格每一行：6列） -->
      <b-row-item>
        <b-col-head >标题一标题一</b-col-head>
        <b-col-content >内容一标题一</b-col-content>

        <b-col-head >标题一</b-col-head>
        <b-col-content >内容一</b-col-content>

        <b-col-head >标题一</b-col-head>
        <b-col-content>内容一</b-col-content>
      </b-row-item>
      <!-- 第二行（表格每一行：6列） -->
      <b-row-item>
        <!-- 标题占两行 -->
        <b-col-head :rows="2">标题一 2行</b-col-head>
        <b-col-content >
          长文本DVD是撒旦法撒旦法撒旦撒旦长文本DVD是撒旦法撒旦法撒旦撒旦长文本DVD是撒旦法撒旦法撒旦撒旦
          长文本DVD是撒旦法撒旦
        </b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content :cols="3">内容一3列</b-col-content>
      </b-row-item>
      <!-- 第三行（表格每一行：6列） -->
      <b-row-item>
        <b-col-content :cols="5">内容一 5列</b-col-content>
      </b-row-item>
    </b-print-table>

    <code-h
      lang="html"
      content='
    <b-print-table
      width="100%"
    >
      <!-- 第一行（表格每一行：6列） -->
      <b-row-item>
        <b-col-head >标题一标题一</b-col-head>
        <b-col-content >内容一标题一</b-col-content>

        <b-col-head >标题一</b-col-head>
        <b-col-content >内容一</b-col-content>

        <b-col-head >标题一</b-col-head>
        <b-col-content>内容一</b-col-content>
      </b-row-item>
      <!-- 第二行（表格每一行：6列） -->
      <b-row-item>
        <!-- 标题占两行 -->
        <b-col-head :rows="2">标题一 2行</b-col-head>
        <b-col-content >
          长文本DVD是撒旦法撒旦法撒旦撒旦长文本DVD是撒旦法撒旦法撒旦撒旦长文本DVD是撒旦法撒旦法撒旦撒旦
          长文本DVD是撒旦法撒旦
        </b-col-content>
        <b-col-head >标题一</b-col-head>
        <b-col-content :cols="3">内容一3列</b-col-content>
      </b-row-item>
      <!-- 第三行（表格每一行：6列） -->
      <b-row-item>
        <b-col-content :cols="5">内容一 5列</b-col-content>
      </b-row-item>
    </b-print-table>
    '></code-h>

    <h4>4.标题放一行</h4>
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
          内容一
        </b-col-content>
        <b-col-content >内容一</b-col-content>
      </b-row-item>
    </b-print-table>

    <code-h
      lang="html"
      content='
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
          内容一
        </b-col-content>
        <b-col-content >内容一</b-col-content>
      </b-row-item>
    </b-print-table>
    '></code-h>

    <h4>5.指定列的宽</h4>
    <b-print-table
      width="992px"
    >

      <!-- 第一行 -->
      <b-row-item>
        <!-- 指定该列的宽为 100px, 字体大小14px -->
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

    <code-h
      lang="html"
      content='
    <b-print-table
      width="992px"
    >
      <!-- 第一行 -->
      <b-row-item>
        <!-- 指定该列的宽为 100px, 字体大小14px -->
        <b-col-head
          :style="{fontSize:"14px"}"
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

    '></code-h>

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

    <h4>BPrintTable，BRowItem，BColHead，和BColContent 的 Slot：</h4>
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

    <h4>BRowItem 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataBRowItemProps"
    >
    </b-advanced-table>

    <h4>BColHead 和 BColContent 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataBColHeadProps"
    >
    </b-advanced-table>

    <!-- <h4>BColContent 的 Props：</h4>
    <b-advanced-table
      stripe
      :border="true"
      :hasPagination="false"
      style="width: 100%"
      :tabColumn="tabColumnProps"
      :tabData="tabDataBColContentProps"
    >
    </b-advanced-table> -->

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
      ],
      tabDataBRowItemProps: [
        {
          attr: 'width',
          des: '宽',
          type: 'String',
          select: ' ',
          default: 'null'
          // func:''
        },
        {
          attr: 'border',
          des: '边框',
          type: 'String',
          select: ' ',
          default: ''
          // func:''
        }
      ],
      tabDataBColHeadProps: [
        {
          attr: 'width',
          des: '宽',
          type: 'String',
          select: ' ',
          default: 'null'
          // func:''
        },
        {
          attr: 'name',
          des: '标题名称',
          type: 'String',
          select: ' ',
          default: 'null'
          // func:''
        },
        {
          attr: 'cols',
          des: '占据的列数',
          type: 'Number',
          select: ' ',
          default: 'null'
          // func:''
        },
        {
          attr: 'rows',
          des: '占据的行数',
          type: 'Number',
          select: ' ',
          default: 'null'
          // func:''
        }
      ],
      tabDataBColContentProps: [
        {
          attr: 'cellpadding',
          des: '规定单元边沿与其内容之间的空白',
          type: 'String',
          select: ' ',
          default: '6'
          // func:''
        }
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
