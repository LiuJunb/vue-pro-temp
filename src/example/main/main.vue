<template>
  <div class="main">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="null">
          <b-aside-menu>
          </b-aside-menu>
        </el-aside>
        <el-container>
          <el-main>
            Main
            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
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
  height: 100%;
  .el-container{
    height: 100%;
  }

  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: $headerHeight;
  }
  .el-footer{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: $footerHeight;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    // text-align: center;
    height: $asideHeight;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
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
