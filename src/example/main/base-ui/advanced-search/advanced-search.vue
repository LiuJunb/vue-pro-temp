<template>
  <div class="advanced-search">

    <b-advanced-search
       label-width="90px"
       :inline="true"
       size="small"
       :showBtn="false"
       @handleSubmit="handleSubmit"
    >
    </b-advanced-search>

    <b-advanced-search
       label-width="90px"
       :inline="true"
       size="small"
       @handleSubmit="handleSubmit"
    >
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
import {
  adSearchConfig
} from './page-config'
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
      adSearchConfig
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
    handleSubmit(formData) {
      console.log(new Date(formData.data1).toLocaleString())
      console.log(formData)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-search{

}
</style>
