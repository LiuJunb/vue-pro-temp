<template>
  <div id="app">
    <el-container>
      <!-- 头部布局 -->
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
      <!-- 内容布局 -->
      <keep-alive>
        <router-view
          v-if="$route.meta.keepAlive"
        ></router-view>
      </keep-alive>
      <router-view
        v-if="!$route.meta.keepAlive"
      ></router-view>
      <div id=""></div>
    </el-container>
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

<style lang="scss">
#app {
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
}
</style>
