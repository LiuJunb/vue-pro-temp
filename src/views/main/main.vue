<template>
  <div class="main">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="3">
            <b-logo
              :src="logo3_img"
              height='38px'
              width='120px'
            >
            </b-logo>
          </el-col>
          <el-col :span="18">
            华云中盛-后台系统
          </el-col>
          <el-col :span="3">
            admin
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="null">
          <b-aside-menu
            ref='asideMenu'
            :menuList="menuList"
            :defaultSelect="defaultSelect"
            :width='BaseStyle.$navWidth'>
          </b-aside-menu>

        </el-aside>
        <el-container >
          <!-- 面包屑 -->
           <b-smart-breadcrumb
              :menuList="menuList"
              :otherList="OtherList">
           </b-smart-breadcrumb>

          <el-main class="scrollbar__wrap">
              <!-- 二级路由占位符 ：:include=['DashBoard' 'xxx', 'xxx', 'xxx'] -->
              <!-- <keep-alive :include="['Example']"> -->
                <!-- keep-alive会缓存不活动的组件(包含改组件的子组件)实例，而不是销毁它们 -->
                <!-- <router-view></router-view> -->
              <!-- </keep-alive> -->
              <keep-alive>
                <router-view
                  v-if="$route.meta.keepAlive"
                ></router-view>
              </keep-alive>
              <router-view
                v-if="!$route.meta.keepAlive"
              ></router-view>
          </el-main>
          <el-footer></el-footer>
        </el-container>
      </el-container>
    </el-container>
    <el-backtop
      target=".main .scrollbar__wrap"
      :right="30"
      :bottom="100">
    </el-backtop>
  </div>
</template>

<script>
import BaseStyle from '@/styles/base.js'
import {
  menuList
} from '@/utils/asider-menu.js'
import {
  AsiderMenu
} from 'BaseUI'
import {
  OtherList
} from '@/config/index.js'
import logo3_img from '@/assets/logo3.png'
const { MenuUtils } = AsiderMenu
export default {
  name: 'Main',
  components: {

  },
  data() {
    return {
      logo3_img,
      BaseStyle,
      menuList,
      OtherList,
      defaultSelect: null
    }
  },
  created() {
    // this.$store.dispatch('main/list', { id: 'a' })
    //   .then((res) => {

    //   })
  },
  mounted() {
    this.initMenuSelect()
  },

  methods: {
    initMenuSelect() {
      const menu = MenuUtils.getMenuByKey('url', this.$route.path, this.menuList)
      if (menu) {
        this.defaultSelect = menu.id + ''
      } else {
        // 刷新的时候没有找到，那么找菜单的上一级
        const otherMenu = MenuUtils.getMenuByKey('url', this.$route.path, this.OtherList)
        if (otherMenu) {
          const othMenu = MenuUtils.getMenuByKey('url', otherMenu.parentUrl, this.menuList)
          if (othMenu) {
            this.defaultSelect = othMenu.id + ''
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main{
 height: 100%;
  .el-container{
    height: 100%;
    // 不能滚动
    overflow: hidden;
    background: white;
    .is-vertical{
      background: $bgColorF0;
    }
  }

  .el-header{
    background-color: $themeColor;
    text-align: center;
    line-height: $headerHeight;
    color: white;
    .logo {
      margin: 8px 0px;
    }

  }
  .el-footer{
    // background-color: green;
    margin: 0px 20px;
    padding: 0px;
    text-align: center;
    line-height: $footerHeight;
    height: $footerHeight !important;
  }

  .el-aside {
    height: $asideHeight;
    @include no-scroll-bar;
    // &::-webkit-scrollbar {
    //   display:none
    // }
    // -ms-scroll-chaining: chained;
    // -ms-overflow-style: none;
    // -ms-content-zooming: zoom;
    // -ms-scroll-rails: none;
    // -ms-content-zoom-limit-min: 100%;
    // -ms-content-zoom-limit-max: 500%;
    // -ms-scroll-snap-type: proximity;
    // -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
    // -ms-overflow-style: none;
  }
  // 面包屑
  .smart-breadcrumb{
    padding: 12px 20px;
  }
  // 可以滚动的内容
  .el-main {
    margin: 0px 0px 20px 20px;
    padding: 20px;
    background-color: white;
    // text-align: center;
    height: $mainHeight;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  //===========重写菜单的样式=========
  // 最外层菜单的ul
  /deep/ .el-aside,
  /deep/ .el-menu{
    background: $bgColorF1;
  }
  // 最外层菜单的ul
  /deep/ .b-el-menu-vertical{
    .el-menu-item:hover{
      background-color: #cee2ff ;
      &::before{
        background: #3988FF !important;
      }
    }
    // 菜单选中，聚焦，悬浮的背景样式
    .el-menu-item:focus,
    .el-menu-item.is-active{
      background-color: $menuSelColor;
      color: white;
      &::before{
        background: #3988FF !important;
      }
    }
  }
  //===========重写菜单的样式=========

}
</style>
