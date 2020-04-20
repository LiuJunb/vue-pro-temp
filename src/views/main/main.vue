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

export default {
  name: 'Main',
  components: {

  }
}
</script>

<style lang="scss">
.main{

}
</style>
