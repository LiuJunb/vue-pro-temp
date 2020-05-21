<template>
  <div class="main">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import {
  httpGet,
  httpPost
} from '@/http/index.js'
export default {
  name: 'Main',
  components: {

  },
  data() {
    return {

    }
  },
  created() {
    this.testHttp()
    this.testStore()
  },
  methods: {
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
   .test-span{
    display: inline-block;
    height: pxToRem(100); // 不需要px单位
    width: pxToRem(200);
    background: pink;
  }
}
</style>
