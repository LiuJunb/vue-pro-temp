<template>
  <div class="main">
    main 放二级路由 <br>
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
</script>

<style lang="scss">
.main{

}
</style>
