<template>
  <div class="print-table">
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
  </div>
</template>

<script>
// import {
//
// } from './page-config'
import logo from '@/assets/logo.png'
export default {
  name: 'PrintTable',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'PrintTable'
    }
  },
  data: function() {
    return {
      logo
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
