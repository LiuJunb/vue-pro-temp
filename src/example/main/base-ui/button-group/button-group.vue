<template>
  <div class="button-group">
    <h1>{{ msg }} Page</h1>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'ButtonGroup'
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
.button-group{

}
</style>
