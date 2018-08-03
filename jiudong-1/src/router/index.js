import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import User from '@/pages/user'
import Service from '@/pages/service'
import Cart from '@/pages/cart'
import Category from '@/pages/category'
import Produck from '@/pages/produck.vue'
import List from '@/pages/list.vue'
import Detail from '@/pages/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/produck',
      name: 'Produck',
      component: Produck
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
