<template>
  <div
    class="icon-group"
    :style="{maxWidth:maxWidth, textAlign:pull}"
  >
    <template v-for="(item, index) in iconList">
      <section
        v-if="showBtn(item)"
        :key="index"
        class="item"
        :style="[getSectionStyle(item)]"
        @click="handleIconClick(item)"
      >
        <slot name="icon">
          <i
            v-if="item.icon"
            :class="[iconClass,item.icon, 'i-icon']">
          </i>
          <img
            v-else-if="item.img"
            class="i-icon"
            :style="item.imgStyle"
            :src="item.img"
            alt="">
        </slot>
        <span
          v-if="item.name"
          class="name"
          :style="item.nameStyle">
          {{item.name}}
        </span>
        <span
          v-if="item.subname"
          class="subname"
          :style="item.subnameStyle">
            {{item.subname}}
        </span>
      </section>
    </template>
  </div>
</template>

<script>
/*
 *@description: 图表按钮组
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-06-18 14:43:58
 *@version V0.1.0
 *@API:
 *@ 参数
 *
 *@ 事件
 *    this.$emit('handleIconClick', item)
*/
import { hasPermission } from '../../../utils/permission.js'
// import passImg from '@/assets/pwd.png'
export default {
  name: 'BIconGroup',
  components: {

  },
  mixins: [],
  props: {
    // icon组 的配置列表
    iconList: {
      type: Array,
      default: function() {
        return [
          {
            name: '编辑',
            icon: 'el-icon-edit',
            img: '',
            color: '#3988FF',
            bgColor: '#EFF3FA',
            disabled: false,
            fontSize: '16px',
            btnPerm: ''
          },
          {
            name: '发现',
            icon: 'el-icon-discover',
            img: '',
            color: 'green',
            // bgColor: '',
            disabled: false,
            fontSize: '18px',
            btnPerm: ''

          },
          {
            name: '创建时间',
            nameStyle: {
              color: 'black'
            },
            subname: '2018-2-20',
            subnameStyle: {
              color: 'gray'
            },
            icon: 'el-icon-bell',
            img: '',
            color: 'blue',
            bgColor: 'red',
            disabled: true,
            fontSize: '16px',
            btnPerm: ''
          },
          {
            name: '密码',
            color: 'blue',
            bgColor: 'red',
            disabled: true,
            fontSize: '16px',
            btnPerm: ''
          },
          {
            icon: 'el-icon-bell',
            color: 'red',
            bgColor: 'green'
          }
        ]
      }
    },
    // icon 组的居中
    pull: {
      type: String,
      default: 'left' // left, right, center
    },
    // icon 组的最大宽
    maxWidth: {
      type: String,
      default: function() {
        return '100%'
      }
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
    },
    // icon 标签添加一个 class
    iconClass: {
      type: String,
      default: null
    }
  },
  data: function() {
    return {

    }
  },
  computed: {
    getSectionStyle() {
      return (item) => {
        const sty = {}
        if (item.fontSize) {
          sty.fontSize = item.fontSize
        }
        if (item.color) {
          sty.color = item.color
        }
        if (item.bgColor) {
          sty.backgroundColor = item.bgColor
        }

        // 不可以点击
        if (item.disabled) {
          sty.cursor = null
          sty.opacity = 0.3
        } else {
          sty.cursor = 'pointer'
        }

        return sty
      }
    },
    showBtn() {
      return (item) => {
        let result = true

        // sessionStorage.setItem('permissions', JSON.stringify(
        //   [
        //     'pp.list',
        //     'pp.detail'
        //   ]
        // ))

        // 该按钮有权限控制
        if (item.btnPerm) {
          if (this.permissions && this.permissions.length > 0) {
            // 使用传递进来的权限组
            // result = this.hasPermission(this.permissions, item.btnPerm)
            result = hasPermission(this.permissions, item.btnPerm)
          } else {
            // 使用sessionStorage中permissions的权限
            let pss = sessionStorage.getItem('permissions')
            if (pss) {
              pss = JSON.parse(pss)
            }
            // result = this.hasPermission(pss, item.btnPerm)
            result = hasPermission(pss, item.btnPerm)
          }
        }
        return result
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

    handleIconClick(item) {
      if (!item.disabled) {
        // console.log('item', item)
        this.$emit('handleIconClick', item)
      }
    }
  }

}
</script>

<!-- Add "
scoped"
attribute
to
limit
CSS
to
this
component
only
-->
<style
scoped
lang="scss">
.icon-group{
  .item{
    display: inline-block;
    margin: 5px 5px;
    font-size: 16px;
    border-radius: 50px;
    padding: 3px 9px 2px 9px;
    &:hover{
      opacity: 0.8;
    }
    .i-icon{
      width: 18px;
      height: 18px;
      vertical-align: top;
    }
    .name{

    }
  }
}
</style>
