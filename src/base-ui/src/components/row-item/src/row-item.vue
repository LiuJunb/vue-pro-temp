<template>
  <tr
    class="row-item"
    :style="{border:border}">
    <slot></slot>
  </tr>
</template>

<script>
/*
 *@description: table 中的 tr 组件
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-06-22 10:25:01
 *@version V0.1.0
 *@API:
 *@ 参数
 *
 *@ 事件
 *
*/
export default {
  name: 'BRowItem',
  components: {

  },
  mixins: [],
  props: {
    width: {
      type: String,
      default: null
    },
    border: {
      type: String,
      default: ''
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
.row-item{
  // border: 1px solid #EAEBEF;
}
</style>
