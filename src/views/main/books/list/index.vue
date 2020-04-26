<template>
  <div class="list">
    list 放三级路由
    <router-link to="/main/goodslist/create">create</router-link> |
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'List',
  components: {

  }
}
</script>

<style lang="scss">
.list{

}
</style>
