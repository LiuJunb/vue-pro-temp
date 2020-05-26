<template>
  <div
    class="b-asider-menu">
    <div
      class="btn-collapse"
      @click="handleCollapse">
     <i
       v-if="isCollapse"
       class="el-icon-s-unfold">
     </i>
     <i
       v-if="!isCollapse"
       class="el-icon-s-fold">
     </i>
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
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.name}}</span>
        </el-menu-item>
        <!-- else 是二级菜单-->
        <el-submenu
          v-else
          :key="menu.id+''"
          :index="menu.id+''">
          <!-- 目录 -->
          <template slot="title">
            <i :class="menu.icon"></i>
            <span slot="title">{{menu.name}}</span>
          </template>

          <template v-for="(bmenu) in menu.children">
            <!-- if 二级菜单-->
            <el-menu-item
              v-if="bmenu.children.length<=0"
              :key="bmenu.id+''"
              :index="menu.id + '-' + bmenu.id">
              {{bmenu.name}}
            </el-menu-item>
            <!-- else 三级目录-->
            <el-submenu
              v-else
              :key="bmenu.id+''"
              :index="menu.id + '-' + bmenu.id">
              <span slot="title">{{bmenu.name}}</span>
              <el-menu-item
                v-for="(cmenu) in bmenu.children"
                :key="menu.id + '-' + bmenu.id +'-' + cmenu.id"
                :index="menu.id + '-' + bmenu.id +'-' + cmenu.id">
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
 *@ 参数
 *
 *@ 事件
 *
*/
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
            type: 'dir',
            url: '/main/detainees/inmates',
            children: [
              {
                icon: 'el-icon-setting',
                id: 11,
                level: 2,
                name: '选项一',
                type: 'menu',
                url: '/main/detainees/inmates',
                children: []
              },
              {
                icon: 'el-icon-setting',
                id: 12,
                level: 2,
                name: '菜单一',
                type: 'dir',
                url: '/main/detainees/inmates',
                children: [
                  {
                    icon: 'el-icon-setting',
                    id: 121,
                    level: 3,
                    name: '选项一',
                    type: 'dir',
                    url: '/main/detainees/inmates',
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
            type: 'dir',
            url: '/main/detainees/inmates',
            children: []
          },
          {
            icon: 'el-icon-setting',
            id: 3,
            level: 1,
            name: '导航三',
            type: 'dir',
            url: '/main/detainees/inmates',
            children: [
              {
                icon: 'el-icon-setting',
                id: 31,
                level: 2,
                name: '选项一',
                type: 'dir',
                url: '/main/detainees/inmates',
                children: []
              },
              {
                icon: 'el-icon-setting',
                id: 32,
                level: 2,
                name: '选项二',
                type: 'dir',
                url: '/main/detainees/inmates',
                children: []
              }
            ]
          }
        ]
      }
    },
    defaultSelect: {
      type: String,
      default: '1-12-121'
    },
    width: {
      type: Number,
      default: 220
    },
    collapse: {
      type: Boolean,
      default: false
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
      this.defaultActive = newV
    },
    collapse: function(newV, oldV) {
      this.isCollapse = newV
    }
  },
  methods: {
    // 根据 key 递归获取 menu
    getMenuByIdStr(idStr) {
      let menu = null
      if (idStr) {
        // ['1', '21']
        const ids = idStr.split('-')
        const id = parseInt(ids.pop()) // 21
        menu = this.getMenuById(id, this.menuList)
      }
      return menu
    },
    // 根据id 递归获取 menu
    getMenuById(id, menuList) {
      if (menuList === undefined || menuList === null) return null
      for (const aMenu of menuList) {
        if (aMenu.id === id) {
          return aMenu
        } else if (aMenu.children && aMenu.children.length > 0) {
          const bMenu = this.getMenuById(id, aMenu.children)
          if (bMenu) {
            return bMenu
          }
        }
      }
      return null
    },
    handleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    handleSelect(key, keyPath) {
      const menu = this.getMenuByIdStr(key)
      this.$router.push(menu.url)
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
  .btn-collapse{
    line-height: 32px;
    padding: 5px 10px 5px 20px;
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
