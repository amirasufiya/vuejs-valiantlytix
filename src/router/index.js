import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Merchants from '../views/merchants/Merchants.vue'
import MerchantDetails from '../views/merchants/MerchantDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/merchants',
    name: 'Merchants',
    component: Merchants
  },
  {
    path: '/merchants/:id',
    name: 'MerchantDetails',
    component: MerchantDetails,
    props: true
  },
  // redirect
  {
    path: '/all-merchants',
    redirect: '/merchants'
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    name : 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
