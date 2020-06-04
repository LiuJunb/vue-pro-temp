<template>
  <div class="login">
    <!-- header -->
    <section class="header"></section>
    <!-- content -->
    <section class="login-panel">
      <div class="title">登录</div>
      <b-advanced-search
        :formItems="adLogin"
        :style="{width:'300px'}"
        @handleSubmit="handleSubmit"
      >
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
export default {
  name: 'Login',
  components: {

  },
  data() {
    return {
      adLogin
    }
  },
  methods: {
    handleSubmit(params) {
      console.log('params=', params)
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
    .advanced-search{
      margin: 0px auto;

    }
  }
}
</style>
