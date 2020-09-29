import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/career',
    name: 'Career',
    component: () => import('../views/Career.vue')
  },
  {
    path: '/mockup',
    name: 'Mockup',
    component: () => import('../views/Mockup.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
