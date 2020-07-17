<template>
  <div class="router">
    <br>
    <b-title-tag name="1.路由的规范"></b-title-tag>
    <p>1.用约定路由，自动注册路由。</p>
    <p>2.在页面组件的同级目录下，新建一个route.js文件，来编约定路由</p>
    <p>3.在src/views的目录下的load-routes.js文件，会自动加载路由</p>
    <p>4.在src/router的目录下的 register-routes.js文件，会自动组装路由</p>
    <p>5.在src/router的目录下的 index.js文件，会自动注册路由</p>
    <p>6.路由最多支持3级的嵌套。需要四级的需要手动修改register-routes.js文件</p>

    <b-title-tag name="2.编写约定路由"></b-title-tag>
    <p>1.编写约定路由的规范 </p>
    编写一级路由( http://127.0.0.1/login )
    <code-h
      lang="js"
      content='
      // 没有启用懒加载路由
      // import Login from "./login.vue"
      // 启用了懒加载路由
      const Login = () => import(/* webpackChunkName: "login" */ "./login.vue")
      export default {
        path: "/login", // 路由的路劲，一级路由需要 /
        name: "login", // 路由的名称
        pname: "", // 父亲路由的名称
        level: 1, // 一级路由,最多支持3级路由
        component: Login,
        children: [
        ],
        meta: {
          keepAlive: false, // 需不需要缓存
          requireAuth: false // 需不需要登录才能访问
        }
      }
    '>
    </code-h>
    编写一级路由( http://127.0.0.1/main )
    <code-h
      lang="js"
      content='
      // 没有启用懒加载路由
      // import Main from "./main.vue"
      // 启用了懒加载路由
      const Main = () => import(/* webpackChunkName: "main" */ "./main.vue")
      export default {
        path: "/main", // 路由的路劲，一级路由需要 /
        name: "main", // 路由的名称
        pname: "", // 父亲路由的名称
        level: 1, // 一级路由,最多支持3级路由
        component: Main,
        children: [
        ],
        meta: {
          keepAlive: false, // 需不需要缓存
          requireAuth: false // 需不需要登录才能访问
        }
      }
    '>
    </code-h>
    编写二级路由 ( http://127.0.0.1/main/usermanage )
    <code-h
      lang="js"
      content='
      // 没有启用懒加载路由
      // import Usermanage from "./usermanage.vue"
      // 启用了懒加载路由
      const Usermanage = () => import(/* webpackChunkName: "usermanage" */ "./usermanage.vue")
      export default {
        path: "usermanage", // 二级路由前面没有/
        name: "usermanage", // 路由的名称
        pname: "main", // 父亲路由的名称
        level: 2, // 二级路由（number类型）
        component: Usermanage,
        children: [
        ],
        meta: {
          keepAlive: true, // 指定页面需不需要缓存
          requireAuth: true // 指定页面需不需要登录才能访问
        }
      }

    '>
    </code-h>
    编写三级路由(用的比较少) ( http://127.0.0.1/main/usermanage/role )
    <code-h
      lang="js"
      content='
      // 没有启用懒加载路由
      // import Role from "./role.vue"
      // 启用了懒加载路由
      const Role = () => import(/* webpackChunkName: "role" */ "./role.vue")
      export default {
        path: "role", // 三级路由前面没有/
        name: "role",
        pname: "usermanage", // 父亲路由的名称
        level: 3, // 三级路由（number类型）
        component: Role,
        children: [
        ],
        meta: {
          keepAlive: false, // 指定页面需不需要缓存
          requireAuth: false // 指定页面需不需要登录才能访问
        }
      }
    '>
    </code-h>
    <p>2.上面编写的三级路由等价于</p>
    <code-h
      lang="js"
      content='
      [
        {
          path: "/login", // 一级路由前面有/
          name: "login",
          pname: "", // 父亲路由的名称
          level: 1, // 一级路由（number类型）
          component: Login,
          children: [
          ],
          meta: {
            keepAlive: false, // 指定页面需不需要缓存
            requireAuth: false // 指定页面需不需要登录才能访问
          }
        },
         {
          path: "/main", // 一级路由前面没/
          name: "main",
          pname: "", // 父亲路由的名称
          level: 1, // 一级路由（number类型）
          component: Main,
          children: [
            {
              path: "usermanage", // 二级路由前面没有/
              name: "usermanage", // 路由的名称
              pname: "main", // 父亲路由的名称
              level: 2, // 二级路由（number类型）
              component: Usermanage,
              children: [
                {
                  path: "role", // 三级路由前面没有/
                  name: "role",
                  pname: "usermanage", // 父亲路由的名称
                  level: 3, // 三级路由（number类型）
                  component: Role,
                  children: [
                  ],
                  meta: {
                    keepAlive: false, // 指定页面需不需要缓存
                    requireAuth: false // 指定页面需不需要登录才能访问
                  }
                }
              ],
              meta: {
                keepAlive: true, // 指定页面需不需要缓存
                requireAuth: true // 指定页面需不需要登录才能访问
              }
            }
          ],
          meta: {
            keepAlive: false, // 指定页面需不需要缓存
            requireAuth: false // 指定页面需不需要登录才能访问
          }
        }
      ]
    '>
    </code-h>

   <b-title-tag name="3.自动注册路由的原理"></b-title-tag>
   <p>1.自动加载路由</p>
   <p>在src/views的目录下的load-routes.js文件，会自动加载route.js文件编写的路由配置 </p>
   <code-h
      lang="js"
      content='
      [
        {
          path: "/login", // 一级路由前面有/
          name: "login",
          pname: "", // 父亲路由的名称
          level: 1, // 一级路由（number类型）
          component: Login,
          children: [
          ],
          meta: {
            keepAlive: false, // 指定页面需不需要缓存
            requireAuth: false // 指定页面需不需要登录才能访问
          }
        },
        {
          path: "/main", // 一级路由前面没/
          name: "main",
          pname: "", // 父亲路由的名称
          level: 1, // 一级路由（number类型）
          component: Main,
          children: [
          ],
          meta: {
            keepAlive: false, // 指定页面需不需要缓存
            requireAuth: false // 指定页面需不需要登录才能访问
          }
        },
        {
          path: "usermanage", // 二级路由前面没有/
          name: "usermanage", // 路由的名称
          pname: "main", // 父亲路由的名称
          level: 2, // 二级路由（number类型）
          component: Usermanage,
          children: [
          ],
          meta: {
            keepAlive: true, // 指定页面需不需要缓存
            requireAuth: true // 指定页面需不需要登录才能访问
          }
        },
        {
          path: "role", // 三级路由前面没有/
          name: "role",
          pname: "usermanage", // 父亲路由的名称
          level: 3, // 三级路由（number类型）
          component: Role,
          children: [
          ],
          meta: {
            keepAlive: false, // 指定页面需不需要缓存
            requireAuth: false // 指定页面需不需要登录才能访问
          }
        }
      ]
    '>
    </code-h>
    <p>2.自动组装路由</p>
    <p>在src/router的目录下的 register-routes.js文件，会自动组装路由，组装结构如下：</p>
    <code-h
      lang="js"
      content='
      [
        {
          path: "/login", // 一级路由前面有/
          name: "login",
          pname: "", // 父亲路由的名称
          level: 1, // 一级路由（number类型）
          component: Login,
          children: [
          ],
          meta: {
            keepAlive: false, // 指定页面需不需要缓存
            requireAuth: false // 指定页面需不需要登录才能访问
          }
        },
         {
          path: "/main", // 一级路由前面没/
          name: "main",
          pname: "", // 父亲路由的名称
          level: 1, // 一级路由（number类型）
          component: Main,
          children: [
            {
              path: "usermanage", // 二级路由前面没有/
              name: "usermanage", // 路由的名称
              pname: "main", // 父亲路由的名称
              level: 2, // 二级路由（number类型）
              component: Usermanage,
              children: [
                {
                  path: "role", // 三级路由前面没有/
                  name: "role",
                  pname: "usermanage", // 父亲路由的名称
                  level: 3, // 三级路由（number类型）
                  component: Role,
                  children: [
                  ],
                  meta: {
                    keepAlive: false, // 指定页面需不需要缓存
                    requireAuth: false // 指定页面需不需要登录才能访问
                  }
                }
              ],
              meta: {
                keepAlive: true, // 指定页面需不需要缓存
                requireAuth: true // 指定页面需不需要登录才能访问
              }
            }
          ],
          meta: {
            keepAlive: false, // 指定页面需不需要缓存
            requireAuth: false // 指定页面需不需要登录才能访问
          }
        }
      ]
    '>
    </code-h>
    <p>3.自动注册路由</p>
    <p>在src/router的目录下的 index.js 文件，会自动注册路由</p>
        <code-h
      lang="js"
      content='
      import Vue from "vue"
      import VueRouter from "vue-router"
      import ARoutes from "../views/load-routes.js"
      Vue.use(VueRouter)
      const routes = [
        {
          path: "/",
          redirect: "/main"
        },
        ...ARoutes
      ]
    '>
    </code-h>
    <br>
  </div>
</template>

<script>
// import {
//
// } from './page-config'
export default {
  name: 'Router',
  components: {

  },
  mixins: [],
  props: {
    msg: {
      type: String,
      default: 'Router'
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
.router{
  font-size: 15px;
}
</style>
