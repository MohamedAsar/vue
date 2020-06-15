import Vue from 'vue'
import Router from 'vue-router'
import Deal from '@/components/Deal'
import Customer from '@/components/Customer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Deal',
      component: Deal
    },
    {
      path: '/customer',
      name: 'Customer',
      component: Customer
    }
  ]
})