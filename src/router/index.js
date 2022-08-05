import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
