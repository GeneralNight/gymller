import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import RegisterUser from '@/views/RegisterUser.vue'
import PickGym from '@/views/PickGym.vue'
import Dashboard from '@/views/Dashboard.vue'
import TrainingSheet from '@/views/TrainingSheet.vue'

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
    path: '/:studentId/pick-gym',
    name: 'PickGym',
    component: PickGym,
    props: true
  },
  {
    path: '/:studentId/:slug/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    props: true
  },
  {
    path: '/:studentId/:slug/dashboard/training-sheet/:sheetId',
    name: 'TrainingSheet',
    component: TrainingSheet,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
