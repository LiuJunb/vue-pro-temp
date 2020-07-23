<template>
  <div class="m-asider-menu">
    <b-title-tag name="b-asider-menu组件"></b-title-tag>
    <h4>1.默认的使用方式</h4>
    <b-aside-menu
      :width='230'>
      <!-- <template v-slot:menu-btn>
        <a href="#">aaaaaaaaaaaaaaa</a>
      </template> -->
    </b-aside-menu>
    <code-h
      lang="html"
      content='
      <b-aside-menu
        :width="230">
      </b-aside-menu>
    '></code-h>
    <h4>2.配置菜单列表</h4>
    <b-aside-menu
      defaultSelect="121"
      :menuList="menuList"
      :width='230'>
    </b-aside-menu>
    <code-h
      lang="js"
      content='
      // defaultSelect 默认选中 id = 121 的菜单项
      <b-aside-menu
        defaultSelect="121"
        :menuList="menuList"
        :width="230">
      </b-aside-menu>

      menuList= [
        {
          icon: "el-icon-location", // 菜单的icon,默认是element-ui的icon
          id: 1, // 菜单的id
          level: 1, // 指定是一，二，三级菜单
          name: "菜单一", // 菜单名称
          parentId: 0, // 菜单父亲的id
          type: "dir", // 是菜单还是目录
          url: "/main/xxx/xxx", // 超链接 或者 路由路径
          children: [ // 子菜单
            {
              icon: "el-icon-setting",
              id: 11,
              level: 2,
              name: "选项一",
              parentId: 1,
              type: "menu",
              url: "/main/xxx/xxx/xx",
              children: []
            },
            {
              icon: "el-icon-setting",
              id: 13,
              level: 2,
              name: "选项二超链接",
              parentId: 1,
              type: "menu",
              url: "http://www.baidu.com",
              children: []
            },
            {
              icon: "el-icon-setting",
              id: 12,
              level: 2,
              name: "菜单二",
              parentId: 1,
              type: "dir",
              url: "",
              children: [
                {
                  icon: "el-icon-setting",
                  id: 121,
                  level: 3,
                  name: "选项一",
                  parentId: 12,
                  type: "menu",
                  url: "",
                  children: []
                },
                {
                  icon: "el-icon-setting",
                  id: 122,
                  level: 3,
                  name: "选项二菜单",
                  parentId: 12,
                  type: "menu",
                  url: "http://www.baidu.com",
                  children: []
                }
              ]
            }
          ]
        },
        {
          icon: "el-icon-document",
          id: 2,
          level: 1,
          name: "菜单二",
          parentId: 0,
          type: "menu",
          url: "",
          children: []
        },
        {
          icon: "el-icon-document",
          id: 3,
          level: 1,
          name: "超链接菜单",
          parentId: 0,
          type: "menu",
          url: "http://www.baidu.com",
          children: []
        }
      ]
    '></code-h>
    <h4>3.收起菜单</h4>
    <b-aside-menu
      :collapse="true"
      :menuList="menuList"
      :width='230'>
    </b-aside-menu>
    <code-h
      lang="html"
      content="
      <b-aside-menu
        :collapse='true'
        :menuList='menuList'
        :width='230'>
      </b-aside-menu>
      "></code-h>
    <h4>4.是否显示折叠按钮</h4>
    <b-aside-menu
      :showBtn="false"
      :menuList="menuList"
      :width='230'>
    </b-aside-menu>
    <code-h
      lang="html"
      content="
      <b-aside-menu
        :showBtn='false'
        :menuList='menuList'
        :width='230'>
      </b-aside-menu>
      "></code-h>
    <h4>5.重写菜单的样式</h4>
    <b-aside-menu
      class="meun-style"
      :showBtn="true"
      :menuList="menuList"
      :width='230'>
    </b-aside-menu>
    <code-h
      lang="css"
      content="

      // 最外层菜单的ul : /deep/ 是样式的穿透，重写element-ui组件的样式也需要用到样式的穿透

      /deep/ .meun-style .b-el-menu-vertical{

        // 菜单选中，聚焦，悬浮的背景样式
        .el-menu-item:focus,
        .el-menu-item:hover,
        .el-menu-item.is-active{
          background-color: blanchedalmond;
          position: relative;
          color: white;
          &::before{
            content: '';
            width: 4px;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            background: burlywood;
          }
        }

      }

      "></code-h>

      <h4>属性：</h4>
    <code-h
      lang="html"
      content='
      @ 参数
        menuList:[] 菜单列表
        defaultSelect："1-11-111" 默认选中
        width：200 菜单的宽
        collapse：false 是否收起
        showBtn:true 是否显示折叠 button
        iconClass:"" 指定icon使用自定字体图标 font-family: "iconfont";的值
      @slot
        v-slot: menu-btn 自定义按钮
      @ 事件
      this.$emit("handleClickCurrentMenu", menu) 监听点击本身的菜单

      '></code-h>
  </div>
</template>

<script>
/*
 *@description: 这个是一个自定义button的组件，组件的命名需要以大写B开头
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-05-14 10:08:55
 *@version V0.1.0
 *@API:
 *@ 参数
 *
 *@ 事件
 *
*/
export default {
  name: 'BAsiderMenu',
  components: {

  },
  props: {
    btnName: {
      type: String,
      default: 'btn'
    }

  },
  data: function() {
    return {
      menuList: [
        {
          icon: 'el-icon-location',
          id: 1,
          level: 1,
          name: '菜单一',
          parentId: 0,
          type: 'dir',
          url: '/main/xxx/xxx',
          children: [
            {
              icon: 'el-icon-setting',
              id: 11,
              level: 2,
              name: '选项一',
              parentId: 1,
              type: 'menu',
              url: '',
              children: []
            },
            {
              icon: 'el-icon-setting',
              id: 13,
              level: 2,
              name: '选项二超链接',
              parentId: 1,
              type: 'menu',
              url: 'http://www.baidu.com',
              children: []
            },
            {
              icon: 'el-icon-setting',
              id: 12,
              level: 2,
              name: '菜单二',
              parentId: 1,
              type: 'dir',
              url: '',
              children: [
                {
                  icon: 'el-icon-setting',
                  id: 121,
                  level: 3,
                  name: '选项一',
                  parentId: 12,
                  type: 'dir',
                  url: '',
                  children: []
                },
                {
                  icon: 'el-icon-setting',
                  id: 122,
                  level: 3,
                  name: '选项二超链接',
                  parentId: 12,
                  type: 'dir',
                  url: 'http://www.baidu.com',
                  children: []
                }
              ]
            }
          ]
        },
        {
          icon: 'el-icon-document',
          id: 2,
          level: 1,
          name: '菜单二',
          parentId: 0,
          type: 'menu',
          url: '',
          children: []
        },
        {
          icon: 'el-icon-document',
          id: 3,
          level: 1,
          name: '超链接菜单',
          parentId: 0,
          type: 'menu',
          url: 'http://www.baidu.com',
          children: []
        }
      ]
    }
  }

}
</script>

<style lang="scss">
.m-asider-menu{
  font-size: 15px;

  // 最外层菜单的ul : /deep/ 是样式的穿透，重写element-ui组件的样式也需要用到样式的穿透
  /deep/ .meun-style .b-el-menu-vertical{
    // 菜单选中，聚焦，悬浮的背景样式
    .el-menu-item:focus,
    .el-menu-item:hover,
    .el-menu-item.is-active{
      background-color: blanchedalmond;
      position: relative;
      color: white;
      &::before{
        content: '';
        width: 4px;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        background: burlywood;
      }
    }
  }
}
</style>
