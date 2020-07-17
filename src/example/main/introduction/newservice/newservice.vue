<template>
  <div class="newservice">
    <b-title-tag name="1.新建页面组件对应的-service层"></b-title-tag>
    <p>1)页面组件请求后台接口的代码写在 service 层</p>
    <p>2)src/service/ 下的目录 和 src/views/ 下的目录, 文件夹结构基本一样</p>
    <p>3)菜单列表页面+列表的详情/新建/编辑页面都公用一个store层和一个service层</p>
    <p>4)servce 层是负责从网路获取的数据的</p>
    <p>5)src/service/ 下面所有的模块会自动被load_services.js文件自动加载并导出,供store层导入</p>
    <p>5)service 层的目录结构如下：</p>
    <code-h
      lang="js"
      content='
      |   |-- service // 服务层代码
      |   |   |-- load_services.js // 自动导出所有服务
      |   |   |-- login
      |   |   |   `-- index.js
      |   |   |-- main
      |   |   |   |-- demo // demo以及detail页面对应的服务层
      |   |   |   |   `-- index.js
    '></code-h>

    <p>下面以新建demo页面以及对应detail页面的service层代码：</p>
    <b-title-tag name="2.新建demo页面以及detail页面的service层"></b-title-tag>
    <p>1.新建demo文件夹( src/service/main/demo )</p>
    <code-h
      lang="json"
      content='
      |   |-- service
      |   |   |-- load_services.js
      |   |   |-- login
      |   |   |   `-- index.js
      |   |   |-- main
      |   |   |   |-- demo // demo以及detail页面对应的服务层
      |   |   |   |   `-- index.js
    '></code-h>
    <p>2.在demo文件夹下新建index.js( src/service/main/demo/index.js )</p>

    <code-h
      lang="js"
      content='

      import { httpGet, httpPost } from "@/http/index.js"

      export const example_api = {
        dataUrl: "/home1",
        listUrl: "/tablelist",
        detailUrl: "/home1"
      }

      export default {

        getData: (payload, config) => {
          return httpPost(example_api.dataUrl, payload, config)
        },
        getList: (payload, config) => {
          return httpPost(example_api.listUrl, payload, config)
        },
        getDetail: (payload, config) => {
          return httpGet(example_api.detailUrl, payload, config)
        }

      }

    '></code-h>
    <p>3.demo页面和detail页面对应的service层新建完成</p>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'Newservice',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Newservice'
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
.newservice{
  font-size:15px;
}
</style>
