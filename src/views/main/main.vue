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
  httpGet
} from '@/http/index.js'
export default {
  name: 'Main',
  components: {

  },
  created() {
    httpGet('/home', {
      age: '20',
      name: '刘军'
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
