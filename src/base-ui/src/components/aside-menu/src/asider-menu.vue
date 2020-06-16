<template>
  <div
    class="b-asider-menu">
    <div
      v-if="showBtn"
      class="btn-collapse"
      @click="handleCollapse">
      <slot
        name="menu-btn"
      >
        <i
          v-if="isCollapse"
          class="el-icon-s-unfold">
        </i>
        <i
          v-if="!isCollapse"
          class="el-icon-s-fold">
        </i>
      </slot>
    </div>

    <el-menu
      :default-active="defaultActive"
      :class="['b-el-menu-vertical']"
      :style="getUncollapseStyle"
      :collapse="isCollapse"
      v-bind="$attrs"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose">
      <template v-for="(menu) in menuList">
        <!-- if 是一级菜单-->
        <el-menu-item
          v-if="menu.children.length<=0"
          :key="menu.id"
          :index="menu.id+''">
          <!-- 一级菜单 -->
          <i :class="[iconClass,menu.icon]"></i>
          <span slot="title">{{menu.name}}</span>
        </el-menu-item>
        <!-- else 是二级菜单-->
        <el-submenu
          v-else
          :key="menu.id+''"
          :index="menu.id+''">
          <!-- 目录 -->
          <template slot="title">
            <i :class="[iconClass,menu.icon]"></i>
            <span slot="title">{{menu.name}}</span>
          </template>

          <template v-for="(bmenu) in menu.children">
            <!-- if 二级菜单-->
            <el-menu-item
              v-if="bmenu.children.length<=0"
              :key="bmenu.id+''"
              :index="bmenu.id+''">
              <!-- <i :class="bmenu.icon"></i> -->
              {{bmenu.name}}
            </el-menu-item>
            <!-- else 三级目录-->
            <el-submenu
              v-else
              :key="bmenu.id+''"
              :index="bmenu.id+''">
              <span slot="title">
                <i
                  :class="[iconClass,bmenu.icon]"
                  :style="{paddingBottom:'5px'}"></i>
                {{bmenu.name}}
              </span>
              <!-- 三级菜单 -->
              <el-menu-item
                v-for="(cmenu) in bmenu.children"
                :key="cmenu.id+''"
                :index="cmenu.id+''">
                <!-- <i :class="bmenu.icon"></i> -->
                {{cmenu.name}}
              </el-menu-item>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
    </el-menu>

  </div>
</template>

<script>
/*
 *@description: 这个是一个自定义：旁边菜单组件
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-05-14 10:08:55
 *@version V0.1.0
 *@API:
  @ 参数
    menuList:[] 菜单列表
    defaultSelect：'1-11-111' 默认选中
    width：200 菜单的宽
    collapse：false 是否收起
    showBtn:true 是否显示折叠 button
  @slot
    v-slot: menu-btn 自定义按钮

  @ 事件
  this.$emit('handleClickCurrentMenu', menu)
 *
*/
import MenuUtils from './menu-utils'
export default {
  name: 'BAsideMenu',
  components: {

  },
  // 定义 menu 菜单不存在的属性，如果存在则使用不用的名称
  props: {
    menuList: {
      type: Array,
      default: function() {
        return [
          {
            icon: 'el-icon-location',
            id: 1,
            level: 1,
            name: '导航一',
            parentId: 0,
            type: 'dir',
            url: '/main/xxx/xxx',
            children: [
              {
                icon: 'el-icon-setting',
                id: 11,
                level: 2,
                name: '选项一',
                parentId: 1,
                type: 'menu',
                url: '',
                children: []
              },
              {
                icon: 'el-icon-setting',
                id: 12,
                level: 2,
                name: '菜单一',
                parentId: 1,
                type: 'dir',
                url: '',
                children: [
                  {
                    icon: 'el-icon-setting',
                    id: 121,
                    level: 3,
                    name: '选项一',
                    parentId: 12,
                    type: 'dir',
                    url: '',
                    children: []
                  }
                ]
              }
            ]
          },
          {
            icon: 'el-icon-document',
            id: 2,
            level: 1,
            name: '导航二',
            parentId: 0,
            type: 'dir',
            url: '',
            children: []
          },
          {
            icon: 'el-icon-setting',
            id: 3,
            level: 1,
            name: '导航三',
            parentId: 0,
            type: 'dir',
            url: '/main/xxx',
            children: [
              {
                icon: 'el-icon-setting',
                id: 31,
                level: 2,
                name: '选项一',
                parentId: 3,
                type: 'dir',
                url: '',
                children: []
              },
              {
                icon: 'el-icon-setting',
                id: 32,
                level: 2,
                name: '选项二',
                parentId: 3,
                type: 'dir',
                url: '',
                children: []
              }
            ]
          }
        ]
      }
    },
    defaultSelect: {
      type: String,
      default: '11'
    },
    width: {
      type: Number,
      default: 220
    },
    collapse: {
      type: Boolean,
      default: false
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    iconClass: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isCollapse: this.collapse,
      defaultActive: this.defaultSelect
    }
  },
  computed: {
    // 菜单展开的样式
    getUncollapseStyle: function() {
      if (this.isCollapse) {
        return {}
      } else {
        return {
          width: this.width + 'px'
        }
      }
    }
  },
  watch: {
    defaultSelect: function(newV, oldV) {
      this.changeSelect(newV)
    },
    collapse: function(newV, oldV) {
      this.isCollapse = newV
    },
    $route(to, from) {
      // console.log('----------0')
      // console.log(from.path)
      // console.log(to.path)
      const menu = MenuUtils.getMenuByKey('url', to.path, this.menuList)
      if (menu) {
        this.changeSelect(menu.id + '')
      } else {
        // 没有找到，不需要更新选中菜单
      }
    }
  },
  methods: {
    // id 是字符串类型
    changeSelect(id) {
      this.defaultActive = id
    },
    handleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 菜单item的点击事件
    handleSelect(key, keyPath) {
      // console.log('select=', key, keyPath)
      const menu = MenuUtils.getMenuByKey('id', parseInt(key), this.menuList)
      if (menu.url) {
        if (menu.url !== this.$route.path) {
          this.$router.push(menu.url)
        } else {
          this.$emit('handleClickCurrentMenu', menu)
        }
      }
    },
    handleOpen(key, keyPath) {
      // console.log('open=', key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log('close=', key, keyPath)
    }
  }

}
</script>

<style lang="scss" scoped>
.b-asider-menu{
  height: 100%;
  max-width: 350px;
  text-align: left;
  .btn-collapse{
    padding: 5px 10px 2px 20px;
    // border-right: 1px solid #e6e6e6;
    &>i{
      font-size: 26px;
    }
  }
  // 菜单展开的样式
  // .b-el-menu-vertical:not(.el-menu--collapse) {
  //   width: 200px;
  //   min-height: 400px;
  // }

  // 最外层菜单的ul
  .b-el-menu-vertical{
    // 菜单选中，聚焦，悬浮的背景样式
    .el-menu-item:focus,
    .el-menu-item:hover,
    .el-menu-item.is-active{
      background-color: #ecf5ff;
      position: relative;
      &::before{
        content: '';
        width: 4px;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        background: skyblue;
      }
    }
  }
}
</style>
