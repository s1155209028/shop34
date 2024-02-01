import Vue from 'vue'
import Router from 'vue-router'

const Products = () => import('@/views/Products.vue');
const Info = () => import('@/views/Info.vue');


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },

    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ],
  mode: 'history'
})
