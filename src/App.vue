<template>
  <div id="app">
    <div class="header">
      <!-- 头部布局 -->
      <el-header
      :style="isShowLayout"
      >
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
    </div>

    <div class="content">
      <!-- 内容布局 -->
      <router-view></router-view>
      <!-- 子应用 -->
      <div id="appContainer"></div>
    </div>

  </div>
</template>
<script>

import logo3_img from '@/assets/logo3.png'
import Shared from '@/shared/index'

export default {
  name: 'Main',
  components: {

  },
  data() {
    return {
      logo3_img
    }
  },
  computed: {
    isShowLayout() {
      const paths = ['/login']
      return {
        display: paths.includes(this.$route.path) ? 'none' : null
      }
    }
  },
  created() {
    // this.$store.dispatch('main/list', { id: 'a' })
    //   .then((res) => {

    //   })
  },
  mounted() {
    Shared.onGlobalStateChange((value, prev) => {
      console.log('[onGlobalStateChange2 - master]:', value, prev)
    })
    Shared.setGlobalState(() => {
      return {
        ignore: 'master',
        pushPath: '',
        user: {
          name: 'master'
        }
      }
    })
  },

  methods: {

  }
}
</script>

<style scoped lang="scss">
#app {
  height: 100%;
  // 不能滚动
  overflow: hidden;
  background: white;

  .header{
    background-color: $themeColor;
    text-align: center;
    line-height: $headerHeight;
    color: white;
    .logo {
      margin: 8px 0px;
    }
  }

  .content{
    height: $mainHeight;
  }

}
</style>
