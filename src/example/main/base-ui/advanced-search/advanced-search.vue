<template>
  <div class="advanced-search">
    <b-advanced-search>
     <!-- <template v-slot:form-subit="slotProps">
          <el-button
            type="default"
            @click="slotProps.refForm.onReset()"
            >
            重置
          </el-button>
     </template> -->
    </b-advanced-search>
  </div>
</template>

<script>
export default {
  name: 'AdvancedSearch',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'AdvancedSearch'
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
.advanced-search{

}
</style>
