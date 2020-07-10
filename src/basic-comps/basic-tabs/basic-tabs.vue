<template>
  <el-tabs
    v-model="activeName"
    class="basic-tabs"
    :type="type"
    @tab-click="handleClick">
    <slot :activeName="activeName">
      <el-tab-pane
        label="用户管理"
        name="first">
        用户管理
      </el-tab-pane>
      <el-tab-pane
        label="配置管理"
        name="second">
        配置管理
      </el-tab-pane>
    </slot>
  </el-tabs>
</template>

<script>
/*
 *@description: 基础的tabs 标签页
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-06-30 11:36:19
 *@version V0.1.0
 *@API:
 *@ 参数
 *
 *@ 事件
 *  this.$emit('handleClick', { tab, event, activeName })
*/
export default {
  name: 'BasicTabs',
  components: {

  },
  mixins: [],
  props: {
    type: {
      type: String,
      default: 'card'
    },
    defaultActiveName: {
      type: String,
      default: 'first'
    }
  },
  data: function() {
    return {
      activeName: this.defaultActiveName
    }
  },
  computed: {

  },
  watch: {
    defaultActiveName(val, old) {
      this.activeName = val
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
      const activeName = this.activeName
      this.$emit('handleClick', { tab, event, activeName })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.basic-tabs{
  /deep/ .el-tabs__item{
    color: $tColorContent;
    font-size: 14px;
  }

  /deep/ .is-active{
    color: $activeColor;
  }
}
</style>
