<template>
  <div class="code-specification">
    <b-title-tag name="1.命名规范"></b-title-tag>
    <br>
    <p>
      1.项目中的文件夹、文件统一使用小写命名，如果有多个单词则使用（-）中划线来连接。建议命名不要超过3个单词
    </p>
    <p>
      2.组件名称的命名使用单词首字母大写，如果有多个单词也是每个单词首字母大写。建议命名不要超过3个单词
    </p>

  </div>
</template>

<script>
export default {
  name: 'CodeSpecification',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'CodeSpecification'
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
.code-specification{
  font-size: 15px;
}
</style>
