<template>
  <div class="main">
    <el-container>
      <el-header>
        <span class="title">
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
              HYZS Admin BaseUI
            </el-col>
            <el-col :span="3">
              4
            </el-col>
          </el-row>

          </span>
      </el-header>
      <el-container>
        <el-aside width="null">
          <b-aside-menu
            ref='asideMenu'
            :menuList="menuList"
            :defaultSelect="defaultSelect"
            :width='230'>
            <!-- <template v-slot:menu-btn>
              <a href="#">aaaaaaaaaaaaaaa</a>
            </template> -->
          </b-aside-menu>
        </el-aside>
        <el-container class="scrollbar__wrap">
          <el-main>
            <b-smart-breadcrumb
              :menuList="menuList"
              :otherList="otherList">
            </b-smart-breadcrumb>
            <router-view/>
          </el-main>
          <el-footer></el-footer>
        </el-container>
      </el-container>
    </el-container>

    <el-backtop target=".main .scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
import {
  httpGet,
  httpPost
} from '@/http/index.js'
import {
  menuList
} from '@/utils/asider-menu.js'
import {
  otherList
} from '@/config/index.js'
import {
  AsiderMenu
} from '@/base-ui/src'
import logo3_img from '@/assets/logo3.png'
const { MenuUtils } = AsiderMenu
export default {
  name: 'Main',
  components: {

  },
  data() {
    return {
      menuList,
      otherList,
      logo3_img,
      defaultSelect: null
    }
  },
  created() {
    this.testHttp()
    this.testStore()
  },
  mounted() {
    this.initMenuSelect()
  },
  methods: {
    initMenuSelect() {
      if (this.$refs.asideMenu) {
        const menu = MenuUtils.getMenuByKey('url', this.$route.path, this.menuList)
        if (menu) {
          this.defaultSelect = menu.id + ''
        } else {
          // 刷新的时候没有找到，那么找菜单的上一级
          const otherMenu = MenuUtils.getMenuByKey('url', this.$route.path, this.otherList)
          if (otherMenu) {
            const othMenu = MenuUtils.getMenuByKey('url', otherMenu.parentUrl, this.menuList)
            if (othMenu) {
              this.defaultSelect = othMenu.id + ''
            }
          }
        }
      }
    },
    testStore() {
      this.$store.dispatch('login/login', { name: '刘军', age: 12 })
        .then((res) => {
          console.log(res)
        })
      // console.log(this.$store.getters['login/user'])
    },
    testHttp() {
      httpGet('/home1', {
        name: '刘云',
        age: 20
      }).then((res) => {
        console.log(res.data)
      })

      httpPost('/home2', {
        age: '202',
        name: '刘军2'
      },
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }).then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="scss">
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
    background-color: $theme;
    color: #333;
    text-align: center;
    line-height: $headerHeight;
    .title{
      color: white;
    }
    .logo {
      margin: 10px 0px;
    }
  }
  .el-footer{
    background-color: $contentBgColor;
    color: #333;
    margin: 0px 20px;
    padding: 0px;
    text-align: center;
    line-height: $footerHeight;
    height: $footerHeight !important;
  }

  .el-aside {
    height: $asideHeight;
  }

  .el-main {
    margin: 20px 0px 20px 20px;
    padding: 0px;
    background-color: white;
    color: #333;
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
}
</style>
