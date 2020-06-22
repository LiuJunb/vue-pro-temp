<template>
  <th
    class="col-head col-th"
    :colspan="cols"
    :rowspan="rows"
    :width="width"
  >
    <slot>{{name}}</slot>
  </th>
</template>

<script>
/*
 *@description: table 中的 列 th
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-06-22 10:25:25
 *@version V0.1.0
 *@API:
 *@ 参数
 *
 *@ 事件
 *
*/
export default {
  name: 'BColHead',
  components: {

  },
  mixins: [],
  props: {
    width: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    cols: {
      type: Number,
      default: null
    },
    rows: {
      type: Number,
      default: null
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
.col-head{
  // overflow: hidden;
  // text-overflow: ellipsis;
  // color: #3B5471;
  // padding: 13px;
  // white-space: nowrap;
  height: 30px;
  min-width: 60px;
  .col-th{
    // overflow: hidden;
    // text-overflow: ellipsis;
    // text-align: center;
    // word-break: break-all;
  }
}
</style>
