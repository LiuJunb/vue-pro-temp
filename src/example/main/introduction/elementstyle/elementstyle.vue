<template>
  <div class="elementstyle">
    <b-title-tag name="1.重写element-ui的样式"></b-title-tag>
    <code-h
      lang="css"
      content='
    .advanced-input{

      <!-- 使用样式的穿透技术 /deep/ ，重写element-ui的样式 -->
      /deep/ .cus-width{
        .el-form-item__content,
        .el-form-item{
          width: 100%;
        }
        .el-select{
          width: 60%;
        }
      }

    }
    '></code-h>

  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'Elementstyle',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Elementstyle'
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
.elementstyle{

}
</style>
