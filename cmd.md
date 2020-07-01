vue-temp-cli addPage advanced-input -d src/example/main/base-ui/advanced-input
vue-temp-cli addPage detail -d src/example/main/base-ui/smart-breadcrumb/detail



vue-temp-cli addCom advanced-input -d src/base-ui/src/components/advanced-input/src


脚手架：

1.修改生成的store 添加 //todo ...
2.添加main 的store
3.修改分页种的高级搜索的配置，抽取出（labelWidth, 和 columnWidth）
4.修改路由的配置
  meta: {
    requireAuth: true // 该也买你需要登录才能访问
  }

后台系统：
  完善登录页面  