<template>
  <div class="basic-comps">
    <h1>{{ msg }} Page</h1>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'BasicComps',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'BasicComps'
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
.basic-comps{

}
</style>
