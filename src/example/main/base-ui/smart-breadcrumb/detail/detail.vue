<template>
  <div class="detail">
    <h1>{{ msg }} Page</h1>
    <button @click="goback">back</button>
    <button @click="go">go</button>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'Detail',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Detail'
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
    goback() {
      this.$router.back()
    },
    go() {
      this.$router.go(-1)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.detail{

}
</style>
