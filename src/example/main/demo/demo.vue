<template>
  <div class="demo">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'Demo',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Demo'
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
.demo{
  font-size:15px;
}
</style>
