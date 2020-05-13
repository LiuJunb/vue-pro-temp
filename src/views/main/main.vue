<template>
  <div class="main">
    <!-- 使用base-ui的公共组件 -->
    <b-button></b-button>
    <!-- 使用了vant组件库 -->
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    main 放二级路 <span class="test-span">由</span> <br>
    <router-link to="/main/goodslist">goodslist</router-link> |
    <router-link to="/main/goodsdetail">goodsdetail</router-link>
    <br>
    <router-link to="/main/bookslist">bookslist</router-link> |
    <router-link to="/main/bookslist">booksdetail</router-link>
    <router-view/>

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
<<<<<<< HEAD
  .test-span{
    display: inline-block;
    height: pxToRem(100);
=======
   .test-span{
    display: inline-block;
    height: pxToRem(100); // 不需要px单位
>>>>>>> master
    width: pxToRem(200);
    background: pink;
  }
}
</style>
