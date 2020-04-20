import Vue from 'vue'
import VueRouter from 'vue-router'
import ARoutes from './register-routes.js'
// import Main from '../views/main/main.vue'
// import Login from '../views/login/login.vue'

// import GoodsList from '../views/main/goods/list/list.vue'
// import GoodsListCreate from '../views/main/goods/list/create/create.vue'
// import GoodsDetail from '../views/main/goods/detail/detail.vue'
// import GoodsDetailCreate from '../views/main/goods/detail/create/create.vue'

// import BooksList from '../views/main/books/list/list.vue'
// import BooksListCreate from '../views/main/books/list/create/create.vue'
// import BooksDetail from '../views/main/books/detail/detail.vue'
// import BooksDetailCreate from '../views/main/books/detail/create/create.vue'
console.log('Routes=', ARoutes)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  ...ARoutes
  // {
  //   path: '/main',
  //   name: 'main',
  //   component: Main,
  //   children: [
  //     {
  //       path: 'goodslist', // /main/goodslist
  //       name: 'goodslist',
  //       component: GoodsList,
  //       children: [
  //         {
  //           path: 'create', // /main/create
  //           name: 'create',
  //           component: GoodsListCreate
  //         }
  //       ]
  //     },
  //     {
  //       path: 'goodsdetail', // /main/goodsdetail
  //       name: 'goodsdetail',
  //       component: GoodsDetail,
  //       children: [
  //         {
  //           path: 'create', // /main/create
  //           name: 'create',
  //           component: GoodsDetailCreate
  //         }
  //       ]
  //     },

  //     {
  //       path: 'bookslist', // /main/goodslist
  //       name: 'bookslist',
  //       component: BooksList,
  //       children: [
  //         {
  //           path: 'create', // /main/create
  //           name: 'create',
  //           component: BooksListCreate
  //         }
  //       ]
  //     },
  //     {
  //       path: 'booksdetail', // /main/goodsdetail
  //       name: 'booksdetail',
  //       component: BooksDetail,
  //       children: [
  //         {
  //           path: 'create', // /main/create
  //           name: 'create',
  //           component: BooksDetailCreate
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: Login
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
