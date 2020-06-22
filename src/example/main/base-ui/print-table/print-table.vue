<template>
  <div class="print-table">
    <!--  -->
    <h4>1.新建默认的表格</h4>
    <b-print-table
      width="992px"
    >
      <b-row-item>
        <b-col-head
          name="标题一标题一"
          :style="{fontSize:'14px'}"
          width="100px">
        </b-col-head>
        <b-col-content value="内容一标题一"></b-col-content>
        <b-col-head name="标题一标题一标题一标题一标题一"></b-col-head>
        <b-col-content value="内容一标题一标题一"></b-col-content>
        <b-col-head name="标题一"></b-col-head>
        <b-col-content value="内容一"></b-col-content>
        <b-col-head name="标题一"></b-col-head>
        <b-col-content value="内容一"></b-col-content>
      </b-row-item>
      <b-row-item>
        <b-col-head name="标题一"></b-col-head>
        <b-col-content value="内容一"></b-col-content>
        <b-col-head name="标题一"></b-col-head>
        <b-col-content value="内容一">内容一</b-col-content>
        <b-col-head name="标题一">标题一</b-col-head>
        <b-col-content
          value="内容一"
          :cols="3">
          内容一
        </b-col-content>
      </b-row-item>
    </b-print-table>

    <h4>2.新建表格</h4>
    <b-print-table>
      <b-row-item>
        <b-col-head name="标题一"></b-col-head>
        <b-col-head name="标题一"></b-col-head>
        <b-col-head name="标题一">标题一</b-col-head>
      </b-row-item>
      <b-row-item>
        <b-col-content value="内容一"></b-col-content>
        <b-col-content value="内容一">内容一</b-col-content>
        <b-col-content value="内容一">内容一</b-col-content>
      </b-row-item>
    </b-print-table>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
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
