<template>
  <div class="smart-breadcrumb">
    顶部
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>
    <h3>3</h3>

    <h3>3</h3>
    <h3>3</h3>
    <router-link to="/main/smart-breadcrumb/detail">Go to Bar</router-link>
    <el-button
     type="primary"
     @click="goToDetail()"
    >
      goToDetail
    </el-button>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'SmartBreadcrumb',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'SmartBreadcrumb'
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
    console.log('create smb')
    console.log(window.history)
    console.log(window.history.pushState)
  },
  mounted() {

  },
  methods: {
    goToDetail() {
      console.log(window.history.state.key)
      this.$router.push('/main/smart-breadcrumb/detail')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.smart-breadcrumb{

}
</style>
