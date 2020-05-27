<template>
  <div class="m-asider-menu">
    m-asider-menu

    <b-aside-menu
      :menuList="menuList"
      :width='230'>
      <!-- <template v-slot:menu-btn>
        <a href="#">aaaaaaaaaaaaaaa</a>
      </template> -->
    </b-aside-menu>

  </div>
</template>

<script>
/*
 *@description: 这个是一个自定义button的组件，组件的命名需要以大写B开头
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-05-14 10:08:55
 *@version V0.1.0
 *@API:
 *@ 参数
 *
 *@ 事件
 *
*/
export default {
  name: 'BAsiderMenu',
  components: {

  },
  props: {
    btnName: {
      type: String,
      default: 'btn'
    }

  },
  data: function() {
    return {

    }
  }

}
</script>

<style lang="scss">
.m-asider-menu{

}
</style>
