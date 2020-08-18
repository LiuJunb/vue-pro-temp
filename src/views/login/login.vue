<template>
  <div class="login">
    <!-- header -->
    <section class="header"></section>
    <!-- content -->
    <section class="login-panel">
      <div class="title">登录</div>
      <b-advanced-search
        :ref="loginForm"
        :formItems="adLogin"
        :style="{width:'300px'}"
        @handleSubmit="handleSubmit"
      >
      <!-- 输入验证码 -->
      <template v-slot:check="slotProps">
        <el-input
          v-model="slotProps.data[slotProps.row.fieldId]"
          v-bind="slotProps.row"
          @keyup.enter="slotProps.refForm.onSubmit()">
          <template slot="append">
            <span
              class="check-code"
              :style="getBgImg"
              @click="changeCaptcha"
              >
            </span>
          </template>
        </el-input>
      </template>

      <!-- 登录按钮 -->
      <template v-slot:form-subit="slotProps">
        <el-button
          type="primary"
          :style="{width:'100%'}"
          @click="slotProps.refForm.onSubmit()"
          >
          登录
        </el-button>
      </template>
      </b-advanced-search>
    </section>
  </div>
</template>

<script>
import {
  adLogin
} from './page-config'
import {
  userApi,
  baseURL
} from '@/config/index.js'
export default {
  name: 'Login',
  components: {

  },
  data() {
    return {
      loginForm: 'loginForm',
      adLogin,
      checkCodeImg: `${baseURL}${userApi}/sys/user/captcha?t=${new Date()}`
    }
  },
  computed: {
    getBgImg() {
      const url = `url('${this.checkCodeImg}')`
      return {
        backgroundImage: url
      }
    }
  },
  created() {
    this.keyupSubmit()
  },
  methods: {
    keyupSubmit() {
      document.onkeydown = e => {
        const _key = window.event.keyCode
        if (_key === 13) {
          if (this.$refs[this.loginForm]) {
            this.$refs[this.loginForm].onSubmit()
          }
        }
      }
    },
    handleSubmit(params) {
      console.log('params=', params)
      this.login(params)
    },
    login(params) {
      // this.$router.push(`/main/demo`)
      this.$router.push(`/demo`)

      // this.$store.dispatch('login/login', params)
      //   .then((res) => {
      //     if (res.code === 0) {
      //       sessionStorage.setItem('token', res.data.auth_token)
      //       sessionStorage.setItem('user', JSON.stringify(res.data))
      //       // sessionStorage.setItem('permissions', JSON.stringify(res.data.permissions))
      //       // 跳转到首页
      //       this.$router.push(`/main/dash-board`)
      //     }
      //   })
    },
    changeCaptcha() {
      this.checkCodeImg = `${baseURL}${userApi}/sys/user/captcha?t=${new Date()}`
    }
  }
}
</script>

<style lang="scss">
.login{
  // background: $bgColorF0;
  height: 100%;
  text-align: center;
  .header{
    height: 80px;
  }
  .login-panel{
    margin-top: 7%;
    display: inline-block;
    border: 1px solid $tableBorderColor;
    padding: 20px;
    .title{
       margin-bottom: 20px;
    }
    .el-input-group__append{
      width: 80px;
      padding: 0px;
      position: relative;
    }
    .check-code{
      position: absolute;
      cursor: pointer;
      top:0px;
      left: 0px;
      width: 80px;
      height: 38px;
      background-size: 100% 100%;
    }
    .advanced-search{
      margin: 0px auto;

    }
  }
}
</style>
