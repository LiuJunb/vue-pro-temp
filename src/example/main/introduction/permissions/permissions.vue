<template>
  <div class="permissions">
    <b-title-tag name="按钮权限"></b-title-tag>
    <h4>1.登录的时候获取按钮权限，并保存</h4>
    <code-h
      lang="js"
      content="
    login(params) {
        this.$store.dispatch('login/login', params)
          .then((res) => {
            if (res.code === 0) {
              sessionStorage.setItem('token', res.data.auth_token)
              sessionStorage.setItem('user', JSON.stringify(res.data))
              // 获取用户菜单和按钮的权限
              this.$store.dispatch('login/permissionTree')
                .then(response => {

                  if (response.data) {
                    // 把菜单权限存到sessionStorage
                    sessionStorage.setItem('menuList', JSON.stringify(mapMenuList(response.data)))
                    // 把按钮权限存到sessionStorage
                    sessionStorage.setItem('permissions', JSON.stringify(mapPermissonList(response.data)))
                    // permissions:['/sys/user/add','/sys/user/detele', ...]
                  }
                })
              this.$router.push(`/main/dash-board`)
            } else {
              this.changeCaptcha()
            }
          })
      },
      "></code-h>
    <h4>2.给需要权限的按钮配置权限</h4>
    <code-h
      lang="js"
      content='
      // 添加/删除/详情：按钮需要权限。查看：不需要
      <b-button-group
        :btnList="[
          {
            name: "添加",
            btnPerm:"/sys/user/add"
          },
          {
            name: "删除",
            btnPerm:"/sys/user/detele"
          },
          {
            name: "详情",
            btnPerm:"/sys/user/detail"
          },
          {
            name: "查看",
            btnPerm:""
          }
        ]"
      >
      </b-button-group>

      // 编辑：按钮需要权限。收藏：不需要
      <b-icon-group
        :iconList="[
          {
            name: "编辑",
            icon: "el-icon-edit",
            btnPerm:"/sys/user/edit"
          },
          {
            name: "收藏",
            icon: "el-icon-collect",
            btnPerm:""
          },
        ]"
      >
      </b-icon-group>
    '></code-h>

  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'Permissions',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Permissions'
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
.permissions{

}
</style>
