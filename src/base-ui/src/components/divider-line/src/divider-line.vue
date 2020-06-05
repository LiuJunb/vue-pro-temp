<template>
  <div
    class="divider-line"
    :style="{height:height,backgroundColor:bgColor}">
  </div>
</template>

<script>
export default {
  name: 'BDividerLine',
  components: {

  },
  mixins: [],
  props: {
    height: {
      type: String,
      default: '20px'
    },
    bgColor: {
      type: String,
      default: '#F8F9FF'
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
.divider-line{

}
</style>
