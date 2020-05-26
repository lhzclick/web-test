import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/upload',
    name: 'Upload',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "upload" */ '../views/Upload.vue')
  },
  {
    path: '/choice',
    name: 'Choice',
    component: () => import(/* webpackChunkName: "choice" */ '../views/Choice.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue')
  },
  {
    path: '/orderDetail',
    name: 'OrderDetail',
    component: () => import(/* webpackChunkName: "orderDetail" */ '../views/OrderDetail.vue')
  },
  {
    path: '/paySuccess',
    name: 'PaySuccess',
    component: () => import(/* webpackChunkName: "about" */ '../views/PaySuccess.vue')
  }
  // OrderDetail
]

const router = new VueRouter({
  routes
})

export default router
