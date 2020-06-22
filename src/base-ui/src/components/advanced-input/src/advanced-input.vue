<template>
  <div class="advanced-input">
    <template v-for="(formItem, index) in formItems">
      <el-form-item
        v-if="formItem.ItemType === InputType.default"
        :key="index"
        :label="formItem.labelName"
        :label-width="formItem.labelWidth"
        :prop="formItem.fieldId">
        <el-input
          v-model="formData[formItem.fieldId]"
          v-bind="formItem"
          >
          <template
            v-if="formItem.tooltip"
            slot="prefix">
            <el-tooltip
                  effect="light"
                  placement="top">
                  <div
                    slot="content"
                    v-html="formItem.tooltip">
                  </div>
                  <i class="el-icon-question"></i>
            </el-tooltip>
          </template>
        </el-input>
      </el-form-item>
    </template>
  </div>
</template>

<script>
import {
  InputType
} from '../../../utils/input-type.js'
export default {
  name: 'BAdvancedInput',
  components: {

  },
  mixins: [],
  props: {
    formItems: {
      type: Array,
      default: function() {
        return [

        ]
      }
    },
    formData: {
      type: Object,
      default: function() {
        return {

        }
      }
    }
  },
  data: function() {
    return {
      InputType
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
    /**
     * {
     *  username:'刘军'
     * }
     */
    initFormData(fieldIds) {
      Object.keys(fieldIds).forEach((key) => {
        // this.formData.username = fieldIds.username
        this.formData[key] = fieldIds[key]
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.advanced-input{

}
</style>
