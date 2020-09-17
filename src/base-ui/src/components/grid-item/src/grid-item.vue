<template>
  <div
    :class="['grid-item', hasAnimate]"
    :style="getItemStyle(clickPerm)"
    @click="handleGridItemClick"
  >
    <slot></slot>
  </div>
</template>

<script>
/*
 *@description: 一个具有权限控制的 div 标签
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-08-20 15:43:40
 *@version V0.1.0
 *@API:
 *@ 参数
 *
 *@ 事件
 *    this.$emit('handleGridItemClick', e)
*/
import { hasPermission } from '../../../utils/permission.js'
export default {
  name: 'BGridItem',
  components: {

  },
  mixins: [],
  props: {
    // 配置点击的权限，如果没有配置，代表没有权限控制
    clickPerm: {
      type: String,
      default: ''
    },
    // 是否需要动画
    animate: {
      type: Boolean,
      default: false
    },
    // 用户所拥有的权限（不传递时，默认会去sessionStorage中查找permissions属性）
    permissions: {
      type: Array,
      default: function() {
        return [
          // 'pp.list'
          // 'pp.detail'
        ]
      }
    }
  },
  data: function() {
    return {

    }
  },
  computed: {
    getItemStyle() {
      return (clickPerm) => {
        if (!this.hasPrem(clickPerm)) {
          return {
            cursor: null
          }
        } else {
          return {
            cursor: 'pointer'
          }
        }
      }
    },
    hasAnimate() {
      return {
        'grid-item-animate': this.animate
      }
    }
  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    handleGridItemClick(e) {
      if (this.hasPrem(this.clickPerm)) {
        this.$emit('handleGridItemClick', e)
      } else {

      }
    },
    // 是否有点击的权限
    hasPrem(btnPerm) {
      let result = true
      // sessionStorage.setItem('permissions', JSON.stringify(
      //   [
      //     'pp.list',
      //     'pp.detail'
      //   ]
      // ))

      // 该按钮有权限控制
      if (btnPerm) {
        if (this.permissions && this.permissions.length > 0) {
          // 使用传递进来的权限组
          // result = this.hasPermission(this.permissions, item.btnPerm)
          result = hasPermission(this.permissions, btnPerm)
        } else {
          // 使用sessionStorage中permissions的权限
          let pss = sessionStorage.getItem('permissions')
          if (pss) {
            pss = JSON.parse(pss)
          }
          // result = this.hasPermission(pss, item.btnPerm)
          result = hasPermission(pss, btnPerm)
        }
      }
      return result
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid-item{
  transition: all .1s linear;
}
.grid-item-animate{
 &:hover {
    transform: scale(1.01,1.02);
    // box-shadow: 0 0 6px #999;
    transition: all .2s linear;
 }
}

</style>
