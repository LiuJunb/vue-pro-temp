<template>
  <div class="theme">
    <b-title-tag name="修改element-ui主题"></b-title-tag>
    <p>1.修改theme-chalk.scss文件</p>
    <code-h
      lang="css"
      content='
      /* 改变element-ui的主题色变量 */
      $--color-primary: #409EFF;
      $--color-success: #67C23A;
      $--color-warning: #E6A23C;
      $--color-danger: #F56C6C;
      .....
      .....
      .....
    '></code-h>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'Theme',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Theme'
    }
  },
  data: function() {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.theme{

}
</style>
