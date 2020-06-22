<template>
  <table
    class="print-table"
    :border="border"
    :width="width"
    :cellpadding="cellpadding">
    <slot></slot>
  </table>
</template>

<script>
/*
 *@description: table组件
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-06-22 10:24:52
 *@version V0.1.0
 *@API:
 *@ 参数
 *
 *@ 事件
 *
*/
export default {
  name: 'BPrintTable',
  components: {

  },
  mixins: [],
  props: {
    width: {
      type: String,
      default: '960px'
    },
    border: {
      type: String,
      default: '1'
    },
    cellpadding: {
      type: String,
      default: '6'
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
  font-size:14px;
  color: #3B5471;
  text-align: left;;

  border-collapse: collapse;
  border: none;

}
</style>
