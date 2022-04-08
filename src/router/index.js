import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import RegisterUser from '@/views/RegisterUser.vue'
import PickGym from '@/views/PickGym.vue'
import Dashboard from '@/views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterUser
  },
  {
    path: '/:clientId/pick-gym',
    name: 'PickGym',
    component: PickGym,
    props: true
  },
  {
    path: '/:clientId/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
