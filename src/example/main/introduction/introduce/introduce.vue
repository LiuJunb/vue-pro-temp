<template>
  <div class="introduce">
    <code-h
      lang="html"
      content='
        <au-button type="primary" @click="loading = !loading">按钮</au-button>
        <au-button type="primary" :disabled="true">按钮</au-button>
        <au-button type="primary" :loading="loading">按钮</au-button>
      '></code-h>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
    <h1>{{ msg }} Page</h1>
  </div>
</template>

<script>

export default {
  name: 'Introduce',
  components: {
  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Introduce'
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
.introduce{

}
</style>
