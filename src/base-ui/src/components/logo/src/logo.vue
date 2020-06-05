<template>
  <div
    class="logo"
    :style="{width:width,height:height}">
    <img
      :src="src"
      class="logo3"/>
  </div>
</template>

<script>
export default {
  name: 'BLogo',
  components: {

  },
  mixins: [],
  props: {
    src: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: '230px'
    },
    height: {
      type: String,
      default: '60px'
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

<!-- Add "
scoped"
attribute
to
limit
CSS
to
this
component
only
-->
<style scoped lang="scss">
.logo{
  height: 100%;
  .logo3{
    width: 100%;
  }
}
</style>
