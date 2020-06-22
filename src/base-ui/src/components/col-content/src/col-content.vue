<template>
  <td
    class="col-content col-td"
    :colspan="cols"
    :rowspan="rows"
    :width="width"
  >
    <slot>{{value}}</slot>
  </td>
</template>

<script>
/*
 *@description: table 中的 列  td
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
  name: 'BColContent',
  components: {

  },
  mixins: [],
  props: {
    width: {
      type: String,
      default: null
    },
    value: {
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
.col-content{
  // overflow: hidden;
  // text-overflow: ellipsis;
  // color: #3B5471;
  // padding: 13px;
  // white-space: nowrap;

  height: 30px;
  min-width: 100px;
  max-width: 500px;
}
</style>
