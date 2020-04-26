<template>
  <div class="detail">
    detail 放三级路由 <br>
    <router-link to="/main/goodsdetail/create">create</router-link> |
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Detail',
  components: {

  }
}
</script>

<style lang="scss">
.detail{

}
</style>
