import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home'),
  },
  {
    path: '/*',
    redirect: '/',
  },
]

const router = new VueRouter({
  routes,
  mode: 'hash',
})

Vue.use(VueRouter)

export default router
