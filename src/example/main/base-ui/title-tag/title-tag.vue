<template>
  <div class="title-tag">
    <b-title-tag>
    </b-title-tag>
    <br>
    <b-title-tag
     fontSize='30px'
     color='red'
     class="tag2"
    >
    </b-title-tag>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'TitleTag',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'TitleTag'
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
.title-tag{
  // 修改伪类的样式
  /deep/ .tag2 .name{
    &::before{
      background: red;
    }
  }
}
</style>
