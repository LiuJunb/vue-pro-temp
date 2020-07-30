<template>
  <div class="smart-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- :to="getToPath(item, index, breadcrumbs.length)" -->
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbs"
        :key="index">
        <a
          v-if="getToPath(item, index, breadcrumbs.length)"
          @click="goBack()"
        >
          {{item.name}}
        </a>
        <span v-else>{{item.name}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import {
  AsiderMenu
} from '@/base-ui/src'
const { MenuUtils } = AsiderMenu
export default {
  name: 'BSmartBreadcrumb',
  components: {

  },
  mixins: [],
  props: {
    // 在菜单列表的页面
    menuList: {
      type: Array,
      default: function() {
        return [
          {
            icon: 'el-icon-location',
            id: 1,
            level: 1,
            name: '项目简介',
            parentId: 0,
            type: 'dir',
            url: '/main',
            children: [
              {
                icon: 'el-icon-setting',
                id: 11,
                level: 2,
                name: '简介',
                parentId: 1,
                type: 'menu',
                url: '/main/introduce',
                children: []
              },
              {
                icon: 'el-icon-setting',
                id: 12,
                level: 2,
                name: '编写规范',
                parentId: 1,
                type: 'menu',
                url: '/main/code-specification',
                children: [
                ]
              }
            ]
          },
          {
            icon: 'el-icon-document',
            id: 2,
            level: 1,
            name: 'BaseUI组件',
            parentId: 0,
            type: 'dir',
            url: '/main/detainees/inmates',
            children: [
              {
                icon: 'el-icon-setting',
                id: 21,
                level: 2,
                name: 'b-asider-menu',
                parentId: 2,
                type: 'menu',
                url: '/main/asider-menu',
                children: [
                ]
              },
              {
                icon: 'el-icon-setting',
                id: 22,
                level: 2,
                name: 'b-advanced-search',
                parentId: 2,
                type: 'menu',
                url: '/main/advanced-search',
                children: [
                ]
              },
              {
                icon: 'el-icon-setting',
                id: 23,
                level: 2,
                name: 'b-button-group',
                parentId: 2,
                type: 'menu',
                url: '/main/button-group',
                children: [
                ]
              },
              {
                icon: 'el-icon-setting',
                id: 24,
                level: 2,
                name: 'b-advanced-table',
                parentId: 2,
                type: 'menu',
                url: '/main/advanced-table',
                children: [
                ]
              },
              {
                icon: 'el-icon-setting',
                id: 25,
                level: 2,
                name: 'b-status-text',
                parentId: 2,
                type: 'menu',
                url: '/main/status-text',
                children: [
                ]
              },
              {
                icon: 'el-icon-setting',
                id: 26,
                level: 2,
                name: 'b-tag-group',
                parentId: 2,
                type: 'menu',
                url: '/main/tag-group',
                children: [
                ]
              },
              {
                icon: 'el-icon-setting',
                id: 27,
                level: 2,
                name: 'smart-breadcrumb',
                parentId: 2,
                type: 'menu',
                url: '/main/smart-breadcrumb',
                children: [
                ]
              }

            ]
          }
        ]
      }
    },
    // 不是在菜单列表的页面
    otherList: {
      type: Array,
      default: function() {
        return [
          {
            icon: '0',
            id: 0,
            level: 0,
            type: '0',
            parentId: 0,

            parentUrl: '/main/smart-breadcrumb',
            url: '/main/smart-breadcrumb/detail',
            name: '详情',

            children: [
            ]
          }
        ]
      }
    }
  },
  data: function() {
    return {
      breadcrumbs: []
    }
  },
  computed: {

  },
  watch: {
    $route(to, from) {
      this.initBreadcrumbs()
    }
  },
  created() {

  },
  mounted() {
    this.initBreadcrumbs()
  },
  methods: {
    initBreadcrumbs() {
      let resultArrs = []
      const currrentPath = this.$route.path
      MenuUtils.getMenuByKey('url', currrentPath, this.menuList, resultArrs)
      if (resultArrs.length > 0) {
        this.breadcrumbs = resultArrs
      } else {
        resultArrs = []
        // 没有找到，去otherList里面找
        const otherMenu = MenuUtils.getMenuByKey('url', currrentPath, this.otherList)
        if (otherMenu) {
          MenuUtils.getMenuByKey('url', otherMenu.parentUrl, this.menuList, resultArrs)
          if (resultArrs.length > 0) {
            resultArrs.push(otherMenu)
            this.breadcrumbs = resultArrs
          }
        }
      }
    },
    getToPath(menuItem, currentIndex, lastOne) {
      // 是菜单并且是倒数第二个
      if (menuItem.type === 'menu' && currentIndex === lastOne - 2) {
        return {
          path: menuItem.url
        }
      // 不是菜单 或者 不是倒数第二个都不可以点击
      } else {
        return null
      }
    },
    goBack() {
      this.$router.go(-1)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.smart-breadcrumb{

}
</style>
