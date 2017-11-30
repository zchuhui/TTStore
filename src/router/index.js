import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Cart from '@/views/Cart'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/goodslist',
      name: 'goodsList',
      component: GoodsList,
    },
    {
      path:'/cart/:cartId',
      name:'cart',
      component:Cart
    }
  ]
})
