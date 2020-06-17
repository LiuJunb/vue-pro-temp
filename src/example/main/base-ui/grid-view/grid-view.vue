<template>
  <div class="grid-view">
    <b-grid-view
      :itemData="itemData"
      :hasPagination="false"
      :md="6"
      :lg="4"
      :xl="3"
    >
      <template v-slot:col-item="slotProps">
        <div class="gird-col1">
          {{slotProps.item.name}}
        </div>
      </template>
    </b-grid-view>

    <br>

    <b-grid-view
      :itemData="itemData"
      @handlePaginatonChange="handlePaginatonChange"
    >
      <template v-slot:col-item="slotProps">
        <div class="gird-col2">
          {{slotProps.item.name}}
        </div>
      </template>
    </b-grid-view>

    <br>

  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'GridView',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'GridView'
    }
  },
  data: function() {
    return {
      itemData: [
        {
          name: '大军',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军1',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军2',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军3',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军4',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军3',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军4',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军3',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        },
        {
          name: '小军4',
          age: '11',
          sex: '男',
          address: 'abc',
          email: '113345321@123'
        }
      ]
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
    handlePaginatonChange(pagination) {
      console.log(pagination)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grid-view{

  .gird-col1{
    border: 1px solid red;
    min-height: 80px;
  }
  .gird-col2{
    border: 1px solid green;
    min-height: 200px;
  }
}
</style>
