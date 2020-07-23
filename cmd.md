vue-temp-cli addPage advanced-input -d src/example/main/base-ui/advanced-input
vue-temp-cli addPage detail -d src/example/main/base-ui/smart-breadcrumb/detail

vue-temp-cli addPage plugin -d src/example/main/introduction/plugin
vue-temp-cli addPage router -d src/example/main/introduction/router
vue-temp-cli addPage newpage -d src/example/main/introduction/newpage
vue-temp-cli addPage newstore -d src/example/main/introduction/newstore
vue-temp-cli addPage newservice -d src/example/main/introduction/newservice

vue-temp-cli addPage mockjs -d src/example/main/introduction/mockjs
vue-temp-cli addPage elementstyle -d src/example/main/introduction/elementstyle
vue-temp-cli addPage hyzs -d src/example/main/introduction/hyzs
vue-temp-cli addPage permissions -d src/example/main/introduction/permissions
vue-temp-cli addPage theme -d src/example/main/introduction/theme
vue-temp-cli addPage proxy -d src/example/main/introduction/proxy



vue-temp-cli addCom advanced-input -d src/base-ui/src/components/advanced-input/src


脚手架：

1.修改生成的store 添加 //todo ...
2.添加main 的 store
3.修改分页种的高级搜索的配置，抽取出（labelWidth, 和 columnWidth）
4.修改路由的配置
  meta: {
    keepalive:true,
    title:'',
    savedPosition:{ x:0, y:0 }
    requireAuth: true // 该也买你需要登录才能访问
  }
5.修改路由的配置(scrollBehier, afterEach)
6.修改 <keepalive> <router-view></router-view> </keepalive>
7.指定哪一个网络请求 不需要进度条

8.分页器添加 背景

9.

后台系统：
  完善登录页面  