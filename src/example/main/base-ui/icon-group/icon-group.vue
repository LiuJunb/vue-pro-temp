<template>
  <div class="icon-group">
    <br>
    <b-icon-group
      :iconList="iconList1"
    >
    </b-icon-group>
    <br>
    <b-icon-group
      :iconList="iconList2"
    >
    </b-icon-group>
    <br>
    <b-icon-group
      maxWidth='500px'
      pull="right"
      :iconList="iconList3"
    >
    </b-icon-group>
    <br>
    <b-icon-group
      :iconList="iconList4"
      maxWidth='200px'
      iconClass="test"
      :permissions="[]"
    >
    </b-icon-group>
    <br>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
import passImg from '@/assets/pwd.png'
export default {
  name: 'IconGroup',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'IconGroup'
    }
  },
  data: function() {
    return {
      passImg,
      iconList1: [
        {
          name: '编辑',
          icon: 'el-icon-edit'
        },
        {
          name: '发现',
          icon: 'el-icon-discover'
        },
        {
          name: '创建时间',
          color: 'red',
          nameStyle: {
            color: 'blue'
          },
          subname: '2018-2-20',
          subnameStyle: {
            color: 'gray',
            fontSize: '13px'
          },
          icon: 'el-icon-bell'
        },
        {
          name: '密码',
          color: 'blue'
        },
        {
          icon: 'el-icon-bell',
          color: 'red'
        }
      ],
      iconList2: [
        {
          name: '编辑',
          icon: 'el-icon-edit',
          img: passImg,
          color: '#3988FF',
          bgColor: '#EFF3FA',
          disabled: false,
          fontSize: '16px',
          btnPerm: ''
        },
        {
          name: '发现',
          img: passImg,
          color: 'green',
          disabled: false,
          fontSize: '18px',
          btnPerm: ''

        },
        {
          name: '创建时间',
          nameStyle: {
            color: 'black'
          },
          subname: '2018-2-20',
          subnameStyle: {
            color: 'gray'
          },
          icon: 'el-icon-bell',
          disabled: true
        },
        {
          name: '密码',
          color: 'blue',
          bgColor: 'red',
          disabled: true,
          fontSize: '16px',
          btnPerm: ''
        },
        {
          icon: 'el-icon-bell',
          color: 'red',
          bgColor: 'green'
        }
      ],
      iconList3: [
        {
          name: '1编辑没有权限',
          icon: 'el-icon-edit',
          fontSize: '18px',
          btnPerm: 'pp'
        },
        {
          name: '2发现有权限',
          icon: 'el-icon-discover',
          fontSize: '18px',
          btnPerm: ''

        }
      ],
      iconList4: [
        {
          name: '编辑',
          icon: 'el-icon-edit'
        },
        {
          name: '发现',
          icon: 'el-icon-discover'
        },
        {
          name: '创建时间',
          nameStyle: {
            color: 'black'
          },
          subname: '2018-2-20',
          subnameStyle: {
            color: 'gray',
            fontSize: '13px'
          },
          icon: 'el-icon-bell'
        },
        {
          name: '密码',
          color: 'blue'
        },
        {
          icon: 'el-icon-bell',
          color: 'red'
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

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon-group{

}
</style>
